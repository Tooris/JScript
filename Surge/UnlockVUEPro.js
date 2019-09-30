var body = $response.body;
var url = $request.url;

const pro = '/api/v1/users/';

if(url.indexOf(pro) != -1){
  let obj = JSON.pares(body);
  obj["pro"] = true;
  body = JSON.stringify(obj);
}
$done({body});
