function returnNumber(){
    let a = document.getElementById("inputNumber").value;
let b;
let c;
if(a==2){
    c = "is a prime number"
}
for(b=2; b<a; b++){
    if(a%b==0){
       c = "is not a prime number";

    }else if(c==undefined)
    {c = "is a prime number";}

}

document.write(a , " " ,c);


}


