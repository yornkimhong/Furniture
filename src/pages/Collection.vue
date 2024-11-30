<template>
  <section id="collection" class="pt-32">
    <div class="container max-w-7xl mx-auto px-6">
      <div class="flex flex-col space-y-4">
        <div data-aos="fade-right"  class="flex flex-col space-y-4">
          <h1
            class="text-center font-serif font-bold leading-[125%] text-black text-3xl md:text-start md:text-4xl lg:text-5xl"
          >
            Explore Our
            <span class="text-primary">Collections</span>
          </h1>
          <p class="text-black text-center md:text-start leading-[150%]">
            Discover a range of furniture collections designed to suit every
            style, space, and budget.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-16">
          <div data-aos="fade-up" 
            v-for="collection in collections"
            :key="collection.id"
            class="flex flex-col space-y-4 rounded-md bg-gray shadow-md shadow-secondary p-4"
          >
            <div
              class="relative hover:scale-110 transition-all duration-300 ease-in cursor-pointer"
            >
             <router-link
                  :to="{ name: 'product', params: { id: collection.id } }"
                >
              <img
                :src="collection.image"
                :alt="collection.title"
                class="object-cover w-full h-48 rounded-md"
              />
              </router-link>
              <div class="absolute top-5 left-5">
                <h4
                  class="py-1 px-6 text-secondary bg-primary rounded-full uppercase tracking-tightest"
                >
                  {{ collection.category }}
                </h4>
              </div>
            </div>

            <div class="flex justify-between items-end px-2">
              <div class="flex flex-col space-y-3">
                <router-link
                  :to="{ name: 'product', params: { id: collection.id } }"
                >
                <h3 class="text-xl text-black font-medium">
                  {{ collection.title }}
                </h3>
                </router-link>
                <h2 class="text-lg text-primary font-medium">
                  ${{ collection.price }}
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
import { collections } from "../data";

export default {
  setup() {
    return { collections };
  },
};
</script>

<style scoped></style>
