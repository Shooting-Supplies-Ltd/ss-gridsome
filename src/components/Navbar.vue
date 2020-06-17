<template>
  <!-- Setup Navbar and add logo -->
  <div>
    <!-- Logo & Mobile Menu Button-->
    <div id="main-logo" class="flex items-center justify-center">
      <g-link to="/">
        <h1
          class="flex self-end mt-4 mb-4 text-ssblue text-3xl lg:hidden"
          style="font-family: ShooterSFRegular;"
        >
          SH
          <span class="text-ssorange">O</span>
          <span style="color:black;">O</span>TING SUPPLIES LTD
        </h1>
      </g-link>
    </div>
    <div class="lg:hidden lg:mt-4 lg:mt-0">
      <div id="mobile-menu" class="flex p-2 justify-center items-center bg-ssblue lg:hidden">
        <button @click="toggle" id="mobile-menu" class="p-2 lg:hidden text-white text-xl font-bold">
          MENU
          <!-- <font-awesome :icon="['fas', 'bars']" class="my-4 ml-6 text-ssblue" /> -->
        </button>
      </div>
    </div>

    <!-- Mobile Menu With Display Option -->
    <div
      :class="open ? 'block' : 'hidden'"
      class="pt-2 bg-ssblue text-white uppercase font-semibold"
    >
      <!-- Search Bar Component -->
      <Search />

      <div class="p-1 pb-6 text-lg lg:flex-grow align-center text-2xl text-center">
        <g-link to="/">
          <p class="mb-4 hover:text-ssorange">Home</p>
        </g-link>

        <g-link to="/guns">
          <p class="mb-4 hover:text-ssorange">Guns</p>
        </g-link>

        <a href="/optics/">
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

        <a href="/accessories/">
          <p class="mb-4 hover:text-ssorange">Accessories</p>
        </a>

        <a href="/blog/offers/">
          <p class="mb-4 hover:text-ssorange">Offers</p>
        </a>

        <g-link to="/blog">
          <p class="hover:text-ssorange">Blog</p>
        </g-link>
      </div>
    </div>

    <!-- Main Nav Bar -->
    <nav id="nav-main" class="hidden lg:bg-ssblue lg:flex">
      <div id="nav-main-1" class="flex w-1/5 justify-center">
        <div id="logo" class="absolute mt-4 z-10">
          <g-link to="/">
            <g-image src="~/assets/images/Logo.png" width="180px" />
          </g-link>
        </div>
      </div>

      <!-- Add main links to navbar -->
      <div
        id="nav-main"
        class="w-3/5 flex justify-center items-center text-white text-xl font-bold"
        @mouseleave="gunsIsOpen = false, ammoIsOpen = false"
      >
        <div>
          <button @mouseover="gunsIsOpen = !gunsIsOpen" class="text-white text-xl font-bold">
            <g-link to="/guns" class="p-4 hover:text-ssorange">GUNS</g-link>
          </button>
          <div
            v-if="gunsIsOpen"
            @mouseleave="gunsIsOpen = false"
            class="absolute z-100 w-38 mt-4 p-4 bg-ssblue rounded-b"
          >
            <g-link to="/guns/brand/tippmann-arms" class="hover:text-ssorange">TIPPMANN</g-link>
          </div>
        </div>
        <div>
          <button @mouseover="ammoIsOpen = !ammoIsOpen" class="text-white text-xl font-bold">
            <g-link to="/blog/ammunition" class="p-4 hover:text-ssorange">AMMO</g-link>
          </button>
          <div
            v-if="ammoIsOpen"
            @mouseleave="ammoIsOpen = false"
            class="absolute z-100 w-38 mt-4 p-4 bg-ssblue rounded-b"
          >
            <g-link to="/blog/reloading" class="hover:text-ssorange">RELOADING</g-link>
          </div>
        </div>

        <g-link to="/accessories" class="p-4 hover:text-ssorange">ACCESSORIES</g-link>
        <g-link to="/optics" class="p-4 hover:text-ssorange">OPTICS</g-link>
        <g-link to="/blog/safes-security/" class="p-4 hover:text-ssorange">SECURITY</g-link>
        <g-link to="/blog/maintenance-cleaning" class="p-4 hover:text-ssorange">MAINTENANCE</g-link>
        <g-link to="/blog/clothing-footwear" class="p-4 hover:text-ssorange">CLOTHING</g-link>
      </div>

      <!--Add search input to navbar -->
      <div id="nav-main-search" class="w-1/5 flex justify-center p-4 font-bold text-lg text-white">
        <p class="mr-4 text-xl">SEARCH</p>
        <input
          id="search"
          v-model="searchTerm"
          type="search"
          class="rounded-md w-56 text-black pl-2"
        />

        <!-- Handle search results -->
        <div
          id="results"
          class="max-h-screen mt-4 absolute z-10 bg-ssblue mt-8 w-1/5 rounded-b overflow-auto"
        >
          <div v-for="result in searchResults" :key="result.id" class="p-4 w-full">
            <g-link :to="`/guns/${result.slug}`">
              <figure
                :v-if="result.images[1]"
                @click="clearSearch"
                class="p-2 border-2 border-solid border-white rounded hover:border-ssorange"
              >
                <g-image
                  :src="`${JSON.parse(result.images)[0].FullPath}`"
                  :alt="`${result.title}`"
                />
                <h2 class="mt-2 text-md" v-if="result.variant != null">
                  {{
                  result.condition + " " + result.title + " " + result.variant
                  }}
                </h2>
                <h2
                  class="hover:text-ssorange hover:border-ssorange"
                  v-else
                >{{ result.condition + " " + result.title }}</h2>
                <p>£{{ result.price }}</p>
              </figure>
            </g-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    searchTerm: "",
    gunsIsOpen: false,
    ammoIsOpen: false,
    open: false
  }),
  computed: {
    searchResults() {
      const searchTerm = this.searchTerm;
      if (searchTerm.length < 3) return [];
      return this.$search.search({ query: searchTerm, limit: 50 });
    }
  },
  methods: {
    clearSearch: function(event) {
      this.searchTerm = "";
    },
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: ShooterSFRegular;
  src: url(../assets/ShooterSFRegular.ttf);
}
</style>
