import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.json();
    
    // In development, just log the data and return success
    console.log('Form submission:', formData);

    return NextResponse.json({ message: 'Email sent successfully (Development mode)' });
  } catch (error) {
    console.error('Error in development API:', error);
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    );
  }
} 