import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge variant="secondary" className="mb-4">
            Espace Membre
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Espace Membre Sécurisé
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Accédez à votre espace personnel pour gérer votre profil et
            collaborer avec notre équipe.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-muted-foreground">
            Page en construction. Contenu à venir : profils personnalisés,
            messagerie interne, documents partagés, modules e-learning, agenda,
            gestion des cotisations avec niveaux d'accès différenciés.
          </p>
        </div>
      </section>
    </div>
  );
}
