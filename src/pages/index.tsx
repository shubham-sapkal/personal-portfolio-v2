'use client'

import { useTheme } from "next-themes";


export default function Home() {

  const { theme, setTheme } = useTheme()

  return (
    <div>
    <div className="bg-primary w-20 h-20 flex items-center justify-center">
      Hello World
    </div>

    <div className="flex flex-col">

      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>

    </div>

    </div>
  )
}
