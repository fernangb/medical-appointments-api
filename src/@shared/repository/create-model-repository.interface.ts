export interface CreateRepositoryInterface<Model, Entity> {
  create(entity: Entity): Promise<void>;
  toModel(entity: Entity): Model;
}
