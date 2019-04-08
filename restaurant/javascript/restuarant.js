function getChoice(choice){
var choice2=document.getElementsByName(choice);
var selectedChoice=[];
for(var k=0; k <choice2.length; k++){
	if(choice2[k].checked){
			selectedChoice.push(choice2[k].value);
	
		}	
	}
	return selectedChoice;
}

function information() {
var name = document.getElementById('Name').value;
var email = document.getElementById('Email').value;
var number=document.getElementById("phoneNumber").value;
var con=document.getElementById("contact").value;	
var info=document.getElementById("info").value;
if (name=="") {
    alert("Please enter name.");
	document.getElementById('Name').focus();
	return false;
	}

else if (email==""){
	alert("please enter email address.");
	document.getElementById('Email').focus();
	return false;
	}
		
else if(isNaN(number)||number==""){
	alert("please enter phone number.");
	document.getElementById('phoneNumber').focus();
	return false;
	}

else if (con=="Default"){
	alert("please pick reason for inquiry.");
	document.getElementById('contact').focus();
	return false;	
	}
var userChoice=getChoice('questionnaire')[0];
var workDay=getChoice('day');
if(workDay.length===0){
	alert('Select days to contact you');
}
else {
	document.getElementById('thank').innerText='Thank you for submitting';
	}
return false;
}

