import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quotex trading platform | QxBroker official site',
  description: 'Quotex is the official website of the smart investment trading platform. Sign up and get 10 000 USD demo account for training. Join!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
