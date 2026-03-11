import { 
  Brain, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp, 
  ChevronRight, 
  Settings,
  BarChart3,
  Lightbulb,
  CheckCircle,
  Rocket,
  Clock,
  DollarSign,
  MessageSquare,
  Code,
  Bot,
  Mail,
  Building2,
  HardHat,
  Briefcase,
  LayoutGrid,
  Search,
  Wrench,
  LineChart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useAnalytics } from "@/lib/analytics";
import ConversionOptimizer from "@/components/conversion/ConversionOptimizer";
import LeadMagnet from "@/components/marketing/LeadMagnet";
import FloatingActionButton from "@/components/ui/floating-action-button";
import SEOHead from "@/components/SEOHead";
import SocialProof from "@/components/marketing/SocialProof";
import heroImage from "@/assets/hero-supplier-management.jpg";
import { CalendlyWidget } from "@/components/calendly/CalendlyWidget";

const Index = () => {
  const navigate = useNavigate();
  const { trackUserAction } = useAnalytics();

  // Track page view
  useEffect(() => {
    trackUserAction('homepage_view', {
      page: 'index',
      timestamp: Date.now()
    });
  }, [trackUserAction]);

  // Check if this is a password reset redirect
  useEffect(() => {
    const hash = window.location.hash;
    const search = window.location.search;
    
    if (hash.includes('access_token') && hash.includes('type=recovery')) {
      // Redirect to auth page with the hash intact
      navigate('/auth' + hash);
    } else if (hash.includes('error=access_denied') || hash.includes('error_code=otp_expired')) {
      // Handle password reset errors
      navigate('/auth?error=expired');
    } else if (search.includes('type=recovery')) {
      // Direct recovery URL redirect
      navigate('/auth?type=recovery');
    }
  }, [navigate]);

  return (
    <>
      <SEOHead 
        title="AgentImpact.fr - Solutions IA pour Agents Immobiliers | Automatisation & Prospection"
        description="🚀 Solutions IA dédiées aux agents immobiliers et mandataires : prospection automatique, gestion de biens, CRM intelligent. Consultation gratuite ✅ +60% de productivité 📈"
        canonical="https://agentimpact.fr"
      />
      
      <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">
              AgentImpact.fr
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Button 
              variant="ghost"
              onClick={() => navigate('/auth')}
              className="text-primary hover:text-primary/80 font-medium"
            >
              Connexion
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section - IA Services */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-[hsl(210,29%,8%)] to-secondary">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 bg-secondary/50 backdrop-blur-md px-4 py-2 rounded-full border border-border/30">
                <Brain className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Spécialiste IA & Automatisation</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Boostez votre activité immobilière avec <span className="text-primary">l'Intelligence Artificielle</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Solutions IA spécialisées pour automatiser votre prospection, gérer vos biens et optimiser votre relation client. 
              Gagnez 70% de temps sur vos tâches administratives.
            </p>
            
            <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  trackUserAction('cta_services_click', {
                    location: 'hero_section',
                    button_text: 'Découvrir mes Services'
                  });
                  navigate('/services');
                }}
                size="lg"
                className="text-lg px-8 py-4"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Découvrir mes services
              </Button>
              <Button
                onClick={() => {
                  trackUserAction('cta_consultation_click', {
                    location: 'hero_section',
                    button_text: 'Consultation Gratuite'
                  });
                  navigate('/contact');
                }}
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4"
              >
                Consultation gratuite
              </Button>
            </div>

            <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Solutions personnalisées</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-primary" />
                <span>Accompagnement dédié</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>Optimisation des processus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Spécialisées Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Solutions spécialisées
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Agents IA dédiés à votre activité immobilière : prospection, gestion et relation client
            </p>
          </div>
          
          {/* Grid with 4 services */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
              {/* Agent IA Prospection */}
              <Card className="border border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4">
                      <Users className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Agent IA prospection</h3>
                    <p className="text-muted-foreground text-sm">Automatise votre recherche de mandats</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-medium text-foreground text-sm">Fonctionnalités :</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">Identification prospects vendeurs</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">Scripts personnalisés</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">Relances automatiques</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">Suivi des contacts</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-green-600 border-green-600 text-xs">
                        +300% de mandats
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>2-3 semaines</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Agent IA Gestion Biens Immobiliers */}
              <Card className="border border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4">
                      <Lightbulb className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Agent IA gestion biens</h3>
                    <p className="text-muted-foreground text-sm">Gère et optimise votre portefeuille immobilier</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-medium text-foreground text-sm">Fonctionnalités :</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">Estimation automatique</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">Suivi des mandats</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">Alertes visites & signatures</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">Diffusion multi-portails</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-primary border-primary text-xs">
                        Gain de temps : 60%
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>2-4 semaines</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Agent IA Création Site internet */}
              <Card className="border border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4">
                      <Code className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Agent IA création site internet</h3>
                    <p className="text-muted-foreground text-sm">Crée votre site web professionnel automatiquement</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-medium text-foreground text-sm">Fonctionnalités :</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">Design responsive automatique</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">Génération de contenu IA</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">Optimisation SEO intégrée</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">Hébergement inclus</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-primary border-primary text-xs">
                        ROI : +200%
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>1-2 semaines</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Agent IA Gestion Emails */}
              <Card className="border border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4">
                      <Mail className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Agent IA gestion emails</h3>
                    <p className="text-muted-foreground text-sm">Automatise et optimise vos communications email</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-medium text-foreground text-sm">Fonctionnalités :</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">Tri automatique des emails</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">Réponses automatiques intelligentes</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">Planification d'envois</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">Suivi d'engagement</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-orange-600 border-orange-600 text-xs">
                        Productivité : +60%
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>1-3 semaines</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section Cartes Métiers (Solutions sur mesure) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Des solutions sur mesure pour chaque activité
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chaque entreprise est différente. Nos solutions s'adaptent à vos besoins et à vos processus, pour transformer vos tâches en opportunités concrètes et mesurables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            {/* Carte 1 : Immobilier */}
            <Card className="group hover:shadow-xl hover:border-primary/50 transition-all duration-300 bg-background">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Immobilier</h3>
                <p className="font-medium text-foreground mb-2">Ne laissez plus passer vos prospects</p>
                <p className="text-muted-foreground text-sm mb-8 flex-grow">
                  Plus de transactions conclues sans effort supplémentaire.
                </p>
                <Button
                  variant="ghost"
                  className="p-0 text-primary hover:text-primary/80 hover:bg-transparent justify-start w-fit group/btn"
                  onClick={() => navigate('/services')}
                >
                  Découvrir cette solution <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Carte 2 : BTP */}
            <Card className="group hover:shadow-xl hover:border-orange-500/50 transition-all duration-300 bg-background">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <HardHat className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">BTP</h3>
                <p className="font-medium text-foreground mb-2">Vos projets sous contrôle, sans stress</p>
                <p className="text-muted-foreground text-sm mb-8 flex-grow">
                  Gagnez du temps et évitez les erreurs coûteuses.
                </p>
                <Button
                  variant="ghost"
                  className="p-0 text-orange-500 hover:text-orange-600 hover:bg-transparent justify-start w-fit group/btn"
                  onClick={() => navigate('/services')}
                >
                  Découvrir cette solution <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Carte 3 : PME & Indépendants */}
            <Card className="group hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 bg-background">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">PME & Indép.</h3>
                <p className="font-medium text-foreground mb-2">Libérez du temps pour ce qui compte vraiment</p>
                <p className="text-muted-foreground text-sm mb-8 flex-grow">
                  Concentrez-vous sur le développement de votre chiffre d'affaires.
                </p>
                <Button
                  variant="ghost"
                  className="p-0 text-blue-500 hover:text-blue-600 hover:bg-transparent justify-start w-fit group/btn"
                  onClick={() => navigate('/services')}
                >
                  Découvrir cette solution <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Carte 4 : Autres métiers */}
            <Card className="group hover:shadow-xl hover:border-purple-500/50 transition-all duration-300 bg-background">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <LayoutGrid className="w-7 h-7 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Autres métiers</h3>
                <p className="font-medium text-foreground mb-2">Une solution adaptée à votre activité</p>
                <p className="text-muted-foreground text-sm mb-8 flex-grow">
                  Exploitez vos opportunités et optimisez votre organisation, quel que soit votre secteur.
                </p>
                <Button
                  variant="ghost"
                  className="p-0 text-purple-500 hover:text-purple-600 hover:bg-transparent justify-start w-fit group/btn"
                  onClick={() => navigate('/services')}
                >
                  Découvrir les possibilités <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-base md:text-lg font-medium text-muted-foreground bg-background inline-block px-6 py-3 rounded-full border border-border/50 shadow-sm">
              <Sparkles className="w-5 h-5 inline-block text-primary mr-2 -mt-1" />
              Et ce n'est qu'un aperçu : nos solutions s'adaptent à votre activité, quel que soit votre métier.
            </p>
          </div>
        </div>
      </section>

      {/* Section Notre Approche (Méthodologie) */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Notre approche
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une méthode éprouvée en 4 étapes pour intégrer l'automatisation sans perturber votre activité.
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            {/* Ligne connectrice (visible uniquement sur desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {/* Etape 1 : Analyse */}
              <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  1
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 text-center md:text-left">Analyse</h3>
                <p className="text-muted-foreground text-sm text-center md:text-left leading-relaxed">
                  Nous étudions votre organisation et identifions les opportunités d'automatisation.
                </p>
              </div>

              {/* Etape 2 : Conception */}
              <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative md:mt-8">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  2
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 text-center md:text-left">Conception</h3>
                <p className="text-muted-foreground text-sm text-center md:text-left leading-relaxed">
                  Nous concevons un système adapté à votre activité et à vos outils.
                </p>
              </div>

              {/* Etape 3 : Mise en place */}
              <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  3
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 text-center md:text-left">Mise en place</h3>
                <p className="text-muted-foreground text-sm text-center md:text-left leading-relaxed">
                  Nous installons les automatisations et les intégrons dans votre fonctionnement.
                </p>
              </div>

              {/* Etape 4 : Optimisation */}
              <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative md:mt-8">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  4
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <LineChart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 text-center md:text-left">Optimisation</h3>
                <p className="text-muted-foreground text-sm text-center md:text-left leading-relaxed">
                  Nous ajustons le système afin qu'il reste parfaitement optimal pour votre entreprise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preuve Sociale Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <SocialProof variant="detailed" />
        </div>
      </section>


      {/* Conversion Optimizer Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <ConversionOptimizer 
            variant="primary"
            showTestimonials={true}
            showTrustSignals={true}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary via-[hsl(173,80%,25%)] to-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-4">
              Automatisez votre gestion administrative aujourd'hui
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/80">
              Automatisez votre prospection et multipliez vos transactions immobilières avec l'IA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-muted font-semibold"
                onClick={() => navigate('/services')}
              >
                <Rocket className="w-5 h-5 mr-2" />
                Découvrir les services
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/20 backdrop-blur-sm bg-white/10"
                onClick={() => navigate('/support')}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Discuter de mon besoin
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <FloatingActionButton />

      </div>
    </>
  );
};

export default Index;
