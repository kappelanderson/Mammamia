import { createFullBody, removeFullBody } from "../index";
    export default function homePage(){

        const home = document.createElement("div");
        home.id = "home"
    
        const homeinfo = document.createElement("div");
        homeinfo.id = "homeinfo"

        const h1 = document.createElement('h1');
        h1.innerText = "Buon appetito!"
    
        const p = document.createElement('p');
        p.innerText = "O Mamma Mia é um restaurante italiano de alta qualidade. Oferece uma experiência completa trazendo a Itália até você, a música ao vivo, a arquitetura e, claro, as deliciosas massas e pizzas. Tudo para fazer você se apaixonar italiano!"
        const button = document.createElement('button');
        button.innerText = "Cardápio"
        button.addEventListener('click', ()=>{
            removeFullBody()
            createFullBody('cardapio')
        })


        home.appendChild(homeinfo);

        homeinfo.appendChild(h1)
        homeinfo.appendChild(p)
        homeinfo.appendChild(button)

        return home
    
    }