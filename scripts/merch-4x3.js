/**
 * Converte as imagens da pasta public/merch para proporção 4:3 (crop central).
 * Assim cabem corretamente na borda da secção Merch sem faixas vazias.
 * Uso: node scripts/merch-4x3.js
 */

const fs = require("fs");
const path = require("path");

const MERCH_DIR = path.join(process.cwd(), "public", "merch");
const TARGET_WIDTH = 800;
const TARGET_HEIGHT = 600; // 4:3
const QUALITY = 85;

async function convertTo4x3() {
  let sharp;
  try {
    sharp = require("sharp");
  } catch {
    console.log("Instalando sharp... Execute: npm install sharp --save-dev");
    process.exit(1);
  }

  if (!fs.existsSync(MERCH_DIR)) {
    console.log("Pasta public/merch não encontrada.");
    process.exit(1);
  }

  const files = fs.readdirSync(MERCH_DIR).filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f));

  if (files.length === 0) {
    console.log("Nenhuma imagem encontrada em public/merch.");
    process.exit(1);
  }

  console.log(`Convertendo ${files.length} imagens para 4:3...`);

  for (const file of files) {
    const inputPath = path.join(MERCH_DIR, file);
    const ext = path.extname(file).toLowerCase();
    const isJpeg = [".jpg", ".jpeg"].includes(ext);

    try {
      const image = sharp(inputPath);

      // Crop central para 4:3 e redimensionar para TARGET_WIDTH x TARGET_HEIGHT
      let pipeline = image.resize(TARGET_WIDTH, TARGET_HEIGHT, {
        fit: "cover",
        position: "center",
      });

      if (isJpeg) {
        pipeline = pipeline.jpeg({ quality: QUALITY });
      } else if (ext === ".png") {
        pipeline = pipeline.png();
      } else if (ext === ".webp") {
        pipeline = pipeline.webp({ quality: QUALITY });
      }

      // Escrever para ficheiro temporário e depois substituir o original
      const tempPath = inputPath + ".tmp";
      await pipeline.toFile(tempPath);
      fs.renameSync(tempPath, inputPath);

      const stats = fs.statSync(inputPath);
      console.log(`  ✓ ${file} (${TARGET_WIDTH}×${TARGET_HEIGHT}, ${(stats.size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`  ✗ ${file}:`, err.message);
    }
  }

  console.log("Conversão para 4:3 concluída.");
}

convertTo4x3();
