<script setup lang="ts">
const { data: hero } = await useFetch('/api/perfumes/pluie-d-octobre')
</script>

<template>
  <main v-if="hero">
    <section class="hero">
      <div class="txt">
        <span class="kick">Nouvelle eau de parfum</span>
        <h1 class="serif">Pluie <em>d'octobre</em></h1>
        <p>Une fragrance boisée et minérale, comme une forêt après l'averse. Composée à Grasse, en petites séries numérotées.</p>
        <NuxtLink :to="`/parfums/${hero.slug}`" class="btn">Découvrir — dès {{ hero.prices['30 ml'] }} €</NuxtLink>
      </div>
      <div class="visual"><div class="bottle float"><span>BRUME</span></div></div>
    </section>
    <section class="notes">
      <div><span class="kick">Tête</span><h3 class="serif">{{ hero.notes.top }}</h3><p>Une ouverture vive et lumineuse.</p></div>
      <div><span class="kick">Cœur</span><h3 class="serif">{{ hero.notes.heart }}</h3><p>La signature minérale de la maison.</p></div>
      <div><span class="kick">Fond</span><h3 class="serif">{{ hero.notes.base }}</h3><p>Un sillage boisé qui tient la journée.</p></div>
    </section>
  </main>
</template>

<style scoped>
.hero { display: grid; grid-template-columns: 1fr 1fr; min-height: 78vh; }
.txt { padding: 60px 56px; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; }
h1 { font-size: clamp(48px, 6vw, 92px); line-height: .95; margin: 18px 0 24px; }
h1 em { color: var(--gold); }
.txt p { color: var(--mut); line-height: 1.8; max-width: 420px; margin-bottom: 34px; }
.visual { background: linear-gradient(160deg, #d8cbbd, #b9a48e); display: grid; place-items: center; }
.float { animation: float 6s ease-in-out infinite; }
@keyframes float { 50% { transform: translateY(-14px); } }
.notes { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); }
.notes div { padding: 36px 56px; border-right: 1px solid var(--line); }
.notes div:last-child { border: 0; }
.notes h3 { font-size: 28px; margin: 8px 0; }
.notes p { color: var(--mut); font-size: 14px; }
@media (max-width: 860px) {
  .hero, .notes { grid-template-columns: 1fr; }
  .txt, .notes div { padding: 36px 16px; }
  .visual { min-height: 380px; }
}
</style>
