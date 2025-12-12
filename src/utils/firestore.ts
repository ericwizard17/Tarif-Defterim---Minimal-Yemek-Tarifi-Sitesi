import {
    collection,
    addDoc,
    getDocs,
    getDoc,
    doc,
    deleteDoc,
    updateDoc,
    query,
    orderBy,
    limit,
    where,
    Timestamp
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { Recipe } from '../types/recipe';

const COLLECTION_NAME = 'recipes';

/**
 * Get all recipes from Firestore
 */
export const getRecipesFromFirestore = async (): Promise<Recipe[]> => {
    try {
        const recipesRef = collection(db, COLLECTION_NAME);
        const q = query(recipesRef, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);

        const recipes: Recipe[] = [];
        querySnapshot.forEach((doc) => {
            recipes.push({
                id: doc.id,
                ...doc.data()
            } as Recipe);
        });

        return recipes;
    } catch (error) {
        console.error('Error getting recipes from Firestore:', error);
        return [];
    }
};

/**
 * Get a single recipe by ID from Firestore
 */
export const getRecipeByIdFromFirestore = async (id: string): Promise<Recipe | null> => {
    try {
        const docRef = doc(db, COLLECTION_NAME, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return {
                id: docSnap.id,
                ...docSnap.data()
            } as Recipe;
        }
        return null;
    } catch (error) {
        console.error('Error getting recipe from Firestore:', error);
        return null;
    }
};

/**
 * Add a new recipe to Firestore
 */
export const addRecipeToFirestore = async (recipe: Omit<Recipe, 'id'>): Promise<string> => {
    try {
        const docRef = await addDoc(collection(db, COLLECTION_NAME), {
            ...recipe,
            createdAt: recipe.createdAt || new Date().toISOString(),
            likes: recipe.likes || 0,
            views: recipe.views || 0
        });
        return docRef.id;
    } catch (error) {
        console.error('Error adding recipe to Firestore:', error);
        throw error;
    }
};

/**
 * Update a recipe in Firestore
 */
export const updateRecipeInFirestore = async (id: string, updates: Partial<Recipe>): Promise<void> => {
    try {
        const docRef = doc(db, COLLECTION_NAME, id);
        await updateDoc(docRef, updates);
    } catch (error) {
        console.error('Error updating recipe in Firestore:', error);
        throw error;
    }
};

/**
 * Delete a recipe from Firestore
 */
export const deleteRecipeFromFirestore = async (id: string): Promise<void> => {
    try {
        await deleteDoc(doc(db, COLLECTION_NAME, id));
    } catch (error) {
        console.error('Error deleting recipe from Firestore:', error);
        throw error;
    }
};

/**
 * Get recipes with videos only
 */
export const getVideoRecipes = async (): Promise<Recipe[]> => {
    try {
        const recipesRef = collection(db, COLLECTION_NAME);
        const q = query(
            recipesRef,
            where('videoUrl', '!=', null),
            orderBy('videoUrl'),
            orderBy('createdAt', 'desc')
        );
        const querySnapshot = await getDocs(q);

        const recipes: Recipe[] = [];
        querySnapshot.forEach((doc) => {
            recipes.push({
                id: doc.id,
                ...doc.data()
            } as Recipe);
        });

        return recipes;
    } catch (error) {
        console.error('Error getting video recipes from Firestore:', error);
        return [];
    }
};

/**
 * Increment recipe views
 */
export const incrementViews = async (id: string): Promise<void> => {
    try {
        const docRef = doc(db, COLLECTION_NAME, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const currentViews = docSnap.data().views || 0;
            await updateDoc(docRef, {
                views: currentViews + 1
            });
        }
    } catch (error) {
        console.error('Error incrementing views:', error);
    }
};

/**
 * Toggle like on a recipe
 */
export const toggleLike = async (id: string, increment: boolean): Promise<void> => {
    try {
        const docRef = doc(db, COLLECTION_NAME, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const currentLikes = docSnap.data().likes || 0;
            await updateDoc(docRef, {
                likes: increment ? currentLikes + 1 : Math.max(0, currentLikes - 1)
            });
        }
    } catch (error) {
        console.error('Error toggling like:', error);
    }
};

/**
 * Search recipes by title or description
 */
export const searchRecipes = async (searchTerm: string): Promise<Recipe[]> => {
    try {
        const recipesRef = collection(db, COLLECTION_NAME);
        const querySnapshot = await getDocs(recipesRef);

        const recipes: Recipe[] = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data() as Recipe;
            const searchLower = searchTerm.toLowerCase();

            if (
                data.title.toLowerCase().includes(searchLower) ||
                data.description.toLowerCase().includes(searchLower) ||
                data.ingredients.some(ing => ing.toLowerCase().includes(searchLower))
            ) {
                recipes.push({
                    id: doc.id,
                    ...data
                });
            }
        });

        return recipes;
    } catch (error) {
        console.error('Error searching recipes:', error);
        return [];
    }
};
