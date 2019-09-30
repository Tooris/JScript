var body = $response.body;
var url = $request.url;

const pro = '/api/v1/users/self';


if(url.indexOf(pro) != -1){
  let obj = JSON.pares(body);
  obj["isPremium"] = true;
  body = JSON.stringify(obj);
}
$done({body});
