import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {

    // Pull GitHub username from OAuth profile into the JWT
    async jwt({ token, profile }) {
      if (profile) {
        token.username = profile.login  // e.g. "johndoe"
      }
      return token
    },

    // Expose username to client via useSession()
    async session({ session, token }) {
      session.user.username = token.username
      return session
    },

    // Honor callbackUrl — don't hardcode /users
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`
      if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },

  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }