export default function ContatoPage(){
    // Create the main 'contact' div
    const contactDiv = document.createElement('div');
    contactDiv.id = 'contact';

    // Create the 'contactheader' div
    const contactHeaderDiv = document.createElement('div');
    contactHeaderDiv.id = 'contactheader';

    // Add elements to 'contactheader' div
    const h1Element = document.createElement('h1');
    h1Element.textContent = 'Contato';

    const contactInfoDiv = document.createElement('div');
    contactInfoDiv.id = 'contactinfo';

    // Form fields
    const formFields = [
        { label: 'Nome', type: 'text', id: 'name', name: 'name' },
        { label: 'Email', type: 'email', id: 'email', name: 'email' },
        { label: 'Mensagem', type: 'textarea', id: 'message', name: 'message' }
    ];

    formFields.forEach(field => {
        const fieldDiv = document.createElement('div');

        if (field.type === 'textarea') {
            const textareaElement = document.createElement('textarea');
            textareaElement.id = field.id;
            textareaElement.name = field.name;
            fieldDiv.appendChild(textareaElement);
        } else {
            const labelElement = document.createElement('label');
            labelElement.textContent = field.label;

            const inputElement = document.createElement('input');
            inputElement.type = field.type;
            inputElement.id = field.id;
            inputElement.name = field.name;

            fieldDiv.appendChild(labelElement);
            fieldDiv.appendChild(inputElement);
        }

        contactInfoDiv.appendChild(fieldDiv);
    });

    const buttonDiv = document.createElement('div');
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Enviar Mensagem';

    buttonDiv.appendChild(submitButton);
    contactInfoDiv.appendChild(buttonDiv);

    contactHeaderDiv.appendChild(h1Element);
    contactHeaderDiv.appendChild(contactInfoDiv);

    // Append 'contactheader' div to 'contact' div
    contactDiv.appendChild(contactHeaderDiv);

    return contactDiv;
};
