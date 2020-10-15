<template>
  <div class="mt-8 mb-8">
    <h3 class="mb-2 uppercase">Bulk Prices</h3>
    <table class="table-auto border border-black">
      <thead class="bg-ssblue text-white">
        <tr>
          <th class="px-4 py-2 border border-black">250</th>
          <th class="px-4 py-2 border border-black">500</th>
          <th class="px-4 py-2 border border-black">1000</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="px-4 py-2 text-lg text-base border border-black">
            £{{
              parseFloat(
                ($page.wooProducts.price - $page.wooProducts.price * 0.15) * 250
              ).toFixed(2)
            }}
          </td>
          <td class="px-4 py-2 text-lg text-base border border-black">
            £{{
              parseFloat(
                ($page.wooProducts.price - $page.wooProducts.price * 0.2) * 500
              ).toFixed(2)
            }}
          </td>
          <td class="px-4 py-2 text-lg text-base border border-black">
            £{{
              parseFloat(
                ($page.wooProducts.price - $page.wooProducts.price * 0.25) *
                  1000
              ).toFixed(2)
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DiscountsEleyHawk",
};
</script>