import { sellers } from "@/data/sellers"
import { MapPin } from "lucide-react"
import Link from "next/link"

export function DirectoryPreview({ locale }: { locale: string }) {
	return (
		<section id="directory" className="py-16 md:py-20">
			<div className="mx-auto max-w-7xl px-6">
				<div className="mb-8 flex items-end justify-between">
					<div>
						<p className="label mb-2">Azerbaijan Coffee Directory</p>
						<h2 className="font-[family-name:var(--font-display)] text-2xl text-[var(--awake-parchment)] md:text-3xl">
							Registered Sellers & Roasters
						</h2>
					</div>
					<span className="data-mono text-xs text-[var(--awake-text-muted)]">
						{sellers.length} entries
					</span>
				</div>

				<div className="overflow-x-auto rounded-lg border border-[var(--awake-border)]">
					<table className="w-full">
						<thead>
							<tr className="border-b border-[var(--awake-border)] bg-[var(--awake-surface-1)]">
								<th className="label px-4 py-3 text-left">Name</th>
								<th className="label px-4 py-3 text-left">Location</th>
								<th className="label px-4 py-3 text-left">Specialty</th>
								<th className="label hidden px-4 py-3 text-right md:table-cell">Rating</th>
							</tr>
						</thead>
						<tbody>
							{sellers.map((seller) => (
								<tr
									key={seller.id}
									className="border-b border-[var(--awake-border)] transition-colors last:border-0 hover:bg-[var(--awake-surface-1)]/50"
								>
									<td className="px-4 py-3">
										<span className="text-sm font-medium text-[var(--awake-parchment)]">
											{seller.name}
										</span>
									</td>
									<td className="px-4 py-3">
										<span className="flex items-center gap-1.5 text-sm text-[var(--awake-cream)]">
											<MapPin className="h-3 w-3 text-[var(--awake-coffee)]" />
											{seller.location}
										</span>
									</td>
									<td className="px-4 py-3">
										<span className="rounded-full border border-[var(--awake-border)] px-2.5 py-0.5 text-[11px] text-[var(--awake-text-muted)]">
											{seller.specialty}
										</span>
									</td>
									<td className="hidden px-4 py-3 text-right md:table-cell">
										<span className="data-mono text-xs text-[var(--awake-gold)]">
											{seller.rating}
										</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<p className="mt-3 text-xs text-[var(--awake-text-dim)]">
					Directory is maintained through partnership agreements. Contact us for listing inquiries.
				</p>
			</div>
		</section>
	)
}
