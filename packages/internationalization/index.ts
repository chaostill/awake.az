import "server-only"
import type { Locale } from "./locales"

export { locales, defaultLocale, type Locale } from "./locales"

const dictionaries = {
	en: () => import("./dictionaries/en.json").then((m) => m.default),
	az: () => import("./dictionaries/az.json").then((m) => m.default),
	ru: () => import("./dictionaries/ru.json").then((m) => m.default),
}

export async function getDictionary(locale: Locale) {
	return dictionaries[locale]()
}
