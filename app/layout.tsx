import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alexis Romero Dev 👨‍💻 | FullStack, React, Next, Laravel, PHP, Laravel",
  description: "Desarrollador fullstack",
  icons: {
    icon: "/icon.ico", // Asegúrate de que esté en /public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">  
      <body

        className={`bg-dark-50 dark:bg-dark-950 `}
      >
        <ThemeProvider>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
