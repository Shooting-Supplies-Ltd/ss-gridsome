<template>
    <header class="w-full shadow-lg border-t-4 mb-8 rounded-t border-ssblue">
        <div id="top-bar" class=" bg-ssblue w-full h-8 flex">
        
        <div class="container w-1/2 flex justify-center items-center text-white">
          <div id="contact" class="flex items-center">
            <p class="mr-8"><a href="tel:01527831261"><span class="hover:text-ssorange">Call Us: 0152783126<font-awesome :icon="['fas', 'phone']" class="ml-2"/></span></a></p>
            <p><a href="mailto:info@shootingsuppliesltd.co.uk"><span class="hover:text-ssorange">Email Us: <font-awesome :icon="['fas', 'envelope']" class="ml-2"/></span></a></p>
          </div>  
        </div>
        
        <div class="container w-1/2 flex justify-center items-center text-white">
          <div id="social" class="flex items-center">
            <p class="mr-4">Find Us On:</p>
            <p class="mr-4"><a href="https://www.facebook.com/ShootingSuppliesLTD/" target="_blank"><font-awesome :icon="['fab', 'facebook-square']" class="hover:text-ssorange" /></a></p>
            <p class="mr-4"><a href="https://twitter.com/shootingsupplys" target="_blank"><font-awesome :icon="['fab', 'twitter']" class="hover:text-ssorange" /></a></p>
            <p class=""><a href="https://www.instagram.com/shootingsupplies/" target="_blank"><font-awesome :icon="['fab', 'instagram']" class="hover:text-ssorange" /></a></p>
          </div>
        </div>
      </div>
       <div class="flex justify-center bg-white">
        <h1 class="hidden">Shooting Supplies Ltd / Guns</h1>
        <g-link to="/"><g-image class="block flex items-center max-w-xl my-4"
          src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573564903/ShootingSuppliesLogo-800w-1_cno9o2_tpiyii.jpg" 
        /></g-link>
      </div>

      <nav id="menu" class="w-full flex justify-around items-center bg-ssblue text-white uppercase h-12 font-semibold text-lg">
          <div class="flex">
          <a href="https://shootingsuppliesltd.co.uk"><p class="mr-12 hover:text-ssorange">Home</p></a>
          <a href="https://shootingsuppliesltd.co.uk"><p class="mr-12 hover:text-ssorange">Guns</p></a>
          <a href="https://shootingsuppliesltd.co.uk/product-category/optics/"><p class="mr-12 hover:text-ssorange">Optics</p></a>
          <a href="https://shootingsuppliesltd.co.uk/ammunition/"><p class="mr-12 hover:text-ssorange">Ammunition</p></a>
          <a href="https://shootingsuppliesltd.co.uk/clothing-footwear/"><p class="mr-12 hover:text-ssorange">Clothing</p></a>
          <a href="https://shootingsuppliesltd.co.uk/safes-security/"<p class="mr-12 hover:text-ssorange">Security</p></a>
          <a href="https://shootingsuppliesltd.co.uk/product-category/spares-accessories/"><p class="mr-12 hover:text-ssorange">Accessories</p></a>
          <a href="https://shootingsuppliesltd.co.uk/special-offers/"><p class="mr-12 hover:text-ssorange">Offers</p></a>
          </div>
      </nav>
    </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>
