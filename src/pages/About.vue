<template>
  <section id="about" class="pt-32">
    <div class="container max-w-7xl mx-auto px-6">
      <div
        class="flex flex-col space-x-0 space-y-16 lg:items-center md:space-y-0 md:space-x-8 lg:space-x-16 md:flex-row"
      >
        <img  data-aos="fade-right" data-aos-duration="3000"
          src="../assets/images/about.jpg"
          alt="about image"
          class="h-[550px] lg:h-[650px]"
        />
        <div data-aos="fade-left" data-aos-duration="3000"
          class="flex flex-col  items-center justify-center space-y-4 md:items-start"
        >
          <div class="flex flex-col space-y-6 text-center md:text-left">
            <h1
              class="font-serif font-bold leading-[125%] text-black text-3xl md:text-4xl lg:text-5xl"
            >
              Your <span class="text-primary">Comfort</span>, Our
              <span class="text-primary">Craft</span>
            </h1>
            <div class="flex flex-col space-y-4">
              <p class="text-black leading-[150%]">
                At Kimhong Furniture company , we design furniture that combines
                elegance and functionality. With a focus on sustainable
                materials and innovative designs, our pieces bring life to your
                spaces while reflecting your personality.
              </p>
              <p class="text-black leading-[150%]">
                Explore a world of timeless furniture crafted to make every
                moment at home unforgettable.
              </p>
            </div>
          </div>
          <div class="flex space-x-3">
            <button
              class="transition-all ease-in duration-100 py-3 px-6 rounded-full font-semibold uppercase bg-primary text-secondary border-2 border-transparent hover:border-2 hover:border-primary hover:bg-transparent hover:text-primary"
            >
              <span>Learn More About Us</span>
            </button>
          </div>
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
