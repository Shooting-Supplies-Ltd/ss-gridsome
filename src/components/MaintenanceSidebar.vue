<template>
  <div
    class="overflow-hidden shadow border border-gray-300 bg-white rounded-b rounded-t  w-full lg:w-1/4"
  >
    <div class="px-6 py-4 mt-4 mb-8">
      <div class="mb-4 uppercase text-lg text-center font-bold">Maintenance Category</div>
      <div
        class="flex px-4 py-2 cursor-pointer border rounded-t hover:border-ssorange text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/maintenance/chemicals-cleaning">Chemicals & Cleaning</g-link>
      </div>
      <div
        class="flex px-4 py-2 cursor-pointer border rounded-b hover:border-ssorange text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/maintenance/kits">Kits</g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MaintenanceSidebar"
};
</script>
