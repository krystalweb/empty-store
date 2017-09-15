angular.module('starter.controllers', [])

.controller('homeCtrl', function($scope,myfooter,myrecommend,mybannerImg,$ionicSlideBoxDelegate,mynewproduct) {
	//轮播数据获取
	    $scope.bannerData=mybannerImg.all();
	    console.log(mybannerImg.all());
	    //更新轮播图
        $ionicSlideBoxDelegate.$getByHandle("slideimgs").update();
        //让轮播图循环播放
        $ionicSlideBoxDelegate.$getByHandle("slideimgs").loop("true");	
        
        //推荐商品数据加载
//      $scope.recommendData=myrecommend.all();
//      console.log(myrecommend.all());
        //获取新款上市数据
        $scope.newproductData=mynewproduct.all();
        
        //底部数据加载
        $scope.footerData=myfooter.all();
        
})

.controller('classifyCtrl', function($scope,myclassify) {
//分类数据加载
$scope.classData=myclassify.all();

     
  //跳转子页面
  $scope.classList=function(id){

  	window.location="#/tab/classNav/"+id;
  }
})
//购物车页面
.controller('shopcartCtrl', function($scope,Data,$rootScope) {
	$rootScope.goodsChecked=[];
	$scope.goodsData = Data.all(); //商品列表，获取Data中的数据
//    $scope.goodsChecked = Data.goodsChecked; //被添加到购物车的商品    
console.log(Data.all());
    $scope.addGoods = function (item) { //添加商品到购物车
      var index = $scope.goodsChecked.indexOf(item);

      if (index != -1) {  //检查商品是否已经添加到购物车中
        item.count = ++$scope.goodsChecked[index].count;
        item.isDisabled = false;
      }
      else {
        item.count = 0;
        item.count++; //加入购物车后，购物车中该商品数量默认为1
        item.isDisabled = true;
        if ($scope.toEdit == false) {
          item.checked = true;
          $scope.selcetAll = true;
        }
        else {
          item.checked = false;
          $scope.selcetAll = false;
        }
        $scope.goodsChecked.push(item);
      }
      $scope.account();
    }

    $scope.addCount = function (item) {  //增加单个商品数量
      item.singleTotal = 0; //每次计算需将单个商品的数值重置为零
      item.count++; // 购物车中单个货物数量

      if (item.count > 1) {
        item.isDisabled = false;
      }
      $scope.account();
    }

    $scope.decreaseCount = function (item) { //减少单个商品数量
      item.singleTotal = 0;
      item.count--;

      if (item.count == 1) {
        item.isDisabled = true;
      }
      $scope.account();
    }

    $scope.toggleChecked = function (item) {
      item.checked = !item.checked; //切换选择取消

      var a = 0; //统计选中的数量
      for (var i = 0; i < $scope.goodsChecked.length; i++) { //购物车中有未选中结算的商品，全选项即为未选中
        if ($scope.goodsChecked[i].checked == true) {
          a++;  //选中的个数
        }
      }
      if (a == $scope.goodsChecked.length) {
        $scope.selcetAll = true;
      } else {
        $scope.selcetAll = false;
      }
      if ($scope.toEdit == false) {
        $scope.account();
      }
    }

    $scope.checkAll = function () {  //全选，结算全部购物车中商品
      $scope.selcetAll = !$scope.selcetAll;
      for (var i = 0; i < $scope.goodsChecked.length; i++) {
        $scope.goodsChecked[i].checked = $scope.selcetAll;
      }
      $scope.account();
    }

    $scope.toEdit = false;
    $scope.editFunc = function () { //切换为编辑状态
      $scope.toEdit = true;
      $scope.preChecked = $scope.selcetAll;
      $scope.selcetAll = false;
      for (var i = 0; i < $scope.goodsChecked.length; i++) {
        $scope.goodsChecked[i].preChecked = $scope.goodsChecked[i].checked;
        $scope.goodsChecked[i].checked = false;
      }
    }

    $scope.okFunc = function () { //退出编辑状态
      var a = 0;
      $scope.toEdit = false;
      for (var i = 0; i < $scope.goodsChecked.length; i++) {
        $scope.goodsChecked[i].checked = $scope.goodsChecked[i].preChecked;
        if ($scope.goodsChecked[i].checked == true) {
          a++;
        }
      }

      if (a == $scope.goodsChecked.length && $scope.goodsChecked.length != 0) {
        $scope.selcetAll = true;
      }
      $scope.account();
    }

    $scope.deleteGood = function () { //编辑状态下删除被选中的商品
      if ($scope.toEdit == true && $scope.goodsChecked.length > 0) {
        for (var i = 0; i < $scope.goodsChecked.length; i++) {
          if ($scope.goodsChecked[i].checked == true) {
            $scope.goodsChecked.splice($scope.goodsChecked.indexOf($scope.goodsChecked[i]), 1);
            i--;//因为删除了一项，$scope.goodsChecked的长度就减少了一个
          }
          if ($scope.goodsChecked.length == 0) {
            $scope.selcetAll = false;
          }
        }
      }

    }

    $scope.account = function () { //计算总价
      $scope.sum = 0;
      $scope.totalValue = 0;
      for (var i = 0; i < $scope.goodsChecked.length; i++) {
        $scope.goodsChecked[i].singleTotal = 0;
        if ($scope.goodsChecked[i].checked) {
          $scope.goodsChecked[i].singleTotal = $scope.goodsChecked[i].price * $scope.goodsChecked[i].count; //单个商品的总价格
          $scope.sum += $scope.goodsChecked[i].count; //计算总数量
        } else if ($scope.goodsChecked[i].checked == false) {
          $scope.goodsChecked[i].singleTotal = 0;
        }
        $scope.totalValue += $scope.goodsChecked[i].singleTotal; //计算总价
      }
    }
})

