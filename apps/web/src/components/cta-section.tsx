type CtaDict = {
	title: string
	subtitle: string
	button: string
	note: string
}

export function CtaSection({ dict }: { dict: CtaDict }) {
	return (
		<section className="py-20 md:py-28">
			<div className="mx-auto max-w-7xl px-6">
				<div className="relative overflow-hidden rounded-2xl border border-[var(--awake-border)] bg-[var(--awake-surface-1)] p-12 md:p-20">
					{/* Decorative gradient */}
					<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(111,78,55,0.1)_0%,_transparent_70%)]" />

					<div className="relative mx-auto max-w-2xl text-center">
						<h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--awake-parchment)] md:text-4xl">
							{dict.title}
						</h2>
						<p className="mt-4 text-[var(--awake-text-muted)]">{dict.subtitle}</p>

						<div className="mt-8">
							<a
								href="mailto:hello@awake.az"
								className="inline-flex h-12 items-center rounded-md bg-[var(--awake-gold)] px-8 text-sm font-semibold text-[var(--awake-espresso)] transition-colors hover:bg-[var(--awake-gold)]/90"
							>
								{dict.button}
							</a>
						</div>

						<p className="mt-4 text-xs text-[var(--awake-text-dim)]">{dict.note}</p>
					</div>
				</div>
			</div>
		</section>
	)
}
