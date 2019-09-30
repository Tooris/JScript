let obj = JSON_parse($response.body);
obj.data.isPremium = true;
$done({body: JSON.stringify(obj)});
