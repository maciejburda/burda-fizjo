# Wojciech Burda — Fizjoterapia

Statyczna wizytówka fizjoterapeuty Wojciecha Burdy, hostowana na GitHub Pages.

**Adres strony:** https://maciejburda.github.io/burda-fizjo/

Fizjoterapia z dojazdem do pacjenta, Chojnice 89-600 i okolice.
Tel. 698 656 720, e-mail wobel23@o2.pl. Bez gabinetu stacjonarnego, 100% wizyt domowych.

## Co jest w repozytorium

| Plik | Do czego służy |
| --- | --- |
| `index.html` | Cała treść strony |
| `styles.css` | Wygląd (kolory i czcionki zebrane na górze pliku w sekcji `:root`) |
| `script.js` | Menu mobilne, cień nagłówka, animacja pojawiania się sekcji |
| `404.html` | Strona błędu dla nieistniejących adresów |
| `assets/favicon.svg` | Ikona strony w karcie przeglądarki |
| `assets/sprzet.svg` | Ilustracja sprzętu w sekcji powitalnej (stół, wałek, piłka, taśmy) |
| `assets/sprzet-mobilny.svg` | Ilustracja w pasku „Wizyty domowe” (złożony stół, torba, wałek) |
| `assets/og-image.jpg` | Miniatura przy udostępnianiu linku (Facebook, WhatsApp, Messenger) |
| `assets/og-image.svg` | Źródło miniatury; po edycji wyeksportuj ponownie do `.jpg` w rozmiarze 1200x630 |
| `robots.txt`, `sitemap.xml` | Podstawowe SEO dla wyszukiwarek |

## Struktura strony

Jedna strona, cztery ekrany: nagłówek z telefonem, **O mnie**, **Oferta** (6 kart plus blok
o wizytach domowych) i **Kontakt**. Grafiki sprzętu to rysunki wektorowe, nie zdjęcia. Świadomie nie ma cennika, FAQ, opisu przebiegu wizyty
ani listy kursów. Ceny ustalane są indywidualnie, przez telefon.

## Zostało do uzupełnienia

- [ ] **Prawdziwe zdjęcia** — obecnie stronę ilustrują rysunki wektorowe sprzętu. To rozwiązanie
      tymczasowe. Zdjęcie Wojciecha przy pracy zbuduje zaufanie znacznie mocniej niż rysunek,
      więc warto je podmienić. Wgraj `assets/wojciech-burda.jpg`, a w `index.html` zamień
      zawartość `.illu-frame` na `<img src="assets/wojciech-burda.jpg" alt="Wojciech Burda, fizjoterapeuta">`
      i zdejmij w `styles.css` `padding` oraz `object-fit: contain` z `.illu-frame`.
      Miejsce jest opisane komentarzem w `index.html`.
- [ ] **Domena `burdafizjo.pl`** — widnieje na materiałach reklamowych, ale na dzień
      2026-09-08 nie ma ustawionych rekordów DNS i nie prowadzi na tę stronę. Instrukcja niżej.

## Jak edytować

**Przez przeglądarkę (najprościej):** wejdź na plik w GitHubie, kliknij ikonę ołówka,
zmień tekst i zapisz przez *Commit changes*. Strona przebuduje się sama w ciągu minuty.

**Lokalnie:**

```bash
git clone https://github.com/maciejburda/burda-fizjo.git
cd burda-fizjo
python3 -m http.server 8000   # podgląd na http://localhost:8000
```

Po zmianach:

```bash
git add -A && git commit -m "Aktualizacja treści" && git push
```

### Uwaga na dane kontaktowe

Numer telefonu i adres e-mail występują w kilku miejscach `index.html`: w nagłówku, w treści,
w stopce oraz w bloku `application/ld+json` na samym dole pliku. Ten ostatni zasila wizytówkę
w wynikach Google, więc przy zmianie danych trzeba poprawić także jego.

## Hosting

GitHub Pages publikuje zawartość gałęzi `main` z katalogu głównego. Każdy push do `main`
aktualizuje stronę.

### Podpięcie domeny burdafizjo.pl

1. U rejestratora domeny ustaw rekordy `A` dla `burdafizjo.pl` na adresy GitHub Pages:
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`,
   oraz rekord `CNAME` dla `www` na `maciejburda.github.io`.
2. W repozytorium: *Settings* → *Pages* → *Custom domain* wpisz `burdafizjo.pl` i zapisz.
   GitHub sam doda do repozytorium plik `CNAME`.
3. Po weryfikacji domeny zaznacz *Enforce HTTPS*.
4. Podmień adresy `https://maciejburda.github.io/burda-fizjo/` na nową domenę w plikach
   `index.html` (canonical, Open Graph, JSON-LD), `robots.txt` i `sitemap.xml`.

## Formularz kontaktowy

Strona celowo nie ma formularza. GitHub Pages serwuje wyłącznie pliki statyczne i nie potrafi
wysłać e-maila, więc kontakt odbywa się przez klikalny telefon i adres e-mail. Gdyby formularz
był potrzebny, można podpiąć zewnętrzną usługę (np. Formspree) bez zmiany hostingu.
