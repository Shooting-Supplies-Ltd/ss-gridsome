const BasicHttpBinding = require('wcf.js').BasicHttpBinding;
const WSHttpBinding = require('wcf.js').WSHttpBinding;
const fs = require('fs');
const Proxy = require('wcf.js').Proxy; 
const format = require('xml-formatter');
const parser = require('xml2json');
require('dotenv').config();


let binding = new BasicHttpBinding({ 
      SecurityMode: "TransportWithMessageCredential",  
      MessageClientCredentialType: "UserName"
    });
  
let proxy = new Proxy(binding, "https://services.opsuite.co.uk/2013/08/InventoryService.svc/basic");

let message =  '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns="http://www.opsuite.com/opservices/2013/08">' +
                '<soapenv:Header/>' +
                '<soapenv:Body>' +
                '<ns:GetItemMasters>' +
                '</ns:GetItemMasters>' +
                '</soapenv:Body>' +
                '</soapenv:Envelope>';


proxy.ClientCredentials.Username.Username = "api@shootingsupplies.co.uk"
proxy.ClientCredentials.Username.Password = "8810J4ckfl4sh"


proxy.send(message, "http://www.opsuite.com/opservices/2013/08/IInventoryService/GetItemMasters", function (response, err) {
    // 
    if(response){
        let xml = response;
        saveResult(xml)
    } else {
        console.log(err)
    }
});

function saveResult(xml) {
    //console.log(xml)
    // let formattedXml = format(xml);
    fs.writeFile('./temp/result.xml', xml, (err) => { 
        if (err) throw err; 
    });
};

