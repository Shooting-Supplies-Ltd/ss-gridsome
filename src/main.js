// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
  faPinterestSquare,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faEnvelopeSquare,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import SocialSharing from "vue-social-sharing";

config.autoAddCss = false;
library.add(
  faTwitterSquare,
  faFacebookSquare,
  faInstagram,
  faPinterestSquare,
  faWhatsappSquare
);
library.add(faPhoneAlt, faEnvelopeSquare, faBars);

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome", FontAwesomeIcon);
  Vue.use(SocialSharing);
}
