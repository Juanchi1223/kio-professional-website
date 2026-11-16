// Genera dist/ con SOLO lo público: index.html, styles.css (Tailwind minificado), js/, assets/ y _headers.
import { rmSync, mkdirSync, cpSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(raiz, 'dist');

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

// CSS de Tailwind, minificado
const tailwind = join(raiz, 'node_modules', '.bin', process.platform === 'win32' ? 'tailwindcss.cmd' : 'tailwindcss');
execFileSync(tailwind, ['-i', join(raiz, 'src/input.css'), '-o', join(dist, 'styles.css'), '--minify'], {
  stdio: 'inherit',
  cwd: raiz,
});

// index.html: en el código fuente el CSS se enlaza como dist/styles.css (así se ve en desarrollo);
// dentro de dist/ el CSS queda en la raíz, por eso se reescribe la ruta.
const html = readFileSync(join(raiz, 'index.html'), 'utf8');
if (!html.includes('href="dist/styles.css"')) throw new Error('index.html no enlaza dist/styles.css');
writeFileSync(join(dist, 'index.html'), html.replace('href="dist/styles.css"', 'href="styles.css"'));

// Resto de archivos públicos
for (const ruta of ['js', 'assets', '_headers']) {
  const origen = join(raiz, ruta);
  if (!existsSync(origen)) throw new Error(`Falta ${ruta}`);
  cpSync(origen, join(dist, ruta), { recursive: true });
}

console.log('dist/ listo');
