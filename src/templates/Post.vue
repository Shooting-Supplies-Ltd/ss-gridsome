<template>
  <Layout>
    <div class="flex justify-center mt-4 mb-4">
      <div class="w-1/4"></div>
      <div
        class="flex lg:mb-12 lg:mt-8 lg:w-2/4 p-4 pb-8 justify-center flex-wrap rounded-b-lg shadow-lg border-t-4 border-ssblue"
      >
        <div id="blog" class="flex justify-center h-auto sm:h-24 sm:h-auto sm:w-4/5">
          <div v-html="$page.post.content" />
        </div>
        <div class="mt-8 lg:hidden">
          <h3 class="mb-2 text-xl font-bold uppercase">Share this Post</h3>
          <SocialSidebar class="flex space-x-6" />
        </div>
      </div>
      <div class="w-1/4">
        <SocialSidebar class="hidden lg:flex lg:flex-col lg:mt-8 lg:ml-4" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
    excerpt
    thumbnail
  }
}
</page-query>

<script>
import SocialSidebar from "../components/SocialSidebar";

export default {
  components: {
    SocialSidebar
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: "description",
          content: this.$page.post.excerpt
        },
        {
          property: "og:title",
          content: this.$page.post.title
        },
        {
          name: "twitter:card",
          content: this.$page.post.thumbnail ? "summary_large_image" : "summary"
        },
        {
          name: "twitter:creator",
          content: "@darryljmorley"
        },
        {
          property: "og:description",
          content: this.$page.post.excerpt
        },
        {
          property: "og:image",
          content: this.$page.post.thumbnail
        },
        {
          property: "og:image:width",
          content: "180"
        },
        {
          property: "og:image:height",
          content: "110"
        }
      ]
    };
  }
};
</script>

<style>
#blog a {
  color: #004d91;
}

#blog h1 {
  font-size: 2.8em;
  font-weight: bolder;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #1a202c;
  letter-spacing: -2px;
  line-height: 1em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

#blog h2 {
  color: #1a202c;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  font-size: 2.2em;
  font-weight: 700;
  letter-spacing: -0.8px;
  text-transform: uppercase;
}

#blog h3 {
  color: #1a202c;
  font-weight: 700;
  font-size: 2em;
  text-transform: uppercase;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

#blog p {
  color: #1a202c;
  font-size: 1.2em;
  letter-spacing: -0.6px;
  margin-bottom: 0.5em;
}

#blog img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1em;
  margin-bottom: 1em;
  padding: 0.5em;
  max-width: 70%;
  border: 1px solid #1a202c;
  border-radius: 10px;
}

#blog ul,
ol {
  margin-bottom: 1em;
  margin-left: 1em;
}

#blog li {
  color: #1a202c;
  font-size: 1.2em;
  list-style: disc;
  margin-left: 0.5em;
  margin-bottom: 0.2em;
}

#blog hr {
  margin-top: 2em;
  margin-bottom: 2em;
}

#blog player {
  margin-top: 5em;
}

#blog table {
  display: block;
  width: 100%;
}

#blog tr {
  height: 2em;
}

#blog tr:nth-child(even) {
  background-color: rgba(237, 242, 247);
}

#blog th {
  background-color: #004d91;
  color: white;
}

#blog th,
td {
  padding: 15px;
  text-align: left;
}
</style>
