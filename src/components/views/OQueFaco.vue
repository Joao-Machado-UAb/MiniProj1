<template>
  <!-- Secção "O que faço?" com imagem e a minha descrição -->
  <section class="quem-sou">
    <h1>O que faço?</h1>

    <div class="perfil">
      <!-- Fotografia -->
      <img src="@/assets/img/foto.jpg" alt="Foto de perfil" class="foto-perfil" />

      <!-- Texto descritivo  -->
      <p class="descricao">
        Possuo Licenciatura em Matemática (Ramo de Formação Educacional) pela Universidade de Coimbra
        e Licenciatura em Engenharia Informática pela Universidade Aberta. Sou docente do ensino básico
        e secundário no Agrupamento de Escolas de Castro Daire, distrito de Viseu.
        Sou apaixonado por tecnologia.
      </p>
    </div>
  </section>
</template>

<style scoped>
/* Estilo geral da secção */
.quem-sou {
  text-align: center;        /* Centra o título */
  padding: 50px 20px;        /* Espaçamento interno */
  color: #333;
}

/* Container do conteúdo */
.perfil {
  display: flex;             /* Layout flexível */
  flex-direction: column;  
  align-items: center;       /* Centra horizontalmente */
  max-width: 800px;          /* Limita largura */
  margin: 0 auto;            /* Centra na página */
}

/* Estilo da fotografia de perfil */
.foto-perfil {
  width: 180px;
  height: 180px;
  border-radius: 50%;        /* Forma circular */
  object-fit: cover;         
  margin-bottom: 25px;       /* Espaço abaixo da imagem */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); 
}

/* Texto justificado */
.descricao {
  text-align: justify;
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  padding: 0 20px;
}
</style>


