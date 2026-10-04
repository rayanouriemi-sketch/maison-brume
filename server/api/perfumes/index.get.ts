export default defineEventHandler(() =>
  perfumes.map(({ slug, name, family, tagline, tint, prices }) => ({ slug, name, family, tagline, tint, from: Math.min(...Object.values(prices)) })),
)
