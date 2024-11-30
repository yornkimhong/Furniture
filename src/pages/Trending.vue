<template>
  <section id="trending" class="pt-32">
    <div class="container max-w-7xl mx-auto px-6">
      <div class="flex flex-col items-center space-y-4">
        <div data-aos="fade-up" class="flex flex-col max-w-xl space-y-4">
          <h1
            class="text-center font-serif font-bold leading-[125%] text-black text-3xl md:text-4xl lg:text-5xl"
          >
            Trending
            <span class="text-primary">Now</span>
          </h1>
          <p class="text-black text-center leading-[150%]">
            Stay ahead of the curve with our most popular furniture pieces,
            loved by customers this season.
          </p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-16 w-full"
        >
          <div data-aos="fade-up"
            v-for="trending in trendings"
            :key="trending.id"
            class="flex flex-col space-y-4 rounded-md bg-gray shadow-md shadow-secondary p-4"
          >
            <div
              class="relative hover:scale-110 transition-all duration-300 ease-in cursor-pointer"
            >
              <router-link
                :to="{ name: 'product', params: { id: trending.id } }"
              >
                <img
                  :src="trending.image"
                  :alt="trending.title"
                  class="object-cover w-full h-48 rounded-md"
                />
              </router-link>
              <div class="absolute top-5 left-5">
                <h4
                  class="py-1 px-6 text-secondary bg-primary rounded-full uppercase tracking-tightest"
                >
                  {{ trending.category }}
                </h4>
              </div>
            </div>

            <div class="flex justify-between items-end px-2">
              <div class="flex flex-col space-y-3">
                <router-link
                  :to="{ name: 'product', params: { id: trending.id } }"
                >
                  <h3 class="text-xl text-black font-medium">
                    {{ trending.title }}
                  </h3>
                </router-link>
                <h2 class="text-lg text-primary font-medium">
                  ${{ trending.price }}
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
import { trendings } from "../data";

export default {
  setup() {
    return { trendings };
  },
};
</script>

<style scoped></style>
