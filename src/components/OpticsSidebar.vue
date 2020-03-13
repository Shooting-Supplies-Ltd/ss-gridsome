<template>
  <div
    class="overflow-hidden shadow-lg border-t-4 bg-white rounded-b-lg rounded-t border-ssblue w-full lg:w-1/4"
  >
    <div class="px-6 py-4 mt-4 mb-8">
      <div class="uppercase tracking-wide text-c2 mb-4">Optic Type</div>
      <div
        class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/optics/binoculars/">Binoculars</g-link>
      </div>
      <div
        class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-b-0 hover:text-ssorange"
      >
        <g-link to="/optics/night-vision/">Night-Vision</g-link>
      </div>
      <div
        class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/optics/scopes/">Scopes</g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OpticsSidebar"
};
</script>
