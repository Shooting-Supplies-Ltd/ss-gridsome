<template>
  <header>
    <!-- Top Bar -->
    <div
      id="top-bar"
      class="sm:h-8 sm:py-2 w-full text-sm hidden sm:flex items-center border-b"
    >
      <div class="w-2/6"></div>

      <div class="w-4/6 flex justify-center">
        <p>
          Get the latest from Shooting Supplies on our
          <g-link to="/blog" class="underline">blog</g-link>
        </p>
      </div>

      <div class="w-2/6 flex justify-center">
        <div id="contact" class="lg:flex hover:text-ssorange">
          <p class="mr-8 text-sm">
            <a href="tel:01527831261">Call: 01527 831 261</a>
          </p>
        </div>
      </div>
    </div>

    <!-- Navbar -->
    <div id="navbar" class="h-12 w-full bg-ssblue flex">
      <div id="logo" class="w-1/4 border-sm rounded overflow-hidden">
        <g-link to="/">
          <g-image
            src="~/assets/images/ss-logo.jpg"
            alt="Shooting Supplies Ltd Logo"
            width="200"
            class="z-10 mt-2 ml-12 absolute"
          />
        </g-link>
      </div>
      <div class="w-3/4 h-12 flex justify-start items-center">
        <nav>
          <ul class="flex text-white text-lg font-bold">
            <li class="mr-6"><g-link to="/guns">GUNS</g-link></li>
            <li class="mr-6"><g-link to="/optics">OPTICS</g-link></li>
            <li class="mr-6"><g-link to="/blog/ammunition/">AMMO</g-link></li>
            <li class="mr-6">
              <g-link to="/accessories/">ACCESSORIES</g-link>
            </li>
            <li class="mr-6">
              <g-link to="/blog/clothing-footwear/">CLOTHING</g-link>
            </li>
            <li class="mr-6">
              <g-link to="/blog/safes-security/">SECURITY</g-link>
            </li>
            <li class="mr-6"><g-link to="/blog/offers">OFFERS</g-link></li>
            <li class="mr-6"><g-link to="/blog">BLOG</g-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import Search from "~/components/Search.vue";

export default {
  name: "NewHeader",
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
