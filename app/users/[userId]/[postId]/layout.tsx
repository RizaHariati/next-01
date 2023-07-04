import { Roboto } from "next/font/google";
import Link from "next/link";

const inter = Roboto({ subsets: ["latin"], weight: "300" });

export const metadata = {
  title: "Users Page",
  description: "This is the home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="w-full flex items-center justify-center gap-3">
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/users">
            <p>users</p>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
