function Validation()
{
	
	var salary=document.getElementById("salary").value;
	var percent=document.getElementById("percent").value/100;
	var age=document.getElementById("age").value;
	var rAge=document.getElementById("rAge").value;
	var yes=document.getElementById("yes").value;
	var no=document.getElementById("no").value;
	
	
	
	
	
	
            // Storing the value above into localStorage
            localStorage.setItem("salary", salary);
            localStorage.setItem("percent", percent);
            localStorage.setItem("age", age);
			localStorage.setItem("rAge", rAge);
            localStorage.setItem("yes", yes);
            localStorage.setItem("no", no);
			
		
	if(salary=="")
	{
		document.getElementById("user").innerHTML="**Please Enter the Annual Salary**";
		return false;
	
	}
	
	
	if(isNaN(salary))
	{
		document.getElementById("user").innerHTML= "**Do not Accept Characters**";
		return false;
	
	}
	
	if( percent=="")
	{
		document.getElementById("user").innerHTML="**Please Enter the  Annual Salary Increase**";
		return false;
	
	}
	
	
	
	if(isNaN( percent))
	{
		document.getElementById("user").innerHTML= "**Do not Accept Characters**";
		return false;
	
	}
	
	
	
	if(age=="")
	{
		document.getElementById("user").innerHTML="**Please Enter the your Age**";
		return false;
	
	}
	
	
	if(age<24 || Page>65)
	{
		document.getElementById("user").innerHTML="** Present Age Starts from 24 up to 65**";
		return false;
		
	
	}
	
	
	if(isNaN(age))
	{
		document.getElementById("user").innerHTML= "**Do not Accept Characters**";
		return false;
	
	}
	
	
	if(rAge=="")
	{
		document.getElementById("user").innerHTML="**Please Enter the Retirement Age**";
		return false;
	
	}
	
	
	if(age>rAge)
	{
		document.getElementById("user").innerHTML="**Retirement Age Must Be Greater Than Your Age**";
		return false;
	
	}
	
	if(rAge<24 || rAge>101)
	{
		document.getElementById("user").innerHTML="** Retirement Age Starts from 24 up to 101**";
		return false;
	
	}
	
	if(isNaN(rAge))
	{
		document.getElementById("user").innerHTML= "**Do not Accept Characters**";
		return false;
	
	}
	
	
	
	
}
