<template>
  <header class="navbar">
    <div class="navbar-content">
      <!-- LOGÓTIPO + TEXTO -->
      <div class="logo">
        <img
          src="@/assets/img/ua-logo.png"
          alt="Logótipo Universidade Aberta"
          class="logo-img"
        />
        <span>Universidade Aberta - MiniProj1</span>
      </div>

      <!-- Ícone do menu hamburguer -->
      <div class="hamburger" @click="toggleMenu">
        <div :class="{ open: menuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <!-- Menu de navegação -->
      <nav :class="{ open: menuOpen }" class="menu">
        <router-link to="/quem-sou" @click="closeMenu">Quem Sou Eu</router-link>
        <router-link to="/oque-faco" @click="closeMenu">O Que Faço</router-link>
        <router-link to="/hobbies" @click="closeMenu">Hobbies</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<style scoped>
/* ===== Navbar base ===== */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #1f3c88;
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* ===== Logótipo ===== */
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  font-size: 1.3rem;
}

.logo-img {
  height: 40px;
  width: auto;
  border-radius: 4px;
  background-color: white;
  padding: 3px;
}

/* ===== Menu ===== */
.menu {
  display: flex;
  gap: 2rem;
}

.menu a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: 0.3s;
}

.menu a:hover,
.menu a.router-link-active {
  text-decoration: underline;
}

/* ===== Ícone do menu (hamburguer) ===== */
.hamburger {
  display: none;
  cursor: pointer;
}

.hamburger div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 3px;
  background: white;
  border-radius: 3px;
  transition: 0.3s;
}

/* ===== Efeito do menu aberto ===== */
.hamburger div.open span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.hamburger div.open span:nth-child(2) {
  opacity: 0;
}
.hamburger div.open span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* ===== Responsivo ===== */
@media (max-width: 768px) {
  .menu {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: #1f3c88;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease;
  }

  .menu.open {
    max-height: 200px;
  }

  .hamburger {
    display: block;
  }

  .logo-img {
    height: 30px;
  }

  .logo span {
    font-size: 1.1rem;
  }
}
</style>
