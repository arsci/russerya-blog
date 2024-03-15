import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID
  const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID
  const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY
  const EMAILJS_PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY
  const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send'

  const data = {
    service_id: EMAILJS_SERVICE_ID,
    template_id: EMAILJS_TEMPLATE_ID,
    user_id: EMAILJS_PUBLIC_KEY,
    accessToken: EMAILJS_PRIVATE_KEY,
    template_params: {
      from_name: body.name,
      from_email: body.email,
      message: body.message,
      referPage: body.referPage,
      'g-recaptcha-response': body.token
    }
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(EMAILJS_ENDPOINT, requestOptions);
    if (!response.ok) {
      throw new Error(`Failed to send email: ${response.statusText}`);
    }
    return new NextResponse(
      JSON.stringify({
        data: response.status,
      }),
      { status: 200 },
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      return new NextResponse(
        JSON.stringify({ data: `Error: ${error.message}` }),
        { status: 500 },
      );
    }
    console.error(error);
    return new NextResponse(
      JSON.stringify({ data: "An unknown error occurred" }),
      { status: 500 },
    );
  }
}