import { Recipe } from '../types/recipe';

const STORAGE_KEY = 'recipes';
const FAVORITES_KEY = 'favorites';

/**
 * Get all recipes from localStorage
 */
export const getRecipes = (): Recipe[] => {
    try {
        const recipesJson = localStorage.getItem(STORAGE_KEY);
        if (!recipesJson) {
            return [];
        }
        return JSON.parse(recipesJson) as Recipe[];
    } catch (error) {
        console.error('Error reading recipes from localStorage:', error);
        return [];
    }
};

/**
 * Save a new recipe to localStorage
 */
export const saveRecipe = (recipe: Recipe): void => {
    try {
        const recipes = getRecipes();
        recipes.push(recipe);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
    } catch (error) {
        console.error('Error saving recipe to localStorage:', error);
        throw new Error('Tarif kaydedilemedi');
    }
};

/**
 * Delete a recipe from localStorage by ID
 */
export const deleteRecipe = (id: string): void => {
    try {
        const recipes = getRecipes();
        const filteredRecipes = recipes.filter(recipe => recipe.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredRecipes));
    } catch (error) {
        console.error('Error deleting recipe from localStorage:', error);
        throw new Error('Tarif silinemedi');
    }
};

/**
 * Get a single recipe by ID
 */
export const getRecipeById = (id: string): Recipe | null => {
    const recipes = getRecipes();
    return recipes.find(recipe => recipe.id === id) || null;
};

/**
 * Update an existing recipe
 */
export const updateRecipe = (id: string, updatedRecipe: Recipe): void => {
    try {
        const recipes = getRecipes();
        const index = recipes.findIndex(recipe => recipe.id === id);
        if (index !== -1) {
            recipes[index] = { ...updatedRecipe, id }; // Preserve ID
            localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
        }
    } catch (error) {
        console.error('Error updating recipe in localStorage:', error);
        throw new Error('Tarif güncellenemedi');
    }
};

/**
 * Clear all recipes from localStorage
 */
export const clearAllRecipes = (): void => {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error('Error clearing recipes from localStorage:', error);
    }
};

/**
 * Export all recipes as JSON
 */
export const exportRecipes = (): string => {
    const recipes = getRecipes();
    return JSON.stringify(recipes, null, 2);
};

/**
 * Import recipes from JSON
 */
export const importRecipes = (jsonData: string, mode: 'replace' | 'merge' = 'merge'): void => {
    try {
        const importedRecipes = JSON.parse(jsonData) as Recipe[];

        if (!Array.isArray(importedRecipes)) {
            throw new Error('Geçersiz veri formatı');
        }

        if (mode === 'replace') {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(importedRecipes));
        } else {
            const existingRecipes = getRecipes();
            const mergedRecipes = [...existingRecipes, ...importedRecipes];
            localStorage.setItem(STORAGE_KEY, JSON.stringify(mergedRecipes));
        }
    } catch (error) {
        console.error('Error importing recipes:', error);
        throw new Error('Tarifler içe aktarılamadı');
    }
};

/**
 * Download recipes as JSON file
 */
export const downloadRecipesAsFile = (): void => {
    const jsonData = exportRecipes();
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `tarifler-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

/**
 * Get favorite recipe IDs
 */
export const getFavorites = (): string[] => {
    try {
        const favoritesJson = localStorage.getItem(FAVORITES_KEY);
        if (!favoritesJson) {
            return [];
        }
        return JSON.parse(favoritesJson) as string[];
    } catch (error) {
        console.error('Error reading favorites:', error);
        return [];
    }
};

/**
 * Toggle favorite status
 */
export const toggleFavorite = (id: string): boolean => {
    try {
        const favorites = getFavorites();
        const index = favorites.indexOf(id);

        if (index > -1) {
            favorites.splice(index, 1);
            localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
            return false;
        } else {
            favorites.push(id);
            localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
            return true;
        }
    } catch (error) {
        console.error('Error toggling favorite:', error);
        return false;
    }
};

/**
 * Check if recipe is favorite
 */
export const isFavorite = (id: string): boolean => {
    const favorites = getFavorites();
    return favorites.includes(id);
};

/**
 * Search recipes by query
 */
export const searchRecipes = (query: string): Recipe[] => {
    const recipes = getRecipes();
    const searchLower = query.toLowerCase();

    return recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchLower) ||
        recipe.description.toLowerCase().includes(searchLower) ||
        recipe.ingredients.some(ing => ing.toLowerCase().includes(searchLower)) ||
        recipe.userName.toLowerCase().includes(searchLower)
    );
};

/**
 * Filter recipes by category
 */
export const filterByCategory = (category: string): Recipe[] => {
    if (category === 'Tümü') {
        return getRecipes();
    }

    const recipes = getRecipes();
    return recipes.filter(recipe => recipe.category === category);
};
