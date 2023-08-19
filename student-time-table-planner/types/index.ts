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

export type CourseType = {
  _id?: string,
  title: string,
  classes: (ClassType | string)[],
  teacher: string,
}

export type ClassType = {
  _id?: string,
  title: string,
  time: string,
}