import Header from "@/components/Header";
import Resources from "@/components/resources/Resources";
import bgImage from "/public/others/Resource.webp";

export default function page() {
  return (
    <>
      <Header
        title={"Want to know more about us ?"}
        subtitle={
          "At Worko, we connect businesses and consumers with India's first all-in-one service marketplace."
        }
        isButtons
        bgImg={bgImage.src}
      />
      <Resources/>
    </>
  )
}
