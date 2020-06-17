<template>
  <Layout>
    <div class="flex lg:mt-4 lg:mb-4 mt-8 sm:mt-16 sm:mb-8">
      <div class="w-1/4"></div>
      <div
        class="flex flex-wrap rounded-b-lg shadow-lg border-t-4 border-ssblue lg:mt-8 lg:mb-12 lg:w-2/4"
      >
        <div class="block w-full">
          <g-image :src="$page.allGuns.images[0].FullPath" :alt="$page.allGuns.title" />
        </div>
        <div class="container flex flex-wrap mb-6 w-full">
          <div class="ml-6">
            <h1
              class="mt-2 text-5xl text-gray-900 font-extrabold tracking-tighter"
            >{{ $page.allGuns.title }}</h1>
          </div>
          <div class="ml-6 mr-6 mt-4 w-full border border-black">
            <table class="table-auto w-full mb-4">
              <thead class="bg-ssblue text-white">
                <tr>
                  <th colspan="2" class="p-2 uppercase text-xl">Gun Details</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-2">
                    <span class="font-bold uppercase tracking-tight">Make:</span>
                    {{ $page.allGuns.make }}
                  </td>
                  <td class="p-2">
                    <span class="font-bold uppercase tracking-tight">Model:</span>
                    {{ $page.allGuns.model }}
                  </td>
                </tr>
                <tr class="bg-gray-200">
                  <td class="p-2">
                    <span class="font-bold uppercase tracking-tight">Variant:</span>
                    {{ $page.allGuns.variant }}
                  </td>
                  <td class="p-2">
                    <span class="font-bold uppercase tracking-tight">Type:</span>
                    {{ $page.allGuns.type }}
                  </td>
                </tr>
                <tr>
                  <td class="p-2">
                    <span class="font-bold uppercase tracking-tight">Mechanism:</span>
                    {{ $page.allGuns.mechanism }}
                  </td>
                  <td class="p-2">
                    <span class="font-bold uppercase tracking-tight">Calibre:</span>
                    {{ $page.allGuns.calibre }}
                  </td>
                </tr>
                <tr class="bg-gray-200">
                  <td class="p-2">
                    <span class="font-bold uppercase tracking-tight">Orientation:</span>
                    {{ $page.allGuns.orientation }}
                  </td>
                  <td class="p-2">
                    <span class="font-bold uppercase tracking-tight">Trigger:</span>
                    {{ $page.allGuns.trigger }}
                  </td>
                </tr>
                <tr>
                  <td class="p-2">
                    <span class="font-bold uppercase tracking-tight">Length:</span>
                    {{ $page.allGuns.barrelLength }}
                  </td>
                  <td class="p-2">
                    <span class="font-bold uppercase tracking-tight">Description:</span>
                    {{ $page.allGuns.description }}
                  </td>
                </tr>
                <tr class="bg-gray-200">
                  <td class="p-2">
                    <span class="font-bold uppercase tracking-tight">Licence:</span>
                    {{ $page.allGuns.licence }}
                  </td>
                  <td class="p-2">
                    <span class="font-bold uppercase tracking-tight">Condition:</span>
                    {{ $page.allGuns.condition }}
                  </td>
                </tr>
                <tr>
                  <td class="p-2">
                    <span class="font-bold uppercase tracking-tight">Price:</span>
                    £{{$page.allGuns.price}}
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="ml-6 mb-6 mt-4">
            <h3
              class="mt-4 text-2xl font-extrabold text-gray-900 uppercase tracking-tight"
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
                      $page.allGuns.title +
                      ' - ' +
                      $page.allGuns.id +
                      ' - £' +
                      $page.allGuns.price +
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
            <div class="mt-8 lg:hidden">
              <h3
                class="mb-2 text-2xl font-extrabold text-gray-900 uppercase tracking-tight"
              >Share this item</h3>
              <ProductSocialSidebar class="flex space-x-6" />
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/4">
        <ProductSocialSidebar class="hidden lg:flex lg:flex-col lg:mt-8 lg:ml-4" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  allGuns: guns (id: $id) {
    id
    title
    make
    model
    variant
    type
    mechanism
    calibre
    orientation
    trigger
    barrelLength
    description
    condition
    licence
    price
    images {
      FullPath
      ThumbPath
    }
  }
}
</page-query>

<script>
import ProductSocialSidebar from "../components/ProductSocialSidebar";

export default {
  components: {
    ProductSocialSidebar
  },
  metaInfo() {
    return {
      title: this.$page.allGuns.title,
      meta: [
        {
          name: "brand",
          content: this.$page.allGuns.make
        },
        {
          name: "model",
          content: this.$page.allGuns.model
        },
        {
          name: "description",
          content: this.$page.allGuns.description
        },
        {
          name: "itemCondition",
          content: this.$page.allGuns.condition
        },
        {
          name: "image",
          content: this.$page.allGuns.images[0].FullPath
        }
      ]
    };
  },
  methods: {
    isMobile() {
      var check = false;
      (function(a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    }
  }
};
</script>
