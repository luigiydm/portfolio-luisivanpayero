# portfolio-luisivanpayero

Portfolio personal de **Luis Iván Payero** — troubleshooting de data platforms, reporting reliability y AWS.

🌐 [luisivanpayero.com](https://luisivanpayero.com/) · 🇪🇸 / 🇬🇧 bilingüe

## Stack

- [Astro](https://astro.build/) (static output)
- [Tailwind CSS](https://tailwindcss.com/)
- Sitemap + robots.txt automáticos

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check && astro build -> dist/
npm run preview  # sirve el build de producción
```

## Deploy

Cloudflare Pages conectado a este repo:

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Build output directory:** `dist`

El dominio `luisivanpayero.com` se configura en *Custom domains*.
