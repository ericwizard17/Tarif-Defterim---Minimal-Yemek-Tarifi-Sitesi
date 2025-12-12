import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut as firebaseSignOut,
    onAuthStateChanged,
    User,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { UserProfile } from '../types/recipe';

/**
 * Sign up with email and password
 */
export const signUp = async (email: string, password: string, displayName: string): Promise<User> => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Update profile
        await updateProfile(user, { displayName });

        // Create user profile in Firestore
        const userProfile: UserProfile = {
            uid: user.uid,
            email: user.email!,
            displayName,
            createdAt: new Date().toISOString(),
            recipesCount: 0,
            followersCount: 0,
            followingCount: 0
        };

        await setDoc(doc(db, 'users', user.uid), userProfile);

        return user;
    } catch (error: any) {
        console.error('Sign up error:', error);
        throw new Error(error.message);
    }
};

/**
 * Sign in with email and password
 */
export const signIn = async (email: string, password: string): Promise<User> => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error: any) {
        console.error('Sign in error:', error);
        throw new Error(error.message);
    }
};

/**
 * Sign in with Google
 */
export const signInWithGoogle = async (): Promise<User> => {
    try {
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        const user = userCredential.user;

        // Check if user profile exists
        const userDoc = await getDoc(doc(db, 'users', user.uid));

        if (!userDoc.exists()) {
            // Create user profile
            const userProfile: UserProfile = {
                uid: user.uid,
                email: user.email!,
                displayName: user.displayName || 'User',
                photoURL: user.photoURL || undefined,
                createdAt: new Date().toISOString(),
                recipesCount: 0,
                followersCount: 0,
                followingCount: 0
            };

            await setDoc(doc(db, 'users', user.uid), userProfile);
        }

        return user;
    } catch (error: any) {
        console.error('Google sign in error:', error);
        throw new Error(error.message);
    }
};

/**
 * Sign out
 */
export const signOut = async (): Promise<void> => {
    try {
        await firebaseSignOut(auth);
    } catch (error: any) {
        console.error('Sign out error:', error);
        throw new Error(error.message);
    }
};

/**
 * Get current user
 */
export const getCurrentUser = (): User | null => {
    return auth.currentUser;
};

/**
 * Listen to auth state changes
 */
export const onAuthChange = (callback: (user: User | null) => void) => {
    return onAuthStateChanged(auth, callback);
};

/**
 * Get user profile from Firestore
 */
export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
    try {
        const userDoc = await getDoc(doc(db, 'users', uid));
        if (userDoc.exists()) {
            return userDoc.data() as UserProfile;
        }
        return null;
    } catch (error) {
        console.error('Get user profile error:', error);
        return null;
    }
};
