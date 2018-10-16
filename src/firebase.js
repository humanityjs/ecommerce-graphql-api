import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

const { SERVICE_KEY_PATH } = process.env;

export default (() => admin.initializeApp({
  credential: admin.credential.cert(SERVICE_KEY_PATH)
}))();
