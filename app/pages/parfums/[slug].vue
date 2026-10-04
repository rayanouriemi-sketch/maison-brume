<script setup lang="ts">
const route = useRoute()
const { data: p, error } = await useFetch(`/api/perfumes/${route.params.slug}`)
if (error.value) throw createError({ statusCode: 404, statusMessage: 'Parfum introuvable', fatal: true })
useHead({ title: () => `${p.value?.name} — Maison Brume` })

const size = ref('50 ml')
const added = ref(false)
</script>

<template>
  <main v-if="p" class="product">
    <div class="visual" :style="{ background: p.tint }"><div class="bottle"><span>BRUME</span></div></div>
    <div class="info">
      <NuxtLink to="/parfums" class="kick">← La collection</NuxtLink>
      <h1 class="serif">{{ p.name }}</h1>
      <p class="tag">{{ p.family }} — {{ p.tagline }}</p>
      <dl>
        <dt class="kick">Tête</dt><dd class="serif">{{ p.notes.top }}</dd>
        <dt class="kick">Cœur</dt><dd class="serif">{{ p.notes.heart }}</dd>
        <dt class="kick">Fond</dt><dd class="serif">{{ p.notes.base }}</dd>
      </dl>
      <div class="sizes">
        <button v-for="(price, s) in p.prices" :key="s" class="btn" :class="{ on: size === s }" @click="size = String(s)">{{ s }}</button>
      </div>
      <button class="btn on add" @click="added = true">{{ added ? 'Ajouté au panier' : `Ajouter — ${p.prices[size]} €` }}</button>
    </div>
  </main>
</template>

<style scoped>
.product { display: grid; grid-template-columns: 1fr 1fr; min-height: 80vh; }
.visual { display: grid; place-items: center; }
.info { padding: 56px; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; }
h1 { font-size: clamp(44px, 5vw, 76px); margin: 16px 0 8px; }
.tag { color: var(--mut); margin-bottom: 28px; }
dl { display: grid; grid-template-columns: 80px 1fr; gap: 14px 20px; align-items: baseline; margin-bottom: 30px; }
dd { font-size: 22px; }
.sizes { display: flex; gap: 10px; margin-bottom: 14px; }
.sizes .btn { padding: 12px 18px; }
@media (max-width: 860px) { .product { grid-template-columns: 1fr; } .visual { min-height: 360px; } .info { padding: 32px 16px; } }
</style>
