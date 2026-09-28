import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE_URL = 'https://luckybear28casino.vercel.app'

const PAGE_TITLE =
  'LuckyBear Casino зеркало и Лаки Бир казино официальный сайт: слоты, бонусы, вход'

const PAGE_DESCRIPTION =
  'LuckyBear Casino — Лаки Бир казино онлайн: официальный сайт и зеркало Luckybear Casino 24/7. Слоты, рулетка, бонусы новичкам, быстрые выплаты. Лакибир казино официальный сайт: играй легко, с лимитами.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    'lucky bear casino',
    'luckybear casino',
    'luckybear casino зеркало',
    'luckybear casino официальный',
    'luckybear casino официальный сайт',
    'lucky bear казино',
    'лаки бир казино',
    'лакибир казино',
    'лаки бир казино зеркало',
    'лаки бир казино онлайн',
    'лаки бир казино официальный',
    'лаки бир казино официальный сайт',
    'лакибир казино официальный сайт',
    'лаки бир казино сайт',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: `${SITE_URL}/`,
    siteName: 'LuckyBear Casino',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: '/images/lb28-hero.png',
        width: 1408,
        height: 768,
        alt: 'LuckyBear Casino — медведь-крупье за зелёным сукном',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    telephone: false,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a241c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content="0930485c0703c76a" />
        {/* Слот для дополнительных пользовательских тегов: вставляйте сюда meta, link, коды верификации */}
      </head>
      <body>{children}</body>
    </html>
  )
}
