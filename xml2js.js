const { transform, prettyPrint } = require('camaro')
const fs = require('fs');

const xml = fs.readFileSync( './temp/result.xml', 'utf-8');

const template = {
    //cache_key: "/GetItemMastersResponse/cacheKey",
    products: ['//a:ItemMaster', {
        id: 'a:BarcodeNumber',
        sku:'a:Sku',
        active:'a:Active',
        brand:'a:Manufacturer',
        description:'a:Description',
        price:'a:PriceIncTax',
        category:'a:CategoryId',
        department:'a:DepartmentId'
    }]
}

;(async function () {
    const result = await transform(xml, template);
    const prettyStr = await prettyPrint(xml, { indentSize: 4});
    const filterActive = result.products.filter(({active}) => active === 'true');
    fs.writeFileSync('./temp/converted.json', JSON.stringify(filterActive));
})()