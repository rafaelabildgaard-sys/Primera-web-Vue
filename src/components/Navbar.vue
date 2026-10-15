<template>
  <header class="topbar">
    <div class="branding">
      <span class="brand-mark">🥋</span>
      <div>
        <strong>MartialArts</strong>
        <small>Academia de combate</small>
      </div>
    </div>

    <nav class="nav" aria-label="Navegación principal">
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/catalog">Catálogo</RouterLink>
      <RouterLink to="/about">Información</RouterLink>
    </nav>

    <RouterLink class="button primary" to="/catalog">Explorar disciplinas</RouterLink>
  </header>
</template>

<style scoped>
.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 18px 22px;
  margin-bottom: 30px;
  border: 1px solid rgba(217, 183, 109, 0.22);
  border-radius: 18px;
  background: rgba(17, 15, 15, 0.88);
  backdrop-filter: blur(16px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.branding {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, #f6d17d, #b6731b);
  box-shadow: 0 10px 25px rgba(217, 183, 109, 0.4);
  font-size: 1.55rem;
}

.branding strong {
  display: block;
  font-size: 1.08rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #f8f2e7;
}

.branding small {
  display: block;
  color: #d8c7a9;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.68rem;
}

.nav {
  display: flex;
  align-items: center;
  gap: 24px;
  color: #f4e8d2;
  font-size: 0.96rem;
}

.nav a {
  color: #f4e8d2;
  transition: color 0.2s ease, transform 0.2s ease;
  text-decoration: none;
}

.nav a:hover,
.nav a:focus-visible {
  color: #f6d17d;
  transform: translateY(-1px);
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  border-radius: 999px;
  border: 1px solid transparent;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.button:hover,
.button:focus-visible {
  transform: translateY(-1px);
}

.button.primary {
  background: linear-gradient(135deg, #d9b76d, #b77718);
  color: #1d1206;
  box-shadow: 0 12px 28px rgba(217, 183, 109, 0.35);
}

@media (max-width: 720px) {
  .topbar {
    flex-wrap: wrap;
    justify-content: center;
  }

  .nav {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
