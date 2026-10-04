<script setup lang="ts">
useHead({ title: 'Les parfums — Maison Brume' })
const { data: perfumes } = await useFetch('/api/perfumes')
</script>

<template>
  <main class="wrap">
    <span class="kick">Collection permanente</span>
    <h1 class="serif">Les parfums</h1>
    <div class="list">
      <NuxtLink v-for="p in perfumes" :key="p.slug" :to="`/parfums/${p.slug}`" class="item">
        <div class="img" :style="{ background: p.tint }"><div class="bottle"><span>BRUME</span></div></div>
        <span class="kick">{{ p.family }}</span>
        <h2 class="serif">{{ p.name }}</h2>
        <p>{{ p.tagline }} · dès {{ p.from }} €</p>
      </NuxtLink>
    </div>
  </main>
</template>

<style scoped>
.wrap { padding: 40px 56px 70px; }
h1 { font-size: clamp(44px, 5vw, 72px); margin: 10px 0 36px; }
.list { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.img { aspect-ratio: 3 / 4; display: grid; place-items: center; margin-bottom: 16px; overflow: hidden; }
.img .bottle { transform: scale(.75); transition: transform .5s; }
.item:hover .bottle { transform: scale(.8) translateY(-8px); }
h2 { font-size: 26px; margin: 6px 0; }
.item p { color: var(--mut); font-size: 14px; }
@media (max-width: 860px) { .wrap { padding: 24px 16px; } .list { grid-template-columns: 1fr 1fr; } }
</style>
