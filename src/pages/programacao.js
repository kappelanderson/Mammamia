export default function ProgramacaoPage(){
    // Create the main 'programacao' div
    const programacaoDiv = document.createElement('div');
    programacaoDiv.id = 'programacao';

    // Create the 'programacaoheader' div
    const programacaoHeaderDiv = document.createElement('div');
    programacaoHeaderDiv.id = 'programacaoheader';

    // Add elements to 'programacaoheader' div
    const h1Element = document.createElement('h1');
    h1Element.textContent = 'Programação';

    const spanElement = document.createElement('span');
    spanElement.id = 'programacaoinfo';
    spanElement.textContent = 'Não há eventos próximos.';

    programacaoHeaderDiv.appendChild(h1Element);
    programacaoHeaderDiv.appendChild(spanElement);

    // Append 'programacaoheader' div to 'programacao' div
    programacaoDiv.appendChild(programacaoHeaderDiv);

    return programacaoDiv;
};