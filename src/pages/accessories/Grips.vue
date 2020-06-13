<template>
  <Layout>
    <div
      id="filter-menu"
      class="block flex justify-center bg-white p-2 lg:hidden border-b-2 border-black"
    >
      <button @click="toggle" id="filter-menu" class="lg:hidden text-xl">
        Filter
        <!-- <font-awesome :icon="['fas', 'bars']" class="my-4 ml-6 text-ssblue" /> -->
      </button>
    </div>
    <div :class="open ? 'block' : 'hidden'" class="uppercase font-semibold">
      <AccessoriesSidebar />
    </div>

    <div class="flex items-start">
      <div class="hidden lg:block lg:mt-16 lg:w-3/8 h-screen">
        <AccessoriesSidebar class="min-w-full ml-6" />
      </div>

      <div class="flex justify-center flex-wrap mx-4 mt-8 h-auto lg:w-5/6 lg:mt-12">
        <div
          v-for="edge in $page.allWooProducts.edges"
          :key="edge.node.id"
          id="gun-card"
          class="max-w-xs rounded-b-lg shadow hover:shadow-lg hover:border-ssorange mb-8 border-t-4 border-ssblue sm:w-1/3 sm:m-4"
        >
          <g-link :to="`/products/${edge.node.slug}`">
            <g-image :src="edge.node.images[0].src" :alt="edge.node.name" />
            <div class="p-4">
              <h2 class="font-bold uppercase text-xl mt-2 hover:text-ssorange">{{ edge.node.name }}</h2>
              <p class="font-semibold text-lg mt-2">£{{ edge.node.price }}</p>
            </div>
          </g-link>
        </div>

        <div class="flex justify-center mb-8 w-full">
          <Pager
            :linkClass="{ pageNum: true }"
            :info="$page.allWooProducts.pageInfo"
            :showLinks="true"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import AccessoriesSidebar from "~/components/AccessoriesSidebar.vue";
import { Pager } from "gridsome";

export default {
  metaInfo() {
    return {
      title: "Grips"
    };
  },
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  },
  components: {
    AccessoriesSidebar,
    Pager
  }
};
</script>

<page-query>
query products ($page: Int) {
  allWooProducts(perPage: 12, page: $page, filter: { status: { eq: "publish" }, id: {in: [18977, 18976, 18974, 18968, 18970, 18962, 18957]}}, sortBy: "name", order: ASC) @paginate {
    pageInfo {
    totalPages
    currentPage
}
    edges {
      node {
        id
        sku
        name
        slug
        status
        short_description
        description
        price
        stock_status
        categories {
          id
          name
        }
        images {
          src
        }
      }
    }
  }
}
</page-query>

<style>
#gun-card:hover {
  transition: shadow 2s;
}

.pageNum {
  font-size: 1.6em;
  margin-right: 0.5em;
}
.pageNum:active {
  color: #004d91;
}
</style>