.controller('myselfCtrl', function($scope) {
 
  })

.controller('moreCtrl', function($scope) {
 
 
})
//分类导航
.controller('classNavCtrl', function($scope,myclassNav) {
 $scope.classNav=myclassNav.all();
console.log($scope.classNav[0].blacktea);

$scope.detail=function(id){

  	window.location="#/tab/detail/"+id;
}
})

//详情页面
.controller("detailCtrl",function($scope,myskytea,Data,$stateParams,$rootScope){
	$scope.skytea=myskytea.all();
//	console.log(myskytea.all()[0].skyTea)
	$scope.goodsChecked=[];
	$scope.goodsData = Data.all();
	$scope.addGoods=function(Id){
		for(var i=0;i<Data.all().length;i++){
			
				if($scope.goodsData[i].id==Id){
					var index = $scope.goodsChecked.indexOf($scope.goodsData[i]);
					if (index != -1) {  //检查商品是否已经添加到购物车中
				        $scope.goodsData[i].count = ++$scope.goodsChecked[index].count;
				        $scope.goodsData[i].isDisabled = false;
				      }
				      else {
				        $scope.goodsData[i].count = 0;
				        $scope.goodsData[i].count++; //加入购物车后，购物车中该商品数量默认为1
				        $scope.goodsData[i].isDisabled = true;
				        if ($scope.toEdit == false) {
				          $scope.goodsData[i].checked = true;
				          $scope.selcetAll = true;
				        }
				        else {
				          $scope.goodsData[i].checked = false;
				          $scope.selcetAll = false;
				        }
				        $scope.goodsChecked.push($scope.goodsData[i]);
				      }					
				}
			
			
		}
		$scope.account();
		var lisobj=JSON.stringify($scope.goodsChecked);
	setLocalStorage("datas",lisobj);
		console.log($scope.goodsChecked);
	}
	
	$scope.account = function () { //计算总价
      $rootScope.sum = 0;
      $scope.totalValue = 0;
      for (var i = 0; i < $scope.goodsChecked.length; i++) {
        $scope.goodsChecked[i].singleTotal = 0;
        if ($scope.goodsChecked[i].checked) {
          $scope.goodsChecked[i].singleTotal = $scope.goodsChecked[i].price * $scope.goodsChecked[i].count; //单个商品的总价格
          $rootScope.sum += $scope.goodsChecked[i].count; //计算总数量
        } else if ($scope.goodsChecked[i].checked == false) {
          $scope.goodsChecked[i].singleTotal = 0;
        }
        $scope.totalValue += $scope.goodsChecked[i].singleTotal; //计算总价
      }
    }
	

	$scope.detailList=function(id){

  	window.location="#/tab/detailList/"+id;
	}
})

