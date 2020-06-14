<template>
  <div
    class="overflow-hidden shadow-lg border-t-4 bg-white rounded-b-lg rounded-t border-ssblue w-full lg:w-1/4"
  >
    <div class="px-6 py-4 mt-4 mb-8">
      <div class="uppercase tracking-wide text-c2 mb-4">Accessory Type</div>
      <div
        class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-b-0 hover:text-ssorange"
      >
        <g-link to="/accessories/attachments-mounts">Attachments & Mounts</g-link>
      </div>
      <div
        class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-b-0 hover:text-ssorange"
      >
        <g-link to="/accessories/bipods-rests">Bipods & Rests</g-link>
      </div>
      <div
        class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-b-0 hover:text-ssorange"
      >
        <g-link to="/accessories/buttstocks">Buttstocks</g-link>
      </div>
      <div
        class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-b-0 hover:text-ssorange"
      >
        <g-link to="/accessories/cheek-pieces">Cheek Pieces</g-link>
      </div>
      <div
        class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-b-0 hover:text-ssorange"
      >
        <g-link to="/accessories/grips">Grips</g-link>
      </div>
      <div
        class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-b-0 hover:text-ssorange"
      >
        <g-link to="/accessories/handguards">Handguards</g-link>
      </div>
      <div
        class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-b-0 hover:text-ssorange"
      >
        <g-link to="/accessories/holsters">Holsters</g-link>
      </div>
      <div
        class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/accessories/magazines">Magazines</g-link>
      </div>
      <div
        class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-b-0 hover:text-ssorange"
      >
        <g-link to="/accessories/stocks">Stocks</g-link>
      </div>
      <div
        class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-b-1 hover:text-ssorange"
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
