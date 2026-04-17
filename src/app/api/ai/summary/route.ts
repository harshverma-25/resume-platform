import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { generateSummary } from '@/lib/gemini';

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const resumeData = await req.json();

  try {
    const summary = await generateSummary(resumeData);
    return NextResponse.json({ summary });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate summary' }, { status: 500 });
  }
}
