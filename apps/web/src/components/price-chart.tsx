"use client"

import { coffeePrices } from "@/data/coffee-prices"
import { useState } from "react"
import {
	ResponsiveContainer,
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts"

type PricesDict = {
	title: string
	subtitle: string
	chart_title: string
	arabica: string
	robusta: string
	range_1y: string
	range_5y: string
	range_10y: string
	range_all: string
	table_title: string
	month: string
	source: string
}

const ranges = [
	{ key: "1y", months: 12 },
	{ key: "5y", months: 60 },
	{ key: "10y", months: 120 },
	{ key: "all", months: 9999 },
] as const

export function PriceChart({ dict }: { dict: PricesDict }) {
	const [range, setRange] = useState<string>("all")
	const rangeLabels: Record<string, string> = {
		"1y": dict.range_1y,
		"5y": dict.range_5y,
		"10y": dict.range_10y,
		all: dict.range_all,
	}

	const months = ranges.find((r) => r.key === range)?.months ?? 9999
	const data = coffeePrices.slice(-months)

	return (
		<div>
			{/* Range selector */}
			<div className="mb-6 flex items-center justify-between">
				<h3 className="text-lg font-semibold text-[var(--awake-parchment)]">{dict.chart_title}</h3>
				<div className="flex gap-1">
					{ranges.map((r) => (
						<button
							key={r.key}
							type="button"
							onClick={() => setRange(r.key)}
							className={`rounded px-3 py-1.5 text-xs font-medium transition-colors ${
								range === r.key
									? "bg-[var(--awake-coffee)] text-[var(--awake-parchment)]"
									: "text-[var(--awake-text-muted)] hover:bg-[var(--awake-surface-2)] hover:text-[var(--awake-cream)]"
							}`}
						>
							{rangeLabels[r.key]}
						</button>
					))}
				</div>
			</div>

			{/* Chart */}
			<div className="rounded-xl border border-[var(--awake-border)] bg-[var(--awake-surface-1)] p-6">
				<ResponsiveContainer width="100%" height={400}>
					<LineChart data={data}>
						<CartesianGrid strokeDasharray="3 3" stroke="rgba(212,197,169,0.06)" />
						<XAxis
							dataKey="date"
							tick={{ fill: "#8C7B6B", fontSize: 11, fontFamily: "JetBrains Mono" }}
							tickLine={false}
							axisLine={{ stroke: "rgba(212,197,169,0.1)" }}
						/>
						<YAxis
							tick={{ fill: "#8C7B6B", fontSize: 11, fontFamily: "JetBrains Mono" }}
							tickLine={false}
							axisLine={{ stroke: "rgba(212,197,169,0.1)" }}
							tickFormatter={(v: number) => `$${v}`}
						/>
						<Tooltip
							contentStyle={{
								backgroundColor: "#1A1209",
								border: "1px solid rgba(212,197,169,0.15)",
								borderRadius: 8,
								color: "#F5F0E8",
								fontFamily: "JetBrains Mono",
								fontSize: 12,
							}}
							formatter={(value) => [`$${Number(value).toFixed(2)}/kg`]}
						/>
						<Legend />
						<Line
							type="monotone"
							dataKey="arabica"
							name={dict.arabica}
							stroke="#6F4E37"
							strokeWidth={2}
							dot={false}
							activeDot={{ r: 4 }}
						/>
						<Line
							type="monotone"
							dataKey="robusta"
							name={dict.robusta}
							stroke="#C4A35A"
							strokeWidth={2}
							dot={false}
							activeDot={{ r: 4 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>

			{/* Source */}
			<p className="mt-4 text-xs text-[var(--awake-text-dim)]">{dict.source}</p>

			{/* Table */}
			<div className="mt-10">
				<h3 className="mb-4 text-lg font-semibold text-[var(--awake-parchment)]">
					{dict.table_title}
				</h3>
				<div className="overflow-x-auto rounded-xl border border-[var(--awake-border)]">
					<table className="w-full">
						<thead>
							<tr className="border-b border-[var(--awake-border)] bg-[var(--awake-surface-1)]">
								<th className="label px-4 py-3 text-left">{dict.month}</th>
								<th className="label px-4 py-3 text-right">{dict.arabica} (USD/kg)</th>
								<th className="label px-4 py-3 text-right">{dict.robusta} (USD/kg)</th>
							</tr>
						</thead>
						<tbody>
							{coffeePrices
								.slice(-12)
								.reverse()
								.map((row) => (
									<tr
										key={row.date}
										className="border-b border-[var(--awake-border)] last:border-0"
									>
										<td className="data-mono px-4 py-3 text-sm text-[var(--awake-cream)]">
											{row.date}
										</td>
										<td className="data-mono px-4 py-3 text-right text-sm text-[var(--awake-parchment)]">
											${row.arabica.toFixed(2)}
										</td>
										<td className="data-mono px-4 py-3 text-right text-sm text-[var(--awake-gold)]">
											${row.robusta.toFixed(2)}
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}
