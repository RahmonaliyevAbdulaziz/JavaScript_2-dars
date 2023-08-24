let sana = new Date();

/*sana.setFullYear(2007);
sana.setMonth(12);
sana.setDate(29);
sana.setHours(15);
sana.setMinutes(10);
sana.setSeconds(20);*/

let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let oylar = [
    "Yanvar", "Fevral", "Mart",
    "Aprel","May","Iyun","Iyul",
    "Avgust","Sentabr","Oktabr",
    "Noyabr","Dekabr"]
let soat = sana.getHours();
let minut =sana.getMinutes();
let sikunt = sana.getSeconds();

document.write(minut);

