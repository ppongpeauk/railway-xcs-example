import { NextRequest, NextResponse } from "next/server";

export const matcher = ["/api/(.*)"];
export async function proxy(req: NextRequest) {
	// Store current request url in a custom header, which you can read later

	const requestHeaders = new Headers(req.headers);
	const pathname = new URL(req.url).pathname;
	requestHeaders.set("x-url", pathname);

	return NextResponse.next({
		request: {
			// Apply new request headers
			headers: requestHeaders
		}
	});
}