//详情列表页面
.controller("detailListCtrl",function($scope,Data,$stateParams){
	//页面刷新开始
//	$scope.$on('$ionicView.beforeEnter', function() {//视图进入
//	
//
//         if (location.href.indexOf("?xyz=")<0){
//		    	window.location.reload();//页面刷新一次
//			 location.href=location.href+"?xyz="+Math.random();
//			 }
//    });

//局部刷新
// $scope.$on('$ionicView.beforeEnter', function() {
//          $scope.refreshLocal();//局部刷新，更新所需的字段
//                        //这里只需要将需要的字段重新赋值就OK了
//      });
    //商品列表，获取Data中的数据  
	var goods=getLocalStorage("datas");
	console.log(goods);
	$scope.goodsChecked=JSON.stringify(goods);
	$scope.goodsData = Data.all(); 
//$scope.goodsChecked = Data.goodsChecked; //被添加到购物车的商品 
//获取跳转页面ID
console.log($stateParams.myId)
for(var i=0;i<Data.all().length;i++){
	if($stateParams.myId==$scope.goodsData[i].id){
//		$scope.Cdescribe=$scope.goodsData[i].Cdescribe;
//	    $scope.Cprice=$scope.goodsData[i].Cprice;
	    $scope.item=$scope.goodsData[i];
	    console.log($scope.goodsData[i]);
	    $scope.addGoods = function (item) { //添加商品到购物车
      var index = $scope.goodsChecked.indexOf(item);

      if (index != -1) {  //检查商品是否已经添加到购物车中
        item.count = ++$scope.goodsChecked[index].count;
        item.isDisabled = false;
      }
      else {
        item.count = 0;
        item.count++; //加入购物车后，购物车中该商品数量默认为1
        item.isDisabled = true;
        if ($scope.toEdit == false) {
          item.checked = true;
          $scope.selcetAll = true;
        }
        else {
          item.checked = false;
          $scope.selcetAll = false;
        }
        $scope.goodsChecked.push($scope.goodsData[i]);
      }
      $scope.account();
    }

    $scope.addCount = function (item) {  //增加单个商品数量
      item.singleTotal = 0; //每次计算需将单个商品的数值重置为零
      item.count++; // 购物车中单个货物数量

      if (item.count > 1) {
        item.isDisabled = false;
      }
      $scope.account();
    }

    $scope.decreaseCount = function (item) { //减少单个商品数量
      item.singleTotal = 0;
      item.count--;

      if (item.count == 1) {
        item.isDisabled = true;
      }
      $scope.account();
    }
	}
	var lisobj=JSON.stringify($scope.goodsChecked);
	setLocalStorage("datas",lisobj);
	
}

//  $scope.addGoods=function(Id){
//		for(var i=0;i<Data.all().length;i++){
//			
//				if($scope.goodsData[i].id==Id){
//					var index = $scope.goodsChecked.indexOf($scope.goodsData[i]);
//					if (index != -1) {  //检查商品是否已经添加到购物车中
//				        $scope.goodsData[i].count = ++$scope.goodsChecked[index].count;
//				        $scope.goodsData[i].isDisabled = false;
//				      }
//				      else {
//				        $scope.goodsData[i].count = 0;
//				        $scope.goodsData[i].count++; //加入购物车后，购物车中该商品数量默认为1
//				        $scope.goodsData[i].isDisabled = true;
//				        if ($scope.toEdit == false) {
//				          $scope.goodsData[i].checked = true;
//				          $scope.selcetAll = true;
//				        }
//				        else {
//				          $scope.goodsData[i].checked = false;
//				          $scope.selcetAll = false;
//				        }
//				        $scope.goodsChecked.push($scope.goodsData[i]);
//				      }					
//				}
//			
//			
//		}
//		$scope.account();
//		var lisobj=JSON.stringify($scope.goodsChecked);
//	setLocalStorage("datas",lisobj);
//		console.log($scope.goodsChecked);
//	}
//
//  $scope.addCount = function (Id) { 
//  	//增加单个商品数量
//  	for(var i=0;i<Data.all().length;i++){			
//				if($scope.goodsData[i].id==Id){
//					$scope.goodsData[i].singleTotal=0;
//					$scope.goodsData[i].count++;
//					if ($scope.goodsData[i].count > 1) {
//				      $scope.goodsData[i].isDisabled = false;
//				    }
//				}
//		}
//
//    $scope.account();
//    var lisobj=JSON.stringify($scope.goodsChecked);
//	setLocalStorage("datas",lisobj);
//  }
//
//  $scope.decreaseCount = function (Id) {
//  	//减少单个商品数量
//  	for(var i=0;i<Data.all().length;i++){			
//				if($scope.goodsData[i].id==Id){
//					$scope.goodsData[i].singleTotal=0;
//					$scope.goodsData[i].count--;
//					if ($scope.goodsData[i].count = 1) {
//				      $scope.goodsData[i].isDisabled = true;
//				    }
//				}
//		}
//
//    $scope.account();
//  }


    

    $scope.account = function () { //计算总价
      $rootScope.sum;
      $scope.totalValue = 0;
      for (var i = 0; i < $scope.goodsChecked.length; i++) {
        $scope.goodsChecked[i].singleTotal = 0;
        if ($scope.goodsChecked[i].checked) {
          $scope.goodsChecked[i].singleTotal = $scope.goodsChecked[i].price * $scope.goodsChecked[i].count; //单个商品的总价格
          $rootScope.sum += $scope.goodsChecked[i].count; //计算总数量
        } else if ($scope.goodsChecked[i].checked == false) {
          $scope.goodsChecked[i].singleTotal = 0;
        }
        $scope.totalValue += $scope.goodsChecked[i].singleTotal; //计算总价
      }
    }
	
	
	$scope.shop=function(){
		console.log(1);
		window.location="#/tab/shopcart";
		
	}
})

//登陆页面
.controller('loginCtrl', function($scope) {
 
 
})

//注册页面
.controller('registerCtrl', function($scope) {
 
 
})

// 底部tabs隐藏显示的指令
 .directive('hideTabs', function($rootScope) {
    return {
      restrict: 'A',
      
      link: function(scope, element, attributes) {
//      	console.log(attributes)
        scope.$on('$ionicView.beforeEnter', function() {
          $rootScope.hideTabs=attributes.hideTabs;
        });

        scope.$on('$ionicView.beforeLeave', function() {
          $rootScope.hideTabs = false;
        });
      }
    };
  })