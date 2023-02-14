

<p align="center">
  Cours de JavaScript
</p>

# Introduction au JavaScript

Qu'est-ce que le JavaScript
def:JavaScript est un langage de programmation qui permet d'implémenter des mécanismes complexes sur une page web.

# quest ce quune variable ?

Élément qui peut prendre des valeurs différentes à l'intérieur d'un ensemble, d'un système, d'une relation. 2. Information identifiée par un nom ou par une adresse, et pouvant prendre une ou plusieurs valeurs numériques, logiques ou alphanumériques, au cours du déroulement d'un programme.</br>
</br>
<div align="center">
```
var maChaine=new String("exemple");
   
   var a = 42
   var b = 4.2
   var c = -42
   var d = "42"
  
     alert("ma variable a: "+ typeof (a) +
     "\nma variable b est de type :" + typeof(b) +
     \nma variable b est de type :" + typeof(c) +
     \nma variable b est de type :" + typeof(d) +");
```
![capture](/img/number.png)   
```
  var machaine = "Exemple";
  var maChaine = new String("Exemple");

 alert("ma variable machaine est de type: " +typeof(machaine)+
 "/nama variable maChaine est de type : " +typeof(maChaine);

   var n = null ;
   var u = undefined;
   var nn = NaN;
  alert("ma variable machaine est de type: " +typeof(n)+
 "/nama variable maChaine est de type : " +typeof(u)+
 "/nma variable nn est de type : " + typeof (nn));  
```
![capture](/img/object.png)

</div>



<p align="center">
  <b>JavaSript</b><br>
  <a href="#">Link 1</a> |
  <a href="#">Link 2</a> |
  <a href="#">Link 3</a>
  <br><br>
  <img src="http://s.4cdn.org/image/title/105.gif">
</p>


# Les règles de déclaration des variables en JavaScript </br>
</br>
Une variable est donc un conteneur ou un espace de stockage temporaire qui va pouvoir stocker une valeur. Lorsqu’on stocke une valeur dans une variable, on dit également qu’on assigne une valeur à une variable.</br>
</br>

Pour pouvoir utiliser les variables et illustrer leur intérêt, il va déjà falloir les créer. Lorsqu’on crée une variable en JavaScript, on dit également qu’on « déclare » une variable.</br>
</br>
Pour déclarer une variable en JavaScript, nous allons devoir utiliser le mot clef var ou le mot clef let (nous allons expliquer la différence entre les deux dans la suite de cette leçon) suivi du nom qu’on souhaite donner à notre variable.</br>
</br>
Concernant le nom de nos variables, nous avons une grande liberté dans le nommage de celles-ci mais il y a quand même quelques règles à respecter :</br>
</br>
</br>

* Le nom d’une variable doit obligatoirement commencer par une lettre ou un underscore (_) et ne doit pas commencer par un chiffre ;
*    Le nom d’une variable ne doit contenir que des lettres, des chiffres et des underscores mais pas de caractères spéciaux ;
*    Le nom d’une variable ne doit pas contenir d’espace.
</br>
De plus, notez que le nom des variables est sensible à la casse en JavaScript. Cela signifie que l’usage de majuscules ou de minuscules avec un même nom va permettre de définir des variables différentes. Par exemple, les noms texte, TEXTE et tEXTe vont pouvoir définir des variables différentes.
</br>
Enfin, sachez qu’il existe des noms « réservés » en JavaScript. Vous ne pouvez pas utiliser ces noms comme noms pour vos variables, tout simplement car le langage JavaScript les utilise déjà pour désigner différents éléments intégrés au langage. Nous verrons ces différents noms au fil de ce cours.
</br>
Vous pouvez également noter qu’on utilise généralement la convention lower camel case pour définir les noms de variable en JavaScript. Cette convention stipule simplement que lorsqu’un nom de variable est composé de plusieurs mots, on colle les mots ensemble en utilisant une majuscule pour chaque mot sauf le premier. Par exemple, si je décide de nommer une variable « monage » j’écrirai en JavaScript let monAge ou var monAge.

</br>
Ci-dessous, on crée nos deux premières variables en utilisant le mot clef let dans notre fichier cours.js :  
![capture](/img/number.png)   



