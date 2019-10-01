var body = $response.body;
var url = $request.url;
const pro = '/api/v1/users/self?';
const pro2 = '/api/v1/users/';
const pro3 = '/api/v1/timeline/users/'

if(url.indexOf(pro) != -1)
{
  let obj = JSON.parse(body);
  obj["isPremium"] = true;
  body = JSON.stringify(obj);
}

if(url.indexOf(pro2) != -1)
{
  let obj = JSON.parse(body);
  obj["isPremium"] = true;
  body = JSON.stringify(obj);
}

if(url.indexOf(pro3) != -1)
{
  let obj = JSON.parse(body);
  obj.data.user.isPremium = true;
  body = JSON.stringify(obj);
}
$done({body});
