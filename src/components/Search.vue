<template>
  <Search>
    <input
      id="search"
      v-model="searchTerm"
      class="input w-full py-2 px-4 border-2 border-b-2"
      type="text"
      placeholder="Search Guns">
    <g-link
      v-for="result in searchResults"
      :key="result.id"
      :to="`/guns/${result.slug}`"
      class="search-item px-4 uppercase border-2 py-2 rounded">
      <div v-if="result.variant != null">{{ result.condition + ' ' + result.title + ' ' + result.variant }}</div>
      <div v-else>{{ result.condition + ' ' + result.title }}</div>
    </g-link>
  </Search>
</template>

<script>
export default {
  data: () => ({
    searchTerm: ''
  }),
  computed: {
    searchResults () {
      let filteredResults = []
      const searchTerm = this.searchTerm
      if (searchTerm.length < 3) return []
      return this.$search.search({ query: searchTerm, limit: 50 })
    },
  }
}
</script>

<style>
.input {
  border-bottom: 2px black;
  min-width: 100%;
}

.search-item {
  display: flex;
  margin-top: 0.6em;
  z-index: 999;
}
</style>
