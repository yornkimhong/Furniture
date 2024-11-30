<template>
  <section id="home" class="relative bg-primary">
    <div class="container max-w-7xl mx-auto px-6">
      <img data-aos="zoom-in"
        src="../assets/images/sofa-and-lamp.png"
        alt=""
        class="absolute -bottom-20 right-1 ml-1 md:right-10 h-[210px] md:h-[250px] xl:h-[350px]"
      />
      <img data-aos="zoom-in"
        src="../assets/images/ground-frame-picture.png"
        alt=""
        class="hidden lg:block absolute top-16 right-0 h-[250px] xl:h-[380px]"
      />
      <div  data-aos="fade-right"
        class="flex flex-col max-w-2xl h-[650px] items-center justify-center space-y-4 md:items-start"
      >
        <div class="flex flex-col space-y-6 text-center md:text-left">
          <h1
            class="font-serif font-bold leading-[125%] text-white text-4xl md:text-5xl lg:text-[56px]"
          >
            Transform Your Space with Premium
            <span class="text-secondary">Furniture</span>
          </h1>
          <p class="text-gray leading-[150%]">
            Discover a world of exclusive digital creations that can’t be found
            anywhere else. These limited edition NFTs are your chance to own a
            truly unique piece of the future.
          </p>
        </div>
        <div class="flex space-x-3">
          <button
            class="transition-all ease-in duration-100 py-3 px-6 rounded-full font-semibold uppercase bg-secondary text-primary border-2 border-transparent hover:border-2 hover:border-secondary hover:bg-transparent hover:text-secondary"
          >
            <span>show now</span>
          </button>
          <button
            class="py-3 px-6 rounded-full font-semibold uppercase border-2 border-white text-white hover:bg-secondary hover:border-transparent hover:text-primary transition-all ease-in duration-100"
          >
            explore
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped></style>
