import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  default_pass: process.env.DEFAULT_PASSWORD,
  salt: process.env.BCRYPT_SALT,
};
