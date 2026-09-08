# Wojciech Burda — Fizjoterapia

Statyczna wizytówka fizjoterapeuty Wojciecha Burdy, hostowana na GitHub Pages.

**Adres strony:** https://maciejburda.github.io/burda-fizjo/

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

## ⚠️ Zdjęcie do wgrania

W sekcji powitalnej jest przygotowane miejsce na zdjęcie, widoczne jako przerywana ramka
z nazwą pliku. Wgraj plik do katalogu `assets/`, a w `index.html` zamień cały blok
`<div class="photo-slot">...</div>` na jeden znacznik:

```html
<img src="assets/wojciech-burda.jpg" alt="Wojciech Burda podczas terapii">
```

Najlepiej sprawdzi się zdjęcie pionowe, w proporcjach zbliżonych do 4:5, zapisane w rozsądnej
wadze, do mniej więcej 300 kB, żeby strona otwierała się szybko na telefonie.

Atrybut `alt` to krótki opis tego, co widać na zdjęciu. Czytają go wyszukiwarki i czytniki
ekranu dla osób niewidomych, więc warto go wypełnić sensownie.

## Zostało do zrobienia

- [ ] **Zdjęcie do sekcji powitalnej** — opisane wyżej.
- [ ] **Polityka prywatności i cookies** — strona jej obecnie nie ma. Wersja robocza została
      usunięta, bo ma ją zastąpić dokument przygotowany profesjonalnie. Do czasu jej dodania
      strona nie spełnia obowiązku informacyjnego RODO wobec pacjentów.
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

### Podpięcie domeny burdafizjo.pl

1. U rejestratora domeny ustaw rekordy `A` dla `burdafizjo.pl` na adresy GitHub Pages:
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`,
   oraz rekord `CNAME` dla `www` na `maciejburda.github.io`.
2. W repozytorium: *Settings* → *Pages* → *Custom domain* wpisz `burdafizjo.pl` i zapisz.
   GitHub sam doda do repozytorium plik `CNAME`.
3. Po weryfikacji domeny zaznacz *Enforce HTTPS*.
4. Podmień adresy `https://maciejburda.github.io/burda-fizjo/` na nową domenę w plikach
   `index.html`, `robots.txt` i `sitemap.xml`.

## Formularz kontaktowy

Strona celowo nie ma formularza. GitHub Pages serwuje wyłącznie pliki statyczne i nie potrafi
wysłać e-maila, więc kontakt odbywa się przez klikalny telefon i adres e-mail. Gdyby formularz
był potrzebny, można podpiąć zewnętrzną usługę (np. Formspree) bez zmiany hostingu.
