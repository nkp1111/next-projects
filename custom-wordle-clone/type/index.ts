export type UserSchema = {
  username?: string,
  email: string,
  password: string,
}

export type UserDetailSchema = {
  userId: string,
  username: string,
  email: string,
  password?: string,
  gamePlayedNum: number,
  gameWon: number,
  guessDistribution: { [key: number]: number }
}