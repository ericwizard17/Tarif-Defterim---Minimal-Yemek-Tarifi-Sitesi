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
  category?: string;
  isFavorite?: boolean;
  rating?: number;           // Ortalama puan (0-5)
  ratingCount?: number;      // Değerlendirme sayısı
  comments?: Comment[];      // Yorumlar
  cookTime?: number;         // Pişirme süresi (dakika)
  prepTime?: number;         // Hazırlık süresi (dakika)
  servings?: number;         // Porsiyon sayısı
  difficulty?: 'Kolay' | 'Orta' | 'Zor';
  tags?: string[];           // Etiketler (vejetaryen, vegan, etc.)
}

/**
 * Comment interface
 */
export interface Comment {
  id: string;
  recipeId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  text: string;
  createdAt: string;
  likes?: number;
  replies?: Comment[];
}

/**
 * User rating interface
 */
export interface UserRating {
  userId: string;
  recipeId: string;
  rating: number;
  createdAt: string;
}

/**
 * User profile interface
 */
export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  bio?: string;
  createdAt: string;
  recipesCount?: number;
  followersCount?: number;
  followingCount?: number;
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

/**
 * Difficulty levels
 */
export const DIFFICULTY_LEVELS = ['Kolay', 'Orta', 'Zor'] as const;
export type DifficultyLevel = typeof DIFFICULTY_LEVELS[number];

/**
 * Common tags
 */
export const COMMON_TAGS = [
  'Vejetaryen',
  'Vegan',
  'Gluten-Free',
  'Sütsüz',
  'Şekersiz',
  'Düşük Kalorili',
  'Protein',
  'Hızlı',
  'Ekonomik'
] as const;
