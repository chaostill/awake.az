import type { Transition } from "motion/react"

/* ── Spring presets ─────────────────────────────── */
export const springs = {
	/** Fast interactive feedback — buttons, toggles */
	snappy: { type: "spring", bounce: 0.15, duration: 0.4 } satisfies Transition,
	/** Standard enter/exit — sections, modals */
	gentle: { type: "spring", bounce: 0.08, duration: 0.6 } satisfies Transition,
	/** Counter / number tween — no bounce */
	number: { type: "spring", bounce: 0, duration: 0.8 } satisfies Transition,
	/** Physical snap — drag release, layout shift */
	stiff: { type: "spring", bounce: 0.25, duration: 0.3 } satisfies Transition,
} as const

/* ── Duration tokens (seconds) ──────────────────── */
export const durations = {
	fast: 0.15,
	normal: 0.3,
	slow: 0.6,
	glacial: 1.2,
} as const

/* ── Ease curves ────────────────────────────────── */
export const ease = {
	/** Smooth deceleration — most enters */
	out: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
	/** Smooth acceleration — most exits */
	in: [0.55, 0.06, 0.68, 0.19] as [number, number, number, number],
	/** Symmetric — hover, looping */
	inOut: [0.76, 0, 0.24, 1] as [number, number, number, number],
} as const

/* ── Section entrance preset ────────────────────── */
export const sectionEntrance: Transition = {
	...springs.gentle,
	opacity: { duration: durations.slow },
}

/* ── Stagger factory ────────────────────────────── */
export function stagger(i: number, base = 0.06): Transition {
	return { ...sectionEntrance, delay: i * base }
}
