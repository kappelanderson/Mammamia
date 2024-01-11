import './styles.scss';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = "Blabla";
  
    return element;
  }
  
  document.body.appendChild(component());