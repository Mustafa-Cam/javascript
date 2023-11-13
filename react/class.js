class Personel{
constructor(ad,soyad){
    this.ad=ad;
    this.soyad=soyad;
}
kaydet(){
    console.log("peraonel kaydedildi" + this.ad);

}
}

const personel = new Personel("mustafa","çam");

personel.kaydet();

personel.ad="mustafa"
console.log(personel.ad);