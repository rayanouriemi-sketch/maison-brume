<script setup lang="ts">
useHead({ title: 'La maison — Maison Brume' })
const steps = [
  { n: '01', t: 'La matière', d: 'Nous travaillons avec des producteurs de Grasse et de Calabre, en circuit court.' },
  { n: '02', t: 'La composition', d: 'Chaque parfum demande entre 18 mois et 3 ans d\'essais avant d\'être validé.' },
  { n: '03', t: 'La macération', d: 'Six semaines au repos, à l\'abri de la lumière, pour que les notes se fondent.' },
  { n: '04', t: 'Le flaconnage', d: 'Remplis et numérotés à la main, en séries de 500 flacons.' },
]
</script>

<template>
  <main class="wrap">
    <span class="kick">Depuis 2019</span>
    <h1 class="serif">Une maison, quatre gestes.</h1>
    <p class="lead">Maison Brume compose des parfums lents, pensés pour durer sur la peau comme dans le temps.</p>
    <ol>
      <li v-for="s in steps" :key="s.n"><span class="serif num">{{ s.n }}</span><div><h2 class="serif">{{ s.t }}</h2><p>{{ s.d }}</p></div></li>
    </ol>
  </main>
</template>

<style scoped>
.wrap { padding: 50px 56px 80px; max-width: 980px; }
h1 { font-size: clamp(44px, 5.5vw, 84px); line-height: 1; margin: 14px 0 20px; }
.lead { color: var(--mut); line-height: 1.8; max-width: 520px; margin-bottom: 40px; }
ol { list-style: none; padding: 0; }
li { display: flex; gap: 32px; padding: 28px 0; border-top: 1px solid var(--line); }
.num { font-size: 40px; color: var(--gold); }
h2 { font-size: 30px; }
li p { color: var(--mut); margin-top: 6px; line-height: 1.7; }
@media (max-width: 860px) { .wrap { padding: 32px 16px; } }
</style>
