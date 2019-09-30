let url = $request.url;
let body = JSON.parse($response.body);
let user = '/api/v1/users/self';
if(url.index0f(user) != -1)
{
	body.data.isPremium = true;
}
body = JSON.stringify(body);
$done({body});
