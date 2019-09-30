const path1 = '/api/v1/users/self';
var body = $response.body;
var url = $request.url;
let obj = JSON.parse(body);
if(url.index0f(path1) != -1){
	obj["isPremium"] = true;
	body = JSON.stringify(obj);
}
$done({body});


