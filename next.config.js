module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/u',
        destination: '/u/overview',
        permanent: true,
      },
    ];
  },
};
