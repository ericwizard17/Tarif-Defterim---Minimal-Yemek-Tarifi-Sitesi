import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '../config/firebase';

export interface UploadProgress {
    progress: number;
    status: 'idle' | 'uploading' | 'success' | 'error';
    url?: string;
    error?: string;
}

/**
 * Upload image to Firebase Storage
 */
export const uploadImage = (
    file: File,
    onProgress: (progress: UploadProgress) => void
): Promise<string> => {
    return new Promise((resolve, reject) => {
        // Validate file
        if (!file.type.startsWith('image/')) {
            reject(new Error('Sadece resim dosyaları yüklenebilir'));
            return;
        }

        if (file.size > 5 * 1024 * 1024) { // 5MB limit
            reject(new Error('Resim boyutu 5MB\'dan küçük olmalıdır'));
            return;
        }

        // Create unique filename
        const timestamp = Date.now();
        const filename = `recipe-images/${timestamp}_${file.name}`;
        const storageRef = ref(storage, filename);

        // Upload file
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                onProgress({
                    progress,
                    status: 'uploading'
                });
            },
            (error) => {
                onProgress({
                    progress: 0,
                    status: 'error',
                    error: error.message
                });
                reject(error);
            },
            async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                onProgress({
                    progress: 100,
                    status: 'success',
                    url: downloadURL
                });
                resolve(downloadURL);
            }
        );
    });
};

/**
 * Upload video to Firebase Storage
 */
export const uploadVideo = (
    file: File,
    onProgress: (progress: UploadProgress) => void
): Promise<string> => {
    return new Promise((resolve, reject) => {
        // Validate file
        if (!file.type.startsWith('video/')) {
            reject(new Error('Sadece video dosyaları yüklenebilir'));
            return;
        }

        if (file.size > 100 * 1024 * 1024) { // 100MB limit
            reject(new Error('Video boyutu 100MB\'dan küçük olmalıdır'));
            return;
        }

        // Create unique filename
        const timestamp = Date.now();
        const filename = `recipe-videos/${timestamp}_${file.name}`;
        const storageRef = ref(storage, filename);

        // Upload file
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                onProgress({
                    progress,
                    status: 'uploading'
                });
            },
            (error) => {
                onProgress({
                    progress: 0,
                    status: 'error',
                    error: error.message
                });
                reject(error);
            },
            async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                onProgress({
                    progress: 100,
                    status: 'success',
                    url: downloadURL
                });
                resolve(downloadURL);
            }
        );
    });
};

/**
 * Delete file from Firebase Storage
 */
export const deleteFile = async (url: string): Promise<void> => {
    try {
        const fileRef = ref(storage, url);
        await deleteObject(fileRef);
    } catch (error) {
        console.error('Error deleting file:', error);
        throw error;
    }
};

/**
 * Get file extension from filename
 */
export const getFileExtension = (filename: string): string => {
    return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2);
};

/**
 * Format file size
 */
export const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
};
