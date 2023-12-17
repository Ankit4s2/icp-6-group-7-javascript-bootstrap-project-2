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
    }
    if (arg ===2) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/children-img/img5.webp";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
    }
    if (arg ===3) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/children-img/img6.webp";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
    }
    if (arg ===4) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/children-img/img7.jpg";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
    }
    if (arg ===5) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/children-img/img8.jpeg";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
    }
    if (arg ===6) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/children-img/img9.webp";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
    }
    if (arg ===7) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/children-img/img10.webp";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
    }
    if (arg ===8) {
        var imageElement = document.getElementById("pic");;
        var imageUrl = "../images/children-img/img11.webp";
        imageElement.src = imageUrl;
        document.getElementById("blk").style.display="block";
    }
}