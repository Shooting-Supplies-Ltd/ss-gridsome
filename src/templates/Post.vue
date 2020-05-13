<template>
  <Layout>
    <div class="flex mt-4 mb-4">
      <div class="w-1/4"></div>
      <div
        class="flex flex-wrap rounded-b-lg shadow-lg border-t-4 border-ssblue lg:mt-16 lg:w-2/4 p-4"
      >
        <div class="flex justify-center h-auto sm:h-24 sm:h-auto">
          <div v-html="$page.post.content" />
        </div>
      </div>
      <div class="w-1/4"></div>
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
export default {
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
        }
      ]
    };
  }
};
</script>

<style>
h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
}

h2 {
  margin-top: 1em;
  font-size: 1.4em;
  font-weight: 700;
}

h3 {
  font-weight: 700;
  margin-top: 1em;
}

p {
  margin-bottom: 0.5em;
}

img {
  margin-top: 1em;
  padding: 1em;
}

li {
  margin-left: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
</style>
