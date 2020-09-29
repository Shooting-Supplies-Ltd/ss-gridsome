<template>
  <Layout>
    <Banner class="hidden lg:flex lg:border-b-2 lg:border-black lg:mb-8" />
    
    <div>
      <div id="top-row" class="hidden lg:block lg:mt-8">
        <ul class="flex justify-between items-center sm:py-8 lg:mx-12 xl:mx-24">
          <div>
            <li>
              <g-link to="/blog/gunsmithing/">
                <g-image
                  src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573223183/misc/AirArmsApproved_a6mdjd_jwccgj.jpg"
                  style="max-width: 160px;"
                />
              </g-link>
            </li>
          </div>
          <div>
            <li>
              <g-link to="/blog/offers">
                <g-image
                  src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573222197/misc/special-offers_ftxhmi_eqolxg.png"
                  style="max-width: 160px;"
                />
              </g-link>
            </li>
          </div>
          <div>
            <li>
              <g-link to="/blog/tackle-guns-star-shop">
                <g-image
                  src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573564830/logos/Tackle-and-Guns-Star-Shop-1_gixwr1_th35jk.jpg"
                  style="max-width: 160px;"
                />
              </g-link>
            </li>
          </div>
          <div>
            <li>
              <g-image
                src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573565462/misc/Deko-SpreadTheCost_lw6axe_pvrogz.png"
                style="max-width: 160px;"
              />
            </li>
          </div>
          <div>
            <li>
              <a href="https://www.guntrader.uk/dealers/bromsgrove/shooting-supplies-ltd">
                <g-image
                  src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573222241/misc/find-us-guntrader_pzj8vm.jpg"
                  style="max-width: 160px;"
                />
              </a>
            </li>
          </div>
          <div>
            <li>
              <g-link to="/blog/contact-us">
                <g-image
                  src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573222843/misc/Opening-Times_rufl99.jpg"
                  style="max-width: 160px;"
                />
              </g-link>
            </li>
          </div>
        </ul>
      </div>

      <div class="hidden lg:block mx-8">
        <hr class="border-ssblue" />
      </div>

      <g-link to="/blog/offers">
        <div class="w-full my-6 flex justify-center">
            <g-image src='../assets/images/Sale-Banner.png' class="w-5/6" />
        </div>
      </g-link>

      <div class="hidden lg:block mx-8">
        <hr class="border-ssblue" />
      </div>

      <div
        id="product-select-row-1"
        class="my-8 md:mx-8 md:my-12 lg:mx-24 lg:my-20 xl:mx-32 xl:my-20"
      >
        <ul class="flex flex-wrap justify-around">
          <div>
            <li class="mb-12 border-t lg:border-none hover:text-ssorange">
              <g-link to="/guns/">
                <g-image
                  src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573561021/shootingsuppliesltd.co.uk/Guns.jpg"
                />
                <h2 class="flex justify-center font-bold text-xl lg:text-2xl lg:mt-6">GUNS</h2>
              </g-link>
            </li>
          </div>
          <div>
            <li class="mb-12 hover:text-ssorange border-t lg:border-none">
              <g-link to="/ammunition">
                <g-image
                  src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573561043/shootingsuppliesltd.co.uk/Ammo.jpg"
                />
                <h2 class="flex justify-center font-bold text-xl lg:text-2xl lg:mt-6">AMMO</h2>
              </g-link>
            </li>
          </div>
          <div>
            <li class="hover:text-ssorange mb-12 border-t lg:border-none">
              <g-link to="/optics/">
                <g-image
                  src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573561058/shootingsuppliesltd.co.uk/Scopes.jpg"
                />
                <h2 class="flex justify-center font-bold text-xl lg:text-2xl lg:mt-6">OPTICS</h2>
              </g-link>
            </li>
          </div>
        </ul>
      </div>
      <div id="product-select-row-2" class="my-8 lg:mx-24 lg:my-20 xl:mx-32 xl:my-20">
        <ul class="flex flex-wrap items-center justify-around">
          <div>
            <li class="hover:text-ssorange mb-12 border-t lg:border-none">
              <g-link to="/maintenance">
                <g-image
                  src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573561073/shootingsuppliesltd.co.uk/Maintenance.jpg"
                />
                <h2
                  class="flex flex-wrap justify-center font-bold text-xl lg:text-2xl lg:mt-6"
                >MAINTENANCE</h2>
              </g-link>
            </li>
          </div>
          <div>
            <li class="hover:text-ssorange mb-12 border-t lg:border-none">
              <g-link to="/blog/reloading/">
                <g-image
                  src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573561100/shootingsuppliesltd.co.uk/Reloading.jpg"
                />
                <h2 class="flex justify-center font-bold text-xl lg:text-2xl lg:mt-6">RELOADING</h2>
              </g-link>
            </li>
          </div>
          <div>
            <li class="hover:text-ssorange mb-4 border-t lg:border-none">
              <g-link to="/blog/clothing-footwear/">
                <g-image
                  src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573561134/shootingsuppliesltd.co.uk/Clothing.jpg"
                />
                <h2 class="flex justify-center font-bold text-xl lg:text-2xl lg:mt-6">CLOTHING</h2>
              </g-link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </Layout>
</template>

<script>
import Banner from "../components/Banner";

export default {
  metaInfo() {
    return {
      title: "Shooting Supplies Ltd",
      meta: [
        {
          name: "description",
          content: "The Midlands Leading Shooting Supplier"
        }
      ]
    };
  },
  components: {
    Banner,
  },
};
</script>
