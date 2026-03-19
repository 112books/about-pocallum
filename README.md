# about.pocallum.cat

Pàgina personal de Joan "Linux" Martínez i Serres.
Estàtic, sense base de dades, sense dependències.

## Estructura

```
/
├── index.html        ← Redirecció automàtica per idioma del navegador
├── style.css         ← CSS compartit per totes les versions
├── CNAME             ← Domini personalitzat per GitHub Pages
├── ca/index.html     ← Versió catalana
├── en/index.html     ← Versió anglesa
└── es/index.html     ← Versió castellana
```

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

Edita directament el fitxer de l'idioma corresponent:
- `ca/index.html` per al català
- `en/index.html` per a l'anglès
- `es/index.html` per al castellà

El CSS compartit és `style.css`. Si cal afegir un idioma nou, duplica un dels fitxers existents i afegeix l'enllaç al nav de tots tres.
