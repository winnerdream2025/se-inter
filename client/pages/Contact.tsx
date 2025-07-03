import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge variant="secondary" className="mb-4">
            Contact
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Contact & Localisation
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Contactez-nous pour toute question ou pour rejoindre nos
            initiatives.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-muted-foreground">
            Page en construction. Contenu à venir : formulaire de contact,
            adresses, téléphones, emails, carte Google Maps, liens réseaux
            sociaux.
          </p>
        </div>
      </section>
    </div>
  );
}
