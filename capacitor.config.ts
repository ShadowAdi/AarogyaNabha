import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.3dde9b72c21349c481a9c6f3e7638b30',
  appName: 'desi-health-bridge',
  webDir: 'dist',
  server: {
    url: 'https://3dde9b72-c213-49c4-81a9-c6f3e7638b30.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#ffffff",
      showSpinner: false
    }
  }
};

export default config;