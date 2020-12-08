
import { Schema } from 'mongoose';

const UserSchema: Schema = new Schema(
  {
    name: String,
    login: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    avatar: String,
    isAdmin: Boolean,
    isLogged: Boolean,
    createdAt: String,
  },
  {
    timestamps: true,
  },
);

export default UserSchema;
