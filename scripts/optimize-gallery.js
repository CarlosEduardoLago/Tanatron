/**
 * Otimiza imagens da galeria para reduzir tamanho e melhorar performance.
 * Redimensiona para max 800px de largura e comprime com qualidade 80.
 * NÃO usar .grayscale() nem conversão para P&B — manter cores originais.
 * Executa antes do build: npm run optimize-images
 */

const fs = require("fs");
const path = require("path");

const GALLERY_DIR = path.join(process.cwd(), "public", "galeria");
const MAX_WIDTH = 800;
const QUALITY = 80;

async function optimizeImages() {
  let sharp;
  try {
    sharp = require("sharp");
  } catch {
    console.log("Instalando sharp... Execute: npm install sharp --save-dev");
    process.exit(1);
  }

  if (!fs.existsSync(GALLERY_DIR)) {
    console.log("Pasta public/galeria não encontrada. Pulando otimização.");
    process.exit(0);
    return;
  }

  const files = fs.readdirSync(GALLERY_DIR).filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f));

  if (files.length === 0) {
    console.log("Nenhuma imagem encontrada em public/galeria. Pulando otimização.");
    process.exit(0);
    return;
  }

  console.log(`Otimizando ${files.length} imagens...`);

  for (const file of files) {
    const inputPath = path.join(GALLERY_DIR, file);
    const ext = path.extname(file).toLowerCase();
    const isJpeg = [".jpg", ".jpeg"].includes(ext);

    try {
      const image = sharp(inputPath);
      const meta = await image.metadata();
      const needsResize = meta.width > MAX_WIDTH;

      let pipeline = image;

      if (needsResize) {
        pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
      }

      if (isJpeg) {
        pipeline = pipeline.jpeg({ quality: QUALITY });
      } else if (ext === ".png") {
        pipeline = pipeline.png({ quality: Math.round(QUALITY / 10) });
      } else if (ext === ".webp") {
        pipeline = pipeline.webp({ quality: QUALITY });
      }

      await pipeline.toFile(inputPath + ".tmp");
      fs.renameSync(inputPath + ".tmp", inputPath);

      const stats = fs.statSync(inputPath);
      console.log(`  ✓ ${file} (${(stats.size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`  ✗ ${file}:`, err.message);
    }
  }

  console.log("Otimização concluída.");
}

optimizeImages();
