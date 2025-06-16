const questions = [
  {
    id: "q1",
    text: "Welche der folgenden Definitionen beschreibt React.js am besten?",
    answers: [
      "Eine Bibliothek zum Erstellen von Benutzeroberflächen mit deklarativem Code.",
      "Eine Bibliothek zur Verwaltung des Zustands in Webanwendungen.",
      "Ein Framework zum Erstellen von Benutzeroberflächen mit imperativem Code.",
      "Eine Bibliothek, die ausschließlich für den Bau mobiler Anwendungen verwendet wird.",
    ],
  },
  {
    id: "q2",
    text: "Welchen Zweck erfüllen React Hooks?",
    answers: [
      "Ermöglichen die Nutzung von Zustand und anderen React-Funktionen in funktionalen Komponenten.",
      "Erstellen von responsiven Layouts in React-Anwendungen.",
      "Behandeln von Fehlern innerhalb der Anwendung.",
      "Teil der Redux-Bibliothek zur Verwaltung globaler Zustände.",
    ],
  },
  {
    id: "q3",
    text: "Können Sie erklären, was JSX ist?",
    answers: [
      "Eine JavaScript-Erweiterung, die HTML-ähnliche Syntax zu JavaScript hinzufügt.",
      "Eine JavaScript-Bibliothek zum Erstellen dynamischer Benutzeroberflächen.",
      "Eine spezifische HTML-Version, die explizit für React erstellt wurde.",
      "Ein Tool zum Durchführen von HTTP-Anfragen in einer React-Anwendung.",
    ],
  },
  {
    id: "q4",
    text: "Was ist die gebräuchlichste Methode, um eine Komponente in React zu erstellen?",
    answers: [
      "Indem eine JavaScript-Funktion definiert wird, die einen renderbaren Wert zurückgibt.",
      "Indem ein benutzerdefiniertes HTML-Tag in JavaScript definiert wird.",
      "Indem eine Datei mit der Endung .jsx erstellt wird.",
      "Indem das Schlüsselwort 'new' gefolgt vom Komponenten-Namen verwendet wird.",
    ],
  },
  {
    id: "q5",
    text: "Was bedeutet der Begriff 'React-Zustand'?",
    answers: [
      "Ein Objekt in einer Komponente, das Werte hält und die Komponente bei Änderung rendern kann.",
      "Die Lebenszyklusphase, in der sich eine React-Komponente befindet.",
      "Der Gesamtstatus einer React-Anwendung, einschließlich aller Props und Komponenten.",
      "Eine Bibliothek zur Verwaltung des globalen Zustands in React-Anwendungen.",
    ],
  },
  {
    id: "q6",
    text: "Wie wird typischerweise Listeninhalt in React-Anwendungen gerendert?",
    answers: [
      "Durch die Verwendung der map()-Methode, um über ein Array von Daten zu iterieren und JSX zurückzugeben.",
      "Durch die Verwendung der for()-Schleife, um über ein Array von Daten zu iterieren und JSX zurückzugeben.",
      "Durch die Verwendung der forEach()-Methode, um über ein Array von Daten zu iterieren und JSX zurückzugeben.",
      "Durch die Verwendung der loop()-Methode, um über ein Array von Daten zu iterieren und JSX zurückzugeben.",
    ],
  },
  {
    id: "q7",
    text: "Welche Methode kann NICHT verwendet werden, um Inhalte bedingt zu rendern?",
    answers: [
      "Die Verwendung der #if-Vorlagensyntax.",
      "Die Verwendung eines ternären Operators.",
      "Die Verwendung des &&-Operators.",
      "Die Verwendung einer if-else-Anweisung.",
    ],
  },
  {
    id: "q8",
    text: "Was ist der Zweck von 'useEffect' in React?",
    answers: [
      "Effekte nach dem Rendern auszuführen, z. B. Datenfetching oder Event-Listener setzen.",
      "Komponentenstile zur Laufzeit zu ändern.",
      "Hooks dynamisch zu laden.",
      "Den globalen Zustand zwischen Komponenten zu synchronisieren.",
    ],
  },
  {
    id: "q9",
    text: "Was ist ein 'Prop' in React?",
    answers: [
      "Ein Mechanismus zur Weitergabe von Daten an Komponenten.",
      "Ein spezieller Hook zum Aktualisieren des Zustands.",
      "Ein Attribut, das nur bei Klassenkomponenten verwendet wird.",
      "Ein Lifecycle-Event beim Rendern.",
    ],
  },
  {
    id: "q10",
    text: "Was macht der Befehl 'npm run build' bei einer React-App?",
    answers: [
      "Er erstellt eine optimierte, produktionsreife Version der Anwendung.",
      "Er startet die Entwicklungsumgebung.",
      "Er entfernt nicht verwendete Komponenten aus dem Code.",
      "Er führt automatische Tests aus.",
    ],
  },
  {
    id: "q11",
    text: "Welche Datei ist typischerweise der Einstiegspunkt einer React-Anwendung?",
    answers: [
      "index.js oder main.jsx im src-Verzeichnis.",
      "App.css.",
      "public/index.html.",
      "vite.config.js.",
    ],
  },
  {
    id: "q12",
    text: "Wie können mehrere Komponenten in React zusammenarbeiten?",
    answers: [
      "Durch Props, Events und Zustandslifting (Lifting State Up).",
      "Nur durch globale CSS-Dateien.",
      "Durch direkte DOM-Manipulation.",
      "Durch Rückgabewerte von `setState()`.",
    ],
  },
  {
    id: "q13",
    text: "Was macht der Befehl 'useState()'?",
    answers: [
      "Erzeugt ein Stück internen Zustand in einer Funktion.",
      "Registriert Event-Handler für native Events.",
      "Bindet das Komponenten-Template an die Logik.",
      "Wechselt zwischen statischen und dynamischen Komponenten.",
    ],
  },
  {
    id: "q14",
    text: "Wie funktioniert bedingtes Rendern in JSX?",
    answers: [
      "Durch Nutzung von `&&` oder ternärem Operator.",
      "Nur über if-else außerhalb von JSX.",
      "Nur über ein externes Plugin.",
      "Mit einer speziellen Direktive wie `v-if`.",
    ],
  },
  {
    id: "q15",
    text: "Was ist ein Fragment in React?",
    answers: [
      "Ein Container ohne zusätzliches DOM-Element wie `<></>`.",
      "Ein universeller State-Speicher.",
      "Ein Hook zur Seiten-Navigation.",
      "Ein Tool zum Optimieren von Bildern.",
    ],
  },
  {
    id: "q16",
    text: "Was macht 'useRef' in React?",
    answers: [
      "Erstellt eine Referenz auf ein DOM-Element oder einen stabilen Wert.",
      "Speichert wiederverwendbare Hooks.",
      "Verwaltet globale Themes.",
      "Führt CSS-Klassen zusammen.",
    ],
  },
  {
    id: "q17",
    text: "Wie kann man eine React-Komponente optimieren?",
    answers: [
      "Durch Memoization mit `React.memo`, `useMemo`, `useCallback`.",
      "Indem man alle Daten im globalen Zustand speichert.",
      "Durch mehr CSS-Dateien.",
      "Durch Ersetzen von Komponenten mit HTML.",
    ],
  },
  {
    id: "q18",
    text: "Was ist der Unterschied zwischen 'controlled' und 'uncontrolled' Komponenten?",
    answers: [
      "Controlled verwenden React-State für Input-Werte, uncontrolled nicht.",
      "Uncontrolled sind optimiert für Performance, controlled nicht.",
      "Controlled arbeiten nur mit Klassenkomponenten.",
      "Uncontrolled haben keine Events.",
    ],
  },
  {
    id: "q19",
    text: "Was ist der Zweck von React Router?",
    answers: [
      "Ermöglicht die Navigation zwischen Komponenten ohne Seitenneuladen.",
      "Führt eine automatische Zustandssynchronisierung durch.",
      "Dient zum Speichern von Benutzerdaten im LocalStorage.",
      "Validiert Formulare in Echtzeit.",
    ],
  },
  {
    id: "q20",
    text: "Wann sollte man in React den Context API verwenden?",
    answers: [
      "Wenn man Daten über viele Komponenten hinweg teilen möchte, ohne Props weiterzugeben.",
      "Wenn man asynchrone Daten aus einer API laden will.",
      "Wenn man mehrere CSS-Themes gleichzeitig nutzen möchte.",
      "Nur bei der Verwendung von Redux.",
    ],
  },
];

export default questions;
