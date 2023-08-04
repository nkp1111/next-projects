import { NextRequest } from 'next/server'
import { JwtPayload, verify } from 'jsonwebtoken'
import User from '@/model/user';

export default async function getJwtUser(request: NextRequest) {
  const token: string = request.cookies.get("token")?.value as string;
  const tokenDecrypted = await verify(token, "secret_key") as JwtPayload;
  const currentUserId: string = tokenDecrypted?.id || "";
  let user: (object | null) = null;
  if (currentUserId) {
    user = await User.findById(currentUserId)
  }
  return user;
}
