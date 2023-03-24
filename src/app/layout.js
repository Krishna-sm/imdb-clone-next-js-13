import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import './globals.css'
import  Providers  from '@/app/Providers';

export const metadata = {
  title: 'IMDB clone',
  description: 'Movie App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
    
        <Providers>
      <Header/>
      <NavBar/>
        <main>
        {children}
          </main>
        </Providers>

         </body>
    </html>
  )
}
