"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProfane = void 0;
const profanity_1 = require("@2toad/profanity");
/**
 * Options for configuring the profanity filter.
 */
const options = new profanity_1.ProfanityOptions();
options.wholeWord = false;
/**
 * Checks if the provided text contains profanity.
 * @param {string} text - The text to check for profanity.
 * @returns {boolean} A boolean indicating whether profanity was found in the text.
 */
const isProfane = (text) => {
    return profanity_1.profanity.exists(text);
};
exports.isProfane = isProfane;
//# sourceMappingURL=isProfane.js.map