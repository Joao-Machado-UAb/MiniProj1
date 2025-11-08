<template>
  <!-- Estrutura HTML do rodapé -->
  <footer class="footer">
    <p>Siga-me nas redes sociais:</p>
    
    <!-- Ícones das redes sociais com links externos -->
    <div class="social-icons">
      <a href="https://www.facebook.com/jpdsmachado/" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/icons/facebook.png" alt="Facebook" />
      </a>

      <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-de-sousa-machado-560bb377/" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/icons/linkedin.png" alt="LinkedIn" />
      </a>

      <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/icons/twitter.png" alt="Twitter" />
      </a>

      <a href="https://github.com/Joao-Machado-UAb" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/icons/github.png" alt="GitHub" />
      </a>

      <a href="https://www.google.com/?hl=pt_PT" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/icons/google+.png" alt="Google +" />
      </a>
    </div>

    <p>© 2025 João Machado</p>
  </footer>
</template>

<style scoped>
/* Estilo do rodapé */
.footer {
  background-color: #1f3c88;   /* Cor de fundo azul */
  color: white;                /* Texto branco */
  text-align: center;          /* Centra o texto */
  padding: 20px 0;             /* Espaçamento interno */
  position: fixed;             /* Mantém o rodapé fixo no fundo da página */
  bottom: 0;
  left: 0;
  width: 100%;
}

/* Container dos ícones sociais */
.social-icons {
  display: flex;               /* Alinha ícones em linha */
  justify-content: center;     /* Centra horizontalmente */
  gap: 20px;                   /* Espaço entre ícones */
  margin: 15px 0;
}

/* Ícones de redes sociais */
.social-icons img {
  width: 30px;
  height: 30px;
  transition: transform 0.3s ease;  /* Animação ao passar o rato */
}

/* Efeito de zoom no hover */
.social-icons img:hover {
  transform: scale(1.1);
}

/* Remove margens padrão */
html, body {
  margin: 0;
  padding: 0;
}
</style>
