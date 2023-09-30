import { ObjectId } from 'mongodb';
import { IconType } from 'react-icons';

export type navDataSchema = {
  id: (string | number),
  title: string,
  link: string,
  icon: IconType,
}

export type objectStringKeyAnyValueSchema = { [key: string]: any };

export type UserSchema = {
  _id: ObjectId,
  email: string,
  name?: string,
  password: string,
}