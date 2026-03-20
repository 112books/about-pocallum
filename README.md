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

## Afegir un nou idioma

1. Duplica `en/index.html` a la nova carpeta (p.ex. `fr/index.html`)
2. Actualitza `lang`, metes, textos i `hreflang` al nou fitxer
3. Afegeix l'entrada al nav de tots els fitxers existents
4. Afegeix l'opció al menú lateral i al selector mòbil

## Analítica

Les estadístiques de visites es gestionen via [Goatcounter](https://www.goatcounter.com).
Sense cookies, sense banner de privacitat, sense dades personals identificables.
Accés al panell: `https://about-pocallum.goatcounter.com`
