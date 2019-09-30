var body = $response.body;
var obj = JSON.parse(body);
obj["isPremium"] = true;
body = JSON.stringify(obj);
$done(body);
