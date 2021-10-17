import { Provide } from '@midwayjs/decorator';
import { User } from '../entity/user';
import IUser from '../interface/User';
@Provide()
export class UserService {
  async getUsers(): Promise<IUser[]> {
    const result = await User.findAll();
    return result;
  }
  async addUser(option: IUser): Promise<IUser> {
    return await User.create(option);
  }
}
