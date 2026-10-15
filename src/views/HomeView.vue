<script setup>
import ItemList from '../components/ItemList.vue'

const benefits = [
  'Mejora la resistencia cardiovascular y la fuerza muscular.',
  'Desarrolla concentración, paciencia y autoconfianza.',
  'Fortalece la postura, el equilibrio y la coordinación.',
  'Aprendes a manejar el estrés con disciplina y calma.',
]

const paths = [
  {
    step: '01',
    title: 'Fundamentos',
    text: 'Postura, respiración, agarres básicos y primeras combinaciones.',
  },
  {
    step: '02',
    title: 'Técnica',
    text: 'Golpes, patadas, bloqueos y aplicación funcional de cada movimiento.',
  },
  {
    step: '03',
    title: 'Combate',
    text: 'Sparring controlado, timing y estrategia para mejorar la reacción.',
  },
  {
    step: '04',
    title: 'Mente y espíritu',
    text: 'Respeto, ética, liderazgo y una disciplina que trasciende el tatami.',
  },
]

const stats = [
  { value: '15+', label: 'años de experiencia' },
  { value: '4', label: 'disciplinas principales' },
  { value: '1000+', label: 'alumnos formados' },
  { value: '24/7', label: 'mentalidad de crecimiento' },
]
</script>

<template>
  <div class="page-shell">
    <main>
      <section id="inicio" class="hero section">
        <div class="hero-copy">
          <p class="eyebrow">Descubre tu fuerza interior</p>
          <h1>Artes marciales para fortalecer cuerpo, mente y carácter.</h1>
          <p class="lead">
            En MartialArts combinamos tradición, técnica y disciplina para ayudarte a crecer
            físicamente y a desarrollar confianza, equilibrio y respeto.
          </p>

          <div class="hero-actions">
            <a class="button primary" href="#disciplinas">Ver disciplinas</a>
            <a class="button secondary" href="#beneficios">¿Por qué entrenar?</a>
          </div>

          <ul class="hero-stats" aria-label="Estadísticas">
            <li v-for="stat in stats" :key="stat.label">
              <strong>{{ stat.value }}</strong>
              <span>{{ stat.label }}</span>
            </li>
          </ul>
        </div>

        <div class="hero-visual" aria-label="Imagen de artes marciales">
          <div class="main-card">
            <span class="badge">Taekwondo • Karate • Kung Fu</span>
            <h2>Movimiento, técnica y disciplina.</h2>
          </div>
          <div class="floating-panel">
            <span>🔥 4 estilos</span>
            <strong>Entrenamiento completo</strong>
          </div>
        </div>
      </section>

      <ItemList />

      <section id="beneficios" class="section benefits-section">
        <div class="section-heading narrow">
          <p class="eyebrow">Beneficios</p>
          <h2>Más que un deporte: una transformación personal.</h2>
        </div>

        <div class="benefits-layout">
          <div class="benefit-image">
            <div class="image-panel">
              <span class="mini-badge">💪 Fuerza</span>
              <h3>Supera tus límites con constancia y técnica.</h3>
            </div>
          </div>

          <div class="benefits-list">
            <div v-for="benefit in benefits" :key="benefit" class="benefit-item">
              <span class="check">✓</span>
              <p>{{ benefit }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" class="section method-section">
        <div class="section-heading">
          <p class="eyebrow">Nuestro método</p>
          <h2>Un camino progresivo desde lo básico hasta la maestría.</h2>
        </div>

        <div class="steps-grid">
          <article v-for="step in paths" :key="step.step" class="step-card">
            <span class="step-number">{{ step.step }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </article>
        </div>
      </section>

      <section class="section community-section">
        <div class="community-box">
          <div>
            <p class="eyebrow">Comunidad</p>
            <h2>Entrena con respeto, comparte la energía y crece juntos.</h2>
          </div>
          <a class="button primary" href="#contacto">Reservar primera clase</a>
        </div>
      </section>
    </main>

    <footer id="contacto" class="site-footer">
      <div>
        <strong>MartialArts</strong>
        <p>Academia de artes marciales para todas las edades.</p>
      </div>

      <div class="footer-links">
        <a href="mailto:info@martialarts.com">info@martialarts.com</a>
        <a href="tel:+34600111222">+34 600 111 222</a>
        <span>Calle del Honor 24, Valencia</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.page-shell {
  --bg: #090909;
  --gold: #d9b76d;
  --gold-strong: #f6d17d;
  --text: #f8f2e7;
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 20px 40px;
  background:
    radial-gradient(circle at top left, rgba(125, 29, 26, 0.28), transparent 28%),
    radial-gradient(circle at bottom right, rgba(217, 183, 109, 0.1), transparent 26%),
    var(--bg);
  color: var(--text);
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
  background: linear-gradient(135deg, var(--gold), #b77718);
  color: #1d1206;
  box-shadow: 0 12px 28px rgba(217, 183, 109, 0.35);
}

.button.secondary {
  border-color: rgba(217, 183, 109, 0.4);
  background: rgba(17, 17, 17, 0.7);
  color: var(--text);
}

.section {
  padding: 30px 0 24px;
}

.hero {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  align-items: center;
  gap: 32px;
  padding-top: 20px;
}

.eyebrow {
  margin: 0 0 16px;
  color: var(--gold-strong);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.75rem;
}

.hero-copy h1,
.section-heading h2,
.community-box h2 {
  margin: 0;
  line-height: 1.04;
  letter-spacing: -0.05em;
  color: var(--text);
}

.hero-copy h1 {
  font-size: clamp(2.9rem, 5vw, 5.2rem);
  max-width: 620px;
  text-shadow: 0 0 25px rgba(217, 183, 109, 0.12);
}

.lead {
  max-width: 620px;
  margin-top: 18px;
  color: #eadbb7;
  font-size: 1.08rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  list-style: none;
  padding: 0;
  margin: 36px 0 0;
}

.hero-stats li {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 18px 14px;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(30, 21, 17, 0.85), rgba(15, 13, 12, 0.7));
  border: 1px solid rgba(217, 183, 109, 0.18);
}

.hero-stats strong {
  font-size: 1.45rem;
  color: var(--gold-strong);
}

.hero-stats span {
  color: #d8c8aa;
  font-size: 0.8rem;
}

.hero-visual {
  position: relative;
  min-height: 560px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 34px;
  border: 1px solid rgba(217, 183, 109, 0.25);
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)),
    url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1000&q=80') center/cover no-repeat;
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.42);
  overflow: hidden;
}

