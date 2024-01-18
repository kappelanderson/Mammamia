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

        cardapioNavDiv.appendChild(spanElement);

        if (index < navContent.length - 1) {
            const separator = document.createElement('span');
            separator.textContent = '|';
            cardapioNavDiv.appendChild(separator);
        }
    });

    // Create the 'cardapiocontainer' div
    const cardapioContainerDiv = document.createElement('div');
    cardapioContainerDiv.id = 'cardapiocontainer';

    // Create sample card items (you can customize this part)
    const cardItems = [
        { name: 'Calabresa', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, odio!' },
        { name: 'Quatro Queijos', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, odio!' }
    ];

    cardItems.forEach(item => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('cardapiocard');

        const imgElement = document.createElement('img');
        imgElement.src = 'https://avatars.mds.yandex.net/i?id=1c13d93ad6ca8b421676f0b6d08f3dbe-4612938-images-thumbs&n=13';
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
    });

    // Append 'cardapionav' and 'cardapiocontainer' divs to 'cardapio' div
    cardapioDiv.appendChild(cardapioNavDiv);
    cardapioDiv.appendChild(cardapioContainerDiv);

    return cardapioDiv;
};