"use client"

import { consumptionByRegion } from "@/data/coffee-production"
import {
	ResponsiveContainer,
	PieChart,
	Pie,
	Cell,
	Tooltip,
} from "recharts"

const COLORS = [
	"#6F4E37", "#C4A35A", "#8C7B6B", "#5A7247", "#4A7C8C",
	"#C23B22", "#D4C5A9", "#A0522D", "#7B6B5A", "#9B8577",
	"#6B8E6B", "#8B7355", "#3D5A5A",
]

const top8 = consumptionByRegion.slice(0, 8)

export function ConsumptionChart() {
	return (
		<div>
			<div className="mb-4">
				<h3 className="text-sm font-semibold text-[var(--awake-parchment)]">
					Consumption by Region
				</h3>
				<p className="mt-0.5 text-xs text-[var(--awake-text-muted)]">
					2023/24 — share of world consumption
				</p>
			</div>
			<div className="flex items-start gap-4">
				<ResponsiveContainer width="55%" height={220}>
					<PieChart>
						<Pie
							data={top8}
							dataKey="consumption"
							nameKey="region"
							cx="50%"
							cy="50%"
							innerRadius={45}
							outerRadius={85}
							paddingAngle={2}
							strokeWidth={0}
						>
							{top8.map((_, i) => (
								<Cell key={top8[i].region} fill={COLORS[i % COLORS.length]} fillOpacity={0.85} />
							))}
						</Pie>
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
							`${(Number(value) / 1000).toFixed(1)}M bags`,
							"Consumption",
						]}
						/>
					</PieChart>
				</ResponsiveContainer>
				<div className="flex flex-1 flex-col gap-1.5 pt-2">
					{top8.map((r, i) => (
						<div key={r.region} className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-1.5">
								<div
									className="h-2 w-2 flex-shrink-0 rounded-sm"
									style={{ background: COLORS[i % COLORS.length] }}
								/>
								<span className="truncate text-[11px] text-[var(--awake-cream)]">{r.region}</span>
							</div>
							<span className="data-mono flex-shrink-0 text-[10px] text-[var(--awake-text-muted)]">
								{r.share}%
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
