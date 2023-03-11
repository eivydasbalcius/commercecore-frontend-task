import "../styles/globals.css";
import "../styles/styles.css";

export const metadata = {
  title: "CommerceCore",
  description: "CommerceCore Task",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale-1"/>
        <link rel="stylesheet" href="https://use.typekit.net/ifi0mjg.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
