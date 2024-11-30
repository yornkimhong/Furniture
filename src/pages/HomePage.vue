<template>
  <div class="relative">
  <Navbar/>
  <Hero />
  <Offer />
  <About />
  <BestSelling />
  <Collection />
  <Trending />
  <JoinUs />
  <Testimonial />
  <Footer />

  <!-- Arrow Up Button -->
    <button
      v-if="isVisible"
      class="fixed bottom-5 p-2 rounded-full right-5 z-50 bg-[#73894D]"
      @click.prevent="scrollToTop"
    >
      <svg  width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">  <path d="M12 18L12 6M12 6L7 11M12 6L17 11" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </button>

  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Hero from "./Hero.vue";
import Offer from "./Offer.vue";
import About from "./About.vue";
import BestSelling from "./BestSelling.vue";
import Collection from "./Collection.vue";
import Trending from "./Trending.vue";
import JoinUs from "./JoinUs.vue";
import Testimonial from "./Testimonial.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
export default {
  components: { Hero, Offer, About, BestSelling, Collection, Trending, JoinUs, Testimonial, Footer, Navbar },
 setup() {
    const isVisible = ref(false);
    const checkScroll = () => {
      if (window.scrollY > 200) {
        isVisible.value = true;
      } else {
        isVisible.value = false;
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0 });
    };

    onMounted(() => {
      window.addEventListener("scroll", checkScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", checkScroll);
    });

    return {
      isVisible,
      scrollToTop,
    };
  },
};



</script>

<style></style>
