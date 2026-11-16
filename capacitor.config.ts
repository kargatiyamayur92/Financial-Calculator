
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.yourbrand.financecalculator',
  appName: 'Finance Calculator',
  webDir: 'dist',

  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      launchAutoHide: true,
      backgroundColor: '#101114',
      showSpinner: false,
    },
  },
};

export default config;
