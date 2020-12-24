var home=new Object();
var fs = require('fs');

var sethome;
var homefalse=false;
var xname=false;
var say=true;
home.sethome=function(ws){
function cmdx(cmd){
	ws.sendText(JSON.stringify({
 "body": {
 "origin": { "type": "player"},
 "commandLine":cmd,
 "version": 1
 },
 "header": {
 "requestId": "00000000-0000-0000-0000-999000000001",
 "messagePurpose": "commandRequest",
 "version": 1,
 "messageType": "commandRequest"
 }}))};	
 
 
cmdx('testfor @s')
xname=true;
ws.on('text',function(str){
	var me=JSON.parse(str);	
	 if(me.header){
   //每一次返回把uuid和类型包装到变量里
   var messagePurpose=me.header.messagePurpose
   var requestId=me.header.requestId
   }
if(messagePurpose=='event'&&requestId=='00000000-0000-0000-0000-000000000000'&&say==true){

if(me.body.properties.Sender==xname){//是否是管理员说话



if(me.body.properties.Message=='-homes'&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
fs.readFile('./家储存/家储存.txt',(error,data)=>{
if(!error){
var homes=[];
for(x in JSON.parse(data)){
homes.push('§a家:'+x+'  §a坐标:'+JSON.parse(data)[x])
};
cmdx('say §a\n'+homes.join('\n'))
}
});
};
if(me.body.properties.Message.substr(0,8)=='sethome '&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
cmdx('testforblock ~ ~ ~ air');
cmdx('say §a设置家中..不要乱动')
sethome=me.body.properties.Message.substr(8)
homefalse=true
}



if(me.body.properties.Message.substr(0,5)=='home '&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	

var hx=me.body.properties.Message.substr(5)
fs.readFile('./家储存/家储存.txt',(error,data)=>{
if(!error){
cmdx('tp @s '+JSON.parse(data)[hx].join(' '))
cmdx('say §a传送完毕')

}

});
};

if(me.body.properties.Message.substr(0,6)=='homed '&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
var hx=me.body.properties.Message.substr(6)
fs.readFile('./家储存/家储存.txt',(error,data)=>{
if(!error){
var jsonhome=JSON.parse(data)
  delete jsonhome[hx]
cmdx('say §a成功删除'+hx)
fs.writeFile('./家储存/家储存.txt',JSON.stringify(jsonhome))

}
})

};//





}//管理员
say=false;
setTimeout(function(){say=true},500)//去网易二次
};//say返回




if(messagePurpose=='commandResponse'&&requestId=='00000000-0000-0000-0000-999000000001'){
if(homefalse==true){
cmdx('say §e§l设置的家为'+sethome+'坐标为 §aX:'+me.body.position.x+' Y:'+me.body.position.y+' Z:'+me.body.position.z)
homefalse=false;
xyzx=[];
xyzx[0]=me.body.position.x
xyzx[1]=me.body.position.y
xyzx[2]=me.body.position.z
fs.readFile('./家储存/家储存.txt',(error,data)=>{
if(!error){
//[me.body.position.x,me.body.position.y,me.body.position.z]

var jsonhome=JSON.parse(data)
jsonhome[sethome]=xyzx

fs.writeFile('./家储存/家储存.txt',JSON.stringify(jsonhome))

}else{cmdx('say §4Error:§e§l家储存文件失踪了')}
});

};
//---__------__--_
if(xname==true){
if(me.body.victim){
 xname=me.body.victim[0]
 }
};




};//cmdx返回





})//x.on





};//总fun




module.exports=home
console.log('家模块已加载..')