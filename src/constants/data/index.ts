import { Contacts, TextContent } from "../types";

export const ourContact: Contacts[] = [
    {
        id: '1ufficio',
        company: 'Fisioterapia Bruno',
        telephone: '+39 347 3288921',
        address: 'Via Caduti sul Lavoro,  38 - 81100 Caserta (CE)',
        email: 'brunonero74@gmail.com',
    }

]

export const cardIntroTxt: TextContent[] = [
    {
        id: 'testo1',
        alt: "icona laurea",
        immagine: '/certified1.svg',
        text: "Laureato in Scienze Motorie e Fisioterapia presso il Policlinico di Napoli, l'esperto specialista dello studio Fisioterapia Bruno è disposizione di ogni paziente con trattamenti su misura.",
        bottone: 'Contattaci > ',
        goTo: '/Contatti',
    },
    {
        id: 'testo2',
        alt: 'icona servizi',
        immagine: '/servizi.svg',
        text: "Dalla riabilitazione ai traumi sportivi, lo Studio di Fisioterapia Bruno è certo di fornire la massima assistenza ai suoi pazienti che cercano di alleviare il dolore e le difficoltà di movimento.",
        bottone: 'Esplora i Servizi > ',
        goTo: '/Servizi'
        
    },
    {
        id: 'testo3',
        alt: 'icona team',
        immagine: '/equipe.svg',
        text: 'Guidato da Beniamino Bruno, lo studio comprende anche i veterani della fisioterapia Carandente Giovanni e Fabio Viscardi, oltre alla preparatissima fisioterapista Tonia Piccolo. ',
        bottone: 'Scopri il Team >',
        goTo: '/About'

    },
    {
        id: 'testo4',
        alt: "icona equip",
        immagine: '/equipe.svg',
        text: "Con quattro fisioterapisti altamente qualificati ed esperti, lo Studio di Fisioterapia Caserta (CE) Bruno è una destinazione imbattibile per chi ha bisogno di cure terapeutiche.",
        bottone: 'Contattaci >',
        goTo: '/Contatti'

    },

]

