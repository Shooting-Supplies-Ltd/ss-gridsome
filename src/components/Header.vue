<template>
  <header>
    <!-- Top Bar -->
    <div
      id="top-bar"
      class="hidden lg:flex lg:justify-around lg:items-center lg:bg-ssblue lg:text-white lg:h-10"
    >
      <!-- Phone Number -->
      <div>
        <div id="contact" class="lg:flex hover:text-ssorange">
          <p class="mr-8 font-semibold">
            <a href="tel:01527831261"
              ><font-awesome :icon="['fas', 'phone-alt']" size="lg" /><span
                class="text-lg ml-2"
                >01527 831 261</span
              ></a
            >
          </p>
        </div>
      </div>

      <!-- Social Contact Options -->
      <div>
        <div id="social" class="lg:flex">
          <!-- <p class="mr-4">Find Us On:</p> -->
          <p class="mr-4 hover:text-ssorange">
            <a
              href="https://www.facebook.com/ShootingSuppliesLTD/"
              target="_blank"
              ><font-awesome :icon="['fab', 'facebook-square']" size="lg"
            /></a>
          </p>
          <p class="mr-4 hover:text-ssorange">
            <a href="https://twitter.com/shootingsupplys" target="_blank"
              ><font-awesome :icon="['fab', 'twitter']" size="lg"
            /></a>
          </p>
          <p class="mr-4 hover:text-ssorange">
            <a
              href="https://www.instagram.com/shootingsupplies/"
              target="_blank"
              ><font-awesome :icon="['fab', 'instagram']" size="lg"
            /></a>
          </p>
          <p class="hover:text-ssorange">
            <a href="mailto:info@shootingsuppliesltd.co.uk" target="_blank"
              ><font-awesome :icon="['fas', 'envelope']" size="lg"
            /></a>
          </p>
        </div>
      </div>
    </div>

    <!-- Logo & Mobile Menu Button-->
    <div class="lg:flex justify-center mt-4 lg:mt-0">
      <div id="mobile-logo" class="block lg:hidden flex justify-center">
        <g-link to="/">
          <h1
            class="text-2xl sm:text-5xl text-ssblue mb-4"
            style="font-family: ShooterSFRegular;"
          >
            SH<span class="text-ssorange">O</span
            ><span style="color:black;">O</span>TING SUPPLIES LTD
          </h1>
        </g-link>
      </div>
      <div
        id="mobile-menu"
        class="block flex justify-center bg-ssblue p-2 lg:hidden"
      >
        <button
          @click="toggle"
          id="mobile-menu"
          class="lg:hidden text-white text-xl"
        >
          MENU
          <!-- <font-awesome :icon="['fas', 'bars']" class="my-4 ml-6 text-ssblue" /> -->
        </button>
      </div>
      <div id="main-logo">
        <g-link to="/">
          <h1
            class="lg:my-4 hidden lg:block lg:text-5xl text-ssblue"
            style="font-family: ShooterSFRegular;"
          >
            SH<span class="text-ssorange">O</span
            ><span style="color:black;">O</span>TING SUPPLIES LTD
          </h1>
        </g-link>
      </div>
    </div>

    <!-- Mobile Menu With Display Option -->
    <div
      :class="open ? 'block' : 'hidden'"
      class="bg-ssblue text-white uppercase font-semibold"
    >
      <!-- Search Bar Component -->
      <Search />

      <div class="text-lg lg:flex-grow align-center p-12 text-2xl text-center">
        <g-link to="/">
          <p class="mb-4 hover:text-ssorange">Home</p>
        </g-link>

        <g-link to="/guns">
          <p class=" mb-4 hover:text-ssorange">Guns</p>
        </g-link>

        <a href="https://shootingsuppliesltd.co.uk/product-category/optics/">
          <p class="mb-4 hover:text-ssorange">Optics</p>
        </a>

        <g-link to="/blog/ammunition/">
          <p class="mb-4 hover:text-ssorange">Ammo</p>
        </g-link>

        <g-link to="/blog/clothing-footwear/">
          <p class="mb-4 hover:text-ssorange">Clothing</p>
        </g-link>

        <g-link to="/blog/safes-security/">
          <p class="mb-4 hover:text-ssorange">Security</p>
        </g-link>

        <a
          href="https://shootingsuppliesltd.co.uk/product-category/spares-accessories/"
        >
          <p class="mb-4 hover:text-ssorange">Accessories</p>
        </a>

        <a href="https://shootingsuppliesltd.co.uk/special-offers/">
          <p class="mb-4 hover:text-ssorange">Offers</p>
        </a>

        <g-link to="/blog">
          <p class="hover:text-ssorange">Blog</p>
        </g-link>
      </div>
    </div>

    <!-- Main Nav -->
    <nav
      id="menu"
      class="hidden lg:block lg:flex lg:justify-around lg:items-center lg:bg-ssblue lg:text-white lg:uppercase lg:text-xl xl:text-2xl font-medium"
    >
      <div class="lg:flex lg:mt-4">
        <g-link to="/">
          <p class="mr-8 hover:text-ssorange">Home</p>
        </g-link>

        <g-link to="/guns">
          <p class="mr-8 hover:text-ssorange">Guns</p>
        </g-link>

        <a href="https://shootingsuppliesltd.co.uk/product-category/optics/">
          <p class="mr-8 hover:text-ssorange">Optics</p>
        </a>

        <g-link to="/blog/ammunition/">
          <p class="mr-8 hover:text-ssorange">Ammo</p>
        </g-link>

        <g-link to="/blog/clothing-footwear/">
          <p class="mr-8 hover:text-ssorange">Clothing</p>
        </g-link>

        <g-link to="/blog/safes-security/">
          <p class="mr-8 hover:text-ssorange">Security</p>
        </g-link>

        <a
          href="https://shootingsuppliesltd.co.uk/product-category/spares-accessories/"
        >
          <p class="mr-8 hover:text-ssorange">Accessories</p>
        </a>

        <g-link to="/blog/offers">
          <p class="mr-8 hover:text-ssorange">Offers</p>
        </g-link>

        <g-link to="/blog">
          <p class="mb-4 hover:text-ssorange">Blog</p>
        </g-link>
      </div>
    </nav>

    <!-- Search Bar Component -->
    <div
      id="main-search"
      class="hidden lg:block lg:relative lg:z-50 lg:h-8 lg:w-full lg:mb-8"
    >
      <Search class="lg:bg-ssblue" />
    </div>
  </header>
</template>

<script>
import Search from "~/components/Search.vue";

export default {
  name: "Header",
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  },
  components: {
    Search
  }
};
</script>

<style>
@font-face {
  font-family: ShooterSFRegular;
  src: url("../assets/ShooterSFRegular.ttf");
  font-weight: normal;
}
</style>
