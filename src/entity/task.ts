import { Column, Model, AutoIncrement, PrimaryKey } from 'sequelize-typescript';
import { BaseTable } from '@midwayjs/sequelize';
import ITask from '../interface/Task';
@BaseTable({ modelName: 'task' })
export class Task extends Model implements ITask {
  @AutoIncrement // 自增
  @PrimaryKey // 主键
  @Column
  id: number;

  @Column({
    comment: 'token',
  })
  token: string;
  @Column({
    comment: '标题',
  })
  title: string;
  @Column({
    comment: '描述',
  })
  desc: string;
}
