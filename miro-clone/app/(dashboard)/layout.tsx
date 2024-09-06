import { Sidebar } from "./_components/sidebar"; 
import { OrgSidebar } from "./_components/sidebar/org-sidebar";
import { NavigationBar} from "./_components/sidebar/navigation-bar"

interface DashboardLayoutProps { 
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => { 
    return ( 
      <main className = "h-full">
        <Sidebar /> 
        <div className = "pl-[60px] h-full">
          <div className = "flex gap-x-3 h-full">
            { /* Render Organization Sidebar */ }
            <OrgSidebar /> 
            <div className = "h-full flex-1">
              <NavigationBar /> 
              { children }  
            </div>
          </div>
        </div>
      </main>
    )
}

export default DashboardLayout;