var url = $request.url;
var body = $response.body;

const v2 = '/api/v2/user/status';
const v3 = '/api/v3/user/ranking';

if(url.indexOf(v2) != -1){
  let obj = JSON.parse(body);
  obj["pro"] = true;
  obj["proEndDate"] = "2099-12-30T00:00:00.000+0000";
    body = JSON.stringify(obj);
}

if(url.indexOf(v3) != -1){
 let obj = JSON.parse(body);
  obj["level"] = 99;
  obj["score"] = 50000;
  body = JSON.stringify(obj);
  
}

$done({body});
