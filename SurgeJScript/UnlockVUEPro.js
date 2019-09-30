const path1 = '/api/v1/users/';

var body = $response.body;
var url = $request.url;
if(url.index0f(path1) != -1)
{
	let obj = JSON.parse(body);
	obj.data.isPremium = true;
	obj.data.location = "在你妈肚子里";
	body = JSON.stringify(obj);
}
$done({body});

