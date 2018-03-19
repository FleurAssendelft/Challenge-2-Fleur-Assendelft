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
        document.getElementById("day").innerHTML = "Today it's " + dag + ", " + maand + " "  + date ;
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
            document.getElementById('titel').innerHTML = "Keep on dreaming";
        }
         else if (time >= 2 && time < 4){
            document.body.style.backgroundColor = "#003380";
            document.getElementById('taak').innerHTML = "Sleep time!";
            document.getElementById('titel').innerHTML = "Keep on dreaming";
        }
         else if (time >= 4 && time < 6){
            document.body.style.backgroundColor = "#0047b3";
            document.getElementById('taak').innerHTML = "Sleep time!";
            document.getElementById('titel').innerHTML = "Keep on dreaming";
        }
         else if (time >= 6 && time < 7){
            document.body.style.backgroundColor = "#4da6ff";
            document.getElementById('taak').innerHTML = "Sleep time!";
            document.getElementById('titel').innerHTML = "Keep on dreaming";
        }
        else if (time >= 7 && time < 8){
            document.body.style.backgroundColor = "#ffd699";
            document.getElementById('taak').innerHTML = "It's time to wake up!";
            document.getElementById('titel').innerHTML = "What to wear?";
            document.getElementById('fotoeen').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/grijs.jpg";
            document.getElementById('fototwee').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/groen.jpg";
            document.getElementById('fotodrie').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/blouse.jpeg";
        }
        else if (time >= 8 && time < 9){
            document.body.style.backgroundColor = "#99ccff";
            document.getElementById('taak').innerHTML = "Breakfast time!";
            document.getElementById('titel').innerHTML = "Breakfast ideas";
            document.getElementById('fotoeen').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/pannekoek.jpeg";
            document.getElementById('fototwee').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/muesli.jpg";
            document.getElementById('fotodrie').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/croissant.jpg";

        }
         else if (time >= 9 && time < 10){
            document.body.style.backgroundColor = "#99ccff";
            document.getElementById('taak').innerHTML = "Ready to go to work!";
            document.getElementById('titel').innerHTML = "How to go to work?";
            document.getElementById('fotoeen').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/car.jpeg";
            document.getElementById('fototwee').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/bike.jpeg";
            document.getElementById('fotodrie').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/train.jpeg";
        }
        else if (time >= 10 && time < 12){
            document.body.style.backgroundColor = "#b3daff";
            document.getElementById('taak').innerHTML = "Let's work!";
            document.getElementById('titel').innerHTML = "Get behind your desk and work";
              document.getElementById('fotoeen').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/desk.jpeg";
            document.getElementById('fototwee').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/lamp.jpeg";
            document.getElementById('fotodrie').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/working.jpeg";
        }
        else if (time >= 12 && time < 13){
            document.body.style.backgroundColor = "#cce5ff";
            document.getElementById('taak').innerHTML = "Lunch time!";
            document.getElementById('titel').innerHTML = "Lunch ideas";
            document.getElementById('fotoeen').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/tosti.jpg";
            document.getElementById('fototwee').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/boxes.jpg";
            document.getElementById('fotodrie').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/kip.jpg";

        }
        else if (time >= 13 && time < 15){
            document.body.style.backgroundColor = "#b3d7ff";
            document.getElementById('taak').innerHTML = "Get back to work";
            document.getElementById('titel').innerHTML = "Check your to do list";
             document.getElementById('fotoeen').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/todo.jpeg";
            document.getElementById('fototwee').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/week.jpg";
            document.getElementById('fotodrie').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/book.jpg";
        }
        else if (time >= 15 && time < 16){
            document.body.style.backgroundColor = "#99ccff";
            document.getElementById('taak').innerHTML = "Time for a snack!";
            document.getElementById('titel').innerHTML = "Snack ideas";
            document.getElementById('fotoeen').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/popcorn.jpg";
            document.getElementById('fototwee').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/fruit.jpeg";
            document.getElementById('fotodrie').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/graan.jpg";
        }
         else if (time >= 16 && time < 18){
            document.body.style.backgroundColor = "#99ccff";
            document.getElementById('taak').innerHTML = "Let's go for a workout!";
            document.getElementById('titel').innerHTML = "Workout suggestions";
            document.getElementById('fotoeen').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/gym.jpeg";
            document.getElementById('fototwee').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/running.jpeg";
            document.getElementById('fotodrie').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/walking.jpeg";
        }
        else if (time >= 18 && time < 19){
            document.body.style.backgroundColor = "#ffcc66";
            document.getElementById('taak').innerHTML = "Time for a dinner!";
            document.getElementById('titel').innerHTML = "Dinner ideas";
            document.getElementById('fotoeen').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/salad.jpg";
            document.getElementById('fototwee').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/wine.jpg";
            document.getElementById('fotodrie').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/pizza.jpeg";
        }
        else if (time >= 19 && time < 20){
            document.body.style.backgroundColor = "#ffb3d9";
            document.getElementById('taak').innerHTML = "Time to relax with some tea or coffee";
            document.getElementById('titel').innerHTML = "Reflect on what you did today";
            document.getElementById('fotoeen').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/coffee.jpeg";
            document.getElementById('fototwee').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/tea.jpeg";
            document.getElementById('fotodrie').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/chocolatemilk.jpeg";
        }
        else if (time >= 20 && time < 22){
            document.body.style.backgroundColor = "#0047b3";
            document.getElementById('taak').innerHTML = "Let's watch a movie or read a book!";
            document.getElementById('titel').innerHTML = "Book reccomendations";
             document.getElementById('fotoeen').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/book.jpeg";
            document.getElementById('fototwee').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/reading.jpeg";
            document.getElementById('fotodrie').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/movie.jpeg";
        }
        else if (time >= 22 && time < 23){
            document.body.style.backgroundColor = "#003380";
             document.getElementById('taak').innerHTML = "Get ready for bed!";
             document.getElementById('titel').innerHTML = "Check your to do list for tomorrow";
              document.getElementById('fotoeen').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/deadline.jpeg";
            document.getElementById('fototwee').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/meeting.jpeg";
            document.getElementById('fotodrie').src= "../Challenge-2-Fleur-Assendelft/afbeeldingen/dinner.jpg";
        }
         else if (time >= 23 && time < 24){
            document.body.style.backgroundColor = "#003380";
            document.getElementById('taak').innerHTML = "Sleep time!";
            document.getElementById('titel').innerHTML = "Everey great dream begins with a dreamer";
     
        }
    }

    function tekst_color() {
    
        var message = document.getElementById('greeting');

        var tl1 = new TimelineMax({repeat: -1});
        tl1.to(message, 10, {right: '100%'});

        var d = new Date();
        var time = d.getHours();

        if ( time <= 6 || time >= 19  ){
            document.getElementById('txt').style.color = "white";
            document.getElementById('greeting').style.color = "white";
            document.getElementById('day').style.color = "white";
            document.getElementById('taak').style.color = "white";
            document.getElementById('taak').style.color = "white";
            }
        else {
            document.getElementById('txt').style.color = "grey";
            document.getElementById('greeting').style.color = "grey";
            document.getElementById('day').style.color = "grey";
            document.getElementById('taak').style.color = "grey";
        } 
    }  

    function voorbeelden() {
         var knop = document.getElementById('afbeeldingen');
         if (knop.style.display !== "none"){
             knop.style.display = "none"
         }
         else{
             knop.style.display = "block"
         }
     }
    

    startTime();
    timeOfTheDay();
    greeting(); 
    task();
    tekst_color();
     //voorbeelden();
