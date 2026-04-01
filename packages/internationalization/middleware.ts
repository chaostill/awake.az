import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import { type NextRequest, NextResponse } from "next/server"
import { defaultLocale, locales } from "./locales"

function getLocale(request: NextRequest): string {
	const headers: Record<string, string> = {}
	request.headers.forEach((value, key) => {
		headers[key] = value
	})
	const languages = new Negotiator({ headers }).languages()
	return match(languages, [...locales], defaultLocale)
}

export function i18nMiddleware(request: NextRequest) {
	const { pathname } = request.nextUrl

	const pathnameHasLocale = locales.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
	)

	if (pathnameHasLocale) return NextResponse.next()

	const locale = getLocale(request)
	request.nextUrl.pathname = `/${locale}${pathname}`
	return NextResponse.redirect(request.nextUrl)
}
