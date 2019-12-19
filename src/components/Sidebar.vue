<template>
    <div class="overflow-hidden shadow-lg border-t-4 bg-white rounded-b-lg rounded-t border-ssblue w-full md:w-1/4">
        <div class="px-6 py-4 mt-4 mb-8">
            <!-- <div class="uppercase tracking-wide text-c2 mb-4">Search</div> 
                <Search class="relative x-50 min-w-full"/>
            </div>            -->
            <div class="uppercase tracking-wide text-c2 mb-4">Gun Type</div>
                <div class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange">   
                    <g-link to="/air-pistol/">Air Pistol</g-link>
                </div>
                <div class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-b-0 hover:text-ssorange">
                    <g-link to="/air-rifle/">Air Rifle</g-link>
                </div>
                <div class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange">
                    <g-link to="/long-barrel-pistol/">Long Barrel Pistol</g-link>
                </div>
                <div class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange">
                    <g-link to="/pistol-black-powder/">Pistol - Black Powder</g-link>
                </div>
                <div class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange">
                    <g-link to="/blank-pistol/">Pistol - Blanks</g-link>
                </div>
                <div class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange">
                    <g-link to="/rifle/">Rifle</g-link>
                </div>
                <div class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange">
                    <g-link to="/rifle-black-powder/">Rifle - Black Powder</g-link>
                </div>
                <div class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange">
                    <g-link to="/shotgun/">Shotgun</g-link>
                </div>
                <div class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange">
                    <g-link to="/shotgun-silenced/">Shotgun - Silenced</g-link>
                </div>
            </div>
        </div>
</template>

<script>
import Search from '~/components/Search.vue'
export default {
    name: 'Sidebar',
    components: {
        Search,
    }
}
</script>