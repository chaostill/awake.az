"use client"

import { topExporters, topImporters } from "@/data/coffee-production"
import { useState, useMemo } from "react"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

type View = "exports" | "imports"

function normalizeData(view: View) {
	if (view === "exports") {
		return topExporters.map((d) => ({ country: d.country, value: d.exports }))
	}
	return topImporters.map((d) => ({ country: d.country, value: d.imports }))
}

export function TradeFlowChart() {
	const [view, setView] = useState<View>("exports")
	const data = useMemo(() => normalizeData(view), [view])
	const color = view === "exports" ? "#5A7247" : "#4A7C8C"

	return (
		<div>
			<div className="mb-4 flex items-end justify-between">
				<div>
					<h3 className="text-sm font-semibold text-[var(--awake-parchment)]">
						Global Trade Flows
					</h3>
					<p className="mt-0.5 text-xs text-[var(--awake-text-muted)]">
						2023 calendar year — thousand 60-kg bags
					</p>
				</div>
				<div className="flex rounded-md border border-[var(--awake-border)] bg-[var(--awake-surface-0)]">
					{(["exports", "imports"] as const).map((v) => (
						<button
							key={v}
							type="button"
							onClick={() => setView(v)}
							className={`px-3 py-1 text-[11px] font-medium capitalize transition-colors ${
								view === v
									? "bg-[var(--awake-surface-2)] text-[var(--awake-parchment)]"
									: "text-[var(--awake-text-muted)] hover:text-[var(--awake-cream)]"
							}`}
						>
							{v}
						</button>
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
						width={100}
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
						view === "exports" ? "Exports" : "Imports",
					]}
					/>
					<Bar dataKey="value" fill={color} fillOpacity={0.8} radius={[0, 3, 3, 0]} maxBarSize={20} />
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}
