/*function saaktSpeeli()
  {
  let vaards=dokument.querySelector(#vaards).value
  let vecums=dokument.querySelector(#vecums).value
  let regions=dokument.querySelector(#regions).value
  let skaits=dokument.querySelector(#skaits).value
    console.log(vaards)
    if(vaards=='')
    {
       alert('Ievadi vārdu!')
    }
    else
    {
     window.location='speele.html#'+vaards+','+vecums+','+regions
    }*/



//vaardu masiivs
let vaards = "";
let pieci=['kaķis','skola','ciems','bilde','lapsa','lācis','vilks', 'putns', 'glāze', 'krūze', 'torte']
let sesi=['lakats','vāvere','rinkis','vasara','priede','kafija','ķirbis', 'durvis']
let septini=['pilsēta','plaukts','numurs','burkāni','lineāls','ārzemes','grāmata']
let astoni=['pulveris','aploksne','rokturis','austiņas','kabinets','tālrunis','traktors']
///let rand5=Math.floor(Math.random()*((pieci.length -1)+1))
///let arr5=str.split('')
///let rand6=Math.floor(Math.random()*((sesi.length -1)+1))
///let arr6=str.split('')
//let rand7=Math.floor(Math.random()*((septini.length -1)+1))
//let arr7=str.split('')
//let rand8=Math.floor(Math.random()*((astoni.length -1)+1))
//let arr8=str.split('')

function genereet(){
    let select = document.getElementById('skaits');
    let skaits = select.options[select.selectedIndex].value;
    let vaardi = [];

    if(skaits == 5){vaardi = pieci;}
    else if(skaits == 6){vaardi = sesi;}
    else if(skaits == 7){vaardi = septini;}
    else if(skaits == 8){vaardi = astoni;}

    speelesLaukums();
  let randomNr = getRandomInt(vaardi.length - 1);

    vaards = vaardi[randomNr];

    document.getElementById("vaards").innerHTML = sajaukt(vaards);

}

function sajaukt(jVaards){
    var arr = jVaards.split('');           // Convert String to array
    var n = arr.length;              // Length of the array
    
    for(var i=0 ; i<n-1 ; ++i) {
      var j = getRandomInt(n);       // Get random of [0, n-1]
      
      var temp = arr[i];             // Swap arr[i] and arr[j]
      arr[i] = arr[j];
      arr[j] = temp;
    }
    
    s = arr.join('');                // Convert Array to string
    return s;                        // Return shuffled string
}

function getRandomInt(n) {
    return Math.floor(Math.random() * n);
  }

document.getElementById('genereet').addEventListener('click', () => {
    genereet();
});
    
function speelesLaukums(){
    let laukums = document.getElementById('out');
  laukums.innerHTML="<div id='vaards'></div>";


      
/*function speelesLaukums(){
    let laukums = document.getElementById('speele');
  laukums.innerHTML="<div id='vaards'></div><input type='text' id='atbilde'/><button onclick='paarbaudiit()'>Pārbaudīt</button>"    */       
    //laukums.innerHTML = "<p>Sajauktais vārds:<div id='vaards'></div></p><input type='text' id='atbilde'/><button onclick='paarbaudiit()'>Pārbaudīt</button>";
}

function paarbaudiit(){
    let atbilde = document.getElementById('atbilde').value;
    if(atbilde === vaards){
        alert('Apsveicu pareizi!');
        genereet();
    }else{
        alert('Mēģini vēlreiz');
    }
}