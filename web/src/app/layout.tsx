
import { Header } from '@/components/Header/header'
import './globals.css'
import { Bai_Jamjuree as BJ } from 'next/font/google'
import { Footer } from '@/components/Footer/footer'

const Bj = BJ({ subsets: ['latin'], variable: '--font-bj', weight: ['400', '600', '700'] })

export const metadata = {
  title: 'Reorganize',
  description: 'Organize your life with Reorganize',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Bj.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
