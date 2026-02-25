import { NextRequest, NextResponse } from 'next/server'

// This API route handles incoming calls from Twilio
export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    console.log('Incoming call:', body)

    // Parse Twilio webhook data
    const params = new URLSearchParams(body)
    const from = params.get('From')
    const to = params.get('To')
    const callSid = params.get('CallSid')

    // TwiML response to handle the call
    const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice">Hello! Thank you for calling. Your AI receptionist is being set up. Please hold while we connect you.</Say>
  <Pause length="1"/>
  <Say voice="alice">If you're hearing this message, your AI Receptionist platform is working correctly! Please configure your AI assistant in your dashboard to customize this experience.</Say>
</Response>`

    return new NextResponse(twiml, {
      status: 200,
      headers: {
        'Content-Type': 'text/xml',
      },
    })
  } catch (error) {
    console.error('Error handling call:', error)
    return NextResponse.json(
      { error: 'Failed to process call' },
      { status: 500 }
    )
  }
}

// Handle GET requests for testing
export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'Call webhook endpoint is active',
    timestamp: new Date().toISOString(),
  })
}
