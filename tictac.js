var count = 0;
var mat = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
var  gagner = false;

function gagnerTest() {
	 if (  
	 	mat [0][0] + mat [0][1] + mat [0][2] == 3 || 
	 	mat [0][0] + mat [0][1] + mat [0][2] == 300 ||

	 	mat [1][0] + mat [1][1] + mat [1][2] == 3 || 
	 	mat [1][0] + mat [1][1] + mat [1][2] == 300 ||  

	 	mat [2][0] + mat [2][1] + mat [2][2] == 3 || 
	 	mat [2][0] + mat [2][1] + mat [2][2] == 300 || 

	 	mat [0][0] + mat [1][0] + mat [2][0] == 3 || 
	 	mat [0][0] + mat [1][0] + mat [2][0] == 300 ||

	 	mat [0][1] + mat [1][1] + mat [2][1] == 3 || 
	 	mat [0][1] + mat [1][1] + mat [2][1] == 300 ||  

	 	mat [0][2] + mat [1][2] + mat [2][2] == 3 || 
	 	mat [0][2] + mat [1][2] + mat [2][2] == 300 || 

	 	mat [0][0] + mat [1][1] + mat [2][2] == 3 || 
	 	mat [0][0] + mat [1][1] + mat [2][2] == 300 || 

	 	mat [0][2] + mat [1][1] + mat [2][0] == 3 || 
	 	mat [0][2] + mat [1][1] + mat [2][0] == 300) 
	 { 
	 	 gagner = true;
	 }
     return gagner;
    }

function jouer_11() {
        if (mat [0][0] == 0 &&	gagner == false) {
        	count++; 
	        if(count&1){
	           document.getElementById('affiche_11').value ="X";
			   mat [0][0] = 1;
			   gagnerTest();
			   if (gagner) {
			   	 document.getElementById("gangnant").innerHTML = "X";
			   } 
	        }
			else{
			   document.getElementById('affiche_11').value ="O"; 
			   mat [0][0] = 100;
			   gagnerTest();
			   if (gagner) {
			   	 document.getElementById("gangnant").innerHTML = "O";
			   	 
			   }  
			}
	    }      
    }

function jouer_12() {
        if (mat [0][1] == 0 && gagner == false) {
        	count++; 
	        if(count&1){
	           document.getElementById('affiche_12').value ="X";
			   mat [0][1] = 1;
			   gagnerTest();
			   if (gagner) {
			   	 document.getElementById("gangnant").innerHTML = "X";
			   } 
	        }
			else{
			   document.getElementById('affiche_12').value ="O"; 
			   mat [0][1] = 100;
			   gagnerTest();
			   if (gagner) {
			   	 document.getElementById("gangnant").innerHTML = "O";
			   }  
			}
	    }      
    }

 function jouer_13() {
        if (mat [0][2] == 0 && gagner == false) {
        	count++; 
	        if(count&1){
	           document.getElementById('affiche_13').value ="X";
			   mat [0][2] = 1;
			   gagnerTest();
			   if (gagner) {
			   	 document.getElementById("gangnant").innerHTML = "X";
			   } 
	        }
			else{
			   document.getElementById('affiche_13').value ="O"; 
			   mat [0][2] = 100;
			   gagnerTest();
			   if (gagner) {
			   	 document.getElementById("gangnant").innerHTML = "O";
			   }  
			}
	    }      
    }

    function jouer_21() {
        if (mat [1][0] == 0 && gagner == false) {
        	count++; 
	        if(count&1){
	           document.getElementById('affiche_21').value ="X";
			   mat [1][0] = 1;
			   gagnerTest();
			   if (gagner) {
			   	 document.getElementById("gangnant").innerHTML = "X";
			   } 
	        }
			else{
			   document.getElementById('affiche_21').value ="O"; 
			   mat [1][0] = 100;
			   gagnerTest();
			   if (gagner) {
			   	 document.getElementById("gangnant").innerHTML = "O";
			   }  
			}
	    }      
    }

function jouer_22() {
        if (mat [1][1] == 0 && gagner == false) {
        	count++; 
	        if(count&1){
	           document.getElementById('affiche_22').value ="X";
			   mat [1][1] = 1;
			   gagnerTest();
			   if (gagner) {
			   	 document.getElementById("gangnant").innerHTML = "X";
			   } 
	        }
			else{
			   document.getElementById('affiche_22').value ="O"; 
			   mat [1][1] = 100;
			   gagnerTest();
			   if (gagner) {
			   	 document.getElementById("gangnant").innerHTML = "O";
			   }  
			}
	    }      
    }

 function jouer_23() {
        if (mat [1][2] == 0 && gagner == false) {
        	count++; 
	        if(count&1){
	           document.getElementById('affiche_23').value ="X";
			   mat [1][2] = 1;
			   gagnerTest();
			   if (gagner) {
			   	 document.getElementById("gangnant").innerHTML = "X";
			   } 
	        }
			else{
			   document.getElementById('affiche_23').value ="O"; 
			   mat [1][2] = 100;
			   gagnerTest();
			   if (gagner) {
			   	 document.getElementById("gangnant").innerHTML = "O";
			   }  
			}
	    }      
    }


    function jouer_31() {
        if (mat [2][0] == 0  && gagner == false) {
        	count++; 
	        if(count&1){
	           document.getElementById('affiche_31').value ="X";
			   mat [2][0] = 1;
			   gagnerTest();
			   if (gagner) {
			   	 document.getElementById("gangnant").innerHTML = "X";
			   } 
	        }
			else{
			   document.getElementById('affiche_31').value ="O"; 
			   mat [2][0] = 100;
			   gagnerTest();
			   if (gagner) {
			   	 document.getElementById("gangnant").innerHTML = "O";
			   }  
			}
	    }      
    }

function jouer_32() {
        if (mat [2][1] == 0  && gagner == false) {
        	count++; 
	        if(count&1){
	           document.getElementById('affiche_32').value ="X";
			   mat [2][1] = 1;
			   gagnerTest();
			   if (gagner) {
			   	 document.getElementById("gangnant").innerHTML = "X";
			   } 
	        }
			else{
			   document.getElementById('affiche_22').value ="O"; 
			   mat [2][1] = 100;
			   gagnerTest();
			   if (gagner) {
			   	 document.getElementById("gangnant").innerHTML = "O";
			   }  
			}
	    }      
    }

 function jouer_33() {
        if (mat [2][2] == 0  && gagner == false) {
        	count++; 
	        if(count&1){
	           document.getElementById('affiche_33').value ="X";
			   mat [2][2] = 1;
			   gagnerTest();
			   if (gagner) {
			   	 document.getElementById("gangnant").innerHTML = "X";
			   } 
	        }
			else{
			   document.getElementById('affiche_33').value ="O"; 
			   mat [2][2] = 100;
			   gagnerTest();
			   if (gagner) {
			   	 document.getElementById("gangnant").innerHTML = "O";
			   }  
			}
	    }      
    }