/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Asegúrate de habilitar `appDir` si estás usando el nuevo sistema de rutas de Next.js
  },
  pageExtensions: ["js", "jsx", "ts", "tsx"], // Esto asegura que todas las extensiones relevantes sean detectadas
};

export default nextConfig;
