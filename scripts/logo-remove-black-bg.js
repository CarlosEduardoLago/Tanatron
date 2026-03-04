/**
 * Remove fundo preto da logo: torna pixels pretos/quase-pretos transparentes.
 * Uso: node scripts/logo-remove-black-bg.js
 */

const path = require("path");
const fs = require("fs");

const LOGO_PATH = path.join(process.cwd(), "public", "logo.png");
const BLACK_THRESHOLD = 35; // pixels com R,G,B <= este valor viram transparentes

async function removeBlackBackground() {
  let sharp;
  try {
    sharp = require("sharp");
  } catch {
    console.log("Erro: sharp não encontrado. Execute: npm install sharp --save-dev");
    process.exit(1);
  }

  if (!fs.existsSync(LOGO_PATH)) {
    console.log("Arquivo public/logo.png não encontrado.");
    process.exit(1);
  }

  console.log("Processando logo.png (removendo fundo preto)...");

  const { data, info } = await sharp(LOGO_PATH)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r <= BLACK_THRESHOLD && g <= BLACK_THRESHOLD && b <= BLACK_THRESHOLD) {
      data[i + 3] = 0;
    }
  }

  const outPath = path.join(process.cwd(), "public", "logo-no-bg.png");
  await sharp(data, { raw: { width, height, channels } })
    .png()
    .toFile(outPath);

  console.log("  ✓ Logo com fundo transparente salva em public/logo-no-bg.png");
  console.log("  → Atualize o Header para usar logo-no-bg.png ou renomeie para logo.png.");
}

removeBlackBackground().catch((err) => {
  console.error("Erro:", err.message);
  process.exit(1);
});
