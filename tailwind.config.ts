import type { Config } from 'tailwindcss'
import { fontFamily, fontSize } from 'tailwindcss/defaultTheme'

const config: Config = {
  mode: 'jit',
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          '50': '#f8fafc',
          '100': '#f1f5f9',
          '200': '#e2e8f0',
          '300': '#cbd5e1',
          '400': '#94A3B8',
          '500': '#64748B',
          '600': '#475569',
          '700': '#334155',
          '800': '#1E293B',
          '900': '#0F172A'
        },
        primary: {
          '50': '#D3FDEE',
          '600': '#2C2E30',
          '300': '#00D78B',
          '500': '#009D66',
          '700': '#005B3B',
          '900': '#002C11'
        },
        secondary: {
          '50': '#FDF6D3',
          '100': '#FBE9B7',
          '200': '#F9D08E',
          '300': '#F4B45F',
          '400': '#ED8936',
          '500': '#E26C1F',
          '600': '#E8C93D',
          '700': '#F4D10C',
          '800': '#E0A800',
          '900': '#DABB0B'
        },
        success: {
          light: '#D1FAE5',
          primary: '#41B871',
          medium: '#367C50',
          contrast: '#084938'
        },
        warning: {
          light: '#FFFBD1',
          primary: '#F5D90A',
          medium: '#E4DB8B',
          contrast: '#084938'
        },
        error: {
          light: '#FEE2E2',
          primary: '#EF4444',
          medium: '#B91C1C',
          contrast: '#422424'
        },
        info: {
          light: '#DBEAFE',
          primary: '#3B82F6',
          medium: '#293E7A',
          contrast: '#223058'
        },
        shades: {
          '0': '#FFFFFF',
          '100': '#0F0E0E'
        },
        custom: {
          '100': '#A0A3A6'
        }
      },
      spacing: {
        '0': '0px',
        '50': '4px',
        '75': '6px',
        '100': '8px',
        '200': '12px',
        '300': '16px',
        '400': '20px',
        '500': '24px',
        '600': '32px',
        '700': '40px',
        '800': '48px',
        '900': '64px',
        '1000': '80px'
      },
      padding: {
        '0': '0px',
        '50': '4px',
        '75': '6px',
        '100': '8px',
        '200': '12px',
        '300': '16px',
        '400': '20px',
        '500': '24px',
        '600': '32px',
        '700': '40px',
        '800': '48px',
        '900': '64px',
        '1000': '80px'
      },
      fontFamily: {
        ...fontFamily,
        mont: ['Montserrat', 'sans-serif'],
        source: ['Source Sans Pro'],
        inter: ['Inter'],
        roboto: ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
      fontSize: {
        ...fontSize,
        h1: '64px',
        h1s: '40px',
        h2: '36px',
        h2s: '24px',
        h3: '32px',
        h3s: '20px',
        h4: '24px',
        h4s: '20px',
        h5: '20px',
        h5s: '18px',
        h6: '18px',
        h6s: '18px',
        p1: '18px',
        p2: '16px',
        p3: '14px',
        caption1: '12px',
        caption2: '14px',
        bl: '18px',
        bm: '16px',
        bs: '14px'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  safelist: [
    'h-[10px]',
    'h-[20px]',
    'h-[30px]',
    'h-[40px]',
    'h-[50px]',
    'h-[60px]',
    'h-[70px]',
    'h-[80px]',
    'h-[90px]',
    'h-[100px]',
    'h-[110px]',
    'h-[120px]',
    'h-[130px]',
    'h-[140px]',
    'h-[150px]',
    'h-[160px]',
    'h-[170px]',
    'h-[180px]',
    'h-[190px]',
    'h-[200px]',
    'w-[10px]',
    'w-[20px]',
    'w-[30px]',
    'w-[40px]',
    'w-[50px]',
    'w-[60px]',
    'w-[70px]',
    'w-[80px]',
    'w-[90px]',
    'w-[100px]',
    'w-[110px]',
    'w-[120px]',
    'w-[130px]',
    'w-[140px]',
    'w-[150px]',
    'w-[160px]',
    'w-[170px]',
    'w-[180px]',
    'w-[190px]',
    'w-[200px]'
  ]
}
export default config
