import { reactive } from "vue";

export const store = reactive({
  getImage(imgName) {
    return new URL(`../assets/${imgName}`, import.meta.url).href;
  },
  counterIndexes: 0,

  dataQuests: [
    {
      question: "Qual è la capitale dell'Australia?",
      answers: [
        { answer: "Sydney", isTrue: false },
        { answer: "Canberra", isTrue: true },
        { answer: "Melbourne", isTrue: false },
        { answer: "Perth", isTrue: false },
      ],
    },
    {
      question: 'Chi è l\'autore del "Romeo e Giulietta"?',
      answers: [
        { answer: "Charles Dickens", isTrue: false },
        { answer: "William Shakespeare", isTrue: true },
        { answer: "Jane Austen", isTrue: false },
        { answer: "Leo Tolstoy", isTrue: false },
      ],
    },
    {
      question: "In quale anno è stata fondata l'ONU?",
      answers: [
        { answer: "1945", isTrue: true },
        { answer: "1918", isTrue: false },
        { answer: "1955", isTrue: false },
        { answer: "2000", isTrue: false },
      ],
    },
    {
      question: 'Chi ha scritto "1984"?',
      answers: [
        { answer: "George Orwell", isTrue: true },
        { answer: "Aldous Huxley", isTrue: false },
        { answer: "Ray Bradbury", isTrue: false },
        { answer: "H.G. Wells", isTrue: false },
      ],
    },
    {
      question: 'Qual è l\'elemento chimico con simbolo "O"?',
      answers: [
        { answer: "Oro", isTrue: false },
        { answer: "Ossigeno", isTrue: true },
        { answer: "Osmio", isTrue: false },
        { answer: "Ottone", isTrue: false },
      ],
    },
    {
      question: "Chi ha dipinto la Cappella Sistina?",
      answers: [
        { answer: "Leonardo da Vinci", isTrue: false },
        { answer: "Vincent van Gogh", isTrue: false },
        { answer: "Raffaello", isTrue: false },
        { answer: "Michelangelo", isTrue: true },
      ],
    },
    {
      question: "In quale anno è stata fondata la Microsoft?",
      answers: [
        { answer: "1975", isTrue: true },
        { answer: "1985", isTrue: false },
        { answer: "1995", isTrue: false },
        { answer: "2005", isTrue: false },
      ],
    },
    {
      question: 'Chi ha scritto "Il Piccolo Principe"?',
      answers: [
        { answer: "J.K. Rowling", isTrue: false },
        { answer: "Antoine de Saint-Exupéry", isTrue: true },
        { answer: "Hermann Hesse", isTrue: false },
        { answer: "Ernest Hemingway", isTrue: false },
      ],
    },
    {
      question: "Quale è il più grande oceano del mondo?",
      answers: [
        { answer: "Oceano Atlantico", isTrue: false },
        { answer: "Oceano Indiano", isTrue: false },
        { answer: "Oceano Pacifico", isTrue: true },
        { answer: "Oceano Artico", isTrue: false },
      ],
    },
    {
      question: 'Chi ha scritto "Orgoglio e Pregiudizio"?',
      answers: [
        { answer: "Emily Brontë", isTrue: false },
        { answer: "Charlotte Brontë", isTrue: false },
        { answer: "Jane Austen", isTrue: true },
        { answer: "Leo Tolstoy", isTrue: false },
      ],
    },
    {
      question: "In quale continente si trova il deserto del Sahara?",
      answers: [
        { answer: "Africa", isTrue: true },
        { answer: "Asia", isTrue: false },
        { answer: "America", isTrue: false },
        { answer: "Europa", isTrue: false },
      ],
    },
    {
      question: "Chi ha inventato il telefono?",
      answers: [
        { answer: "Alexander Graham Bell", isTrue: true },
        { answer: "Thomas Edison", isTrue: false },
        { answer: "Nikola Tesla", isTrue: false },
        { answer: "Guglielmo Marconi", isTrue: false },
      ],
    },
  ],
});
