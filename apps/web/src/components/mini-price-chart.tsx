"use client"

import { coffeePrices } from "@/data/coffee-prices"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts"

const recent = coffeePrices.slice(-24)

export function MiniPriceChart() {
	return (
		<div>
			<div className="mb-4 flex items-end justify-between">
				<div>
					<h3 className="text-sm font-semibold text-[var(--awake-parchment)]">
						Price History (24 months)
					</h3>
					<p className="mt-0.5 text-xs text-[var(--awake-text-muted)]">
						USD/kg — World Bank Pink Sheet
					</p>
				</div>
				<a
					href="/en/prices"
					className="text-[11px] font-medium text-[var(--awake-water)] hover:underline"
				>
					Full price data &rarr;
				</a>
			</div>
			<ResponsiveContainer width="100%" height={200}>
				<AreaChart data={recent} margin={{ left: 0, right: 0, top: 0, bottom: 0 }}>
					<defs>
						<linearGradient id="miniGradA" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#6F4E37" stopOpacity={0.25} />
							<stop offset="95%" stopColor="#6F4E37" stopOpacity={0} />
						</linearGradient>
						<linearGradient id="miniGradR" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#C4A35A" stopOpacity={0.25} />
							<stop offset="95%" stopColor="#C4A35A" stopOpacity={0} />
						</linearGradient>
					</defs>
					<XAxis
						dataKey="date"
						tick={{ fill: "#8C7B6B", fontSize: 9, fontFamily: "JetBrains Mono" }}
						tickLine={false}
						axisLine={{ stroke: "rgba(212,197,169,0.1)" }}
						interval={5}
					/>
					<YAxis
						tick={{ fill: "#8C7B6B", fontSize: 9, fontFamily: "JetBrains Mono" }}
						tickLine={false}
						axisLine={false}
						width={30}
						tickFormatter={(v: number) => `$${v}`}
					/>
					<Tooltip
						contentStyle={{
							backgroundColor: "#1A1209",
							border: "1px solid rgba(212,197,169,0.15)",
							borderRadius: 6,
							color: "#F5F0E8",
							fontFamily: "JetBrains Mono",
							fontSize: 11,
						}}
						formatter={(value) => [`$${Number(value).toFixed(2)}/kg`]}
					/>
					<Area
						type="monotone"
						dataKey="arabica"
						stroke="#6F4E37"
						strokeWidth={1.5}
						fill="url(#miniGradA)"
					/>
					<Area
						type="monotone"
						dataKey="robusta"
						stroke="#C4A35A"
						strokeWidth={1.5}
						fill="url(#miniGradR)"
					/>
				</AreaChart>
			</ResponsiveContainer>
			<div className="mt-2 flex items-center gap-4">
				{[
					{ label: "Arabica", color: "#6F4E37" },
					{ label: "Robusta", color: "#C4A35A" },
				].map((l) => (
					<div key={l.label} className="flex items-center gap-1.5">
						<div className="h-2 w-2 rounded-full" style={{ background: l.color }} />
						<span className="text-[10px] text-[var(--awake-text-muted)]">{l.label}</span>
					</div>
				))}
			</div>
		</div>
	)
}
