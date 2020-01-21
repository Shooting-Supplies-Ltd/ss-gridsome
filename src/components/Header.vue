<template>
  <header>
    <div id="top-bar" class="hidden lg:block lg:flex lg:justify-around lg:items-center lg:bg-ssblue lg:text-white lg:h-10">
      <div>
        <div id="contact" class="lg:flex">
          <p class="mr-8 font-bold"><a href="tel:01527831261"><font-awesome :icon="['fas', 'phone-alt']" size="md" /><span class="text-lg ml-2">01527 831 261</span></a></p>
          <!-- <p><a href="mailto:info@shootingsuppliesltd.co.uk?subject=Website General Enquiry"><span>Email Us: </span></a></p> -->
        </div>  
      </div>
      
      <div>
        <div id="social" class="lg:flex">
          <!-- <p class="mr-4">Find Us On:</p> -->
          <p class="mr-4"><a href="https://www.facebook.com/ShootingSuppliesLTD/" target="_blank"><font-awesome :icon="['fab', 'facebook-square']" size="lg" /></a></p>
          <p class="mr-4"><a href="https://twitter.com/shootingsupplys" target="_blank"><font-awesome :icon="['fab', 'twitter']" size="lg" /></a></p>
          <p class="mr-4"><a href="https://www.instagram.com/shootingsupplies/" target="_blank"><font-awesome :icon="['fab', 'instagram']" size="lg" /></a></p>
          <p class=""><a href="mailto:info@shootingsuppliesltd.co.uk" target="_blank"><font-awesome :icon="['fas', 'envelope']" size="lg" /></a></p>
        </div>
      </div>
    </div>
    
    <div class="flex sm:justify-center">
      <button @click="toggle" id="mobile-menu" class="lg:hidden">
        <font-awesome :icon="['fas', 'bars']" class="my-4 ml-6 text-ssblue" />
      </button>
      <h1 class="hidden">Shooting Supplies Ltd / Guns</h1>
      <g-link to="/"><g-image class="p-2"
        src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573564903/ShootingSuppliesLogo-800w-1_cno9o2_tpiyii.jpg" 
      /></g-link>
    </div>
    
    <div :class="open ? 'block': 'hidden'" class="bg-ssblue text-white uppercase font-semibold">
      <SearchHeader />
      <div class="text-sm sm:flex-grow align-center p-4 text-lg text-center">
        <a href="https://shootingsuppliesltd.co.uk"><p class="mb-4">Home</p></a>
        <a href="https://guns.shootingsuppliesltd.co.uk"><p class="mb-4">Guns</p></a>
        <a href="https://shootingsuppliesltd.co.uk/product-category/optics/"><p class="mb-4">Optics</p></a>
        <a href="https://shootingsuppliesltd.co.uk/ammunition/"><p class="mb-4">Ammo</p></a>
        <a href="https://shootingsuppliesltd.co.uk/clothing-footwear/"><p class="mb-4">Clothing</p></a>
        <a href="https://shootingsuppliesltd.co.uk/safes-security/"><p class="mb-4">Security</p></a>
        <a href="https://shootingsuppliesltd.co.uk/product-category/spares-accessories/"><p class="mb-4">Accessories</p></a>
        <a href="https://shootingsuppliesltd.co.uk/special-offers/"><p class="mb-4">Offers</p></a>
      </div>
    </div>

    <nav id="menu" class="hidden lg:block lg:flex lg:justify-around lg:items-center lg:bg-ssblue lg:text-white lg:uppercase lg:text-2xl lg:h-auto">
      <div class="lg:flex lg:mt-4">
      <a href="https://shootingsuppliesltd.co.uk"><p class="mr-8">Home</p></a>
      <a href="https://guns.shootingsuppliesltd.co.uk"><p class="mr-8">Guns</p></a>
      <a href="https://shootingsuppliesltd.co.uk/product-category/optics/"><p class="mr-8">Optics</p></a>
      <a href="https://shootingsuppliesltd.co.uk/ammunition/"><p class="mr-8">Ammo</p></a>
      <a href="https://shootingsuppliesltd.co.uk/clothing-footwear/"><p class="mr-8">Clothing</p></a>
      <a href="https://shootingsuppliesltd.co.uk/safes-security/"><p class="mr-8">Security</p></a>
      <a href="https://shootingsuppliesltd.co.uk/product-category/spares-accessories/"><p class="mr-8">Accessories</p></a>
      <a href="https://shootingsuppliesltd.co.uk/special-offers/"><p class="mr-8">Offers</p></a>
      </div>
    </nav>
    
    <div id="main-search" class="hidden lg:block lg:relative lg:z-50 lg:h-12 lg:w-full lg:mb-12">
      <SearchHeader class="lg:bg-ssblue" />
    </div>
  
  </header>
</template>

<script>
import SearchHeader from '~/components/SearchHeader.vue'

export default {
  name: 'Header',
  data () {
    return {
    open: false,
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  },
  components: {
    SearchHeader,
  },
}
</script>
