export type Perfume = {
  slug: string
  name: string
  family: string
  tagline: string
  notes: { top: string, heart: string, base: string }
  prices: Record<string, number>
  tint: string
}

export const perfumes: Perfume[] = [
  { slug: 'pluie-d-octobre', name: 'Pluie d\'octobre', family: 'Boisé minéral', tagline: 'Une forêt après l\'averse.', notes: { top: 'Bergamote, poivre rose', heart: 'Iris, pierre mouillée', base: 'Cèdre, mousse de chêne' }, prices: { '30 ml': 72, '50 ml': 98, '100 ml': 128 }, tint: '#d8cbbd' },
  { slug: 'sel-d-ete', name: 'Sel d\'été', family: 'Aromatique marin', tagline: 'La peau chaude, le sel, le figuier.', notes: { top: 'Citron, sel marin', heart: 'Feuille de figuier, immortelle', base: 'Ambrette, bois flotté' }, prices: { '30 ml': 68, '50 ml': 94, '100 ml': 124 }, tint: '#cfd8d6' },
  { slug: 'velours-noir', name: 'Velours noir', family: 'Oriental épicé', tagline: 'Un soir d\'hiver au coin du feu.', notes: { top: 'Cardamome, safran', heart: 'Rose noire, cuir', base: 'Vanille fumée, oud' }, prices: { '30 ml': 78, '50 ml': 108, '100 ml': 145 }, tint: '#bfa79a' },
  { slug: 'jardin-blanc', name: 'Jardin blanc', family: 'Floral poudré', tagline: 'Des fleurs blanches au petit matin.', notes: { top: 'Poire, néroli', heart: 'Fleur d\'oranger, tubéreuse', base: 'Musc blanc, santal' }, prices: { '30 ml': 70, '50 ml': 96, '100 ml': 126 }, tint: '#e6ddd2' },
]
