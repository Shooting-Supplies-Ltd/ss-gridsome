<template>
  <div
    class="overflow-hidden shadow border border-gray-300 bg-white rounded-b rounded-t  w-full lg:w-1/4"
  > 
    <div class="px-6 py-4 mt-4 mb-8">
      <!-- <div class="uppercase tracking-wide text-c2 mb-4">Search</div> 
                <Search class="relative x-50 min-w-full"/>
            </div>            -->
      <div class="mb-4 uppercase text-lg text-center font-bold">Gun Type</div>
      <div
        class="flex px-4 py-2 border hover:border-ssorange rounded-t cursor-pointer text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/guns/air-pistol/">Air Pistol</g-link>
      </div>
      <div
        class="flex px-4 py-2 cursor-pointer border hover:border-ssorange text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/guns/air-rifle/">Air Rifle</g-link>
      </div>
      <div
        class="flex px-4 py-2 cursor-pointer border hover:border-ssorange text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/guns/long-barrel-pistol/">Long Barrel Pistol</g-link>
      </div>
      <div
        class="flex px-4 py-2 cursor-pointer border hover:border-ssorange text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/guns/pistol-black-powder/">Pistol - Black Powder</g-link>
      </div>
      <div
        class="flex px-4 py-2 cursor-pointer border hover:border-ssorange text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/guns/blank-pistol/">Pistol - Blanks</g-link>
      </div>
      <div
        class="flex px-4 py-2 cursor-pointer border hover:border-ssorange text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/guns/rifle/">Rifle</g-link>
      </div>
      <div
        class="flex px-4 py-2 cursor-pointer border hover:border-ssorange text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/guns/rifle-black-powder/">Rifle - Black Powder</g-link>
      </div>
      <div
        class="flex px-4 py-2 border hover:border-ssorange cursor-pointer text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/guns/shotgun/">Shotgun</g-link>
      </div>
      <div
        class="flex px-4 py-2 cursor-pointer border hover:border-ssorange rounded-b text-lg text-grey-darkest hover:text-ssorange"
      >
        <g-link to="/guns/shotgun-silenced/">Shotgun - Silenced</g-link>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "~/components/Search.vue";
export default {
  name: "Sidebar",
  components: {
    Search
  }
};
</script>
