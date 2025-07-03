import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  User,
  MessageSquare,
  FileText,
  BookOpen,
  Calendar,
  CreditCard,
  Settings,
  Bell,
  Download,
  Upload,
  Users,
  Globe,
  Heart,
  Target,
  Award,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

const userProfile = {
  name: "Marie Dubois",
  email: "marie.dubois@se-international.org",
  role: "Volontaire",
  level: "Membre Actif",
  avatar: "/api/placeholder/150/150",
  joinDate: "Mars 2023",
  country: "France",
  projects: 5,
  hoursVolunteered: 120,
  donations: 850,
};

const recentActivities = [
  {
    type: "project",
    title: "Participation au projet Eau Potable Togo",
    date: "Il y a 2 jours",
    icon: Target,
  },
  {
    type: "message",
    title: "Nouveau message de l'équipe Sénégal",
    date: "Il y a 3 jours",
    icon: MessageSquare,
  },
  {
    type: "document",
    title: "Rapport mensuel téléchargé",
    date: "Il y a 1 semaine",
    icon: FileText,
  },
  {
    type: "training",
    title: "Formation 'Gestion de projet' complétée",
    date: "Il y a 2 semaines",
    icon: BookOpen,
  },
];

const upcomingEvents = [
  {
    title: "Réunion équipe Afrique de l'Ouest",
    date: "25 Décembre 2024",
    time: "14:00",
    type: "Réunion",
  },
  {
    title: "Formation leadership",
    date: "28 Décembre 2024",
    time: "10:00",
    type: "Formation",
  },
  {
    title: "Webinaire transparence financière",
    date: "2 Janvier 2025",
    time: "16:00",
    type: "Webinaire",
  },
];

const projectProgress = [
  {
    name: "Accès à l'eau potable - Togo",
    progress: 85,
    role: "Coordinateur local",
    status: "En cours",
  },
  {
    name: "Formation enseignants - Sénégal",
    progress: 60,
    role: "Formateur",
    status: "En cours",
  },
  {
    name: "Aide d'urgence - Haïti",
    progress: 100,
    role: "Logisticien",
    status: "Terminé",
  },
];

const documents = [
  {
    name: "Guide du volontaire 2024",
    type: "PDF",
    size: "2.4 MB",
    date: "15/12/2024",
  },
  {
    name: "Rapport financier Q4",
    type: "PDF",
    size: "1.8 MB",
    date: "10/12/2024",
  },
  {
    name: "Protocoles sécurité terrain",
    type: "PDF",
    size: "950 KB",
    date: "05/12/2024",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header with user info */}
      <section className="bg-blue-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Avatar className="w-20 h-20 border-4 border-white/20">
                <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                <AvatarFallback className="bg-blue-500 text-white text-lg">
                  {userProfile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold">{userProfile.name}</h1>
                <p className="text-blue-100 text-lg">
                  {userProfile.role} • {userProfile.level}
                </p>
                <div className="flex items-center mt-2 text-blue-200">
                  <MapPin className="w-4 h-4 mr-1" />
                  {userProfile.country}
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-1" />
                  Membre depuis {userProfile.joinDate}
                </div>
              </div>
            </div>
            <div className="hidden md:flex space-x-4">
              <Button variant="secondary" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Paramètres
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-8 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600">
                  {userProfile.projects}
                </div>
                <div className="text-sm text-muted-foreground">
                  Projets actifs
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-green-600">
                  {userProfile.hoursVolunteered}h
                </div>
                <div className="text-sm text-muted-foreground">
                  Heures bénévolat
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-orange-600">
                  {userProfile.donations}€
                </div>
                <div className="text-sm text-muted-foreground">Dons totaux</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-purple-600">Gold</div>
                <div className="text-sm text-muted-foreground">
                  Niveau atteint
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Dashboard Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-6 mb-8">
              <TabsTrigger value="overview">Aperçu</TabsTrigger>
              <TabsTrigger value="projects">Projets</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="learning">Formation</TabsTrigger>
              <TabsTrigger value="settings">Profil</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Recent Activities */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Bell className="w-5 h-5 mr-2 text-blue-600" />
                        Activités Récentes
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentActivities.map((activity, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50"
                          >
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <activity.icon className="w-4 h-4 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium">{activity.title}</p>
                              <p className="text-sm text-muted-foreground">
                                {activity.date}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Upcoming Events */}
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                        Événements à venir
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {upcomingEvents.map((event, index) => (
                          <div
                            key={index}
                            className="border-l-4 border-blue-600 pl-4"
                          >
                            <h4 className="font-medium">{event.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {event.date} à {event.time}
                            </p>
                            <Badge variant="outline" className="mt-1">
                              {event.type}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mes Projets</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {projectProgress.map((project, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">{project.name}</h4>
                          <Badge
                            variant={
                              project.status === "Terminé"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {project.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Rôle: {project.role}
                        </p>
                        <Progress value={project.progress} className="h-2" />
                        <p className="text-sm text-right text-muted-foreground">
                          {project.progress}%
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="messages" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Messagerie Interne</span>
                    <Button size="sm">
                      <Mail className="w-4 h-4 mr-2" />
                      Nouveau message
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-start space-x-3 p-3 border rounded-lg"
                      >
                        <Avatar className="w-10 h-10">
                          <AvatarFallback>E{i}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <p className="font-medium">Équipe Projet {i}</p>
                            <p className="text-sm text-muted-foreground">
                              Il y a {i} jour{i > 1 ? "s" : ""}
                            </p>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            Dernière mise à jour du projet en cours...
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documents" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Documents Partagés</span>
                    <Button size="sm" variant="outline">
                      <Upload className="w-4 h-4 mr-2" />
                      Téléverser
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {documents.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center">
                            <FileText className="w-5 h-5 text-red-600" />
                          </div>
                          <div>
                            <p className="font-medium">{doc.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {doc.size} • {doc.date}
                            </p>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="learning" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Modules E-learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Gestion de projet humanitaire",
                        progress: 80,
                        level: "Intermédiaire",
                      },
                      {
                        title: "Leadership en situation de crise",
                        progress: 45,
                        level: "Avancé",
                      },
                      {
                        title: "Communication interculturelle",
                        progress: 100,
                        level: "Débutant",
                      },
                      {
                        title: "Sécurité sur le terrain",
                        progress: 0,
                        level: "Obligatoire",
                      },
                    ].map((course, index) => (
                      <Card key={index} className="p-4">
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium">{course.title}</h4>
                            <Badge variant="outline" className="mt-1">
                              {course.level}
                            </Badge>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              {course.progress}% complété
                            </span>
                            <Button size="sm" variant="outline">
                              {course.progress === 0
                                ? "Commencer"
                                : course.progress === 100
                                  ? "Revoir"
                                  : "Continuer"}
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Informations Personnelles</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Nom complet</label>
                      <p className="text-lg">{userProfile.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <p className="text-lg">{userProfile.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Rôle</label>
                      <p className="text-lg">{userProfile.role}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Pays</label>
                      <p className="text-lg">{userProfile.country}</p>
                    </div>
                    <Button className="w-full">
                      Modifier les informations
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Préférences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">
                        Notifications email
                      </label>
                      <div className="mt-2 space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="rounded"
                          />
                          <span className="text-sm">
                            Mises à jour de projets
                          </span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="rounded"
                          />
                          <span className="text-sm">Nouveaux messages</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">Newsletter mensuelle</span>
                        </label>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Sauvegarder les préférences
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
