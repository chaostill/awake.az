import { type VariantProps, cva } from "class-variance-authority"
import type { ButtonHTMLAttributes } from "react"
import { cn } from "../../lib/utils"

export const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--awake-coffee)] disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default:
					"bg-[var(--awake-coffee)] text-[var(--awake-parchment)] hover:bg-[var(--awake-coffee)]/90",
				secondary:
					"bg-[var(--awake-surface-2)] text-[var(--awake-cream)] hover:bg-[var(--awake-surface-3)]",
				outline:
					"border border-[var(--awake-border)] text-[var(--awake-cream)] hover:bg-[var(--awake-surface-1)] hover:border-[var(--awake-border-hover)]",
				ghost: "text-[var(--awake-cream)] hover:bg-[var(--awake-surface-1)]",
				gold: "bg-[var(--awake-gold)] text-[var(--awake-espresso)] hover:bg-[var(--awake-gold)]/90 font-semibold",
			},
			size: {
				default: "h-10 px-5 text-sm",
				sm: "h-8 px-3 text-xs",
				lg: "h-12 px-8 text-base",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
)

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants>

export function Button({ className, variant, size, ...props }: ButtonProps) {
	return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />
}
