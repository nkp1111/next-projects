export type StudentType = {
  _id?: string,
  name: string,
  email: string,
  password: string,
  photo?: string,
  bio?: string,
}

export type StudentLoginType = {
  email: string,
  password: string,
}