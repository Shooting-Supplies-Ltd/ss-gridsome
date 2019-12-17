<template>
  <Layout>
    <div class="flex mb-4">
      <div class="w-1/4"></div>
        <div class="w-2/4 flex flex-wrap rounded-b-lg shadow-lg border-t-4 border-ssblue">
          <div class="flex justify-center">
            <g-image :src="$page.allGuns.images[0].FullPath" :alt="$page.allGuns.title" />
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
                  <div class="mt-4 ">
                    <a href="tel:01527831261"><button class="h-10 bg-ssblue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Call <font-awesome :icon="['fas', 'phone']" class="ml-2"/></button></a>
                    <a href="mailto:info@shootingsuppliesltd.co.uk"><button class="h-10 bg-ssblue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Email <font-awesome :icon="['fas', 'envelope']" class="ml-2"/></button></a>
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
    }
  }
}
</page-query>