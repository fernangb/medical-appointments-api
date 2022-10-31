export interface ListRepositoryInterface<Model, Entity> {
  findById(id: string): Promise<Entity>;
  toEntityList(models: Model[]): Entity[];
}
