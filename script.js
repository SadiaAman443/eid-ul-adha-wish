// ==========================
// DEVICE CHECK
// ==========================

const isMobile = window.innerWidth < 768;


// ==========================
// STAR COUNTS
// ==========================

const starCount = isMobile ? 120 : 300;

const sparkCount = isMobile ? 40 : 120;

const blinkStarCount = isMobile ? 30 : 80;


// ==========================
// CREATE TWINKLING STARS
// ==========================

const stars = document.getElementById("stars");

for(let i = 0; i < starCount; i++){

    const star = document.createElement("div");

    star.classList.add("star");

    // Random Position

    star.style.top =
    Math.random() * 100 + "%";

    star.style.left =
    Math.random() * 100 + "%";

    // Random Size

    const size =
    Math.random() * 4 + 1;

    star.style.width =
    size + "px";

    star.style.height =
    size + "px";

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

for(let i = 0; i < sparkCount; i++){

    const spark =
    document.createElement("div");

    spark.classList.add("spark");

    spark.style.left =
    Math.random() * 100 + "vw";

    spark.style.top =
    Math.random() * 100 + "vh";

    // Random Size

    const size =
    Math.random() * 4 + 2;

    spark.style.width =
    size + "px";

    spark.style.height =
    size + "px";

    // Random Duration

    spark.style.animationDuration =
    (Math.random() * 6 + 4) + "s";

    spark.style.animationDelay =
    Math.random() * 5 + "s";

    spark.style.boxShadow =
    "0 0 10px white, 0 0 20px #ffe082";

    spark.style.opacity =
    Math.random();

    document.body.appendChild(spark);
}



// ==========================
// BLINKING GLOW STARS
// ==========================

for(let i = 0; i < blinkStarCount; i++){

    const blinkStar =
    document.createElement("div");

    blinkStar.classList.add("blink-star");

    // Random Position

    blinkStar.style.top =
    Math.random() * 100 + "%";

    blinkStar.style.left =
    Math.random() * 100 + "%";

    // Random Size

    const size =
    Math.random() * 5 + 2;

    blinkStar.style.width =
    size + "px";

    blinkStar.style.height =
    size + "px";

    // Random Delay

    blinkStar.style.animationDelay =
    Math.random() * 5 + "s";

    // Random Duration

    blinkStar.style.animationDuration =
    (Math.random() * 3 + 2) + "s";

    stars.appendChild(blinkStar);
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


// Less shooting stars on mobile

const shootingInterval =
isMobile ? 5000 : 2000;

setInterval(
createShootingStar,
shootingInterval
);





