import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Menu, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Plus, 
  Minus, 
  Star, 
  Mail, 
  Phone, 
  MapPin,
  Target,
  Eye,
  Heart,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Clock,
  Smartphone
} from "lucide-react";
import { SiInstagram, SiApple, SiGoogleplay } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md" 
          : "bg-white"
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection("inicio")}
            data-testid="logo"
          >
            <div className="w-10 h-10 bg-trampay-gold rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-trampay-blue-dark font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-trampay-blue-dark">Trampay</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { id: "inicio", label: "Inicio" },
              { id: "sobre", label: "Sobre" },
              { id: "contato", label: "Contato" },
              { id: "duvidas", label: "Duvidas" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-trampay-blue-dark font-medium hover:text-trampay-gold transition-colors relative group"
                data-testid={`nav-${item.id}`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-trampay-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <a
            href="https://linktr.ee/AplicativoTrampay?utm_source=qr_code"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
            data-testid="link-download-header"
          >
            <Button className="bg-trampay-blue-dark hover:bg-trampay-blue text-white px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Baixe o app
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-trampay-blue-dark"
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {[
                { id: "inicio", label: "Inicio" },
                { id: "sobre", label: "Sobre" },
                { id: "contato", label: "Contato" },
                { id: "duvidas", label: "Duvidas" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-trampay-blue-dark font-medium py-2 px-4 hover:bg-trampay-blue-light rounded-lg transition-colors text-left"
                  data-testid={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://linktr.ee/AplicativoTrampay?utm_source=qr_code"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4"
              >
                <Button className="w-full bg-trampay-blue-dark hover:bg-trampay-blue text-white">
                  Baixe o app
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section 
      id="inicio" 
      className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-trampay-blue-light to-white overflow-hidden"
      data-testid="section-hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-trampay-blue-dark leading-tight mb-6">
              <span className="italic">Menos planilhas, mais lucro.</span>
              <br />
              <span className="text-trampay-gold">Cadastre-se</span> e veja a diferenca.
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Ideal para autonomos e microempreendedores que buscam praticidade na gestao do proprio negocio. 
              Simples, acessivel e eficiente. Tudo o que voce precisa para crescer com organizacao e controle financeiro.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://linktr.ee/AplicativoTrampay?utm_source=qr_code"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-appstore"
              >
                <Button 
                  variant="outline" 
                  className="border-2 border-trampay-blue-dark text-trampay-blue-dark hover:bg-trampay-blue-dark hover:text-white px-6 py-6 transition-all duration-300 hover:scale-105"
                >
                  <SiApple className="w-6 h-6 mr-2" />
                  <div className="text-left">
                    <div className="text-xs opacity-70">Baixe pela</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </Button>
              </a>
              <a
                href="https://linktr.ee/AplicativoTrampay?utm_source=qr_code"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-playstore"
              >
                <Button 
                  variant="outline" 
                  className="border-2 border-trampay-blue-dark text-trampay-blue-dark hover:bg-trampay-blue-dark hover:text-white px-6 py-6 transition-all duration-300 hover:scale-105"
                >
                  <SiGoogleplay className="w-6 h-6 mr-2" />
                  <div className="text-left">
                    <div className="text-xs opacity-70">Baixe pelo</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </Button>
              </a>
            </div>
          </div>

          <div className="opacity-0 animate-slide-in-right relative" style={{ animationDelay: "0.4s" }}>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute inset-0 bg-trampay-gold/20 rounded-[3rem] blur-3xl transform scale-110" />
              <div 
                className="relative bg-gradient-to-br from-white to-trampay-blue-light rounded-[2.5rem] p-4 shadow-2xl animate-float"
                data-testid="phone-mockup"
              >
                <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19] flex items-center justify-center border-8 border-gray-800 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-xl" />
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-trampay-gold rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <span className="text-trampay-blue-dark font-bold text-2xl">T</span>
                    </div>
                    <h3 className="font-bold text-trampay-blue-dark text-lg mb-2">Dashboard</h3>
                    <div className="bg-trampay-blue-light rounded-xl p-4 mb-3">
                      <p className="text-2xl font-bold text-trampay-blue-dark">R$0,00</p>
                      <p className="text-xs text-gray-500">Saldo atual</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {["Agenda", "Servicos", "Clientes"].map((item) => (
                        <div key={item} className="bg-gray-100 rounded-lg p-2">
                          <div className="w-6 h-6 bg-trampay-gold/30 rounded mx-auto mb-1" />
                          <p className="text-[10px] text-gray-600">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppIntroSection() {
  return (
    <section className="py-16 md:py-24 bg-white" data-testid="section-intro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="text-trampay-blue-dark">Gestao de financas e servicos</span>
            <br />
            <span className="text-trampay-blue-dark">de </span>
            <span className="text-trampay-gold">autonomos e microempreendedores.</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-14 h-14 bg-trampay-gold rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-trampay-blue-dark font-bold text-xl">T</span>
            </div>
            <span className="text-xl font-semibold text-trampay-blue-dark">Trampay</span>
          </div>
        </div>

        <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Uma ferramenta <strong>simples, acessivel e eficiente</strong>, voltada a quem busca organizar o proprio negocio sem depender de plataformas caras e complexas.
        </p>
      </div>
    </section>
  );
}

function MarketResearchSection() {
  const cards = [
    {
      icon: Users,
      title: "Demanda Validada:",
      description: "pesquisa com 179 participantes demonstrou alta aceitacao da proposta.",
      color: "bg-trampay-blue-light",
    },
    {
      icon: TrendingUp,
      title: "Mercado Carente:",
      description: "aplicativos concorrentes sao caros, complexos e voltados a grandes empresas.",
      color: "bg-trampay-blue-light",
    },
    {
      icon: Shield,
      title: "Modelo Rentavel:",
      description: "o modelo freemium e acessivel e garante retorno financeiro.",
      color: "bg-trampay-blue-light",
    },
    {
      icon: Zap,
      title: "Solucao Viavel:",
      description: "o app pode ser desenvolvido com tecnologias simples e de baixo custo.",
      color: "bg-trampay-blue-light",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-trampay-blue-light" data-testid="section-research">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {cards.map((card, index) => (
            <div 
              key={card.title}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <Card className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className={`${card.color} p-3 rounded-xl flex-shrink-0`}>
                    <card.icon className="w-8 h-8 text-trampay-blue-dark" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-trampay-blue-dark text-lg mb-1">{card.title}</h3>
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    {
      name: "Gratuito",
      description: "Plano gratuito com acesso limitado as funcionalidades do aplicativo",
      price: "R$00,00",
      features: [
        "Fluxo de Caixa",
        "Notificacoes Basicas",
        "Agendamento e Gerenciamento de Negocios",
        "Modo Offline",
        "Gerenciamento de Equipe",
      ],
      highlighted: false,
    },
    {
      name: "Freemium",
      description: "Com uma assinatura unica, tenha acesso ilimitado ao nosso aplicativo",
      price: "R$24,90",
      features: [
        "Precificacao Automatica",
        "Assistente de IA",
        "Conversor de Moedas Internacionais",
        "Simulador de taxas e tarifas",
      ],
      highlighted: true,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-trampay-blue-light" data-testid="section-pricing">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-trampay-blue-dark mb-12 opacity-0 animate-fade-in-up">
          Compare nossos planos
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <Card 
                className={`p-8 rounded-2xl h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  plan.highlighted 
                    ? "bg-white border-2 border-trampay-gold shadow-lg" 
                    : "bg-white border-none shadow-sm"
                }`}
                data-testid={`card-plan-${plan.name.toLowerCase()}`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-trampay-blue-dark mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                  <p className="text-4xl font-bold text-trampay-gold">{plan.price}</p>
                </div>

                <div className="space-y-1 mb-6">
                  <p className="text-sm text-gray-500 font-medium">Acesso a:</p>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-trampay-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: "Founder of Borcelle",
      title: "Incrivel!",
      text: "O Trampay revolucionou a forma como gerencio meu pequeno negocio. Agora tenho controle total das minhas financas.",
      rating: 5,
    },
    {
      name: "CEO at Borcelle",
      title: "Me salvou!",
      text: "Finalmente um aplicativo que entende as necessidades de quem trabalha por conta propria. Simples e eficiente!",
      rating: 5,
    },
    {
      name: "CFO at Borcelle",
      title: "Muito util!",
      text: "A precificacao automatica me ajudou a cobrar o valor justo pelos meus servicos. Recomendo demais!",
      rating: 5,
    },
    {
      name: "Autonomo",
      title: "Excelente!",
      text: "Uso o Trampay todo dia para organizar meus atendimentos. A agenda integrada e fantastica.",
      rating: 5,
    },
    {
      name: "Microempreendedor",
      title: "Perfeito!",
      text: "O melhor investimento que fiz para meu negocio. O plano freemium vale cada centavo.",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="avaliacoes" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 italic">
          <span className="text-trampay-gold">Avaliacoes</span>
          <span className="text-trampay-blue-dark"> dos nossos usuarios</span>
        </h2>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-trampay-blue-dark hover:bg-trampay-gold hover:text-white transition-all duration-300"
            data-testid="carousel-prev"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="overflow-hidden mx-8">
            <div className="grid md:grid-cols-3 gap-6">
              {getVisibleTestimonials().map((testimonial, index) => (
                <Card 
                  key={`${testimonial.name}-${index}`}
                  className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-500 border-none"
                  data-testid={`testimonial-card-${index}`}
                >
                  <div className="text-trampay-gold text-4xl font-serif mb-4">"</div>
                  <h3 className="font-bold text-trampay-blue-dark text-xl mb-3">{testimonial.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{testimonial.text}</p>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-trampay-gold text-trampay-gold" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-trampay-blue-light flex items-center justify-center">
                      <Users className="w-5 h-5 text-trampay-blue-dark" />
                    </div>
                    <span className="text-sm text-gray-500">{testimonial.name}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-trampay-blue-dark hover:bg-trampay-gold hover:text-white transition-all duration-300"
            data-testid="carousel-next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-trampay-gold w-8" : "bg-gray-300"
              }`}
              data-testid={`carousel-dot-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const cards = [
    {
      icon: Target,
      title: "Nossa Missao",
      description: "Fornecer ferramentas simples e eficazes de gestao financeira para autonomos e microempreendedores, incentivando organizacao e crescimento sustentavel.",
    },
    {
      icon: Eye,
      title: "Nossa Visao",
      description: "Ser referencia nacional no apoio a trabalhadores do setor informal, impulsionando a formalizacao, a educacao financeira e a prosperidade dos usuarios.",
    },
    {
      icon: Heart,
      title: "Nossos Valores",
      description: "Autonomia, inclusao, inovacao, acessibilidade e impacto social.",
    },
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 bg-trampay-blue-dark" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Quem Somos</h2>
          <p className="text-trampay-blue-light max-w-3xl mx-auto">
            O Trampay nasceu com o proposito de <strong className="text-trampay-gold">facilitar a vida de microempreendedores e autonomos</strong>, oferecendo uma <strong className="text-trampay-gold">ferramenta simples e acessivel</strong> para gestao de servicos e financas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={card.title}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <Card 
                className="overflow-hidden rounded-2xl bg-trampay-blue h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-none group"
                data-testid={`card-about-${index}`}
              >
                <div className="h-40 bg-gradient-to-br from-trampay-blue to-trampay-blue-dark flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-trampay-gold/10 group-hover:bg-trampay-gold/20 transition-colors duration-300" />
                  <card.icon className="w-16 h-16 text-trampay-gold relative z-10" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-trampay-blue-light text-sm leading-relaxed">{card.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HistorySection() {
  return (
    <section className="py-16 md:py-24 bg-white" data-testid="section-history">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-trampay-blue-dark mb-8">Nossa Historia</h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          O Trampay surgiu a partir da percepcao de que muitos profissionais autonomos enfrentam dificuldades para organizar seus ganhos e servicos. A partir disso, desenvolvemos uma solucao pratica, criada com base em pesquisas e validada com mais de 170 participantes.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg mt-4">
          A desorganizacao financeira e uma das principais causas de endividamento entre microempreendedores e trabalhadores autonomos no Brasil, uma vez que muitos enfrentam dificuldade para manter o controle de ganhos, gastos e precificacao dos servicos. Diante disso, o Trampay foi desenvolvido como um aplicativo mobile voltado a gestao e organizacao financeira, alem de auxilio e suporte pratico a esses profissionais.
        </p>
      </div>
    </section>
  );
}

function DifferentialsSection() {
  const differentials = [
    { label: "Acessivel", description: "pensado para todos os bolsos." },
    { label: "Focado", description: "feito para autonomos e microempreendedores." },
    { label: "Escalavel", description: "tecnologia que cresce junto com o usuario." },
    { label: "Confiavel", description: "dados seguros e controle total." },
    { label: "Eficiente", description: "organizacao pratica e rapida." },
    { label: "Simples", description: "facil de usar, sem complicacoes." },
  ];

  return (
    <section className="py-16 md:py-24 bg-trampay-blue-light" data-testid="section-differentials">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-trampay-blue-dark text-right mb-12">
          Nossos Diferenciais
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {differentials.map((item, index) => (
            <div
              key={item.label}
              className="opacity-0 animate-fade-in-up bg-white rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-gray-100"
              style={{ animationDelay: `${0.1 * index}s` }}
              data-testid={`differential-${index}`}
            >
              <span className="font-semibold text-trampay-blue-dark">{item.label}:</span>
              <span className="text-gray-600 ml-1">{item.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Erro ao enviar",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatorios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-trampay-blue-dark" data-testid="section-contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Entre em Contato Conosco</h2>
            <p className="text-trampay-blue-light mb-8">
              Envie uma mensagem ou acompanhe-nos nas nossas redes sociais.
            </p>

            <div className="space-y-6">
              <a
                href="https://www.instagram.com/trampayapp?igsh=MXN5ZTB2em0yejdoYQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white hover:text-trampay-gold transition-colors group"
                data-testid="link-instagram"
              >
                <div className="w-12 h-12 bg-trampay-blue rounded-full flex items-center justify-center group-hover:bg-trampay-gold transition-colors">
                  <SiInstagram className="w-6 h-6" />
                </div>
                <span className="text-lg">@trampayapp</span>
              </a>

              <a
                href="mailto:trampayapp@gmail.com"
                className="flex items-center gap-4 text-white hover:text-trampay-gold transition-colors group"
                data-testid="link-email"
              >
                <div className="w-12 h-12 bg-trampay-blue rounded-full flex items-center justify-center group-hover:bg-trampay-gold transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-lg">trampayapp@gmail.com</span>
              </a>
            </div>
          </div>

          <Card className="p-6 rounded-2xl bg-trampay-blue border-none" data-testid="contact-form-card">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Insira o seu nome."
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white/90 border-none rounded-lg py-6"
                data-testid="input-name"
              />
              <Input
                type="email"
                placeholder="Insira o seu e-mail."
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white/90 border-none rounded-lg py-6"
                data-testid="input-email"
              />
              <Textarea
                placeholder="Insira a sua mensagem."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-white/90 border-none rounded-lg min-h-[120px] resize-none"
                data-testid="input-message"
              />
              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="bg-trampay-blue-dark hover:bg-trampay-gold text-white px-8 transition-all duration-300"
                  data-testid="button-submit-contact"
                >
                  {contactMutation.isPending ? "Enviando..." : "Enviar"}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "1. O que e o Trampay?",
      answer: "O Trampay e um aplicativo de gestao financeira desenvolvido especialmente para autonomos e microempreendedores. Ele oferece ferramentas simples e intuitivas para controle de ganhos, despesas, agendamento de servicos e precificacao.",
    },
    {
      question: "2. O Trampay e gratuito?",
      answer: "Sim! O Trampay oferece um plano gratuito com funcionalidades essenciais. Para recursos avancados como IA, precificacao automatica e conversor de moedas, temos o plano Freemium por R$24,90.",
    },
    {
      question: "3. Preciso ter CNPJ para usar o Trampay?",
      answer: "Nao! O Trampay foi desenvolvido pensando em todos os tipos de trabalhadores autonomos, formalizados ou nao. Voce pode usar o app independentemente de ter CNPJ.",
    },
    {
      question: "4. Quais sao as principais funcionalidades do aplicativo?",
      answer: "O Trampay oferece fluxo de caixa, agendamento de servicos, gestao de clientes, precificacao automatica, conversor de moedas, assistente de IA, notificacoes e muito mais.",
    },
    {
      question: "5. Meus dados ficam seguros no app?",
      answer: "Sim! Utilizamos criptografia de ponta e seguimos a LGPD (Lei Geral de Protecao de Dados) para garantir a seguranca e privacidade de todas as suas informacoes.",
    },
    {
      question: "6. O Trampay e compativel com quais dispositivos?",
      answer: "O app esta disponivel para Android e iOS, podendo ser baixado gratuitamente na Google Play e App Store.",
    },
  ];

  return (
    <section id="duvidas" className="py-16 md:py-24 bg-trampay-blue-dark" data-testid="section-faq">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-12">Duvidas Frequentes</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className={`rounded-xl border-none overflow-hidden transition-all duration-300 ${
                openIndex === index ? "bg-white" : "bg-trampay-blue-light"
              }`}
              data-testid={`faq-item-${index}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-4 flex items-center justify-between text-left"
                data-testid={`faq-toggle-${index}`}
              >
                <span className="font-semibold text-trampay-blue-dark pr-4">{faq.question}</span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-trampay-gold" />
                  ) : (
                    <Plus className="w-5 h-5 text-trampay-gold" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 animate-fade-in">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-trampay-blue-dark border-t border-trampay-blue py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-trampay-gold rounded-lg flex items-center justify-center">
                <span className="text-trampay-blue-dark font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-white">Trampay</span>
            </div>
            <p className="text-trampay-blue-light text-sm">
              Gestao de financas e servicos para autonomos e microempreendedores.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Links Rapidos</h4>
            <nav className="space-y-2">
              {[
                { id: "inicio", label: "Inicio" },
                { id: "sobre", label: "Sobre" },
                { id: "contato", label: "Contato" },
                { id: "duvidas", label: "Duvidas" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-trampay-blue-light hover:text-trampay-gold transition-colors"
                  data-testid={`footer-link-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="mailto:trampayapp@gmail.com"
                className="flex items-center gap-2 text-trampay-blue-light hover:text-trampay-gold transition-colors"
                data-testid="footer-email"
              >
                <Mail className="w-4 h-4" />
                <span>trampayapp@gmail.com</span>
              </a>
              <a
                href="https://www.instagram.com/trampayapp?igsh=MXN5ZTB2em0yejdoYQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-trampay-blue-light hover:text-trampay-gold transition-colors"
                data-testid="footer-instagram"
              >
                <SiInstagram className="w-4 h-4" />
                <span>@trampayapp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-trampay-blue mt-8 pt-8 text-center">
          <p className="text-trampay-blue-light text-sm">
            2025 Trampay. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

function AppCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      icon: Clock,
      title: "Agendamento Inteligente",
      description: "Organize seus atendimentos com um calendario intuitivo. Receba lembretes automaticos e nunca mais perca um compromisso.",
    },
    {
      icon: TrendingUp,
      title: "Fluxo de Caixa",
      description: "Acompanhe suas entradas e saidas em tempo real. Visualize graficos detalhados do seu desempenho financeiro.",
    },
    {
      icon: Users,
      title: "Gestao de Clientes",
      description: "Mantenha um cadastro completo dos seus clientes. Acesse historico de servicos e preferencias rapidamente.",
    },
    {
      icon: Zap,
      title: "Precificacao Automatica",
      description: "Calcule o preco ideal para seus servicos considerando custos, tempo e margem de lucro desejada.",
    },
    {
      icon: Smartphone,
      title: "Modo Offline",
      description: "Use o aplicativo mesmo sem internet. Seus dados sao sincronizados automaticamente quando voce reconectar.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white" data-testid="section-app-carousel">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-trampay-blue-dark mb-12">
          Conheca as funcionalidades
        </h2>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-trampay-blue-dark hover:bg-trampay-gold hover:text-white transition-all duration-300"
            data-testid="app-carousel-prev"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="overflow-hidden mx-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full px-4">
                  <Card className="p-8 md:p-12 rounded-2xl bg-trampay-blue-light border-none text-center">
                    <div className="w-20 h-20 bg-trampay-gold rounded-2xl mx-auto mb-6 flex items-center justify-center">
                      <slide.icon className="w-10 h-10 text-trampay-blue-dark" />
                    </div>
                    <h3 className="text-2xl font-bold text-trampay-blue-dark mb-4">{slide.title}</h3>
                    <p className="text-gray-600 max-w-lg mx-auto">{slide.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-trampay-blue-dark hover:bg-trampay-gold hover:text-white transition-all duration-300"
            data-testid="app-carousel-next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-trampay-gold w-8" : "bg-gray-300"
              }`}
              data-testid={`app-carousel-dot-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
          entry.target.classList.remove("opacity-0");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AppIntroSection />
        <AppCarousel />
        <MarketResearchSection />
        <PricingSection />
        <TestimonialsCarousel />
        <AboutSection />
        <HistorySection />
        <DifferentialsSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
