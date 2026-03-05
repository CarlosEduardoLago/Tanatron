/**
 * Converte a imagem do hero (public/hero.png) para proporção 16:9 (crop central).
 * No desktop a imagem preenche toda a borda sem cortes. Uso: node scripts/hero-16x9.js
 */

const fs = require("fs");
const path = require("path");

const HERO_PATH = path.join(process.cwd(), "public", "hero.png");
const TARGET_WIDTH = 1920;
const TARGET_HEIGHT = 1080; // 16:9
const QUALITY = 90;

async function convertTo16x9() {
  let sharp;
  try {
    sharp = require("sharp");
  } catch {
    console.log("Instalando sharp... Execute: npm install sharp --save-dev");
    process.exit(1);
  }

  if (!fs.existsSync(HERO_PATH)) {
    console.log("Ficheiro public/hero.png não encontrado.");
    process.exit(1);
  }

  try {
    const image = sharp(HERO_PATH);
    let pipeline = image.resize(TARGET_WIDTH, TARGET_HEIGHT, {
      fit: "cover",
      position: "center",
    });
    pipeline = pipeline.png();
    const tempPath = HERO_PATH + ".tmp";
    await pipeline.toFile(tempPath);
    fs.renameSync(tempPath, HERO_PATH);
    const stats = fs.statSync(HERO_PATH);
    console.log(`Hero convertido para 16:9 (${TARGET_WIDTH}×${TARGET_HEIGHT}, ${(stats.size / 1024).toFixed(1)} KB).`);
  } catch (err) {
    console.error("Erro:", err.message);
    process.exit(1);
  }
}

convertTo16x9();
