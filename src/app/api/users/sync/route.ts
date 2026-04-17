import { NextResponse } from 'next/server';
import { auth, currentUser } from '@clerk/nextjs/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';

export async function POST() {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await dbConnect();

  try {
    // Check if user already exists
    let dbUser = await User.findOne({ clerkUserId: userId });

    if (!dbUser) {
      dbUser = await User.create({
        clerkUserId: userId,
        email: user.emailAddresses[0].emailAddress,
        name: `${user.firstName} ${user.lastName || ""}`,
      });
    }

    return NextResponse.json(dbUser);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to sync user' }, { status: 500 });
  }
}
