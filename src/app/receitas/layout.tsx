import style from '../(index)/page.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={style.body}>{children}</body>
    </html>
  )
}
