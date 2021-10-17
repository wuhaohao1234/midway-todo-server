import { Provide } from '@midwayjs/decorator';
import { Task } from '../entity/task';
import ITask from '../interface/Task';

@Provide()
export class TaskService {
  async getTasks(): Promise<ITask[]> {
    const result = await Task.findAll();
    return result;
  }
  async addTask(option: ITask): Promise<ITask> {
    return await Task.create(option);
  }
}
