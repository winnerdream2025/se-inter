import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, GraduationCap, Stethoscope, Home, MapPin } from "lucide-react";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge variant="secondary" className="mb-4">
            Nos Actions
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nos Projets & Actions
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Découvrez nos initiatives dans l'éducation, la santé et l'aide
            humanitaire à travers 17 pays. Chaque projet est pensé avec et pour
            les communautés locales.
          </p>
        </div>
      </section>

      {/* Projects by category */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
              <TabsTrigger
                value="education"
                className="flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                Éducation
              </TabsTrigger>
              <TabsTrigger value="health" className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4" />
                Santé
              </TabsTrigger>
              <TabsTrigger
                value="humanitarian"
                className="flex items-center gap-2"
              >
                <Heart className="w-4 h-4" />
                Humanitaire
              </TabsTrigger>
              <TabsTrigger
                value="infrastructure"
                className="flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Infrastructure
              </TabsTrigger>
            </TabsList>

            <TabsContent value="education" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Projets Éducation</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Formation des enseignants, construction d'écoles et programmes
                  d'alphabétisation
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-[4/3] bg-muted"></div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">Éducation</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3 mr-1" />
                          Pays {i}
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2">
                        Projet Éducation {i}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Description détaillée du projet éducatif avec objectifs
                        et résultats attendus.
                      </p>
                      <Button variant="outline" className="w-full">
                        En savoir plus
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="health" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Projets Santé</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Accès à l'eau potable, centres de santé et programmes de
                  prévention
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-[4/3] bg-muted"></div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">Santé</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3 mr-1" />
                          Pays {i}
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2">Projet Santé {i}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Description détaillée du projet de santé avec impact sur
                        les communautés.
                      </p>
                      <Button variant="outline" className="w-full">
                        En savoir plus
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="humanitarian" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Aide Humanitaire</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Interventions d'urgence et aide aux populations en détresse
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-[4/3] bg-muted"></div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">Humanitaire</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3 mr-1" />
                          Pays {i}
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2">
                        Mission Humanitaire {i}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Description de l'intervention humanitaire et de son
                        impact.
                      </p>
                      <Button variant="outline" className="w-full">
                        En savoir plus
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="infrastructure" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Infrastructure</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Construction et rénovation d'infrastructures essentielles
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-[4/3] bg-muted"></div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">Infrastructure</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3 mr-1" />
                          Pays {i}
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2">
                        Projet Infrastructure {i}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Description du projet d'infrastructure et de son
                        utilité.
                      </p>
                      <Button variant="outline" className="w-full">
                        En savoir plus
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
