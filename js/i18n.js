/**
 * i18n.js — Bilingual support (PT / EN)
 * Loads BEFORE main.js so the owl carousel reads the correct language on init.
 */
(function ($) {
  /* ── TRANSLATION DICTIONARY ───────────────────────────── */
  var T = {
    pt: {
      /* Header */
      'header.sub'          : 'Consultoria &amp; Serviços Digitais',
      /* Nav */
      'nav.home'            : 'Home',
      'nav.about'           : 'Sobre Mim',
      'nav.services'        : 'Serviços',
      'nav.products'        : 'Produtos',
      'nav.contact'         : 'Contato',
      /* Carousel */
      'carousel.1'          : 'Consultoria em Tecnologia',
      'carousel.2'          : 'Desenvolvimento de Software',
      'carousel.3'          : 'Arquitetura de Soluções Digitais',
      'carousel.4'          : 'Cloud Computing &amp; DevOps',
      'carousel.5'          : 'Soluções com Inteligência Artificial',
      /* Home */
      'home.tagline'        : 'Transformo desafios de negócio em soluções digitais robustas e escaláveis — com mais de 15 anos de experiência ao seu lado.',
      'home.cta1'           : 'Ver Serviços',
      'home.cta2'           : 'Fale Comigo',
      /* About */
      'about.title'         : 'Sobre <span>Mim</span>',
      'about.bio1'          : 'Com mais de <strong>15 anos de experiência</strong> em engenharia de software, ajudo empresas e empreendedores a transformar ideias em produtos digitais de alto impacto. Atuo como consultor técnico estratégico e desenvolvedor — do planejamento à entrega — sempre com foco em qualidade, escalabilidade e resultados concretos.',
      'about.bio2'          : 'Baseado em <strong>Braga, Portugal</strong>, atendo clientes de todo o mundo com projetos remotos e compromisso total com cada entrega.',
      'about.loc.label'     : 'Localização',
      'about.avail.label'   : 'Disponibilidade',
      'about.avail.val'     : 'Disponível para novos projetos',
      'about.work.label'    : 'Atuação',
      'about.work.val'      : 'Remoto / Internacional',
      'about.stat.years'    : 'Anos de Experiência',
      'about.stat.projects' : 'Projetos Entregues',
      'about.stat.clients'  : 'Clientes Atendidos',
      'about.stat.results'  : 'Foco em Resultados',
      'about.clients.title' : 'Empresas que <span>Confiam</span>',
      /* Services */
      'services.title'      : 'Meus <span>Serviços</span>',
      'services.intro'      : 'Ofereço consultoria técnica e desenvolvimento de software para empresas que precisam de soluções digitais sólidas, desde a concepção até a operação em produção.',
      's1.title'            : 'Arquitetura de Software',
      's1.desc'             : 'Definição de arquiteturas escaláveis, resilientes e alinhadas ao negócio. Revisão de sistemas legados e roadmap técnico estratégico.',
      's2.title'            : 'Cloud Computing &amp; DevOps',
      's2.desc'             : 'Migração, otimização e gestão de infraestrutura em AWS e Google Cloud. Pipelines CI/CD, containerização e automação de infraestrutura.',
      's3.title'            : 'Soluções com Inteligência Artificial',
      's3.desc'             : 'Desenvolvimento e integração de soluções com IA: automação inteligente, NLP, modelos de ML e integração com APIs como OpenAI, Gemini e AWS Bedrock.',
      's4.title'            : 'APIs &amp; Microsserviços',
      's4.desc'             : 'Desenvolvimento de APIs REST/GraphQL e microsserviços de alta performance em Java, Node.js e Go. Integração entre sistemas e plataformas.',
      's5.title'            : 'Desenvolvimento Web',
      's5.desc'             : 'Aplicações web modernas e responsivas com React. Sistemas de gestão, dashboards e plataformas SaaS do backend ao frontend.',
      's6.title'            : 'Desenvolvimento Mobile',
      's6.desc'             : 'Aplicativos Android nativos em Kotlin e Java, com foco em performance, usabilidade e integração com ecossistemas digitais complexos.',
      's7.title'            : 'Consultoria Técnica',
      's7.desc'             : 'Apoio estratégico para CTOs e fundadores: avaliação tecnológica, escolha de stack, gestão de times e aceleração de produtos digitais.',
      /* Process */
      'process.title'       : 'Como <span>Trabalho</span>',
      'p1.title'            : 'Diagnóstico',
      'p1.desc'             : 'Entendo profundamente o problema, o contexto do negócio e as restrições técnicas existentes.',
      'p2.title'            : 'Proposta',
      'p2.desc'             : 'Apresento soluções claras com escopo, tecnologias, prazos e investimento — sem surpresas.',
      'p3.title'            : 'Execução',
      'p3.desc'             : 'Desenvolvimento iterativo com entregas frequentes, comunicação constante e código de qualidade.',
      'p4.title'            : 'Entrega &amp; Suporte',
      'p4.desc'             : 'Deploy em produção com documentação completa e suporte pós-lançamento para garantir o sucesso.',
      /* Tech */
      'tech.title'          : 'Tecnologias <span>Utilizadas</span>',
      /* Contact */
      'contact.title'       : 'Vamos <span>Conversar?</span>',
      'contact.loc.sub'     : 'Atendimento remoto global',
      'contact.email.sub'   : 'Respondo em até 24h',
      'contact.avail.title' : 'Disponível para Projetos',
      'contact.avail.sub'   : 'Novos projetos e consultorias',
      'contact.li.sub'      : 'Conecte-se comigo',
      'contact.form.title'  : 'Conte-me sobre o seu <span>Projeto</span>',
      'form.name'           : 'Nome Completo',
      'form.email'          : 'Endereço de E-mail',
      'form.subject'        : 'Tipo de Serviço / Assunto',
      'form.message'        : 'Descreva seu projeto ou desafio',
      'form.submit'         : 'Enviar Mensagem',
      /* Footer */
      'footer.copy'         : '© 2025 Diego Ramos. Todos os direitos reservados.',
      /* Products */
      'products.title'      : 'Meus <span>Produtos</span>',
      'products.intro'      : 'Produtos públicos que desenvolvi — ferramentas e serviços criados para resolver problemas reais.',
      'prod1.desc'          : 'Plataforma inteligente de agendamento online — simples, rápida e profissional. Ideal para profissionais autônomos e pequenas empresas gerenciarem seus compromissos.',
      'prod.badge.live'     : 'Ao Vivo',
      'prod.cta'            : 'Acessar Produto'
    },
    en: {
      /* Header */
      'header.sub'          : 'Consulting &amp; Digital Services',
      /* Nav */
      'nav.home'            : 'Home',
      'nav.about'           : 'About Me',
      'nav.services'        : 'Services',
      'nav.products'        : 'Products',
      'nav.contact'         : 'Contact',
      /* Carousel */
      'carousel.1'          : 'Technology Consulting',
      'carousel.2'          : 'Software Development',
      'carousel.3'          : 'Digital Solutions Architecture',
      'carousel.4'          : 'Cloud Computing &amp; DevOps',
      'carousel.5'          : 'AI-Powered Solutions',
      /* Home */
      'home.tagline'        : 'I transform business challenges into robust, scalable digital solutions — with over 15 years of experience by your side.',
      'home.cta1'           : 'Our Services',
      'home.cta2'           : 'Get in Touch',
      /* About */
      'about.title'         : 'About <span>Me</span>',
      'about.bio1'          : 'With over <strong>15 years of experience</strong> in software engineering, I help companies and entrepreneurs turn ideas into high-impact digital products. I act as a strategic technical consultant and developer — from planning to delivery — always focused on quality, scalability and tangible results.',
      'about.bio2'          : 'Based in <strong>Braga, Portugal</strong>, I serve clients worldwide through remote projects with full commitment to every delivery.',
      'about.loc.label'     : 'Location',
      'about.avail.label'   : 'Availability',
      'about.avail.val'     : 'Available for new projects',
      'about.work.label'    : 'Work Mode',
      'about.work.val'      : 'Remote / International',
      'about.stat.years'    : 'Years of Experience',
      'about.stat.projects' : 'Projects Delivered',
      'about.stat.clients'  : 'Clients Served',
      'about.stat.results'  : 'Results-Driven',
      'about.clients.title' : 'Companies that <span>Trust</span>',
      /* Services */
      'services.title'      : 'My <span>Services</span>',
      'services.intro'      : 'I provide technical consulting and software development for companies that need solid digital solutions — from conception all the way to production.',
      's1.title'            : 'Software Architecture',
      's1.desc'             : 'Defining scalable, resilient architectures aligned to the business. Legacy system reviews and strategic technical roadmapping.',
      's2.title'            : 'Cloud Computing &amp; DevOps',
      's2.desc'             : 'Migration, optimisation and management of infrastructure on AWS and Google Cloud. CI/CD pipelines, containerisation and infrastructure automation.',
      's3.title'            : 'AI-Powered Solutions',
      's3.desc'             : 'Development and integration of AI solutions: intelligent automation, NLP, ML models, and integration with APIs such as OpenAI, Gemini and AWS Bedrock.',
      's4.title'            : 'APIs &amp; Microservices',
      's4.desc'             : 'High-performance REST/GraphQL APIs and microservices in Java, Node.js and Go. System and platform integrations.',
      's5.title'            : 'Web Development',
      's5.desc'             : 'Modern, responsive web applications with React. Management systems, dashboards and SaaS platforms from backend to frontend.',
      's6.title'            : 'Mobile Development',
      's6.desc'             : 'Native Android apps in Kotlin and Java, focused on performance, usability and integration with complex digital ecosystems.',
      's7.title'            : 'Technical Consulting',
      's7.desc'             : 'Strategic advisory for CTOs and founders: technology assessment, stack selection, team management and digital product acceleration.',
      /* Process */
      'process.title'       : 'How I <span>Work</span>',
      'p1.title'            : 'Diagnosis',
      'p1.desc'             : 'I deeply understand the problem, the business context and existing technical constraints.',
      'p2.title'            : 'Proposal',
      'p2.desc'             : 'I present clear solutions with scope, technologies, timelines and investment — no surprises.',
      'p3.title'            : 'Execution',
      'p3.desc'             : 'Iterative development with frequent deliveries, constant communication and quality code.',
      'p4.title'            : 'Delivery &amp; Support',
      'p4.desc'             : 'Production deployment with complete documentation and post-launch support to ensure success.',
      /* Tech */
      'tech.title'          : 'Technologies <span>Used</span>',
      /* Contact */
      'contact.title'       : "Let's <span>Talk?</span>",
      'contact.loc.sub'     : 'Global remote service',
      'contact.email.sub'   : 'I reply within 24h',
      'contact.avail.title' : 'Available for Projects',
      'contact.avail.sub'   : 'New projects and consulting',
      'contact.li.sub'      : 'Connect with me',
      'contact.form.title'  : 'Tell me about your <span>Project</span>',
      'form.name'           : 'Full Name',
      'form.email'          : 'Email Address',
      'form.subject'        : 'Service Type / Subject',
      'form.message'        : 'Describe your project or challenge',
      'form.submit'         : 'Send Message',
      /* Footer */
      'footer.copy'         : '© 2025 Diego Ramos. All rights reserved.',
      /* Products */
      'products.title'      : 'My <span>Products</span>',
      'products.intro'      : 'Public products I have built — tools and services created to solve real problems.',
      'prod1.desc'          : 'Smart online scheduling platform — simple, fast and professional. Perfect for freelancers and small businesses to manage their appointments.',
      'prod.badge.live'     : 'Live',
      'prod.cta'            : 'Visit Product'
    }
  };
  /* ── APPLY LANGUAGE ───────────────────────────────────── */
  function applyLang(lang, isUserAction) {
    var dict = T[lang];
    if (!dict) return;
    /* Update all [data-i18n] elements */
    $('[data-i18n]').each(function () {
      var key = $(this).attr('data-i18n');
      if (dict[key] !== undefined) {
        $(this).html(dict[key]);
      }
    });
    /* Update submit button value (special attribute) */
    $('[data-i18n-val]').each(function () {
      var key = $(this).attr('data-i18n-val');
      if (dict[key] !== undefined) {
        $(this).val(dict[key]);
      }
    });
    /* Update <html lang=""> */
    document.documentElement.lang = lang;
    /* Update active button state */
    $('.lang-btn').removeClass('active');
    $('.lang-btn[data-lang="' + lang + '"]').addClass('active');
    /* Persist preference */
    try { localStorage.setItem('dr_lang', lang); } catch (e) {}
    window._drLang = lang;
    /* If user clicked the button (carousel already initialised by main.js),
       we need to destroy & rebuild it so the new text is picked up.       */
    if (isUserAction && $.fn.owlCarousel) {
      var $rot = $('.text-rotation');
      if ($rot.hasClass('owl-loaded')) {
        $rot.trigger('destroy.owl.carousel').removeClass('owl-loaded owl-drag');
        /* Rebuild inner items from translation */
        var items = [
          dict['carousel.1'],
          dict['carousel.2'],
          dict['carousel.3'],
          dict['carousel.4'],
          dict['carousel.5']
        ];
        var html = '';
        for (var i = 0; i < items.length; i++) {
          html += '<div class="item"><div class="sp-subtitle">' + items[i] + '</div></div>';
        }
        $rot.html(html);
        /* Re-initialise with the same options main.js likely uses */
        $rot.owlCarousel({
          loop         : true,
          margin       : 0,
          nav          : false,
          dots         : false,
          items        : 1,
          autoplay     : true,
          autoplayTimeout    : 3000,
          autoplayHoverPause : false,
          animateOut   : 'fadeOut'
        });
      }
    }
  }
  /* ── INIT ON SCRIPT LOAD (synchronous, before main.js) ── */
  var savedLang = 'pt';
  try { savedLang = localStorage.getItem('dr_lang') || 'pt'; } catch (e) {}
  if (savedLang !== 'pt' && savedLang !== 'en') savedLang = 'pt';
  /* Apply immediately so DOM is correct when main.js runs */
  if (savedLang === 'en') {
    /* Update data-i18n and carousel items before owl init */
    $('[data-i18n]').each(function () {
      var key = $(this).attr('data-i18n');
      if (T.en[key] !== undefined) $(this).html(T.en[key]);
    });
    $('[data-i18n-val]').each(function () {
      var key = $(this).attr('data-i18n-val');
      if (T.en[key] !== undefined) $(this).val(T.en[key]);
    });
    document.documentElement.lang = 'en';
  }
  window._drLang = savedLang;
  /* ── CLICK HANDLER (after DOM ready) ─────────────────── */
  $(document).ready(function () {
    /* Set correct active button on load */
    $('.lang-btn').removeClass('active');
    $('.lang-btn[data-lang="' + window._drLang + '"]').addClass('active');
    $(document).on('click', '.lang-btn', function () {
      var lang = $(this).attr('data-lang');
      if (lang !== window._drLang) {
        applyLang(lang, true);
      }
    });
  });
}(jQuery));
