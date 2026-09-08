# Wojciech Burda — Fizjoterapia

Statyczna wizytówka fizjoterapeuty Wojciecha Burdy, hostowana na GitHub Pages.

**Adres strony:** https://burdafizjo.pl/

Fizjoterapia z dojazdem do pacjenta, Chojnice 89-600 i okolice.
Tel. 698 656 720, e-mail wobel23@o2.pl.

## Co jest w repozytorium

| Plik | Do czego służy |
| --- | --- |
| `index.html` | Cała treść strony głównej |
| `styles.css` | Wygląd (kolory i czcionki zebrane na górze pliku w sekcji `:root`) |
| `script.js` | Menu mobilne, cień nagłówka, animacja pojawiania się sekcji |
| `404.html` | Strona błędu dla nieistniejących adresów |
| `assets/favicon.svg` | Ikona strony w karcie przeglądarki |
| `assets/og-image.jpg` | Miniatura przy udostępnianiu linku (Facebook, WhatsApp, Messenger) |
| `assets/og-image.svg` | Źródło miniatury; po edycji wyeksportuj ponownie do `.jpg` w rozmiarze 1200x630 |
| `robots.txt`, `sitemap.xml` | Podstawowe SEO dla wyszukiwarek |

## Struktura strony

Jedna strona przewijana od góry: nagłówek z telefonem, **O mnie**, **Oferta** (6 kart plus
blok o wizytach domowych) i **Kontakt**.

Świadomie nie ma cennika, FAQ, opisu przebiegu wizyty ani listy kursów. Wycena jest
indywidualna i ustalana po wywiadzie oraz badaniu wstępnym, nie przez telefon.

## Zdjęcie w sekcji powitalnej

Plik `assets/wojciech-burda.jpg` (1196x896, ok. 96 kB). Wyświetla się z kadrowaniem
`object-fit: cover`: na szerokich ekranach w proporcji 4:5, na telefonach 4:3, czyli
w pełnym kadrze, bo taką proporcję ma oryginał.

Podmiana zdjęcia to nadpisanie tego pliku. Jeśli nowe będzie miało inne proporcje, warto
sprawdzić kadr na obu szerokościach i w razie potrzeby dodać `object-position` w regule
`.hero-media img` w `styles.css`, żeby przesunąć kadr na twarz.

## Zostało do zrobienia

- [ ] **Polityka prywatności i cookies** — strona jej obecnie nie ma. Wersja robocza została
      usunięta, bo ma ją zastąpić dokument przygotowany profesjonalnie. Do czasu jej dodania
      strona nie spełnia obowiązku informacyjnego RODO wobec pacjentów.

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

### Zasady, których trzyma się treść

- Sekcja „O mnie” napisana w pierwszej osobie, jako wypowiedź fizjoterapeuty.
  Pozostałe teksty na stronie w trzeciej osobie.
- Bez myślników w tekstach widocznych dla pacjenta, łącznie z tytułem strony.
- Dojazd do pacjenta przedstawiony jako zaleta, bez pisania o braku gabinetu.
- Ceny nie są podawane z góry ani przez telefon.

### Uwaga na dane kontaktowe

Numer telefonu i adres e-mail występują w kilku miejscach: w nagłówku, w treści, w stopce
oraz w bloku `application/ld+json` na dole `index.html`.
Ten ostatni zasila wizytówkę w wynikach Google, więc przy zmianie danych trzeba poprawić także jego.

## Hosting

GitHub Pages publikuje zawartość gałęzi `main` z katalogu głównego. Każdy push do `main`
aktualizuje stronę.

### Domena

Strona działa pod `https://burdafizjo.pl`. Konfiguracja jest gotowa i nie wymaga już zmian:

- W strefie DNS w home.pl: cztery rekordy `A` i cztery `AAAA` dla domeny głównej, wskazujące
  na serwery GitHub Pages, oraz `CNAME` dla `www` na `maciejburda.github.io.`
- W repozytorium plik `CNAME` z treścią `burdafizjo.pl`. Utworzył go GitHub przy ustawianiu
  domeny i nie należy go usuwać, bo bez niego strona przestanie odpowiadać pod tym adresem.
- Wymuszanie HTTPS jest włączone, certyfikat wystawia GitHub automatycznie.

`www.burdafizjo.pl` oraz stary adres `maciejburda.github.io/burda-fizjo/` przekierowują
na wersję bez `www`.

## Formularz kontaktowy

Strona celowo nie ma formularza. GitHub Pages serwuje wyłącznie pliki statyczne i nie potrafi
wysłać e-maila, więc kontakt odbywa się przez klikalny telefon i adres e-mail. Gdyby formularz
był potrzebny, można podpiąć zewnętrzną usługę (np. Formspree) bez zmiany hostingu.
