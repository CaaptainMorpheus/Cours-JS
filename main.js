/* const monTab = [];
   monTab['enfant'] = 'toto';
   monTab['mamam'] = 'tati';
   monTab['papa'] = 'tutu';  
console.log(monTab);  

var maChaine=new String("exemple");
   
   var a = 42
   var b = 4.2
   var c = -42
   var d = "42"
  
     alert("ma variable a: "+ typeof (a) +
     "\nma variable b est de type :" + typeof(b) +
     "\nma variable b est de type :" + typeof(c) +
     "\nma variable b est de type :" + typeof(d));
     
  var machaine = "Exemple";
  var maChaine = new String("Exemple");

 alert("ma variable machaine est de type: " +typeof(machaine)+
 "/nama variable maChaine est de type : " +typeof(maChaine));

   var n = null ;
   var u = undefined;
   var nn = NaN;
  alert("ma variable machaine est de type: " +typeof(n)+
 "/nama variable maChaine est de type : " +typeof(u)+
 "/nma variable nn est de type : " + typeof (nn));
 
 var note =5;

 switch(note){
   case 5:
      alert("votre note est de : 5")
      break;
   case 10:
      alert("votre note est de 10")
   
   default:
      alert("nous ne connaisons pas votre note")
      break;   
 }


var note = 2
var noteAmericaine = "A++"




if (note == 20 ) {
   noteAmericaine = "A++"
   
} else if (note <= 19 && note >= 18) 
{
   noteAmericaine = "A"
   
}else if (note <= 17 && note >= 15) 
{
    noteAmericaine = "B"
}else if (note <= 14 && note >= 12) 
{
    noteAmericaine = "c"
}else if (note <= 11 && note >= 9) 
{
    noteAmericaine = "D"
}else if (note <= 8 && note >= 6) 
{
    noteAmericaine = "D"
}else if (note <= 5 && note >= 4) 
{
    noteAmericaine = "E"
}else if (note <= 3 && note >= 0) 
{
    noteAmericaine = "F"
}else {
   noteAmericaine = "ABS"
}

switch (noteAmericaine) {
   case "A++":
      alert ("Excellent taf ")
      break;
   case "A":
      alert ("tres bien ")
      break;
   case "B":
      alert ("bien ")
      break;
   case "C":
      alert ("correct ")
      break;
   case "D":
      alert ("pas bien")
      break;
   case "E":
      alert (" vraiment pas bien")
      break;
   case "F":
      alert ("Foutu ")
      break;

   default:
      alert("ABS") 
      break;
}

var facture=1000;
var reduction=0;

if (facture<1000){
   reduction=0;

}else if(facture<=2500 && facture >=1000) {
   reduction=5;
}else{
   reduction=10;
}

 var total =facture-((reduction/100)*facture);

 switch (reduction) {
   case 0:
      console.log("autres",facture);
      break;
 
   default:
      console.log("total :",total);
      break;
 }



 var arrayNbr = [1,2,3,4];

  arrayNbr.push();ajout la valeur indique à la fin du tableau 
  arrayNbr.pop();retitre la derrnier valeur
  arrayNbr.shift(); retitre la premier valeur
  arrayNbr.unshift(0)ajout la valeur indiquue au debut du tableau 


 console.table(arrayNbr);


 var arrayNbr = [1,2,3];
 var arrayStr = ("a","b","c");

var arrayCopy = arreyStr.contact("d")//fusionne des tableaux sans changer la valeur initial 
arrayStr.join("-")// join les valeur en elle exemple: a-b-c...... ou ("l")  exemple : alblc
arrayStr.slice(2)  // sa copy le tableau et ca retire les 2 premier valeur 
arrayStr.find(el => el > 2);// renvoie la valeur du premier element trouvedans le tableau qui respect la condition 
arrayNbr.maop() 
console.log(arreyCopy);

 arrayStr.contact(arrayNbr);


 const div = document.getElementsByClassName('carre');

 console.log(div);

 div[0].style.background = "rgb(255,0,0)";
 div[1].style.background = "rgb(88, 153, 51)";
 div[2].style.background = "rgb(255,0,0)";
 div[3].style.background = "rgb(88, 153, 51)";
 div[4].style.background = "rgb(255,0,0)";

 const div = document.getElementsByClassName('carre'); 
 const arrDiv =Array.from(div)


 for (let i = 0; i < div.length; i++) {
   if (i % 2 === 0) {
     div[i].style.background = "rgb(255,0,0)";
   } else {
     div[i].style.background = "rgb(88, 153, 51)";
   }
 }

 console.log(div);*/

 const div = document.getElementsByClassName('carre');

for (let i = 0; i < div.length; i++) {
  switch (i % 4) {
    case 0:
      div[i].style.background = "rgb(255,0,0)";
      break;
    case 1:
      div[i].style.background = "rgb(88, 153, 51)";
      break;
    case 2:
      div[i].style.background = "rgb(255,0,0)";
      break;
      case 3:
      div[i].style.background = "rgb(88, 153, 51)";
      break;
      case 4:
      div[i].style.background = "rgb(255,0,0)";
      break;
      
    default:
      break;
  }
}


// const div = document.getElementsByClassName('carre');

// arrDiv.map(el=>console.log(el));
// console.log(Element);

// const div = document.getElementsByClassName('carre');
// const colors = ["rgb(255,0,0)", "rgb(88, 153, 51)"];

// Array.from(div).map((el, i) => {
//   el.style.background = colors[i % colors.length];
// });










































