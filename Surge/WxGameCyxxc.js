/*

微信小游戏：成语小秀才无限提示
分享一次给好友就能获得 999999+ 次提示机会
以后玩的话不需要再打开脚本

*/

var body = $response.body;
var url = $request.url;

const getTip = '/game/player/reenter';

if(url.indexOf(getTip) != -1)
{
  let obj = JSON.parse(body);
  obj.data.eConf.getTip = 999999999;
  obj.data.eConf.shareTHigh = 9999;
  body = JSON.stringify(obj);
}
$done({body});
