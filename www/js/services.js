angular.module('starter.services', [])
//轮播图数据
.factory("mybannerImg",function(){
	var bannerImg=[
	    {id:0,Cpic:'img/0.jpg'},
	    {id:1,Cpic:'img/1.jpg'},
	    {id:2,Cpic:'img/2.jpg'}
	]
	return {
		all:function(){
			return bannerImg;
		}
		
	}
	
})
//推荐商品数据
.factory("myrecommend",function(){
	var recommend=[
	    {id:0,Cpic1:'img/33_20.png'},
	    {id:1,Cpic2:'img/33_21.png'},
	    {id:2,Cpic3:'img/33_22.png'}
	]
	return {
		all:function(){
			return recommend;
		}
		
	}
	
})

//新款上市数据
.factory("mynewproduct",function(){
	var newproduct=[[
	   {id:0,Cpic:'img/44_03.png',Cname:'天宝来涛福水机黑陶晶',price:'￥385.00',oprice:'￥385.00'},
	   {id:0,Cpic:'img/44_05.png',Cname:'蓝帽钙/增加骨密度胶囊',price:'￥248.00',oprice:'￥248.00'}],
	   
	   [{id:0,Cpic:'img/44_03-10.png',Cname:'天宝来涛福水机前置机',price:'￥385.00',oprice:'￥385.00'},
	   {id:0,Cpic:'img/44_03-12.png',Cname:'美韵生芦荟健齿全效牙膏120g芦荟精华',price:'￥29.80',oprice:'￥29.80'}]
	]
	return {
		all:function(){
			return newproduct;
		}
		
	}
})

//底部数据加载
.factory("myfooter",function(){
	var footerData=[
	    [{id:0,Cpic:'img/55_03.png',Cname:'黑茶',Cdescrite:'精品茶饮'},
	    {id:1,Cpic:'img/55_05.png',Cname:'酒水饮料',Cdescrite:'酒水饮料'}],
	    
	    [{id:2,Cpic:'img/55_09-10.png',Cname:'家纺布艺',Cdescrite:'家纺布艺'},
	    {id:3,Cpic:'img/55_10.png',Cname:'珠宝首饰',Cdescrite:'珠宝首饰'}],
	    
	    [{id:4,Cpic:'img/55_15.png',Cname:'时尚饰品',Cdescrite:'时尚饰品'},
	    {id:5,Cpic:'img/55_16.png',Cname:'保健食品',Cdescrite:'保健食品'}]

	]
	return {
		all:function(){
			return footerData;
		}
		
	}
	
	
})

//分类数据加载
.factory("myclassify",function(){
	var classData=[
	    {ID:'a',Cname:'茶叶饮品',teaData:[
	    	{id:1,classname:"黑茶"},{id:2,classname:"绿茶"},{id:3,classname:"红茶"},{id:4,classname:"奶茶"},{id:5,classname:"酒水饮料"}
	    ]},
	    {ID:'b',Cname:'数码手机',teaData:[
	    	{id:7,classname:"手机"},{id:8,classname:"笔记本"},{id:9,classname:"相机"},{id:10,classname:"电脑周边"},{id:11,classname:"3c配件"}
	    ]},
	    {ID:'c',Cname:'数码办公',teaData:[
	    	{id:13,classname:"大家电"},{id:14,classname:"厨房电器"},{id:15,classname:"生活电器"},{id:16,classname:"办公耗材"},{id:17,classname:"电教文具"}
	    ]},
	    {ID:'d',Cname:'家居家纺',teaData:[
	    	{id:19,classname:"床上用品"},{id:20,classname:"家具"},{id:21,classname:"家纺布艺"},{id:22,classname:"特色工艺"},{id:23,classname:"家居饰品"}
	    ]},
	    {ID:'e',Cname:'护肤化妆',teaData:[
	    	{id:24,classname:"个人护理"},{id:25,classname:"美容护肤"},{id:26,classname:"强效保养"},{id:27,classname:"品牌香水"},{id:28,classname:"特色彩妆"}
	    ]},
	    {ID:'f',Cname:'服饰鞋帽',teaData:[
	    	{id:29,classname:"T恤"},{id:30,classname:"衬衫"},{id:31,classname:"裤子"},{id:32,classname:"帽子"},{id:33,classname:"鞋子"}
	    ]},
	    {ID:'g',Cname:'食品特色',teaData:[
	    	{id:34,classname:"休闲零食"},{id:35,classname:"土特产"},{id:36,classname:"粮油米面"},{id:37,classname:"生疏鲜果"}
	    ]},
	    {ID:'h',Cname:'美食餐饮',teaData:[
	    	{id:39,classname:"大酒店"},{id:40,classname:"小吃"}
	    ]},
	    {ID:'i',Cname:'箱包户外',teaData:[
	    	{id:44,classname:"户外运动"},{id:45,classname:"运动服饰"},{id:46,classname:"旅行箱"}
	    ]},
	    {ID:'j',Cname:'妇幼母婴',teaData:[
	    	{id:49,classname:"童装童鞋"},{id:50,classname:"婴童用品"},{id:51,classname:"奶粉辅食"},{id:52,classname:"益智玩具"},{id:53,classname:"孕产必备"}
	    ]},
	     {ID:'k',Cname:'日用百货',teaData:[
	    	{id:54,classname:"生活洗护"},{id:55,classname:"餐饮用具"},{id:56,classname:"整理收纳"},{id:57,classname:"家庭清洁"}
	    ]},
	     {ID:'l',Cname:'家装建材',teaData:[
	    	{id:58,classname:"灯具照明"},{id:59,classname:"五金工具"},{id:60,classname:"厨房卫浴"},{id:61,classname:"设计施工"},{id:62,classname:"电子电工"},{id:63,classname:"装修建材"}
	    ]},
	     {ID:'m',Cname:'珠宝配饰',teaData:[
	    	{id:64,classname:"珠宝首饰"},{id:65,classname:"品牌手表"},{id:66,classname:"眼镜配饰"},{id:67,classname:"时尚饰品"},{id:68,classname:"男人饰品"}
	    ]},
	     {ID:'n',Cname:'汽车摩托',teaData:[
	    	{id:69,classname:"内饰外饰"},{id:70,classname:"保养清洗"},{id:71,classname:"低配升级"},{id:72,classname:"汽车服务"},{id:73,classname:"配件"},{id:74,classname:"电子影音"}
	    ]},
	     {ID:'o',Cname:'花鸟宠物',teaData:[
	    	{id:75,classname:"绿植园艺"},{id:76,classname:"水族世界"}
	    ]},
	     {ID:'p',Cname:'健康食品',teaData:[
	    	{id:77,classname:"保健食品"},{id:78,classname:"外用保健"},{id:79,classname:"医用处方"}
	    ]},
	     {ID:'q',Cname:'本地生活',teaData:[
	    	{id:80,classname:"吃喝玩乐"},{id:81,classname:"便民服务"},{id:82,classname:"居家必备"}
	    ]}
	
	
	]
	return {
		all:function(){
			return classData;
		}
		
	}
})

