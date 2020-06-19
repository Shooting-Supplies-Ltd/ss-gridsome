<template>
  <Layout>
    <div class="flex lg:mt-4 lg:mb-4 mt-8 sm:mt-16 sm:mb-8">
      <div class="w-1/4"></div>
      <div
        class="flex flex-wrap rounded-b-lg shadow-lg border-t-4 border-ssblue lg:mt-8 lg:mb-12 lg:w-2/4"
      >
        <div class="w-full lg:flex">
          <div class="w-5/8 mt-0 lg:mt-4 ml-4 flex justify-center items-center">
            <g-image :src="$page.wooProducts.images[0].src" :alt="$page.wooProducts.name" />
          </div>

          <div class="w-3/8 flex ml-4 lg:ml-0 flex-wrap">
            <div>
              <h1
                class="mr-6 lg:mt-8 text-4xl lg:text-5xl text-gray-900 font-extrabold tracking-tighter leading-snug uppercase"
              >{{ $page.wooProducts.name }}</h1>
              <div
                v-html="$page.wooProducts.short_description"
                class="mt-4 mr-6 text-xl text-gray-900 tracking-tight leading-snug"
              ></div>
              <div
                class="mt-4 text-2xl lg:text-2xl font-bold text-gray-900 tracking-tighter leading-snug"
              >£{{ $page.wooProducts.price }}</div>
            </div>
          </div>
        </div>

        <button
          @click="toggle"
          class="w-full ml-6 mr-6 mt-8 lg:mt-0 h-12 uppercase bg-ssblue text-white hover:text-ssorange text-lg font-bold"
          style="iframe: {width: 600px;}"
        >Full Description</button>

        <div class="w-full">
          <div
            id="description"
            v-html="$page.wooProducts.description"
            :class="descriptionFull ? 'block' : 'hidden'"
            class="ml-8 mr-8 mt-8 text-lg text-gray-900 tracking-tight leading-snug"
          ></div>
        </div>
        <div class="ml-6 mr-6 mb-6 mt-16 lg:mt-8">
          <h3
            class="text-2xl font-extrabold text-gray-900 uppercase tracking-tight"
          >Please Contact Us to Purchase this item or for more information</h3>
          <div class="mt-6 flex">
            <a href="tel:01527831261">
              <button
                class="flex items-center justify-center h-12 w-24 mr-4 bg-ssblue hover:bg-blue-800 text-lg text-white font-bold uppercase rounded"
              >
                <span class="hover:text-ssorange">Call</span>
              </button>
            </a>
            <a
              v-bind:href="
                    'mailto:info@shootingsuppliesltd.co.uk?subject=New Website Enquiry - ' +
                      $page.wooProducts.name +
                      ' - ' +
                      $page.wooProducts.sku +
                      ' - £' +
                      $page.wooProducts.price +
                      ''
                  "
            >
              <button
                class="flex items-center justify-center h-12 w-24 bg-ssblue hover:bg-blue-800 text-lg text-white font-bold uppercase rounded"
              >
                <span class="hover:text-ssorange">Email</span>
              </button>
            </a>
          </div>
          <div class="mt-16 lg:hidden">
            <h3
              class="mb-2 text-2xl font-extrabold text-gray-900 uppercase tracking-tight"
            >Share this item</h3>
            <ProductsSocialSidebar class="flex space-x-6 lg:hidden" />
          </div>
        </div>
      </div>
      <div class="w-1/4">
        <ProductsSocialSidebar class="hidden lg:flex lg:flex-col lg:mt-8 lg:ml-4" />
      </div>
    </div>
  </Layout>
</template>



<page-query>
query ($id: ID!) {
  wooProducts(id: $id) {
    id
    sku
    name
    price
    description
    short_description
    images {
      src
    }
  }
}
</page-query>

<script>
import ProductsSocialSidebar from "../components/ProductsSocialSidebar";

export default {
  components: {
    ProductsSocialSidebar
  },
  data() {
    return {
      descriptionFull: false
    };
  },
  methods: {
    toggle() {
      this.descriptionFull = !this.descriptionFull;
    }
  },
  metaInfo() {
    return {
      title: this.$page.wooProducts.name,
      meta: [
        {
          name: "description",
          content: this.$page.wooProducts.short_description
        },
        {
          name: "image",
          content: this.$page.wooProducts.images[0].src
        }
      ]
    };
  }
};
</script>

<style scoped>
h1 {
  line-height: 50px;
}

#description >>> a {
  color: #004d91;
}

#description >>> h1 {
  font-size: 2.8em;
  font-weight: bolder;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #1a202c;
  letter-spacing: -2px;
  line-height: 1em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

#description >>> h2 {
  color: #1a202c;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  font-size: 2.2em;
  font-weight: 700;
  letter-spacing: -0.8px;
  text-transform: uppercase;
}

#description >>> h3 {
  color: #1a202c;
  font-weight: 700;
  font-size: 2em;
  text-transform: uppercase;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

#description >>> p {
  color: #1a202c;
  font-size: 1.2em;
  letter-spacing: -0.6px;
  margin-bottom: 0.5em;
}

#description >>> img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1em;
  margin-bottom: 1em;
  padding: 0.5em;
  max-width: 70%;
  border: 1px solid #1a202c;
  border-radius: 10px;
}

#description >>> ul,
ol {
  margin-bottom: 1em;
  margin-left: 1em;
}

#description >>> li {
  color: #1a202c;
  font-size: 1.2em;
  list-style: disc;
  margin-left: 0.5em;
  margin-bottom: 0.2em;
}

#description >>> hr {
  margin-top: 2em;
  margin-bottom: 2em;
}

#description >>> player {
  margin-top: 5em;
}

#description >>> table {
  display: block;
  width: 100%;
}

#description >>> tr {
  height: 2em;
}

#description >>> tr:nth-child(even) {
  background-color: rgba(237, 242, 247);
}

#description >>> th {
  background-color: #004d91;
  color: white;
}

#description >>> th,
td {
  padding: 15px;
  text-align: left;
}

#description >>> iframe {
  display: flex;
  justify-content: center;
  width: 800px;
}
</style>