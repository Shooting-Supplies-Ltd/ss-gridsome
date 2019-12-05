<template>
  <div>
    <header class="w-full shadow-lg border-t-4 bg-white mb-8 rounded-t border-ssblue">
      <div class="flex justify-center">
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

