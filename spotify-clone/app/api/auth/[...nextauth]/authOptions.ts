import { NextAuthThemeProps } from "@/types/auth"
import { NextAuthOptions, Session } from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/lib/db/mongoClient"
import { Adapter } from "next-auth/adapters"

import {
  authLogo,
  githubClientId,
  googleClientId,
  githubClientSecret,
  googleClientSecret,
  signInUrl,
} from "@/constant/auth"



const providers = [
  // CredentialsProvider({
  //   name: 'Credentials',
  //   credentials: {
  //     username: { label: "Email", type: "email", placeholder: "example@gmail.com" },
  //     password: { label: "Password", type: "password" }
  //   },
  //   async authorize(credentials, req) {
  //     // You need to provide your own logic here that takes the credentials
  //     // submitted and returns either a object representing a user or value
  //     // that is false/null if the credentials are invalid.
  //     // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
  //     // You can also use the `req` object to obtain additional parameters
  //     // (i.e., the request IP address)
  //     // TODO: sign in using credentials 
  //     const res = await fetch(signInUrl, {
  //       method: 'POST',
  //       body: JSON.stringify(credentials),
  //       headers: { "Content-Type": "application/json" }
  //     })
  //     const user = await res.json()

  //     // If no error and we have user data, return it
  //     if (res.ok && user) {
  //       return user
  //     }
  //     // Return null if user data could not be retrieved
  //     return null
  //   }
  // }),
  GoogleProvider({
    clientId: googleClientId,
    clientSecret: googleClientSecret,
  }),
  GitHubProvider({
    clientId: githubClientId,
    clientSecret: githubClientSecret,
  })
]

const theme: NextAuthThemeProps = {
  colorScheme: "auto",
  brandColor: "#346df1",
  logo: authLogo,
  buttonText: "#fff",
}

const adapter = MongoDBAdapter(clientPromise) as Adapter;

const callbacks = {
  session({ session, user }: { session: Session, user: any }) {
    session.user.id = user.id || user._id;
    session.user.likedSongs = user.likedSongs || [];
    session.user.playlist = user.playlist || [];
    return session
  }
}

export const authOptions: NextAuthOptions = {
  providers,
  theme,
  adapter,
  callbacks,
}