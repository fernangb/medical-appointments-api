export interface FindOneRepositoryInterface<Model, Entity> {
  findById(id: string): Promise<Entity>;
  toEntity(model: Model): Entity;
}
