const zinojums=document.querySelector('.zinojums')
const viesis=document.querySelector('input')
const poga=document.querySelector('.poga')
const no=document.querySelector('.no')

let play=false;
let jaunsVaards="";
let randomVaards="";
let rezultaats=0;
let i=0; 
let laiks=20;
let d1=0;
let n;
let speele;
let rindas=document.querySelector('.rindas');
let vaards=adrese[2];
let vieta=adrese[0]
#let rezultaats=adrese[1]

function saaktSpeeli()
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
    }
    if(burti=='')
    {
    alert('Ievadi burtu skaitu!')
    }
    else{
    do {
      i += 1;
      console.log(i);
        } 
    while (i < burti);
    window.location='speele.html#'+vaards
            }
        }//beidzās saaktSpeeli



function rezultaati(speeleetajs,rezultaats){
  let dict={vaards:speeleetaajs, punkti:rezultaats};
  console.log(JSON.stringify(dict));
  fetch('https://BurtuSpeele.ijasorokina2.repl.co//top/rekordi/jauns/'+speeleetaaajs+'/'+rezultaats,{
    headers:{'Content-Type':"application/json"},
  })
  .then(res=>res.json())
  .then(data=>
    {
      document.getElementById("tabula").innerHTML="Vārds  
  Rezultāts";
      for(let i=0;i<data.top.lenght;i++){
        let rinda-document.createElement("div");
        rinda.innerHTMLL=data.top[i].vaards+" " +data.top[i].rezultaats;

document.getElement ById("tabula").appendChild(rinda);
      }
    })
}
#vaardu masiivs
let pieci=['kaķis','skola','ciems','bilde','lapsa','lācis','vilks', 'putns', 'glāze', 'krūze', 'torte']
let sesi=['lakats','vāvere','rinkis','vasara','priede','kafija','ķirbis', 'durvis']
let septini=['pilsēta','plaukts','numurs','burkāni','lineāls','ārzemes','grāmata']
let astoni=['pulveris','aploksne','rokturis','austiņas','kabinets','tālrunis','traktors']
let rand5=Math.floor(Math.random()*((pieci.length -1)+1))
let arr5=str.split('')
let rand6=Math.floor(Math.random()*((sesi.length -1)+1))
let arr5=str.split('')
let rand7=Math.floor(Math.random()*((septini.length -1)+1))
let arr5=str.split('')
let rand8=Math.floor(Math.random()*((astoni.length -1)+1))

document.querySelector('.out').innerHTML=pieci[1]