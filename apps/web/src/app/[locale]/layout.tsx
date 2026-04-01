import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { type Locale, getDictionary } from "@awake/internationalization"
import type { Metadata } from "next"
import type { ReactNode } from "react"

const locales = ["en", "az", "ru"] as const

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }))
}

type Props = { children: ReactNode; params: Promise<{ locale: string }> }

export async function generateMetadata({
	params,
}: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params
	const dict = await getDictionary(locale as Locale)
	return {
		title: dict.meta.title,
		description: dict.meta.description,
		openGraph: {
			title: dict.meta.title,
			description: dict.meta.description,
			url: `https://awake.az/${locale}`,
			siteName: "AWAKE",
			type: "website",
			locale: locale === "az" ? "az_AZ" : locale === "ru" ? "ru_RU" : "en_US",
		},
	}
}

export default async function LocaleLayout({ children, params }: Props) {
	const { locale } = await params
	const dict = await getDictionary(locale as Locale)

	return (
		<>
			<Navbar dict={dict.nav} locale={locale} />
			<main id="main-content" lang={locale}>
				{children}
			</main>
			<Footer dict={dict.footer} locale={locale} />
		</>
	)
}
