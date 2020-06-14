<template>
  <div>
    <Topbar class="hidden lg:flex" />
    <Navbar />
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
    <Footer />
  </div>
</template>

<style>
.fade-enter-active {
  transition: opacity 0.6s;
}

.fade-enter {
  opacity: 0.1;
}
</style>

<script>
import Topbar from "~/components/Topbar.vue";
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Topbar,
    Navbar,
    Footer
  }
};
</script>
