import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

function cjenik(sifra, cijena, popust) {
  return {
    sifra: sifra,
    cijena: cijena,
    popust: popust
  };
}
var x = prompt(
  "S obzirom na trenutnu situaciju s korona virusom i nemogucnosti uvoza, nas ducan ima veoma oskudno ponudu, nadalje zbog propisanih mjera i oskudne ponude blagajnik ce vam stavljat u kosaru a vi cete samo govoriti kolicinu odredenog proizvoda, pocnimo s kruhom:"
);
var y = prompt("Mliko:");
var x1 = prompt("Vino:");
var x2 = prompt("Brasno:");
var x3 = prompt("Ulje:");
//Kupac je ljubazan pa ce kolicina odredenog proizvoda biti uvijek cijeli broj
function kosarica(a) {
  let cijena = 0;
  let onibezpopusta = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i].popust === 0) onibezpopusta.push(i);
    cijena += a[i].cijena * (1 - a[i].popust / 100);
  }
  if (cijena >= 1000) {
    for (var j = 0; j < onibezpopusta.length; j++) {
      cijena =
        cijena - a[onibezpopusta[j]].cijena + 0.95 * a[onibezpopusta[j]].cijena;
    }
  }
  return cijena;
}

var kruv = cjenik("kruv", 10, 5);
var mliko = cjenik("mliko", 5, 0);
var vino = cjenik("vino", 100, 0);
var brasno = cjenik("brasno", 20, 10);
var ulje = cjenik("ulje", 90, 0);
let a = [];
for (var i = 0; i < x; i++) {
  a.push(kruv);
}
for (i = 0; i < y; i++) {
  a.push(mliko);
}
for (i = 0; i < x1; i++) {
  a.push(vino);
}
for (i = 0; i < x2; i++) {
  a.push(brasno);
}
for (i = 0; i < x3; i++) {
  a.push(ulje);
}
var cijena = kosarica(a);
console.log("Cijena vase kosarice je :", cijena);
function novac(vrijednost, kolicina) {
  return {
    vrijednost: vrijednost,
    kolicina: kolicina
  };
}
var lipa1 = novac(0.01, 28);
var lipa2 = novac(0.02, 25);
var lipa5 = novac(0.05, 31);
var lipa10 = novac(0.1, 24);
var lipa20 = novac(0.2, 32);
var lipa50 = novac(0.5, 20);
var kuna = novac(1, 25);
var kuna2 = novac(2, 14);
var kuna5 = novac(5, 10);
var kuna10 = novac(10, 14);
var kuna20 = novac(20, 18);
var kuna50 = novac(50, 11);
var kuna100 = novac(100, 8);
var kuna200 = novac(200, 9);
var kuna500 = novac(500, 1);
var kuna1000 = novac(1000, 0);
var blagajna = {
  lipa1: lipa1.kolicina,
  lipa2: lipa2.kolicina,
  lipa5: lipa5.kolicina,
  lipa10: lipa10.kolicina,
  lipa20: lipa20.kolicina,
  lipa50: lipa50.kolicina,
  kuna: kuna.kolicina,
  kuna2: kuna2.kolicina,
  kuna5: kuna5.kolicina,
  kuna10: kuna10.kolicina,
  kuna20: kuna20.kolicina,
  kuna50: kuna50.kolicina,
  kuna100: kuna100.kolicina,
  kuna200: kuna200.kolicina,
  kuna500: kuna500.kolicina,
  kuna1000: kuna1000.kolicina
};
blagajna.stanje =
  blagajna.lipa1 * 0.01 +
  blagajna.lipa2 * 0.02 +
  blagajna.lipa5 * 0.05 +
  blagajna.lipa10 * 0.1 +
  blagajna.lipa20 * 0.2 +
  blagajna.lipa50 * 0.5 +
  blagajna.kuna * 1 +
  blagajna.kuna2 * 2 +
  blagajna.kuna5 * 5 +
  blagajna.kuna10 * 10 +
  blagajna.kuna20 * 20 +
  blagajna.kuna50 * 50 +
  blagajna.kuna100 * 100 +
  blagajna.kuna200 * 200 +
  blagajna.kuna500 * 500 +
  blagajna.kuna1000 * 1000;

