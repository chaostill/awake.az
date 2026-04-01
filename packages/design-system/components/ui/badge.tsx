import { type VariantProps, cva } from "class-variance-authority"
import type { HTMLAttributes } from "react"
import { cn } from "../../lib/utils"

export const badgeVariants = cva(
	"inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
	{
		variants: {
			variant: {
				default: "bg-[var(--awake-coffee)]/20 text-[var(--awake-coffee)]",
				gold: "bg-[var(--awake-gold)]/20 text-[var(--awake-gold)]",
				cherry: "bg-[var(--awake-cherry)]/20 text-[var(--awake-cherry)]",
				leaf: "bg-[var(--awake-leaf)]/20 text-[var(--awake-leaf)]",
				water: "bg-[var(--awake-water)]/20 text-[var(--awake-water)]",
				muted: "bg-[var(--awake-surface-2)] text-[var(--awake-text-muted)]",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
)

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>

export function Badge({ className, variant, ...props }: BadgeProps) {
	return <span className={cn(badgeVariants({ variant, className }))} {...props} />
}
