/**
 * Performance monitoring utilities
 * Use these in development to track component performance
 */

export const measurePerformance = (name: string, fn: () => void) => {
  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    performance.mark(`${name}-start`)
    fn()
    performance.mark(`${name}-end`)
    performance.measure(name, `${name}-start`, `${name}-end`)
    const measure = performance.getEntriesByName(name)[0]
    console.log(`${name} took ${measure.duration.toFixed(2)}ms`)
  } else {
    fn()
  }
}

export const reportWebVitals = (metric: {
  id: string
  name: string
  value: number
  label: 'web-vital' | 'custom'
}) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(metric)
  }
  // In production, send to analytics service
}
