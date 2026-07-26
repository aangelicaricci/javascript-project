document.addEventListener("DOMContentLoaded", () => {
    // 1. Inizializzazione del contatore, sempre uguale a 0 al primo avvio
    let count = 0;

    // 2. Creazione del container principale
    const container = document.createElement("div");
    container.className = "counter-card";

    // 3. Creazione del titolo
    const title = document.createElement("h1");
    title.innerText = "Contatore";
    title.className = "counter-title";

    // 4. Creazione dell'elemento che mostra il numero
    const numberDisplayed = document.createElement("div");
    numberDisplayed.innerText = count;
    numberDisplayed.className = "counter-display";

    // 5. Creazione del contenitore per i pulsanti
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-group";

    // Definizione del pulsante decrementa
    const btnDecrement = document.createElement("button");
    btnDecrement.innerText = "−";
    btnDecrement.className = "btn btn-decrement";

    // Definizione del pulsante incrementa
    const btnIncrement = document.createElement("button");
    btnIncrement.innerText = "+";
    btnIncrement.className = "btn btn-increment";

    // Definizione della funzione per aggiornare il valore
    const updateNumberDisplay = () => {
        numberDisplayed.innerText = count;;
    };

    // 6. Aggiunta degli EventListener per gestire i click
    btnIncrement.addEventListener("click", () => {
        count++;
        updateNumberDisplay();
    });

    btnDecrement.addEventListener("click", () => {
        count--;
        updateNumberDisplay();
    });

    // 7. Inserimento dei vari elementi nel DOM
    buttonContainer.appendChild(btnDecrement);
    buttonContainer.appendChild(btnIncrement);

    container.appendChild(title);
    container.appendChild(numberDisplayed);
    container.appendChild(buttonContainer);

    document.body.appendChild(container);
});