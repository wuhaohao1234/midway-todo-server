/**
 * @description User-Service parameters
 */

import ITask from './interface/Task';
import IUser from './interface/User';

export interface IGetUserResponse {
  success: boolean;
  message: string;
  data: Array<IUser>;
}
export interface IGetTaskResponse {
  success: boolean;
  message: string;
  data: Array<ITask>;
}
