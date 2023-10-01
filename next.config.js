/** @type {import('next').NextConfig} */
const nextConfig = {}


nextConfig.images = {
    domains: ['www23.a8.net'],
  };
  
module.exports = nextConfig

// next.config.js
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https', // プロトコルを指定します
          hostname: '**', // ホスト名にワイルドカードを使えます
        },
      ],
    },
  };
  
  

  