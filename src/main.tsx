import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { spaPreset } from '@whnz/frontend-experience-preset-spa';
import { initCore } from '@whnz/frontend-experience-core';

initCore({
  app: 'demo-spa',
  version: '1.0.0',
  env: 'dev',
  // reporter: 'http://0.0.0.0:3060/api/experience/report',
  reporter: (event) => {
    console.log('Reported event:', event);
  },
  sample: 1,
});
spaPreset({
  keySelectors: ['#root'],
}).forEach((p: any) => p.setup());

setTimeout(() => {
  // @ts-ignore
  window.xxx.yyy();
}, 3000);

const mockLongTask = () => {
  const start = performance.now();
  while (performance.now() - start < 300) {
    // 模拟长任务
  }
};
mockLongTask();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
