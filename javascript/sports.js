const min=1;
const max=6;
function switchimg(){
const cng= Math.floor(Math.random()*(max-min))+min;
const element=document.getElementById("switch");
if(cng==1){
    element.src="../images/sports-images/football.jpg";
}
else if(cng==2){
    element.src="../images/sports-images/ipl.jpg";
}
else if(cng==3){
    element.src="../images/sports-images/kabbadi.jpg";
}
else if(cng==4){
    element.src="../images/sports-images/hockey.jpeg";
}
else{
    element.src="../images/sports-images/badminton.jpeg";
}
}
function show(arg) {
    if (arg ===1) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/sports-images/csk2.jpeg";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="CSK won the IPL";
        document.getElementById("dis").innerHTML="They are one of ten teams that competed in the 2023 Indian Premier League. The side have won the IPL title four times. This team qualified for the final of IPL 2023 for the 10th time. Chennai Super Kings won their 5th IPL Title after defeating Gujarat Titans in the rain affected 2023 Indian Premier League final.";

    }
    if (arg ===2) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/sports-images/ipl2.jpeg";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="IPL 2024";
        document.getElementById("dis").innerHTML="IPL 2024 will be played between March 22 and the end of May, with the final schedule to be announced once the polling dates for India's general elections have been finalised by the Election Commission.A total of 333  players (214 are Indians and 119 are overseas) are expected to go under the hammer, with 77 slots to be filled, out of which there will be 30 foreigners. ";
        
    }
    if (arg ===3) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/sports-images/L3.jpeg";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="HS Prannoy";
        document.getElementById("dis").innerHTML="ndian badminton player HS Prannoy secured the bronze medal in the men’s singles category at the prestigious BWF World Badminton Championships 2023. His remarkable journey in the tournament showcased his skill and determination on the international stage.";
    }
    if (arg ===4) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/sports-images/4.jpeg";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="Asian Games 2023";
        document.getElementById("dis").innerHTML="Neeraj Chopra wins Gold Medal,creating yet another historic moment, world number one javelin thrower – India's Neeraj Chopra – on 4 October clinched a gold medal with a season-best throw of 88.88m at the 19th Asian Games taking place in China's Hangzhou.With this, Chopra defended his title and also the number-one spot in the world.";
    }
    if (arg ===5) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/children-img/img8.jpeg";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="CINDERELLA";
        document.getElementById("dis").innerHTML="An abusive stepmother and two stepdaughters are invited to a royal ball, leaving behind their daughter and sister whom they call Cinderella. Her fairy godmother appears and grants Cinderella's wish to go to the ball, magically providing a coach, servants, a dress, and perfectly fitted glass slippers.";
    }
    if (arg ===6) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/children-img/img9.webp";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="THE WILLOUGHBYS";
        document.getElementById("dis").innerHTML="After the four children are kicked out of their home by their parents, the children are desperate to find new parents and think of a plan to 'orphan themselves' by sending their parents to a deadly vacation so that they can die.";
    }
    if (arg ===7) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/children-img/img10.webp";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="TEEN TITANS GO";
        document.getElementById("dis").innerHTML="Teen Titans Go! is an animated series that follows the adventures of the young Titans: Beast Boy, Robin, Cyborg, Raven and Starfire. They reside in Jump City when they are not saving the world while living together as teenagers without adults who disrupt the young Titans.";
    }
    if (arg ===8) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/children-img/img11.webp";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="HOTEL TRANSYLVANIA 3";
        document.getElementById("dis").innerHTML="In the film, Dracula finds love with a ship captain named Ericka while embarks on a vacation on a luxury cruise liner with his family and friends, but Mavis later discovers that Ericka is actually the great-granddaughter of Abraham Van Helsing, Drac's arch-nemesis who secretly plan to destroy them.";
    }
}