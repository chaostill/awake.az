import { sellers } from "@/data/sellers"
import { MapPin, Star } from "lucide-react"
import { Badge } from "@awake/design-system"

type SellersDict = {
	title: string
	subtitle: string
	view_all: string
	location: string
	specialty: string
}

export function SellersSection({ dict, locale }: { dict: SellersDict; locale: string }) {
	const featured = sellers.filter((s) => s.featured)

	return (
		<section className="py-20 md:py-28">
			<div className="mx-auto max-w-7xl px-6">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--awake-parchment)] md:text-4xl">
						{dict.title}
					</h2>
					<p className="mt-4 text-[var(--awake-text-muted)]">{dict.subtitle}</p>
				</div>

				<div className="stagger-in mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{featured.map((seller) => (
						<div
							key={seller.id}
							className="group rounded-xl border border-[var(--awake-border)] bg-[var(--awake-surface-1)] p-6 transition-colors hover:border-[var(--awake-border-hover)]"
						>
							<div className="mb-4 flex items-start justify-between">
								<h3 className="font-semibold text-[var(--awake-parchment)]">{seller.name}</h3>
								<div className="flex items-center gap-1 text-[var(--awake-gold)]">
									<Star className="h-3.5 w-3.5 fill-current" />
									<span className="data-mono text-xs">{seller.rating}</span>
								</div>
							</div>

							<p className="mb-4 text-sm text-[var(--awake-text-muted)]">{seller.description}</p>

							<div className="flex flex-wrap gap-2">
								<Badge variant="muted">
									<MapPin className="mr-1 h-3 w-3" />
									{seller.location}
								</Badge>
								<Badge variant="default">{seller.specialty}</Badge>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
