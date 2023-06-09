import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/utils/db";
import User from "@/models/user";

const NextAUTH = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    
    callbacks: {

        async session({ session }) {
            const currUser = await User.findOne({ email: session.user.email });
            // session.user.id = currUser._id.toString();
            // return session;

            return { ...session,
                user: { 
                    ...session.user,
                  id: currUser._id.toString()
                 
                }
              }
        },
        async signIn({ profile }) {

            try {
                // 
                await connectDB();
                const user = await User.findOne({ email: profile.email });
                //if user exist
                if (user) {
                    return true;
                }
                //if user not exist create new user
                await User.create({
                    email: profile.email,
                    username: profile.name.replace(" ", "").toLowerCase(),
                    image: profile.picture
                })

                return true;

            } catch (error) {
                console.error(`Error: ${error.message}`);
                return false;

            }

        }
    }

});

export { NextAUTH as GET, NextAUTH as POST }

