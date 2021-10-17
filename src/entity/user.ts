import { Column, Model, AutoIncrement, PrimaryKey } from 'sequelize-typescript';
import { BaseTable } from '@midwayjs/sequelize';
import IUser from '../interface/User';

@BaseTable({ modelName: 'user' })
export class User extends Model implements IUser {
  @AutoIncrement // 自增
  @PrimaryKey // 主键
  @Column
  id: number;

  @Column({
    comment: '用户名',
  })
  name: string;

  @Column({
    comment: '账号',
  })
  account: string;

  @Column({
    comment: '密码',
  })
  password: string;

  @Column({
    comment: 'token',
  })
  token: string;
}
