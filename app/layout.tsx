import "./globals.css";


export const metadata = {
  title: "Chat App",
  description: "Chat application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> {children} </body>
    </html>
  );
}
