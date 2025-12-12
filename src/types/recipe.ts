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
  imageUrl?: string;
  videoUrl?: string;
  userId?: string;
  likes?: number;
  views?: number;
  category?: string;          // Kategori
  isFavorite?: boolean;       // Favori işareti
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

/**
 * Recipe categories
 */
export const RECIPE_CATEGORIES = [
  'Tümü',
  'Ana Yemek',
  'Çorba',
  'Salata',
  'Tatlı',
  'Aperatif',
  'İçecek',
  'Kahvaltılık',
  'Diğer'
] as const;

export type RecipeCategory = typeof RECIPE_CATEGORIES[number];
