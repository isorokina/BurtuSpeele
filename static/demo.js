document.getElementById('poga').addEventListener('click',()=>{
 let ievade = document.getElementById('ievade');
 let ievadeText = ievade.value;
  ievade.value="";

  let datiJson={'datiY':ievadeText};
  console.log(datiJson)
  suutiitDatus(datiJson);
});

async function suutiitDatus(dati) {
  let atbilde=await fetch('/demoPoga',{
  method: "POST",
    headers: {
    'Content-Type':'application/json'
    },
    body: JSON.stringify(dati)
  })

let data=await atbilde.text();
//if data!="Ok":
//  alert("Pievienoana neveiksmga");
sanemtDatus()
  
}
async function sanemtDatus(dati) {
  let atbilde=await fetch('/demoPoga');
  let data=await atbilde.text();
  let divData=document.getElementById('data')
  divData.innerHTML=data;
}