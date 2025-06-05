// import "../style/CSS/style.css";

// src/Typescript/generateAndValidateUuid.ts
import { v4 as uuidv4, validate as uuidValidate, version as uuidVersion } from 'uuid';

interface UuidValidationResult {
  id: string;
  isValid: boolean;
  version: number | undefined;
}

/**
 * Validates if a string is a valid UUID v4
 */
export const isValidUuid = (id: string): boolean => {
  return uuidValidate(id) && uuidVersion(id) === 4;
};

/**
 * Generates a new UUID v4 and validates it
 */
export const generateAndValidateUuid = (): UuidValidationResult => {
  const id = uuidv4();
  return {
    id,
    isValid: isValidUuid(id),
    version: uuidVersion(id)
  };
};

/**
 * Example function to demonstrate UUID generation and validation
 */
export const uuidTesting = async (): Promise<void> => {
  try {
    const { id, isValid, version } = generateAndValidateUuid();
    console.log('UUID Test:', { id, isValid, version });
    
    // Contoh operasi async (jika diperlukan)
    await new Promise(resolve => setTimeout(resolve, 100));
    
  } catch (error) {
    console.error('Error in uuidTesting:', error);
    throw error; // Re-throw untuk penanganan error di level yang lebih tinggi
  }
};