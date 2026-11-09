# about.pocallum.cat — Especificacions per a Claude

## Què és aquest projecte

Pàgina personal/professional de **Joan "Linux" Martínez i Serres** (`about.pocallum.cat`).
HTML estàtic pur, sense framework, sense sistema de build, sense Hugo. Desplegament via GitHub Pages.

## Estructura de fitxers

```
/
├── index.html          ← Versió catalana (idioma principal)
├── en/index.html       ← Versió anglesa
├── es/index.html       ← Versió castellana
├── css/style.css       ← CSS compartit per totes les versions
├── js/main.js          ← JS compartit (analítica, mailto, wizard, RSS)
├── img/                ← Imatges estàtiques
├── robots.txt          ← Cercadors i assistents d'IA (admin i CLAUDE.md exclosos)
├── sitemap.xml         ← Sitemap amb hreflang i lastmod
├── llms.txt            ← Fitxa de fets per a assistents d'IA (CA/EN/ES)
├── admin/index.html    ← Panell d'estadístiques (noindex)
└── CNAME               ← about.pocallum.cat (GitHub Pages)
```

**Regla fonamental:** qualsevol canvi de contingut o estil s'ha de replicar als tres fitxers HTML si és estructura/nav, o editar `css/style.css` / `js/main.js` si és compartit.

## Tecnologia

- **HTML5 estàtic** — sense cap dependència de build (no npm, no webpack, no Hugo)
- **CSS** — variables custom (design tokens), grid de dues columnes, responsive
- **JS vanilla** — sense frameworks. Cap `import`, cap `require`
- **Fonts** — IBM Plex Sans + IBM Plex Mono via Google Fonts
- **Analítica** — Goatcounter (`about-pocallum.goatcounter.com`), sense cookies
- **Formulari** — Formspree (`https://formspree.io/f/xnjgrpnn`)
- **Articles** — RSS via `api.rss2json.com` des de `blog.pocallum.cat/feed/` (blog només en català)

## SEO i assistents d'IA

- **Capçaleres**: `title`, `description`, Open Graph i Twitter Card propis de cada idioma, amb `hreflang` recíprocs i canonical per versió. Qualsevol metadada nova s'ha d'afegir als tres fitxers.
- **JSON-LD** (`@graph`): `Person`, `WebSite`, `ProfilePage`, `ProfessionalService`, `ItemList` de llibres i `FAQPage`. En afegir un títol cal tocar l'`ItemList` (posició i `numberOfItems`) als tres HTML. Compte amb les comes: el `@graph` és un array i cada node s'ha de separar amb `,`.
- **Jerarquia de headings**: `h1` únic (el nom) → `h2.section-label` per secció → `h3` per element. Els títols grans dins d'una secció fan servir `h3.section-heading`.
- **`llms.txt`**: fitxa de fets per a models. Actualitza-la quan canviï el nombre de llibres, l'estat dels projectes o el contacte.
- **`sitemap.xml`**: actualitzar el `lastmod` quan canviï el contingut.
- **`robots.txt`**: permet explícitament els principals crawlers d'IA; manté `/admin/` i `/CLAUDE.md` exclosos.

## Cache busting

Quan es modifiquen `style.css` o `main.js`, cal incrementar el número de versió als tres HTML:

```html
<link rel="stylesheet" href="css/style.css?v=YYYYMMDD">
<script src="js/main.js?v=YYYYMMDD" defer></script>
```

## Design tokens (CSS variables)

```css
--black: #0a0a0a
--white: #ffffff
--grey-1: #f5f5f5   /* fons suau */
--grey-2: #e0e0e0   /* separadors */
--grey-3: #999999   /* text secundari */
--grey-4: #555555   /* text cos */
--red:    #cc0000   /* accent principal */
--col:    720px     /* amplada màxima del contingut */
--pad:    2rem
--unit:   8px       /* unitat base de spacing */
```

## Tipografia

- **IBM Plex Sans** (300, 400, 500 i itàlica) — cos de text, títols
- **IBM Plex Mono** (300, 400) — etiquetes, metadata, botons, codi

## Layout

- **Desktop:** dues columnes — `side-nav` (sticky, esquerra) + `page-content` (dreta)
- **Mòbil (<720px):** una columna, `side-nav` ocult, `side-nav-mobile` (select) visible
- `.wrap` limita el contingut a `720px` amb marge automàtic
- El nav lateral i el selector mòbil comencen amb **Inici** (`#top`), per tornar al capdamunt

## Seccions (ordre al HTML)

1. `#qui-soc`
2. `#el-que-faig` (grid 2×2 de serveis)
3. `#comunicacio-cultural` (destacat amb borde vermell)
4. `#projectes-en-curs`
5. `#obres-publicades`
6. `#trajectoria`
7. `#articles` (carregats via RSS)
8. `#premsa`
9. `#faq` (preguntes freqüents, amb `FAQPage` al JSON-LD)
10. `#contacte` (footer negre)

