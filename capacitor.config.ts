import type { CapacitorConfig } from '@capacitor/cli';

// PROVISIONAL: el appId es el identificador de iOS (bundle identifier) y de
// Android (applicationId). Cámbialo por el definitivo antes de generar los
// proyectos nativos: una vez publicado en las tiendas no se puede cambiar.
const config: CapacitorConfig = {
  appId: 'com.wolffgangsant.app',
  appName: 'Wolffgangsant',
  webDir: 'dist',
};

export default config;
