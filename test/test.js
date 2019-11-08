import index from '../src';

describe('Basic tests', () => {
  test('should pass', () => {
    const total = index(5, 5);
    expect(total).toBe(10);
  });
});
