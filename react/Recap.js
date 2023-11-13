var kullanicilar=[
    {email:"nabermoruk@gmail.com",sifre:"12345"},
    {email:"nasılsınmoruk@gmail.com",sifre:"1234"},
    {email:"iyiyimmoruk@gmail.com",sifre:"12345"}
]

var tivitler=[
    {email:"nabermoruk@gmail.com",tivit:"tayip baba oley"},
    {email:"nabermoruk@gmail.com",tivit:"tayip istifa"},
    {email:"iyiyimmoruk@gmail.com",tivit:"vatan haini"},
    {email:"nasılsınmoruk@gmail.com",tivit:"bayraktar"}
]
var email=prompt("email?")
var sifre=prompt("sifre?")

function kullanicivarmi() {
    for(i=0;i<kullanicilar.length;i++){
        if(kullanicilar[i].email==email&&kullanicilar[i].sifre==sifre){
            return true;
        }
    }
    return false;
}

function giris() {
    if(kullanicivarmi()==true){
        console.log(tivitler)
    }
    else{
        console.log("girilen bilgiler hatalı")
    }
}
giris()