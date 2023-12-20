const min=1;
const max=6;
function switchimg(){
const cng= Math.floor(Math.random()*(max-min))+min;
const element=document.getElementById("switch");
if(cng==1){
    element.src="../images/coffee.png";
}
else if(cng==2){
    element.src="../images/kapil.png";
}
else if(cng==3){
    element.src="../images/rishta.png";

}
}
function show(arg) {
    if (arg ===1) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/Anupama.png";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="ANUPAMA";
        document.getElementById("dis").innerHTML="Anupamaa Shah, a selfless Gujarati homemaker in Ahmedabad, is aloof to her own identity and obligated to be in service of her family.";

    }
    if (arg ===2) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/Ghum_Hai_Kisikey_Pyaar_Meiin.png";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="GHUM HAI KISIKEY PYAAR MEIIN";
        document.getElementById("dis").innerHTML="Ghum Hai Kisikey Pyaar Meiin is produced by Cockrow Entertainment and Shaika Films and is a loose adaptation of Kusum Dola.";
        
    }
    if (arg ===3) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/titli.png";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="TITLI";
        document.getElementById("dis").innerHTML="The Star Plus show, 'Titli,' has been keeping its viewers engaged with its intriguing storyline, led by Avinash Mishra and Neha Solanki. In the ongoing plot, Titli has been unraveling the reasons behind Garv's persistent anger issues, working diligently to help him.";
    }
    if (arg ===4) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/imli.png";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="IMLI";
        document.getElementById("dis").innerHTML="Imlie serial is the story of a village girl name Imli (Imlie) who is proud to be a village girl and doesn't shy away from giving answers to village people.";
    }
    if (arg ===5) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/Chahatein.png";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="YE HAI CHAHATEIN";
        document.getElementById("dis").innerHTML="A passionate love story between a famous rockstar, Rudraksh Khurana and a gynaecologist, Dr Preesha Srinivasan who fall in love after raising their respective siblings' son together.";
    }
    if (arg ===6) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/Doriyaa.png";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="TERI MERI DORIYAA";
        document.getElementById("dis").innerHTML="It's hate at first sight for Sahiba and Angad. But destined to be together, their lives get intertwined by a marriage alliance, and a love-hate story ensues. ";
    }
    if (arg ===7) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/Siya ke Ram.png";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="SIYA KE RAM";
        document.getElementById("dis").innerHTML="Siya Ke Ram ( transl. Sita's Ram) is an Indian TV series on Star Plus produced by Nikhil Sinha under the banner of Triangle Film Company. This show presents the epic Ramayana, the story of Rama and Devi Sita from Sita's perspective. A classic epic Ramayana, the story of Ram and Sita, retold through the eyes of the righteous, beautiful and brave Sita.";
    }
    if (arg ===8) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/Show.png";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
        document.getElementById("hd").innerHTML="RAVIVAAR WITH STAR PARIVAAR";
        document.getElementById("dis").innerHTML="A musical game show with different families from your favourite Plus shows. The teams compete against each other in weekly face-offs to win the cash prize!.";
    }
}
