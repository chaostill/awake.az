import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { SellersSection } from "@/components/sellers-section"
import { ServicesPreview } from "@/components/services-preview"
import { CtaSection } from "@/components/cta-section"
import { PriceTicker } from "@/components/price-ticker"
import { type Locale, getDictionary } from "@awake/internationalization"

type Props = { params: Promise<{ locale: string }> }

export default async function HomePage({ params }: Props) {
	const { locale } = await params
	const dict = await getDictionary(locale as Locale)

	return (
		<>
			<HeroSection dict={dict.hero} />
			<PriceTicker dict={dict.ticker} />
			<div aria-hidden="true" className="coffee-divider" />
			<StatsSection dict={dict.stats} />
			<div aria-hidden="true" className="coffee-divider" />
			<SellersSection dict={dict.sellers} locale={locale} />
			<div aria-hidden="true" className="coffee-divider" />
			<ServicesPreview dict={dict.services} locale={locale} />
			<div aria-hidden="true" className="coffee-divider" />
			<CtaSection dict={dict.cta} />
		</>
	)
}
