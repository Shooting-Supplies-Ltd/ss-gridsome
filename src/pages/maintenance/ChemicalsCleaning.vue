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
        <MaintenanceSidebar />
      </div>
    </div>

    <!-- Add the main container -->
    <div class="flex items-start">
      <!-- Add the Sidebar component -->
      <div class="hidden lg:block lg:mt-40 lg:w-3/8 h-screen">
        <MaintenanceSidebar class="min-w-full ml-6" />
      </div>

      <!-- Optics Cards Container -->
      <div class="flex justify-center flex-wrap mx-4 mt-8 h-auto lg:w-5/6 lg:mt-12">
        <!-- Iterate through optics and create optic cards -->
        <div
          v-for="edge in $page.allWooProducts.edges"
          :key="edge.node.id"
          id="gun-card"
          class="max-w-xs mb-8 sm:w-1/2 sm:m-4 rounded-lg shadow hover:shadow-lg border-2 border-gray-300 hover:border-2 hover:border-ssorange"
        >
          <!-- Create link to product page -->
          <g-link :to="`/products/${edge.node.slug}`">
            <!-- Add image to optic card -->
            <div class="gun-card-image h-48 w-full">
              <g-image :src="edge.node.images[0].src" :alt="edge.node.name" class="h-48 w-full object-scale-down object-center" />
            </div>
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
    <div class="page-description w-full mt-8 lg:p-20 bg-gray-100">
      <div class="mx-24 my-8">
        <h1 class="font-bold text-2xl">Chemicals & Cleaning</h1>
        <p class="mt-4">If your looking for cleaning chemicals, we have it all. Our extensive range of popular cleaning products, Hoppes, Bisley, Tetra, Napier, KG, Legia and Birchwood Casey enable you to keep your gun/equipment in tip top condition.</p>
        <p class="mt-2">From bore guides, tools, blueing, cleaning chemicals, rods, cloths and patches to jags, mops, phosphor bronze brushes, oils, greases, pull-throughs and rust inhibitors. Alternatively, our range of cleaning kits offer everything you need in one box.</p>
        <p class="mt-2">A clean, correctly lubricated gun will last longer and shoot better – our advice is free, just ask!</p>
        <p class="mt-2">Call our team on 01527831261 to discuss your requirements, if we don't have it in stock we can usually source it for you.</p>
      </div>
    </div>
    </div>
  </Layout>
</template>

<script>
import MaintenanceSidebar from "~/components/MaintenanceSidebar.vue";
import { Pager } from "gridsome";

export default {
  metaInfo() {
    return {
      title: "Chemicals & Cleaning",
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
    MaintenanceSidebar,
    Pager,
  },
};
</script>

<page-query>
query products ($page: Int) {
  allWooProducts(perPage: 12, page: $page, filter: { status: { eq: "publish" }, categories: {id: {eq: 4621}}}, sortBy: "name", order: ASC) @paginate {
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
