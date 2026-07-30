import Anouncement from "@/Components/anouncement";
import NavigationBar from "@/Components/Navigation";
import Footer from "@/Components/Footer";

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
