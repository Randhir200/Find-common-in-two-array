var n=4;
var str='aman';
var obj={};
for(var i=0;i<n;i++){
    if(obj[str[i]]==undefined){
        obj[str[i]]=1; 
    }else{
        obj[str[i]]++;
    }
}

for(var i in obj){
    console.log(i,"-", obj[i]);
}