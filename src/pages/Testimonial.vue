<template>
  <section id="testimonial" class="pt-32">
    <div class="container max-w-7xl mx-auto px-6">
      <div class="flex flex-col items-center space-y-4">
        <!-- Title -->
        <h1  data-aos="fade-up"
          class="max-w-xl text-center font-serif font-bold leading-[125%] text-black text-3xl md:text-4xl lg:text-5xl pb-16"
        >
          Hear from Our
          <span class="text-primary">Happy</span>
          Customers
        </h1>

        <!-- Swiper Section -->
        <swiper
          data-aos="fade-up"
          ref="mySwiper"
          :pagination="{ clickable: true }"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :loop="true"
          :breakpoints="breakpoints"
          :modules="[Autoplay, Pagination]"
          class="mySwiper"
        >
          <!-- Swiper Slides -->
          <swiper-slide 
            v-for="testimonial in testimonials"
            
            :key="testimonial.id"
          >
            <!-- Testimonial Card -->
            <div
              class="flex flex-col items-center rounded-md bg-gray shadow-md shadow-secondary relative overflow-hidden"
            >
              <!-- Background Image -->
              <div class="relative w-full h-40">
                <img
                  :src="testimonial.backgroundImage"
                  :alt="testimonial.title"
                  class="w-full h-full object-cover"
                />
                <!-- Green Background Overlay -->
                <div
                  class="absolute bottom-0 left-0 w-full h-[65%] bg-primary opacity-75"
                ></div>
              </div>

              <!-- Profile Image -->
              <div
                class="absolute top-20 w-28 h-28 rounded-full border-4 border-white bg-white"
              >
                <img
                  :src="testimonial.profile"
                  :alt="testimonial.title"
                  class="rounded-full w-full h-full object-cover"
                />
              </div>

              <!-- Text Content -->
              <div class="pt-8 pb-4 text-center px-4">
                <h3 class="text-lg py-1 font-bold font-serif text-primary">
                  {{ testimonial.name }}
                </h3>
                <p class="leading-[150%] text-gray-700">
                  {{ testimonial.description }}
                </p>
              </div>
            </div>
            <!-- End Testimonial Card -->
          </swiper-slide>
         <div class="mt-12 "></div>
        </swiper>
        <!-- End Swiper -->
      </div>
    </div>
  </section>

</template>

<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Autoplay, Pagination } from "swiper/modules";
import { testimonials } from "../data";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // Swiper breakpoints for responsiveness
    const breakpoints = {
      480: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    };

    return {
      testimonials,
      Autoplay,
      Pagination,
      breakpoints,
    };
  },
};
</script>

<style scoped>
/* Swiper custom styles */
.mySwiper {
  width: 100%;
  height: 100%;
}
</style>
