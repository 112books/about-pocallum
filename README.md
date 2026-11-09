# about.pocallum.cat

Pàgina personal de Joan "Linux" Martínez i Serres.
Estàtic, sense base de dades, sense dependències externes (excepte Google Fonts i Goatcounter).

## Estructura

```
/
├── index.html          ← Versió catalana (idioma principal, arrel)
├── en/index.html       ← Versió anglesa
├── es/index.html       ← Versió castellana
├── css/style.css       ← CSS compartit per totes les versions
├── js/main.js          ← JS compartit: Goatcounter, mailto ofuscat, wizard modal
├── img/                ← Imatges
├── robots.txt          ← Robots: crawlers i assistents d'IA
├── sitemap.xml         ← Sitemap amb hreflang i lastmod
├── llms.txt            ← Fitxa de fets per a assistents d'IA
├── admin/index.html    ← Panell d'estadístiques (noindex)
├── CNAME               ← Domini personalitzat per GitHub Pages
└── README.md           ← Aquest fitxer
```

## Tecnologia

- HTML estàtic, sense frameworks ni dependències de build
- CSS amb variables (design tokens) i layout grid de dues columnes
- JS vanilla: analítica (Goatcounter), mailto ofuscat i wizard de contacte
- Formulari de contacte via [Formspree](https://formspree.io) (sense backend propi)
- Desplegament automàtic via GitHub Pages

## Desplegament a GitHub Pages

1. Crea un repositori nou a GitHub (p.ex. `about-pocallum`)
2. Puja tots aquests fitxers al repositori
3. Ves a Settings → Pages → Source: `main` branch, arrel `/`
4. GitHub Pages quedarà actiu a `https://[usuari].github.io/about-pocallum/`

## Configurar el subdomini `about.pocallum.cat`

Al teu proveïdor DNS (on gestiones pocallum.cat), afegeix un registre:

```
Tipus:  CNAME
Nom:    about
Valor:  [usuari].github.io
TTL:    3600
```

GitHub Pages detectarà el fitxer `CNAME` i servirà el domini personalitzat automàticament.

## Editar contingut

- Contingut CA → `index.html` (arrel)
- Contingut EN → `en/index.html`
- Contingut ES → `es/index.html`
- Estils → `css/style.css`
- JS (analítica, wizard) → `js/main.js`

Per forçar que els navegadors descarreguin fitxers actualitzats, incrementa el número de versió als links de CSS i JS de cada HTML:

```html
<link rel="stylesheet" href="css/style.css?v=20260320">
<script src="js/main.js?v=20260320" defer></script>
```

## SEO i assistents d'IA

- **Metadades**: cada idioma té el seu `title`, `description`, Open Graph, Twitter Card i `hreflang` recíprocs amb canonical propi.
- **Dades estructurades**: bloc JSON-LD amb `Person`, `WebSite`, `ProfilePage` i la llista de llibres (`ItemList`). Si afegeixes un títol, actualitza l'`ItemList` i el `numberOfItems` als tres fitxers.
- **`llms.txt`**: resum de fets en català (amb versions EN/ES) adreçat a models de llenguatge. Actualitza'l quan canvien els llibres, els projectes o el contacte.
- **`sitemap.xml`**: recorda actualitzar el `lastmod`.
- **`robots.txt`**: permet explícitament GPTBot, ClaudeBot, PerplexityBot, Google-Extended i companyia; `/admin/` i `/CLAUDE.md` queden fora.
- **Preguntes freqüents**: cada resposta es troba en dos llocs del mateix HTML (el text visible i el JSON-LD `FAQPage`). Si en canvies una, canvia les dues o el cercador detectarà una incoherència.
- **Imatges**: el retrat del hero va en WebP amb el JPEG com a alternativa (`<picture>`), i no s'amplia mai per sobre de la seva mida real (762 px). La targeta per compartir és `img/og-1200x630.jpg`.

### Comprovació ràpida després de publicar

1. Obre `https://about.pocallum.cat/?v=2` — GitHub Pages envia l'HTML amb 10 minuts de cau.
2. Comprova que l'enllaç de CSS dugui la versió nova (`?v=AAAAAMMDD`).
3. Valida el JSON-LD (per exemple amb el Rich Results Test de Google).

## Afegir un nou idioma

1. Duplica `en/index.html` a la nova carpeta (p.ex. `fr/index.html`)
2. Actualitza `lang`, metes, textos i `hreflang` al nou fitxer
3. Afegeix l'entrada al nav de tots els fitxers existents
4. Afegeix l'opció al menú lateral i al selector mòbil

## Analítica

Les estadístiques de visites es gestionen via [Goatcounter](https://www.goatcounter.com).
Sense cookies, sense banner de privacitat, sense dades personals identificables.
Accés al panell: `https://about-pocallum.goatcounter.com`
