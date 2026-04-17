import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import dbConnect from '@/lib/db';
import Resume from '@/models/Resume';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId } = await auth();
  const { id } = await params;

  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await dbConnect();
  try {
    const resume = await Resume.findOne({ _id: id, userId });
    if (!resume) return NextResponse.json({ error: 'Resume not found' }, { status: 404 });
    return NextResponse.json(resume);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch resume' }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId } = await auth();
  const { id } = await params;

  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const data = await req.json();
  await dbConnect();

  try {
    const updatedResume = await Resume.findOneAndUpdate(
      { _id: id, userId },
      { $set: data },
      { new: true }
    );
    if (!updatedResume) return NextResponse.json({ error: 'Resume not found' }, { status: 404 });
    return NextResponse.json(updatedResume);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update resume' }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId } = await auth();
  const { id } = await params;

  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await dbConnect();
  try {
    const result = await Resume.deleteOne({ _id: id, userId });
    if (result.deletedCount === 0) return NextResponse.json({ error: 'Resume not found' }, { status: 404 });
    return NextResponse.json({ message: 'Resume deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete resume' }, { status: 500 });
  }
}
