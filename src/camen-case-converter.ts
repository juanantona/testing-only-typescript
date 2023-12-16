export const cameCaseConverter = (text: string): string => {
  const words = text.split(/_|-| /);

  const capitalize = (word: string) => {
    const lower = word.toLowerCase();
    const lowerListChar = lower.split('');
    const capitalizedListChar = lowerListChar.map((char, index) =>
      index === 0 ? char.toUpperCase() : char
    );
    return capitalizedListChar.join('');
  };

  const capitalizedWords = words.map((word) => capitalize(word));

  return capitalizedWords.join('');
};
