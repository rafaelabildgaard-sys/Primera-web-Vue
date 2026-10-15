<script setup>
import { onMounted, ref } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import ItemCard from '../components/ItemCard.vue'
import { db } from '../firebase'

const arts = ref([])
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    const snapshot = await getDocs(collection(db, 'artes_marciales'))
    arts.value = snapshot.docs.map((document) => ({
      ...document.data(),
      id: document.id,
    }))
  } catch (cause) {
    console.error('No se pudo cargar la colección artes_marciales de Firestore:', cause)
    error.value = 'No se pudo cargar el catálogo. Inténtalo de nuevo más tarde.'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="view-shell">
    <main>
      <h1>Catálogo de artes marciales</h1>
      <p>
        Explora disciplinas como taekwondo, hapkido, karate y kung fu para conocer sus técnicas y
        características.
      </p>
      <p v-if="loading" role="status">Cargando catálogo...</p>
      <p v-else-if="error" role="alert">{{ error }}</p>
      <p v-else-if="arts.length === 0">Todavía no hay artes marciales en el catálogo.</p>
      <div v-else class="arts-grid">
        <ItemCard v-for="art in arts" :key="art.id" :art="art" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.view-shell {
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px;
  color: #f8f2e7;
  background: #090909;
}

main > h1 {
  color: #f6d17d;
}

main > p {
  color: #eadbb7;
}

.arts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 20px;
}
</style>
