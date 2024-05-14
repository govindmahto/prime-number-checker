function returnNumber(){
    let a = document.getElementById("inputNumber").value;
let b;
let c;
if(a<=1){
    c = "is a neither prime nor composite"
}
if (a==2||a==3){
    c = " is a prime number"
}
for(b=2; b*b<=a; b++){
    if(a%b==0){
       c = "is not a prime number";

    }else if(c==undefined)
    {c = "is a prime number";}

}

document.write(a , " " ,c);


}


