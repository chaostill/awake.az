import { type Locale, getDictionary } from "@awake/internationalization"
import { Mail, MapPin } from "lucide-react"

type Props = { params: Promise<{ locale: string }> }

export default async function ContactPage({ params }: Props) {
	const { locale } = await params
	const dict = await getDictionary(locale as Locale)
	const d = dict.contact

	return (
		<section className="py-20 md:py-28">
			<div className="mx-auto max-w-7xl px-6">
				<div className="mx-auto max-w-3xl">
					<h1 className="font-[family-name:var(--font-display)] text-4xl text-[var(--awake-parchment)] md:text-6xl">
						{d.title}
					</h1>
					<p className="mt-4 text-xl text-[var(--awake-text-muted)]">{d.subtitle}</p>

					<div className="mt-12 grid gap-8 md:grid-cols-2">
						{/* Contact info */}
						<div className="space-y-8">
							<div>
								<h3 className="label mb-2">{d.email_label}</h3>
								<a
									href={`mailto:${d.email}`}
									className="flex items-center gap-2 text-lg text-[var(--awake-water)] hover:underline"
								>
									<Mail className="h-4 w-4" />
									{d.email}
								</a>
							</div>

							<div>
								<h3 className="label mb-2">{d.location_label}</h3>
								<p className="flex items-center gap-2 text-lg text-[var(--awake-cream)]">
									<MapPin className="h-4 w-4 text-[var(--awake-coffee)]" />
									{d.location}
								</p>
							</div>
						</div>

						{/* Contact form (static — no backend yet) */}
						<form className="space-y-4">
							<div>
								<label htmlFor="name" className="label mb-1.5 block">
									{d.form_name}
								</label>
								<input
									id="name"
									type="text"
									className="h-10 w-full rounded-md border border-[var(--awake-border)] bg-[var(--awake-surface-1)] px-4 text-sm text-[var(--awake-parchment)] placeholder:text-[var(--awake-text-dim)] focus:border-[var(--awake-coffee)] focus:outline-none"
								/>
							</div>
							<div>
								<label htmlFor="email" className="label mb-1.5 block">
									{d.form_email}
								</label>
								<input
									id="email"
									type="email"
									className="h-10 w-full rounded-md border border-[var(--awake-border)] bg-[var(--awake-surface-1)] px-4 text-sm text-[var(--awake-parchment)] placeholder:text-[var(--awake-text-dim)] focus:border-[var(--awake-coffee)] focus:outline-none"
								/>
							</div>
							<div>
								<label htmlFor="message" className="label mb-1.5 block">
									{d.form_message}
								</label>
								<textarea
									id="message"
									rows={5}
									className="w-full rounded-md border border-[var(--awake-border)] bg-[var(--awake-surface-1)] px-4 py-3 text-sm text-[var(--awake-parchment)] placeholder:text-[var(--awake-text-dim)] focus:border-[var(--awake-coffee)] focus:outline-none"
								/>
							</div>
							<button
								type="submit"
								className="h-10 rounded-md bg-[var(--awake-coffee)] px-6 text-sm font-medium text-[var(--awake-parchment)] transition-colors hover:bg-[var(--awake-coffee)]/90"
							>
								{d.form_submit}
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
