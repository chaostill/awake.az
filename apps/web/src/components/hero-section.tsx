import { Badge } from "@awake/design-system"

type HeroDict = {
	badge: string
	title: string
	subtitle: string
	cta_primary: string
	cta_secondary: string
}

export function HeroSection({ dict }: { dict: HeroDict }) {
	return (
		<section className="relative overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-[var(--awake-surface-1)] via-[var(--awake-espresso)] to-[var(--awake-espresso)]" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(111,78,55,0.15)_0%,_transparent_60%)]" />

			<div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 md:pb-32 md:pt-36">
				<div className="mx-auto max-w-3xl text-center">
					<Badge variant="gold" className="mb-6">
						{dict.badge}
					</Badge>

					<h1 className="font-[family-name:var(--font-display)] text-5xl leading-tight text-[var(--awake-parchment)] md:text-7xl md:leading-tight">
						{dict.title}
					</h1>

					<p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--awake-cream)] md:text-xl">
						{dict.subtitle}
					</p>

					<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
						<a
							href="#stats"
							className="inline-flex h-12 items-center rounded-md bg-[var(--awake-coffee)] px-8 text-sm font-semibold text-[var(--awake-parchment)] transition-colors hover:bg-[var(--awake-coffee)]/90"
						>
							{dict.cta_primary}
						</a>
						<a
							href="#services"
							className="inline-flex h-12 items-center rounded-md border border-[var(--awake-border)] px-8 text-sm font-medium text-[var(--awake-cream)] transition-colors hover:border-[var(--awake-border-hover)] hover:bg-[var(--awake-surface-1)]"
						>
							{dict.cta_secondary}
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
