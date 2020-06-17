<template>
  <div>
    <facebook
      class="lg: mt-1 mr-4 lg:mr-0 cursor-pointer"
      :url="url"
      scale="3"
    ></facebook>
    <twitter
      class="mr-4 lg:mr-0 cursor-pointer"
      :url="url"
      title="I found this at shootingsupplies.co.uk"
      scale="3"
    ></twitter>
    <whats-app
      class="mr-4 lg:mr-0 cursor-pointer"
      :url="url"
      title="Hi, I found this and thought you might like it"
      scale="3"
    ></whats-app>
    <pinterest
      class="mr-4 lg:mr-0 cursor-pointer"
      :url="url"
      scale="3"
    ></pinterest>
    <email
      class="cursor-pointer"
      :url="url"
      subject="I found this at Shooting Supplies"
      scale="3"
    ></email>
  </div>
</template>

<script>
import {
  Facebook,
  Twitter,
  WhatsApp,
  Pinterest,
  Email,
} from "vue-socialmedia-share";

export default {
  name: "SocialSidebar",
  components: {
    Facebook,
    Twitter,
    WhatsApp,
    Pinterest,
    Email,
  },
  data() {
    return {
      url: window.location.href,
    };
  },
};
</script>
