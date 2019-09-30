const v2 = '/api/v2/user/status';
const v3 = '/api/v3/user/ranking';
var url = $request.url;
if(url.indexOf(v2) != -1){
  let obj = JSON.parse($response.body);
  obj["pro"] = true;
  obj["proEndDate"] = "2099-12-30T00:00:00.000+0000";
}

if(url.indexOf(v3) != -1){
 let obj = JSON.parse($response.body);
  obj["level"] = 99;
  obj["score"] = 50000;
  
}

$done({body: JSON.stringify(obj)});
