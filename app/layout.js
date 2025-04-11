import "@/app/_styles/globals.css";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";

export const metadata = {
  title: "INI's Portfolio",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-primary-100 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by INI</footer>
      </body>
    </html>
  );
}
