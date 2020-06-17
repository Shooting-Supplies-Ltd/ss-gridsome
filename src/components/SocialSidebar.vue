<template>
  <div class="cursor-pointer">
    <ShareNetwork
      v-for="network in networks"
      :network="network.network"
      :key="network.key"
      :style="{ color: network.color }"
      :url="url"
      :title="$page.post.title"
      :media="$page.post.thumbnail"
      hashtags="shooting,targetsports,hunting,shootingsupplies"
      class="flex flex-col"
    >
      <font-awesome :icon="network.icon" size="3x" />
      <span class="btnspan">{{ network.name }}</span>
    </ShareNetwork>
  </div>
</template>

<script>
export default {
  name: "SocialSidebar",
  components: {},
  data() {
    return {
      networks: [
        {
          network: "facebook",
          icon: ["fab", "facebook-square"],
          color: "#1877f2",
        },
        {
          network: "twitter",
          icon: ["fab", "twitter-square"],
          color: "#1877f2",
        },
        {
          network: "pinterest",
          icon: ["fab", "pinterest-square"],
          color: "#E60023",
        },
        {
          network: "whatsapp",
          icon: ["fab", "whatsapp-square"],
          color: "#00E676",
        },
        {
          network: "email",
          icon: ["fas", "envelope-square"],
          color: "#004D91",
        },
      ],
      url: "",
    };
  },
  methods: {
    setUrl() {
      return (this.url = window.location.href);
    },
  },
  mounted() {
    if (process.isClient) {
      this.setUrl();
    }
  },
};
</script>
