import 'dotenv/config';
import esbuild from 'esbuild';

const { sentryEsbuildPlugin } = require("@sentry/esbuild-plugin");


esbuild.build({
  entryPoints: ['index.ts'],
  sourcemap: true,
  bundle: true,
  minify: true,
  platform: 'node',
  format: 'cjs',
  outdir: 'dist',
  allowOverwrite: true,
  external: ['express', 'drizzle-orm', 'pg'],
  plugins:[
    sentryEsbuildPlugin({
      authToken: process.env.SENTRY_AUTH_TOKEN,
      org: "smellie",
      project: "sentry-workshop-server",
    }),
  ]
});

