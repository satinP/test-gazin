
describe('testing file', () => {
  test('multiplication', () => {
    expect(2 * (5)).toBe(10);
  });

  test('concat', () => {
    expect('Paul' + ' ' + 'McCartney').toBe('Paul McCartney');
  });
});