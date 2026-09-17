---
title: "État de l'art : Modélisation des expositions muséales"
date: 2026-07-05
status: published
tags:
  - lang:fr
  - case:litterature
  - ontology:cidoc-crm
  - ontology:curate
  - ontology:ontoExhibit
  - ontology:AAAO
description: "État de l'art des ontologies pour les expositions"
---

# État de l'art : Modélisation des expositions muséales

---

English · [Français](#français)

---

# État de l'art : la modélisation de l'exposition

## Introduction

Depuis les années 1990, les institutions culturelles élaborent des modèles documentaires destinés à rendre compte de l'information muséale (Hyvönen 2012 ; Bruseker et al. 2017). @todo Collection as Data. Ce champ, longtemps structuré autour de la description des collections, s'est progressivement enrichi de tentatives pour représenter l'exposition elle-même : non plus seulement les objets qu'elle contient, mais le récit qu'elle construit, l'espace qu'elle occupe et l'expérience qu'elle produit. La littérature récente permet de distinguer trois cibles de modélisation bien différentes, qui sont souvent confondues sous l'étiquette générique de « modèle d'exposition » :

- un graphe de collection, construit pour normaliser la connaissance sur les objets à travers les systèmes et les institutions ;
- un modèle narratif, construit pour représenter l'enchaînement interprétatif et l'argument curatorial à travers événements et objets ;
- un modèle d'accrochage (ou de *display*), qui viserait la configuration installée elle-même : l'accrochage, le groupement, la relation spatiale et l'état documentaire d'une exposition.

## 1. Le socle de l'interopérabilité sémantique des collections

Le CIDOC-CRM demeure l'ancrage sémantique de référence pour l'interopérabilité muséale. Élaboré à partir des années 1990 par le groupe de documentation de l'ICOM, ce modèle conceptuel de référence visait initialement à accompagner la convergence des systèmes d'information muséaux en explicitant leur sémantique sous-jacente. Son geste central est une modélisation événementielle : les objets, les acteurs, les lieux et les temps sont reliés par des entités temporelles plutôt que par des champs de métadonnées à plat (Doerr 2003). D'abord issu des pratiques documentaires des musées selon une approche ascendante, le CIDOC-CRM n'a été harmonisé qu'après coup avec des ontologies fondationnelles de type endurantiste, avant d'être exprimé sous forme d'ontologie OWL. Cette architecture confère au modèle une grande puissance pour la provenance, la production, l'acquisition, le déplacement et l'intégration inter-bases, mais son objectif reste l'interopérabilité sémantique entre systèmes documentaires hétérogènes, non l'écriture curatoriale.

Hyvönen (2012) situe ce socle dans une infrastructure sémantique complète plutôt que dans un simple choix de schéma : identifiants, métadonnées, ontologies, vocabulaires, liaison et services de portail. Dans ce cadre, la présentation muséale devient possible parce que les données sont désambiguïsées, reliables et actionnables machine à travers les institutions ; le gain porte sur l'échelle et la réutilisation, mais la sémantique de présentation reste en aval de l'infrastructure plutôt que modélisée en son sein. La revue d'Alexiev (2018) confirme que cet écosystème est pluriel plutôt qu'unifié : le CRM demeure l'option sémantique forte, tandis que les couches pratiques de publication s'appuient sur des combinaisons d'EDM, de vocabulaires Getty, d'IIIF et de simplifications de type *linked art*.

Au sein du CIDOC-CRM, la classe E7_Activity et sa sous-classe E87_Curation_Activity permettent de documenter les expositions, leurs dates, leurs lieux et leurs participants ainsi que les objets exposés. Le modèle ne permet toutefois pas de décrire finement la dimension spatiale des accrochages, ce qui a suscité plusieurs initiatives de clarification, notamment la Swiss Art Research Infrastructure (SARI), qui propose des solutions pour les informations descriptives relatives à une exposition.

Les travaux d'implémentation à grande échelle illustrent ce que les institutions opérationnalisent effectivement à partir de ce socle. ArCo montre comment un grand graphe national peut rester expressif tout en demeurant utilisable, en combinant une conception ontologique modulaire à des motifs n-aires et à des relations raccourcies (Carriero et al. 2019), ce qui constitue une réponse pratique à un problème récurrent en sémantique muséale : les modèles expressifs sont difficiles à peupler et à parcourir sans chemins d'accès simplifiés. Les cas du Rijksmuseum (Dijkshoorn et al. 2018) et du Smithsonian American Art Museum (Szekely et al. 2013) montrent un schéma similaire depuis deux directions différentes : tous deux s'appuient sur des profils de publication proches d'EDM, séparent l'objet physique du substitut numérique et des structures d'agrégation, et dépendent fortement du travail de correspondance, de l'alignement thésaurus et du liage d'entités. Aucun ne fournit cependant une représentation native mature de la logique d'exposition : ces institutions publient des graphes de collection qui peuvent supporter la présentation, sans la modéliser aussi profondément qu'elles modélisent la collection elle-même.

## 2. Les modèles narratifs et curatoriaux

Un second strate de littérature rompt plus nettement avec la métadonnée centrée sur la collection. Mulholland, Wolff et Collins soutiennent que le sens d'une exposition ne peut se déduire des seules fiches d'objets, parce que le sens curatorial réside dans les relations tissées entre les objets (Mulholland et al. 2012). Leur ontologie Curate distingue le *story* (les événements chronologiques), le *plot* (la relation interprétative entre ces événements) et le *narrative* (la mise en récit concrète). Cette distinction demeure l'un des outils conceptuels les plus nets pour modéliser la présentation d'exposition plutôt que l'inventaire. Concernant l'accrochage, Curate définit le récit comme la manifestation concrète du projet curatorial dans l'espace physique, en tenant compte des contraintes architecturales (petites salles, couloirs) et de conservation (niveaux de lumière) qui déterminent l'accrochage ; le projet propose même de classer les structures d'accrochage selon des modèles rhétoriques, tels que la structure linéaire en séquence de salles ou la structure en « moyeu et rayons », qui pourraient fournir des primitives pour une ontologie de l'espace d'exposition.

La *Narrative Ontology* pousse ce geste plus loin en traitant les récits comme des objets de connaissance de premier ordre dans les bibliothèques numériques (Meghini, Lenzi et Metilli 2021). Sa distinction entre fabula, narration et référence offre un compte formel à la fois de ce qui s'est passé et de la manière dont cela est raconté, ce qui est pertinent pour les expositions muséales car cela permet deux opérations que les modèles de collection ne traitent pas bien : décomposer un récit existant en événements représentés, et relier ces événements à des fragments médiatiques et à des objets de collection.

Rodríguez-Ortega va plus loin encore en soutenant que la modélisation d'exposition n'est pas seulement une extension technique mais un choix épistémologique (Rodríguez-Ortega 2024). Son ontologie OntoExhibit, issue d'une recherche étendue à travers les projets Exhibitium, Andalex et Complexhibit, traite les expositions comme des formations discursives et propositionnelles, non comme de simples contenants d'œuvres. Compatible avec le CIDOC-CRM, OntoExhibit ne traite pas l'exposition comme un simple événement ou un simple contenant, mais l'insère dans un écosystème culturel complexe en s'attachant à sa dimension discursive : arguments curatoriaux, cadres d'interprétation, strates sociales et rhétoriques qui façonnent la signification d'une exposition. Le modèle reconnaît explicitement la dimension visuelle et spatiale de l'organisation d'exposition à travers des entités telles que le *visual organization schema* et le *display*, sans pour autant prétendre à une documentation spatiale fine des accrochages. Ce déplacement du centre de modélisation, de la description centrée sur l'objet vers l'argument exhibitionnaire, l'agence curatoriale et le statut mixte matériel-numérique de la pratique artistique contemporaine, est l'intervention conceptuelle la plus spécifiquement orientée exposition de ce corpus, mais sa récence rend encore difficile l'évaluation de son adoption.

D'autres travaux élargissent cette approche discursive à des cas d'usage spécifiques : Chupryna (2022) modélise la microhistoire dans une exposition narrative à partir d'un cas d'étude au musée national Taras Chevtchenko, tandis que Love et al. (2021) proposent un modèle de valeurs compétitives de la curation comme outil pour arbitrer les priorités d'exposition dans les musées d'art. Ces travaux confirment que la modélisation narrative reste fragmentée et n'a pas encore constitué de pile commune stable, malgré la richesse conceptuelle de chacune de ses propositions.

## 3. Les modèles spatiaux et computationnels de l'accrochage

Un troisième strate, plus récente et de nature différente, aborde l'exposition comme un problème d'optimisation spatiale et comportementale plutôt que comme un problème sémantique. Les approches par agents et les approches paramétriques simulent l'interaction des visiteurs avant la construction et montrent que la géométrie des allées affecte la distribution de la fréquentation (Morsi et al. 2023). Des travaux d'intelligence artificielle appliqués au musée montrent que des réseaux antagonistes génératifs conditionnels (CGAN) peuvent apprendre les traits d'un plan à partir d'un corpus de plans de salles d'exposition, mais échouent encore à interpréter le contenu textuel ou les trames narratives de l'exposition (Tang et al. 2024). L'apprentissage par renforcement, la prédiction du regard et l'intelligence spatiale prolongent cette tendance : des modèles de RL rapportent des gains en matière de flux, de taux de visite et de satisfaction, mais leur généralisation demeure limitée à des scénarios spécifiques (Lei 2025) ; GazeNet propose une évaluation automatisée de l'attention visuelle sans étude sur participants (Tian et al. 2026). Des modèles de choix séquentiel et d'optimisation relient l'agencement des œuvres à la propension de transition entre elles, montrant qu'une plus grande distance spatiale réduit le mouvement entre œuvres tandis qu'un agencement optimisé peut accroître l'engagement (Aouad, Deshmane et Martínez-de-Albéniz 2025).

Ces approches convergent avec des études plus proprement architecturales, qui relient la disposition, la circulation, la visibilité, la congestion et le temps de séjour à des résultats mesurables de l'expérience du visiteur (Wang et al. 2025 ; Aouad et al. 2025 ; Chen et al. 2025). Elles constituent un paradigme distinct, celui d'une modélisation spatiale-comportementale, dont l'objet central est le mouvement et l'engagement plutôt que le sens ou la sémantique documentaire. Sa limite principale tient à la sensibilité au contexte : les résultats obtenus sur un site ou un corpus de plans se généralisent difficilement.

## 4. Les modèles numériques et immersifs

Un quatrième strate, enfin, concerne la production d'environnements d'exposition opérationnels par la numérisation 3D, la photogrammétrie, la réalité virtuelle, la réalité augmentée, la réalité mixte ou les jumeaux numériques, non plus seulement à des fins documentaires mais comme dispositifs d'exposition à part entière (Carvajal, Morita et Bilmes 2020 ; Barszcz et al. 2023 ; Yan 2026). Les travaux fondateurs sur la réalité virtuelle et augmentée avaient déjà montré que les musées pouvaient construire efficacement des expositions VR et AR à partir de modèles 3D d'artefacts et de gabarits de visualisation réutilisables (Wojciechowski et al. 2004). Des plateformes plus récentes ajoutent des standards sémantiques tels que CIDOC-CRM et EDM, des liaisons narratives et une écriture collaborative, rapprochant la modélisation d'exposition de l'ingénierie des connaissances plutôt que du simple assemblage de scènes ; c'est le cas de la plateforme *Invisible Museum*, qui relie curation sémantique, modélisation narrative et publication web/VR au sein d'une même chaîne d'autorat (Zidianakis et al. 2021).

Le web de données liées (Linked Open Data) occupe une place centrale dans ce déplacement. Des outils d'autorat d'exposition virtuelle utilisent des graphes de connaissances afin que les utilisateurs puissent retrouver des œuvres distribuées et générer automatiquement des expositions, bien que SPARQL demeure un obstacle majeur pour les utilisateurs non techniques (Monaco et al. 2022). Les flux de diffusion exportent de plus en plus des données RDF/XML vers des agrégateurs tels que SearchCulture et Europeana et publient les actifs 3D sous forme de jeux de données ouverts, reliant ainsi la modélisation d'exposition à une infrastructure scientifique durable (Xhako et al. 2024).

## 5. Le tournant vers l'exposition comme événement complexe et la question du display

Un dernier ensemble de travaux, plus récent, cherche explicitement à combler l'écart identifié plus haut entre les modèles de collection et les modèles narratifs, en proposant de traiter l'exposition elle-même comme un événement complexe plutôt que comme un simple contenant d'objets. Les travaux de Nicola Carboni portent sur l'usage du CIDOC-CRM pour modéliser les expositions de cette manière (Carboni 2025) ; testé sur deux grands ensembles de données, le catalogue Artl@s BasArt et l'index des expositions du MoMA, ce modèle couvre des dimensions telles que la durée, l'étendue spatiale, les relations partitives entre événements, la participation, la contingence et les sources de connaissance. Des initiatives complémentaires, comme celle de Rodwell et Whitelaw (2024), étudient l'impact positif de l'usage du CIDOC-CRM dans la fabrication d'une exposition numérique, permettant de produire des données réutilisables et durables au-delà de l'interface finale.

L'extension du CIDOC-CRM connue sous le nom d'*Art and Architectural Argumentation Ontology* (AAAo) tente pour sa part de modéliser ce que George Bruseker appelle les données historiques brutes : des informations contestées, incomplètes et issues de sources multiples, qui ne peuvent être réduites à de simples triplets sans perdre leur sens. Cette question est cruciale pour la documentation d'expositions, où l'essentiel réside souvent précisément dans ce qui demeure incertain ou controversé. La littérature récente sur la modélisation des relations topologiques ou méréologiques en environnement CRM va dans le même sens, en cherchant à mieux représenter les structures spatiales complexes (Guillem et al. 2023, 2025). Elle confirme que le besoin de formaliser les relations de voisinage, d'inclusion, de contact ou de partie-tout est désormais reconnu, mais ces avancées restent dispersées et jamais orientées spécifiquement vers les accrochages d'exposition.

## Synthèse : ce que ce paysage révèle

L'ensemble de ce corpus dessine une carte assez nette du champ. Un socle stable existe pour l'interopérabilité événementielle des données patrimoniales, centré sur le CIDOC-CRM. Une couche opérationnelle de publication relie ce socle à des pipelines de données liées, des profils d'agrégation, un alignement des autorités et une infrastructure de portail. Une couche narrative et curatoriale émergente propose des ontologies pour l'argument curatorial, la structure fabula-narration et l'exposition comme discours. Une couche spatiale-comportementale, plus computationnelle, optimise la disposition et mesure l'expérience du visiteur. Une couche immersive-numérique, enfin, produit des environnements d'exposition virtuels ou hybrides à partir de la 3D et des jumeaux numériques.

Ce panorama permet de situer précisément ce qu'apporte une thèse portant sur la documentation des expositions et des œuvres variables ou éphémères, dont *Feux pâles* constitue le cas d'étude continu. Trois constats structurent cette mise en perspective.

Premièrement, la quasi-totalité des modèles recensés, y compris les plus ambitieux sur le plan narratif ou discursif (Curate, OntoExhibit, la Narrative Ontology), continuent de traiter la documentation comme une opération de représentation d'un état plus ou moins stabilisé : ils cherchent à décrire ce que fut ou ce qu'est une exposition, non à rendre compte de l'incertitude, de la variabilité ou de la reconfiguration comme conditions mêmes de l'existence de certaines œuvres. Or c'est précisément cette incertitude documentaire, façonnée par la pratique de la conservation-restauration, qui constitue un point de départ épistémologique possible pour repenser la documentation : celle-ci n'est alors plus un simple support d'information sur l'œuvre, mais un acte interprétatif situé, qui participe de la construction même de ce que l'œuvre est à un moment donné.

Deuxièmement, la littérature confirme que les systèmes de gestion de collection, qu'ils s'appuient sur le CIDOC-CRM, sur EDM ou sur des profils dérivés, demeurent structurellement pensés pour des objets stables et discrets. Les travaux d'implémentation à grande échelle (ArCo, Rijksmuseum, Smithsonian) le montrent bien : ils séparent l'objet physique du substitut numérique et des structures d'agrégation, mais ne modélisent pas en profondeur la logique de l'exposition, encore moins ses reconfigurations successives. Cette limite structurelle, plus qu'un simple manque de granularité, est ce qui rend nécessaire une modélisation alternative pour les œuvres qui échappent aux systèmes de gestion de collection existants.

Troisièmement, seule une frange restreinte et récente du corpus, celle qui traite l'exposition comme un événement complexe (Carboni), qui formalise les données historiques contestées ou incomplètes (AAAo), ou qui explore les relations topologiques et méréologiques en environnement CRM, s'approche du terrain que doit couvrir une thèse de ce type. Ces travaux confirment la pertinence du recours au CIDOC-CRM et au LRMoo comme socles à étendre plutôt qu'à remplacer, tout en montrant que ces avancées restent dispersées et jamais articulées à une réflexion venue de la conservation-restauration elle-même sur le statut de la documentation.

C'est cette articulation, entre l'épistémologie de la conservation-restauration et la modélisation sémantique, qui reste absente du paysage recensé ici. Il faut souligner, pour finir, que le recours à ces ontologies existantes ne dispense que rarement d'un travail de modélisation propre. Si elles fournissent un cadre conceptuel commun, leur adaptation aux besoins d'un projet particulier exige des choix d'interprétation et de conceptualisation. Dans le cas des expositions historiques, l'articulation entre relations topologiques et données historiques incertaines relève ainsi autant de la modélisation formelle que de la démarche historienne, qui articule ces enjeux à travers sa propre problématique de recherche.

## Bibliographie

Alexiev, V. « Museum Linked Open Data: Ontologies, Datasets, Projects ». 2018. https://doi.org/10.55630/dipp.2018.8.1

Aouad, A., A. Deshmane, et V. Martínez-de-Albéniz. « Designing Layouts for Sequential Experiences: Application to Cultural Institutions ». *Management Science*, 2025. https://doi.org/10.1287/mnsc.2022.02024

« Art and Architectural Argumentation Ontology (AAAo) », s. d.

Barszcz, M., K. Dziedzic, M. Skublewska-Paszkowska, et P. Powroźnik. « 3D scanning digital models for virtual museums ». *Computer Animation and Virtual Worlds* 34, 2023. https://doi.org/10.1002/cav.2154

Bruseker, G. et al. Travaux sur le CIDOC-CRM et l'interopérabilité muséale, 2017.

Carboni, N. Travaux sur CIDOC-CRM et la modélisation des expositions comme événements complexes, 2025.

Carriero, V. A. et al. « ArCo: the Italian Cultural Heritage Knowledge Graph ». *International Workshop on the Semantic Web*, 2019, p. 36-52. https://doi.org/10.1007/978-3-030-30796-7_3

Carvajal, D., M. M. Morita, et G. Bilmes. « Virtual museums. Captured reality and 3D modeling ». *Journal of Cultural Heritage* 45, 2020, p. 234-239. https://doi.org/10.1016/j.culher.2020.04.013

Chen, X., J. Chen, W. Pu, G. Fan, et Z. Lu. « Modeling Spatial-Behavioral Dynamics in Cultural Exhibition Architecture Through Mapping and Regression Analysis ». *Buildings*, 2025. https://doi.org/10.3390/buildings15173049

Chupryna, Y. « Modeling of microhistory in a narrative exposition ». *Text and Image: Essential Problems in Art History*, 2022. https://doi.org/10.17721/2519-4801.2022.1.10

Dijkshoorn, C. et al. « The Rijksmuseum collection as Linked Data ». *Semantic Web* 9, 2018, p. 221-230. https://doi.org/10.3233/SW-170257

Doerr, M. « The CIDOC Conceptual Reference Module: An Ontological Approach to Semantic Interoperability of Metadata ». *AI Magazine* 24, 2003, p. 75-92. https://doi.org/10.1609/AIMAG.V24I3.1720

Guillem, A. et al. Travaux sur la modélisation des relations topologiques et méréologiques en environnement CRM, 2023 et 2025.

Hyvönen, E. « Publishing and Using Cultural Heritage Linked Data on the Semantic Web ». *Synthesis Lectures on the Semantic Web*, 2012. https://doi.org/10.2200/s00452ed1v01y201210wbe003

Lei, L. « The artificial intelligence technology for immersion experience and space design in museum exhibition ». *Scientific Reports* 15, 2025. https://doi.org/10.1038/s41598-025-13408-2

Love, A. R., P. Villeneuve, J. Burns, B. Wessel, et X. Jiang. « Dimensions of Curation Competing Values Model ». *Curator: The Museum Journal*, 2021. https://doi.org/10.1111/cura.12442

Meghini, C., V. Lenzi, et D. Metilli. « Representing narratives in digital libraries: The narrative ontology ». *Semantic Web* 12, 2021, p. 241-264. https://doi.org/10.3233/sw-200421

Monaco, D., M. A. Pellegrino, V. Scarano, et L. Vicidomini. « Linked open data in authoring virtual exhibitions ». *Journal of Cultural Heritage*, 2022. https://doi.org/10.1016/j.culher.2021.11.002

Morsi, N., S. Kamel, H. Sabry, et A. Assem. « Computational design for architectural space planning of commercial exhibitions ». *Architecture and Planning Journal*, 2023. https://doi.org/10.54729/2789-8547.1206

Mulholland, P., A. Wolff, et T. D. Collins. « Curate and Storyspace: An Ontology and Web-Based Environment for Describing Curatorial Narratives ». *Extended Semantic Web Conference*, 2012, p. 748-762. https://doi.org/10.1007/978-3-642-30284-8_57

Rodríguez-Ortega, N. « Contours of Knowledge: Epistemological Implications of Semantic Models in the Representation of the Art Exhibition Domain through the Lens of the OntoExhibit Ontology ». *Život umjetnosti*, 2024. https://doi.org/10.31664/zu.2024.114.06

Rodwell, J., et M. Whitelaw. Travaux sur l'usage du CIDOC-CRM dans la fabrication d'expositions numériques, 2024.

« Swiss Art Research Infrastructure (SARI) », s. d.

Szekely, P. A. et al. « Connecting the Smithsonian American Art Museum to the Linked Data Cloud ». *Extended Semantic Web Conference*, 2013, p. 593-607. https://doi.org/10.1007/978-3-642-38288-8_40

Tang, Q., L. Zheng, Y. Chen, L. Yan, et J. Chen. « Artificial intelligence empowering museum space layout design: Insights from China ». *PLOS ONE* 19, 2024. https://doi.org/10.1371/journal.pone.0310594

Tian, C., S. You, et W. Wang. « GazeNet: Neural Network-Based Visual Attention Simulation for Museum Exhibition Optimization ». *IEEE Access* 14, 2026, p. 15331-15346. https://doi.org/10.1109/access.2026.3654647

Wang, X., M. Yang, W. Li, L. Yuan, Q. Ren, Q. Xie, et R. Liu. « Natural movement: Measuring optimal pathway configuration of museum layout ». *Frontiers of Architectural Research*, 2025. https://doi.org/10.1016/j.foar.2025.03.001

Wojciechowski, R., K. Walczak, M. White, et W. Cellary. « Building Virtual and Augmented Reality museum exhibitions ». 2004, p. 135-144. https://doi.org/10.1145/985040.985060

Xhako, A., A. Katzourakis, T. Evdaimon, E. Zidianakis, N. Partarakis, et X. Zabulis. « Reviving Antiquity in the Digital Era: Digitization, Semantic Curation, and VR Exhibition of Contemporary Dresses ». *Computers* 13, 2024, p. 57. https://doi.org/10.3390/computers13030057

Yan, X. « Intelligent Design and Optimization of Museum Exhibition Spaces with Digital Twin Technology ». *Proceedings of the 2026 3rd International Conference on Informatics Education and Computer Technology Applications*, 2026. https://doi.org/10.1145/3802133.3802238

Zidianakis, E., N. Partarakis, S. Ntoa, A. Dimopoulos, S. Kopidaki, A. Ntagianta, E. Ntafotis, et al. « The Invisible Museum: A User-Centric Platform for Creating Virtual 3D Exhibitions with VR Support ». *Electronics*, 2021. https://doi.org/10.3390/electronics10030363