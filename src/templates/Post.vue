<template>
  <Layout>
    <div class="flex justify-center mt-4 mb-4">
      <div class="w-1/4"></div>
      <div
        class="flex justify-center flex-wrap rounded-b-lg shadow-lg border-t-4 border-ssblue lg:mb-16 lg:mt-16 lg:w-2/4 p-4"
      >
        <div id="blog" class="flex justify-center h-auto sm:h-24 sm:h-auto sm:w-4/5">
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
#blog h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  text-transform: uppercase;
}

#blog h2 {
  margin-top: 1em;
  font-size: 1.4em;
  font-weight: 700;
}

#blog h3 {
  font-weight: 700;
  margin-top: 1em;
}

#blog p {
  margin-bottom: 0.5em;
}

#blog img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
  margin-bottom: 2em;
  max-width: 60%;
  border: 2px solid #2d3748;
  border-radius: 25px;
}

#blog li {
  margin-left: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
</style>
