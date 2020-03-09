<template>
  <div>
    <Header />
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
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
