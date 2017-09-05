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
  	console.log(id);
  	window.location="#/tab/classNav/"+id;
  }
})

.controller('shopcartCtrl', function($scope) {
  
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
	console.log(id);
  	window.location="#/tab/detail/"+id;
}
})

//详情页面
.controller("detailCtrl",function($scope,myskytea){
	$scope.skytea=myskytea.all();
	console.log(myskytea.all()[0].skyTea)
	
	
	$scope.detailList=function(id){
		console.log(id);
  	window.location="#/tab/detailList/"+id;
	}
})

//详情列表页面
.controller("detailListCtrl",function($scope){
	
	
	
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
      	console.log(attributes)
        scope.$on('$ionicView.beforeEnter', function() {
          $rootScope.hideTabs=attributes.hideTabs;
        });

        scope.$on('$ionicView.beforeLeave', function() {
          $rootScope.hideTabs = false;
        });
      }
    };
  })