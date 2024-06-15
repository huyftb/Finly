import { Inter } from "next/font/google";
import "@styles/tailwind.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Finly",
  description: "Finly is a personal finance app that helps you manage your money.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
