function moviePoster(movie){
    const bigMoviePoster = document.getElementById('movieBigPoster');
    const titleOfMovie = document.getElementById('movieTitle');
    const ratingsOfMovie = document.getElementById('movieRatings');
    const descriptionOfMovie = document.getElementById('movieDescription');

    if(movie == 'edge-of-tomorrow' ){
        bigMoviePoster.src = "../images/home-images/edge-of-tomorrow.jpeg"; 
        titleOfMovie.innerText = 'Edge Of Tomorrow';
        ratingsOfMovie.innerText = '•98% match •2014 •Action/Sci-fi •1h53min';
        descriptionOfMovie.innerText ='•William Cage (Tom Cruise), an officer who has never seen combat, is assigned to a suicide mission. Killed within moments, Cage finds himself thrown into a time loop, in which he relives the same brutal fight -- and his death -- over and over again.';
    }else if(movie == 'bahubali'){
        bigMoviePoster.src = "../images/home-images/bahubali.png";
        titleOfMovie.innerText = 'Bahubali';
        ratingsOfMovie.innerText = '•95% match •2015 •Action/Fantacy •2h38min';
        descriptionOfMovie.innerText ='•In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.';
    }else if(movie == 'intersteller'){
        bigMoviePoster.src = "../images/home-images/intersteller.png";
        titleOfMovie.innerText = 'Intersteller';
        ratingsOfMovie.innerText = '•97% match •2014 •Sci-fi/Adventure •2h49min';
        descriptionOfMovie.innerText ='•When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.';
    }else{
        console.log("not applicable");
    }
}

function showPoster(tvShows){
    const bigShowPoster = document.getElementById('showBigPoster');
    const titleOfShow = document.getElementById('showTitle');
    const ratingsOfShow = document.getElementById('showRatings');
    const descriptionOfShow = document.getElementById('showDescription');

    if(tvShows == 'savdhan-india' ){
        bigShowPoster.src = "../images/home-images/savdhan-india.jpeg"; 
        titleOfShow.innerText = 'Savdhan India';
        ratingsOfShow.innerText = '•66% liked •2012 •Crime •7 seasons';
        descriptionOfShow.innerText ='•The show deals with real-life crimes stories of murder, kidnapping, domestic violence, fraud, robbery, forgery, rape, sexual assault and other crimes.';
    }else if(tvShows == 'Aghori'){
        bigShowPoster.src = "../images/home-images/Aghori.jpg";
        titleOfShow.innerText = 'Aghori';
        ratingsOfShow.innerText = '•92% liked •2019 •Thriller •1 season';
        descriptionOfShow.innerText ='•When Advik falls in love with Kamakshi, Rudranath, the guru of Advik, asks him to get his lover to sacrifice her life for him, which will make Advik immortal.';
    }else if(tvShows == 'ye-rishta-kya'){
        bigShowPoster.src = "../images/home-images/ye-rishta-kya.jpeg";
        titleOfShow.innerText = 'Yeh Rishta Kya Kehlata Hai';
        ratingsOfShow.innerText = '•76% liked •2009 •Drama •68 seasons';
        descriptionOfShow.innerText ="•Dr Abhimanyu, a misogamist, finds himself getting attracted to Akshara, Kartik and Naira's daughter. Things take a tricky turn when Akshara's half-sister, Arohi, falls in love with him.";
    }else{
        console.log("not applicable");
    }
}    

