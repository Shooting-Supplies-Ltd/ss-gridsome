<template>
  <Layout>
    <div>
      <div id="top-row" class="mt-20">
        <ul class="flex justify-between items-center mx-12">
          <div>
            <li>
              <g-link to="/blog/gunsmithing/">
                <g-image
                  src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573564904/AirArmsApproved-1_cppvyz_m973pf.jpg"
                  style="max-width: 160px;"
                />
              </g-link>
            </li>
          </div>
          <div>
            <li>
              <g-link to="/blog/offers">
                <g-image
                  src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573564898/special-offers_ftxhmi_eqolxg_kwyp7m.png"
                  style="max-width: 160px;"
                />
              </g-link>
            </li>
          </div>
          <div>
            <li>
              <g-link to="/blog/tackle-guns-star-shop">
                <g-image
                  src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573564830/Tackle-and-Guns-Star-Shop-1_gixwr1_th35jk.jpg"
                  style="max-width: 160px;"
                />
              </g-link>
            </li>
          </div>
          <div>
            <li>
              <g-image
                src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573565462/Deko-SpreadTheCost_lw6axe_pvrogz.png"
                style="max-width: 160px;"
              />
            </li>
          </div>
          <div>
            <li>
              <a
                href="https://www.guntrader.uk/dealers/bromsgrove/shooting-supplies-ltd"
              >
                <g-image
                  src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573564902/findus-guntrader-v1-1_ucbhx5_ks7jfv_nknsa5.jpg"
                  style="max-width: 160px;"
                />
              </a>
            </li>
          </div>
          <div>
            <li>
              <g-link to="/blog/contact-us">
                <g-image
                  src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573564832/Opening-Times-1_ybxree_trnybp_qix4tx.jpg"
                  style="max-width: 160px;"
                />
              </g-link>
            </li>
          </div>
        </ul>
      </div>

      <div class="mx-8 my-4">
        <hr class="border-ssblue" />
      </div>

      <div id="product-select-row-1">
        <ul class="flex justify-between items-center mx-24">
          <div>
            <li class="hover:text-ssorange">
              <g-link to="/guns">
                <g-image
                  src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573565379/Guns_bylme2_icn8l5.jpg"
                />
                <h2 class="flex justify-center font-bold text-xl mt-4">
                  GUNS
                </h2>
              </g-link>
            </li>
          </div>
          <div>
            <li class="hover:text-ssorange">
              <g-link to="/blog/ammunition/">
                <g-image
                  src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573565380/Ammo_dqveke_faucxd.jpg"
                />
                <h2 class="flex justify-center font-bold text-xl mt-4">AMMO</h2>
              </g-link>
            </li>
          </div>
          <div>
            <li class="hover:text-ssorange">
              <g-link to="">
                <g-image
                  src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573565381/Scopes_pweqna_a6ievw.jpg"
                />
                <h2 class="flex justify-center font-bold text-xl mt-4">
                  OPTICS
                </h2>
              </g-link>
            </li>
          </div>
        </ul>
      </div>
      <div id="product-select-row-2" class="mb-16">
        <ul class="flex justify-between items-center mx-24 mt-16">
          <div>
            <li class="hover:text-ssorange">
              <g-link to="/blog/maintenance-cleaning/">
                <g-image
                  src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573565382/Maintenance_sne6oe_gmgncb.jpg"
                />
                <h2 class="flex justify-center font-bold text-xl mt-4">
                  MAINTENANCE & CLEANING
                </h2>
              </g-link>
            </li>
          </div>
          <div>
            <li class="hover:text-ssorange">
              <g-link to="/blog/reloading/">
                <g-image
                  src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573565383/Reloading_aruwyq_pibivk.jpg"
                />
                <h2 class="flex justify-center font-bold text-xl mt-4">
                  RELOADING
                </h2>
              </g-link>
            </li>
          </div>
          <div>
            <li class="hover:text-ssorange">
              <g-link to="/blog/clothing-footwear/">
                <g-image
                  src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573565383/Clothing_r4zxrt_wo3xz7.jpg"
                />
                <h2 class="flex justify-center font-bold text-xl mt-4">
                  CLOTHING
                </h2>
              </g-link>
            </li>
          </div>
        </ul>
      </div>

      <div class="mx-8 mt-4">
        <hr class="border-ssblue" />
      </div>

      <div class="mx-12 my-8">
        *<ClientOnly
          >*
          <carousel
            :per-page="5"
            :navigate-to="someLocalProperty"
            :mouse-drag="false"
            :paginationEnabled="false"
            :loop="true"
            :autoplay="true"
            :speed="2000"
            :autoPlayTimeout="20000"
            :scrollPerPage="false"
          >
            <slide>
              <g-image
                style="max-width: 160px;"
                src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573564869/Ruger-Logo_kevdtl-1_tqfnmv.png"
                alt="Ruger Logo"
              />
            </slide>
            <slide>
              <g-image
                style="max-width: 160px;"
                src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573564834/Air-Arms-Logo_q9ecwv-1_uvzj3a.png"
                alt="Air Arms Logo"
              />
            </slide>
            <slide>
              <g-image
                style="max-width: 160px;"
                src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573564837/Crosman-Logo_gjeb1f-1_vkdsnt.png"
                alt="Crossman Logo"
              />
            </slide>
            <slide>
              <g-image
                style="max-width: 160px;"
                src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573564876/Winchester-Logo_fnwgxc-1_rf0lfd.png"
                alt="Winchester Logo"
              />
            </slide>
            <slide>
              <g-image
                style="max-width: 160px;"
                src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573564624/BSA-Logo_qlnb9n_hz9wjy.png"
                alt="BSA Logo"
              />
            </slide>

            <slide>
              <g-image
                style="max-width: 160px;"
                src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573564838/Browning-Logo_ni5udm-1_fcdawe.png"
                alt="Browning Logo"
              />
            </slide>
            <slide>
              <g-image
                style="max-width: 160px;"
                src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573564877/Yildiz-Logo_e8jnus-1_vy7ruh.png"
                alt="Yildiz Logo"
              />
            </slide>
            <slide>
              <g-image
                style="max-width: 160px;"
                src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573564836/Blaser-Logo_mmogtx-1_wxahc4.png"
                alt="Blaser Logo"
              />
            </slide>
            <slide>
              <g-image
                style="max-width: 160px;"
                src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573564611/Armsan-Logo_otk8fz_ngakeu.png"
                alt="Armsan Logo"
              />
            </slide>

            <slide>
              <g-image
                style="max-width: 160px;"
                src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573564867/Mauser-Logo_kveehf-1_bavumc.png"
                alt="Mauser Logo"
              />
            </slide>
            <slide>
              <g-image
                style="max-width: 160px;"
                src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573564609/Anschutz-Logo_zcyrgs_yzfizi.png"
                alt="Anschutz Logo"
              />
            </slide>
            <slide>
              <g-image
                style="max-width: 160px;"
                src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573564632/CZ-Logo_bsj4bh_pdx8dv.png"
                alt="CZ Logo"
              />
            </slide>
            <slide>
              <g-image
                style="max-width: 160px;"
                src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573564647/Henry-Logo_rpvxgj_hslz0k.png"
                alt="Henry Logo"
              />
            </slide>
            <slide>
              <g-image
                style="max-width: 160px;"
                src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573564842/Marlin-logo_r7hcc8_nks8vx.png"
                alt="Marlin Logo"
              />
            </slide>

            <slide>
              <g-image
                style="max-width: 160px;"
                src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573564868/Pard-Logo_rhcxoc-1_bhpnfb.png"
                alt="Pard Optics Logo"
              />
            </slide>
            <slide>
              <g-image
                style="max-width: 160px;"
                src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573564871/Swarovski_xlmqeu-1_opoe7c.png"
                alt="Swarovski Optics Logo"
              />
            </slide>
            <slide>
              <g-image
                style="max-width: 160px;"
                src="https://res.cloudinary.com/shooting-supplies/image/upload/v1573564841/Leupold-Logo_xljtz7-1_x8f75q.png"
                alt="Leupold Optics Logo"
              />
            </slide>
            <slide>
              <g-image
                style="max-width: 160px;"
                src="https://res.cloudinary.com/shooting-supplies/image/upload/v1583757634/schmidt-and-bender-logo_ig0ulm.jpg"
                class="self-center"
              />
            </slide>
          </carousel>
          *</ClientOnly
        >*
      </div>
    </div>
  </Layout>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide
  }
};
</script>
