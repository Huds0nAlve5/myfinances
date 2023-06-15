import Menu from '@/components/menu/Menu'
import style from './(index)/page.module.css'

export const metadata = {
  title: 'myfinances',
  description: 'Aplicativo de controle de finanças',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={style.body}>
        <Menu />
        {children}
      </body>
    </html>
  )
}
