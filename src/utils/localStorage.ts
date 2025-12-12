import { Recipe } from '../types/recipe';

const STORAGE_KEY = 'recipes';

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
            recipes[index] = updatedRecipe;
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
