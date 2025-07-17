import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import 'highlight.js/styles/github.css';

createRoot(document.getElementById('root')!).render(
    <App />
);
