import crypto from 'crypto'


export const generateUniqueId = () => {
  return crypto.randomBytes(6).toString('hex');
}
