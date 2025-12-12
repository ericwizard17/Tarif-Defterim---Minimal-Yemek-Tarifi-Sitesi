/**
 * Recipe data model interface
 */
export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
  userName: string;
  createdAt: string;
  imageUrl?: string;        // Tarif görseli
  videoUrl?: string;        // Tarif videosu
  userId?: string;          // Firebase user ID
  likes?: number;           // Beğeni sayısı
  views?: number;           // Görüntülenme sayısı
}

/**
 * Form data for creating a new recipe
 */
export interface RecipeFormData {
  title: string;
  description: string;
  ingredients: string;
  steps: string;
  userName: string;
}

/**
 * Media upload progress
 */
export interface UploadProgress {
  progress: number;
  status: 'idle' | 'uploading' | 'success' | 'error';
  url?: string;
  error?: string;
}
