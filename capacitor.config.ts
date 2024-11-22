import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cropdisease.app',
  appName: 'Crop Disease Detection',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    Camera: {
      permissionType: 'camera'
    }
  }
};

export default config;