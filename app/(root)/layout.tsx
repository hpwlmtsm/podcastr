export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <main>
            <p className="text-black-1">LEFT SIDEBAR</p>
            {children}
            <p className="text-black-1">RIGHT SIDEBAR</p>
        </main>
    </div>
  );
}
