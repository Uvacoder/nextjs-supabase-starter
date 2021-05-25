module.exports = {
  async redirects() {
    return [
      {
        source: '/u',
        destination: '/u/overview',
        permanent: true,
      },
    ];
  },
  future: {
    webpack5: true,
  },
};
