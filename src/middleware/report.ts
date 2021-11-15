// src/middleware/report.ts

import { Provide } from '@midwayjs/decorator';
import { IWebMiddleware, IMidwayWebNext } from '@midwayjs/web';
import { Context } from 'egg';

@Provide()
export class ReportMiddleware implements IWebMiddleware {
  resolve() {
    return async (ctx: Context, next: IMidwayWebNext) => {
      // 这里获取了 body 数据
      console.log(ctx.request.body);
      await next();
    };
  }
}
