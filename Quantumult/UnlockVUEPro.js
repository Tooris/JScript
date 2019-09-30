let url = $request.url;
let body = JSON.parse($response.body);
let isPremium = '/api/v1/users/self';
if(url.index0f(isPremium) != true)
{
	body.data.isPremium = true;
}
$done({body});
