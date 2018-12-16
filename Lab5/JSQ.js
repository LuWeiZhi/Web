
function jia(){
	var num1=document.getElementById('num1').value;
	var num2=document.getElementById('num2').value;
	var result=eval(num1)+eval(num2);
	var obj=document.getElementById("result");
	obj.value=result;
}

function jian(){
	var num1=document.getElementById('num1').value;
	var num2=document.getElementById('num2').value;
	var result=eval(num1)-eval(num2);
	var obj=document.getElementById("result");
	obj.value=result;
}

function cheng(){
	var num1=document.getElementById('num1').value;
	var num2=document.getElementById('num2').value;
	var result=eval(num1)*eval(num2);
	var obj=document.getElementById("result");
	obj.value=result;
}

function chu(){
	var num1=document.getElementById('num1').value;
	var num2=document.getElementById('num2').value;
	var result=eval(num1)/eval(num2);
	var obj=document.getElementById("result");
	obj.value=result;

}

function clears()
{
document.getElementById("num1").value="";
document.getElementById("num2").value="";
document.getElementById("result").value="";
}

function add(obj)
{
document.getElementById("num3").value=num1.value+.btn.value+num2.value+"="+result.value;
}



