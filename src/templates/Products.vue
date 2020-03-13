<template>
  <Layout>
    <div class="flex mt-4 mb-4 sm:mt-16 sm:mb-8">
      <div class="w-1/4"></div>
      <div
        class="flex flex-wrap rounded-b-lg shadow-lg border-t-4 border-ssblue lg:mt-8 lg:w-2/4"
      >
        <div class="px-6 flex justify-center">
          <g-image :src="$context.images[0].src" :alt="$context.name" />
        </div>

        <div class="container flex flex-wrap mb-6 w-full px-6 py-6">
          <div>
            <h1 class="font-bold text-xl">{{ $context.name }}</h1>
            <div class="mt-2 font-bold text-lg">£{{ $context.price }}</div>
          </div>
          <div v-html="$context.content" class="mt-2"></div>

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
                      $context.name +
                      ' - ' +
                      $context.sku +
                      ' - £' +
                      $context.price +
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

<script>
export default {
  metaInfo() {
    return {
      title: this.$context.name,
      meta: [
        {
          name: "brand",
          content: this.$context.brands.name
        },
        {
          name: "description",
          content: this.$context.excerpt
        },
        {
          name: "image",
          content: this.$context.images[0].src
        }
      ]
    };
  }
};
</script>
