import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { naam, email, telefoon, bericht } = body

    // Here you would typically integrate with an email service
    // For example, using NodeMailer, SendGrid, or EmailJS
    
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', { naam, email, telefoon, bericht })

    // TODO: Implement actual email sending logic
    
    return NextResponse.json(
      { message: 'Bericht succesvol verzonden' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { message: 'Er is een fout opgetreden' },
      { status: 500 }
    )
  }
} 