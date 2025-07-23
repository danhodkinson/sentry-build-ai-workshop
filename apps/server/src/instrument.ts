import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: 'https://4d7d3daeeca34e07718d568a6c99bdb6@o4509718995664896.ingest.de.sentry.io/4509719029219408',
  _experiments: {
    enableLogs: true,
  },
  debug: true,
  tracesSampleRate: 1.0,
});