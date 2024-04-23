import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 2, // Key for Smoke test. Keep it at 2, 3, max 5 VUs
  duration: '1m', // This can be shorter or just a few iterations
};

export default () => {
  const urlRes = http.get('https://api.staging.mercap.com.ar/1ab0ad33-7b34-4e64-8a52-a3d4f9cf8452');
  sleep(1);
  // MORE STEPS
  // Here you can have more steps or complex script
  // Step1
  // Step2
  // etc.
};
