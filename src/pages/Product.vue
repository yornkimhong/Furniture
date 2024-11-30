<template>
  <div class="relative container max-w-7xl mx-auto">
    <transition name="fade-button" appear="true">
      <button @click="goBack" class="absolute top-10 flex items-center space-x-2 px-6 md:px-0">
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#F5FBDF"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z"
            fill="#8E9D74"
          ></path>
        </g>
      </svg>
      <span class="font-serif font-medium capitalize text-md">go back</span>
    </button>

    </transition>
    <div
      v-if="product"
      class="flex flex-col px-6 pt-36 min-h-screen space-y-16 space-x-0 md:flex-row md:items-center md:space-y-0 md:space-x-16 md:pt-0 md:px-6"
    >
      <transition name="fade-left" appear="true">
        <img
          :src="product.image"
          :alt="product.title"
          class="w-full max-w-2xl rounded-lg mb-4"
        />
      </transition>

      <transition name="fade-right" appear="true">
        <div class="flex flex-col space-y-2">
          <h3 class="font-serif text-primary uppercase text-lg font-bold">
            {{ product.category }}
          </h3>
          <h2 class="font-serif text-black capitalize text-3xl font-bold">
            {{ product.title }}
          </h2>
          <h3 class="font-serif text-primary capitalize text-2xl font-bold">
            {{ product.tag }}
          </h3>
          <p class="text-[#495057] leading-[150%]">
            {{ product.description }}
          </p>

          <div
            class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"
            bis_skin_checked="1"
          >
            <div class="flex" bis_skin_checked="1">
              <span class="font-serif font-medium mr-3 pt-1">Color :</span>
              <button
                class="border-2 border-[#dee2e6] rounded-full w-8 h-8 focus:outline-none"
              ></button>
              <button
                class="border-2 border-[#dee2e6] ml-1 bg-amber-300 rounded-full w-8 h-8 focus:outline-none"
              ></button>
              <button
                class="border-2 border-[#dee2e6] ml-1 bg-indigo-500 rounded-full w-8 h-8 focus:outline-none"
              ></button>
            </div>
            <div class="flex ml-16 items-center" bis_skin_checked="1">
              <span class="mr-3">Size</span>
              <div class="relative" bis_skin_checked="1">
                <select
                  class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-primary text-base pl-3 pr-10"
                >
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
                <span
                  class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div class="flex justify-between items-center pt-4">
            <h3 class="font-serif text-primary uppercase text-2xl font-bold">
              $ {{ product.price }}
            </h3>
            <button
              class="transition-all ease-in duration-100 py-3 px-6 rounded-full font-semibold uppercase bg-primary text-secondary border-2 border-transparent hover:border-2 hover:border-primary hover:bg-transparent hover:text-primary"
            >
              <span>buy now</span>
            </button>
          </div>
        </div>
      </transition>
    </div>
    <div v-else>
      <p
        class="text-center text-red-500 min-h-screen flex items-center justify-center text-4xl"
      >
        Product not found...
      </p>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { sofas, beds, chairs, lamps, collections, trendings } from "../data";

export default {
  components: { Navbar, Footer },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const goBack = () => {
      router.go(-1); 
    };
    const product = computed(() => {
      const allProducts = [
        ...sofas,
        ...beds,
        ...chairs,
        ...lamps,
        ...collections,
        ...trendings,
      ];
      return allProducts.find((item) => item.id === Number(route.params.id));
    });

    return { product, goBack };
  },
};
</script>

<style scoped>
.fade-left-enter-active,
.fade-left-leave-active {
  transition: all 1s ease;
}
.fade-left-enter-from,
.fade-left-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}

.fade-right-enter-active,
.fade-right-leave-active {
  transition: all 1s ease;
}
.fade-right-enter-from,
.fade-right-leave-to {
  opacity: 0;
  transform: translateX(40px);
}

.fade-button-enter-active,
.fade-button-leave-active {
  transition: all 1s ease;
}
.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
@media (max-width: 768px) {
  .fade-left-enter-active,
  .fade-left-leave-active {
    transition: all 1s ease;
  }
  .fade-left-enter-from,
  .fade-left-leave-to {
    opacity: 0;
    transform: translateY(40px);
  }

  .fade-right-enter-active,
  .fade-right-leave-active {
    transition: all 1.5s ease;
  }
  .fade-right-enter-from,
  .fade-right-leave-to {
    opacity: 0;
    transform: translateY(40px);
  }
  
}
</style>
