import { CSSProperties } from 'react';
export const tooltipStyle = {
  position: 'absolute',
  padding: '4px',
  background: 'rgba(0, 0, 0, 0.8)',
  color: '#fff',
  maxWidth: '300px',
  fontSize: '10px',
  zIndex: 9,
  pointerEvents: 'none',
} as CSSProperties;

export const mapStylePicker = {
  background: '#fff',
  position: 'absolute',
  top: '20px',
  left: '20px',
  zIndex: 45,
} as CSSProperties;

export const layerControl = {
  borderRadius: 3,
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
  fontFamily:
    'ff-clan-web-pro, "Helvetica Neue", Helvetica, sans-serif !important',
  fontSize: '12px',
  lineHeight: 1.833,
  width: 200,
  position: 'absolute',
  top: '20px',
  right: '20px',
  padding: '20px',
  zIndex: 45,
  background: 'white',
} as CSSProperties;

export const charts = {
  background: 'white',
  borderRadius: 3,
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
  fontFamily:
    'ff-clan-web-pro, "Helvetica Neue", Helvetica, sans-serif !important',
  fontSize: '12px',
  lineHeight: 1.833,
  height: 300,
  padding: '10px',
  position: 'absolute',
  left: 20,
  bottom: 20,
  width: 500,
  zIndex: 45,
} as CSSProperties;

export const spinner = {
  animation: 'linear 2s infinite',
  background: '#1EACC7',
  borderRadius: '50%',
  height: 10,
  width: 10,
  opacity: 0.4,
  position: 'absolute',
  top: 70,
  left: 60,
  transformOrigin: '20px 20px',
  zIndex: 110,
} as CSSProperties;

export const li = {
  marginLeft: '.5rem',
};
