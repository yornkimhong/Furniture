<template>
    <router-view></router-view>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Hero from "./pages/Hero.vue";
import Offer from "./pages/Offer.vue";
import About from "./pages/About.vue";
import BestSelling from "./pages/BestSelling.vue";
import Collection from "./pages/Collection.vue";
import Trending from "./pages/Trending.vue";
import JoinUs from "./pages/JoinUs.vue";
import Testimonial from "./pages/Testimonial.vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
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
