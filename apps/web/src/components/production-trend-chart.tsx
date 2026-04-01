"use client"

import { annualProduction } from "@/data/coffee-production"
import {
	ResponsiveContainer,
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
} from "recharts"

export function ProductionTrendChart() {
	return (
		<div>
			<div className="mb-4">
				<h3 className="text-sm font-semibold text-[var(--awake-parchment)]">
					World Production Trend
				</h3>
				<p className="mt-0.5 text-xs text-[var(--awake-text-muted)]">
					Arabica vs Robusta — million 60-kg bags
				</p>
			</div>
			<ResponsiveContainer width="100%" height={240}>
				<AreaChart data={annualProduction} margin={{ left: 0, right: 0, top: 0, bottom: 0 }}>
					<defs>
						<linearGradient id="gradArabica" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#6F4E37" stopOpacity={0.3} />
							<stop offset="95%" stopColor="#6F4E37" stopOpacity={0} />
						</linearGradient>
						<linearGradient id="gradRobusta" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#C4A35A" stopOpacity={0.3} />
							<stop offset="95%" stopColor="#C4A35A" stopOpacity={0} />
						</linearGradient>
					</defs>
					<CartesianGrid strokeDasharray="3 3" stroke="rgba(212,197,169,0.06)" />
					<XAxis
						dataKey="year"
						tick={{ fill: "#8C7B6B", fontSize: 10, fontFamily: "JetBrains Mono" }}
						tickLine={false}
						axisLine={{ stroke: "rgba(212,197,169,0.1)" }}
					/>
					<YAxis
						tick={{ fill: "#8C7B6B", fontSize: 10, fontFamily: "JetBrains Mono" }}
						tickLine={false}
						axisLine={false}
						tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}M`}
						width={40}
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
					formatter={(value, name) => [
						`${(Number(value) / 1000).toFixed(1)}M bags`,
						String(name).charAt(0).toUpperCase() + String(name).slice(1),
					]}
					/>
					<Area
						type="monotone"
						dataKey="arabica"
						stroke="#6F4E37"
						strokeWidth={2}
						fill="url(#gradArabica)"
					/>
					<Area
						type="monotone"
						dataKey="robusta"
						stroke="#C4A35A"
						strokeWidth={2}
						fill="url(#gradRobusta)"
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
