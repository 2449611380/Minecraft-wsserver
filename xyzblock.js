var xyzblock=new Object();

xyzblock.xyz=function (x){

var xxx=[]
var x1=x;
var x2;
if(x1[0]>x1[3]){x2=x1[3];x1[3]=x1[0];x1[0]=x2;};
if(x1[1]>x1[4]){x2=x1[4];x1[4]=x1[1];x1[1]=x2;};
if(x1[2]>x1[5]){x2=x1[5];x1[5]=x1[2];x1[2]=x2;};

for(c=x1[1];c<=x1[4];c++){
for(i=x1[0];i<=x1[3];i++){
for(a=x1[2];a<=x1[5];a++){	
		
		xxx.push([i,c,a])			
								}}}
return xxx
  





};











module.exports=xyzblock
console.log('Yes:遍历模块完毕:true')