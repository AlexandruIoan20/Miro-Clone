interface LayoutProps { 
    children: React.ReactNode
}

const Layout = ( { children }: LayoutProps) => {
  return (
    <div className = "flex flex-col gap-y-4">
        <nav className = "bg-red-500 text-sm text-white p-1">
            I am a reusable Navbar    
        </nav>   
        <p className="text-sm bg-purple-400" > Users Layout </p>
        { children }
    </div>
  )
}

export default Layout