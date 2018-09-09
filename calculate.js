// Called on body's `onload` event
 function init() {

  var salary = parseInt(localStorage.getItem("salary"));
  var percent = parseFloat(localStorage.getItem("percent"));
  var age = parseInt(localStorage.getItem("age"));
  var rAge = parseInt(localStorage.getItem("rAge"));
  var yes = localStorage.getItem("yes");
  var no = localStorage.getItem("no");
  var roundedSalary = parseInt(Math.ceil((salary + 2000) / 1000) * 1000); //Doing Rounding for basic column Display

  var cumulative;
  var cum;
  var basic;
  var factor = 0;

  //Displaying Headers
  document.write("<head><link rel=\"stylesheet\" type=\"text/css\" href=\"confirm.css\"></head><body>");


  document.write("<center>")
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
   dd = '0' + dd
  }

  if (mm < 10) {
   mm = '0' + mm
  }
  today = mm + '/' + dd + '/' + yyyy;
  document.write("<h1>" + "FEGLI CALCULATIONS ON" + "&nbsp;" + today + "</h1>");
  document.write("</center>")
  document.write("<table><tr><th>Age&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Annual Salary &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>BiWeekly-Premium &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Monthly-Premium&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Annual Premium&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Cumulative-Premium&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Basic&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th></tr>");

  var biWeekly = 0,
   monthly = 0,
   annual = 0;


  basic = parseInt(roundedSalary * calculateFactor(age));
  //document.write("roundedSalary"+roundedSalary+"calculateFactor"+calculateFactor(age));
  premium = calculateBiweekly(salary, basic, age, rAge);
  biWeekly = premium[0];
  monthly = premium[1];
  annual = premium[2];
  cumulative = premium[3];
  document.write("<tr><td>" + age + "/" + (age + 1) + "</td><td>" + "$" + salary.toFixed(2) + "</td><td>" + "$" + biWeekly.toFixed(2) + "</td><td>" + "$" + monthly.toFixed(2) + "</td><td>" + "$" + annual.toFixed(2) + "</td><td>" + "$" + cumulative.toFixed(2) + "</td><td>" + "$" + basic + "</td><td>-</td></tr>");




  salary = parseFloat(salary);

  for (var i = age + 1; i < 101; i++) {
   document.write("<tr>");
   document.write("<td>" + i + "/" + (i + 1) + "</td>");
   if (i < rAge) {

    salary = salary + (salary * percent);

    roundedSalary = parseInt(Math.ceil((salary + 2000) / 1000) * 1000);
    //			document.write("age"+i+"roundedSalary"+roundedSalary+"<br>");
    document.write("<td>" + "$" + salary.toFixed(2) + "</td>");
   } else {
    salary = 0;
    document.write("<td>-</td>");
   }

   basic = parseInt(roundedSalary * calculateFactor(i));

   premium = calculateBiweekly(salary, basic, i);
   biWeekly = premium[0];
   monthly = premium[1];
   annual = premium[2];
   cumulative = premium[3]

   document.write("<td>" + "$" + biWeekly.toFixed(2) + "</td>");
   document.write("<td>" + "$" + monthly.toFixed(2) + "</td>");
   document.write("<td>" + "$" + annual.toFixed(2) + "</td>");
   document.write("<td>" + "$" + cumulative.toFixed(2) + "</td>");

   document.write("<td>" + "$" + basic + "</td>");
   document.write("<td>-</td>");
   document.write("</tr>");


  }
  document.write("</table>");
  document.write("</body>")

 }

 function calculateFactor(age) {
  var factor = 0;
  if (age > 35 && age < 45) {


   switch (age) {


    case 36:
     factor = 1.9;
     break;

    case 37:
     factor = 1.8;
     break;

    case 38:
     factor = 1.7;
     break;

    case 39:
     factor = 1.6;
     break;

    case 40:
     factor = 1.5;
     break;

    case 41:
     factor = 1.4;
     break;

    case 42:
     factor = 1.3;
     break;

    case 43:
     factor = 1.2;
     break;

    case 44:
     factor = 1.1;
     break;


   }
  } else if (age <= 35) {
   factor = 2;
  } else if (age >= 45) {
   factor = 1;
  }

  return factor;
 }

 function calculateBiweekly(salary, basic, age) {
  var biWeekly = 0;
  if (salary > 0) {

   biWeekly = ((basic / calculateFactor(age)) * 0.15) / 1000;
   monthly = ((basic / calculateFactor(age)) * 0.325) / 1000;
   annual = 12 * monthly;
   cumulative = annual;

  } else if (salary == 0 && age <= 65) {



   biWeekly = ((basic / calculateFactor(age)) * (2.455 / 2.166)) / 1000;
   monthly = ((basic / calculateFactor(age)) * (2.455)) / 1000;
   annual = 12 * monthly;
   cumulative = annual;
  } else if (salary == 0 && age > 65) {

   //document.write("age"+age+"salary"+salary+"<br>");
   biWeekly = ((basic / calculateFactor(age)) * (2.13 / 2.166)) / 1000;
   monthly = ((basic / calculateFactor(age)) * (2.13)) / 1000;
   annual = 12 * monthly;
   cumulative = annual;
  }

  //document.write("age"+age+"salary"+salary+"<br>");

  return [biWeekly, monthly, annual, cumulative];
 }// Called on body's `onload` event
 function init() {

  var salary = parseInt(localStorage.getItem("salary"));
  var percent = parseFloat(localStorage.getItem("percent"));
  var age = parseInt(localStorage.getItem("age"));
  var rAge = parseInt(localStorage.getItem("rAge"));
  var yes = localStorage.getItem("yes");
  var no = localStorage.getItem("no");
  var roundedSalary = parseInt(Math.ceil((salary + 2000) / 1000) * 1000); //Doing Rounding for basic column Display

  var cumulative;
  var cum;
  var basic;
  var factor = 0;

  //Displaying Headers
  document.write("<head><link rel=\"stylesheet\" type=\"text/css\" href=\"confirm.css\"></head><body>");


  document.write("<center>")
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
   dd = '0' + dd
  }

  if (mm < 10) {
   mm = '0' + mm
  }
  today = mm + '/' + dd + '/' + yyyy;
  document.write("<h1>" + "FEGLI CALCULATIONS ON" + "&nbsp;" + today + "</h1>");
  document.write("</center>")
  document.write("<table><tr><th>Age&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Annual Salary &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>BiWeekly-Premium &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Monthly-Premium&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Annual Premium&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Cumulative-Premium&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Basic&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th></tr>");

  var biWeekly = 0,
   monthly = 0,
   annual = 0;


  basic = parseInt(roundedSalary * calculateFactor(age));
  //document.write("roundedSalary"+roundedSalary+"calculateFactor"+calculateFactor(age));
  premium = calculateBiweekly(salary, basic, age, rAge);
  biWeekly = premium[0];
  monthly = premium[1];
  annual = premium[2];
  cumulative = premium[3];
  document.write("<tr><td>" + age + "/" + (age + 1) + "</td><td>" + "$" + salary.toFixed(2) + "</td><td>" + "$" + biWeekly.toFixed(2) + "</td><td>" + "$" + monthly.toFixed(2) + "</td><td>" + "$" + annual.toFixed(2) + "</td><td>" + "$" + cumulative.toFixed(2) + "</td><td>" + "$" + basic + "</td><td>-</td></tr>");




  salary = parseFloat(salary);

  for (var i = age + 1; i < 101; i++) {
   document.write("<tr>");
   document.write("<td>" + i + "/" + (i + 1) + "</td>");
   if (i < rAge) {

    salary = salary + (salary * percent);

    roundedSalary = parseInt(Math.ceil((salary + 2000) / 1000) * 1000);
    //			document.write("age"+i+"roundedSalary"+roundedSalary+"<br>");
    document.write("<td>" + "$" + salary.toFixed(2) + "</td>");
   } else {
    salary = 0;
    document.write("<td>-</td>");
   }

   basic = parseInt(roundedSalary * calculateFactor(i));

   premium = calculateBiweekly(salary, basic, i);
   biWeekly = premium[0];
   monthly = premium[1];
   annual = premium[2];
   cumulative = premium[3]

   document.write("<td>" + "$" + biWeekly.toFixed(2) + "</td>");
   document.write("<td>" + "$" + monthly.toFixed(2) + "</td>");
   document.write("<td>" + "$" + annual.toFixed(2) + "</td>");
   document.write("<td>" + "$" + cumulative.toFixed(2) + "</td>");

   document.write("<td>" + "$" + basic + "</td>");
   document.write("<td>-</td>");
   document.write("</tr>");


  }
  document.write("</table>");
  document.write("</body>")

 }

 function calculateFactor(age) {
  var factor = 0;
  if (age > 35 && age < 45) {


   switch (age) {


    case 36:
     factor = 1.9;
     break;

    case 37:
     factor = 1.8;
     break;

    case 38:
     factor = 1.7;
     break;

    case 39:
     factor = 1.6;
     break;

    case 40:
     factor = 1.5;
     break;

    case 41:
     factor = 1.4;
     break;

    case 42:
     factor = 1.3;
     break;

    case 43:
     factor = 1.2;
     break;

    case 44:
     factor = 1.1;
     break;


   }
  } else if (age <= 35) {
   factor = 2;
  } else if (age >= 45) {
   factor = 1;
  }

  return factor;
 }

 function calculateBiweekly(salary, basic, age) {
  var biWeekly = 0;
  if (salary > 0) {

   biWeekly = ((basic / calculateFactor(age)) * 0.15) / 1000;
   monthly = ((basic / calculateFactor(age)) * 0.325) / 1000;
   annual = 12 * monthly;
   cumulative = annual;

  } else if (salary == 0 && age <= 65) {



   biWeekly = ((basic / calculateFactor(age)) * (2.455 / 2.166)) / 1000;
   monthly = ((basic / calculateFactor(age)) * (2.455)) / 1000;
   annual = 12 * monthly;
   cumulative = annual;
  } else if (salary == 0 && age > 65) {

   //document.write("age"+age+"salary"+salary+"<br>");
   biWeekly = ((basic / calculateFactor(age)) * (2.13 / 2.166)) / 1000;
   monthly = ((basic / calculateFactor(age)) * (2.13)) / 1000;
   annual = 12 * monthly;
   cumulative = annual;
  }

  //document.write("age"+age+"salary"+salary+"<br>");

  return [biWeekly, monthly, annual, cumulative];
 }