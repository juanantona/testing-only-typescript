export const cameCaseConverter = (text: string): string => {
  const isWordCapitalized = (word: string): boolean =>
    word[0] === word[0].toUpperCase();

  const capitalize = (word: string): string =>
    word
      .split('')
      .map((letter, index) => (index === 0 ? letter.toUpperCase() : letter))
      .join('');

  if (text.length === 0) return text;
  const words = text.split(/ |_|-/);
  const areAllCaps = words.every(isWordCapitalized);

  if (words.length === 1)
    return isWordCapitalized(text) ? text : capitalize(text);

  if (words.length > 1) {
    return areAllCaps ? words.join('') : words.map(capitalize).join('');
  }
};
