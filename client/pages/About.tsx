import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Heart, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge variant="secondary" className="mb-4">
            Notre Histoire
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Qui sommes-nous ?
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            SE International est une organisation humanitaire internationale
            créée en 2009 avec la mission de lutter contre la pauvreté et
            promouvoir le développement durable dans 17 pays à travers le monde.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="space-y-4 p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Notre Mission</h3>
                <p className="text-muted-foreground">
                  Améliorer les conditions de vie des populations vulnérables
                  par des actions concrètes dans l'éducation, la santé et l'aide
                  humanitaire.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="space-y-4 p-0">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">Notre Vision</h3>
                <p className="text-muted-foreground">
                  Un monde où chaque personne a accès aux besoins fondamentaux
                  et peut réaliser son plein potentiel dans la dignité.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="space-y-4 p-0">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl font-bold">Nos Valeurs</h3>
                <p className="text-muted-foreground">
                  Transparence, solidarité, respect des cultures locales et
                  développement durable au cœur de toutes nos actions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Placeholder for team and partners sections */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Équipe dirigeante et partenaires
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contenu à venir : Présentation des membres fondateurs, équipe
            dirigeante et nos partenaires internationaux.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="p-6">
                <div className="aspect-square bg-muted rounded-full mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-muted-foreground" />
                </div>
                <h4 className="font-semibold">Membre d'équipe {i}</h4>
                <p className="text-sm text-muted-foreground">Poste à définir</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
