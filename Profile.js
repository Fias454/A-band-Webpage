const HomePagebut = document.getElementById("Homebut");
const bandbutbut = document.getElementById("bandbut");
const Tourbutbut = document.getElementById("Tourbut");
const HomePageDis = document.getElementById("HomePage");
const BandPage = document.getElementById("BandPage");
const TourPage = document.getElementById("TourPage");
const ContactPage = document.getElementById("Contactbut");
TourPage.style.display ="none";
function ChangeBandTo(){
    HomePageDis.style.display = "none";
    BandPage.style.display = "block"
    TourPage.style.display ="none"
}

function ChangeHomeTo(){
    HomePageDis.style.display ="block"
    BandPage.style.display = "none"
    TourPage.style.display ="none"
}
function ChangeTourTo(){
    HomePageDis.style.display ="none"
    BandPage.style.display = "none"
    TourPage.style.display ="block"
}

HomePagebut.addEventListener("click", ChangeHomeTo);
bandbutbut.addEventListener("click", ChangeBandTo);
Tourbutbut.addEventListener("click", ChangeTourTo);