import nextConfig from 'eslint-config-next';

const eslintConfig = [
  ...nextConfig,
  {
    ignores: ['temporary screenshots/**', '.next/**'],
  },
];

export default eslintConfig;
