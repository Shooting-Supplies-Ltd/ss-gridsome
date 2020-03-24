<template>
  <div id="popup" class="absolute z-20 bg-white rounded md:w-1/3 w-1/2 border shadow-lg">
    <div class="rounded-t bg-ssblue">
      <div class="relative py-3 px-2 flex">
        <span class="font-semibold text-white md:text-base text-sm"
          >Anouncement</span
        >
      </div>
    </div>
    <div class="bg-gray-200 md:text-base text-sm border-b p-2 h-36">
      <p>
        Following the governments announcement, the shop will now be closed. Future updates will be posted both here and on Social media.
        <br></br>
        We hope to see you soon & take care of yourselves!
      </p>
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
  methods: {
    hide: function(event) {
      var close = document.getElementById('popup')
      close.classList.add('hidden')
    }
  }
};
</script>
