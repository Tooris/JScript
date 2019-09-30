var body = $response.body;
var url = $request.url;

const pro = '/api/v2/user/status';

if(url.indexOf(pro) != -1){
	let obj = JSON.parse(body);
	obj["pro"] = true;
		body = JSON.stringify(obj);
}
$done({body});
