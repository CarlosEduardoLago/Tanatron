export const BAND_NAME = "Tanatron";
export const TAGLINE = "Death Metal • São Luís/MA";
export const BIO = "Musicista/banda. Nossas redes, vídeos e músicas.";

/** URL base do site (GitHub Pages) */
export const SITE_URL = "https://carloseduardolago.github.io/Tanatron";

export const ABOUT_LONG = `A Tanatron nasceu na cena de Death Metal de São Luís do Maranhão, levando peso, atitude e riffs na veia. Com influências que vão do death metal clássico ao extremo contemporâneo, a banda consolidou sua sonoridade em palcos e estúdios, sempre em busca da intensidade que define o gênero.

Nossas redes, vídeos e músicas estão espalhadas por Spotify, YouTube e redes sociais e aqui você encontra tudo reunido. Death Metal feito no Nordeste do Brasil.`;

export const BAND_MEMBERS: { name: string; role: string }[] = [
  { name: "Formação", role: "Conheça a banda nas redes" },
];

export const ABOUT_IMAGE = "/ABOUT_IMAGE2.jpg";

/** Imagem de capa do Hero (public/hero.jpeg) */
export const HERO_IMAGE = "/hero.jpeg";

/** Proporção largura/altura da imagem hero (ex.: 16/9). Ajuste conforme hero.jpeg para evitar faixas pretas. */
export const HERO_IMAGE_ASPECT_RATIO = 16 / 9;

/** Imagens e dados da seção Membros (public/membros), ordem: membro1, 2, 3, 4 */
export const MEMBROS_IMAGES: {
  src: string;
  alt: string;
  name: string;
  role: string;
  objectPosition?: string;
}[] = [
  { src: "/membros/membro1.png", alt: "Nyelson Weber, baixo e vocal", name: "Nyelson Weber", role: "Baixo e Vocal" },
  { src: "/membros/membro2.png", alt: "Nynrod Weber, guitarra", name: "Nynrod Weber", role: "Guitarra" },
  { src: "/membros/membro3.png", alt: "Daniel Azevedo, guitarra", name: "Daniel Azevedo", role: "Guitarra" },
  { src: "/membros/membro4.png", alt: "Weeslem Lima, bateria", name: "Weeslem Lima", role: "Bateria" },
];

/** Fotos da seção Galeria (public/galeria). Manter proporção 4:3 nas novas imagens para padrão visual. objectPosition opcional controla o enquadramento no crop. */
export const GALLERY_PHOTOS: { src: string; alt: string; objectPosition?: string }[] = [
  { src: "/galeria/galeria_1.jpg", alt: "Tanatron — galeria 1", objectPosition: "center center" },
  { src: "/galeria/galeria_2.jpg", alt: "Tanatron — galeria 2", objectPosition: "center center" },
  { src: "/galeria/galeria_3.jpg", alt: "Tanatron — galeria 3", objectPosition: "center center" },
  { src: "/galeria/galeria_4.jpg", alt: "Tanatron — galeria 4", objectPosition: "center center" },
];

/** Imagens da seção Merch (public/merch). aspectRatio opcional: proporção largura/altura (ex. 4/3, 1). Se omitido, usa 4/3. */
export const MERCH_IMAGES: { src: string; alt: string; aspectRatio?: number }[] = [
  { src: "/merch/merch%20editada/merch4.png", alt: "Tanatron — produtos oficiais 1", aspectRatio: 4 / 3 },
  { src: "/merch/merch%20editada/merch5.png", alt: "Tanatron — produtos oficiais 2", aspectRatio: 4 / 3 },
  { src: "/merch/merch%20editada/merch6.png", alt: "Tanatron — produtos oficiais 3", aspectRatio: 4 / 3 },
];

export const LINKS = {
  spotify: "https://open.spotify.com/intl-pt/artist/5CfR70hsays5gPWFBg6qKx",
  youtube: "https://www.youtube.com/user/TanatronOfficial",
  instagram: "https://instagram.com/tanatronband",
  madRockStore: "https://www.instagram.com/madrockstore/",
  aboutMe: "https://about.me/tanatron",
  facebook: "https://facebook.com/tanatronband",
  twitter: "https://twitter.com/tanatronband",
} as const;

export const DISCOGRAPHY = [
  {
    title: "Tanatron",
    year: 2017,
    type: "Álbum",
    spotifyUri: "spotify:album:7Liq0KtpaVrTHw6XkraYuj",
    embedUrl: "https://open.spotify.com/embed/album/7Liq0KtpaVrTHw6XkraYuj",
    coverImage: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e025b3c067a3444fb945291dcd0",
    tracklist: [
      "Betrayed by Yourself",
      "Servorun Sanguinem",
      "Do the Creation Rise",
      "We Need the Death",
      "In Front of Your Eyes",
      "Killing and Domination",
      "Slowly Dying",
      "Toward Terror",
      "Bloody Is the Hunt",
    ],
    lineUp: "Nyelson Weber (Baixo e Vocal), Nynrod Weber (Guitarra), Daniel Azevedo (Guitarra), Weeslem Lima (Bateria)",
  },
] as const;

export const AGENDA: { date: string; location: string; link?: string | null }[] = [
  { date: "Em breve", location: "Novas datas em breve" },
];

export const VIDEOS = [
  { id: "ZLtVzVXLekc", title: "Tanatron — Vídeo" },
  { id: "KD6hW6JtkwI", title: "Tanatron — Vídeo" },
] as const;

/** Posts do Instagram para embed na seção Novidades */
export const INSTAGRAM_POSTS = [
  "https://www.instagram.com/p/DULhkeNiIgF/",
  "https://www.instagram.com/p/DUJmX09j0i-/",
] as const;
