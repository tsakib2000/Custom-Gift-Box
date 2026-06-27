import Anouncement from "@/components/anouncement";
import NavigationBar from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Anouncement />
      <NavigationBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
