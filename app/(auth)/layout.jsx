import "@styles/tailwind.css";


export default function SettingLayout({ children }) {
  return (
    <html lang="en">
    
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
