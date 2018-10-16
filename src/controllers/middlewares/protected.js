import { AuthenticationError } from 'apollo-server-express';

export default (req) => {
  const token = req.headers.authorization || req.body.token || req.query.token;
  if (!token) {
    throw new AuthenticationError('Please provide a valid token');
  }
};
