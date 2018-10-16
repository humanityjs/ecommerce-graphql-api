import { makeExecutableSchema } from 'graphql-tools';
import { ApolloServer } from 'apollo-server-express';
import { merge } from 'lodash';
import { userTypes } from './types';
import { userResolvers } from './resolvers';
import firebase from '@/firebase';

const createServer = (() => {
  const baseSchema = `
  schema {
    query: Query
  }
`;

  const schema = makeExecutableSchema({
    typeDefs: [baseSchema, userTypes],
    resolvers: merge({}, userResolvers)
  });

  const db = firebase.firestore();

  db.settings({ timestampsInSnapshots: true });

  return new ApolloServer({
    schema,
    formatError: error => ({
      code: error.extensions.code,
      name: error.name,
      path: error.path,
      locations: error.locations,
      message: error.message.replace('Context creation failed:', '')
    }),
    context: async ({ req }) => ({
      req,
      db
    })
  });
})();

export default createServer;
