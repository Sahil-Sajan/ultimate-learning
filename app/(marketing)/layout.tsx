// app/(marketing)/layout.tsx
import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
