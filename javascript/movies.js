const min=1;
const max=6;
function switchimg(){
const cng= Math.floor(Math.random()*(max-min))+min;
const element=document.getElementById("switch");
if(cng==1){
    element.src="../images/movies-images/L6.jpeg";
}
else if(cng==2){
    element.src="../images/movies-images/L4.jpg";
}
else if(cng==3){
    element.src="../images/movies-images/sam-bahadur-img.jpg";

}
else if(cng==4){
    element.src="../images/movies-images/L3.jpg";

}
else if(cng==5){
    element.src="../images/movies-images/L7.jpg";

}
}
function show(arg) {
    if (arg ===1) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/movies-images/img-1.jpg";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="Shiddhat";
        document.getElementById("dis").innerHTML="A passionate love story involving two couples which highlights the contrast between a regular, mature yet egoistic husband and a unique, happy go lucky, enamored, overzealous boy chasing after the love of his life.";

    }
    if (arg ===2) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/movies-images/img-2.jpg";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="Vikram";
        document.getElementById("dis").innerHTML="Action | Crime | Thriller <br> A special investigator discovers a case of serial killings is not what it seems to be, and leading down this path is only going to end in a war between everyone involved.";
        
    }
    if (arg ===3) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/movies-images/img-3.jpg";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="Hungama 2";
        document.getElementById("dis").innerHTML="Hungama 2 is a 2021 Indian Hindi-language romantic comedy filmIt is loosely based on Priyadarshan's own 1994 Malayalam film Minnaram with a comedy sequence borrowed from his other Malayalam film Vandanam (1989) both starring Mohanlal.[2] The film stars Paresh Rawal, Shilpa Shetty, Meezaan Jafri and Pranitha Subhash.[3].";
    }
    if (arg ===4) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/movies-images/img-4.jpg";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="Liger";
        document.getElementById("dis").innerHTML="Action | Drama | Romance <br>A story about martial arts, dreams and star crossed lovers. Liger is an MMA fighter who trains hard and rises up the ranks with one goal in mind, to fight like his idol, world renowned MMA fighter Mark Anderson and get noticed by him..";
    }
    if (arg ===5) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/movies-images/img-5.jpg";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="Rocky aur Rani ki Prem Kahani";
        document.getElementById("dis").innerHTML="Drama | Comedy <br> A rollercoaster journey taking you through an epic love story in a new-age era, topped with hearty laughs and posing questions about love, family and the meaning of breaking away from generations of family traditions in the name of love .";
    }
    if (arg ===6) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/movies-images/img-6.jpg";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="Bhuj";
        document.getElementById("dis").innerHTML="Bhuj: The Pride of India is a 2021 Indian Hindi-language war film[2] directed by Abhishek Dudhaiya.[3] Set during the Indo-Pakistani War of 1971, it follows Indian Air Force Squadron Leader Vijay Karnik — then in-charge of the Bhuj Air Force Base who, with the help of 300 local women of Madhapar Village, reconstructed the damaged landing strip in 72 hours. .";
    }
    if (arg ===7) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/movies-images/img-7.jpg";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="Vikrant Rona";
        document.getElementById("dis").innerHTML="Vikrant Rona is a 2022 Indian Kannada-language action thriller film[13] written and directed by Anup Bhandari, produced by Jack Manjunath and co-produced by Alankar Pandian.[14][15] It stars Sudeepa in the title role with Nirup Bhandari, Neetha Ashok, and Jacqueline Fernandez.";
    }
    if (arg ===8) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/movies-images/img-8.jpg";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="Atrangi re";
        document.getElementById("dis").innerHTML="The film tells the story of a girl named Rinku who is in love with a magician named Sajjad. She gets forcefully married to Dr. Vishu. Vishu soon falls in love with Rinku but the love triangle gets weirder when Sajjad shows up.";
    }
}