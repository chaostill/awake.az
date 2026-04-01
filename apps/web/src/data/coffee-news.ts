/** Global coffee news — curated headlines (sample data, will be replaced with real feed) */
export type NewsItem = {
	id: string
	date: string
	source: string
	headline: string
	category: "market" | "production" | "trade" | "policy" | "research"
	url?: string
}

export const coffeeNews: NewsItem[] = [
	{
		id: "n1",
		date: "2024-12-18",
		source: "ICO",
		headline: "Global coffee production forecast to reach 178 million bags in 2023/24 crop year",
		category: "production",
	},
	{
		id: "n2",
		date: "2024-12-15",
		source: "Reuters",
		headline: "Arabica futures hit 13-year high as Brazil drought threatens 2025 harvest outlook",
		category: "market",
	},
	{
		id: "n3",
		date: "2024-12-12",
		source: "USDA",
		headline: "Vietnam robusta exports up 8.2% year-on-year driven by strong European demand",
		category: "trade",
	},
	{
		id: "n4",
		date: "2024-12-10",
		source: "World Bank",
		headline: "Coffee commodity index rises 34% in 2024, outperforming all soft commodities",
		category: "market",
	},
	{
		id: "n5",
		date: "2024-12-08",
		source: "EU Commission",
		headline: "European Union Deforestation Regulation implementation deadline extended to December 2025",
		category: "policy",
	},
	{
		id: "n6",
		date: "2024-12-05",
		source: "SCA",
		headline: "World Coffee Research releases updated Climate Resilience Index for 47 producing origins",
		category: "research",
	},
	{
		id: "n7",
		date: "2024-12-02",
		source: "Bloomberg",
		headline: "Colombia's coffee federation reports record specialty grade output for third consecutive quarter",
		category: "production",
	},
	{
		id: "n8",
		date: "2024-11-28",
		source: "ICO",
		headline: "Global coffee consumption grows 1.7% as emerging markets accelerate adoption",
		category: "trade",
	},
	{
		id: "n9",
		date: "2024-11-25",
		source: "FAOSTAT",
		headline: "Ethiopia overtakes Honduras as world's fifth largest coffee exporter by volume",
		category: "trade",
	},
	{
		id: "n10",
		date: "2024-11-22",
		source: "Daily Coffee News",
		headline: "Indonesia's Sumatra Mandheling crop faces 15% yield reduction due to El Niño conditions",
		category: "production",
	},
]

const categoryLabels: Record<NewsItem["category"], string> = {
	market: "Market",
	production: "Production",
	trade: "Trade",
	policy: "Policy",
	research: "Research",
}

export function getCategoryLabel(cat: NewsItem["category"]): string {
	return categoryLabels[cat]
}
