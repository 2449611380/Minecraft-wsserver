console.time("启动速度: ");

var ws=require('nodejs-websocket');
var nbt=require('nbt');
var fs=require('fs');
var schematic=require('mc-schematic')('1.8');
//var getPixels = require("get-pixels");

var html=require('./logo/html.js');
var logo=require('./logo/logo.js');
var blockn=require('./block');
var colors=require('./rgb.js');
var xyzblock=require('./xyzblock');
var home=require('./家储存/家信息.js');
var game=require('./修仙/修仙.js');


var say=true;//say说话去网易二次接收
var evals={};
var evalk=0;
var datatime;

var boxc=[];  //指令组 
var boxc1=[]; //指令储存组
var boxa;
var times=false;//



var xyz=[0,0,0];
var login=false;
var test=false;//链接时获取玩家坐标
var get=0;//链接时自动一次get pos
var gets=false;//原点
var NBT=[];//特殊值组



var func=false;
var xname=false;

var Gear=10; //Gear开关
var Gears=true;
//------
var Rep='';//exe指令
var Repexe=0;//exe开关
var Repb=[];//存储普通方块
var Reps=[];//存储特殊方块
var Repss=[]//特殊方块坐标以及方块英文信息
var Repsss=[];//三次储存
var Repfalse=false;//录锁
var Reptrue=false;//特殊录锁
var block;//选取的方块坐标点
//---------

