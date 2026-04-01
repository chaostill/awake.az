/** Global coffee production data by country — USDA PSD / ICO (sample) */

export type ProducerData = {
	country: string
	code: string
	production: number // thousand 60-kg bags, 2023/24
	share: number // percent of world total
	type: "arabica" | "robusta" | "both"
}

/** Top 20 producing countries, 2023/24 crop year */
export const topProducers: ProducerData[] = [
	{ country: "Brazil", code: "BR", production: 66_400, share: 37.3, type: "both" },
	{ country: "Vietnam", code: "VN", production: 29_000, share: 16.3, type: "robusta" },
	{ country: "Colombia", code: "CO", production: 11_400, share: 6.4, type: "arabica" },
	{ country: "Indonesia", code: "ID", production: 10_700, share: 6.0, type: "both" },
	{ country: "Ethiopia", code: "ET", production: 8_350, share: 4.7, type: "arabica" },
	{ country: "Honduras", code: "HN", production: 6_100, share: 3.4, type: "arabica" },
	{ country: "India", code: "IN", production: 5_800, share: 3.3, type: "both" },
	{ country: "Uganda", code: "UG", production: 5_500, share: 3.1, type: "robusta" },
	{ country: "Mexico", code: "MX", production: 4_000, share: 2.2, type: "arabica" },
	{ country: "Peru", code: "PE", production: 3_800, share: 2.1, type: "arabica" },
	{ country: "Guatemala", code: "GT", production: 3_300, share: 1.9, type: "both" },
	{ country: "Nicaragua", code: "NI", production: 2_800, share: 1.6, type: "arabica" },
	{ country: "Côte d'Ivoire", code: "CI", production: 2_400, share: 1.3, type: "robusta" },
	{ country: "Costa Rica", code: "CR", production: 1_400, share: 0.8, type: "arabica" },
	{ country: "Tanzania", code: "TZ", production: 1_350, share: 0.8, type: "both" },
	{ country: "Kenya", code: "KE", production: 850, share: 0.5, type: "arabica" },
	{ country: "Papua New Guinea", code: "PG", production: 800, share: 0.4, type: "both" },
	{ country: "El Salvador", code: "SV", production: 750, share: 0.4, type: "arabica" },
	{ country: "Cameroon", code: "CM", production: 600, share: 0.3, type: "robusta" },
	{ country: "Rwanda", code: "RW", production: 350, share: 0.2, type: "arabica" },
]

/** Annual world production totals (thousand 60-kg bags), ICO data */
export const annualProduction = [
	{ year: "2014/15", arabica: 87_300, robusta: 63_500, total: 150_800 },
	{ year: "2015/16", arabica: 90_800, robusta: 58_200, total: 149_000 },
	{ year: "2016/17", arabica: 97_500, robusta: 62_800, total: 160_300 },
	{ year: "2017/18", arabica: 95_200, robusta: 66_400, total: 161_600 },
	{ year: "2018/19", arabica: 99_300, robusta: 69_700, total: 169_000 },
	{ year: "2019/20", arabica: 96_500, robusta: 73_200, total: 169_700 },
	{ year: "2020/21", arabica: 99_100, robusta: 71_300, total: 170_400 },
	{ year: "2021/22", arabica: 97_900, robusta: 72_800, total: 170_700 },
	{ year: "2022/23", arabica: 98_600, robusta: 75_200, total: 173_800 },
	{ year: "2023/24", arabica: 100_200, robusta: 78_000, total: 178_200 },
]

/** Global consumption by region (thousand 60-kg bags), 2023/24 */
export const consumptionByRegion = [
	{ region: "European Union", consumption: 44_500, share: 25.4 },
	{ region: "United States", consumption: 27_200, share: 15.5 },
	{ region: "Brazil", consumption: 22_800, share: 13.0 },
	{ region: "Japan", consumption: 7_500, share: 4.3 },
	{ region: "Indonesia", consumption: 5_200, share: 3.0 },
	{ region: "Philippines", consumption: 4_800, share: 2.7 },
	{ region: "Ethiopia", consumption: 4_200, share: 2.4 },
	{ region: "Canada", consumption: 3_800, share: 2.2 },
	{ region: "Russia", consumption: 3_500, share: 2.0 },
	{ region: "South Korea", consumption: 3_000, share: 1.7 },
	{ region: "United Kingdom", consumption: 2_800, share: 1.6 },
	{ region: "Turkey", consumption: 2_400, share: 1.4 },
	{ region: "Rest of World", consumption: 43_500, share: 24.8 },
]

/** Top exporting countries (thousand 60-kg bags), 2023 calendar year */
export const topExporters = [
	{ country: "Brazil", exports: 40_200 },
	{ country: "Vietnam", exports: 27_500 },
	{ country: "Colombia", exports: 10_800 },
	{ country: "Indonesia", exports: 7_200 },
	{ country: "Honduras", exports: 5_600 },
	{ country: "Ethiopia", exports: 4_100 },
	{ country: "India", exports: 3_900 },
	{ country: "Uganda", exports: 3_800 },
	{ country: "Peru", exports: 3_200 },
	{ country: "Guatemala", exports: 2_900 },
]

/** Top importing countries (thousand 60-kg bags), 2023 calendar year */
export const topImporters = [
	{ country: "United States", imports: 26_500 },
	{ country: "Germany", imports: 13_200 },
	{ country: "Italy", imports: 8_800 },
	{ country: "Japan", imports: 7_200 },
	{ country: "France", imports: 6_400 },
	{ country: "Belgium", imports: 5_100 },
	{ country: "Spain", imports: 4_800 },
	{ country: "Canada", imports: 4_200 },
	{ country: "Netherlands", imports: 3_900 },
	{ country: "South Korea", imports: 3_400 },
]

/** Market summary statistics */
export const marketSummary = {
	totalProduction: 178.2, // million bags
	totalConsumption: 175.2, // million bags
	totalExports: 130.8, // million bags
	tradeValue: 26.4, // billion USD
	producingCountries: 73,
	importingCountries: 140,
	arabicaShare: 56.2, // percent
	robustaShare: 43.8, // percent
	employmentMillions: 125, // people employed in coffee sector
	cropYear: "2023/24",
}
