
// Future Implementations GET CARD ITEMS VIA ASYNC

interface CardItems {
    [key: string]: CardItem[]; // Você pode substituir 'any' pelo tipo específico dos itens de cardItems
  }
  interface CardItem {
    img: string;
    name: string;
    description: string;
    // Adicione outros campos conforme necessário
  }
const cardItems : CardItems = {
    "pizzas": [
        { 
            name: 'Calabresa', 
            description: 'Linguiça Calabresa, rodelas de cebolas, azeitonas, mussarela', 
            img: "https://sgnh.com.br/wp-content/uploads/2021/07/pizza_calabresa.png",
        },
        { 
            name: 'Quatro Queijos', 
            description: 'Queijo Provolone, Mussarela, Parmesão e Gorgonzola', 
            img: "https://static.tildacdn.com/tild3466-6332-4334-b264-343731623630/chetyri_syra.png",
        },
        { 
            name: 'Portuguesa', 
            description: 'Ovos, cebola, azeitona, ervilha, queijo e presunto', 
            img: "https://i1.wp.com/multarte.com.br/wp-content/uploads/2019/03/png-pizza9.png?fit=1000%2C1000&ssl=1",
        },
        { 
            name: 'Marguerita', 
            description: 'molho, muçarela, tomate e manjericão', 
            img: "https://demo2.pavothemes.com/poco/wp-content/uploads/2022/12/h8_banner-img1.png",
        },
        { 
            name: 'Muçarela', 
            description: 'pizza meio a meio', 
            img: "https://s3.smartofood.ru/paprika_nt_ru/menu/3939df42-479a-59af-b2b0-cf4b08aec5bc.png",
        },
        { 
            name: 'Napolitana', 
            description: 'Muçarela, azeite, molho de tomate e manjericão', 
            img: "https://gitlab.cern.ch/uploads/-/system/user/avatar/25951/avatar.png",
        },
        { 
            name: 'Lombo canadense', 
            description: 'lombinho, cebola, bacon e champignon', 
            img: "https://paradisepizzaria.com.br/site/img/produtos/281492_1_g.png",
        },
        { 
            name: 'Brigadeiro', 
            description: 'Faz o maior sucesso entre a criançada', 
            img: "https://www.seekpng.com/png/full/292-2924677_brigadeiro-mozzarella.png",
        },
        { 
            name: 'Romeu e Julieta', 
            description: 'queijo branco e goiabada', 
            img: "https://paradisepizzaria.com.br/site/img/produtos/282362_1_g.png",
        },
        { 
            name: 'Chocolate branco com morango', 
            description: 'Esse é um clássico que não sai de moda', 
            img: "https://illazzarone.org/wordpress/wp-content/uploads/Nutella-pizza.png",
        },
        { 
            name: 'Creme de avelã com frutas', 
            description: 'A mistura de frutas ao famoso creme de avelã é uma combinação mais que perfeita', 
            img: "http://png.pngtree.com/png-clipart/20230425/original/pngtree-pizza-creamy-mushroom-gourmet-png-image_9096552.png",
        }
],
"massas": [
    {
        name: 'Spaghetti',
        description: 'Longos fios de trigo durum, versáteis e deliciosos',
        img : 'https://вкусно-вкусно.рф/wp-content/uploads/2020/04/shop_items_catalog_image1012.png'
    },
    {
        name: 'Ravioli',
        description: 'Pequenos pacotes recheados com ricota, espinafre ou carne',
        img : 'https://i.imgur.com/y1HL2ez.png'
    },
    {
        name: 'Fettuccine Alfredo',
        description: 'Fitas largas mergulhadas em molho cremoso de queijo',
        img : 'https://avatars.mds.yandex.net/i?id=20a5679703c5e2caa35819e424186283cd241e3c-9053088-images-thumbs&n=13'
    },
    {
        name: 'Linguine',
        description: 'Finas e achatadas, perfeitas para molhos leves',
        img : 'https://static.tildacdn.com/tild3730-3065-4134-b464-393431633634/basically-pasta-pomo.png'
    },
    {
        name: 'Orecchiette',
        description: 'Pequenas orelhas que capturam sabores incríveis',
        img : 'https://avatars.mds.yandex.net/i?id=fdb04a623393534588ffb875f733f5a596f5fc09-6383766-images-thumbs&n=13'
    }
],
"vinhos": [
    {
        name: 'Chianti',
        description: 'Tinto da Toscana, versátil e bem equilibrado',
        img : 'https://storage.googleapis.com/wzukusers/user-34496285/images/5c224f0c1f713SSgcARs/chianti.png'
    },
    {
        name: 'Barolo',
        description: 'Vinho tinto robusto do Piemonte, envelhecido elegantemente',
        img : 'https://enotecaterruli.it/wp-content/uploads/2020/03/barolo-docg-la-villa-fratelli-seghesio-414x400.png'
    },
    {
        name: 'Prosecco',
        description: 'Espumante refrescante da região de Vêneto',
        img : 'https://www.vinoselkiosco.com/wp-content/uploads/2020/12/Maschio-Prosecco-Doc-Treviso-Extra-Dry-768x768.png'
    },
    {
        name: 'Montepulciano d\'Abruzzo',
        description: 'Tinto encorpado e frutado da região de Abruzzo',
        img : 'https://images.vivino.com/thumbs/Tpeo25CARpabILIyU6cRnQ_pb_600x600.png'
    },
    {
        name: 'Pinot Grigio',
        description: 'Branco fresco e leve, perfeito para dias ensolarados',
        img : 'https://images.vivino.com/thumbs/BTXr7w0iRD2DNPNqaR2pfQ_pb_600x600.png'
    },
],
"sobremesas": [
    {
        name: 'Tiramisù',
        description: 'Camadas de café, mascarpone e cacau irresistíveis',
        img : 'https://assets.stickpng.com/thumbs/5ea98d3d82f5c90004032dd0.png'
    },
    {
        name: 'Cannoli',
        description: 'Crocantes tubos recheados com creme de ricota doce',
        img : 'https://cdn.tasteatlas.com/Images/Dishes/32066d4762f448baa7b2ada352bfcec5.png?width=280&height=280'
    },
    {
        name: 'Panna Cotta',
        description: 'Delicada sobremesa de creme com frutas frescas',
        img : 'https://tamaragroup.am/upload/29-07-2021/162756645524.png'
    },
    {
        name: 'Gelato',
        description: 'Sorvete italiano, cremoso e abundante em sabores',
        img : 'https://ohlala.bold-themes.com/main-demo/wp-content/uploads/sites/3/2017/05/product_11.png'
    },
    {
        name: 'Amaretti',
        description: 'Biscoitos de amêndoa, delicadamente doces e crocantes',
        img : 'https://www.emerge.biz/media/2019/6765/3470-1562331261.png'
    },
]


};
export default function CardapioPage(){
    // Create the main 'cardapio' div
    const cardapioDiv = document.createElement('div');
    cardapioDiv.id = 'cardapio';

    // Create the 'cardapionav' div
    const cardapioNavDiv = document.createElement('div');
    cardapioNavDiv.id = 'cardapionav';

    // Add elements to 'cardapionav' div
    const navContent = ['Massas', 'Pizzas', 'Vinhos', 'Sobremesas'];
    navContent.forEach((item, index) => {
        const spanElement = document.createElement('span');
        spanElement.id = `cardapio${item.toLowerCase().replace(/\s/g, '')}`;
        spanElement.textContent = item;

        spanElement.addEventListener('click', ()=>{
            CleanContainer()
            displayCards(item.toLowerCase())
        })

        cardapioNavDiv.appendChild(spanElement);

        if (index < navContent.length - 1) {
            const separator = document.createElement('span');
            separator.textContent = ' | ';
            cardapioNavDiv.appendChild(separator);
        }
    });

    // Create the 'cardapiocontainer' div
    const cardapioContainerDiv = document.createElement('div');
    cardapioContainerDiv.id = 'cardapiocontainer';

    // Create sample card items (you can customize this part)

    function CleanContainer(){
        while (cardapioContainerDiv.lastElementChild) {
            cardapioContainerDiv.removeChild(cardapioContainerDiv.lastElementChild);
          }
    }
    function displayCards(type : string) : void{
        if(cardItems.hasOwnProperty(type)){
            let obj = cardItems[type]
            obj.forEach(item  => {
                const cardDiv = document.createElement('div');
                cardDiv.classList.add('cardapiocard');
        
                const imgElement = document.createElement('img');
                imgElement.src = item.img;
                imgElement.alt = '';
        
                const cardInfoDiv = document.createElement('div');
                cardInfoDiv.classList.add('cardapiocardinfo');
        
                const h4Element = document.createElement('h4');
                h4Element.textContent = item.name;
        
                const pElement = document.createElement('p');
                pElement.textContent = item.description;
        
                cardInfoDiv.appendChild(h4Element);
                cardInfoDiv.appendChild(pElement);
        
                cardDiv.appendChild(imgElement);
                cardDiv.appendChild(cardInfoDiv);
        
                cardapioContainerDiv.appendChild(cardDiv);
            });}
    }

    displayCards('massas')

    // Append 'cardapionav' and 'cardapiocontainer' divs to 'cardapio' div
    cardapioDiv.appendChild(cardapioNavDiv);
    cardapioDiv.appendChild(cardapioContainerDiv);
    return cardapioDiv;
};