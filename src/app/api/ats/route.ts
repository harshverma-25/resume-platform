import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { getAtsScore } from '@/lib/gemini';
import dbConnect from '@/lib/db';
import AtsResult from '@/models/AtsResult';

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { resumeText } = await req.json();

  if (!resumeText) {
    return NextResponse.json({ error: 'Resume text is required' }, { status: 400 });
  }

  try {
    const result = await getAtsScore(resumeText);
    
    // Save the result to the database for history
    await dbConnect();
    await AtsResult.create({
      userId,
      score: result.score,
      suggestions: result.suggestions,
      resumeTextSnippet: resumeText.substring(0, 500),
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("ATS API Route Error:", error);
    return NextResponse.json({ error: 'Failed to analyze resume' }, { status: 500 });
  }
}
