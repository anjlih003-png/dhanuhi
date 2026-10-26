import Image from "next/image";
import Banner from "../../public/images/banner.webp";

export default function EndBanner() {
  return (
    <section className="end-banner py-4">
      <div className="container">
        <Image
          src={Banner}
          alt="Dhanuhi Banner"
          className="img-fluid rounded-3 shadow-sm w-100"
          style={{ height: "auto" }}
          priority={false}
        />
      </div>
    </section>
  );
}