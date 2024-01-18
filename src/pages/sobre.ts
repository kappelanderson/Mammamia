export default function sobrePage(){
    const sobreContainer = document.createElement('div');
    sobreContainer.id = 'sobre';

    const sobreTextsContainer = document.createElement('div');
    sobreTextsContainer.id = 'sobretexts';

    const sobreContent = [
        { type: 'h1', text: 'Sobre' },
        { type: 'div', text: 'Bem-vindo ao Mamma Mia, um refúgio gastronômico italiano que transcende a mera culinária para oferecer uma experiência autêntica e encantadora. Em nosso restaurante, buscamos não apenas alimentar o corpo, mas também nutrir a alma com o calor e a paixão da verdadeira cozinha italiana.' },
        { type: 'h2', text: 'O Encanto Italiano' },
        { type: 'div', text: 'No coração do Mamma Mia, você encontrará a essência da Itália. Nossa decoração, inspirada na arquitetura italiana clássica, cria um ambiente acolhedor e charmoso. Cada detalhe, desde as cores vibrantes até os elementos decorativos, foi cuidadosamente escolhido para transportá-lo diretamente para as ruas pitorescas de uma vila italiana.' },
        { type: 'h2', text: 'Música que Alimenta a Alma' },
        { type: 'div', text: 'Em nossas noites, a atmosfera ganha vida com a melodia de músicos talentosos, trazendo a tradição italiana para a sua mesa. A música ao vivo é a trilha sonora perfeita para acompanhar sua refeição, proporcionando uma experiência sensorial completa que cativa seus sentidos e cria memórias duradouras.' },
        { type: 'h2', text: 'A Arte das Massas e Pizzas Deliciosas' },
        { type: 'div', text: 'No Mamma Mia, a culinária é uma expressão de amor e dedicação. Nossos chefs habilidosos criam verdadeiras obras-primas com os melhores ingredientes, resultando em massas frescas e pizzas irresistíveis. Cada mordida é uma jornada pelos sabores autênticos da Itália, uma celebração da tradição culinária que cativa até os paladares mais exigentes.' },
        { type: 'h2', text: 'Buon Appetito - Sabor que Enfeitiça' },
        { type: 'div', text: 'A expressão "Buon Appetito" não é apenas uma saudação em nossas portas; é um convite para embarcar em uma jornada gastronômica única. No Mamma Mia, não apenas servimos refeições, mas oferecemos um convite para se apaixonar pelo sabor italiano. Cada prato é uma ode à tradição, uma celebração da alegria que a comida pode proporcionar.' },
        { type: 'div', text: 'Portanto, venha se perder nas delícias do Mamma Mia, onde cada refeição é uma celebração, cada sabor é uma experiência e cada momento é uma lembrança que perdura. Buon Appetito!' },
    ];

    sobreContent.forEach(item => {
        const element = document.createElement(item.type);
        element.textContent = item.text;
        sobreTextsContainer.appendChild(element);
    });
    sobreContainer.appendChild(sobreTextsContainer);
    return sobreContainer
}