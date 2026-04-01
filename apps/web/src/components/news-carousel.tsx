"use client"

import { coffeeNews, getCategoryLabel, type NewsItem } from "@/data/coffee-news"
import { useEffect, useRef, useState } from "react"
import { m, AnimatePresence, LazyMotion, domAnimation } from "motion/react"

const categoryColors: Record<NewsItem["category"], string> = {
	market: "var(--awake-gold)",
	production: "var(--awake-leaf)",
	trade: "var(--awake-water)",
	policy: "var(--awake-cherry)",
	research: "var(--awake-coffee)",
}

export function NewsCarousel() {
	const [current, setCurrent] = useState(0)
	const [isPaused, setIsPaused] = useState(false)
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

	const items = coffeeNews

	useEffect(() => {
		if (isPaused) return
		intervalRef.current = setInterval(() => {
			setCurrent((prev) => (prev + 1) % items.length)
		}, 5000)
		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current)
		}
	}, [isPaused, items.length])

	const item = items[current]

	return (
		<LazyMotion features={domAnimation}>
			<section className="border-b border-[var(--awake-border)] bg-[var(--awake-surface-0)]">
				<div className="mx-auto max-w-7xl px-6">
					<div className="flex items-center gap-4 py-12 md:py-16">
						{/* Left: section label */}
						<div className="hidden flex-shrink-0 md:block">
							<p className="label">Latest News</p>
						</div>

						<div className="hidden h-8 w-px bg-[var(--awake-border)] md:block" />

						{/* Center: animated headline */}
						<div
							className="relative min-h-[72px] flex-1 overflow-hidden"
							onMouseEnter={() => setIsPaused(true)}
							onMouseLeave={() => setIsPaused(false)}
						>
							<AnimatePresence mode="wait">
								<m.div
									key={item.id}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
									className="flex flex-col gap-1.5"
								>
									<div className="flex items-center gap-3">
										<span
											className="inline-block h-1.5 w-1.5 rounded-full"
											style={{ background: categoryColors[item.category] }}
										/>
										<span
											className="text-[10px] font-semibold uppercase tracking-wider"
											style={{ color: categoryColors[item.category] }}
										>
											{getCategoryLabel(item.category)}
										</span>
										<span className="data-mono text-[10px] text-[var(--awake-text-dim)]">
											{item.source}
										</span>
										<span className="data-mono text-[10px] text-[var(--awake-text-dim)]">
											{item.date}
										</span>
									</div>
									<p className="text-sm leading-relaxed text-[var(--awake-parchment)] md:text-base">
										{item.headline}
									</p>
								</m.div>
							</AnimatePresence>
						</div>

						{/* Right: progress dots + controls */}
						<div className="flex flex-shrink-0 flex-col items-center gap-3">
							<div className="flex gap-1">
								{items.slice(0, 6).map((_, i) => (
									<button
										key={items[i].id}
										type="button"
										onClick={() => setCurrent(i)}
										className="group p-0.5"
										aria-label={`News item ${i + 1}`}
									>
										<div
											className={`h-1 rounded-full transition-all duration-300 ${
												i === current % 6
													? "w-4 bg-[var(--awake-coffee)]"
													: "w-1.5 bg-[var(--awake-border)] group-hover:bg-[var(--awake-text-dim)]"
											}`}
										/>
									</button>
								))}
							</div>
							<div className="flex gap-1">
								<button
									type="button"
									onClick={() => setCurrent((prev) => (prev - 1 + items.length) % items.length)}
									className="rounded p-1 text-[var(--awake-text-muted)] transition-colors hover:bg-[var(--awake-surface-2)] hover:text-[var(--awake-cream)]"
									aria-label="Previous"
								>
									<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M15 18l-6-6 6-6" />
									</svg>
								</button>
								<button
									type="button"
									onClick={() => setCurrent((prev) => (prev + 1) % items.length)}
									className="rounded p-1 text-[var(--awake-text-muted)] transition-colors hover:bg-[var(--awake-surface-2)] hover:text-[var(--awake-cream)]"
									aria-label="Next"
								>
									<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M9 18l6-6-6-6" />
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</LazyMotion>
	)
}
