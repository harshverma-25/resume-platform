import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { improveText } from '@/lib/gemini';

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { text, type } = await req.json();

  if (!text || !type) {
    return NextResponse.json({ error: 'Text and type are required' }, { status: 400 });
  }

  try {
    const improved = await improveText(text, type as 'experience' | 'project' | 'achievement');
    return NextResponse.json({ result: improved });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to improve text' }, { status: 500 });
  }
}