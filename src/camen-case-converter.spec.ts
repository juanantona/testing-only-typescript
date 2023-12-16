it('Should return a proper string when there is 1 word with mized caps and lower', async () => {
  const { cameCaseConverter } = await import('./camen-case-converter');
  const text1 = 'PePe';
  const text2 = 'PePe';
  const result1 = cameCaseConverter(text1);
  const result2 = cameCaseConverter(text2);
  expect(result1).toBe('Pepe');
  expect(result2).toBe('Pepe');
});

it('Should return a proper string when there are 2 words separated by _', async () => {
  const { cameCaseConverter } = await import('./camen-case-converter');
  const text = 'pepe_grande';
  const result = cameCaseConverter(text);
  expect(result).toBe('PepeGrande');
});

it('Should return a proper string when there are 2 words separated by -', async () => {
  const { cameCaseConverter } = await import('./camen-case-converter');
  const text = 'pepe-grande';
  const result = cameCaseConverter(text);
  expect(result).toBe('PepeGrande');
});

it('Should return a proper string when there are 2 words separated by space', async () => {
  const { cameCaseConverter } = await import('./camen-case-converter');
  const text = 'pepe grande';
  const result = cameCaseConverter(text);
  expect(result).toBe('PepeGrande');
});

it('Should return a proper string when there are 2 words separated by space with several capitals letters', async () => {
  const { cameCaseConverter } = await import('./camen-case-converter');
  const text = 'pePe Grande';
  const result = cameCaseConverter(text);
  expect(result).toBe('PepeGrande');
});

it('Should return a proper string when there are 3 words separated by _ and space', async () => {
  const { cameCaseConverter } = await import('./camen-case-converter');
  const text = 'pepe_grande top';
  const result = cameCaseConverter(text);
  expect(result).toBe('PepeGrandeTop');
});

it('Should return a proper string when there are 3 words separated by _ and space with several capitals letters', async () => {
  const { cameCaseConverter } = await import('./camen-case-converter');
  const text = 'pepe_grande Top';
  const result = cameCaseConverter(text);
  expect(result).toBe('PepeGrandeTop');
});
