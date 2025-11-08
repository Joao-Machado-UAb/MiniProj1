<template>
  <!-- Secção "Os meus hobbies" com texto  -->
  <section class="hobbies">
    <h1>Os meus hobbies</h1>

    <p class="intro">
      Gosto de jogos online, leitura, viagens e praticar desporto, nomeadamente ginásio.
      O equilíbrio entre trabalho e lazer é fundamental para o nosso bem-estar.
    </p>

    <!-- Grelha de imagens dos hobbies -->
    <div class="hobbies-grid">
      <div class="hobby-card">
        <img src="@/assets/img/hobbies/jogos.jpg" alt="Jogos online" />
        <h3>Jogos Online</h3>
      </div>
      <div class="hobby-card">
        <img src="@/assets/img/hobbies/leitura.jpg" alt="Leitura" />
        <h3>Leitura</h3>
      </div>
      <div class="hobby-card">
        <img src="@/assets/img/hobbies/viagens.jpg" alt="Viagens" />
        <h3>Viagens</h3>
      </div>
      <div class="hobby-card">
        <img src="@/assets/img/hobbies/ginasio.jpg" alt="Ginásio" />
        <h3>Ginásio</h3>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Estilo geral da secção */
.hobbies {
  text-align: center;
  padding: 50px 20px;
  background-color: #f4f7fb; 
  color: #333;
}

.intro {
  max-width: 700px;
  margin: 0 auto 40px auto;
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  text-align: justify; /* Texto justificado */
}

/* Grelha */
.hobbies-grid {
  display: grid; /* Layout em grelha */
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); /* Responsivo */
  gap: 30px;
  justify-items: center;
}

/* Cartão do hobbies */
.hobby-card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease; /* Anima ao passar o rato */
  overflow: hidden;
  width: 100%;
  max-width: 250px;
}

/* Efeito de elevação no hover */
.hobby-card:hover {
  transform: translateY(-5px);
}

/* Imagens dos hobbies */
.hobby-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

/* Título hobbies */
.hobby-card h3 {
  margin: 10px 0;
  color: #005b96;
  font-size: 1.1rem;
}
</style>


