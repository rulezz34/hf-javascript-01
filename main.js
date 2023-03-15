// Jegy árak meghatározása
let felnottJegy = 1900;
let diakJegy = 1100;

// Jegy mennyiségének bekérése
let jegyMennyiseg = prompt("Mennyi jegyet szeretnél vásárolni?");

// Jegy mennyiségének vizsgálata. Jogosult-e a 10% kedvezményre?
if (jegyMennyiseg > 10) {
  (felnottJegy = felnottJegy * 0.9) && (diakJegy = diakJegy * 0.9);
} else {
  (felnottJegy = felnottJegy * 1) && (diakJegy = diakJegy * 1);
}

// Jegy típusának megadása
let jegyTipus = prompt(
  "Milyen típusú jegyet szeretnél vásárolni? Diák/Felnőtt"
);

// eredmeny változó meghatározása
let eredmeny = 0;

// Jegyek mennyiségének és típusának megvizsgálása, kiszámítása
if (jegyTipus === "Diák") {
  eredmeny = diakJegy * jegyMennyiseg;
} else if (jegyTipus === "Felnőtt") {
  eredmeny = felnottJegy * jegyMennyiseg;
} else {
  alert("Nem jó az adat formátuma! Kérlek próbáld újra!");
}

// Eredmény kiíratása konzolba
alert(eredmeny + " Ft-ba fog kerülni.");
