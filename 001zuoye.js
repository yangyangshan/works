//数组forEach方法补丁
Array.prototype.forEach = function(callback){
	var a = 0,
		len = this.length;
	while(a < len){
		callback(this[a], a++, this);
	}
};
//数组map方法补丁
Array.prototype.map = function(callback){
	var a = 0,
		len = this.length,
		result = [];
	while(a < len){
		result.push(callback(this[a], a++, this));
	}
	return result;
};
//数组map方法补丁
Array.prototype.filter = function(callback){
	var a = -1,
		len = this.length,
		result = [];
	while(++a < len){
		callback(this[a], a, this) && result.push(this[a]);
	}
	return result;
};
var dataimg=[
	{
		title:"腾讯",
		url:"./images/1418606363118.jpg",
		href:"https://www.baidu.com"
	},
	{
		title:"百度",
		url:"./images/F14UT1K6T7AE_32.jpg",
		href:"https://nuomi.baidu.com"
	},
	{
		title:"谷鸽",
		url:"./images/001c25ddb51a197913dc46.jpg",
		href:"https://tieba.baidu.com"
	}
];
function lunbo(dataimg){
	function lunbotu(href,url){
		var pic=document.createElement("a");
			pic.href=href;
			pic.style.backgroundImage="url("+url+")";
			return pic;
	}
	var imagesall=document.createElement("div");
		imagesall.className="mainleftimg";
	var images=dataimg.map(function(item){
		var img=lunbotu(item.href,item.url);
		imagesall.appendChild(img);
		return img;
		});
	var a=0,
    imageslen=dataimg.length,
	imagesindex=dataimg.length-1;
	images[0].className="current";
	var timer=setInterval(function(){
		var a1=a;
		a = a >= imagesindex ? 0 : a+1;
		images[a1].className="currentmove";
		images[a].className="current";
	},5000);
	var lefter=document.createElement("div");
		lefter.className="lefter";
	lefter.onclick=function(){
		var a1=a;
		if(a==0){
			a=imagesindex ;
			images[a1].className="currentmove";
			images[a].className="current";
		}else{
			a = a <= imagesindex  ? a-1: 0 ;
		images[a1].className="currentmove";
		images[a].className="current";			
		}	
	}
	var righter=document.createElement("div");
		righter.className="righter";
	righter.onclick=function(){
	var a1 = a; 
	a = a >= imagesindex  ? 0 : a + 1;
	images[a1].className="currentmove";
	images[a].className="current";	
	}
	var Fragment=document.createDocumentFragment(); 
	imagesall.appendChild(righter);
	imagesall.appendChild(lefter);
	Fragment.appendChild(imagesall);
	document.getElementById("mainleft").appendChild(Fragment);
	}
	lunbo(dataimg);
