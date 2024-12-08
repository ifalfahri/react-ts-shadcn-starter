import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"

function App() {

  return ( 
    // you can delete it and replace with your own code
    <ThemeProvider>
    <main className="flex flex-col justify-center items-center min-h-screen space-y-10">
      <ModeToggle /> 
      <h1 className="text-5xl font-extrabold text-center">
        <a href="https://react.dev/" className="text-[#61dbfb] hover:text-[#56c8e5] transition-colors">
          React
        </a> + <a href="https://www.typescriptlang.org/" className="text-[#3178c6] hover:text-[#396fa8] transition-colors">
          Typescript
        </a> + <a href="https://ui.shadcn.com/" className="text-primary hover:text-primary/80 transition-colors">
          shadcn/ui
        </a> + <a href="https://vite.dev/" className="text-violet-500 hover:text-violet-600 transition-colors">
          Vite
        </a> + <a href="https://bun.sh/" className="text-orange-400 hover:text-orange-500 transition-colors">
          Bun
        </a> starter
      </h1>
      <div className="flex flex-row space-x-6">
      <a 
        href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fifalfahri%2Freact-ts-shadcn-starter">
        <img 
          src="https://vercel.com/button" 
          alt="Deploy with Vercel"
          className="h-10 hover:shadow-lg transition-all duration-300"
        />
      </a>
      <Button
      ><a href="">
        ⭐️ on GitHub</a>
      </Button>
      </div>
    </main>
  </ThemeProvider>
  )
}

export default App
