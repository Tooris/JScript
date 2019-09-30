var body = $response.body;
var url = $request.url;

const getTip = '/game/basic/login';

if(url.indexOf(getTip) != -1)
{
  let obj = JSON.parse(body);
  obj.data.eConf.getTip = 999999999;
  obj.data.eConf.shareTHigh = 9999;
  body = JSON.stringify(obj);
}
$done({body});
