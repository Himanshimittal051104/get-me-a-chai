let isConnected; // Track connection status

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'user:email',
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        // Connect to DB only if not already connected
        if (!isConnected) {
          await connectDb();
          isConnected = true;
        }

        const email = profile.email;
        const currentUser = await User.findOne({ email });
        
        if (!currentUser) {
          const username = email.split("@")[0];
          await User.create({
            email,
            username,
          });
        }
        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },
    async session({ session }) {
      try {
        if (!isConnected) {
          await connectDb();
          isConnected = true;
        }
        
        const dbUser = await User.findOne({ email: session.user.email });
        if (dbUser) {
          session.user.name = dbUser.username;
        }
        return session;
      } catch (error) {
        console.error("Error in session callback:", error);
        return session;
      }
    },
  }
});
