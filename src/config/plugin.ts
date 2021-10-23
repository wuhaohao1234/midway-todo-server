import { EggPlugin } from 'egg';
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
export default {
  logrotator: false, // disable when use @midwayjs/logger
  static: false,
} as EggPlugin;
