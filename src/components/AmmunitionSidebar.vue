<template>
  <div
    class="overflow-hidden shadow border border-gray-300 bg-white rounded-b rounded-t  w-full lg:w-1/4"
  >
    <div class="px-6 py-4 mt-4 mb-8">
      <div class="mb-4 uppercase text-lg text-center font-bold">Ammunition Type</div>
      <div
        class="flex px-4 py-2 cursor-pointer border rounded-t hover:border-ssorange text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/ammunition">All</g-link>
      </div>
       <div
        class="flex px-4 py-2 cursor-pointer border hover:border-ssorange text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/ammunition/cartridges">Cartridges</g-link>
      </div>
      <div
        class="flex px-4 py-2 cursor-pointer border hover:border-ssorange text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/ammunition/game">Game</g-link>
      </div>
      <div
        class="flex px-4 py-2 cursor-pointer border rounded-b hover:border-ssorange text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/ammunition/target">Target</g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AmmunitionSidebar"
};
</script>
