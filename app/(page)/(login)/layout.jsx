import "@styles/tailwind.css"


export default function HomepageLayout({ children }) {

    return (
      <html lang="en">
        <body className="flex h-full items-center justify-center 
        bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-300 via-blue-500 to-blue-700">
              {children}
        </body>
      </html>
    )
}