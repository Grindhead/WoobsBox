import { ProfanityOptions, profanity } from '@2toad/profanity';

/**
 * Options for configuring the profanity filter.
 */
const options = new ProfanityOptions();
options.wholeWord = false;

/**
 * Checks if the provided text contains profanity.
 * @param {string} text - The text to check for profanity.
 * @returns {boolean} A boolean indicating whether profanity was found in the text.
 */
export const isProfane = (text: string): boolean => {
  return profanity.exists(text);
};
