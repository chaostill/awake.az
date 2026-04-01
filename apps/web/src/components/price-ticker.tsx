import { latestPrices } from "@/data/coffee-prices"
import { TrendingUp, TrendingDown } from "lucide-react"

type TickerDict = {
	arabica_label: string
	robusta_label: string
	updated: string
}

export function PriceTicker({ dict }: { dict: TickerDict }) {
	const { arabica, robusta, lastUpdated } = latestPrices

	return (
		<div className="border-y border-[var(--awake-border)] bg-[var(--awake-surface-1)]">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
				<div className="flex items-center gap-8">
					{/* Arabica */}
					<div className="flex items-center gap-3">
						<span className="label">{dict.arabica_label}</span>
						<span className="data-mono text-lg font-semibold text-[var(--awake-parchment)]">
							${arabica.price.toFixed(2)}
						</span>
						<span
							className={`data-mono flex items-center gap-1 text-xs font-medium ${
								arabica.change >= 0 ? "text-[var(--awake-leaf)]" : "text-[var(--awake-cherry)]"
							}`}
						>
							{arabica.change >= 0 ? (
								<TrendingUp className="h-3 w-3" />
							) : (
								<TrendingDown className="h-3 w-3" />
							)}
							{arabica.change >= 0 ? "+" : ""}
							{arabica.change.toFixed(2)}%
						</span>
					</div>

					{/* Robusta */}
					<div className="flex items-center gap-3">
						<span className="label">{dict.robusta_label}</span>
						<span className="data-mono text-lg font-semibold text-[var(--awake-parchment)]">
							${robusta.price.toFixed(2)}
						</span>
						<span
							className={`data-mono flex items-center gap-1 text-xs font-medium ${
								robusta.change >= 0 ? "text-[var(--awake-leaf)]" : "text-[var(--awake-cherry)]"
							}`}
						>
							{robusta.change >= 0 ? (
								<TrendingUp className="h-3 w-3" />
							) : (
								<TrendingDown className="h-3 w-3" />
							)}
							{robusta.change >= 0 ? "+" : ""}
							{robusta.change.toFixed(2)}%
						</span>
					</div>
				</div>

				<span className="hidden text-xs text-[var(--awake-text-dim)] md:block">
					{dict.updated}: {lastUpdated}
				</span>
			</div>
		</div>
	)
}
