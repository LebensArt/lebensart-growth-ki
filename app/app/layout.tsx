export const metadata = {
  title: 'LebensArt Growth KI',
  description: 'Marketing-Zentrale für LebensArt Solothurn',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
