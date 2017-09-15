//设置storage
function setLocalStorage(key,value){
	localStorage.setItem(key,value);
}
//获取storage
	function getLocalStorage(key){
		return localStorage.getItem(key);
		}		
//判断是否有storage		
	function ishasLocalStorage(){
		var x=window.localStorage;
		if(x!=""){
			return true;
		}else{
			return false;
		}
	}
//删除storage
function delLocalStorage(key){
	localStorage.removeItem(key);			
}	

