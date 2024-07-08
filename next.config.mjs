/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "standalone",
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/assets/',
            publicPath: '/_next/static/assets/',
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;