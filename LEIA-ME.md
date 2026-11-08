# Groove Batera — Black Friday

Landing page de oferta única (3 produtos por um preço). HTML, CSS e JS puros.

## O que editar
Tudo fica em `assets/js/config.js`:
- `checkoutUrl`: link do checkout (todos os botões usam esse link)
- `deadline`: data/hora final do cronômetro
- `offerPrice`: preço único da oferta
- `products[...].price`: preço individual (riscado)
A economia e o total são calculados automaticamente.

## Estrutura
```
index.html
assets/
  css/  01-base.css · 02-components.css · 03-sections.css
  js/   config.js · pricing.js · countdown.js · reveal.js · pads.js · main.js
  img/  brand/ · products/
  audio/ drum-pads/ · trap-kit/ · drum-tracks/ (prévias)
```

## Como rodar
- Abra `index.html` direto no navegador, ou use `npx serve src`.
- Prévias sonoras: edite `banks` em `config.js`; para recortar outro trecho das tracks use `tools/make-previews.sh`.
- Build de produção: `npm i && npm run build` (gera `dist/` minificado).

## Deploy
Suba a pasta de produção (o conteúdo de `dist/`) na Vercel, Netlify ou qualquer hospedagem estática.
No build, o `config.js` continua separado e legível para você editar depois.
