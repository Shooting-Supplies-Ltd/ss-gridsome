<template>
  <div class="flex items-center justify-center">
    <div class="w-full">
      <input
        id="search"
        v-model="searchTerm"
        class="w-3/4 flex justify-center rounded-lg mt-8 mb-4 p-2 shadow-inner focus:rounded-lg focus:shadow-outline text-black mx-auto lg:mb-8 lg:w-1/2"
        type="search"
        placeholder="Search Guns"
      />

      <div id="results" class="w-full flex flex-wrap justify-center">
        <div
          v-for="result in searchResults"
          :key="result.id"
          class="flex justify-center rounded-lg m-4 p-2 shadow focus:rounded-lg focus:shadow-outline focus:border-ssblue text-white border-2 font-semibold sm:w-1/3 lg:h-sm"
        >
          <g-link :to="`/guns/${result.slug}`">
            <figure :v-if="result.images[0].FullPath" @click="clearSearch">
              <g-image :src="`${JSON.parse(result.images)[0].FullPath}`" class="rounded"></g-image>
              <h2
                class="hover:text-ssorange hover:border-ssorange mt-4 text-md"
                v-if="result.variant != null"
              >
                {{
                result.condition + " " + result.title + " " + result.variant
                }}
              </h2>
              <h2
                class="hover:text-ssorange hover:border-ssorange"
                v-else
              >{{ result.condition + " " + result.title }}</h2>
              <p>£{{ result.price }}</p>
            </figure>
          </g-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data: () => ({
    searchTerm: ""
  }),
  computed: {
    searchResults() {
      const searchTerm = this.searchTerm;
      if (searchTerm.length < 3) return [];
      return this.$search.search({ query: searchTerm, limit: 100 });
    }
  },
  methods: {
    clearSearch: function(event) {
      this.searchTerm = "";
    }
  }
};
</script>
