export interface BaseUseCaseInterface {
  execute(input: any): Promise<any>;
}
