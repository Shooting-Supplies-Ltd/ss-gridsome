<template>
  <Layout>
    <div class="flex mt-4 mb-4">
      <div class="w-1/4"></div>
        <div class="flex flex-wrap rounded-b-lg shadow-lg border-t-4 border-ssblue lg:mt-8 lg:w-2/4">
          <div class="flex justify-center h-24 sm:h-auto">
            <g-image :src="$page.allGuns.images[0].FullPath" :alt="$page.allGuns.title"/>
          </div>
          <div class="container flex flex-wrap mb-6 w-full">
            <div>
              <h1 class="font-bold text-xl pl-6 pt-6">{{ $context.title }}</h1>
            </div>
            <div class="ml-6 mt-6 w-full">
              <table>
                <tr>
                  <td>Make: {{$context.make}}</td>
                </tr>
                <tr>
                  <td>Model: {{$context.model}}</td>
                </tr>
                <tr>
                  <td>Variant: {{$context.variant}}</td>
                </tr>
                <tr>
                  <td>Type: {{$context.type}}</td>
                </tr>
                <tr>
                  <td>Mechanism: {{$context.mechanism}}</td>
                </tr>
                <tr>
                  <td>Calibre: {{$context.calibre}}</td>
                </tr>
                <tr>
                  <td>Orientation: {{$context.orientation}}</td>
                </tr>
                <tr>
                  <td>Trigger: {{$context.trigger}}</td>
                </tr>
                <tr>
                  <td>Length: {{$context.barelLength}}</td>
                </tr>
                <tr>
                  <td>Description: {{$context.description}}</td>
                </tr>
                <tr>
                  <td>Condition: {{$context.condition}}</td>
                </tr>
                <tr>
                  <td>Licence: {{$context.licence}}</td>
                </tr>
                <tr class="font-bold text-lg">
                  <td class="pt-6">Price: £{{ $context.price }}</td>
                </tr>
              </table>
              <div>
                <p class="mt-4 font-semibold">Contact Us for Further Information:</p>
                <div class="mt-4 flex">
                  <a href="tel:01527831261"><button class="h-10 py-2 px-4 mr-4 bg-ssblue hover:bg-blue-700 text-white font-bold rounded flex">Call</button></a>
                  <a v-bind:href="'mailto:info@shootingsuppliesltd.co.uk?subject=New Website Enquiry - ' +
                    $context.title + ' - ' + 
                    $context.id + ' - £' + 
                    $context.price+''"><button class="h-10 py-2 px-4 bg-ssblue hover:bg-blue-700 text-white font-bold rounded flex">Email</button></a>
                </div> 
              </div>
            </div>
          </div>
        </div>
      <div class="w-1/4"></div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  allGuns: guns (id: $id) {
    title
    images {
      FullPath
      ThumbPath
    }
  }
}
</page-query>

<script>
export default {
  name: `{{this.$page.title}}`,
  metaInfo: {
    title: `{this.$context.title}`
  },
  methods: { 
    sendEmail() {
    let email = `darryl@shootingsuppliesltd.co.uk`
    let subject = `You Have a New Website Gun Enquiry - {{$context.id}}`
    let body = `Hi,\n you have a new enquiry from your website.\n Ref:{{$context.id}},\n Title:{{$context.title}},\n Price:{{$context.price}},\n {{$context.image}`
    window.open('v-bind:"href=`mailto:`${email}')
    },
  }
}
</script>