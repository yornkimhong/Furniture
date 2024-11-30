<template>
  <header
    :class="{ 'mx-auto bg-primary md:bg-transparent': isScrolled, 'bg-transparent': !isScrolled }"
    class="fixed top-0 left-0 right-0 z-20 md:px-2 max-w-screen mx-auto"
  >
    <nav
     :class="{ 'md:justify-center': isScrolled }"
      class="relative flex items-center justify-between py-2 md:py-4 max-w-7xl mx-auto px-6 md:px-0 font-bold text-white"
    >
      <!-- Logo -->
      <a
        href="#"
        :class="{ 'md:hidden': isScrolled }"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="../assets/images/logo3.png"
          alt="logo image"
          class="object-cover h-10 md:h-14 lg:h-16"
        />
      </a>

      <!-- Menu for Desktop -->
      <div
        class="hidden font-roboto font-medium md:flex md:space-x-8 md:items-center bg-secondary p-2 rounded-full text-secondary"
      >
        <div class="inline-block text-primary ps-2">
          <a :class="{ active: activeSection === 'home' }" href="#home">Home</a>
        </div>
        <div class="inline-block text-primary">
          <a :class="{ active: activeSection === 'about' }" href="#about">About</a>
        </div>
        <div class="inline-block whitespace-nowrap text-primary">
          <a :class="{ active: activeSection === 'bestselling' }" href="#bestselling">Best Selling</a>
        </div>
        <div class="inline-block text-primary">
          <a :class="{ active: activeSection === 'collection' }" href="#collection">Collection</a>
        </div>
        <div class="inline-block text-primary">
          <a :class="{ active: activeSection === 'trending' }" href="#trending">Trending</a>
        </div>
        <div class="inline-block whitespace-nowrap text-primary">
          <a :class="{ active: activeSection === 'joinus' }" href="#joinus">Join us</a>
        </div>
        <div class="inline-block text-primary pe-2">
          <a :class="{ active: activeSection === 'testimonial' }" href="#testimonial">Testimonial</a>
        </div>
      </div>

      <!-- Hamburger Button for Mobile -->
      <div class="md:hidden z-50 pt-2">
        <button
          @click="toggleMenu"
          :class="{ open: isMenuOpen }"
          type="button"
          class="block hamburger focus:outline-none"
        >
          <span class="hamburger-top" :class="{ menuActive: isMenuOpen }"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      </div>

      <!-- Normal Button -->
      <button
        :class="{ 'md:invisible': isScrolled }"
        class="hidden lg:block py-2 px-4 rounded-full font-semibold uppercase border-2 border-white text-white hover:bg-secondary hover:border-transparent hover:text-primary transition-all ease-in duration-100"
      >
        Shop Now
      </button>
    </nav>
  </header>

  <!-- Mobile Menu -->
  <transition name="fade">
    <div
      v-if="isMenuOpen"
      @click.self="toggleMenu"
      class="fixed top-0 left-0 w-full min-h-screen z-10"
    >
      <div class="bg-secondary p-8 text-black font-alata flex flex-col items-center space-y-6 pt-24">
        <div @click="toggleMenu" class="inline-block text-primary">
          <a :class="{ active: activeSection === 'home' }" href="#home">Home</a>
        </div>
        <div @click="toggleMenu" class="inline-block text-primary">
          <a :class="{ active: activeSection === 'about' }" href="#about">About</a>
        </div>
        <div @click="toggleMenu" class="inline-block text-primary">
          <a :class="{ active: activeSection === 'bestselling' }" href="#bestselling">Best Selling</a>
        </div>
        <div @click="toggleMenu" class="inline-block text-primary">
          <a :class="{ active: activeSection === 'collection' }" href="#collection">Collection</a>
        </div>
        <div @click="toggleMenu" class="inline-block text-primary">
          <a :class="{ active: activeSection === 'trending' }" href="#trending">Trending</a>
        </div>
        <div @click="toggleMenu" class="inline-block text-primary">
          <a :class="{ active: activeSection === 'joinus' }" href="#joinus">Join us</a>
        </div>
        <div @click="toggleMenu" class="inline-block text-primary pe-2">
          <a :class="{ active: activeSection === 'testimonial' }" href="#testimonial">Testimonial</a>
        </div>
        <a @click="toggleMenu" href="#bestselling" class="w-full text-center">
          <button
            class="inline-block w-full transition-all ease-in duration-100 py-3 px-6 rounded-full font-semibold uppercase bg-primary text-secondary border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary"
          >
            Show Now
          </button>
        </a>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false,
      activeSection: "",
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 30;
    },
    handleSectionIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    },
    setUpObserver() {
      const isSmallDevice = window.innerWidth < 768;
      const thresholdValue = isSmallDevice ? 0.1 : 0.5;

      this.observer = new IntersectionObserver(this.handleSectionIntersection, {
        threshold: thresholdValue,
      });

      [
        "home",
        "about",
        "bestselling",
        "collection",
        "trending",
        "joinus",
        "testimonial",
      ].forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          this.observer.observe(sectionElement);
        }
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.setUpObserver();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    if (this.observer) {
      this.observer.disconnect();
    }
  },
};
</script>

<style>
.active {
  color: #f5fbdf;
  background-color: #8e9d74;
  padding-block: 6px;
  padding-inline: 24px;
  display: inline-block;
  border-radius: 9999px;
}

.hamburger {
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: all 0.25s;
  position: relative;
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
  position: absolute;
  width: 24px;
  height: 2px;
  top: 0;
  left: 0;
  background: #fff;
  transition: all 0.5s;
}

.open .hamburger-top {
  transform: rotate(45deg) translateY(6px) translateX(6px);
}

.open .hamburger-middle {
  display: none;
}

.open .hamburger-bottom {
  transform: rotate(-45deg) translateY(6px) translateX(-6px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
