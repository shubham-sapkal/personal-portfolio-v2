import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return  (
    <ThemeProvider defaultTheme="light" >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
