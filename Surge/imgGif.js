/*
1.Modify Pro expression to false

*/
var body = $response.body;
var url = $request.url;
const stickers = '/api/';
if(url.indexOf(body))
{
	let obj = JSON.parse(body);
	obj.data.stickers.pro = false;
	body = JSON.stringify(obj);
}
$done({body});
