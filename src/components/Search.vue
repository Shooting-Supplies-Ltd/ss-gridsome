<template>
  <Search>
    <input
      id="search"
      v-model="searchTerm"
      class="input"
      type="text"
      placeholder="Search">
    <g-link
      v-for="result in searchResults"
      :key="result.id"
      :to="`/gun/${result.title}/${result.id}`"
      class="search-item">
      <div v-if="result.variant != null">{{ result.title + ' ' + '-' + ' ' + result.variant }}</div>
      <div v-else>{{ result.title }}</div>
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
      const searchTerm = this.searchTerm
      if (searchTerm.length < 3) return []
      return this.$search.search({ query: searchTerm, limit: 50 })
    }
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
}
</style>
