<template>
  <div
    id="popup"
    class="absolute z-20 bg-white rounded md:w-1/3 w-1/2 border shadow-lg"
  >
    <div class="rounded-t bg-ssblue">
      <div class="relative py-3 px-2 flex">
        <span class="font-semibold text-white md:text-base text-sm uppercase"
          >COVID UPDATE</span
        >
      </div>
    </div>
    <div class="bg-gray-200 md:text-base text-sm border-b p-4 h-36">
    <div class="mb-2">
      <h3 class="mt-2 text-red-400">UPDATE</h3>
    </div>
      <p>
        Our opening hours shall be returning to normal as of Wednesday 2nd
        December.
      </p>
      <br />
      <p>Mon-Thu & Sat: 09:00-17:30</p>
      <p>Fri: 09:00-19:00</p>
    </div>
    <div class="p-2 flex justify-end rounded-b">
      <button
        class="focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 mr-2 bg-blue-700 hover:bg-blue-600 text-white rounded"
        @click="hide"
      >
        OK
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
