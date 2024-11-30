<template>
  <section id="bestselling" class="pt-32">
    <div class="container max-w-7xl mx-auto px-6">
      <div class="flex flex-col items-center space-y-4">
        <h1 data-aos="fade-up" 
          class="mb-4 text-center font-serif font-bold leading-[125%] text-black text-3xl md:text-4xl lg:text-5xl"
        >
          best selling
          <span class="text-primary">products</span>
        </h1>

        <div data-aos="fade-up" data-aos-duration="2000" class="flex space-x-2 p-2 rounded-full bg-secondary mb-32">
          <button data-aos="fade-up" data-aos-duration="1000"
            v-for="(item, index) in items"
            :key="index"
            @click="selectCategory(item)"
            :class="[
              'py-2 px-5 md:px-12 text-xl uppercase font-medium rounded-full',
              selectedCategory === item
                ? 'bg-primary text-secondary'
                : 'text-primary',
            ]"
          >
            {{ item }}
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-16  w-full">
          <div data-aos="fade-up" 
            v-for="item in filteredItems"
            :key="item.id"
            class="flex flex-col space-y-4 rounded-md bg-gray shadow-md shadow-secondary p-4 "
          >
            <div
              class="relative hover:scale-110 transition-all duration-300 ease-in cursor-pointer"
            >
              <router-link :to="{ name: 'product', params: { id: item.id } }">
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="object-cover w-full h-48 rounded-md"
                />
              </router-link>
              <div class="absolute top-5 left-5">
                <h4
                  class="py-1 px-6 text-secondary bg-primary rounded-full uppercase tracking-tightest"
                >
                  {{ item.category }}
                </h4>
              </div>
            </div>

            <div class="flex justify-between items-end px-2">
              <div class="flex flex-col space-y-3">
                <router-link :to="{ name: 'product', params: { id: item.id } }">
                  <h3 class="text-xl text-black font-medium">
                    {{ item.title }}
                  </h3>
                </router-link>
                <h2 class="text-lg text-primary font-medium">
                  ${{ item.price }}
                </h2>
              </div>
              <div
                class="p-2 rounded-full bg-primary cursor-pointer group hover:bg-secondary hover:text-primary"
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  class="text-secondary hover:text-primary transition-colors duration-300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 6V18"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, ref } from "vue";
import { sofas, beds, chairs, lamps } from "../data";

export default {
  setup() {
    const items = ref(["sofa", "bed", "chair", "lamp"]);
    const selectedCategory = ref("sofa");

    const categories = {
      sofa: sofas,
      bed: beds,
      chair: chairs,
      lamp: lamps,
    };

    const selectCategory = (category) => {
      selectedCategory.value = category;
    };
    const filteredItems = computed(() => categories[selectedCategory.value]);

    return { filteredItems, selectCategory, selectedCategory, items };
  },
};
</script>

<style scoped></style>
