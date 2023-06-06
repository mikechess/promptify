import Navbar from '@/components/Navbar'
import '../styles/globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ["400", "600", "700"] 
})

export const metadata = {
  title: 'Promptify App',
  description: 'Find the most popular prompts for AI use',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
