import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@global': './src/global',
      '@utils': './src/utils',
      '@assets': './src/assets',
    }
  },
  css:{
    modules:{
      scopeBehaviour: 'local',
      localsConvention: 'camelCase'
  }
}})
