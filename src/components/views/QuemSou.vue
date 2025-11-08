<template>
  <!-- Secção "Quem sou eu?" com foto e uma breve apresentação -->
  <section class="section quem-sou">
    <h1>Quem sou eu?</h1>

    <div class="perfil">
      <!-- Fotografia -->
      <img src="@/assets/img/foto.jpg" alt="Foto de João Machado" class="foto-perfil" />

      <!-- Texto de apresentação -->
      <p>
        Chamo-me João Pedro de Sousa Machado, tenho 51 anos e resido em Viseu.
        Neste momento estou a frequentar o Mestrado em Engenharia Informática e Tecnologias Web na Universidade Aberta.
      </p>
    </div>
  </section>
</template>

<style scoped>
/* Estilo geral da secção */
.quem-sou {
  text-align: center;       /* Centraliza o título e conteúdo */
  padding: 40px 20px;       /* Espaçamento interno */
  color: #333;             
}

/* Container do conteúdo principal */
.perfil {
  display: flex;            /* Layout flexível */
  flex-direction: column;   /* Elementos em coluna */
  align-items: center;      /* Centra horizontalmente */
  gap: 20px;                /* Espaço entre elementos */
  max-width: 700px;
  margin: 0 auto;         
}

/* Estilo da foto de perfil */
.foto-perfil {
  width: 180px;
  height: 180px;
  border-radius: 50%;       /* Torna a imagem circular */
  object-fit: cover;        /* Ajusta a imagem ao espaço */
  border: 4px solid #1f3c88; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
  transition: transform 0.3s ease; /* Animação suave no hover */
}

/* Efeito de zoom ao passar o rato */
.foto-perfil:hover {
  transform: scale(1.05);
}

/* Estilo do texto de apresentação */
p {
  font-size: 1.05rem;
  line-height: 1.7;
  text-align: justify;      /* Texto justificado */
  color: #555;
  padding: 0 15px;
}

/* Tornar responsivo em ecrãs pequenos */
@media (max-width: 480px) {
  .foto-perfil {
    width: 140px;
    height: 140px;
  }
}
</style>


