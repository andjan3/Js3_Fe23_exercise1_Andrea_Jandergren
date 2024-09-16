let logoDOM = document.getElementsByTagName('a')[0];
let homeDOM = document.getElementsByTagName('a')[1];
let aboutDOM = document.getElementsByTagName('a')[2];
let contactDOM = document.getElementsByTagName('a')[3];

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

logoDOM.addEventListener('click', ()=>{
  history.pushState({page:0}, "", "/home")
  fetchPage("home.html")
})
homeDOM.addEventListener('click', ()=>{
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
const progressLoader = document.querySelector('.loader')

fetchPage("home.html")

function fetchPage(filename){
  if(typeof filename != "string") return;
   progressLoader.style.display = 'flex' ;

  fetch(filename).then((resultat)=>{
     progressLoader.style.display = 'none'
    return resultat.text()
  }).then( (data)=>contentDOM.innerHTML =data)
  .catch(() => {
    progressLoader.style.display = 'none';
    contentDOM.innerHTML = '<p>Something went wrong while loading the page.</p>';
  });
  
}