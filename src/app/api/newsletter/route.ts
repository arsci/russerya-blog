import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const body = await req.json();

	if (body.email === "") {
		return new NextResponse(
			JSON.stringify({ data: "Error: no valid email found in request" }),
			{ status: 400 },
		);
	}

  const EO_LIST_ID = process.env.EO_LIST_ID;
	const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY
	const EO_KEY = process.env.EO_KEY;
  const EO_ENDPOINT = `https://emailoctopus.com/api/1.6/lists/${EO_LIST_ID}/contacts`;
	const email = body.email;

	const data = {
		api_key: EO_KEY,
		email_address: email,
		fields: {
			Referrer: body.referrer,
		},
		status: "SUBSCRIBED",
	};

	const requestOptions = {
		crossDomain: true,
		method: "POST",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify(data),
	};

	try {
		const response = await fetch(EO_ENDPOINT, requestOptions);
		if (!response.ok) {
			throw new Error(`Failed to subscribe: ${response.statusText}`);
		}
		console.dir(await response.json());
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