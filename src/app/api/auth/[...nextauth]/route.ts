import NextAuth from "next-auth"
import RedditProvider from "next-auth/providers/reddit";

const authOptions = {
    providers: [
        RedditProvider({
          clientId: process.env.REDDIT_CLIENT_ID,
          clientSecret: process.env.REDDIT_CLIENT_SECRET,
          authorization: {
            params: {
              duration: "permanent",
            },
          },
        }),
      ],
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST };