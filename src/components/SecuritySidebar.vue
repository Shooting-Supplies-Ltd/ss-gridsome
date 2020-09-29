<template>
  <div
    class="overflow-hidden shadow border border-gray-300 bg-white rounded-b rounded-t  w-full lg:w-1/4"
  >
    <div class="px-6 py-4 mt-4 mb-8">
      <div class="mb-4 uppercase text-lg font-bold text-center">Security Items</div>
      <div
        class="flex px-4 py-2 cursor-pointer border hover:border-ssorange rounded-t text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/security">All</g-link>
      </div>
      <div
        class="flex px-4 py-2 cursor-pointer border hover:border-ssorange text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/security/gun-safes">Gun Safes</g-link>
      </div>
      <div
        class="flex px-4 py-2 cursor-pointer border hover:border-ssorange rounded-b text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/security/ammo-safes">Ammo Safes</g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecuritySidebar"
};
</script>
