import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import User from '@/models/User';
import connectDb from '@/db/connectDb';
let isConnected;
async function connectToDb() {
  if (!isConnected) {
    await connectDb();
    isConnected = true;
  }
}
export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'user:email',
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        if (account.provider == "github") {
          // const client=await mongoose.connect("mongodb://localhost:27017/chai");
          //by doing this previous statement it will create multiple connection at times when multiple users are signing in at the same time
          await connectToDb();
          // const currentUser=client.db("users").collection("users").findOne({email:email})
          const email=profile.email;
          const currentUser = await User.findOne({email: email})
          if (!currentUser) {
            const username= email.split("@")[0];
            const newUser = await User.create({
              email: email,
              username:username,
            })
          }else{
            console.log("user already exist")
          }
        }
        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }

    },
    async session({ session, token, user }) {
      try {
        await connectToDb();
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
})
