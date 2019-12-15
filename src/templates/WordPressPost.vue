<template>
  <Layout>
    <div class="flex justify-center">
      <div class="w-3/4 rounded-b-lg shadow-lg border-t-4 border-ssblue">
        <h1 class="flex justify-center text-4xl font-bold uppercase mt-8">{{ $page.wordPressPost.title }}</h1>
        <g-image
          class="mx-auto mb-8 mt-8 max-w-lg"
          :src="$page.wordPressPost.featuredMedia.sourceUrl"
          :alt="$page.wordPressPost.featuredMedia.altText"
        />
        <p class="mx-8" v-html="$page.wordPressPost.content" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query WordPressPost ($id: ID!) {
  wordPressPost(id: $id) {
    title
    content
    featuredMedia {
      sourceUrl
      altText
      mediaDetails {
        width
      }
    }
    categories {
      id
      title
      path
    }
    tags {
      id
      title
      path
    }
  }
}
</page-query>

<script>
export default {
  data() {
    return {
      content: `{{$page.wordPressPost.content}}`,
      filteredContent: ``
    }
  },
  method: { 
    stripHTML: () => {
    div = document.createElement("div");
    div.innerHTML = this.content;
    div.textContent = filteredContent;
    return filteredContent;
    }
  }
}
</script>