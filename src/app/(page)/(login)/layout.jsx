import "@styles/tailwind.css";


const AuthLayout = ({children}) => {
    return (
      <html>

      
        <body className="flex h-full items-center justify-center 
        bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-900">
              {children}
        </body>
      </html>    
        
      );
}
 
export default AuthLayout;