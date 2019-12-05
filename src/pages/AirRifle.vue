<template>
  <Layout>
      <div class="flex">
        <div class="w-1/3">
          <Sidebar class="min-w-full mt-12 ml-6" />
        </div>
        <div class="w-2/3 flex flex-wrap justify-around w-full ml-12 mt-12">
          <div v-for="edge in $page.allGuns.edges" :key="edge.node.id" class="max-w-sm rounded-b-lg shadow-lg rounded-b-lg w-1/2 mb-8 border-t-4 border-ssblue">
            <g-link :to="`gun/${edge.node.title}/${edge.node.id}`"><g-image :src="edge.node.images[0].FullPath" style="width: 800px; object-contain: contain;" :alt="edge.node.title" />
            <div class="p-4">
              <h2 class="font-bold uppercase text-xl mt-2">{{edge.node.title}}</h2>
              <h3 class="font-semibold">Variant: {{edge.node.variant}}</h3>
              <table>
                <tr>
                <td>Condition: {{edge.node.condition}}</td>
                </tr>
              </table>
              <p class="font-semibold text-lg mt-2">£{{edge.node.price}}</p>
            </div></g-link>            
          </div>
        </div>
      </div>
      <div class="flex justify-center mb-8">
        <Pager :linkClass="{ pageNum: true }" :info="$page.allGuns.pageInfo" />
      </div>
  </Layout>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import { Pager } from 'gridsome'

export default {
  components: {
    Sidebar,
    Pager,
  }
}
</script>


<page-query>
query ($page: Int) {
  allGuns(perPage: 12, page: $page, filter: {type: {in: ["Air Rifle"]}}) @paginate {
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
        images {
          FullPath
        }
      }
    }
  }
}
</page-query>

<style>
  .pageNum {
    font-size: 1.6em;
    margin-right: 0.5em;
  }
</style>