var index = 0;
var time = 1000;
var arr = ["red","green","brown","purple","lime","fuchsia","blue"];
function chngcolor(){
	var str = "4px solid ";
	if(index<arr.length-1){
		str += arr[index];
		document.getElementById("chng").style.border = str;
		index++;
	}
	else index = 0;
	setTimeout("chngcolor()",time);
}
window.onload = chngcolor;