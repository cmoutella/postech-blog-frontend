import Navbar from "@/ui/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-full">
      <Navbar />
      <div className="w-full">{children}</div>
    </div>
  );
}
