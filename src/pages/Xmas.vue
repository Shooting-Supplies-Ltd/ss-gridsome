<template>
  <Layout>
    <!-- Add a filter menu for mobile view -->
    <div class="mobile-filter-menu">
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
        <OpticsSidebar />
      </div>
    </div>

    <!-- Add the main container -->
    <div id="main" class="flex items-start">
      <!-- Add the Sidebar component
      <div class="hidden lg:block lg:mt-40 lg:w-3/8 h-screen">
        <OpticsSidebar class="min-w-full ml-6" />
      </div> -->

      <!-- Optics Cards Container -->
      <div
        class="ml-48 flex justify-center flex-wrap mx-4 mt-8 h-auto lg:w-5/6 lg:mt-12"
      >
        <!-- Iterate through optics and create optic cards -->
        <div
          v-for="edge in $page.allWooProducts.edges"
          :key="edge.node.id"
          id="gun-card"
          class="max-w-xs mb-8 sm:w-1/2 sm:m-4 bg-white rounded-lg shadow hover:shadow-lg border-2 border-gray-300 hover:border-2 hover:border-ssorange"
        >
          <!-- Create link to product page -->
          <g-link :to="`/products/${edge.node.slug}`">
            <!-- Add image to optic card -->
            <div class="gun-card-image h-48 w-full">
              <g-image
                :src="edge.node.images[0].src"
                :alt="edge.node.name"
                class="h-48 w-full object-scale-down object-center"
              />
            </div>
            <div class="p-4">
              <h2 class="font-bold uppercase text-xl mt-2 hover:text-ssorange">
                {{ edge.node.name }}
              </h2>
              <p class="font-semibold text-lg mt-2">£{{ edge.node.price }}</p>
            </div>
          </g-link>
        </div>

        <div
          class="my-8 p-2 flex justify-center items-center bg-white transform skew-y-3 rounded-lg"
        >
          <Pager
            :linkClass="{ pageNum: true }"
            :info="$page.allWooProducts.pageInfo"
            :showLinks="true"
            class="pageNum"
          />
        </div>
      </div>
    </div>
    <div class="page-description w-full lg:p-20 flex bg-gray-100">
      <div class="mx-24">
        <h1 class="font-bold text-2xl">XMAS GIFTS</h1>
        <p class="mt-4">
          We stock a great range of Xmas gifts for you and your loved ones, be
          sure to visit us in store to see our full range. We also have gift
          cards available for those more tricky to buy for.
        </p>
        <p class="mt-2">
          Any enquiries? Please call us on 01527831261 and we will be more than
          happy to help.
        </p>
      </div>
    </div>
  </Layout>
</template>

<script>
import OpticsSidebar from "~/components/OpticsSidebar.vue";
import { Pager } from "gridsome";

export default {
  metaInfo() {
    return {
      title: "Optics",
    };
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
  components: {
    OpticsSidebar,
    Pager,
  },
};
</script>

<page-query>
query products ($page: Int) {
  allWooProducts(perPage: 12, page: $page, filter: { status: { eq: "publish" }, categories: {id: {eq: 4847}}}, sortBy: "name", order: ASC) @paginate {
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
#main {
  background-image: url("~@/assets/images/christmas-background.gif");
}

#gun-card:hover {
  transition: shadow 2s;
}

.pageNum {
  font-size: 1.3em;
  margin-top: 1em;
  margin-right: 0.5em;
}

a.active--exact.active.pageNum {
  border-radius: 15%;
  padding: 3px;
  background: #004d91;
  color: white;
}
</style>
