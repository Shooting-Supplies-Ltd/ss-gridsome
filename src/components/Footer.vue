<template>
  <div class="w-full bg-gray-900">
    <div
      class="hidden lg:flex pb-8 pt-8 flex bg-gray-900 text-white justify-around border-t border-black mx-16"
    >
      <!-- About Us Footer Menu -->
      <div id="about-us-footer-menu">
        <h3 class="font-bold text-xl">ABOUT US</h3>
        <hr class="mb-4 mt-1" />
        <ul>
          <li>
            <g-link to="/blog" class="hover:text-ssorange font-semibold text-lg">BLOG</g-link>
          </li>
          <li>
            <g-link to="/blog/about-us" class="hover:text-ssorange font-semibold text-lg">ABOUT US</g-link>
          </li>
          <li>
            <g-link
              to="/blog/contact-us"
              class="hover:text-ssorange font-semibold text-lg"
            >CONTACT US</g-link>
          </li>
          <li>
            <g-link
              to="/blog/privacy-policy"
              class="hover:text-ssorange font-semibold text-lg"
            >PRIVACY POLICY</g-link>
          </li>
        </ul>
      </div>
      <!-- Products Footer Menu -->
      <div id="products-footer-menu">
        <h3 class="font-bold text-xl">PRODUCTS</h3>
        <hr class="mb-4 mt-1" />
        <ul>
          <li>
            <g-link to="/guns" class="hover:text-ssorange font-semibold text-lg">GUNS</g-link>
          </li>
          <li>
            <g-link to="/optics" class="hover:text-ssorange font-semibold text-lg">OPTICS</g-link>
          </li>
          <li>
            <g-link to="/accessories" class="hover:text-ssorange font-semibold text-lg">ACCESSORIES</g-link>
          </li>
        </ul>
      </div>
      <!-- Social Footer Menu -->
      <div id="social-footer-menu">
        <h3 class="font-bold text-xl">FIND US ON</h3>
        <hr class="mb-4 mt-1" />
        <a
          href="https://www.facebook.com/ShootingSuppliesLTD/"
          target="_blank"
          class="hover:text-ssorange mr-4"
        >
          <font-awesome :icon="['fab', 'facebook-square']" size="2x" />
        </a>

        <a
          href="https://twitter.com/shootingsupplys"
          target="_blank"
          class="hover:text-ssorange mr-4"
        >
          <font-awesome :icon="['fab', 'twitter']" size="2x" />
        </a>

        <a
          href="https://www.instagram.com/shootingsupplies/"
          target="_blank"
          class="hover:text-ssorange mr-4"
        >
          <font-awesome :icon="['fab', 'instagram']" size="2x" />
        </a>

        <a
          href="mailto:info@shootingsuppliesltd.co.uk"
          target="_blank"
          class="hover:text-ssorange mr-4"
        >
          <font-awesome :icon="['fas', 'envelope']" size="2x" />
        </a>
      </div>

      <!-- Contact Us Footer Menu -->
      <div id="contact-us-footer-menu">
        <h3 class="font-bold text-xl">CONTACT US</h3>
        <hr class="mb-4 mt-1" />
        <!-- prettier ignore -->
        <!-- <p class="font-semibold text-lg">38 SHERWOOD ROAD, BROMSGROVE, B60 3DR</p> -->
        <p class="font-semibold text-lg">TEL: 01527 831 261</p>
        <p class="font-semibold text-lg hover:text-ssorange">
          EMAIL:
          <a href="mailto:info@shootingsuppliesltd.co.uk">INFO@SHOOTINGSUPPLIESLTD.CO.UK</a>
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438.8617078819925!2d-2.062261884200036!3d52.318511879776565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870eb6643a61ef7%3A0x88a54342436aef3e!2sShooting%20Supplies%20Ltd!5e0!3m2!1sen!2suk!4v1583776759759!5m2!1sen!2suk"
          width="300"
          height="225"
          frameborder="0"
          style="border:0;"
          allowfullscreen
          class="mt-4 rounded-md"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>
