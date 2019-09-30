var body = $response.body;
var obj = JSON.parse(body);
obj.entity.likeCount = 6666;
body = JSON.stringify(obj);
$done(body);
