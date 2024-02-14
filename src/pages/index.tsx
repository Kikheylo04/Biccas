import { useHome } from "@/lib/hooks/home/useHome";
import { NavbarCommon } from "@/ui/containers/common/NavbarCommon";
import { ProductivityHome } from "../ui/containers/home/ProductivityHome";
import { Collab } from "../ui/containers/home/Collbas";
import { SupportHome } from "../ui/containers/home/SupportHome";
import { CharacteristicHome } from "../ui/containers/home/CharacteristicHome";
import { BenefitHome } from "../ui/containers/home/BenefitHome";
import { PlanCommon } from "../ui/containers/common/PlanCommon";
import { AboutDoWhithHome } from "../ui/containers/home/AboutDoWhithHome";
import { FooterCommon } from "../ui/containers/common/FooterCommon";

export default function Home() {
  const { text, name } = useHome();
  return (
    <div className="home">
      <NavbarCommon />
      <ProductivityHome />
      <Collab />
      <SupportHome />
      <CharacteristicHome />
      <BenefitHome />
      <PlanCommon />
      <AboutDoWhithHome />
      <FooterCommon />
    </div>
  );
}
