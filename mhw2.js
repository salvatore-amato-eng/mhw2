function onClick(){

    if((document.querySelector(".carrello"))) {
        document.querySelector(".carrello").remove();
    }   
    else if(!(document.querySelector(".carrello"))) {
        console.log("cliccato sul carrello");
        const infoCarrello = document.createElement("div");
        const cartText = document.createElement("h1");
        cartText.textContent = "You have no items in your shopping cart";
        infoCarrello.textContent =  "Cart";
        infoCarrello.classList.add("carrello");
        document.querySelector("#topnav").appendChild(infoCarrello);
        
        document.querySelector(".carrello").appendChild(cartText);
    }
} 

const img_cart = document.querySelector("#topnav_dx img");
img_cart.addEventListener("click",onClick);


function onFocus(event){
    const bars = event.currentTarget;
    if(bars.value.length === 0 || bars.value === 'Search a part number' || bars.value === 'Your Email Address') {
        bars.value = '';
    }
    console.log("focus");
    bars.removeEventListener("focus",onFocus);
}

function onBlur(event){
    const barra = event.currentTarget;
    if(barra.value.length == 0){
        barra.value = 'Search a part number';
    }
    console.log("blur");
    barra.addEventListener("focus",onFocus);
}

function onBlur2(event){
    const barra = event.currentTarget;
    if(barra.value.length == 0){
        barra.value = 'Your Email Address';
    }
    console.log("blur");
    barra.addEventListener("focus",onFocus);
}

const bar = document.querySelector("input");
bar.addEventListener("focus",onFocus);
bar.addEventListener("blur",onBlur);

const bar_mobile = document.querySelector("#menu input");
bar_mobile.addEventListener("focus",onFocus);
bar_mobile.addEventListener("blur",onBlur);

const newsletter = document.querySelector("#footer_container input");
newsletter.addEventListener("blur",onBlur2);
newsletter.addEventListener("focus",onFocus);


function cambiaSfondoDX(event){

    const intestazione = document.querySelector("header");
    if (intestazione.className !== "immagine2"){

        intestazione.classList.add("immagine2");

        const testo = document.querySelector("header h1");
        testo.textContent = "Simple and high-efficiency IA monolithic buck converter";

        const testo2 = document.querySelector("header h4");
        testo2.textContent = "Ideal for major appliances and industrial power conditioning.";

        const pulsante = document.querySelector("header .ordina");
        pulsante.textContent = "Get Free Examples";
    } else {
        intestazione.classList.remove("immagine2");
        const testo = document.querySelector("header h1");
        testo.textContent = "New ST MEMS Sensors motherboard accepts all  ST DIL24 adapters";

        const testo2 = document.querySelector("header h4");
        testo2.textContent = "Empower your projects with effortness plug-and-play evaluation of MEMS Sensors.";

        const pulsante = document.querySelector("header .ordina");
        pulsante.textContent = "Order Now";
    }

    
}

const maggiore = document.querySelector("#maggiore h1");
maggiore.addEventListener("click",cambiaSfondoDX);

function cambiaSfondoSX(event){
    const intestazione = document.querySelector("header");
    if (intestazione.className === "immagine2"){
        intestazione.classList.remove("immagine2");

        const testo = document.querySelector("header h1");
        testo.textContent = "New ST MEMS Sensors motherboard accepts all  ST DIL24 adapters";

        const testo2 = document.querySelector("header h4");
        testo2.textContent = "Empower your projects with effortness plug-and-play evaluation of MEMS Sensors.";

        const pulsante = document.querySelector("header .ordina");
        pulsante.textContent = "Order Now";
    } else {
        intestazione.classList.add("immagine2");
        const testo = document.querySelector("header h1");
        testo.textContent = "Simple and high-efficiency IA monolithic buck converter";

        const testo2 = document.querySelector("header h4");
        testo2.textContent = "Ideal for major appliances and industrial power conditioning.";

        const pulsante = document.querySelector("header .ordina");
        pulsante.textContent = "Get Free Examples";
    }

}

const minore = document.querySelector("#minore h1");
minore.addEventListener("click",cambiaSfondoSX);

function tornaHome(){
    const finestra = document.querySelector("#window_view");
    finestra.classList.add("hidden");
    const pulsante = document.querySelectorAll("#window_view button");
    pulsante[0].classList.add("hidden");
    pulsante[0].remove();

    pulsante[1].classList.add("hidden");
    pulsante[1].remove();

    document.querySelector("#window_view h1").classList.add("hidden");
    document.querySelector("#window_view h1").remove();

    document.querySelector("#window_view input").classList.add("hidden");
    document.querySelector("#window_view input").remove();

    document.querySelector("#window_view h2").classList.add("hidden");
    document.querySelector("#window_view h2").remove();

    
    
    const sezioni = document.querySelector("section");
    const articoli = document.querySelector("article");
    const intestazione = document.querySelector("header");
    const testata_finale = document.querySelector("footer");
    const section2 = document.querySelector(".St_Vantaggi");
    sezioni.classList.remove("hidden");
    articoli.classList.remove("hidden");
    intestazione.classList.remove("hidden");
    testata_finale.classList.remove("hidden");
    section2.classList.remove("hidden");   
}

