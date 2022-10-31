import { Id } from './id.vo';

describe('ID Value Object Unit Tests', () => {
  it('should create a id with a undefined id', () => {
    const id = new Id(undefined);

    expect(id).toBeDefined();
    expect(id.value).toBeDefined();
  });

  it('should create a id with a valid id', () => {
    const input = '1';
    const id = new Id(input);

    expect(id).toBeDefined();
    expect(id.value).toBe(input);
  });
});
