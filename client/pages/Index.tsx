import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Heart,
  Users,
  Globe,
  ArrowRight,
  MapPin,
  Calendar,
  Target,
  Award,
  Zap,
  BookOpen,
} from "lucide-react";
import Navigation from "@/components/Navigation";

const stats = [
  { number: "17", label: "Pays d'intervention", icon: Globe },
  { number: "250+", label: "Projets réalisés", icon: Target },
  { number: "50,000+", label: "Bénéficiaires", icon: Users },
  { number: "15", label: "Années d'expérience", icon: Award },
];

const featuredProjects = [
  {
    id: 1,
    title: "Accès à l'eau potable au Togo",
    location: "Lomé, Togo",
    category: "Santé",
    image: "/api/placeholder/400/300",
    description: "Construction de 5 puits pour 2,000 familles rurales",
    progress: 85,
    raised: "45,000€",
    goal: "52,000€",
  },
  {
    id: 2,
    title: "Éducation pour tous au Sénégal",
    location: "Dakar, Sénégal",
    category: "Éducation",
    image: "/api/placeholder/400/300",
    description: "Formation de 100 enseignants et rénovation de 3 écoles",
    progress: 72,
    raised: "28,500€",
    goal: "40,000€",
  },
  {
    id: 3,
    title: "Aide d'urgence Haïti",
    location: "Port-au-Prince, Haïti",
    category: "Humanitaire",
    image: "/api/placeholder/400/300",
    description: "Distribution de kits d'urgence après le séisme",
    progress: 95,
    raised: "75,200€",
    goal: "80,000€",
  },
];

const news = [
  {
    id: 1,
    title: "Lancement de notre nouveau programme en Côte d'Ivoire",
    date: "15 Décembre 2024",
    category: "Actualités",
    excerpt:
      "SE International étend ses activités avec un focus sur l'éducation rurale...",
  },
  {
    id: 2,
    title: "Rapport annuel 2024 : Un impact grandissant",
    date: "10 Décembre 2024",
    category: "Transparence",
    excerpt:
      "Découvrez nos réalisations de l'année et notre impact sur le terrain...",
  },
  {
    id: 3,
    title: "Témoignage : Marie, volontaire au Burkina Faso",
    date: "5 Décembre 2024",
    category: "Témoignages",
    excerpt: "Retour d'expérience d'une mission de 6 mois sur le terrain...",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Zap className="w-3 h-3 mr-1" />
                  Agir pour un monde meilleur
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Ensemble, construisons un{" "}
                  <span className="text-primary">avenir solidaire</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  SE International œuvre depuis 15 ans dans 17 pays pour l'accès
                  à l'éducation, à la santé et à l'aide humanitaire d'urgence.
                  Rejoignez notre mission.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link to="/donate">
                    <Heart className="w-5 h-5 mr-2" />
                    Faire un Don
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8"
                  asChild
                >
                  <Link to="/join">
                    <Users className="w-5 h-5 mr-2" />
                    Rejoignez-nous
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden">
                <img
                  src="https://se-international.org/images/sei_image/sei-1.jpg"
                  alt="SE International en action"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">50,000+</div>
                    <div className="text-sm text-muted-foreground">
                      Vies impactées
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Notre Impact en Chiffres
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Depuis notre création, nous mesurons notre succès par l'impact
              positif que nous créons dans les communautés que nous servons.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow"
              >
                <CardContent className="space-y-4 p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Projets en Cours
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos initiatives actuelles et l'impact direct de votre
              soutien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{project.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-1" />
                          {project.location}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Progression
                        </span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary rounded-full h-2 transition-all"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-primary">
                          {project.raised}
                        </span>
                        <span className="text-muted-foreground">
                          sur {project.goal}
                        </span>
                      </div>
                    </div>

                    <Button className="w-full" variant="outline" asChild>
                      <Link to="/projects">
                        En savoir plus
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/projects">
                Voir tous nos projets
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Actualités & Témoignages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Restez informés de nos dernières actions et découvrez les
              témoignages du terrain
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article) => (
              <Card
                key={article.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{article.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {article.date}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {article.excerpt}
                      </p>
                    </div>

                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-primary hover:text-primary/80"
                      asChild
                    >
                      <Link to="/news">
                        Lire la suite
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/news">
                <BookOpen className="w-5 h-5 mr-2" />
                Toutes les actualités
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Rejoignez notre mission pour un monde plus juste
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Que ce soit par un don, du bénévolat ou un partenariat, votre
            contribution fait la différence dans la vie de milliers de
            personnes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8"
              asChild
            >
              <Link to="/donate">
                <Heart className="w-5 h-5 mr-2" />
                Faire un Don
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link to="/join">
                <Users className="w-5 h-5 mr-2" />
                Devenir Bénévole
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full overflow-hidden">
                  <img
                    src="https://static.wixstatic.com/media/ad6561_5d52161614f94c909170f7fe4eedf4c9~mv2.png/v1/crop/x_0,y_14,w_300,h_253/fill/w_344,h_338,al_c,lg_1,q_85,enc_auto/site-logo300.png"
                    alt="SE International Logo"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <div className="text-lg font-bold">SE International</div>
                  <div className="text-sm text-gray-400">
                    Building a Better World
                  </div>
                </div>
              </div>
              <p className="text-gray-400 max-w-md">
                Organisation internationale dédiée au développement durable et à
                l'aide humanitaire dans 17 pays.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Liens Rapides</h4>
              <div className="space-y-2">
                <Link
                  to="/about"
                  className="block text-gray-400 hover:text-white text-sm"
                >
                  Qui sommes-nous
                </Link>
                <Link
                  to="/projects"
                  className="block text-gray-400 hover:text-white text-sm"
                >
                  Nos Actions
                </Link>
                <Link
                  to="/reports"
                  className="block text-gray-400 hover:text-white text-sm"
                >
                  Transparence
                </Link>
                <Link
                  to="/contact"
                  className="block text-gray-400 hover:text-white text-sm"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">S'engager</h4>
              <div className="space-y-2">
                <Link
                  to="/donate"
                  className="block text-gray-400 hover:text-white text-sm"
                >
                  Faire un Don
                </Link>
                <Link
                  to="/join"
                  className="block text-gray-400 hover:text-white text-sm"
                >
                  Rejoignez-nous
                </Link>
                <Link
                  to="/dashboard"
                  className="block text-gray-400 hover:text-white text-sm"
                >
                  Espace Membre
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 SE International. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
