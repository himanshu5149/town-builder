
import {
  onCLS,
  onINP,
  onLCP,
  onFCP,
  onTTFB
} from 'web-vitals';

import type { Metric } from 'web-vitals';

function reportWebVitals(metric: Metric) {
  // Show results during development
  if (import.meta.env.DEV) {
    console.log('[Web Vitals]', {
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      page: window.location.pathname
    });
  }

  // Send results to Google Analytics 4 if configured
  if (typeof window.gtag === 'function') {
    window.gtag('event', metric.name, {
      metric_value: metric.value,
      metric_rating: metric.rating,
      metric_id: metric.id,
      page_path: window.location.pathname
    });
  }
}

onCLS(reportWebVitals);
onINP(reportWebVitals);
onLCP(reportWebVitals);
onFCP(reportWebVitals);
onTTFB(reportWebVitals);
