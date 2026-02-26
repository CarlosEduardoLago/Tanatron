# Tanatron — Landing Page

Landing page da banda **Tanatron** (Death Metal, São Luís/MA). Desenvolvida com Next.js, TypeScript, Tailwind CSS, shadcn/ui e Framer Motion.

## Ver página ao vivo

A página pode ser visualizada de duas formas:

### Pelo GitHub (GitHub Pages)

O repositório está configurado para publicar a página no **GitHub Pages**. Para ativar:

1. No repositório **[CarlosEduardoLago/Tanatron](https://github.com/CarlosEduardoLago/Tanatron)**, vá em **Settings** → **Pages**.
2. Em **Build and deployment** → **Source**, escolha **GitHub Actions**.
3. Após o próximo push na branch `main` (ou ao rodar o workflow manualmente em Actions), a página ficará disponível em:

   **https://carloseduardolago.github.io/Tanatron/**

### Pela Vercel

1. Acesse **[vercel.com](https://vercel.com)** e faça login com sua conta GitHub.
2. Clique em **Add New…** → **Project** e importe o repositório **CarlosEduardoLago/Tanatron**.
3. Clique em **Deploy**. Em alguns minutos a página ficará em um link como `tanatron.vercel.app`.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CarlosEduardoLago/Tanatron)

## Clone e primeiro uso

```bash
git clone <url-do-repo>
cd Tanatron
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Como rodar

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Deploy

O projeto pode ser implantado na [Vercel](https://vercel.com) conectando o repositório no GitHub (ou outro Git). O build usa `next build`; não é necessário configurar variáveis de ambiente para o conteúdo atual.

## Links e textos

Para alterar links (Spotify, YouTube, Instagram, about.me) e textos da banda, edite:

- **`src/lib/constants.ts`** — nome da banda, tagline, bio, texto sobre a banda, galeria e URLs.

Os links de Spotify e YouTube podem ser trocados pelos perfis reais da banda quando disponíveis. As imagens da galeria usam placeholders (Picsum); para fotos reais, altere `GALLERY_IMAGES` ou coloque arquivos em `public/gallery/`.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (tema escuro, cores laranja/roxo)
- **shadcn/ui** (Button e utilitários)
- **Framer Motion** (animações de entrada nas seções e no Hero)

## Estrutura

- `src/app/` — layout, página principal, estilos globais
- `src/components/` — HeroSection, AboutSection, GallerySection, ListenSection, MerchSection, SocialLinks, Footer
- `src/components/ui/` — Button (shadcn)
- `src/lib/` — utils (cn), constants
