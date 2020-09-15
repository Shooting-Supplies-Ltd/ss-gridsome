<template>
  <div
    class="overflow-hidden shadow border border-gray-300 bg-white rounded-b rounded-t  w-full lg:w-1/4"
  >
    <div class="px-6 py-4 mt-4 mb-8">
      <div class="mb-4 uppercase text-lg font-bold text-center">Accessory Type</div>
      <div
        class="flex px-4 py-2 cursor-pointer border hover:border-ssorange rounded-t text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/accessories">All</g-link>
      </div>
      <div
        class="flex px-4 py-2 cursor-pointer border hover:border-ssorange rounded-t text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/accessories/attachments-mounts">Attachments & Mounts</g-link>
      </div>
      <div
        class="flex px-4 py-2 cursor-pointer border hover:border-ssorange text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/accessories/bipods-rests">Bipods & Rests</g-link>
      </div>
      <div
        class="flex px-4 py-2 cursor-pointer border hover:border-ssorange text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/accessories/buttstocks">Buttstocks</g-link>
      </div>
      <div
        class="flex px-4 py-2 cursor-pointer border hover:border-ssorange text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/accessories/cheek-pieces">Cheek Pieces</g-link>
      </div>
      <div
        class="flex px-4 py-2 cursor-pointer border hover:border-ssorange text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/accessories/grips">Grips</g-link>
      </div>
      <div
        class="flex px-4 py-2 cursor-pointer border hover:border-ssorange text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/accessories/holsters">Holsters</g-link>
      </div>
      <div
        class="flex px-4 py-2 cursor-pointer border hover:border-ssorange text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/accessories/magazines">Magazines</g-link>
      </div>
      <div
        class="flex px-4 py-2 cursor-pointer border hover:border-ssorange text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/accessories/stocks">Stocks</g-link>
      </div>
      <div
        class="flex px-4 py-2 cursor-pointer border hover:border-ssorange text-lg text-grey-darkest rounded-b hover:text-ssorange"
      >
        <g-link to="/accessories/targets">Targets</g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccessoriesSidebar"
};
</script>
