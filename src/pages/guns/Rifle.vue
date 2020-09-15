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
        <Sidebar />
      </div>
    </div>

    <!-- Add the main container -->
    <div class="flex items-start">
      <!-- Add the Sidebar component -->
      <div class="hidden lg:block lg:mt-40 lg:w-3/8 h-screen">
        <Sidebar class="min-w-full ml-6" />
      </div>

      <!-- Gun Cards Container -->
      <div class="flex justify-center flex-wrap mx-4 mt-8 h-auto lg:w-5/6 lg:mt-12">
        <!-- Iterate through guns and create gun cards -->
        <div
          v-for="edge in $page.allGuns.edges"
          :key="edge.node.id"
          id="gun-card"
          class="max-w-xs mb-8 sm:w-1/2 sm:m-4 rounded-lg shadow hover:shadow-lg border-2 border-gray-300 hover:border-2 hover:border-ssorange"
        >
          <!-- Create link to product page -->
          <g-link :to="`guns/${edge.node.slug}`">
            <!-- Add image to gun card -->
            <div class="gun-card-image h-48 w-full">
              <g-image
                :src="edge.node.images[0].FullPath"
                :alt="edge.node.title"
                class="h-48 w-full object-cover object-center"
              />
            </div>
            <div class="p-4">
              <h2 class="font-bold uppercase text-xl mt-2 hover:text-ssorange">{{ edge.node.title }}</h2>
              <h3 class="font-semibold">Variant: {{ edge.node.variant }}</h3>
              <table>
                <tr>
                  <td>Condition: {{ edge.node.condition }}</td>
                </tr>
                <tr>
                  <td>Calibre: {{ edge.node.calibre }}</td>
                </tr>
              </table>

              <p class="font-semibold text-lg mt-2">£{{ edge.node.price }}</p>
            </div>
          </g-link>
        </div>

        <div class="flex justify-center mb-8 w-full">
          <Pager :linkClass="{ pageNum: true }" :info="$page.allGuns.pageInfo" :showLinks="true" />
        </div>
      </div>
    </div>
    <div class="page-description w-full mt-8 p-20 bg-gray-100">
      <div class="mx-24 my-8">
        <h1 class="font-bold text-2xl">RIFLES</h1>
        <p class="mt-4">We carry a comprehensive range of both new & used Rifles from all of the major manufacturers.</p>
        <p class="mt-2">Please call us on 01527831261 to discuss your current requirements, if we don't have it in stock we can usually source it for you.</p>
      </div>
    </div>
  </Layout>
</template>

<script>
import Sidebar from "~/components/Sidebar.vue";
import { Pager } from "gridsome";

export default {
  metaInfo() {
    return {
      title: "Rifles"
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
    Sidebar,
    Pager
  }
};
</script>

<page-query>
query ($page: Int) {
  allGuns(perPage: 12, page: $page, sortBy: "title", order: ASC, filter: {type: {in: ["Rifle"]}}) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        type
        mechanism
        calibre
        variant
        barrelLength
        condition
        price
        licence
        slug
        images {
          FullPath
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
