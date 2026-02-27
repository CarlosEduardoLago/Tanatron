export const BAND_NAME = "Tanatron";
export const TAGLINE = "Death Metal • São Luís/MA";
export const BIO = "Musicista/banda. Nossas redes, vídeos e músicas.";

export const ABOUT_LONG = `A Tanatron nasceu na cena de Death Metal de São Luís do Maranhão, levando peso, atitude e riffs na veia. Com influências que vão do death metal clássico ao extremo contemporâneo, a banda consolidou sua sonoridade em palcos e estúdios, sempre em busca da intensidade que define o gênero.

Nossas redes, vídeos e músicas estão espalhadas por Spotify, YouTube e redes sociais e aqui você encontra tudo reunido. Death Metal feito no Nordeste do Brasil.`;

export const BAND_MEMBERS: { name: string; role: string }[] = [
  { name: "Formação", role: "Conheça a banda nas redes" },
];

export const ABOUT_IMAGE = "/ABOUT_IMAGE.jpg";

/** URL da imagem de capa do Hero (about.me/tanatron ou caminho ex: "/hero-band2.jpg") */
export const HERO_IMAGE = "/hero-band2.jpg";

export const GALLERY_IMAGES: { src: string; alt: string }[] = [
  { src: "https://picsum.photos/seed/tanatron1/600/400", alt: "Tanatron ao vivo" },
  { src: "https://picsum.photos/seed/tanatron2/600/400", alt: "Show Tanatron" },
  { src: "https://picsum.photos/seed/tanatron3/600/400", alt: "Banda em palco" },
  { src: "https://picsum.photos/seed/tanatron4/600/400", alt: "Apresentação" },
  { src: "https://picsum.photos/seed/tanatron5/600/400", alt: "Tanatron" },
  { src: "https://picsum.photos/seed/tanatron6/600/400", alt: "Death Metal São Luís" },
];

export const LINKS = {
  spotify: "https://open.spotify.com/intl-pt/artist/5CfR70hsays5gPWFBg6qKx",
  youtube: "https://www.youtube.com/user/TanatronOfficial",
  instagram: "https://instagram.com/tanatronband",
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

export const NEWS = [
  { title: "Tanatron no Spotify e YouTube", date: "2024", excerpt: "Ouça nosso álbum e assista aos clipes no canal oficial.", href: "#discografia" },
] as const;
