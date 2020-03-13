<template>
  <div
    class="hidden lg:flex pb-8 pt-8 flex bg-ssblue text-white justify-around shadow-top lg:text-xl"
  >
    <!-- About Us Footer Menu -->
    <div id="about-us-footer-menu">
      <h3>About Us</h3>
      <hr class="mb-4 mt-1" />
      <ul>
        <li>
          <g-link to="/blog" class="hover:text-ssorange">Blog</g-link>
        </li>
        <li>
          <g-link to="/blog/about-us" class="hover:text-ssorange"
            >About Us</g-link
          >
        </li>
        <li>
          <g-link to="/blog/contact-us" class="hover:text-ssorange"
            >Contact Us</g-link
          >
        </li>
        <li>
          <g-link to="/blog/privacy-policy" class="hover:text-ssorange"
            >Privacy Policy</g-link
          >
        </li>
      </ul>
    </div>
    <!-- Products Footer Menu -->
    <div id="products-footer-menu">
      <h3>Products</h3>
      <hr class="mb-4 mt-1" />
      <ul>
        <li>
          <g-link to="/guns" class="hover:text-ssorange">Guns</g-link>
        </li>
        <li>
          <g-link to="/optics" class="hover:text-ssorange">Optics</g-link>
        </li>
        <li>
          <g-link to="/accessories" class="hover:text-ssorange"
            >Accessories</g-link
          >
        </li>
      </ul>
    </div>
    <!-- Social Footer Menu -->
    <div id="social-footer-menu">
      <h3>Find Us On</h3>
      <hr class="mb-4 mt-1" />
      <a
        href="https://www.facebook.com/ShootingSuppliesLTD/"
        target="_blank"
        class="hover:text-ssorange mr-4"
        ><font-awesome :icon="['fab', 'facebook-square']" size="lg"
      /></a>

      <a
        href="https://twitter.com/shootingsupplys"
        target="_blank"
        class="hover:text-ssorange mr-4"
        ><font-awesome :icon="['fab', 'twitter']" size="lg"
      /></a>

      <a
        href="https://www.instagram.com/shootingsupplies/"
        target="_blank"
        class="hover:text-ssorange mr-4"
        ><font-awesome :icon="['fab', 'instagram']" size="lg"
      /></a>

      <a
        href="mailto:info@shootingsuppliesltd.co.uk"
        target="_blank"
        class="hover:text-ssorange mr-4"
        ><font-awesome :icon="['fas', 'envelope']" size="lg"
      /></a>
    </div>
    <!-- Contact Us Footer Menu -->
    <div id="contact-us-footer-menu">
      <h3>Contact Us</h3>
      <hr class="mb-4 mt-1" />
      <!-- prettier ignore -->
      <p>38 Sherwood Road, Bromsgrove, B60 3DR</p>
      <p>Tel: 01527 831 261</p>
      <p>
        Email:
        <a href="mailto:info@shootingsuppliesltd.co.uk"
          >info@shootingsuppliesltd.co.uk</a
        >
      </p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438.8617078819925!2d-2.062261884200036!3d52.318511879776565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870eb6643a61ef7%3A0x88a54342436aef3e!2sShooting%20Supplies%20Ltd!5e0!3m2!1sen!2suk!4v1583776759759!5m2!1sen!2suk"
        width="300"
        height="225"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        class="mt-4"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>
