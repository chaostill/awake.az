import type { Metadata } from "next"
import { DM_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const instrumentSerif = Instrument_Serif({
	subsets: ["latin", "latin-ext"],
	variable: "--font-display",
	weight: ["400"],
	display: "swap",
})

const dmSans = DM_Sans({
	subsets: ["latin", "latin-ext"],
	variable: "--font-body",
	weight: ["400", "500", "600", "700"],
	display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin", "latin-ext"],
	variable: "--font-mono",
	weight: ["400", "500"],
	display: "swap",
})

export const metadata: Metadata = {
	metadataBase: new URL("https://awake.az"),
	title: "AWAKE — Coffee Intelligence Platform",
	description:
		"Market data, trade analytics, and curated sellers for Azerbaijan's coffee ecosystem. From bean to cup, powered by data.",
	openGraph: {
		title: "AWAKE — Coffee Intelligence Platform",
		description:
			"Market data, trade analytics, and curated sellers for Azerbaijan's coffee ecosystem.",
		url: "https://awake.az",
		siteName: "AWAKE",
		type: "website",
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			className={`${instrumentSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
			style={{ colorScheme: "dark" }}
		>
			<body className="bg-[var(--awake-espresso)] text-[var(--awake-parchment)]">
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--awake-coffee)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--awake-parchment)]"
				>
					Skip to content
				</a>
				{children}
			</body>
		</html>
	)
}
