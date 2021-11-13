import {
  Inject,
  Controller,
  Get,
  Provide,
  Post,
  Body,
} from '@midwayjs/decorator';
import { Context } from 'egg';
import { IGetTaskResponse, IGetUserResponse } from '../interface';
import { TaskService } from '../service/task';
import { UserService } from '../service/user';

@Provide()
@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;
  @Inject()
  taskService: TaskService;

  @Get('/users')
  async getUsers(): Promise<IGetUserResponse> {
    const user = await this.userService.getUsers();
    return { success: true, message: 'OK', data: user };
  }
  @Post('/add_user')
  async addUser(
    @Body() name: string,
    @Body() account: string,
    @Body() password: string,
    @Body() token: string
  ) {
    const user = await this.userService.addUser({
      name: name,
      account: account,
      password: password,
      token: token,
    });
    return { success: true, message: 'OK', data: user };
  }
  @Get('/tasks')
  async getTask(): Promise<IGetTaskResponse> {
    const tasks = await this.taskService.getTasks();
    return { success: true, message: 'OK', data: tasks };
  }
  @Post('/add_task')
  async addTask(
    @Body() title: string,
    @Body() desc: string,
    @Body() token: string
  ) {
    const user = await this.taskService.addTask({
      title: title,
      desc: desc,
      token: token,
    });
    return { success: true, message: 'OK', data: user };
  }
  @Post('/delete_task')
  async deleteTask(@Body() id: number) {
    const num = await this.taskService.deleteTask(id);
    return { success: true, message: 'OK', data: num };
  }
}
