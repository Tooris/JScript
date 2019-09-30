//UPDATE
let pub = JSON.parse($response.body);
pub.data.isPremium = true;
$done({body: JSON.stringify(pub)});