function modificaPagina() {
    const finestra = document.querySelector("#window_view");
    finestra.classList.remove("hidden");

    const sezioni = document.querySelector("section");
    const articoli = document.querySelector("article");
    const intestazione = document.querySelector("header");
    const testata_finale = document.querySelector("footer");
    const section2 = document.querySelector(".St_Vantaggi");
    sezioni.classList.add("hidden");
    articoli.classList.add("hidden");
    intestazione.classList.add("hidden");
    testata_finale.classList.add("hidden");
    section2.classList.add("hidden");   

    if (finestra.childNodes.length === 0){
        
        const new_h1 = document.createElement("h1");
        new_h1.textContent = "eStore Newsletter";
        new_h1.classList.add("testo_window");
        finestra.appendChild(new_h1);

        const new_h2 = document.createElement("h2");
        new_h2.textContent = "Be the first to learn about free samples and sitewide discounts";
        new_h2.classList.add("testo_window");
        finestra.appendChild(new_h2);

        const barra = document.createElement("input");
        barra.textContent = "Your Email Address";
        barra.addEventListener("blur",onBlur2);
        barra.addEventListener("focus",onFocus);
        finestra.appendChild(barra);

        const invia = document.createElement("button");
        invia.textContent = "Send Your Answer";
        invia.classList.add("pulsante_back");
        finestra.appendChild(invia);

        const goBack = document.createElement("button");
        goBack.textContent = "Torna alla HomePage";
        goBack.classList.add("pulsante_back");
        finestra.appendChild(goBack);
        goBack.addEventListener("click",tornaHome);
    }
}

const iscrizione = document.querySelector("#join strong");
iscrizione.addEventListener("click",modificaPagina);


function changeImage(event){
    const blocco = event.currentTarget;
    const image = document.querySelectorAll(".immagini img");
    const indice = parseInt(blocco.dataset.index);
    var titolo_prodotto1 = document.querySelectorAll(".immagini h1");
    var titolo_prodotto2 = document.querySelectorAll(".immagini h4");
    
    switch (indice) {
        case 0: 
                if (titolo_prodotto1[indice].textContent === "X-NUCLEO-PGEEZ1" ) {
                    image[indice].src = "pf274587_s_2.webp";
                    titolo_prodotto1[indice].textContent = "NUCLEO-H53RRE";
                    titolo_prodotto2[indice].textContent = "STM32 Nucleo-64 development board with STM32H533RET6 MCU, supports Arduino and morpho connectivity";
                } else {
                    image[indice].src = "x-nucleo.webp";
                    console.log(image[indice].src);
                    titolo_prodotto1[indice].textContent = "X-NUCLEO-PGEEZ1";
                    titolo_prodotto2[indice].textContent = "Standard SPI page EEPROM memory expansion board based on M95P32 series for STM32 Nucleo";
                }
                    break;
        case 1: 
                if (titolo_prodotto1[indice].textContent === "SCT040HU120G3AG" ) {
                    image[indice].src = "sct040to65g3_1.webp";
                    titolo_prodotto1[indice].textContent = "SCT040TO65G3";
                    titolo_prodotto2[indice].textContent = "Silicon carbide Power MOSFET 650 V, 40 mOhm typ., 35 A in a TO-LL package";
                } else {
                image[indice].src = "sct nuovo.webp";
                console.log(image[indice].src);
                titolo_prodotto1[indice].textContent = "SCT040HU120G3AG";
                titolo_prodotto2[indice].textContent = "Automotive-grade silicon carbide Power MOSFET 1200 V, 40 mOhm typ., 40 A in an HU3PAK package";
                }
                break;
        case 2: 
                if (titolo_prodotto1[indice].textContent === "STEVAL-55G1MBI1" ) {
                    image[indice].src = "stf80n600k6.webp";
                    titolo_prodotto1[indice].textContent = "STF80N600K6";
                    titolo_prodotto2[indice].textContent = "N-channel 800 V, 515 mOhm typ., 7 A MDmesh K6 Power MOSFET in a TO-220FP packages";
                } else {
                    image[indice].src = "steval.webp";
                    console.log(image[indice].src);
                    titolo_prodotto1[indice].textContent = "STEVAL-55G1MBI1";
                    titolo_prodotto2[indice].textContent = "VD55G1 S-Board: Hardware MIPI CSI-2 kit for integrating VD55G1 sensor on embedded processing platforms";
                }
                break;
        case 3: 
                if (titolo_prodotto1[indice].textContent === "DCP3601CMR" ) {
                    image[indice].src = "nucleo-c071rb_1.webp";
                    titolo_prodotto1[indice].textContent = "NUCLEO-C071RB";
                    titolo_prodotto2[indice].textContent = "STM32 Nucleo-64 development board with STM32C071RB MCU, supports Arduino and ST morpho connectivity";
                } else {
                image[indice].src = "dcp.webp";
                console.log(image[indice].src);
                titolo_prodotto1[indice].textContent = "DCP3601CMR";
                titolo_prodotto2[indice].textContent = "36 V, 1 A synchronous step-down converter in SOT23-6L";
                }
                break;
    }
    console.log(blocco.dataset.index);
    
}


const prodotti = document.querySelectorAll(".immagini");
prodotti[0].addEventListener("click",changeImage);
prodotti[1].addEventListener("click",changeImage);
prodotti[2].addEventListener("click",changeImage);
prodotti[3].addEventListener("click",changeImage);




