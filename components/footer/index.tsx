import { FooterBottom } from "@/components/footer/footer-bottom";
import { FooterBrand } from "@/components/footer/footer-brand";
import { FooterNav } from "@/components/footer/footer-nav";
import { FooterPartners } from "@/components/footer/footer-partners";

export function Footer() {
  return (
    <footer className="bg-inverse text-text-inverse">
      <div className="gap-block max-w-page px-gutter py-section mx-auto flex flex-col">
        <div className="gap-block desktop:flex-row desktop:flex-wrap flex flex-col">
          <FooterBrand />
          <FooterNav />
        </div>
        <FooterPartners />
        <FooterBottom />
      </div>
    </footer>
  );
}
