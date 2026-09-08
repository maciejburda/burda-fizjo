# Wojciech Burda — Fizjoterapia

Statyczna wizytówka fizjoterapeuty Wojciecha Burdy, hostowana na GitHub Pages.

**Adres strony:** https://maciejburda.github.io/burda-fizjo/

## Co jest w repozytorium

| Plik | Do czego służy |
| --- | --- |
| `index.html` | Cała treść strony — tu edytujesz teksty, ceny, kontakt |
| `styles.css` | Wygląd (kolory i czcionki zebrane na górze pliku w sekcji `:root`) |
| `script.js` | Menu mobilne, cień nagłówka, animacja pojawiania się sekcji |
| `404.html` | Strona błędu dla nieistniejących adresów |
| `assets/favicon.svg` | Ikona strony w karcie przeglądarki |
| `assets/og-image.jpg` | Miniatura przy udostępnianiu linku (Facebook, WhatsApp, Messenger) |
| `assets/og-image.svg` | Źródło miniatury — po edycji wyeksportuj ponownie do `.jpg` (1200×630) |
| `robots.txt`, `sitemap.xml` | Podstawowe SEO dla wyszukiwarek |

## ⚠️ Do uzupełnienia przed publikacją

Treść jest **szkicem** — wszystkie dane w nawiasach kwadratowych `[...]` są zmyślonymi
wypełniaczami i trzeba je podmienić na prawdziwe:

- [x] ~~**Telefon**~~ — uzupełnione: `+48 698 656 720`.
- [ ] **E-mail** — `kontakt@example.com` (tekst + `href="mailto:"`).
- [ ] **Adres gabinetu i miasto** — `[ul. Przykładowa 1]`, `[00-000 Miasto]`, `[MIASTO]` w sekcji hero.
- [ ] **Link do Map Google** — obecnie prowadzi do `https://www.google.com/maps`.
- [ ] **Godziny przyjęć** — sekcja „Godziny przyjęć”.
- [ ] **Cennik** — wszystkie `[000] zł` oraz czasy trwania wizyt.
- [ ] **Opis „O mnie”** — akapity oraz lista „Wykształcenie i kursy”.
- [ ] **FAQ** — odpowiedź o NFZ i okno na odwołanie wizyty (`[24]` h).
- [ ] **Zdjęcie** — wgraj `assets/wojciech-burda.jpg` i podmień blok `.photo-placeholder`
      w sekcji hero na `<img src="assets/wojciech-burda.jpg" alt="Wojciech Burda, fizjoterapeuta">`.
- [ ] **Dane strukturalne** — blok `application/ld+json` na dole `index.html` (telefon, adres,
      godziny) — to on zasila wizytówkę w wynikach Google.

Miejsca do zmiany są w kodzie oznaczone komentarzem `<!-- TODO: ... -->`.

## Jak edytować

**Przez przeglądarkę (najprościej):** wejdź na plik w GitHubie → ikona ołówka → zmień tekst →
*Commit changes*. Strona przebuduje się sama w ciągu ~1 minuty.

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

## Hosting

GitHub Pages publikuje zawartość gałęzi `main` z katalogu głównego. Każdy push do `main`
aktualizuje stronę.

### Własna domena (opcjonalnie)

1. W ustawieniach repozytorium → *Pages* → *Custom domain* wpisz np. `burdafizjo.pl`.
2. U rejestratora domeny dodaj rekordy `A` na `185.199.108.153`, `185.199.109.153`,
   `185.199.110.153`, `185.199.111.153` (oraz `CNAME` `www` → `maciejburda.github.io`).
3. Zaznacz *Enforce HTTPS*.
4. Podmień adresy `https://maciejburda.github.io/burda-fizjo/` w `index.html` (canonical, Open Graph,
   JSON-LD), `robots.txt` i `sitemap.xml` na nową domenę.

## Formularz kontaktowy

Strona celowo nie ma formularza — GitHub Pages serwuje wyłącznie pliki statyczne i nie potrafi
wysłać e-maila. Kontakt odbywa się przez klikalny telefon i e-mail. Jeśli formularz będzie
potrzebny, można podpiąć zewnętrzną usługę (np. Formspree, Basin) bez zmiany hostingu.
