import Head from 'next/head';



export const Layout = ({children}:any) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}
