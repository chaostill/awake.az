"use client"

import { topProducers } from "@/data/coffee-production"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from "recharts"

const data = topProducers.slice(0, 10)

const typeColors: Record<string, string> = {
	arabica: "#6F4E37",
	robusta: "#C4A35A",
	both: "#8C7B6B",
}

export function ProductionChart() {
	return (
		<div>
			<div className="mb-4 flex items-end justify-between">
				<div>
					<h3 className="text-sm font-semibold text-[var(--awake-parchment)]">
						Top Producing Countries
					</h3>
					<p className="mt-0.5 text-xs text-[var(--awake-text-muted)]">
						Crop year 2023/24 — thousand 60-kg bags
					</p>
				</div>
				<div className="flex items-center gap-3">
					{[
						{ label: "Arabica", color: "#6F4E37" },
						{ label: "Robusta", color: "#C4A35A" },
						{ label: "Both", color: "#8C7B6B" },
					].map((l) => (
						<div key={l.label} className="flex items-center gap-1.5">
							<div className="h-2 w-2 rounded-full" style={{ background: l.color }} />
							<span className="text-[10px] text-[var(--awake-text-muted)]">{l.label}</span>
						</div>
					))}
				</div>
			</div>
			<ResponsiveContainer width="100%" height={320}>
				<BarChart data={data} layout="vertical" margin={{ left: 0, right: 20, top: 0, bottom: 0 }}>
					<CartesianGrid strokeDasharray="3 3" stroke="rgba(212,197,169,0.06)" horizontal={false} />
					<XAxis
						type="number"
						tick={{ fill: "#8C7B6B", fontSize: 10, fontFamily: "JetBrains Mono" }}
						tickLine={false}
						axisLine={{ stroke: "rgba(212,197,169,0.1)" }}
						tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}k`}
					/>
					<YAxis
						type="category"
						dataKey="country"
						width={90}
						tick={{ fill: "#D4C5A9", fontSize: 11 }}
						tickLine={false}
						axisLine={false}
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
					formatter={(value) => [
						`${Number(value).toLocaleString()} bags`,
						"Production",
					]}
					/>
					<Bar dataKey="production" radius={[0, 3, 3, 0]} maxBarSize={20}>
						{data.map((entry) => (
							<Cell key={entry.code} fill={typeColors[entry.type]} fillOpacity={0.85} />
						))}
					</Bar>
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}
