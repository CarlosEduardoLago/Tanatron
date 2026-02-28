# Tanatron — Landing Page

Landing page da banda **Tanatron** (Death Metal, São Luís/MA). Desenvolvida com Next.js, TypeScript, Tailwind CSS, shadcn/ui e Framer Motion.

## Ver página ao vivo

A página pode ser visualizada de duas formas:

### Pelo GitHub (GitHub Pages)

O repositório usa o workflow **Deploy to GitHub Pages**, que publica a pasta estática na branch **gh-pages**. Para a página aparecer:

1. No repositório **[CarlosEduardoLago/Tanatron](https://github.com/CarlosEduardoLago/Tanatron)**, vá em **Settings** → **Pages**.
2. Em **Build and deployment** → **Source**, escolha **Deploy from a branch** (não "GitHub Actions").
3. Em **Branch**, selecione **gh-pages** e pasta **/ (root)**. Clique em **Save**.
4. Na aba **Actions**, rode o workflow **"Deploy to GitHub Pages"** (Run workflow) se ainda não tiver rodado após o último push.
5. Quando o workflow terminar (ícone verde), aguarde 1–2 minutos e acesse: **https://carloseduardolago.github.io/Tanatron/**

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

Antes do build, o script `optimize-images` comprime automaticamente as imagens em `public/gallery/` (redimensiona para max 800px, qualidade 80). Para rodar manualmente: `npm run optimize-images`.

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
