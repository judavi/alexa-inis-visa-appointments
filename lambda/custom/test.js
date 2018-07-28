process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const request = require('sync-request');
var res = request('GET', 'https://burghquayregistrationoffice.inis.gov.ie/Website/AMSREG/AMSRegWeb.nsf/(getAppsNear)?openpage&cat=Work&sbcat=All&typ=Renewal&_=1532596671943');
var response = JSON.parse(res.getBody('utf8'));

if (response.hasOwnProperty('slots')){
  console.log('yes, i have that property');
  console.log(response.slots[0].time);
}