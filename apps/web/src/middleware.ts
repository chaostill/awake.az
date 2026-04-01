import { type NextRequest, NextResponse } from "next/server"
import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

const locales = ["en", "az", "ru"] as const
const defaultLocale = "en"

function getLocale(request: NextRequest): string {
	const headers: Record<string, string> = {}
	request.headers.forEach((value, key) => {
		headers[key] = value
	})
	const languages = new Negotiator({ headers }).languages()
	return match(languages, [...locales], defaultLocale)
}

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl
	if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
		return NextResponse.next()
	}
	const hasLocale = locales.some((l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`)
	if (hasLocale) return NextResponse.next()
	const locale = getLocale(request)
	request.nextUrl.pathname = `/${locale}${pathname}`
	return NextResponse.redirect(request.nextUrl)
}

export const config = { matcher: ["/((?!_next|api|.*\\..*).*)"] }
