const projects = [
    {
        type: "media",
        image: "ac-mockup-closeup.png",
        size: "half",
    },
    {
        type: "media",
        image: "ac-nav.mp4",
        size: "half",
    },

    {
        type: "text",
        subtitle: "Identyfikacja kluczowych problemów",
        description: "Miałam pełną swobodę w określeniu, na czym skupić projekt, więc zaczęłam od oceny istniejącego sklepu internetowego, korzystając z analizy heurystycznej i szybkich sesji z użytkownikami. Najważniejsze problemy dotyczyły nawigacji i odkrywania produktów, przejrzystości informacji o produktach i modelu zakupu oraz spójności marki. Stały się one głównymi obszarami, które priorytetowo potraktowałam w redesignie.",
    },
    {
        type: "text",
        subtitle: "Nawigacja",
        description: "Oryginalna nawigacja mobilna była zagracona i niespójna, łącząc artykuły, wpisy na blogu i produkty pod niejasnymi etykietami. Zredukowałam liczbę kategorii do czterech, aby stworzyć bardziej skoncentrowaną strukturę z mniejszą liczbą rozpraszaczy. Pomogło to użytkownikom szybko zrozumieć, dokąd mają iść i sprawiło, że przeglądanie było spokojniejsze i bardziej przemyślane.",
    },

    {
        type: "media",
        image: "product_page.jpg",
        size: "half",
    },
    {
        type: "media",
        image: "info_ac_square.mp4",
        size: "half",
    },

    {
        type: "text",
        subtitle: "Prezentacja produktu i ceny",
        description: "Dodałam podglądy lifestyle’owe, aby pokazać produkt w akcji i zachęcić do kliknięć. Klikalna ocena obok tytułu kieruje użytkowników szybciej do recenzji. Wyjaśniłam ceny, pokazując koszt za saszetkę, a całkowity koszt zamówienia, oferty prezentowe i szczegóły dostawy uczyniłam bardzo widocznymi — zmniejszając niespodzianki i budując zaufanie.",
    },
    {
        type: "text",
        subtitle: "Hierarchia informacji",
        description: "Wyzwanie polegało na tym, że strona Absolute Collagen miała mnóstwo treści, ale była przytłaczająca i trudna w nawigacji. Przebudowałam informacje o produktach na podstawie ćwiczenia card-sorting z użytkownikami, kategoryzując treści tam, gdzie użytkownicy spodziewali się ich znaleźć. Dodałam punkty do szybkiego skanowania i połączyłam informacje o składnikach z instrukcjami użytkowania, odpowiadając na kluczową potrzebę przejrzystości. Stworzyłam też wyróżnienia produktów i infografiki, aby pokazać korzyści i efekty suplementu, ustalając wyraźną hierarchię i sprawiając, że strona była zarówno informacyjna, jak i wizualnie przyswajalna.",
    },

    {
        type: "media",
        image: "ac_type.jpg",
        size: "half",
    },
    {
        type: "media",
        image: "assets_dark.jpg",
        size: "half",
    },

    {
        type: "text",
        subtitle: "Spójność marki",
        description: "Zauważyłam, że marka miała wiele różnych kierunków wizualnych na stronie, więc uprościłam ją, wybierając jeden główny żółty kolor, ujednolicając przyciski, ikony i typografię oraz projektując elastyczne materiały do infografik i mediów społecznościowych. Celem był czysty, nowoczesny wygląd z luksusowym charakterem, czyniący stronę spójną, angażującą i przystępną dla odbiorców.",
    },
    {
        type: "text",
        subtitle: "Efekt końcowy",
        description: "Dopracowanie istniejącej, bogatej w treści marki — poprawa przejrzystości, spójności i zaangażowania — może być trudniejsze niż tworzenie wszystkiego od zera, ale jest również niezwykle satysfakcjonujące. Podeszłam do tego strategicznie. Projekt wymagał ogromu niewidocznej pracy, od dostosowania standardów UX i analizy konkurencji po kwestie techniczne.",
    },
];

// Function to create and append tiles to the grid (nie zmieniamy, działa)
function createTiles() {
    const gridContainer = document.getElementById("grid-container");

    projects.forEach(project => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        if (project.size) gridItem.classList.add(project.size);

        if (project.type === "media") {
            const ext = project.image.split('.').pop().toLowerCase();
            let media;

            if (ext === 'mp4') {
                media = document.createElement("video");
                media.src = project.image;
                media.autoplay = true;
                media.loop = true;
                media.muted = true;
                media.playsInline = true;
                media.loading = "lazy";
                media.style.width = "100%";
                media.style.objectFit = "cover";
            } else {
                media = document.createElement("img");
                media.src = project.image;
                media.loading = "lazy";
            }

            gridItem.appendChild(media);

        } else if (project.type === "text") {
            const textWrapper = document.createElement("div");
            textWrapper.classList.add("project-text-wrapper");

            if (project.subtitle) {
                const subtitle = document.createElement("h4");
                subtitle.classList.add("project-subtitle");
                subtitle.textContent = project.subtitle;
                textWrapper.appendChild(subtitle);
            }

            if (project.description) {
                const descDiv = document.createElement("p");
                descDiv.textContent = project.description;
                textWrapper.appendChild(descDiv);
            }

            gridItem.appendChild(textWrapper);
        }

        gridContainer.appendChild(gridItem);
    });
}

document.addEventListener("DOMContentLoaded", createTiles);