function najveci(broj) {
  if ((blagajna.kuna1000 < broj) & (blagajna.kuna1000 > 0)) return 1000;
  if ((blagajna.kuna500 < broj) & (blagajna.kuna500 > 0)) return 500;
  if ((blagajna.kuna200 < broj) & (blagajna.kuna200 > 0)) return 200;
  if ((blagajna.kuna100 < broj) & (blagajna.kuna100 > 0)) return 100;
  if ((blagajna.kuna50 < broj) & (blagajna.kuna50 > 0)) return 50;
  if ((blagajna.kuna20 < broj) & (blagajna.kuna20 > 0)) return 20;
  if ((blagajna.kuna10 < broj) & (blagajna.kuna10 > 0)) return 10;
  if ((blagajna.kuna5 < broj) & (blagajna.kuna5 > 0)) return 5;
  if ((blagajna.kuna2 < broj) & (blagajna.kuna2 > 0)) return 2;
  if ((blagajna.kuna2 < broj) & (blagajna.kuna1 > 0)) return 1;
  if ((blagajna.lipa50 < broj) & (blagajna.lipa50 > 0)) return 0.5;
  if ((blagajna.lipa20 < broj) & (blagajna.lipa20 > 0)) return 0.2;
  if ((blagajna.lipa10 < broj) & (blagajna.lipa10 > 0)) return 0.1;
  if ((blagajna.lipa5 < broj) & (blagajna.lipa5 > 0)) return 0.05;
  if ((blagajna.lipa2 < broj) & (blagajna.lipa2 > 0)) return 0.02;
  if ((blagajna.lipa1 < broj) & (blagajna.lipa1 > 0)) return 0.01;
  else return 0;
}

//Radi jednostavnosti kupac je sitnise ostavia doma
var k10 = prompt("10 kuna:");
var k20 = prompt("20 kuna:");
var k50 = prompt("50 kuna:");
var k100 = prompt("100 kuna:");
var k200 = prompt("200 kuna:");
var k500 = prompt("500 kuna:");
var k1000 = prompt("1000 kuna:");

var konacno =
  k10 * 10 +
  k20 * 20 +
  k50 * 50 +
  k100 * 100 +
  k200 * 200 +
  k500 * 500 +
  k1000 * 1000;
if (konacno >= cijena) {
  blagajna.kuna10 += k10;
  blagajna.kuna20 += k20;
  blagajna.kuna50 += k50;
  blagajna.kuna100 += k100;
  blagajna.kuna200 += k200;
  blagajna.kuna500 += k500;
  blagajna.kuna1000 += k1000;
  var c = konacno - cijena;
  while (c > 0) {
    var d = najveci(c);
    if (d === 0) {
      console.log("U blagajni nema odgovarajucih apoena za vratit");
      break;
    }
    switch (d) {
      case 0.01:
        blagajna.lipa1--;
        break;
      case 0.02:
        blagajna.lipa2--;
        break;
      case 0.05:
        blagajna.lipa5--;
        break;
      case 0.1:
        blagajna.lipa10--;
        break;
      case 0.2:
        blagajna.lipa20--;
        break;
      case 0.5:
        blagajna.lipa50--;
        break;
      case 1:
        blagajna.kuna--;
        break;
      case 2:
        blagajna.kuna2--;
        break;
      case 10:
        blagajna.kuna100--;
        break;
      case 20:
        blagajna.kuna20--;
        break;
      case 50:
        blagajna.kuna50--;
        break;
      case 100:
        blagajna.kuna100--;
        break;
      case 200:
        blagajna.kuna00--;
        break;
      case 500:
        blagajna.kuna500--;
        break;
      case 1000:
        blagajna.kuna1000--;
        break;
      default:
        c -= d;
    }
  }
}
blagajna.stanje =
  blagajna.lipa1 * 0.01 +
  blagajna.lipa2 * 0.02 +
  blagajna.lipa5 * 0.05 +
  blagajna.lipa10 * 0.1 +
  blagajna.lipa20 * 0.2 +
  blagajna.lipa50 * 0.5 +
  blagajna.kuna * 1 +
  blagajna.kuna2 * 2 +
  blagajna.kuna5 * 5 +
  blagajna.kuna10 * 10 +
  blagajna.kuna20 * 20 +
  blagajna.kuna50 * 50 +
  blagajna.kuna100 * 100 +
  blagajna.kuna200 * 200 +
  blagajna.kuna500 * 500 +
  blagajna.kuna1000 * 1000;
console.log(blagajna.stanje);
