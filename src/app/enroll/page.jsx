"use client";
import Header from "@/components/Header";
import bgImage from "/public/assets/contact/img/2.png";
import ContactUs from "@/components/ContactUs";

function page() {
  return (
    <>
      <Header
        title={"Enroll Now"}
        top={15}
        bgImg={bgImage.src}
        mobile={"280px"}
        height={"400px"}
      />

      <>
        <ContactUs enroll />
      </>
    </>
  );
}

export default page;
