const axios = require('axios');
const fs = require('fs');

// Get Json from Server
async function getApi() {
    let res = await axios.get('https://3rdParty.guntrader.uk/ShootingSuppliesLtd/jsonGuns');
    let data = res.data;
    
    // data.forEach(function(gun) { 
    //     ;['Origin', 'Ejection', 'Trigger', 'BarrelLength', 'BarrelLengthFraction', 'StockLength', 'StockLengthInches', 
    //     'StockLengthFraction', 'WeightPounds', 'WeightOunces', 'ScopeMake', 'ScopeMag', 'ExpiryDate', 'ImageCount', 
    //     'PairedGun', 'ProofedLO', 'ProofedRU', 'Cased', 'Chamber', 'Paired', 'Created', 'Modified'].forEach(prop => {
    //       delete gun[prop]; 
    //      })  
    //  });

    saveGuns(data)
};

function saveGuns(data) {
    let result = JSON.stringify(data)
    fs.writeFile('./temp/guns.json', result, (err) => { 
        if (err) throw err; 
    }) 
};

getApi()