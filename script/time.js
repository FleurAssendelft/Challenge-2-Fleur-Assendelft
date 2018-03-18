    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s;
        var t = setTimeout(startTime, 500);
        }
    function checkTime(i) {
        if (i < 10) {i = "0" + i};  
        return i;
    }

    function timeOfTheDay(){
        var today = new Date();
        var date = today.getDate();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var month = new Array(11);
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

        var dag = weekday[today.getDay()];
        var maand = month[today.getMonth()];
        document.getElementById("day").innerHTML = 'Today it is ' + dag + ', ' + maand + ' ' + date ;
    }

    function greeting(){
        var d = new Date();
        var time = d.getHours();

        if (time > 0 && time < 12){
            document.getElementById('greeting').innerHTML = "GOOD MORNING" ;
        }
        if(time >= 12 ){
            document.getElementById('greeting').innerHTML = "GOOD AFTERNOON";
        }
        if(time >= 18 ){
            document.getElementById('greeting').innerHTML = "GOOD EVENING";
        }
    }

    function task(){
        var d = new Date();
        var time = d.getHours();

        if (time >= 0 && time < 2){
            document.body.style.backgroundColor = "#001f4d";
            document.getElementById('taak').innerHTML = "Sleep time!";
        }
         else if (time >= 2 && time < 4){
            document.body.style.backgroundColor = "#003380";
            document.getElementById('taak').innerHTML = "Sleep time!";
        }
         else if (time >= 4 && time < 6){
            document.body.style.backgroundColor = "#0047b3";
            document.getElementById('taak').innerHTML = "Sleep time!";
        }
         else if (time >= 6 && time < 7){
            document.body.style.backgroundColor = "#4da6ff";
            document.getElementById('taak').innerHTML = "Sleep time!";
        }
        else if (time >= 7 && time < 8){
            document.body.style.backgroundColor = "#ffd699";
            document.getElementById('taak').innerHTML = "It's time to wake up!";
        }
        else if (time >= 8 && time < 9){
            document.body.style.backgroundColor = "#99ccff";
            document.getElementById('taak').innerHTML = "Breakfast time!";
        }
         else if (time >= 9 && time < 10){
            document.body.style.backgroundColor = "#99ccff";
            document.getElementById('taak').innerHTML = "Ready to go to work";
        }
        else if (time >= 10 && time < 12){
            document.body.style.backgroundColor = "#b3daff";
        }
        else if (time >= 12 && time < 14){
            document.body.style.backgroundColor = "#cce5ff";
            document.getElementById('taak').innerHTML = "Lunch time!";
        }
        else if (time >= 14 && time < 15){
            document.body.style.backgroundColor = "#b3d7ff";
            document.getElementById('taak').innerHTML = "Get back to work";
        }
        else if (time >= 15 && time < 16){
            document.body.style.backgroundColor = "#99ccff";
            document.getElementById('taak').innerHTML = "Time for a snack!";
        }
         else if (time >= 16 && time < 18){
            document.body.style.backgroundColor = "#99ccff";
        }
        else if (time >= 18 && time < 19){
            document.body.style.backgroundColor = "#ffcc66";
            document.getElementById('taak').innerHTML = "Time for a dinner!";
        }
        else if (time >= 19 && time < 20){
            document.body.style.backgroundColor = "#ffb3d9";
            document.getElementById('taak').innerHTML = "Time to relax with some tea of coffee";
            document.getElementById('txt').style.color = "white";
            document.getElementById('greeting').style.color = "white";
            document.getElementById('day').style.color = "white";
        }
        else if (time >= 20 && time < 22){
            document.body.style.backgroundColor = "#0047b3";
            document.getElementById('taak').innerHTML = "Let's watch a movie or read a book!";
            document.getElementById('txt').style.color = "white";
            document.getElementById('greeting').style.color = "white";
            document.getElementById('day').style.color = "white";
        }
        else if (time >= 22 && time < 23){
            document.body.style.backgroundColor = "#003380";
             document.getElementById('taak').innerHTML = "Get ready for bed!";
            document.getElementById('txt').style.color = "white";
            document.getElementById('greeting').style.color = "white";
            document.getElementById('day').style.color = "white";
        }
         else if (time >= 23 && time < 24){
            document.body.style.backgroundColor = "#003380";
            document.getElementById('taak').innerHTML = "Sleep time!";
            document.getElementById('txt').style.color = "white";
            document.getElementById('greeting').style.color = "white";
            document.getElementById('day').style.color = "white";
        }
    }
    var message = document.getElementById('greeting');

    var tl1 = new TimelineMax({repeat: -1});
    tl1.to(message, 8, {right: 200});
    
    startTime();
    timeOfTheDay();
    greeting(); 
    task();
