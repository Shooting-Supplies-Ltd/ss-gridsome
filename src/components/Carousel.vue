<template>
  <ClientOnly>
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
  </ClientOnly>
</template>

<script>
import VueCarousel from "vue-carousel/src/index";

export default {
  name: "Index",
  components: {
    Carousel: () =>
      import("vue-carousel/src/index")
        .then(m => m.Carousel)
        .catch(),
    Slide: () =>
      import("vue-carousel/src/index")
        .then(m => m.Slide)
        .catch()
  }
};
</script>
