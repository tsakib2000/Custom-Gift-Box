import Anouncement from "@/Components/anouncement";
import NavigationBar from "@/Components/Navigation";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Anouncement />
      <NavigationBar />
      {children}
    </>
  );
}
