it('An empty string must be returned as is', async () => {
  const { cameCaseConverter } = await import('./camen-case-converter-course');

  const result = cameCaseConverter('');
  expect(result).toBe('');
});

it('For a word with the first letter capitalized the result should be the same.', async () => {
  const { cameCaseConverter } = await import('./camen-case-converter-course');
  const result = cameCaseConverter('Pepe');
  expect(result).toBe('Pepe');
});

it('For a text containing words with the first letter capitalized, separated by spaces, we return the words joined in the camel case format.', async () => {
  const { cameCaseConverter } = await import('./camen-case-converter-course');
  const result = cameCaseConverter('Pepe Es Grande');
  expect(result).toBe('PepeEsGrande');
});

it('For a text containing words with the first letter capitalized, separated by hyphens, you must return the words joined together.', async () => {
  const { cameCaseConverter } = await import('./camen-case-converter-course');
  const result = cameCaseConverter('Pepe_Es_Grande');
  expect(result).toBe('PepeEsGrande');
});

it('For a word with the first letter in lowercase the result should return the same word with the first letter in uppercase.', async () => {
  const { cameCaseConverter } = await import('./camen-case-converter-course');
  const result = cameCaseConverter('pepe');
  expect(result).toBe('Pepe');
});

it('For a text containing lowercase words you must transform each word to uppercase and join them together.', async () => {
  const { cameCaseConverter } = await import('./camen-case-converter-course');
  const result = cameCaseConverter('pepe_es muy-grande');
  expect(result).toBe('PepeEsMuyGrande');
});
