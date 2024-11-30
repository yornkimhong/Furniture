<template>
  <section id="offer" class="pt-36">
    <div class="container max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
        <div data-aos="zoom-in" v-for="offer in offers" :key="offer.id" class="flex flex-col items-center space-y-4 ">
          <img :src="offer.image" :alt="offer.title"  class="object-fit h-16"/>
          <h4 class="text-black text-xl font-medium max-w-40 md:max-w-xs text-center">{{ offer.title }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { offers } from "../data";
export default {
    setup() {

        return{offers}
  },
};
</script>

<style scoped></style>
