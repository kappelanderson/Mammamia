import './styles.scss';
import homePage from './pages/home';
import footerComponet from './pages/footer';
import CardapioPage from './pages/cardapio';
import ProgramacaoPage from './pages/programacao';
import ContatoPage from './pages/contato';
import sobrePage from './pages/sobre';
import { capitalizeFirstLetter } from './pages/functions';

const pagesNavigation = [
  {id: "home", page: homePage},
  {id: "cardapio", name: "Cardápio", page: CardapioPage},
  {id: "programacao", name: "Programação", page: ProgramacaoPage},
  {id: "contato", page: ContatoPage},
  {id: "sobre", page: sobrePage}

]
function NavComponent(){


  const header = document.createElement("div");
  header.id = "header"

  const icon = document.createElement("div");
  icon.id = "icon"
  const iconName = document.createElement('p');
  iconName.innerText = "Mamma Mia!"

  const ul = document.createElement("ul");

  const nav = document.createElement("div");
  nav.id = "nav"

  pagesNavigation.forEach((item)=>{
      const navItem = document.createElement("a")
      const li = document.createElement("li")

      if(item.hasOwnProperty('name')){
          li.innerText = item.name
          li.id = item.id + "item"

      }
      else{
          li.innerText = capitalizeFirstLetter(item.id)
          li.id = item.id + "item"

 
      }
      li.addEventListener("click", ()=>{
            
           removeFullBody()
           console.log(item.id)
          createFullBody(item.id)
      }) 
      navItem.appendChild(li)
      ul.appendChild(navItem);

  })


  header.appendChild(icon);
  header.appendChild(nav);

  icon.appendChild(iconName)
  nav.appendChild(ul)

  return header

}

function createFullBody(page){
  const overlay = document.createElement("div");
  overlay.id = "overlay"
  if(page == null){
    document.body.appendChild(overlay);
    document.body.appendChild(NavComponent());
    document.body.appendChild(homePage())
    document.body.appendChild(footerComponet())
  }
  else{
    document.body.appendChild(overlay);
    document.body.appendChild(NavComponent());
    document.body.appendChild(getPageById(page)())
    document.body.appendChild(footerComponet())
  }

}
function removeFullBody(){
  while (document.body.lastElementChild) {
    document.body.removeChild(document.body.lastElementChild);
  }
}

function getPageById(pageId) {
  const pageEntry = pagesNavigation.find(entry => entry.id === pageId);
  
  if (pageEntry) {
    return pageEntry.page;
  } else {
    // Retornar algo padrão ou lançar um erro, dependendo do seu caso
    console.error(`Página com ID '${pageId}' não encontrada.`);
    // Retornando null neste exemplo
    return null;
  }
}

createFullBody()

export {removeFullBody, createFullBody}