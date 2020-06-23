// Get all Items that have both an Image and a description

const refreshToken = require('./lib/refreshToken');
const getAccountID = require('./lib/getAccountID');
const getFullInventory = require('./lib/getFullInventory');

const getCompleteItems = async () => {
  // refresh the token
  const accessToken = await refreshToken();
  if (typeof accessToken == 'string') {
    // creating the authentication header for all future API calls
    const authHeader = {
      Authorization: `Bearer ${accessToken}`
    };

    // getting the account ID
    const accountID = await getAccountID(authHeader);

    // getting the full inventory of all items with Custom SKUs
    let inventory = await getFullInventory(authHeader, accountID);

    // let stock = JSON.stringify(inventory);

    const findCompletedItems = inventory.filter(item => {
      return item.Images && item.CustomFieldValues
    })
    
    const filteredStock = findCompletedItems.map(item => {
      return {
        sku: item.customSku,
        price: item.Prices.ItemPrice[0].amount,
        brand: item.manufacturerSku,
        title: item.description,
        stock: item.ItemShops.ItemShop[0].qoh,
        shortDescription: item.CustomFieldValues.CustomFieldValue[1].value,
        fullDescription: item.CustomFieldValues.CustomFieldValue[0].value,
        image: 'https://res.cloudinary.com/lightspeed-retail/image/upload/' + item.Images.Image.publicID + '.jpg',
      }
    })
    return filteredStock
  }
};

module.exports = getCompleteItems;