//天尖茶数据加载
.factory("myskytea",function(){
	var skytea=[
	    {id:83,className:"天尖",skyTea:[
	        [{id:100,Cdescribe:"一年制安化美韵生黑茶筒装特技天尖400g/健康茶/瘦身茶",Cprice:'￥238.00',Cpic:'img/66_03.png'},
	        {id:101,Cdescribe:"两年制湖南安化美韵生黑茶筒装特技天尖400g",Cprice:'￥288.00',Cpic:'img/66_03-05.png'}],
	        [{id:102,Cdescribe:"礼盒装特级天尖  安化美韵生煮茶  一年制茶具  健康减肥茶",Cprice:'￥488.00',Cpic:'img/66_10.png'},
	        {id:103,Cdescribe:"安化美韵生黑茶  两年制  礼盒装特级天尖  降脂养生茶",Cprice:'￥588.00',Cpic:'img/66_12.png'}],
	        [{id:104,Cdescribe:"三年制  礼盒装特级天尖  安化美韵生黑茶  越醇越香",Cprice:'￥690.00',Cpic:'img/77_03.png'},
	        {id:105,Cdescribe:"安化美韵生黑茶  一年制  盒装特级天尖100g 养胃护肝",Cprice:'￥60.00',Cpic:'img/77_05.png'}],
	        [{id:106,Cdescribe:"两年制  安化美韵生黑茶  盒装特级天尖100g 活血美容茶",Cprice:'￥75.00',Cpic:'img/77_09.png'},
	        {id:107,Cdescribe:"两年制  安化美韵生黑茶  盒装特级天尖100g 排毒养颜",Cprice:'￥90.00',Cpic:'img/77_10.png'}]
	    ]}
	
	
	
	
	]
	return {
		all:function(){
			return skytea;
		}
		
	}
	
})

.factory("myclassNav",function(){
	var classNav=[
	    {id:1,classname:"黑茶",blacktea:[{id:83,className:'天尖'},{id:84,className:'千两花卷茶'},{id:85,className:'百两茶'},{id:86,className:'黑妹沱'},{id:87,className:'花砖'},{id:88,className:'千两茶'}]}
	
	
	]
	return {
		all:function(){
			return classNav;
		}
		
	}
	
	
})

//购物车数据
.factory("Data",function(){
	var goodsData= [{id:100,Cdescribe:"一年制安化美韵生黑茶筒装特技天尖400g/健康茶/瘦身茶",Cprice:'￥238.00',Cpic:'img/66_03.png'},
	        {id:101,Cdescribe:"两年制湖南安化美韵生黑茶筒装特技天尖400g",Cprice:'￥288.00',Cpic:'img/66_03-05.png'}]
	return {
		all:function(){
			return goodsData;
		}
		
	}
})
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
