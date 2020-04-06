<template>
  <Layout>
    <div class="flex mt-4 mb-4 sm:mt-16 sm:mb-8">
      <div class="w-1/4"></div>
      <div
        class="flex flex-wrap rounded-b-lg shadow-lg border-t-4 border-ssblue lg:mt-8 lg:w-2/4"
      >
        <div class="px-6 block w-full">
          <g-image
            :src="$page.wooProducts.images[0].src"
            :alt="$page.wooProducts.name"
          />
        </div>

        <div class="container flex flex-wrap mb-6 w-full px-6 py-6">
          <div>
            <h1 class="font-bold text-2xl">{{ $page.wooProducts.name }}</h1>
            <div class="mt-2 font-bold text-lg">
              £{{ $page.wooProducts.price }}
            </div>
          </div>
          <div v-html="$page.wooProducts.description" class="mt-2"></div>

          <div class="mt-4 w-full">
            <div>
              <p class="mt-4 font-semibold text-lg">
                Contact Us for Further Information:
              </p>
              <div class="mt-4 flex">
                <a href="tel:01527831261"
                  ><button
                    class="h-10 py-2 px-4 mr-4 bg-ssblue hover:bg-blue-700 text-white font-bold rounded flex"
                  >
                    Call
                  </button></a
                >
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
                  ><button
                    class="h-10 py-2 px-4 bg-ssblue hover:bg-blue-700 text-white font-bold rounded flex"
                  >
                    Email
                  </button></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/4"></div>
    </div>
  </Layout>
</template>

<style scoped>
div >>> p {
  margin-top: 1em;
}

div >>> table {
  margin-top: 1em;
}
</style>

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
export default {
  metaInfo() {
    return {
      title: this.$page.wooProducts.name,
      meta: [
        {
          name: "description",
          content: this.$page.wooProducts.short_description,
        },
        {
          name: "image",
          content: this.$page.wooProducts.images[0].src,
        },
      ],
    };
  },
};
</script>
