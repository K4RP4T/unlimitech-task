# Unlimitech Task

## Odwiedź wdrożoną aplikację w poniższym linku

**[Unlimitech Task](https://unlimitech-task.vercel.app/)**

## Lub uruchom ją lokalnie w poniższy sposób

### Warunek wstępny

Przed uruchomieniem aplikacji upewnij się, że masz zainstalowany `npm`.

### Uruchomienie aplikacji

Przejdź do katalogu `/app` wpisując w terminalu:

```sh
cd app
```

Następnie wpisz w terminalu poniższą komendę:

```sh
npm start
```

Skrypt powinien zainstalować wszystkie konieczne zależności, skompilować pliki `Less` oraz uruchomić lokalny serwer i otworzyć go w przeglądarce.

## Struktura aplikacji

Aplikacja posiada poniższą strukturę:

- **app/**
  - **css/main.css**: Skompilowany plik CSS.
  - **html/**: Komponenty HTML.
  - **img/**: Obrazy WebP i ikony SVG.
  - **js/**: Pliki JavaScript.
  - **less/**: Arkusze stylów Less.
  - **static/**: Loga i webmanifest.
  - **index.html**: Główny plik HTML.

## Funkcjonalności

- Baner promocyjny zaimplementowany za pomocą **Slick Slider**,
- Interaktywne obrazki w sekcji kategorii,
- Karuzela z promocjami wykonana za pomocą **Slick Slider**,
- Zapis do newslettera z walidacją RegEx oraz powiadomieniem typu **Toast**,
- Wysuwane menu z kategoriami produktów oraz leniwie ładowanymi obrazkami z API **picsum.photos**,
- Wysuwana wyszukiwarka produktów,
- Wysuwana sekcja ulubionych produktów,
- Wysuwany koszyk,
- Pełna responsywność na urządzeniach typu desktop, tablet i mobile.

## Użyte technologie

- **HTML5** - semantyczna sktruktura strony,
- **Less CSS 4.4.0** - stylowanie w preprocesorze,
- **jQuery 3.7.1** - obsługa interakcji,
- **Bootstrap 5.3.7** - układ siatki i komponenty,
- **Slick Slider 1.8.1** - karuzela.