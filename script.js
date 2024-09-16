let homeDOM = document.getElementsByTagName('a')[0];
let aboutDOM = document.getElementsByTagName('a')[1];
let contactDOM = document.getElementsByTagName('a')[2];

window.addEventListener("popstate", ()=>{

  switch(history.state.page){
    case 0: 
    fetchPage('home.html')
    break
    case 1: 
    fetchPage("about.html")
    break
    case 2:
      fetchPage("contact.html")
      break
  }
})

homeDOM.addEventListener('click', ()=>{
  alert('Andréa')
  history.pushState({page:0}, "", "/home")
  fetchPage("home.html")
})

aboutDOM.addEventListener('click', ()=>{
  history.pushState({page:1}, "", "/about")
  fetchPage("about.html")
})

contactDOM.addEventListener('click', ()=>{
  history.pushState({page:2}, "", "/contact")
  fetchPage("contact.html")
})


let contentDOM = document.getElementById('content');
fetchPage("home.html")
//sätt in progressbar animation
function fetchPage(filename){
  if(typeof filename != "string") return;

  fetch(filename).then((resultat)=>{
    //Avaktivera progressbaren här

    return resultat.text()
  }).then( (data)=>contentDOM.innerHTML =data)
  
  //Lägg in catch error, avaktivera progressbar även här
}