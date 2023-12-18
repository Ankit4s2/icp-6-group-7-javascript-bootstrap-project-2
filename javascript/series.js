<script>
    function fun(){
     const min=1;
    const max=5;
    var num= Math.floor(Math.random()*(max-min))+min;
    if (num===1) {
        var imageElement = document.getElementById("bkgd");
        var imageUrl = "../images/children-img/bg.jpg";
        imageElement.src = imageUrl;
        document.getElementById("bkgd").style.display="block";
        document.getElementById("p1").style.display="none";
        document.getElementById("p2").style.display="none";
    }
    if (num ===2) {
        var imageElement = document.getElementById("bkgd");
        var imageUrl = "../images/children-img/bg2.webp";
        imageElement.src = imageUrl;
        document.getElementById("bkgd").style.display="block";
        document.getElementById("p1").style.display="none";
        document.getElementById("p2").style.display="none";
    }
    if (num ===3) {
        var imageElement = document.getElementById("bkgd");
        var imageUrl = "../images/children-img/bg3.jpg";
        imageElement.src = imageUrl;
        document.getElementById("bkgd").style.display="block";
        document.getElementById("p1").style.display="none";
        document.getElementById("p2").style.display="none";
    }
    if (num ===4) {
        var imageElement = document.getElementById("bkgd");
        var imageUrl = "../images/children-img/bg3.jpg";
        imageElement.src = imageUrl;
        document.getElementById("bkgd").style.display="none";
        document.getElementById("p1").style.display="block";
        document.getElementById("p2").style.display="block";
    }
}
function show(arg) {
    if (arg ===1) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/children-img/img4.jpg";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="DINO TIME";
        document.getElementById("dis").innerHTML="When three children find an egg-shaped time machine, their curiosity gets the better of them. They accidentally turn the contraption on and find themselves millions of years in the past. What's more, they've landed right in the middle of a dinosaur's nest of eggs, and the mother T-Rex is right there staring at them. Fortunately for the children, she thinks they're family, not food. However, they only have until the real eggs hatch to find a way back to their own time.";

    }
    if (arg ===2) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/children-img/img5.jpg";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="KUNG FU PANDA";
        document.getElementById("dis").innerHTML="This movie follows the story of Po (voice of Jack Black), a Panda who works in his father's noodle shop, but dreams of becoming a Kung Fu champion. When Po learns that the village is hosting a tournament to nominate a Dragon Warrior, he makes his way to the Jade Palace to watch the festivities.";
        
    }
    if (arg ===3) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/children-img/img6.webp";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="HARRY POTTER";
        document.getElementById("dis").innerHTML="The novels follow Harry Potter, an 11-year-old boy who discovers he is the son of famous wizards and will attend Hogwarts School of Witchcraft and Wizardry. Harry learns of an entire society of wizards and witches. He befriends several Hogwarts students and teachers along his journey.";
    }
    if (arg ===4) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/children-img/img7.jpg";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="ALVIN AND THE CHIPMUNKS";
        document.getElementById("dis").innerHTML="Alvin and the Chipmunks, directed by Tim Hill, is the story of three cheeky chipmunks (voiced by Justin Long, Matthew Gray Gubler and Jesse McCarthy) who find their way to the city and into the home and heart of David Seville (Jason Lee), a struggling song writer.";
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

    </script>