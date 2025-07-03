import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, FileText, Target } from "lucide-react";

export default function Donate() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge variant="secondary" className="mb-4">
            Faire un Don
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Soutenez nos Actions
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Votre générosité permet de transformer des vies. Chaque don compte
            pour construire un avenir meilleur.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center p-6">
              <CardContent className="space-y-4 p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Don Unique</h3>
                <p className="text-sm text-muted-foreground">
                  Un geste ponctuel pour nos projets
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4 p-0">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold">Don Mensuel</h3>
                <p className="text-sm text-muted-foreground">
                  Un soutien régulier et durable
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4 p-0">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-semibold">Paiement Sécurisé</h3>
                <p className="text-sm text-muted-foreground">
                  Transactions 100% sécurisées
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4 p-0">
                <div className="w-12 h-12 bg-muted/50 rounded-full flex items-center justify-center mx-auto">
                  <FileText className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-semibold">Reçu Fiscal</h3>
                <p className="text-sm text-muted-foreground">
                  Déduction fiscale automatique
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-8">Page en construction</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Le système de don sécurisé sera bientôt disponible avec :
            </p>
            <div className="max-w-2xl mx-auto text-left space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Formulaires de don unique et mensuel
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Système de paiement sécurisé intégré
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Génération automatique de reçus fiscaux
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Transparence sur l'utilisation des dons
                </p>
              </div>
            </div>
            <Button size="lg" disabled>
              Système de don en développement
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
