<template>
  <div
    id="popup"
    class="absolute z-20 bg-white rounded md:w-1/3 w-1/2 border shadow-lg"
  >
    <div>
      <g-image src="~/assets/images/photon-sale.png" alt="Yukon Photon Winter Sale" />
    </div>
    <div class="p-2 flex justify-center rounded-b">
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
