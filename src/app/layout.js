import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import { ArticleProvider } from '@/contexts/ArticleContext';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ArticleProvider>
          <Navbar />
          <div className="container">
            {children}
          </div>
        </ArticleProvider>
      </body>
    </html>
  );
}