Els `id` de les seccions estan traduïts a cada idioma (`#prensa`/`#press`, `#contacto`/`#contact`…). Mantén la coherència entre l'`id`, el nav lateral i el selector mòbil de cada fitxer.

## Funcionalitats JS (`main.js`)

### Goatcounter
Script d'analítica afegit dinàmicament. No requereix manteniment.

### Mailto ofuscat
Els `<a data-mailto="1">` no exposen l'adreça al DOM. El clic construeix el `mailto:` per JS.

### Wizard modal de contacte (`#btn-wizard`)
Modal multi-pas amb 5 passos + pantalla de contacte. Internacionalitzat (CA/EN/ES via `document.documentElement.lang`). Enviament via Formspree amb fallback a `mailto:`.

### RSS articles
Carrega els 5 últims articles de `blog.pocallum.cat/feed/`. El blog només existeix en català: les tres versions llegeixen el mateix feed i només canvia el format de la data (`ca-ES`, `es-ES`, `en-GB`). Els feeds antics (`pocallum.cat/feed/`, `/en/feed/`, `/es/feed/`) retornaven 404.

## Multilingüisme

- Cada versió és un fitxer HTML independent (no hi ha sistema de plantilles)
- El JS detecta l'idioma via `document.documentElement.lang`
- Els `hreflang` estan definits al `<head>` de cada fitxer
- El nav de idiomes marca `active` la llengua actual manualment a cada fitxer

## Desplegament

GitHub Pages, branca `main`, arrel `/`. El fitxer `CNAME` apunta a `about.pocallum.cat`.
Cap acció de build — el `git push` és el desplegament.

## Convencions d'edició

- No introduir dependències externes noves sense necessitat clara
- No convertir a Hugo, Astro, ni cap framework — el projecte és deliberadament estàtic
- Mantenir el JS en ES5/ES6 sense `import`/`export` (compatibilitat sense bundler)
- Els comentaris CSS segueixen el format `/* ─── Títol ─── */`
- Spacing basat en múltiples de `--unit` (`calc(var(--unit) * N)`)
- El color d'accent és sempre `--red` (`#cc0000`), no vermells alternatius


---

## Contingut i veu

- **Qui soc** va en primera persona i comença amb «Em dic Joan «Linux» Martínez i Serres». El sobrenom va sempre entre cometes angulars («Linux»).
- No repetir la mateixa informació en dos paràgrafs (festival, 112 Books i docència s'expliquen una sola vegada).
- Les primeres mencions d'entitats porten enllaç: [112 Books](https://112books.eu), [Llumàtics](https://llumatics.com), [LinuxBCN](https://linuxbcn.com), [Nau Bostik](https://naubostik.com), [pocallum.cat/obra](https://pocallum.cat/obra/).
- **FAQ**: cada resposta viu en dos llocs del mateix fitxer — el `<p>` visible i el `text` del `FAQPage` al JSON-LD. Cal mantenir-los idèntics; les etiquetes `<a>` només van a la versió visible.

## Assets d'imatge

| Fitxer | Ús |
|---|---|
| `img/2026-29-Joan-Linux-by-Anike.webp` | Hero (70 KB), font principal del `<picture>` |
| `img/2026-29-Joan-Linux-by-Anike.jpg` | Fallback del `<picture>` (211 KB) |
| `img/og-1200x630.jpg` | `og:image` i `twitter:image` |

- La foto és 762×762: **no s'amplia mai**. `.hero-img img` fa servir `width/height: auto` amb `max-width: min(100%, 800px)`. No hi posar alçades percentuals: van fer desaparèixer la imatge en alguns navegadors.
- El fons del hero és `#0a0a0a` fix (no `var(--black)`, que s'inverteix en mode fosc).
- Crèdit obligatori: retrat d'Anike Lamoso (instagram.com/fotosdeanike), citat a la nota del bloc de contacte.

## Verificació abans de pujar

1. JSON-LD vàlid als tres fitxers (cap coma doble ni separador perdut en editar el `@graph`).
2. Etiquetes HTML balancejades (el `<picture>`, `<figure>` i `<section>` són els punts fràgils).
3. `?v=` incrementat als tres HTML si s'ha tocat `style.css` o `main.js`.
4. `llms.txt` i el `lastmod` de `sitemap.xml` al dia si canvien fets (llibres, projectes, contacte).
5. Després del `git push`, obrir `https://about.pocallum.cat/?v=2`: GitHub Pages envia l'HTML amb `max-age=600`.

## Control horari

Skill actiu: `gestor-hores` — registra automàticament el temps de treball per sessió.

- Logs a `.taques/about-pocallum/YYYY-MM-DD.md` (creat automàticament)
- Comandes: `/time-log [tasca] [hores]`, `/time-report [periode]`, `/time-config [hores] [tarifa]`
- No modificar manualment els fitxers `.taques/` — són append-only
