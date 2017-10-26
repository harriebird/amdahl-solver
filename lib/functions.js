/*
 * Solver Scripts
 *
 */
 
 	$(document).ready( function() {
		$("#solvefe").click(function() {
			$("#solver").fadeIn(1000);
			$("#header").html("Solve for Fraction<sub>enhanced</sub>");
			$("#lbl-value1").html("Speedup<sub>enhanced</sub>");
			$("#lbl-value2").html("Speedup<sub>overall</sub>");
			$("#lbl-answer").html("Fraction<sub>enhanced</sub>");
			$("#cal-fe").fadeIn();
			$("#cal-se").hide();
			$("#cal-so").hide();
			$("#main-menu").hide();
		});
		
		$("#solvese").click(function() {
			$("#solver").fadeIn(1000);
			$("#header").html("Solve for Speedup<sub>enhanced</sub>");
			$("#lbl-value1").html("Fraction<sub>enhanced</sub>");
			$("#lbl-value2").html("Speedup<sub>overall</sub>");
			$("#lbl-answer").html("Speedup<sub>enhanced</sub>");
			$("#cal-se").fadeIn();
			$("#cal-fe").hide(); 	
			$("#cal-so").hide();
			$("#main-menu").hide();
		});
		
		$("#solveso").click(function() {
			$("#solver").fadeIn(1000);
			$("#header").html("Solve for Speedup<sub>overall</sub>");
			$("#lbl-value1").html("Fraction<sub>enhanced</sub>");
			$("#lbl-value2").html("Speedup<sub>enhanced</sub>");
			$("#lbl-answer").html("Speedup<sub>overall</sub>");
			$("#cal-so").fadeIn();
			$("#cal-fe").hide();
			$("#cal-se").hide();
			$("#main-menu").hide();
		});
		
		$("#cal-fe").click(function() {
			document.getElementById("answer").value = solvefe(value1.valueAsNumber,value2.valueAsNumber);
		});
		
		$("#cal-se").click(function() {
			document.getElementById("answer").value = solvese(value1.valueAsNumber,value2.valueAsNumber);
		});
		
		$("#cal-so").click(function() {
			document.getElementById("answer").value = solveso(value1.valueAsNumber,value2.valueAsNumber);
		});
		
		$(".go-back").click(function() {
			$("#main-menu").fadeIn(1000);
			$("#solver").hide();
			document.getElementById("value1").value = "";
			document.getElementById("value2").value = "";
			document.getElementById("answer").value = "";
			document.getElementById("answer").placeholder = "Answer here...";
		});
		
		$("#exit").click(function() {
			self.close();
		});
	});

 function solveso(fe,se) {
	 if(fe > 1){
		 alert("FRACTIONenhanced must be <= 1");
	 }
	 else if(se < 1) {
		 alert("SPEEDUPenhanced must be >= 1");
	 }
	 else {
		 return Math.round((1/((1-fe)+(fe/se)))*100)/100;
	 } 
 }
 
 function solvese(fe,so) {
	 var ans = 0;
	 var se = 0;
	 while(ans <= so) {
		 se += 0.01;
		 ans = 1/((1-fe)+(fe/se));
	 }
	 return Math.round(se*100)/100;
 }

 function solvefe(se,so) {
	 var ans = 0;
	 var fe = 0;
	 while(ans < so) {
		 fe += 0.01;
		 ans = 1/((1-fe)+(fe/se));
	 }
	 return Math.round(fe*100)/100;
 }

 