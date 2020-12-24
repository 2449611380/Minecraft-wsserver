
var http=new Object();

http.http=function(ws){
var fs=require('fs');
var http = require('http');
var url=require('url');
var osip=require('os');
var urljs;
function cmdx(cmd){
	ws.sendText(JSON.stringify({
 "body": {
 "origin": { "type": "player"},
 "commandLine":cmd,
 "version": 1
 },
 "header": {
 "requestId": "00000000-0000-0000-0000-900000000001",
 "messagePurpose": "commandRequest",
 "version": 1,
 "messageType": "commandRequest"
 }}))};	

console.log('启动中')
if(osip.networkInterfaces().rmnet_data0==undefined){if(osip.networkInterfaces().wlan0==undefined){var ip="127.0.0.1"}else {var ip=osip.networkInterfaces().wlan0[0].address}}else {var ip=osip.networkInterfaces().rmnet_data0[0].address}
//var css=fs.readFileSync('./logo/css/logo.css', 'utf8', ()=>{});


http.createServer(function(eb,u){
	//urljs=(url.parse(eb.url,true)).query
	//console.log(urljs)
	//	u.setHeader('Content-Type','text/html;charst=utf-8')
	if(decodeURI(eb.url).substr(0,3)=='/Tr'){
	var cmd=decodeURI(eb.url).split('=');
	cmd=[cmd[1].split('&')[0],cmd[2]];
	cmd[1]=cmd[1].replace(/\+/g,' ')
	if(cmd[0]=='cmd'){cmdx(cmd[1]);u.end(fs.readFileSync('./logo/logo/logo.html', 'utf8', ()=>{}))}
	if(cmd[0]=='say'){cmdx('/tellraw @a {\"rawtext\":[{\"text":\"'+cmd[1]+'\"}]}');u.end(fs.readFileSync('./logo/logo/logo.html', 'utf8', ()=>{}))}
	
	
	
	
	console.log(cmd)
	};
	
	
		if(eb.url=='/'){
			 u.end(fs.readFileSync('./logo/logo/logo.html', 'utf8', ()=>{}))
	//基本请求部分，会把html样式发过去
	}
	
		if(eb.url.substr(0,5)=='/logo'){
			//接受logo请求部位，发过来的请求会从文件夹找，找到了发过去，找不到就返回404
			fs.readFile('./logo'+decodeURI(eb.url),(er,data)=>{
				if(er){u.end('404 not Found')}
				u.end(data);console.log('请求',decodeURI(eb.url))
				
				})
			}
		
  
		 





	}).listen(6565,function(e){console.log('网页ip',ip+':\n'+6565)})
	
};


module.exports=http



