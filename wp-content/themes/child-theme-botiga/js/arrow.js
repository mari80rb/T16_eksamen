// Vent, indtil DOM'en er indlæst
document.addEventListener("DOMContentLoaded", function() {
    // Hent referencen til pilens HTML-element
    let arrow = document.getElementById("arrow");
    arrow.style.display = "block"; // Vis pilen ved siden af hero-billedet
    
    let prevScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    // Gem den tidligere scrollposition
    
    // Registrer en eventlistener til at lytte efter scroll-hændelser
    window.addEventListener("scroll", function() {
    let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    // Hent den aktuelle scrollposition
    
    let isScrollingUp = currentScrollPosition < prevScrollPosition;
    // Tjek om brugeren scroller opad ved at sammenligne den aktuelle scrollposition med den tidligere
    
    if (isScrollingUp) {
    // Hvis brugeren scroller opad
    arrow.classList.remove("arrow-down"); // Fjern klasse for pil nedad
    arrow.classList.add("arrow-up"); // Tilføj klasse for pil opad
    } else {
    // Hvis brugeren scroller nedad eller er i ro
    arrow.classList.remove("arrow-up"); // Fjern klasse for pil opad
    arrow.classList.add("arrow-down"); // Tilføj klasse for pil nedad
    }
    
    prevScrollPosition = currentScrollPosition;
    // Opdater den tidligere scrollposition til den aktuelle værdi for næste sammenligning
    });
    });