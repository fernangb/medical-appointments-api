import { Id } from '../value-objects/id.vo';
import { BaseEntity } from './base-entity';

describe('Entity Unit Tests', () => {
  it('should create a base entity', () => {
    const id = new Id('1');
    const entity = new BaseEntity(id);

    expect(entity).toBeDefined();
    expect(entity.id).toBe(id);
  });
});
