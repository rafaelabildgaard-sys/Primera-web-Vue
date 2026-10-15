<script setup>
import { ref } from 'vue'
import ItemCard from './ItemCard.vue'

const martialArts = ref([
  {
    icon: '🥋',
    nombre: 'Taekwondo',
    descripcion: 'Arte marcial coreano con patadas rápidas, precisión y disciplina.',
    nivel: 'Principiante',
  },
  {
    icon: '🛡️',
    nombre: 'Hapkido',
    descripcion: 'Defensa personal con agarres, equilibrio y control del movimiento.',
    nivel: 'Intermedio',
  },
  {
    icon: '⚔️',
    nombre: 'Karate',
    descripcion: 'Técnica directa, concentración y fuerza compartida en cada golpe.',
    nivel: 'Avanzado',
  },
  {
    icon: '🐉',
    nombre: 'Kung Fu',
    descripcion: 'Tradición milenaria con fluidez, forma precisa y gran control corporal.',
    nivel: 'Intermedio',
  },
])
</script>

<template>
  <section id="disciplinas" class="section">
    <div class="section-heading">
      <p class="eyebrow">Disciplinas</p>
      <h2>Explora las artes marciales y descubre tu estilo.</h2>
    </div>

    <div class="disciplines-grid">
      <ItemCard v-for="art in martialArts" :key="art.nombre" :art="art" />
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 30px 0 24px;
}

.section-heading {
  margin-bottom: 22px;
}

.eyebrow {
  margin: 0 0 16px;
  color: #f6d17d;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.75rem;
}

.section-heading h2 {
  margin: 0;
  line-height: 1.04;
  letter-spacing: -0.05em;
  color: #f8f2e7;
  max-width: 760px;
  font-size: clamp(2.2rem, 3vw, 3.3rem);
}

.disciplines-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

@media (max-width: 980px) {
  .disciplines-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 720px) {
  .disciplines-grid {
    grid-template-columns: 1fr;
  }
}
</style>
