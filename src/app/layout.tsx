'use client'
import type { Metadata } from 'next'
import { ABeeZee } from 'next/font/google'
import { Provider } from 'react-redux'
import { config } from 'dotenv'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider, createGlobalStyle } from 'styled-components' 
import { StylesAndThemes } from './global.style'
import Header from '@/components/header/header'
import store from '@/redux/root-reducer'

config();

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
};
main{
position: absolute;
top:75px;
width: 100%;
background-color: ${(props) => props.theme.colors.gray};
}
`;

const Query = new QueryClient({
  defaultOptions:{
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60,
    },
  }
});


const abeezee = ABeeZee({subsets:["latin"],weight:'400'})

const metadata: Metadata = {
  title: 'Soares Shopping',
  description: 'The Better Shopping For Your Style',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={abeezee.className}><QueryClientProvider client={Query} contextSharing={true}><Provider store={store}><ThemeProvider theme={StylesAndThemes}><GlobalStyle/><Header/><main>{children}</main></ThemeProvider></Provider></QueryClientProvider></body>
    </html>
  )
}