var Cycle=0; 
var Cycles=0;
var Cyclex=true;
//-_-------------------_________
var color={ white:0,orange:1,magenta:2,light_blue:3,yellow:4,lime:5,pink:6,gray:7,light_gray:8,cyan:9,purple:10,blue:11,brown:12,green:13,red:14,black:15}
//--------------
var osip=require('os');
var d=new Date()
console.log(d)
if(osip.networkInterfaces().rmnet_data0==undefined)
{if(osip.networkInterfaces().wlan0==undefined)
{var ip="127.0.0.1"}
else {var ip=osip.networkInterfaces().wlan0[0].address}}
else {var ip=osip.networkInterfaces().rmnet_data0[0].address}
console.log('在游戏里输入指令为')
console.log('/connect '+ip+':6464')  
console.log(' 网页 '+ip+':6565')
console.log('请链接游戏后在打开网页')  
console.log('Tr&fun&ws启动中...')	               
var sever=ws.createServer(function(x){
console.log('Tr&fun&ws状态:已链接')
//--------------


//---------------------  
setTimeout(function(){
   x.sendText(JSON.stringify({
 
	"body": {"eventName": "PlayerTravelled"},
	"header": {
		"requestId": "00000000-0000-0000-0000-000000000000",
		"messagePurpose": "subscribe","version": 1,
		"messageType": "commandRequest"
}}));
},2300)
//----------------------				
//-------------------------	
setTimeout(function(){		
	 x.sendText(JSON.stringify({
 
	"body": {"eventName": "BlockPlaced"},
	"header": {
		"requestId": "00000000-0000-0000-0000-000000000000",
		"messagePurpose": "subscribe","version": 1,
		"messageType": "commandRequest"
}}));
},1500)
//--------------------- 
//-------------------------	
setTimeout(function(){		
	 x.sendText(JSON.stringify({
 
	"body": {"eventName": "BlockBroken"},
	"header": {
		"requestId": "00000000-0000-0000-0000-000000000000",
		"messagePurpose": "subscribe","version": 1,
		"messageType": "commandRequest"
}}));
},2000)
//--------------------- 

 
   
   x.sendText(JSON.stringify({
 
	"body": {"eventName": "PlayerMessage"},
	"header": {
		"requestId": "00000000-0000-0000-0000-000000000000",
		"messagePurpose": "subscribe","version": 1,
		"messageType": "commandRequest"
}}));
//----------------------

//---------------------  
setTimeout(function(){
   x.sendText(JSON.stringify({
 
	"body": {"eventName": "PlayerMessage"},
	"header": {
		"requestId": "00000000-0000-0000-0000-000000000000",
		"messagePurpose": "subscribe","version": 1,
		"messageType": "commandRequest"
}}));
},1000)
//----------------------

	function command(cmd){
	x.sendText(JSON.stringify({
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

function command2(cmd){
	x.sendText(JSON.stringify({
 "body": {
 "origin": {"type": "player"},
 "commandLine":cmd,
 "version": 1
 },
 "header": {
 "requestId": "00000000-0000-0000-0000-990000000001",
 "messagePurpose": "commandRequest",
 "version": 1,
 "messageType": "commandRequest"
 }}))};	

function command3(cmd){
	x.sendText(JSON.stringify({
 "body": {
 "origin": {"type": "player"},
 "commandLine":cmd,
 "version": 1
 },
 "header": {
 "requestId": "00000000-0000-0000-0000-998000000001",
 "messagePurpose": "commandRequest",
 "version": 1,
 "messageType": "commandRequest"
 }}))};	



function setblock(d){
boxc=d
  boxa=boxc;
  if(Gear>boxc.length){command('say §4error§e:同执行数量与指令数量差距过大！')}
  else{
  //------
  command('say §e指令数量:'+boxc.length+'§4/'+Gear+'执行速度')
  datatime=new Date().getTime()
  for(let i=0;i<Gear;i++){
  
  
  
 setTimeout(function(){
 boxc1.push(i);
  x.sendText(JSON.stringify({
  "body": {
 "origin": {
 "type": "player"
 },
 "commandLine": Rep+boxc[i],
 "version": 1
 },
 "header": {
 "requestId": ('00000000-0000-0000-0000-'+(Number("00000000-0000-0000-0000-100000000001".split('-')[4])+i+'').replace('1','0')),
 "messagePurpose": "commandRequest",
 "version": 1,
 "messageType": "commandRequest"
 }
 }));
},(2*i)); 
 
  };//for
  //-----------
  
 }//else
  }//fun










 	
    home.sethome(x)
    html.http(x)
    game.game(x)
	command('say §eTr&fun&ws链接成功！')
	command('say §e作者:恒念')
	command('say §e版本：2.6.5.2')
	command3('say §a欢迎加入Mc:ws新手之地（？？？），群聊号码：826969946')
	command('say §e读取链接人信息中...')
	command3('say §e§l\n'+logo)
	setTimeout(function(){
	command('testforblock ~ ~ ~ air')
	command('testforblock ~ ~ ~ air')
	command('say §e获取坐标中..');
	test=true;
	},1666)
	setTimeout(function(){
	command('testfor @s')
	xname=true;
	},2666)
	
	command('say §a导入eval词库中..')
	fs.readFile('./eval词/eva.js',(error,data)=>{
if(!error){
evals=JSON.parse(data)

command('say §a§leval词库导入成功');
}else{command('say §4§leval词库导入失败')}

})

setTimeout(function(){
command('say §4Op!: 请在30秒内输入密码!')
},3000)
setTimeout(function(){


if(login==false){command('closewebsocket')};

},35000)

	x.on('text',function(str){
	var me=JSON.parse(str);	
   
   if(me.header){
   //每一次返回把uuid和类型包装到变量里
   var messagePurpose=me.header.messagePurpose
   var requestId=me.header.requestId
   }

	
		
if(messagePurpose=='event'&&requestId=='00000000-0000-0000-0000-000000000000'&&me.body.eventName=='BlockPlaced'){
				
console.log(me)

if(evalk==1){command('/tellraw @a {\"rawtext\":[{\"text":\"'+'§a放置方块为: '+me.body.properties.Block+'\n§a§l特殊值为: '+me.body.properties.AuxType+'\n游戏模式:'+me.body.properties.PlayerGameMode+'\"}]}')}

};
if(messagePurpose=='event'&&requestId=='00000000-0000-0000-0000-000000000000'&&me.body.eventName=='BlockBroken'){
				
//console.log(me)
if(evalk==1){command('tellraw @a {\"rawtext\":[{\"text":\"'+'§a破坏方块为: '+me.body.properties.Block+'\n§a§l特殊值为: '+me.body.properties.AuxType+'\"}]}')};
};
if(messagePurpose=='event'&&requestId=='00000000-0000-0000-0000-000000000000'&&me.body.eventName=='PlayerTravelled'){
				
//console.log(me)
if(evalk==1){command3('title @s actionbar §l§a玩家移动坐标为:\n§b X:'+me.body.measurements.PosAvgX+'\n§b Y:'+me.body.measurements.PosAvgY+'\n§b Z:'+me.body.measurements.PosAvgZ)}
};


if(messagePurpose=='event'&&requestId=='00000000-0000-0000-0000-000000000000'&&say==true&&me.body.eventName=='PlayerMessage'){
//-------接受say返回
//-------------

if(me.body.properties.MessageType=='chat'){

for(sz in evals){
if(me.body.properties.Message.indexOf(sz)>=0){
command('execute '+me.body.properties.Sender+' ~ ~ ~ '+evals[sz]);
break;
}};


};

//查看玩家是否触发词语
//------------------




console.log(me)






if(me.body.properties.Sender==xname){//是否是管理员说话

if(me.body.properties.Message.substr(0,7)=='login= '&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	

command('tellraw @s {\"rawtext\":[{\"text":\"'+'§blogin=？: '+me.body.properties.Message.substr(7)+'\"}]}')
fs.readFile('./‮login.apk',(error,data)=>{

if(!error){
var logins=JSON.parse(data)
if(logins.name==""){logins.name=xname}
if(me.body.properties.Message.substr(7)==logins.login&&logins.name==xname){
command('tellraw @s {\"rawtext\":[{\"text":\"'+'§aYes: '+me.body.properties.Message.substr(7)+'\"}]}')
login=true;
}else{command('tellraw @s {\"rawtext\":[{\"text":\"'+'§4Error No!: '+me.body.properties.Message.substr(7)+'\"}]}')};
if(logins.name!==xname){
command('tellraw @s {\"rawtext\":[{\"text":\"'+'§4Error No Op! : Op error You re not the super '+'\"}]}')
}
//command('say '+logins.name+'\n'+JSON.parse(data).login)
}

});




};


if(me.body.properties.Message=='get block'&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
Repexe+=1;
if(Repexe==2){Repexe=0;};
if(Repexe==0){Rep='';command('say §e定点执行已关闭:§4false§b'+xyz);};
if(Repexe==1){command('say §e定点执行已开启:§4true§b'+xyz);Rep='execute @s '+xyz[0]+' '+xyz[1]+' '+xyz[2]+' ';};

};
if(me.body.properties.Message=='-evalk'&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
evalk+=1;
if(evalk==2){evalk=0};
if(evalk==1){command('say §e提示已开启: §4true')}
if(evalk==0){command('say §e提示也关闭: §4false')}
};
  
  
 if(me.body.properties.Message=='-help'&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
//help帮助
  command('say §b\n\n帮助\nGear -n 数字   ：功能切换档位\n'+
  'function -z 路径    :功能 执行指定路径的fun\n'+
  'Cycle -n 数字       :功能  切换循环模式\n'+
  'blocks -n 数字      :功能 加快进度条（如执行fun指令的进度条或者nbt)\n'+
  'function -c 指令    ：功能   执行指令返回结果(作者测试用的)\n' +
  'cmd -c 指令        :功能 执行指令\n'+
  'block -k 数~数~数 数~数~数     :功能  转换建筑为mcfunction格式文件\n'+
  '-NB                :  功能  万能修复（安慰器）\n'+
  'get pos            :定点（确定生成地点）\n'+
  '-xyz                :显示已定点坐标\n'+
  'NBT -z 路径        :读取指定路径nbt并导入地图中!\n'+
  'nbt -z 路径         ：读取指定路径nbt导入到地图（有特殊值）\n'+
  'schematic -z 路径   :读取指定路径sch并导入到地图中!\n'+
  'get block           :执行fun的定点执行,可以指定fun在哪执行\n'+
  '-blocks              :显示存储的进度条\n'+
  'eval -s 设定词 执行命令  ：设定一个词，当玩家说话有这个词时触发命令\n'+
  'eval -y              :显示所有设定词\n'+
  'eval -sz 删除的词    ：删除指定设定词\n'+
  'cmd -c 执行的指令   ：执行一条指令\n'+
  'sethome 家名字      :设置家（支持设置无限个）\n'+
  'home 家名字         ：回到那个家\n'+
  'homed 删除的家名字   ：删除指定的家\n'+
  '-homes                 : 列出所有家\n'+
  'item -n 掉落物名字 指令 :当出现这个掉落物时执行指定指令\n'+
  'item -nz 掉落物名字    ：删除设置的掉落物执行\n'+
  '-items                 列出所有设定的掉落物词\n'+
  '-evalk              :开启与关闭提示(作者用的) \n'+
  'pixe -z 路径        ：导入像素画（色库觉得不好可以自己写个然后给作者\n+'+
  'get pos -p          :tp到最近地图的左上角\n'+
  'login= 密码  ：不输入密码则在30秒后断开\n'
   )//-----
  
  }
  
if(me.body.properties.Message.substr(0,8)=='eval -s '&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
var eva=me.body.properties.Message.substr(8).replace(' ','恒eval')
    eva=eva.split('恒eval');
    
command('say §e设定词语:'+[eva[0]+' 触发指令:'+eva[1]])
fs.readFile('./eval词/eva.js',(error,data)=>{
if(!error){
//[me.body.position.x,me.body.position.y,me.body.position.z]

var jsoneval=JSON.parse(data)
jsoneval[eva[0]]=eva[1]
evals=jsoneval;
fs.writeFile('./eval词/eva.js',JSON.stringify(jsoneval))

}else{cmdx('say §4Error:§e§leva文件失踪了')}
});




}; 
if(me.body.properties.Message.substr(0,8)=='eval -y'&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
fs.readFile('./eval词/eva.js',(error,data)=>{
if(!error){
var jsoneval=JSON.parse(data)
var sayeval=[];
for(eva in jsoneval){
sayeval.push(['§e设定词:'+eva+' §a触发指令:'+jsoneval[eva]])
};
command('say §e\n'+sayeval.join('\n'))
}else{command('say §4Error:§e储存词文件不见了')}

})
};
if(me.body.properties.Message.substr(0,9)=='eval -sz '&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
var eva=me.body.properties.Message.substr(9)
command('say §a删除成功:§a'+eva)
fs.readFile('./eval词/eva.js',(error,data)=>{
if(!error){
var jsoneval=JSON.parse(data)
delete jsoneval[eva]
evals=jsoneval
fs.writeFile('./eval词/eva.js',JSON.stringify(jsoneval))



}else{command('say §4Error:§e词文件不见了')}

})


};     
  if(me.body.properties.Message=='-NB'&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
var Maths=Math.round(Math.random()*100)
if(Maths>=99){command('say §e所有bug以及相关问题已经修复完毕,§4建议重新启动ws以保持流畅')}
if(Maths>=90&&Maths<99){command('say §ebug修复完毕！请重新启动ws保持使用寿命')}
if(Maths>=80&&Maths<90){command('say §e你的手机选择了罢工，ws孤军奋战中..')}
if(Maths>=70&&Maths<80){command('say §ews似乎心情不好，你还是等等吧')}
if(Maths>=60&&Maths<70){command('say §ews离家出走了，你似乎需要哄哄它')}
if(Maths>=50&&Maths<60){command('say §e修复失败！')}
if(Maths>=40&&Maths<50){command('say §e!ws正在攻击通道中！，尽快关闭ws!')}
if(Maths>=20&&Maths<40){command('say §e通道被ws挖断了！，即将爆炸,1!...2!....3!....')}
if(Maths>=0&&Maths<20){command('say §e修复失败！而且还增加了10086个bug')}
};

if(me.body.properties.Message.substr(0,9)=='Cycle -n '&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
 //-循环锁，让循环可以被开启或关闭
if(Number(me.body.properties.Message.substr(9))>=1){ 
 
 
 Cycles=Number(me.body.properties.Message.substr(9))
  Cycle+=1;
  if(Cycle==2){Cycle=0};
  if(Cycle==0){command('say §e循环模式状态:§4false')};
  if(Cycle==1){command('say §e循环模式状态:§4true:§e循环间隔'+Cycles+' ')};
  boxc=[];
 
  
  }}//----
  
if(me.body.properties.Message.substr(0,8)=='Gear -n '&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
//档位切换

if(Number(me.body.properties.Message.substr(8))>0){
Gear=Number(me.body.properties.Message.substr(8))
command('say §e当前档位§4'+Gear+'§e同执行')
}//if

}
  

if(me.body.properties.Message.substr(0,7)=='cmd -c '&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
command(me.body.properties.Message.substr(7))
};//执行-c后面指令
if(me.body.properties.Message.substr(0,12)=='function -c '&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
command(me.body.properties.Message.substr(12))
func=true
};//执行-c后面指令  
 //-----_---__-_-_-_--_--__--_--_--_--__--_
 if(me.body.properties.Message.substr(0,12)=='function -z '&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
//读取路径里的指令，塞到数组里，重置进度条数组，开启锁，发一次指令包
  fs.readFile(me.body.properties.Message.substr(12),'utf8',(e,d)=>{if(e){command('say §4Error:路径错误')};   
  if(!e){

  setblock(d.split('\n'));  
  
} //e
})//
 }//
  
   
//---------------------
if(me.body.properties.Message=='get pos'&&me.body.properties.MessageType=='chat'){
command('testforblock ~ ~ ~ air ')
command('say §a坐标记录中...，§4请不要乱动！');
get=true;

};//get pos
if(me.body.properties.Message=='get pos -p'&&me.body.properties.MessageType=='chat'){
command('testforblock ~ ~ ~ air ')
gets=1;
};//原点

if(me.body.properties.Message=='-xyz'&&me.body.properties.MessageType=='chat'){
command('say §e  X:'+xyz[0]+'  Y:'+xyz[1]+'  Z:'+xyz[2]+'§4!xzy')
}; 
//-------------------------------------
if(me.body.properties.Message.substr(0,7)=='NBT -z '&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
fs.readFile(me.body.properties.Message.substr(7),(error,data)=>{
if(error){command('say §4Error!:§e路径错误或格式错误！')}
else {
command('say §aYes!:§e路径正确！正在读取中...')
nbt.parse(data,(nbterror,nbtdata)=>{

if(me.body.properties.Message.substr(7).indexOf('.nbt')>=0){
for(i=0;i<nbtdata.value.blocks.value.value.length;i++){
var xs=nbtdata.value.blocks.value.value[i].pos.value.value[0]//x
var y=nbtdata.value.blocks.value.value[i].pos.value.value[1]//y
var z=nbtdata.value.blocks.value.value[i].pos.value.value[2]//z
var blockname=nbtdata.value.palette.value.value[nbtdata.value.blocks.value.value[i].state.value].Name.value
blockname=blockname.replace('minecraft:','')
if(blockname!=='air'){
NBT.push('setblock '+' '+(xyz[0]+xs)+' '+(xyz[1]+y)+' '+(xyz[2]+z)+' '+blockname)
}//if
}//for

setblock(NBT);
}else{command('say §4Error:§e文件格式错误：你是不是认不清啥玩意是nbt')}


})//nbt
}//else
})// fs
};//if
//----------------------------------------------

if(me.body.properties.Message.substr(0,13)=='schematic -z '&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	

fs.readFile(me.body.properties.Message.substr(13),(error, data)=>{
if(error){command('say §4Error:§e路径错误')}
else{
schematic.parse(data,(err, block)=>{
if(err){command('say §4Error:§e文件格式？未知')}
else{
if(me.body.properties.Message.substr(13).indexOf('.schematic')>=0){
var sche=new Array();
    for(xs=0;xs<block.width;xs++){
    for(y=0;y<block.height;y++){
    for(z=0;z<block.length;z++){
    if(block.getBlock(xs,y,z).name!='air'&&block.getBlock(xs,y,z).name!=''){
   sche.push('setblock ' +(xs+xyz[0])+' '+(y+xyz[1])+' '+(z+xyz[2])+' '+block.getBlock(xs,y,z).name+' '+block.getBlock(xs,y,z).metadata);
    }
    }}}
command('say §aYes:§e读取成功')    
setblock(sche)
}else{command('say §4Error:§e文件格式错误：你是不是认不清啥玩意是sch')}

}/*else*/})/*sch*/}/*else*/})




    
};




if(me.body.properties.Message.substr(0,7)=='nbt -z '&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
command('say §e读取中..nbt读取过慢属于正常现象\n§a请耐心等待！')
fs.readFile(me.body.properties.Message.substr(7),(error, data)=>{
if(error){command('say §4Error:§e路径错误')}
else{
nbt.parse(data,(err, block)=>{
if(err){command('say §4Error:§e文件格式？未知')}
else{
if(me.body.properties.Message.substr(7).indexOf('.nbt')>=0){

var nbtsch=new Array();
var nbtid=[]


for(a=0;a<block.value.palette.value.value.length;a++){
nbtid.push(0);
var nbtname=(block.value.palette.value.value[a].Name.value).replace('minecraft:','');
if(block.value.palette.value.value[a].Properties==undefined){nbtid[a]=0;}
else{
console.log(nbtname)
var nbtPro=block.value.palette.value.value[a].Properties.value

if(nbtname=='concrete'||nbtname=='stained_glass_pane'||nbtname=='stained_hardened_clay'||nbtname=='wool'||nbtname=='carpet'){
if(color[nbtPro.color.value]==undefined){nbtid[a]=0}else{nbtid[a]=color[nbtPro.color.value]};  
}; 
 if(nbtname.indexOf('_stairs')>=0&&nbtname!=='smooth_sandstone_stairs'){
var facing={north:3,south:2,west:1,east:0};
if(nbtPro.half.value=='bottom'){ 
if(facing[nbtPro.facing.value]==undefined){nbtid[a]=0;}else{nbtid[a]=facing[nbtPro.facing.value]}
}else{if(facing[nbtPro.facing.value]==undefined){nbtid[a]=0;}else{nbtid[a]=(facing[nbtPro.facing.value]+4)}
};
};

if(nbtname=='log'||nbtname=='log2'||nbtname=='planks'||nbtname=='leaves'||nbtname=='leaves2'){
var variant={oak:0,spruce:1,birch:2,jungle:3,
acacia:4,/*log2*/dark_oak:5/*log2*/}
if(variant[nbtPro.variant.value]==undefined){nbtid[a]=0;}else{nbtid[a]=variant[nbtPro.variant.value]};
if(nbtname=='log'||nbtname=='log2'){if(nbtPro.axis.value=='x'){nbtid[a]+=4};if(nbtPro.axis.value=='z'){nbtid[a]+=8};};
};
//-----
if(nbtname=='ladder'){
var facing={north:2,south:1,west:4,east:5};
if(facing[nbtPro.facing.value]==undefined){nbtid[a]=0;}else{nbtid[a]=facing[nbtPro.facing.value]}
};
//-----梯子
//
if(nbtname.indexOf('torch')>=0){
var facing={up:5,north:4,south:3,west:2,east:1}
if(facing[nbtPro.facing.value]==undefined){nbtid[a]=0;}else{nbtid[a]=facing[nbtPro.facing.value]}
};
//---火把
//
if(nbtname.indexOf('_slab')>=0){
var variant={
 smooth_stone: 0 ,
  sandstone: 1 ,
  petrified_oak: 2 ,
  cobblestone: 3 ,
  brick: 4 ,
  stone_brick: 5 ,
  nether_brick: 6 ,
  quartz:7 ,
  red_sandstone: 0 ,
  purpur: 1 ,
  prismarine: 2 ,
  prismarine_brick: 3 ,
  dark_prismarine: 4 ,
  end_stone_brick: 0 ,
  smooth_red_sandstone: 1 ,
  polished_andesite: 2 ,
  andesite: 3 ,                                             
  diorite: 4 ,
  polished_diorite: 5 ,
  granite: 6 ,
  polished_granite:7 ,
  mossy_stone_brick: 0 ,
  mossy_cobblestone: 0 ,
  smooth_quartz: 1 ,
  stone: 2 ,
  cut_sandstone: 3 ,
  cut_red_sandstone: 4 ,
  oak: 0 ,
  spruce:1 ,
  birch: 2 ,
  jungle: 3 ,
  acacia: 4 ,
  dark_oak: 5 ,
}
if(variant[nbtPro.variant.value]==undefined){nbtid[a]=0;}else{nbtid[a]=variant[nbtPro.variant.value]};

if(nbtPro.half!=undefined&&nbtPro.half.value=='top'){nbtid[a]+=8;}


};
//台阶


if(nbtname=='bed'){
var facing={north:2,south:0,west:5,east:1};
if(facing[nbtPro.facing.value]==undefined){nbtid[a]=0;}else{nbtid[a]=facing[nbtPro.facing.value]}
};





}};//for
 for(i=0;i<block.value.blocks.value.value.length;i++) { 
    var xs=block.value.blocks.value.value[i].pos.value.value[0]//x
    var y=block.value.blocks.value.value[i].pos.value.value[1]//y
    var z=block.value.blocks.value.value[i].pos.value.value[2]//z
    var nbtpos=[xs,y,z]
    var nbtname=(block.value.palette.value.value[block.value.blocks.value.value[i].state.value].Name.value).replace('minecraft:','')
     
   if(nbtname!=='air'){nbtsch.push('setblock '+(nbtpos[0]+xyz[0])+' '+(nbtpos[1]+xyz[1])+' '+(nbtpos[2]+xyz[2])+' '+nbtname+' '+nbtid[block.value.blocks.value.value[i].state.value])};
    
}

command('say §aYes:§e读取成功')    
setblock(nbtsch)
}else{command('say §4Error:§e文件格式错误：你是不是认不清啥玩意是nbt')}


}/*else*/})/*sch*/}/*else*/})




    
};








if(me.body.properties.Message.substr(0,9)=='block -k '&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
block=me.body.properties.Message.substr(9).split(' ');
if(block.length==2){
if(block[0].indexOf('~')>=0&&block[1].indexOf('~')>=0){
block[5]=Number((block[1].split('~'))[2]);
block[4]=Number((block[1].split('~'))[1]);
block[3]=Number((block[1].split('~'))[0]);

block[2]=Number((block[0].split('~'))[2]);
block[1]=Number((block[0].split('~'))[1]);
block[0]=Number((block[0].split('~'))[0]);
if(String(block[0])=='NaN'||String(block[1])=='NaN'||String(block[2])=='NaN'||String(block[3])=='NaN'||String(block[4])=='NaN'||String(block[5])=='NaN'){
command('say §4Error:§e格式不正确!§ablock -k 数~数~数 数~数~数');
}else{


var x2;
if(block[0]>block[3]){x2=block[3];block[3]=block[0];block[0]=x2;};
if(block[1]>block[4]){x2=block[4];block[4]=block[1];block[1]=x2;};
if(block[2]>block[5]){x2=block[5];block[5]=block[2];block[2]=x2;};

command('say §e'+block)
var blocks=xyzblock.xyz(block);
var blockx=[];
for(i=0;i<blocks.length;i++){
blockx.push('testforblock '+blocks[i][0]+' '+blocks[i][1]+' '+blocks[i][2]+' air')
};
blocks=[];
command('say §e初始指令'+blockx.length)
for(d=0;d<Gear;d++){
blockx.push(blockx[0])
};
command('say §a优化指令'+blockx.length)
setblock(blockx);
Repfalse=true;


};
}else{command('say §4Error:§e格式不正确!§ablock -k 数~数~数 数~数~数')}//if
}else{command('say §4Error:§e格式不正确!§ablock -k 数~数~数 数~数~数')}//if



};//if
//--------------------------------------
if(me.body.properties.Message.substr(0,10)=='blocks -n '&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
var zmkn=Number(me.body.properties.Message.substr(10))
for(i=0;i<boxc1.length;i++){
boxc1[i]+=zmkn;
};//for
command('say §e加快了'+zmkn+'方块')
};

if(me.body.properties.Message=='-blocks'&&me.body.properties.MessageType=='chat'){ 		 	 		  		 	
fs.readFile('./进度条文件/进度.txt','utf-8',(error,data)=>{
if(error){command('say §4Error:§e进度条文件似乎失踪了')};
if(!error){command('say §aYes:§e上次进度为- §aX:'+data.split('\n')[0].split(',')[0]+' Y:'+data.split('\n')[0].split(',')[1]+' Z:'+data.split('\n')[0].split(',')[2]+' §e进度:'+data.split('\n')[1])}
})};



if(me.body.properties.Message.substr(0,8)=='pixe -z '&&me.body.properties.MessageType=='chat'){
var pixey=8;
if(me.body.properties.Message.substr(8,3)=='-y '){
pixey=11
}
if(me.body.properties.Message.substr(pixey).indexOf('.png')>=0||me.body.properties.Message.substr(8).indexOf('.jpg')>=0){command('say §a§l读取中...\n§s'+me.body.properties.Message.substr(pixey))}
else{command('say §4Error:§e图片格式错误!')}
//getPixels
 require("get-pixels")(me.body.properties.Message.substr(pixey), function(err, pixels) {
  if(err) {command('say §4Error:路径错误！')}
  else{
  	var data= pixels.data;
  var rgb = [];
  var datas = [];
  for (var i = 0; i < data.length; i++) {
  datas.push(data[i]);
   if (i != 0 && (i + 1) % 4 == 0) {
   rgb.push(datas);datas=[];
  }
  }//for
  var rgbs=[];
  var rgbx=0;
  for (var xs = 0; xs <pixels.shape[1]; xs++) {
  	for (var z = 0; z <pixels.shape[0]; z++){
  	if(pixey==11){rgbs.push([[0,-xs,-z],[rgb[rgbx][0],rgb[rgbx][1],rgb[rgbx][2]]])}
    else{rgbs.push([[z,0,xs],[rgb[rgbx][0],rgb[rgbx][1],rgb[rgbx][2]]])}
  		if(rgb[rgbx][3]==0){rgbs.pop()}
  		rgbx++
  		}}
  		rgb=[]


for(var c=0;c<rgbs.length;c++){

//var rsgsbs=['stone',255,255,255];
var rsgsbsb=[];
for(var is=0;is<colors.length;is++){

var r=Math.abs(rgbs[c][1][0]-colors[is][0])
var g=Math.abs(rgbs[c][1][1]-colors[is][1])
var b=Math.abs(rgbs[c][1][2]-colors[is][2])


//if(r==NaN&&g==NaN&&b==NaN){rgbs[c][1]=colors[is][3];break;};
//if(rgbs[c][1][0]==colors[is][0]&&rgbs[c][1][1]==colors[is][1]&&rgbs[c][1][2]==colors[is][2])

/*
{rgbs[c][1]=colors[is][3];break;}
else if(r<rsgsbs[1]&&g<rsgsbs[2]&&b<rsgsbs[3]){rsgsbs=[colors[is][3],r,g,b]}
if(is==(colors.length-1)){rgbs[c][1]=rsgsbs[0];}
*/
 rsgsbsb.push((r*r)+(g*g)+(b*b));
};
 rgbs[c][1]=colors[rsgsbsb.indexOf(Math.min.apply(null, rsgsbsb))][3]
 



rgb.push('setblock '+(xyz[0]+rgbs[c][0][0])+' '+(xyz[1]+rgbs[c][0][1])+' '+(xyz[2]+rgbs[c][0][2])+' '+rgbs[c][1])
};

var rgbjoin=[]
for(j=0;j<rgb.length;j++){
var rgbjoins=[
rgb[j].split(' ')[0],//setblock
rgb[j].split(' ')[1],//x
rgb[j].split(' ')[2],//y
rgb[j].split(' ')[3],//z
rgb[j].split(' ')[4],//方块
rgb[j].split(' ')[5]//特值
]
rgbjoin.push(rgbjoins[0]+' ~'+(xyz[0]-rgbjoins[1])+' ~'+(xyz[1]-rgbjoins[2])+' ~'+(xyz[2]-rgbjoins[3])+' '+rgbjoins[4]+' '+rgbjoins[5])
}
fs.writeFile('./funpixe.mcfunction',rgbjoin.join('\n'),(error,data)=>{
console.log('funpixe.mcfunction完毕')
});
command('say §a指令生成完毕..§b排序中: '+rgb.length)
if(rgb.length>100000){
var rgbq={}
for(r=0;r<pixels.shape[0];r++){
rgbq[r]=rgb.slice(0,pixels.shape[0])
rgb.splice(0,pixels.shape[0])//删除
};
var rgbq1={
0:[],
1:[],
2:[],
3:[],
//
4:[],
5:[],
6:[],
7:[],
//
8:[],
9:[],
10:[],
11:[],
}

for(w in rgbq){
rgbq1[0]=rgbq1[0].concat(rgbq[w].slice(0,rgbq[w].length/4))
rgbq[w].splice(0,rgbq[w].length/4)//删除
rgbq1[1]=rgbq1[1].concat(rgbq[w].slice(0,rgbq[w].length/3))
rgbq[w].splice(0,rgbq[w].length/3)//删除
rgbq1[2]=rgbq1[2].concat(rgbq[w].slice(0,rgbq[w].length/2))
rgbq[w].splice(0,rgbq[w].length/2)//删除
rgbq1[3]=rgbq1[3].concat(rgbq[w])
rgbq[w]=null;
};

rgbq1[4]=rgbq1[0].slice(0,rgbq1[0].length/3)
rgbq1[0].splice(0,rgbq1[0].length/3)//删除
rgbq1[8]=rgbq1[0].slice(0,rgbq1[0].length/2)
rgbq1[0].splice(0,rgbq1[0].length/2)//删除

rgbq1[5]=rgbq1[1].slice(0,rgbq1[1].length/3)
rgbq1[1].splice(0,rgbq1[1].length/3)//删除
rgbq1[9]=rgbq1[1].slice(0,rgbq1[1].length/2)
rgbq1[1].splice(0,rgbq1[1].length/2)//删除

rgbq1[6]=rgbq1[2].slice(0,rgbq1[2].length/3)
rgbq1[2].splice(0,rgbq1[2].length/3)//删除
rgbq1[10]=rgbq1[2].slice(0,rgbq1[2].length/2)
rgbq1[2].splice(0,rgbq1[2].length/2)//删除

rgbq1[7]=rgbq1[3].slice(0,rgbq1[3].length/3)
rgbq1[3].splice(0,rgbq1[3].length/3)//删除
rgbq1[11]=rgbq1[3].slice(0,rgbq1[3].length/2)
rgbq1[3].splice(0,rgbq1[3].length/2)//删除

/*
0 4 8
1 5 9
2 6 10
3 7 11

4 8 0
5 9 1
6 10 2
7 11 3

4 5 6 7
8 9 10 11
0 1 2 3

竖顺序 4 8 0 5 9 1 2 10 6 7 11 3
横     4 5 2 7 11 10 9 8 0 1 6 3
*/
for(g=0;g<12;g++){
var gg=rgbq1[g][rgbq1[g].length-1].split(' ')
var gg1=rgbq1[g][0].split(' ')
var gg2=[(gg[1]-gg1[1])/2,(gg[2]-gg1[2])/2,(gg[3]-gg1[3])/2]
rgbq1[g].unshift('tp @s '+(Number(gg1[1])+gg2[0])+' '+(Number(gg1[2])+gg2[1]+10)+' '+(Number(gg1[3])+gg2[2]))

};
command('say §b\n'+rgbq1[0][0]+'\n'+rgbq1[1][0]+'\n'+rgbq1[2][0]+'\n'+rgbq1[3][0]+'\n'+rgbq1[4][0]+'\n'+rgbq1[5][0]+'\n'+rgbq1[6][0]+'\n'+rgbq1[7][0]+'\n'+rgbq1[8][0]+'\n'+rgbq1[9][0]+'\n'+rgbq1[10][0]+'\n'+rgbq1[11][0]+'\n')

rgb=rgbq1[4].concat(rgbq1[5],rgbq1[6],rgbq1[7],rgbq1[11],rgbq1[10],rgbq1[9],rgbq1[8],rgbq1[0],rgbq1[1],rgbq1[2],rgbq1[3])
rgbq1=null;
rgbq=null;
//rgb=rgbq[0]
}//条件有200方块
setblock(rgb)
rgb=[];rgbs=[];rgbx=0;
}/*else*/})//getPixels

};//pixe






};//管理员锁

say=false;
setTimeout(function(){say=true},500)

// 
 };//say区------------------__________--------
 
 
 
 
 
 
 
 
 
 
 
 

/*
header: 
   { messagePurpose: 'error',
     requestId: '00000000-0000-0000-0000-000000000001',
     version: 1 } }
     */

function cmdF(Purpose,requestId){

if(Purpose=='error'&&requestId.indexOf('00000000-0000-0000-0000-')>=0){
if(requestId=="00000000-0000-0000-0000-000000000000"||requestId=="00000000-0000-0000-0000-900000000001"||requestId=="00000000-0000-0000-0000-990000000001"){ 

}else{

if(boxc.length>0){
command2('/title @s actionbar §4error:§e'+boxc[boxc1[Number(requestId.split('-')[4])-1]]+'- -'+boxc1[Number(requestId.split('-')[4])-1]+'\n'+requestId+'\n~~~'+JSON.stringify(me.body)+' ')

	x.sendText(JSON.stringify({
  "body": {
 "origin": {"type": "player"},
 "commandLine": Rep+boxc[boxc1[Number(requestId.split('-')[4])-1]],
 "version": 1
 },
 "header": {
 "requestId": requestId,
 "messagePurpose": "commandRequest",
 "version": 1,
 "messageType": "commandRequest"
 }
 }));
}//if 

};//else
};//if

if(Purpose=='commandResponse'&&requestId.indexOf('00000000-0000-0000-0000-')>=0){

if(requestId=="00000000-0000-0000-0000-000000000000"||requestId=="00000000-0000-0000-0000-900000000001"||requestId=="00000000-0000-0000-0000-990000000001"){ 


}else{


if(boxc.length>0){

//if(boxc1[Number(requestId.split('-')[4]-1)]>=boxc.length){cmds=boxc=[];boxc1=[];command('title @s actionbar §e指令执行完毕');};

fs.writeFile('./进度条文件/进度.txt',xyz+'\n'+boxc1[boxc1.length-1])







/*
{"matches":true,
"position":{"x":62,"y":4,"z":-157},
"statusCode":0,
"statusMessage":"成功找到了位于 62,4,-157 的方块。"}

{ matches: false,
  position: { x: -19, y: 9, z: -3 },
  statusCode: -2147352576,
  statusMessage: '位于-19,9,-3 的方块拥有数据值 0 ( 预定：1)。' }
 
{"matches":false,
"position":{"x":62,"y":4,"z":-158},
"statusCode":-2147352576,
"statusMessage":"位于 62,4,-158 的方块为 海晶灯 ( 预定：空气)"}
*/


if(Repfalse==true&&me.body.matches==false){
var setname=me.body.statusMessage.split(' ')[3]
if(setname.indexOf('楼梯')>=0||setname.indexOf('阶梯')>=0||setname.indexOf('台阶')>=0||setname.indexOf('羊毛')>=0||setname.indexOf('地毯')>=0||setname.indexOf('木')==(setname.length-1)||setname.indexOf('火把')>=0){
Reps.push('testforblock '+me.body.position.x+' '+me.body.position.y+' '+me.body.position.z+' '+blockn.block(setname))
Repss.push([me.body.position.x,me.body.position.y,me.body.position.z,blockn.block(setname),0])

}else{
Repb.push('setblock ~'+((me.body.position.x-block[0])+1)+' ~'+((me.body.position.y-block[1])+1)+' ~'+((me.body.position.z-block[2])+1)+' '+blockn.block(setname))
};//else
};//if
if(Reptrue==true&&me.body.matches==false){
var setname=Number(me.body.statusMessage.split(' ')[2])
Repsss.push([me.body.position.x,me.body.position.y,me.body.position.z,'无',setname])

};




boxc1[Number(requestId.split('-')[4])-1]+=Gear;
var 延迟=(boxc1[0]/((new Date().getTime()-datatime)/1000)).toFixed(3)

if(延迟<17){延迟='\n§4延迟: 过高！§r'}
if(延迟<25&&延迟>17){延迟='\n§4延迟: 较高！§r'}
if(延迟<35&&延迟>25){延迟='\n§4延迟: 轻微~§r'}
if(延迟<45&&延迟>35){延迟='\n§a延迟: 细微~§r'}
if(延迟<55&&延迟>45){延迟='\n§a延迟: 良好§r'}
if(延迟<65&&延迟>55){延迟='\n§a延迟: 优！§r'}
if(延迟<75&&延迟>65){延迟='\n§a延迟: 高优！§r'}
if(延迟<85&&延迟>75){延迟='\n§a延迟: 无延迟！§r'}
if(延迟>85){延迟='\n§a延迟: 延迟是啥玩意？！§r'}
if(Gear<9){延迟='\n§a延迟： 未知'}
command2('title @s actionbar §e§l总:§a'+boxc.length+'§4/§e§l度'+boxc1[boxc1.length-1]+'\n§b速度: '+(boxc1[0]/((new Date().getTime()-datatime)/1000)).toFixed(3)+延迟)

	x.sendText(JSON.stringify({
  "body": {
 "origin": {"type": "player"},
 "commandLine": Rep+boxc[boxc1[Number(requestId.split('-')[4])-1]],
 "version": 1
 },
 "header": {
 "requestId": requestId,
 "messagePurpose": "commandRequest",
 "version": 1,
 "messageType": "commandRequest"
 }
 }));
  if(boxc1[Number(requestId.split('-')[4]-1)]>=boxc.length&&Reptrue==true){
for(i=0;i<Repss.length;i++){
for(c=i+1;c<Repss.length;c++){
if(Repss[i]==Repss[c]){
Repss.splice(c,1)
c--;
}}};
for(i=0;i<Repsss.length;i++){
for(c=i+1;c<Repsss.length;c++){
if(Repsss[i]==Repsss[c]){
Repsss.splice(c,1)
c--;
}}};



for(a=0;a<Repss.length;a++){
for(b=0;b<Repsss.length;b++){
if(Repss[a][0]==Repsss[b][0]&&Repss[a][1]==Repsss[b][1]&&Repss[a][2]==Repsss[b][2]){
Repss[a][4]=Repsss[b][4];
};

};};




Reps=[];
Repsss=[];
for(e=0;e<Repss.length;e++){
if(String(Repss[e][4])=='NaN'){Repss[e][4]=0;Repss[e][3]='quartz_block 0'};
Repss[e]='setblock ~'+(Repss[e][0]-block[0]+1)+' ~'+(Repss[e][1]-block[1]+1)+' ~'+(Repss[e][2]-block[2]+1)+' '+Repss[e][3].split(' ')[0]+' '+Repss[e][4]

};
fs.appendFile('./funblock.mcfunction',Repss.join('\n'),(e)=>{
if(!e){Repss=[];command('say §aYes!:§e二次写入指令完毕');}
})
Reptrue=false;


};
 if(boxc1[Number(requestId.split('-')[4]-1)]>=boxc.length&&Repfalse==true){

command('say §e正在去除重复指令...')
for(i=0;i<Repb.length;i++){
for(c=i+1;c<Repb.length;c++){
if(Repb[i]==Repb[c]){
Repb.splice(c,1)
c--;
}}};
command('say §e去除完毕：共§a'+Repb.length+'§e条')
fs.appendFile('./funblock.mcfunction',Repb.join('\n'),(e)=>{
if(!e){fs.appendFile('./funblock.mcfunction','\n')}//防二次写入少一指令
});
 
Repfalse=false;
 command('say §aYes:§e写入完毕，文件名字为funblock.mcfunction:-§4'+Repfalse)

if(Reps.length>0){
command('say §4?Error?:检测到特殊值方块，重新写入中');
for(i=0;i<Reps.length;i++){
for(c=i+1;c<Reps.length;c++){
if(Reps[i]==Reps[c]){
Reps.splice(c,1)
c--;
}}};
for(r=0;r<Gear+10;r++){
Reps.push(Reps[0])
};


Reptrue=true;
setTimeout(function(){
setblock(Reps);
},1000)



};


};


 
 if(boxc1[Number(requestId.split('-')[4]-1)]>=boxc.length){cmds=boxc=[];boxc1=[];Repfalse=false;command('title @s actionbar §e指令执行完毕\n§4true');};
 
 
}//if 
if(boxc.length==0&&Cycle==1&&boxa.length>0){boxc=boxa;for(i=0;i<Gear;i++){boxc1.push(i);}}; 



 
};//else 

}};

cmdF(messagePurpose,requestId)

  






if(messagePurpose=='commandResponse'&&requestId=='00000000-0000-0000-0000-900000000001'){



 
//-------------
if(get==true){
//开启后如果有返回的信息有坐标信息，则储存
if(me.body.matches==true){
xyz[0]=me.body.position.x
xyz[1]=me.body.position.y
xyz[2]=me.body.position.z
command('say §e坐标为:'+xyz+'')
fs.writeFile('./进度条文件/进度.txt',xyz+'\n'+boxc1.join('\n'))
get=false
}
}
//----------
console.log(me)
//-------------
if(gets==1){
//开启后如果有返回的信息有坐标信息，则储存
if(me.body.matches==true){
var pos=[me.body.position.z,me.body.position.x]
pos[0]>=0?pos[0]=pos[0]-pos[0]%128+64:pos[0]=pos[0]-pos[0]%128-64;
pos[1]>=0?pos[1]=pos[1]-pos[1]%128+64:pos[1]=pos[1]-pos[1]%128-64;
command('tp @s '+pos[0]+' 2 '+pos[1])
setTimeout(function(){gets=2;},30)
}}
//-------------
//-------------
if(gets==2&&me.body.destination.x){
gets=5
setTimeout(function(){
gets=3;
command('gettopsolidblock ~ 150 ~')
},300)

}

if(gets==3){
//开启后如果有返回的信息有坐标信息，则储存
if(me.body.blockData==0){

command('say §e坐标为: §aX: '+me.body.position.x+' Y: '+(me.body.position.y+3)+' Z: '+me.body.position.z)
command('tp @s '+me.body.position.x+' '+(me.body.position.y+3)+' '+me.body.position.z)
gets=0
}
}
//----------



//----------

//----------
//-------------
if(test==true){
//开启后如果有返回的信息有坐标信息，则储存
if(me.body.matches==true){
xyz[0]=me.body.position.x
xyz[1]=me.body.position.y
xyz[2]=me.body.position.z
command('say §e坐标为:'+xyz+'')
test=false

}
}
//----------
//----------
//func//开启后把me.bod的信息say出来
if(func==true){
command('say §e'+JSON.stringify(me.body))
//fs.appendFile('./指令返回表.txt',JSON.stringify(me.body)+'\n\n\n\n\n',(e,d)=>{if(!e){command('say §e写入完毕')}});





func=false
}
//-------

//-------
if(xname==true){
if(me.body.victim){
 xname=me.body.victim[0]
 command('say §e操作员为：§a'+xname)
 }
}




};//cmd



									
	
//---------				
		


				if(Cycle==1&&times==false){
		times=true;
var time=setInterval(()=>{
command('/title @s actionbar  §e循环进程保护运行中:§4true');  
if(Cycle==0){times=false;clearInterval(time);}; 
    },6666);	
    
}		
		
		
		
		
		
		
		
		
		})
x.on('pong',(pon)=>{
console.log(pon)

})	

x.on('binary',(bin)=>{
console.log(bin)

})	 
		
	}).listen(6464)

console.timeEnd("启动速度: ");


