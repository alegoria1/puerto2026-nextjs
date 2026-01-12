const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// CONFIGURATION DU HTACCESS (Version Racine)
const htaccessContent = `
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # 1. Empêche l'affichage "Index of"
  Options -Indexes

  # 2. Force l'ouverture de index.html dans les dossiers
  DirectoryIndex index.html

  # 3. Gestion erreur 404
  ErrorDocument 404 /404.html

  # 4. Force le slash à la fin (Obligatoire avec trailingSlash: true)
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_URI} !/$
  RewriteRule . %{REQUEST_URI}/ [L,R=301]
</IfModule>
`;

console.log('🧹  1. Nettoyage du dossier "out" et ".next"...');
// On supprime les dossiers s'ils existent
if (fs.existsSync('out')) fs.rmSync('out', { recursive: true, force: true });
if (fs.existsSync('.next')) fs.rmSync('.next', { recursive: true, force: true });

console.log('🏗️   2. Lancement du build Next.js...');
try {
  // On lance la commande next build et on affiche la sortie dans la console
  execSync('next build', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Erreur pendant le build. Arrêt du processus.');
  process.exit(1);
}

console.log('📝  3. Création automatique du .htaccess...');
fs.writeFileSync(path.join('out', '.htaccess'), htaccessContent);

console.log('✅  SUCCÈS ! Le dossier "out" est propre et prêt à être envoyé sur FileZilla.');