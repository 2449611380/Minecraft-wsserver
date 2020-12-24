var game=new Object();
var xname=false;
var say=true;
var itemn={};

game.game=function (ws){
function cmdx(cmd){
	ws.sendText(JSON.stringify({
 "body": {
 "origin": { "type": "player"},
 "commandLine":cmd,
 "version": 1
 },
 "header": {
 "requestId": "00000000-0000-0000-0000-999100000001",
 "messagePurpose": "commandRequest",
 "version": 1,
 "messageType": "commandRequest"
 }}))};	
 
cmdx('testfor @s')
//cmdx('/gamerule sendcommandfeedback false')

xname=true;
  setInterval(()=>{
  cmdx('testfor @e[type=item]') 
 // cmdx('give @a air 0')//刷新玩家背包
    },2000);
ws.on('text',function(str){
var me=JSON.parse(str);	
	 if(me.header){
   //每一次返回把uuid和类型包装到变量里
   var messagePurpose=me.header.messagePurpose
   var requestId=me.header.requestId
   }

if(messagePurpose=='event'&&requestId=='00000000-0000-0000-0000-000000000000'&&say==true){

if(me.body.properties.Sender==xname){//是否是管理员说话

if(me.body.properties.Message.substr(0,8)=='item -n '&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
items=me.body.properties.Message.substr(8).replace(' ','恒item');
items=items.split('恒item');
itemn[items[0]]=items[1]
cmdx('say §e掉落物名字:'+items[0]+' 掉落物执行指令:'+items[1])
};
if(me.body.properties.Message=='-items'&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
var itemx=[];
for(x in itemn){
itemx.push('§a掉落物:'+x+'  §a指令:'+itemn[x])
};
cmdx('say §a\n'+itemx.join('\n'))

};
if(me.body.properties.Message.substr(0,9)=='item -nz '&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
delete itemn[me.body.properties.Message.substr(9)]
cmdx('say §e成功删除:'+me.body.properties.Message.substr(9))
};





};
say=false;
setTimeout(function(){say=true},500)//去网易二次
};//say返回


if(messagePurpose=='commandResponse'&&requestId=='00000000-0000-0000-0000-999100000001'){
 item=me.body.victim;
 if(item!==undefined){
 for(x of item){
 
 for(z in itemn){
 if(x.indexOf(z)>=0){cmdx('execute @e[c=1,type=item,name='+x+'] ~ ~ ~'+itemn[z]);cmdx('kill @e[c=1,type=item,name='+x+']');}
 };
 
 
 if(x.indexOf('天谴')>=0){cmdx('kill @e[c=1,type=item,name='+x+']');cmdx('execute @r ~ ~ ~ summon minecraft:lightning_bolt')};

};//for
}








if(xname==true){
if(me.body.victim){
 xname=me.body.victim[0]
 }
};

};//cmd返回





})


};//总
module.exports=game
console.log('游戏模块已加载..')