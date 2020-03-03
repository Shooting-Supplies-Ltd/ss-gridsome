<template>
  <Layout>
    <div class="flex items-start">
      <div class="hidden lg:block lg:mt-12 lg:w-3/8 h-screen">
        <Sidebar class="min-w-full ml-6" />
      </div>

      <div
        class="flex justify-center flex-wrap mx-4 mt-4 h-auto lg:w-5/6 lg:mt-8"
      >
        <div
          v-for="edge in $page.allGuns.edges"
          :key="edge.node.id"
          id="gun-card"
          class="max-w-xs rounded-b-lg shadow hover:shadow-lg hover:border-ssorange mb-8 border-t-4 border-ssblue sm:w-1/3 sm:m-4"
        >
          <g-link :to="`guns/${edge.node.slug}`"
            ><g-image
              :src="edge.node.images[0].FullPath"
              :alt="edge.node.title"
            />
            <div class="p-4">
              <h2 class="font-bold uppercase text-xl mt-2">
                {{ edge.node.title }}
              </h2>
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
          <Pager
            :linkClass="{ pageNum: true }"
            :info="$page.allGuns.pageInfo"
            :showLinks="true"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Sidebar from "~/components/Sidebar.vue";
import { Pager } from "gridsome";

export default {
  components: {
    Sidebar,
    Pager
  }
};
</script>

<page-query>
query ($page: Int) {
  allGuns(perPage: 12, page: $page, sortBy: "title", order: ASC, filter: {type: {in: ["Rifle (Black Powder)"]}}) @paginate {
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
