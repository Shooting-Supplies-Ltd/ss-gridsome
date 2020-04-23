<template>
  <Layout>
    <div class="flex items-start">
      <!-- <div class="hidden lg:block lg:mt-16 lg:w-3/8 h-screen">
        <Sidebar class="min-w-full ml-6" />
      </div> -->

      <div class="flex justify-around flex-wrap mx-4 mt-4 h-auto lg:mt-12">
        <div
          v-for="edge in $page.allPost.edges"
          :key="edge.node.id"
          id="gun-card"
          class="max-w-xs rounded-b-lg shadow hover:shadow-lg hover:border-ssorange mb-8 border-t-4 border-ssblue sm:w-1/3 sm:m-4"
        >
          <g-link :to="`blog/${edge.node.slug}`">
            <g-image :src="edge.node.thumbnail" :alt="edge.node.title" />
            <div class="p-4">
              <h2 class="font-bold uppercase text-xl mt-2">
                {{ edge.node.title }}
              </h2>
              <h5 class="italic">
                {{ edge.node.author }} - {{ edge.node.date }}
              </h5>
              <p style="margin-top: 10px">{{ edge.node.excerpt }}</p>
            </div>
          </g-link>
        </div>

        <div class="flex justify-center mb-8 w-full">
          <Pager
            :linkClass="{ pageNum: true }"
            :info="$page.allPost.pageInfo"
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
  metaInfo() {
    return {
      title: "Blog"
    };
  },
  components: {
    Sidebar,
    Pager
  }
};
</script>

<page-query>
query ($page: Int) {
  allPost(sortBy: "date", order: DESC, perPage: 12, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        date(format: "DD-MM-YYYY")
        slug
        title
        excerpt
        content
        thumbnail
        author
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
