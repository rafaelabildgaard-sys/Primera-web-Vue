<script setup>
defineProps({
  art: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="discipline-card">
    <div v-if="art.icon" class="discipline-icon">{{ art.icon }}</div>
    <h3>{{ art.nombre }}</h3>
    <p>{{ art.descripcion }}</p>
    <span class="level-badge">Nivel: {{ art.nivel }}</span>
  </article>
</template>

<style scoped>
.discipline-card {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 26px 20px 22px;
  border-radius: 24px;
  border: 1px solid rgba(217, 183, 109, 0.18);
  background: linear-gradient(180deg, rgba(16, 12, 11, 0.9), rgba(18, 14, 12, 0.7));
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
}

.discipline-icon {
  display: grid;
  place-items: center;
  width: 62px;
  height: 62px;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(217, 183, 109, 0.22), rgba(125, 29, 26, 0.12));
  border: 1px solid rgba(217, 183, 109, 0.18);
  font-size: 2rem;
}

.discipline-card h3 {
  margin: 18px 0 12px;
  font-size: 1.55rem;
  color: #f8f2e7;
}

.discipline-card p {
  margin: 0;
  color: #e8d9b8;
  line-height: 1.7;
}

.level-badge {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  margin-top: 18px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(217, 183, 109, 0.12);
  border: 1px solid rgba(217, 183, 109, 0.3);
  color: #f6d17d;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
</style>
