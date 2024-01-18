export default function footerComponet(){
        const footer = document.createElement('div');
        footer.id = 'footer';

        // Create the 'info' div
        const infoDiv = document.createElement('div');
        infoDiv.id = 'info';

        // Create the 'address' div
        const addressDiv = document.createElement('div');
        addressDiv.classList.add('address');

        const addressHeading = document.createElement('h4');
        addressHeading.textContent = 'ENDEREÇO';

        const addressParagraph = document.createElement('p');
        addressParagraph.textContent = 'R. São Vicente, 155 – Olhos D’Água\nBelo Horizonte/MG';

        const addressLink = document.createElement('a');
        addressLink.href = '#'; // Add your actual link here
        addressLink.innerHTML = '<p>Como chegar</p>';

        // Append elements to the 'address' div
        addressDiv.appendChild(addressHeading);
        addressDiv.appendChild(addressParagraph);
        addressDiv.appendChild(addressLink);

        // Repeat the process for 'schedules' and 'phones' divs...
        const schedulesDiv = document.createElement('div');
        schedulesDiv.classList.add('schedules');

        // Create the 'h4' element for 'HORÁRIOS'
        const h4Element = document.createElement('h4');
        h4Element.textContent = 'HORÁRIOS';

        // Append 'h4' to 'schedules' div
        schedulesDiv.appendChild(h4Element);

        // Array of schedule information
        const scheduleInfo = [
            'TER-QUI: 18h às 23h',
            'SEX: 12h às 15:30h e 18h às 23h',
            'SÁB: 12h às 16:30h e 18h às 23h',
            'DOM: 11:30h às 16h'
        ];

        // Create 'p' elements for each schedule item and append to 'schedules' div
        scheduleInfo.forEach(schedule => {
            const pElement = document.createElement('p');
            pElement.textContent = schedule;
            schedulesDiv.appendChild(pElement);
        });
                // Create the 'phones' div
                const phonesDiv = document.createElement('div');
                phonesDiv.classList.add('phones');
        
                // Create the 'h4' element for 'TELEFONES'
                const h4phoneElement = document.createElement('h4');
                h4phoneElement.textContent = 'TELEFONES';
        
                // Append 'h4' to 'phones' div
                phonesDiv.appendChild(h4phoneElement);
        
                // Array of phone numbers
                const phoneNumbers = [
                    '(31) 9 9767-5190',
                    '(31) 9 9753-4156'
                ];
        
                // Create 'p' elements for each phone number and append to 'phones' div
                phoneNumbers.forEach(phone => {
                    const pElement = document.createElement('p');
                    pElement.textContent = phone;
                    phonesDiv.appendChild(pElement);
                });
        
        // Append 'schedules' div to the body of the HTML document
        // Append 'address', 'schedules', and 'phones' divs to 'info' div
        infoDiv.appendChild(addressDiv);
        infoDiv.appendChild(schedulesDiv);
        infoDiv.appendChild(phonesDiv);

        // Append 'schedules' and 'phones' divs as needed...

        // Append the 'info' div to the main 'footer' div
        footer.appendChild(infoDiv);


        // Repeat the process for the other sections ('icon', 'cnpj')...

        // Append the main 'footer' div to the body of the HTML document
        document.body.appendChild(footer);

        // JavaScript code to create and append the 'icon' div
        const iconDiv = document.createElement('div');
        iconDiv.id = 'icon';

        const iconParagraph1 = document.createElement('p');
        iconParagraph1.textContent = 'Mamma';

        const iconParagraph2 = document.createElement('p');
        iconParagraph2.textContent = 'Mia!';

        // Append paragraphs to 'icon' div
        iconDiv.appendChild(iconParagraph1);
        iconDiv.appendChild(iconParagraph2);

        // Append 'icon' div to the body of the HTML document
        footer.appendChild(iconDiv);

        // JavaScript code to create and append the 'cnpj' div
        const cnpjDiv = document.createElement('div');
        cnpjDiv.id = 'cnpj';

        const cnpjParagraph1 = document.createElement('p');
        cnpjParagraph1.textContent = '30.32360.071/00213001-66';

        const cnpjParagraph2 = document.createElement('p');
        cnpjParagraph2.textContent = 'Mamma Mia LTDA';

        // Append paragraphs to 'cnpj' div
        cnpjDiv.appendChild(cnpjParagraph1);
        cnpjDiv.appendChild(cnpjParagraph2);

        // Append 'cnpj' div to the body of the HTML document
        footer.appendChild(cnpjDiv);

        return footer
    }