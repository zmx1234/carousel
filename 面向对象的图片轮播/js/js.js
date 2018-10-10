/*
	1. 获取所有的大图
	2. 求大图的数量
	3. ol li (小圆点)   左按钮   右按钮   文字信息的div
	4. 设置轮播   当前下标
	5. 添加事件
	6. 自动轮播
	
*/
function Slider(id){
	this.bigBox=document.getElementById(id);
	this.ulList=this.bigBox.children[0].children;
	this.num=this.ulList.length;
	this.olist=this.create();
	this.indexA=0;
	this.div=document.getElementById("msg");
	this.slide();
	this.ltBtn=document.getElementById("leBtn");
	this.rtBtn=document.getElementById("rtBtn");
	this.addaotu();
}
Slider.prototype={
	create:function(){
		var ol=document.createElement("ol");
		var arr=[];
		for(var i=0; i<this.num; i++){
			var li=document.createElement("li");
			ol.appendChild(li);
			arr.push(li);
		}
		this.bigBox.appendChild(ol);
		var lspan=document.createElement("span");
		lspan.innerHTML="&lt;";
		lspan.id="ltBtn";
		this.bigBox.appendChild(lspan);
		var rspan=document.createElement("span");
		rspan.innerHTML="&gt;";
		rspan.id="rtBtn";
		this.bigBox.appendChild(rspan);
		var div=document.createElement("div");
		div.id="msg";
		this.bigBox.appendChild(div);
		return arr;
	},
	slide :function(){
		for(var i=0; i<this.num; i++){
			this.ulList[i].style.display="none";
			this.olist[i].style.backgroundColor="red";
		}
		this.ulList[this.indexA].style.display="block";
		this.olist[this.indexA].style.backgroundColor="blue";
		this.div.innerHTML=this.ulList[this.indexA].firstChild.firstChild.alt;
	},
	addaotu:function(){
		var that=this;
		that.ltBtn.onclick=function(){
			indexA--;
			
		}
	}
}
