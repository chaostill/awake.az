import { type Locale, getDictionary } from "@awake/internationalization"
import { PriceChart } from "@/components/price-chart"

type Props = { params: Promise<{ locale: string }> }

export default async function PricesPage({ params }: Props) {
	const { locale } = await params
	const dict = await getDictionary(locale as Locale)
	const d = dict.prices

	return (
		<section className="py-20 md:py-28">
			<div className="mx-auto max-w-7xl px-6">
				<div className="mx-auto max-w-3xl">
					<h1 className="font-[family-name:var(--font-display)] text-4xl text-[var(--awake-parchment)] md:text-6xl">
						{d.title}
					</h1>
					<p className="mt-4 text-xl text-[var(--awake-text-muted)]">{d.subtitle}</p>
				</div>

				<div className="mt-14">
					<PriceChart dict={d} />
				</div>
			</div>
		</section>
	)
}
