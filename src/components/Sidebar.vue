<template>
    <div class="overflow-hidden shadow-lg border-t-4 bg-white mb-4 rounded-b-lg rounded-t border-ssblue w-full md:w-1/4">
        <div class="px-6 py-4 mb-2 mt-4 mb-8">
            <div class="uppercase tracking-wide text-c2 mb-4">Search</div> 
            <!-- <div class="flex border px-4 py-2 text-lg text-grey-darkest border-b-4" style="border-left: 4px solid #e2624b !important;">    -->
                <Search class="relative x-50 min-w-full"/>
            <!-- </div>            -->
            <div class="uppercase tracking-wide text-c2 mb-4 mt-12">Gun Type</div>
                <div class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest">   
                    <g-link to="/air-pistol/">Air Pistol</g-link>
                </div>
                <div class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-b-0">
                    <g-link to="/air-rifle/">Air Rifle</g-link>
                </div>
                <div class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest">
                    <g-link to="/long-barrel-pistol/">Long Barrel Pistol</g-link>
                </div>
                <div class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest">
                    <g-link to="/pistol-black-powder/">Pistol - Black Powder</g-link>
                </div>
                <div class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest">
                    <g-link to="/blank-pistol/">Pistol - Blanks</g-link>
                </div>
                <div class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest">
                    <g-link to="/rifle/">Rifle</g-link>
                </div>
                <div class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest">
                    <g-link to="/rifle-black-powder/">Rifle - Black Powder</g-link>
                </div>
                <div class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest">
                    <g-link to="/shotgun/">Shotgun</g-link>
                </div>
                <div class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest">
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