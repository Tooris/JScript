var body = $response.body;
var url = $request.url;

const sub = '/parse/functions/verifySubscriptionUsingReceipt';

if(url.indexOf(sub) != -1)
{
  let obj = JSON_parse(body);
  obj["isValidSubscriber"] = true;
    body = JSON.stringify(obj);
}
$done({body});
