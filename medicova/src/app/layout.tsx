import ThemeProviderClient from "./ThemeProviderClient";
import "./globals.css";

export const metadata = {
  title: "Medicova",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderClient>{children}</ThemeProviderClient>
      </body>
    </html>
  );
}
