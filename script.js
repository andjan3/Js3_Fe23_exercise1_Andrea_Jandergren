let homeDOM = document.getElementsByTagName('a')[0];
let aboutDOM = document.getElementsByTagName('a')[1];
let contactDOM = document.getElementsByTagName('a')[2];

homeDOM.addEventListener('click', ()=>{
  alert('Andréa')
  history.pushState({page:0}, "", "/home")
  fetchPage("home.html")
})

let contentDOM = document.getElementById('content');
fetchPage("home.html")

function fetchPage(filename){
  if(typeof filename != "string") return;

  fetch(filename).then((resultat)=>{


    return resultat.text()
  }).then( (data)=>contentDOM.innerHTML =data)
  
}