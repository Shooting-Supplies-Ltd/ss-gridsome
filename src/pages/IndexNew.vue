<template>
  <div>
    <NewHeader />
    <div class="border-b border-black border-2">
      <g-image src="~/assets/images/slide.jpg" />
    </div>
    <div
      id="product-select-row-1"
      class="my-8 md:mx-8 md:my-12 lg:mx-24 lg:my-20 xl:mx-32 xl:my-20"
    >
      <ul class="flex flex-wrap justify-around">
        <div>
          <li class="mb-12 border-t lg:border-none hover:text-ssorange">
            <g-link to="/guns/">
              <g-image
                src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573565379/Guns_bylme2_icn8l5.jpg"
              />
              <h2
                class="flex justify-center font-bold text-xl lg:text-2xl lg:mt-6"
              >
                GUNS
              </h2>
            </g-link>
          </li>
        </div>
        <div>
          <li class="mb-12 hover:text-ssorange border-t lg:border-none">
            <g-link to="/blog/ammunition/">
              <g-image
                src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573565380/Ammo_dqveke_faucxd.jpg"
              />
              <h2
                class="flex justify-center font-bold text-xl lg:text-2xl lg:mt-6"
              >
                AMMO
              </h2>
            </g-link>
          </li>
        </div>
        <div>
          <li class="hover:text-ssorange mb-12 border-t lg:border-none">
            <g-link to="/optics/">
              <g-image
                src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573565381/Scopes_pweqna_a6ievw.jpg"
              />
              <h2
                class="flex justify-center font-bold text-xl lg:text-2xl lg:mt-6"
              >
                OPTICS
              </h2>
            </g-link>
          </li>
        </div>
      </ul>
    </div>
    <div
      id="product-select-row-2"
      class="my-8 lg:mx-24 lg:my-20 xl:mx-32 xl:my-20"
    >
      <ul class="flex flex-wrap items-center justify-around">
        <div>
          <li class="hover:text-ssorange mb-12 border-t lg:border-none">
            <g-link to="/blog/maintenance-cleaning/">
              <g-image
                src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573565382/Maintenance_sne6oe_gmgncb.jpg"
              />
              <h2
                class="flex flex-wrap justify-center font-bold text-xl lg:text-2xl lg:mt-6"
              >
                MAINTENANCE
              </h2>
            </g-link>
          </li>
        </div>
        <div>
          <li class="hover:text-ssorange mb-12 border-t lg:border-none">
            <g-link to="/blog/reloading/">
              <g-image
                src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573565383/Reloading_aruwyq_pibivk.jpg"
              />
              <h2
                class="flex justify-center font-bold text-xl lg:text-2xl lg:mt-6"
              >
                RELOADING
              </h2>
            </g-link>
          </li>
        </div>
        <div>
          <li class="hover:text-ssorange mb-4 border-t lg:border-none">
            <g-link to="/blog/clothing-footwear/">
              <g-image
                src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573565383/Clothing_r4zxrt_wo3xz7.jpg"
              />
              <h2
                class="flex justify-center font-bold text-xl lg:text-2xl lg:mt-6"
              >
                CLOTHING
              </h2>
            </g-link>
          </li>
        </div>
      </ul>
    </div>
    <NewFooter />
  </div>
</template>

<script>
import NewHeader from "~/components/NewHeader.vue";
import NewFooter from "~/components/NewFooter.vue";
import VueHtmlSlider from "vue-html-slider";

export default {
  metaInfo() {
    return {
      title: "Shooting Supplies Ltd",
      meta: [
        {
          name: "description",
          content: "The Midlands Leading Shooting Supplier"
        }
      ]
    };
  },
  components: {
    NewHeader,
    NewFooter,
    VueHtmlSlider
  },
  data() {
    return {
      images: ["~/assets/images/slide.jpg"]
    };
  }
};
</script>
