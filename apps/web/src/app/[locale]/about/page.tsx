import { type Locale, getDictionary } from "@awake/internationalization"
import { Target, BookOpen, Heart } from "lucide-react"

type Props = { params: Promise<{ locale: string }> }

export default async function AboutPage({ params }: Props) {
	const { locale } = await params
	const dict = await getDictionary(locale as Locale)
	const d = dict.about

	const values = [
		{ icon: Target, title: d.value_1_title, desc: d.value_1 },
		{ icon: Heart, title: d.value_2_title, desc: d.value_2 },
		{ icon: BookOpen, title: d.value_3_title, desc: d.value_3 },
	]

	return (
		<>
			{/* Hero */}
			<section className="py-20 md:py-28">
				<div className="mx-auto max-w-7xl px-6">
					<div className="mx-auto max-w-3xl">
						<h1 className="font-[family-name:var(--font-display)] text-4xl text-[var(--awake-parchment)] md:text-6xl">
							{d.title}
						</h1>
						<p className="mt-4 text-xl text-[var(--awake-text-muted)]">{d.subtitle}</p>
					</div>
				</div>
			</section>

			<div aria-hidden="true" className="coffee-divider" />

			{/* Mission */}
			<section className="py-20">
				<div className="mx-auto max-w-7xl px-6">
					<div className="mx-auto max-w-3xl">
						<h2 className="label mb-4">{d.mission_title}</h2>
						<p className="text-lg leading-relaxed text-[var(--awake-cream)]">{d.mission}</p>
					</div>
				</div>
			</section>

			<div aria-hidden="true" className="coffee-divider" />

			{/* Story */}
			<section className="py-20">
				<div className="mx-auto max-w-7xl px-6">
					<div className="mx-auto max-w-3xl">
						<h2 className="label mb-4">{d.story_title}</h2>
						<p className="text-lg leading-relaxed text-[var(--awake-cream)]">{d.story}</p>
					</div>
				</div>
			</section>

			<div aria-hidden="true" className="coffee-divider" />

			{/* Values */}
			<section className="py-20">
				<div className="mx-auto max-w-7xl px-6">
					<h2 className="label mb-10 text-center">{d.values_title}</h2>
					<div className="stagger-in grid gap-8 md:grid-cols-3">
						{values.map((v) => (
							<div
								key={v.title}
								className="rounded-xl border border-[var(--awake-border)] bg-[var(--awake-surface-1)] p-8"
							>
								<v.icon className="mb-4 h-6 w-6 text-[var(--awake-coffee)]" />
								<h3 className="mb-2 text-lg font-semibold text-[var(--awake-parchment)]">
									{v.title}
								</h3>
								<p className="text-sm leading-relaxed text-[var(--awake-text-muted)]">{v.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
