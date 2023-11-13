const dizi=[1,2,3,4];
const karedizisi=[];
dizi.forEach(sayi=>{karedizisi.push(sayi*sayi)})
console.log(karedizisi);
document.write(karedizisi);

const mapdizi =dizi.map(sayi=>sayi*5)
console.log(mapdizi);

const filter =dizi.filter(sayi=>sayi>2)
console.log(filter);

const  toplam = dizi.reduce((acc,sayi)=>{return acc+sayi},5)//5 burda acc değeri
console.log(toplam);