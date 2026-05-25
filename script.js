// ==========================
// CREATE TWINKLING STARS
// ==========================

const stars = document.getElementById("stars");

for(let i = 0; i < 300; i++){

    const star = document.createElement("div");

    star.classList.add("star");

    // Random Position
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";

    // Random Size
    const size = Math.random() * 4 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    // Random Animation Duration
    star.style.animationDuration =
    (Math.random() * 3 + 1) + "s";

    // Random Delay
    star.style.animationDelay =
    Math.random() * 5 + "s";

    stars.appendChild(star);
}



// ==========================
// FLOATING SPARKLES
// ==========================

for(let i = 0; i < 120; i++){

    const spark = document.createElement("div");

    spark.classList.add("spark");

    spark.style.left =
    Math.random() * 100 + "vw";

    spark.style.top =
    Math.random() * 100 + "vh";

    // Random Size
    const size = Math.random() * 5 + 2;

    spark.style.width = size + "px";
    spark.style.height = size + "px";

    // Random Duration
    spark.style.animationDuration =
    (Math.random() * 6 + 4) + "s";

    spark.style.animationDelay =
    Math.random() * 5 + "s";

    // Glow Effect
    spark.style.boxShadow =
    "0 0 10px white, 0 0 20px #ffe082";

    spark.style.opacity = Math.random();

    document.body.appendChild(spark);
}



// ==========================
// SHOOTING STARS
// ==========================

function createShootingStar(){

    const shootingStar =
    document.createElement("div");

    shootingStar.classList.add("shooting-star");

    shootingStar.style.top =
    Math.random() * 50 + "%";

    shootingStar.style.left =
    Math.random() * 100 + "%";

    document.body.appendChild(shootingStar);

    setTimeout(() => {
        shootingStar.remove();
    }, 3000);
}


// Create shooting stars repeatedly

setInterval(createShootingStar, 2000);

// ==========================
// BLINKING GLOW STARS
// ==========================

for(let i = 0; i < 80; i++){

    const blinkStar =
    document.createElement("div");

    blinkStar.classList.add("blink-star");

    // Random Position
    blinkStar.style.top =
    Math.random() * 100 + "%";

    blinkStar.style.left =
    Math.random() * 100 + "%";

    // Random Size
    const size = Math.random() * 5 + 2;

    blinkStar.style.width = size + "px";
    blinkStar.style.height = size + "px";

    // Random Delay
    blinkStar.style.animationDelay =
    Math.random() * 5 + "s";

    // Random Duration
    blinkStar.style.animationDuration =
    (Math.random() * 3 + 2) + "s";

    stars.appendChild(blinkStar);
}