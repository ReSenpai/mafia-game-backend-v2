import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { UserType } from '../types/user.type';

const UserMutation = new GraphQLObjectType({
  description: 'Mutation to interact with `Users` collection.',
  name: 'UserMutation',
  fields: {
    addUser: {
      description: 'Creates and adds `User` document.',
      type: UserType,
      args: {
        name: { type: GraphQLString },
        login: { type: GraphQLString },
        password: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        isAdmin: { type: GraphQLBoolean },
        isLogged: { type: GraphQLBoolean },
      },
      resolve(_, args, ctx) {
        return ctx.koa.db.User(args).save();
      },
    },
    loginUser: {
      description: 'Returns a `User` where `User.login and User.password` in database.',
      type: UserType,
      args: {
        login: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(_, { login, password }, ctx) {
        return ctx.koa.db.User.findOne({ login, password });
      },
    },
    deleteUserById: {
      description:
        'Deletes `User` document from database where `User.id = id`.',
      type: UserType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(_, { id }, ctx) {
        return ctx.koa.db.User.findByIdAndRemove(id);
      },
    },
    updateUserById: {
      description: 'Updates `User` document where `User.id = id`.',
      type: UserType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        login: { type: GraphQLString },
        password: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        isAdmin: { type: GraphQLBoolean },
        isLogged: { type: GraphQLBoolean },
      },
      resolve(_, { id, ...args }, ctx) {
        return ctx.koa.db.User.findByIdAndUpdate(id, { ...args });
      },
    },
  },
});

export default UserMutation;
