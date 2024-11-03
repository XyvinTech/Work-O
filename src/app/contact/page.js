import Header from "@/components/Header";
import bgImage from "/public/assets/contact/img/2.png";
import ContactUs from "@/components/ContactUs";
export default function page() {
  return (
    <>
      {" "}
      <Header
        title={"Contact Us"}
        top={15}
        bgImg={bgImage.src}
        mobile={"280px"}
        height={"400px"}
      />
      <ContactUs />
    </>
  );
}
