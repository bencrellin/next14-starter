import { Inter } from 'next/font/google'
import './globals.css'
import Navabar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Test',
  description: 'Test',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="container">
        <Navabar />
        {children}
        <Footer />
        </div>
      </body>
    </html> 
  );
}