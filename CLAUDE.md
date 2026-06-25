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
- **Articles** — RSS via `api.rss2json.com` des de `pocallum.cat/feed/`

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

## Seccions (ordre al HTML)

1. `#qui-soc`
2. `#el-que-faig` (grid 2×2 de serveis)
3. `#comunicacio-cultural` (destacat amb borde vermell)
4. `#projectes-en-curs`
5. `#obres-publicades`
6. `#trajectoria`
7. `#articles` (carregats via RSS)
8. `#premsa`
9. `#contacte` (footer negre)

## Funcionalitats JS (`main.js`)

### Goatcounter
Script d'analítica afegit dinàmicament. No requereix manteniment.

### Mailto ofuscat
Els `<a data-mailto="1">` no exposen l'adreça al DOM. El clic construeix el `mailto:` per JS.

### Wizard modal de contacte (`#btn-wizard`)
Modal multi-pas amb 5 passos + pantalla de contacte. Internacionalitzat (CA/EN/ES via `document.documentElement.lang`). Enviament via Formspree amb fallback a `mailto:`.

### RSS articles
Carrega els 5 últims articles de `pocallum.cat` detectant l'idioma de la pàgina.

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
