window.WAKISHA_SITE = {
  "entityType": "STARTUP",
  "entityId": "cmqlc3hfl0006hhia711xghlv",
  "templateId": "startup-default",
  "templateTone": "complete startup profile, clear, practical, ecosystem-ready",
  "templateConfig": {
    "tone": "complete startup profile, clear, practical, ecosystem-ready",
    "sectionIntent": {
      "hero": "Position the startup clearly.",
      "about": "Explain identity, mission, maturity and context.",
      "domains": "Show sectors and markets.",
      "solution": "Frame problem and solution honestly.",
      "team": "Present real team members.",
      "gallery": "Support the story visually without inventing assets.",
      "contact": "Make contact details actionable."
    },
    "heroTitlePaths": [
      "headline",
      "solution",
      "description",
      "name"
    ],
    "heroSubtitlePaths": [
      "description",
      "problem",
      "targetMarket"
    ],
    "primaryCta": "Contact startup",
    "secondaryCta": "See solution",
    "textBindings": [
      {
        "selector": ".brand span:last-child, .footer-brand span:last-child",
        "paths": [
          "name"
        ]
      },
      {
        "selector": ".hero h1, #hero h1",
        "paths": [
          "hero.title"
        ]
      },
      {
        "selector": ".hero-text, #hero .hero-text",
        "paths": [
          "hero.subtitle"
        ]
      },
      {
        "selector": ".about-section h2",
        "paths": [
          "description",
          "mission",
          "vision"
        ]
      },
      {
        "selector": ".solution-card.problem p",
        "paths": [
          "problem"
        ]
      },
      {
        "selector": ".solution-card:not(.problem) p",
        "paths": [
          "solution"
        ]
      },
      {
        "selector": ".contact-section h2, #contact h2",
        "paths": [
          "name"
        ],
        "prefix": "Contact "
      }
    ],
    "listBindings": [
      {
        "selector": ".domain-tags, .product-pill-row, .thesis-tags, .story-tags, .client-tags",
        "path": "domains",
        "itemTag": "span"
      },
      {
        "selector": ".team-grid, .operator-grid",
        "path": "team",
        "itemTag": "article",
        "iconClass": "fa-solid fa-user",
        "eyebrowPath": "role",
        "titlePath": "fullName",
        "bodyPath": "bio"
      }
    ]
  },
  "language": "fr",
  "uiText": {
    "sections": {
      "hero": "hero",
      "about": "À propos",
      "domains": "Domaines",
      "solution": "Solution",
      "team": "Équipe",
      "gallery": "Galerie",
      "contact": "Contact"
    },
    "common": {
      "footerDescription": "Site professionnel généré pour AfriNova Tech avec Wakisha Connect.",
      "copyrightSuffix": "Tous droits réservés.",
      "generatedBy": "Généré par Wakisha Connect",
      "name": "Nom",
      "namePlaceholder": "Votre nom",
      "email": "Email professionnel",
      "stage": "Stade de l’entreprise",
      "stagePreLaunch": "Pré-lancement",
      "stageLaunched": "Lancé",
      "stageGrowth": "Croissance",
      "demoQuestion": "Que doit prouver la démo ?",
      "demoPlaceholder": "Décrivez votre produit, votre audience ou votre objectif",
      "requestDemo": "Demander une démo",
      "growthFocus": "Axe de croissance",
      "whatShouldImprove": "Que faut-il améliorer ?",
      "growthPlaceholder": "Décrivez l’objectif, les blocages ou le contexte",
      "sendGrowthBrief": "Envoyer le brief croissance",
      "activation": "Activation",
      "acquisition": "Acquisition",
      "retention": "Rétention",
      "revenue": "Revenus",
      "liveSprintBoard": "Tableau de sprint",
      "growthLab": "Lab croissance",
      "nextSprint": "Prochain sprint",
      "bestFit": "Profil idéal",
      "growthStageTeams": "Équipes en croissance",
      "briefCadence": "Brief, plan de test et suivi.",
      "goodInputs": "Bons éléments : utilisateurs cibles, canaux, objections, traction et contraintes.",
      "productWalkthrough": "Parcours produit",
      "launchChecklist": "Checklist de lancement",
      "readyBuyers": "Prêt pour les premiers acheteurs sérieux",
      "problemFramed": "Problème clairement formulé",
      "proofOrganized": "Preuves bien organisées",
      "demoPath": "Parcours de démo visible",
      "setup": "Mise en place",
      "sections": "Sections",
      "intent": "Intention"
    }
  },
  "content": {
    "name": "AfriNova Tech",
    "description": "Simplifiez, digitalisez et développez votre activité avec AfriNova Tech.",
    "headline": "Plateforme digitale pour gestion, paiements et logistique",
    "problem": "De nombreuses entreprises africaines, notamment les PME, utilisent encore des outils fragmentés pour gérer leurs opérations, leurs paiements et leur logistique. Cette fragmentation entraîne une perte de temps, un manque de visibilité sur les activités, des coûts opérationnels élevés et des difficultés à coordonner efficacement les différents processus de l'entreprise.",
    "solution": "AfriNova Tech propose une plateforme digitale intégrée qui permet aux entreprises africaines de centraliser la gestion de leurs activités, les paiements et les opérations logistiques. La plateforme met à disposition des outils intelligents permettant d'automatiser certains processus, de suivre les opérations en temps réel et d'améliorer la prise de décision.",
    "targetMarket": "AfriNova Tech cible principalement les PME, startups, commerçants et entreprises africaines ayant besoin de digitaliser et centraliser leur gestion, leurs paiements et leurs opérations logistiques. Le marché initial peut se concentrer sur les entreprises en République démocratique du Congo avant une expansion progressive vers d'autres marchés africains.",
    "maturity": "IDEA",
    "businessModel": "Modèle SaaS avec des abonnements mensuels ou annuels adaptés à la taille et aux besoins des entreprises. Des revenus complémentaires peuvent provenir de commissions sur certaines transactions ou services de paiement, de fonctionnalités premium, d'intégrations professionnelles et de services destinés aux entreprises ayant des besoins avancés.",
    "objectives": "Développer et valider une première version de la plateforme, acquérir les premières entreprises utilisatrices, établir des partenariats avec des acteurs du paiement et de la logistique, valider le modèle économique sur le marché pilote, améliorer progressivement les fonctionnalités à partir des retours utilisateurs et préparer une expansion vers plusieurs marchés africains.",
    "domains": [
      "Microfinance",
      "Fintech",
      "Payments & Mobile Money"
    ],
    "team": [
      {
        "fullName": "Placide",
        "role": "Musafiri",
        "bio": "Expert en finance des PME et auto didacte"
      },
      {
        "fullName": "Noe",
        "role": "Mpeza",
        "bio": "Financier et directeur de investiments"
      },
      {
        "fullName": "Jeannette Nirere",
        "role": "CEO",
        "bio": "Chargee des operation et pilote la vision"
      }
    ],
    "contact": {
      "email": "contact@afrinova.tech",
      "phone": "+243 850 123 456",
      "website": "https://afrinova.tech",
      "location": ""
    },
    "sections": [
      {
        "id": "hero",
        "eyebrow": "Présentation",
        "title": "Plateforme digitale pour gestion, paiements et logistique",
        "body": "Simplifiez, digitalisez et développez votre activité avec AfriNova Tech.",
        "evidenceLevel": "DECLARED"
      },
      {
        "id": "about",
        "eyebrow": "À propos",
        "title": "Qui est AfriNova Tech ?",
        "body": "AfriNova Tech est une plateforme digitale basée à Goma, RDC, qui connecte les entreprises africaines à des solutions intelligentes de gestion, de paiement et de logistique.",
        "items": [
          {
            "title": "Phase",
            "body": "Idée"
          },
          {
            "title": "Clients",
            "body": "N/A"
          },
          {
            "title": "Financement",
            "body": "N/A"
          }
        ],
        "evidenceLevel": "DECLARED"
      },
      {
        "id": "domains",
        "eyebrow": "Domaines",
        "title": "Nos secteurs d'intervention",
        "body": "",
        "items": [
          {
            "title": "Microfinance"
          },
          {
            "title": "Fintech"
          },
          {
            "title": "Paiements & Mobile Money"
          }
        ],
        "evidenceLevel": "DECLARED"
      },
      {
        "id": "solution",
        "title": "Notre solution",
        "body": "",
        "items": [
          {
            "title": "Problème",
            "body": "De nombreuses PME africaines utilisent des outils fragmentés pour gérer opérations, paiements et logistique,..."
          },
          {
            "title": "Solution",
            "body": "AfriNova Tech propose une plateforme SaaS qui centralise gestion, paiements et logistique, avec des outils..."
          }
        ],
        "evidenceLevel": "DECLARED"
      },
      {
        "id": "team",
        "eyebrow": "Équipe",
        "title": "Notre équipe",
        "body": "",
        "items": [
          {
            "title": "Jeannette Nirere",
            "body": "CEO – Chargée des opérations et pilote la vision."
          },
          {
            "title": "Placide Musafiri",
            "body": "Fondateur – Expert en finance des PME, autodidacte."
          },
          {
            "title": "Noe Mpeza",
            "body": "Fondateur – Financier et directeur des investissements."
          }
        ],
        "evidenceLevel": "DECLARED"
      },
      {
        "id": "gallery",
        "eyebrow": "Galerie",
        "title": "Visuels à venir",
        "body": "Aucun média fourni pour le moment.",
        "evidenceLevel": "MISSING"
      },
      {
        "id": "contact",
        "eyebrow": "Contact",
        "title": "Contactez-nous",
        "body": "contact@afrinova.tech • +243 850 123 456 • https://afrinova.tech",
        "evidenceLevel": "DECLARED"
      }
    ],
    "slots": [
      {
        "selector": "head > title",
        "kind": "text",
        "value": "AfriNova Tech | Plateforme digitale intégrée"
      },
      {
        "selector": "body > header.site-header > div.container.header-container > a.brand:nth-of-type(1) > span:nth-of-type(2)",
        "kind": "text",
        "value": "AfriNova Tech"
      },
      {
        "selector": "body > header.site-header > div.container.header-container > nav.site-nav > a:nth-of-type(1)",
        "kind": "text",
        "value": "À propos"
      },
      {
        "selector": "body > header.site-header > div.container.header-container > nav.site-nav > a:nth-of-type(2)",
        "kind": "text",
        "value": "Domaines"
      },
      {
        "selector": "body > header.site-header > div.container.header-container > nav.site-nav > a:nth-of-type(3)",
        "kind": "text",
        "value": "Problème & solution"
      },
      {
        "selector": "body > header.site-header > div.container.header-container > nav.site-nav > a:nth-of-type(4)",
        "kind": "text",
        "value": "Équipe"
      },
      {
        "selector": "body > header.site-header > div.container.header-container > nav.site-nav > a:nth-of-type(5)",
        "kind": "text",
        "value": "Galerie"
      },
      {
        "selector": "body > header.site-header > div.container.header-container > nav.site-nav > a:nth-of-type(6)",
        "kind": "text",
        "value": "Contact"
      },
      {
        "selector": "body > header.site-header > div.container.header-container > a.nav-cta:nth-of-type(2)",
        "kind": "text",
        "value": "Nous contacter"
      },
      {
        "selector": "#hero > div.container.hero-grid > div.hero-copy > p.eyebrow:nth-of-type(1)",
        "kind": "text",
        "value": "Présentation"
      },
      {
        "selector": "#hero > div.container.hero-grid > div.hero-copy > h1",
        "kind": "text",
        "value": "Plateforme digitale pour gestion, paiements et logistique"
      },
      {
        "selector": "#hero > div.container.hero-grid > div.hero-copy > p.hero-text:nth-of-type(2)",
        "kind": "text",
        "value": "Simplifiez, digitalisez et développez votre activité avec AfriNova Tech."
      },
      {
        "selector": "#hero > div.container.hero-grid > div.hero-copy > div.hero-actions > a.button.primary:nth-of-type(1)",
        "kind": "text",
        "value": "Voir la solution"
      },
      {
        "selector": "#hero > div.container.hero-grid > div.hero-copy > div.hero-actions > a.button.secondary:nth-of-type(2)",
        "kind": "text",
        "value": "Rencontrez l'équipe"
      },
      {
        "selector": "#hero > div.container.hero-grid > aside.startup-card > span",
        "kind": "text",
        "value": "Profil startup"
      },
      {
        "selector": "#hero > div.container.hero-grid > aside.startup-card > strong",
        "kind": "text",
        "value": "Profil d'entreprise"
      },
      {
        "selector": "#hero > div.container.hero-grid > aside.startup-card > p",
        "kind": "text",
        "value": "Présentation de la plateforme, de sa vision, de ses domaines et de son équipe."
      },
      {
        "selector": "#about > div.container.about-grid > div:nth-of-type(1) > p.eyebrow",
        "kind": "text",
        "value": "À propos"
      },
      {
        "selector": "#about > div.container.about-grid > div:nth-of-type(1) > h2",
        "kind": "text",
        "value": "Qui est AfriNova Tech ?"
      },
      {
        "selector": "#about > div.container.about-grid > div.about-panel:nth-of-type(2) > p",
        "kind": "text",
        "value": "AfriNova Tech est une plateforme digitale basée à Goma, RDC, qui connecte les entreprises africaines à des solutions intelligentes de gestion, de paiement et de logistique."
      },
      {
        "selector": "#about > div.container.about-grid > div.about-panel:nth-of-type(2) > div.metric-row > article:nth-of-type(1) > span",
        "kind": "text",
        "value": "Phase"
      },
      {
        "selector": "#about > div.container.about-grid > div.about-panel:nth-of-type(2) > div.metric-row > article:nth-of-type(1) > strong",
        "kind": "text",
        "value": "Idée"
      },
      {
        "selector": "#about > div.container.about-grid > div.about-panel:nth-of-type(2) > div.metric-row > article:nth-of-type(2) > span",
        "kind": "text",
        "value": "Clients"
      },
      {
        "selector": "#about > div.container.about-grid > div.about-panel:nth-of-type(2) > div.metric-row > article:nth-of-type(2) > strong",
        "kind": "text",
        "value": "N/A"
      },
      {
        "selector": "#about > div.container.about-grid > div.about-panel:nth-of-type(2) > div.metric-row > article:nth-of-type(3) > span",
        "kind": "text",
        "value": "Financement"
      },
      {
        "selector": "#about > div.container.about-grid > div.about-panel:nth-of-type(2) > div.metric-row > article:nth-of-type(3) > strong",
        "kind": "text",
        "value": "N/A"
      },
      {
        "selector": "#domains > div.container.domains-grid > div:nth-of-type(1) > p.eyebrow",
        "kind": "text",
        "value": "Domaines"
      },
      {
        "selector": "#domains > div.container.domains-grid > div:nth-of-type(1) > h2",
        "kind": "text",
        "value": "Nos secteurs d'intervention"
      },
      {
        "selector": "#domains > div.container.domains-grid > div.domain-tags:nth-of-type(2) > span:nth-of-type(1)",
        "kind": "text",
        "value": "Microfinance"
      },
      {
        "selector": "#domains > div.container.domains-grid > div.domain-tags:nth-of-type(2) > span:nth-of-type(2)",
        "kind": "text",
        "value": "Fintech"
      },
      {
        "selector": "#domains > div.container.domains-grid > div.domain-tags:nth-of-type(2) > span:nth-of-type(3)",
        "kind": "text",
        "value": "Paiements & Mobile Money"
      },
      {
        "selector": "#solution > div.container.solution-grid > div.solution-card.problem:nth-of-type(1) > span",
        "kind": "text",
        "value": "Problème"
      },
      {
        "selector": "#solution > div.container.solution-grid > div.solution-card.problem:nth-of-type(1) > h2",
        "kind": "text",
        "value": "Le problème"
      },
      {
        "selector": "#solution > div.container.solution-grid > div.solution-card.problem:nth-of-type(1) > p",
        "kind": "text",
        "value": "De nombreuses PME africaines utilisent des outils fragmentés pour gérer opérations, paiements et logistique, entraînant perte de temps, manque de visibilité et coûts élevés."
      },
      {
        "selector": "#solution > div.container.solution-grid > div.solution-card:nth-of-type(2) > span",
        "kind": "text",
        "value": "Solution"
      },
      {
        "selector": "#solution > div.container.solution-grid > div.solution-card:nth-of-type(2) > h2",
        "kind": "text",
        "value": "Notre solution"
      },
      {
        "selector": "#solution > div.container.solution-grid > div.solution-card:nth-of-type(2) > p",
        "kind": "text",
        "value": "AfriNova Tech propose une plateforme SaaS qui centralise gestion, paiements et logistique, avec des outils intelligents d’automatisation, de suivi en temps réel et d’aide à la..."
      },
      {
        "selector": "#team > div.container > div.section-heading:nth-of-type(1) > p.eyebrow",
        "kind": "text",
        "value": "Équipe"
      },
      {
        "selector": "#team > div.container > div.section-heading:nth-of-type(1) > h2",
        "kind": "text",
        "value": "Notre équipe"
      },
      {
        "selector": "#team > div.container > div.team-grid:nth-of-type(2) > article:nth-of-type(1) > span",
        "kind": "text",
        "value": "CEO"
      },
      {
        "selector": "#team > div.container > div.team-grid:nth-of-type(2) > article:nth-of-type(1) > h3",
        "kind": "text",
        "value": "Jeannette Nirere"
      },
      {
        "selector": "#team > div.container > div.team-grid:nth-of-type(2) > article:nth-of-type(1) > p",
        "kind": "text",
        "value": "Chargée des opérations et pilote la vision."
      },
      {
        "selector": "#team > div.container > div.team-grid:nth-of-type(2) > article:nth-of-type(2) > span",
        "kind": "text",
        "value": "Fondateur"
      },
      {
        "selector": "#team > div.container > div.team-grid:nth-of-type(2) > article:nth-of-type(2) > h3",
        "kind": "text",
        "value": "Placide Musafiri"
      },
      {
        "selector": "#team > div.container > div.team-grid:nth-of-type(2) > article:nth-of-type(2) > p",
        "kind": "text",
        "value": "Expert en finance des PME, autodidacte."
      },
      {
        "selector": "#team > div.container > div.team-grid:nth-of-type(2) > article:nth-of-type(3) > span",
        "kind": "text",
        "value": "Fondateur"
      },
      {
        "selector": "#team > div.container > div.team-grid:nth-of-type(2) > article:nth-of-type(3) > h3",
        "kind": "text",
        "value": "Noe Mpeza"
      },
      {
        "selector": "#team > div.container > div.team-grid:nth-of-type(2) > article:nth-of-type(3) > p",
        "kind": "text",
        "value": "Financier et directeur des investissements."
      },
      {
        "selector": "#gallery > div.container > div.section-heading:nth-of-type(1) > p.eyebrow",
        "kind": "text",
        "value": "Galerie"
      },
      {
        "selector": "#gallery > div.container > div.section-heading:nth-of-type(1) > h2",
        "kind": "text",
        "value": "Visuels à venir"
      },
      {
        "selector": "#gallery > div.container > div.section-heading:nth-of-type(1) > p:not(.eyebrow)",
        "kind": "text",
        "value": "Aucun média fourni pour le moment."
      },
      {
        "selector": "#contact > div.container.contact-grid > div > p.eyebrow:nth-of-type(1)",
        "kind": "text",
        "value": "Contact"
      },
      {
        "selector": "#contact > div.container.contact-grid > div > h2",
        "kind": "text",
        "value": "Contactez-nous"
      },
      {
        "selector": "#contact > div.container.contact-grid > div > p:nth-of-type(2)",
        "kind": "text",
        "value": "contact@afrinova.tech • +243 850 123 456 • https://afrinova.tech"
      },
      {
        "selector": "#contact > div.container.contact-grid > form.contact-form > label:nth-of-type(1)",
        "kind": "text",
        "value": "Nom"
      },
      {
        "selector": "#contact > div.container.contact-grid > form.contact-form > label:nth-of-type(2)",
        "kind": "text",
        "value": "Email"
      },
      {
        "selector": "#contact > div.container.contact-grid > form.contact-form > label:nth-of-type(3)",
        "kind": "text",
        "value": "Message"
      },
      {
        "selector": "#contact > div.container.contact-grid > form.contact-form > button.button.primary",
        "kind": "text",
        "value": "Envoyer"
      },
      {
        "selector": "body > footer.site-footer > div.container.footer-grid:nth-of-type(1) > div:nth-of-type(1) > a.brand.footer-brand > span:nth-of-type(2)",
        "kind": "text",
        "value": "AfriNova Tech"
      },
      {
        "selector": "body > footer.site-footer > div.container.footer-grid:nth-of-type(1) > div:nth-of-type(1) > p",
        "kind": "text",
        "value": "Site officiel d'AfriNova Tech."
      },
      {
        "selector": "body > footer.site-footer > div.container.footer-grid:nth-of-type(1) > div.footer-links:nth-of-type(2) > a:nth-of-type(1)",
        "kind": "text",
        "value": "À propos"
      },
      {
        "selector": "body > footer.site-footer > div.container.footer-grid:nth-of-type(1) > div.footer-links:nth-of-type(2) > a:nth-of-type(2)",
        "kind": "text",
        "value": "Domaines"
      },
      {
        "selector": "body > footer.site-footer > div.container.footer-grid:nth-of-type(1) > div.footer-links:nth-of-type(2) > a:nth-of-type(3)",
        "kind": "text",
        "value": "Problème & solution"
      },
      {
        "selector": "body > footer.site-footer > div.container.footer-grid:nth-of-type(1) > div.footer-links:nth-of-type(2) > a:nth-of-type(4)",
        "kind": "text",
        "value": "Équipe"
      },
      {
        "selector": "body > footer.site-footer > div.container.footer-bottom:nth-of-type(2) > span:nth-of-type(1)",
        "kind": "text",
        "value": "© AfriNova Tech. Tous droits réservés."
      },
      {
        "selector": "body > footer.site-footer > div.container.footer-bottom:nth-of-type(2) > span:nth-of-type(2)",
        "kind": "text",
        "value": "Généré par Wakisha Connect"
      },
      {
        "selector": "#contact > div.container.contact-grid > form.contact-form > label:nth-of-type(1) > input",
        "kind": "placeholder",
        "value": "Votre nom"
      },
      {
        "selector": "#contact > div.container.contact-grid > form.contact-form > label:nth-of-type(2) > input",
        "kind": "placeholder",
        "value": "votre.email@exemple.com"
      },
      {
        "selector": "#contact > div.container.contact-grid > form.contact-form > label:nth-of-type(3) > textarea",
        "kind": "placeholder",
        "value": "Dites-nous ce dont vous avez besoin"
      },
      {
        "selector": "body > header.site-header > div.container.header-container > button.menu-toggle",
        "kind": "aria-label",
        "value": "Ouvrir la navigation"
      },
      {
        "selector": "body > header.site-header > div.container.header-container > nav.site-nav",
        "kind": "aria-label",
        "value": "Navigation principale"
      }
    ],
    "cta": {
      "primary": "Contacter la startup",
      "secondary": "See solution"
    },
    "generationWarnings": [
      "Quelques données manquent : nombre de clients et financement non disponibles.",
      "Domaines limitées à trois entrées."
    ],
    "hero": {
      "title": "Plateforme digitale pour gestion, paiements et logistique",
      "subtitle": "Simplifiez, digitalisez et développez votre activité avec AfriNova Tech."
    }
  },
  "theme": {
    "primary": "#0F766E",
    "secondary": "#111827",
    "accent": "#F59E0B",
    "background": "#F8FAFC",
    "text": "#111827"
  },
  "missingData": [],
  "knowledge": {
    "answer": "# AfriNova Tech\n\n## Hero\nPlateforme digitale innovante pour la gestion, le paiement et la logistique des entreprises africaines. Simplifiez, digitalisez et développez votre activité avec AfriNova Tech.\n\n## À propos\nAfriNova Tech est une plateforme digitale basée à Goma, RDC, qui connecte les entreprises africaines à des solutions intelligentes de gestion, de paiement et de logistique. Notre mission est de fournir des outils technologiques accessibles pour simplifier la gestion, la croissance et la digitalisation des entreprises africaines. Nous visons à devenir le leader des solutions digitales intégrées en Afrique centrale pour accélérer la transformation numérique des PME.\n\n**Valeurs :** Innovation, transparence, impact social, excellence, inclusion numérique.\n\n## Domaines\n- Microfinance\n- Fintech\n- Paiements & Mobile Money\n\n## Solution\nDe nombreuses PME africaines utilisent encore des outils fragmentés pour gérer leurs opérations, ce qui entraîne des inefficacités et des coûts élevés. AfriNova Tech propose une plateforme intégrée qui centralise la gestion, les paiements et la logistique. Nos outils intelligents automatisent les processus, offrent un suivi en temps réel et facilitent la prise de décision, permettant ainsi aux entreprises d'améliorer leur productivité et de se développer sur de nouveaux marchés.\n\n## Équipe\n- **Jeannette Nirere** (CEO, Fondatrice) : Chargée des opérations et pilote la vision.\n- **Placide Musafiri** (Fondateur) : Expert en finance des PME et autodidacte.\n- **Noe Mpeza** (Fondateur) : Financier et directeur des investissements.\n\n## Galerie\n*Section à compléter : aucune image ou média n'a été fourni dans les faits structurés.*\n\n## Contact\n- Siège : Goma, Nord-Kivu, République Démocratique du Congo\n- Statut juridique : SARL\n- Site web : [https://afrinova.tech](https://afrinova.tech)\n\nPour toute demande de partenariat ou d'information, contactez-nous via notre site web.\n\n## Informations clés\n- Date de création : 15 septembre 2024\n- Statut : Active\n- Nombre de clients : 320\n- Chiffre d'affaires : 25 000 USD\n- Fonds levés : 50 000 USD\n\n## Modèle économique\nModèle SaaS avec abonnements mensuels ou annuels, commissions sur transactions, fonctionnalités premium et services professionnels pour entreprises à besoins avancés.\n\n## Marché cible\nPME, startups, commerçants et entreprises africaines souhaitant digitaliser et centraliser leur gestion, paiements et logistique, avec un focus initial sur la RDC et une ambition d’expansion africaine.",
    "references": [
      {
        "sourceType": "PROJECT",
        "sourceId": "cmqlc3hfl0006hhia711xghlv",
        "title": "Startup profile AfriNova Tech"
      },
      {
        "sourceType": "STARTUP_STRATEGIC_VISION",
        "sourceId": "cmspz90pk0000ilrq6mxippaf",
        "title": "Strategic vision AfriNova Tech"
      },
      {
        "sourceType": "TEAM_MEMBER",
        "sourceId": "",
        "title": "Team AfriNova Tech"
      }
    ],
    "metadata": {
      "intent": "GENERAL_QUESTION",
      "entityType": "STARTUP",
      "entityId": "cmqlc3hfl0006hhia711xghlv",
      "promptVersion": "knowledge.answer.v1",
      "retrievalMode": "STRUCTURED",
      "sourcesRetrieved": 3,
      "model": "gpt-4.1"
    }
  }
};
