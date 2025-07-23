import * as Sentry from '@sentry/react';
import { useEffect } from 'react';
import {
  useLocation,
  useNavigationType,
  createRoutesFromChildren,
  matchRoutes,
} from 'react-router-dom';

Sentry.init({
  dsn: 'https://b1fe9718105cbefebacc7ae24d075656@o4509718995664896.ingest.de.sentry.io/4509719014801488',
  sendDefaultPii: true,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
    Sentry.reactRouterV7BrowserTracingIntegration({
      useEffect: useEffect,
      useLocation,
      useNavigationType,
      createRoutesFromChildren,
      matchRoutes,
    }),
  ],
  _experiments: {
    enableLogs: true,
  },
  tracesSampleRate: 1.0,
  tracePropagationTargets: ['localhost:3001'],
  replaysSessionSampleRate: 1.0,
  replaysOnErrorSampleRate: 1.0,
});