function sportsPoster(sports){
    const bigSportsPoster = document.getElementById('sportsBigPoster');
    const titleOfSports = document.getElementById('sportsTitle');
    const ratingsOfSports = document.getElementById('sportsRatings');
    const descriptionOfSports = document.getElementById('sportsDescription');

    if(sports == 'ipl' ){
        bigSportsPoster.src = "../images/home-images/ipl.jpeg"; 
        titleOfSports.innerText = 'IPL';
        ratingsOfSports.innerText = '•2008';
        descriptionOfSports.innerText ="•The Indian Premier League is a men's Twenty20 cricket league that is annually held in India and contested by ten city-based franchise teams. The BCCI founded the league in 2007. The competition is usually held in summer between March and May every year.";
    }else if(sports == 'javelin'){
        bigSportsPoster.src = "../images/home-images/javelin.jpeg";
        titleOfSports.innerText = 'Javelin';
        ratingsOfSports.innerText = '•javelin throw';
        descriptionOfSports.innerText ='•A javelin is a light spear designed primarily to be thrown, historically as a ranged weapon. Today, the javelin is predominantly used for sporting purposes such as the Javelin throw. The javelin is nearly always thrown by hand, unlike the sling, bow, and crossbow, which launch projectiles with the aid of a hand-held mechanism. However, devices do exist to assist the javelin thrower in achieving greater distances, such as spear-throwers or the amentum.';
    }else if(sports == 'fifa'){
        bigSportsPoster.src = "../images/home-images/fifa.jpeg";
        titleOfSports.innerText = 'Fifa';
        ratingsOfSports.innerText = '•FIFA •EAsports ';
        descriptionOfSports.innerText ="•The Fédération internationale de football association (French for 'International Association Football Federation', abbreviated as FIFA and pronounced in English as /ˈfiːfə/) is the international governing body of association football, beach soccer, and futsal. ";
    }else{
        console.log("not applicable");
    }
}

function cartoonPoster(cartoon){
    const bigCartoonPoster = document.getElementById('cartoonBigPoster');
    const titleOfCartoon = document.getElementById('cartoonTitle');
    const ratingsOfCartoon = document.getElementById('cartoonRatings');
    const descriptionOfCartoon = document.getElementById('cartoonDescription');

    if(cartoon == 'croods' ){
        bigCartoonPoster.src = "../images/home-images/croods.jpeg"; 
        titleOfCartoon.innerText = 'The Croods 2: A New Age';
        ratingsOfCartoon.innerText = '•69% match •2020 •Adventure/Comedy •1h35min';
        descriptionOfCartoon.innerText ='•The Croods is a 2013 American animated adventure comedy film produced by DreamWorks Animation and distributed by 20th Century Fox. The film was written and directed by Kirk DeMicco and Chris Sanders, and stars the voices of Nicolas Cage, Emma Stone, Ryan Reynolds, Catherine Keener, Clark Duke, and Cloris Leachman.';
    }else if(cartoon == 'despicable-me'){
        bigCartoonPoster.src = "../images/home-images/despicable-me-2.jpg";
        titleOfCartoon.innerText = 'Despicable Me 2';
        ratingsOfCartoon.innerText = '•73% match •2013 •Comedy/Family •1h38min';
        descriptionOfCartoon.innerText ='•When a new criminal comes to town, the Anti-Villain League decides to hire Gru in order to fight him off. While Gru initially refuses, he eventually agrees after his aide goes back to his evil ways.';
    }else if(cartoon == 'inside-out'){
        bigCartoonPoster.src = "../images/home-images/inside-out.jpeg";
        titleOfCartoon.innerText = 'Inside Out';
        ratingsOfCartoon.innerText = '•97% match •2015 •Comedy/Fantacy •1h35min';
        descriptionOfCartoon.innerText ='•Eleven-year-old Riley has moved to San Francisco, leaving behind her life in Minnesota. She and her five core emotions, Fear, Anger, Joy, Disgust and Sadness, struggle to cope with her new life.';
    }else{
        console.log("not applicable");
    }
}

function getTheOpinion(opinion){
    let likedTheMovie = document.getElementById('icon1');
    let diskedTheMovie = document.getElementById('icon2');
    let addedToWatchlist = document.getElementById('icon3');

    if(opinion == liked){
        likedTheMovie.classList = remove("fa-regular");
        likedTheMovie.classList = add("fa-solid");
    }else if(opinion == disliked){
        dislikedTheMovie.classList = remove("fa-regular");
        dislikedTheMovie.classList = add("fa-solid");
    }else if(opinion == added){
        addedToWatchlist.classList = remove("fa-plus");
        addedToWatchlist.classList = add("fa-check");
    }else{
        console.log("Not applicable");
    }
}