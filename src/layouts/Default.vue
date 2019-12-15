<template>
  <div>
    <header class="w-full shadow-lg border-t-4 mb-8 rounded-t border-ssblue">
      
      <div id="top-bar" class=" bg-ssblue w-full h-8 flex">
        
        <div class="container w-1/2 flex flex-initial justify-center items-center text-white">
          <div id="contact" class="flex items-center">
            <p class="mr-4"><a href="tel:01527831261">Call Us: 01527831261 <font-awesome :icon="['fas', 'phone']"/></a></p>
            <p><a href="mailto:info@shootingsuppliesltd.co.uk">Email Us: <font-awesome :icon="['fas', 'envelope']"/></a></p>
          </div>  
        </div>
        
        <div class="container w-1/2 flex flex-initial justify-center items-center text-white">
          <div id="social" class="flex items-center">
            <p class="mr-4">Find Us On:</p>
            <p class="text-xl mr-4"><a href="https://www.facebook.com/ShootingSuppliesLTD/" target="_blank"><font-awesome :icon="['fab', 'facebook-square']"/></a></p>
            <p class="text-xl mr-4"><a href="https://twitter.com/shootingsupplys" target="_blank"><font-awesome :icon="['fab', 'twitter']"/></a></p>
            <p class="text-xl"><a href="https://www.instagram.com/shootingsupplies/" target="_blank"><font-awesome :icon="['fab', 'instagram']"/></a></p>
          </div>
        </div>
      
      </div>
      
      <div class="flex justify-center bg-white">
        <h1 class="hidden">Shooting Supplies Ltd / Guns</h1>
        <g-link to="/"><g-image class="block flex items-center max-w-xl my-4"
          src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573564903/ShootingSuppliesLogo-800w-1_cno9o2_tpiyii.jpg" 
        /></g-link>
      </div>
    </header>
    <transition name="fade" appear>
      <main>
        <slot/>
      </main>
    </transition>
  </div>
</template>

<style>
.fade-enter-active {
  transition: opacity 1s;
}

.fade-enter {
  opacity: 0.1;
}
</style>

