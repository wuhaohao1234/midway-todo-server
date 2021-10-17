import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;
export const sequelize = {
  options: {
    database: 'test',
    username: 'root',
    password: 'abu0418',
    host: '127.0.0.1', // 此处支持idb上面vipserver key的那种方式，也支持aliyun的地址。
    port: 3306,
    encrypt: false,
    dialect: 'mysql',
    define: { charset: 'utf8' },
    logging: console.log,
  },
  sync: false, // 本地的时候，可以通过sync: true直接createTable
};
export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1634453204972_6249';

  // add your config here
  config.middleware = [];

  config.midwayFeature = {
    // true 代表使用 midway logger
    // false 或者为空代表使用 egg-logger
    replaceEggLogger: true,
  };

  // config.security = {
  //   csrf: false,
  // };

  return config;
};
