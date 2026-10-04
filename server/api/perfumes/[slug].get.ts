export default defineEventHandler((event) => {
  const perfume = perfumes.find(p => p.slug === getRouterParam(event, 'slug'))
  if (!perfume) throw createError({ statusCode: 404, statusMessage: 'Parfum introuvable' })
  return perfume
})
