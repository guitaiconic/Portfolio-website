import "@/app/_styles/globals.css";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";

//Import Google Font
import { Josefin_Sans } from "next/font/google";

const JosefinFont = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

console.log(JosefinFont);

export const metadata = {
  title: {
    template: "%s | INI Portfolio",
    default: "Welcome to INI Portfolio",
  },
  description:
    "Welcome to the Ini portfolio with amazing dance clips, performances, and lifestyle of an amazing talented beautiful person ",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${JosefinFont.className} bg-background text-primary-100 min-h-screen`}
      >
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
