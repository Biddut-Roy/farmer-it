import Footer from "@/Component/footer/Footer";
import Image from "next/image";


export const metadata = {
  title: "farmer",
  description: 'farmer products'
}


export default function Home() {
  return (
    <div>
      

      {/* Footer section */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
