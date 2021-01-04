<template>
  <div
    id="popup"
    class="absolute z-20 bg-white rounded md:w-1/3 w-1/2 border-4 border-ssblue shadow-lg"
  >
    <div class="p-3">
      <h2 class="mb-2 text-red-700 text-xl">COVID UPDATE</h2>
      <p class="mb-2">
        Due to the latest government advice we are reverting once again to a
        book and collect system.
      </p>
      <p class="mb-2">
        Collections will be available between the hours of 10am - 2pm, Tue-Sat.
      </p>
      <p class="mb-2">
        Please call us between the above hours to place your orders on
        01527831261 or follow this
        <g-link to="/temp-order-form" class="text-ssblue underline"
          >link</g-link
        >
        to complete a short form.
      </p>
      <p class="mb-2">
        We shall get back to you to arrange your collection slot asap!
      </p>
      <p>Stay Safe!</p>
    </div>
    <!-- <div>
      <g-link to="/products/yukon-photon-xt-6-5x50s-night-vision-rifle-scope">
        <g-image
          src="~/assets/images/photon-sale.png"
          alt="Yukon Photon Winter Sale"
        />
      </g-link>
    </div> -->
    <div class="p-2 mt-2 flex justify-center rounded-b">
      <button
        class="focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 mr-2 bg-blue-700 hover:bg-blue-600 text-white rounded"
        @click="hide"
      >
        CLOSE
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  data: {
    popup: true,
  },
  methods: {
    hide: function (event) {
      this.popup = false;
      var close = document.getElementById("popup");
      close.classList.add("hidden");
    },
  },
};
</script>