.hero-visual::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(125, 29, 26, 0.18), transparent 30%, rgba(217, 183, 109, 0.1));
}

.main-card {
  position: relative;
  z-index: 1;
  width: min(80%, 430px);
  padding: 30px 24px;
  border-radius: 24px;
  background: rgba(16, 11, 10, 0.72);
  border: 1px solid rgba(217, 183, 109, 0.25);
  backdrop-filter: blur(12px);
}

.badge,
.mini-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(217, 183, 109, 0.12);
  border: 1px solid rgba(217, 183, 109, 0.3);
  color: var(--gold-strong);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.main-card h2 {
  margin: 18px 0 0;
  font-size: clamp(1.9rem, 2vw, 2.7rem);
  line-height: 1.1;
}

.floating-panel {
  position: absolute;
  right: 24px;
  bottom: 26px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 14px 16px;
  border-radius: 14px;
  background: rgba(16, 11, 10, 0.8);
  border: 1px solid rgba(217, 183, 109, 0.34);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.28);
}

.floating-panel span {
  color: var(--gold-strong);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.section-heading {
  margin-bottom: 22px;
}

.section-heading h2 {
  max-width: 760px;
  font-size: clamp(2.2rem, 3vw, 3.3rem);
}

.narrow h2 {
  max-width: 560px;
}

.benefits-section {
  padding-top: 36px;
}

.benefits-layout {
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  gap: 28px;
  align-items: center;
}

.benefit-image {
  min-height: 440px;
  border-radius: 30px;
  border: 1px solid rgba(217, 183, 109, 0.2);
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.7)),
    url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
  display: flex;
  align-items: end;
  padding: 26px;
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.28);
}

.image-panel {
  max-width: 420px;
  padding: 18px 20px;
  border-radius: 20px;
  background: rgba(12, 11, 10, 0.75);
  border: 1px solid rgba(217, 183, 109, 0.24);
  backdrop-filter: blur(10px);
}

.image-panel h3 {
  margin: 14px 0 0;
  font-size: clamp(1.8rem, 2vw, 2.6rem);
  line-height: 1.12;
}

.benefits-list {
  display: grid;
  gap: 18px;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 18px 18px;
  border-radius: 20px;
  background: rgba(18, 15, 13, 0.75);
  border: 1px solid rgba(217, 183, 109, 0.14);
}

.check {
  display: inline-grid;
  place-items: center;
  min-width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(124, 237, 155, 0.14);
  border: 1px solid rgba(124, 237, 155, 0.28);
  color: #9ae6b4;
  font-weight: 800;
}

.benefit-item p {
  margin: 0;
  color: #f0e7d1;
  font-size: 1.02rem;
  line-height: 1.7;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.step-card {
  padding: 26px 22px;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(18, 15, 13, 0.85), rgba(12, 12, 12, 0.7));
  border: 1px solid rgba(217, 183, 109, 0.16);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 52px;
  height: 52px;
  border-radius: 15px;
  background: linear-gradient(135deg, rgba(217, 183, 109, 0.3), rgba(125, 29, 26, 0.14));
  border: 1px solid rgba(217, 183, 109, 0.18);
  color: var(--gold-strong);
  font-weight: 800;
  font-size: 1.1rem;
}

.step-card h3 {
  margin: 18px 0 10px;
  font-size: 1.42rem;
}

.step-card p {
  margin: 0;
  color: #e2d4ad;
  line-height: 1.7;
}

.community-section {
  padding-top: 38px;
}

.community-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 30px 28px;
  border-radius: 30px;
  background: linear-gradient(135deg, rgba(125, 29, 26, 0.18), rgba(217, 183, 109, 0.08));
  border: 1px solid rgba(217, 183, 109, 0.18);
}

.community-box h2 {
  max-width: 620px;
  font-size: clamp(2.1rem, 3vw, 3.1rem);
}

.site-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  padding: 36px 8px 10px;
  color: #f1e5c2;
}

.site-footer strong {
  font-size: 1.15rem;
  color: var(--gold-strong);
}

.site-footer p {
  margin: 8px 0 0;
  color: #d6c49b;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  color: #d8cdaa;
}

.footer-links a,
.footer-links span {
  color: #d8cdaa;
  text-decoration: none;
}

@media (max-width: 980px) {
  .hero,
  .benefits-layout,
  .steps-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero {
    grid-template-columns: 1fr;
  }

  .benefits-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .page-shell {
    padding-left: 14px;
    padding-right: 14px;
  }

  .hero-stats,
  .steps-grid {
    grid-template-columns: 1fr;
  }

  .community-box,
  .site-footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-links {
    justify-content: flex-start;
  }
}
</style>
