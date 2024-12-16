import morgan from 'morgan';
import { logger } from '../../utils/logger.js';

const format = ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"';

export const morganMiddleware = morgan(format, {
  stream: {
    write: (message) => logger.info(message.trim())
  }
});