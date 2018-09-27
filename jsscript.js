var myVar = setInterval(myTimer, 100);
	var myVar1 = setInterval(myTimer1, 100);
	var myVar2 = setInterval(myTimer2, 100);
        var t=0,t1=0,t2=0;
		var target=123;
		var target1=183;
		var target2=113;
		function myTimer() {
			
			t = t+1;
			if(t==target){
			   myStopFunction();
			}
			document.getElementById("count").innerHTML = t;
		}
		function myTimer1() {
			
			t1 = t1+1;
			if(t1==target1){
			   myStopFunction1();
			}
			document.getElementById("count1").innerHTML = t1;
		}
		function myTimer2() {
			
			t2 = t2+1;
			if(t2==target2){
			   myStopFunction2();
			}
			document.getElementById("count2").innerHTML = t2;
		}

		function myStopFunction() {
			clearInterval(myVar);
		}
		function myStopFunction1() {
			clearInterval(myVar1);
		}
		function myStopFunction2() {
			clearInterval(myVar2);
		}
		
		
		