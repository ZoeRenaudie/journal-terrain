---
title: "Modelling the activation"
date: 2026-07-17
status: published
tags:
  - case:feux-pales
  - type:modelling
  - ontology:lmroo
  - ontology:cidoc-crm
  - ontology:linkedart
  - lang:fr
description: ""
---

# Modelisation de l'activation

---

**English** · [Français](#français)

---

## English

---

## Français

## Objectif

Considérant les expositions comme issu des Mondes de l'art de Nelson Goodman (*Languages of Art*, 1968) je cherche à modéliser le fait que l'exposition Feux Pâles à plusieurs activations pour avoir un lien concrèt entre le premier accrochage et les activations ultérieures type interprétation (Mamco), Étude de conservation 2017, Un cabinet d'amateur, et pourquoi pas un souvenir...

L’objectif principal était de capturer les relations complexes entre :
- les **activités** (expositions, productions, créations),
- les **acteurs** (artistes, commissaires, archivistes),
- les **objets** (œuvres, documents, archives),
- les **concepts** (comme l’œuvre *Feux Pâles* elle-même, considérée comme une entité persistante),
tout en respectant les contraintes ontologiques du CIDOC CRM et en intégrant des extensions spécifiques.

## Hypothèses et question d'enquête

Comment représenter une *œuvre qui transcende ses manifestations physiques ?
Comment lier des itérations d’expositions entre elles (transformation, inspiration, réinterprétation) ?
Comment intégrer des sources archivistiques (catalogues, documents) comme éléments actifs de la documentation ?

## Réflexion

### CIDOC-CRM
#### 
L’exposition *Feux Pâles* (1990-1991) est à la fois :
- un événement (une activité temporelle, `E7_Activity`),
- un concept (une œuvre qui persiste dans la mémoire collective et les archives, au-delà de sa manifestation physique).

Le CIDOC CRM distingue clairement les **entités temporelles** (`E2_Temporal_Entity`, comme les événements) des **entités persistantes** (`E77_Persistent_Item`, comme les objets ou concepts). Or, *Feux Pâles* semble dépasser cette dichotomie. Elle existe via son activation par : sa documentation (via des catalogues, des archives), d’autres expositions (ex. *L’Ombre du jaseur*), tant qu’elle est mémorisée (par des acteurs, des documents, ou des œuvres dérivées).

Je choisis donc de représenter feux pâles sous deux formes : 

1. `E28_Conceptual_Object` pour *Feux Pâles* :
Cette classe permet de représenter des entités immatérielles (ex. une idée, un récit, une œuvre conceptuelle) qui existent sur plusieurs supports (documents, œuvres dérivées, et cidoc précise même la mémoire humaine !).
`E28` peut être lié à des activités via `P129_is_about` (pour dire qu’une exposition *traite* de ce concept) ou `P136_was_based_on` (pour dire qu’une exposition *s’inspire* de ce concept).

2. `E7_Activity` pour les expositions individuelles :
Chaque itération (*Feux Pâles* au CAPC, *L’Ombre du jaseur*) est modélisée comme une activité distincte, liée au concept *Feux Pâles* via `P129_is_about` ou `P136_was_based_on`.[^1]


3. Quid des autres activations ?

#### le lien d'interprétation
*L’Ombre du jaseur* est une "interprétation" de *Feux Pâles* d'après les termes de son curateur, Paul Bernard, mais :
- Elle n’est pas une transformation physique (qui relèverait de `E81_Transformation`, réservé aux `E18_Physical_Thing`),
- Elle n’est pas non plus une simple copie (qui relèverait de `E12_Production` avec un modèle).

Trois solutions sont envisagées :
1. `P136_was_based_on` (retenu) :
Cette propriété (issue de `E89_Propositional_Object`) permet de lier une activité à une source d’inspiration (ici, le concept *Feux Pâles*).

2. `E65_Creation` + `P136_was_based_on` :
Si *L’Ombre du jaseur* est considérée comme une **création** inspirée de *Feux Pâles*, on peut utiliser :
     ```turtle
     exhib:crea02 a crm:E65_Creation ;
         crm:P136_was_based_on exhib:exhib01 ;
         crm:P94_has_created exhib:exhib02 .
     ```
Qui permet de documenter le processus de création (qui, quand, comment). Mais `E65_Creation` est réservé aux œuvres conceptuelles (`E28`, `E89`), pas aux activités. 

3. `P16_used_specific_object` + archives :
Si *L’Ombre du jaseur* utilise des archives de *Feux Pâles* (ex. catalogues, documents), on peut lier les deux expositions via ces objets :
     ```turtle
     exhib:exhib02 crm:P16_used_specific_object exhib:trace0002 .
     exhib:trace0002 a crm:E78_Collection ;  # Archives du CAPC
         crm:P129i_is_subject_of exhib:exhib01 .  # Les archives traitent de exhib01
     ```
Mais ce n'est pas complètement compréhensible. Par contre il est tout à fait vrai que `P16_used_specific_object` à utiliser les archives du CAPC (`E78_Collection`), qui documentent *Feux Pâles*.

#### Accrochage

Les deux événements "expositions" ont des accrochages. Il y a dans cidoc, anciennement Collection : `E78_Curated_Holding` qui correspond à une collection d'objets physiques (ou conceptuels) assemblés et maintenus par un acteur (ex. un musée, un commissaire) pour un but spécifique (ex. une exposition, une archive).

- Propriétés clés :
  - `P46_is_composed_of` : Lie un `E78_Curated_Holding` à ses éléments constitutifs (ex. les œuvres exposées).
  - `P53_has_former_or_current_owner` : Lie le *Curated Holding* à son propriétaire (ex. le CAPC).
  - `P14_carried_out_by` : Lie le *Curated Holding* à l'acteur qui le gère (ex. le commissaire).

Pour Display, l'ontologiste David Valentine a préconisé de suivre linked Art et désigné l'accrochage comme un Set. Nous avions rejeté `E78 Curated Holding` car implique seulement des objets physiques. Or, une exposition peut être composée d’autres choses que des objets physiques. LinkedArt a introduit Set pour désigner tous les expôts ayant plusieurs set. A typé avec propriété thesaurus. Le mot Holding a une caractéristique très institutionnelle, de propriété donc de custody.

Faut-il une activité de creation ?

ex:curation_feux_pales a crm:E7_Activity ; # ou une creation ?
    rdfs:label "Sélection et commissariat des œuvres pour Feux pâles" ;
    crm:P14_carried_out_by ex:philippe_thomas ;
    crm:P14_carried_out_by ex:jean_louis_froment ;
    crm:P14_carried_out_by ex:sylvie_couderc ;
    crm:P14_carried_out_by ex:jean_marc_avrilla ;
    crm:P4_has_time-span "1990" ;
    crm:P3_has_note "Sélection de 96 biens culturels, impliquant 82 artistes/auteurs/artisans (dont 5 fictifs, 40 anonymes), couvrant la période 1520-1990" ;
    dcterms:source ex:rapport_conservation_1990 .

### Les autres types d'activations

Pour les oeuvres littéraires, FRBRoo avait introduit quatre niveaux de realisation à une oeuvre. Je propose d'utiliser LMRoo la derniere version pour déclarer tous les éléments de Feux Pâles.

### Question restante

Peut-on déclarer un catalogue en manifestation ET individuellement en Work afin de decliner de la même manière ? 

dans frbroo F15 Complex Work

This class comprises works that have other works as members. The members of a Complex Work may constitute alternatives to, derivatives of, or self-contained components of other members of the same Complex Work.

In practice, no clear line can be drawn between parallel and subsequent processes in the evolution of a work. One part may not be finished when another is already revised. An initially monolithic work may be taken up and evolve in pieces. The member relationship of Work is based on the conceptual relationship, and should not be confused with the internal structural parts of an individual expression. The fact that an expression may contain parts from other work(s) does not make the expressed work complex. For instance, an anthology for which only one version exists is not a complex work.

The boundaries of a Complex Work have nothing to do with the value of the intellectual achievement but only with the dominance of a concept. Thus, derivations such as translations are regarded as belonging to the same Complex Work, even though in addition they constitute an Individual Work themselves. In contrast, a Work that significantly takes up and merges concepts of other works so that it is no longer dominated by the initial concept is regarded as a new work. In cataloguing practice, detailed rules are established prescribing which kinds of derivation should be regarded as crossing the boundaries of a complex work. Adaptation and derivation graphs allow the recognition of distinct sub-units, i.e. a complex work contained in a larger complex work.

As a Complex Work can be taken up by any creator who acquires the spirit of its concept, it is never finished in an absolute sense.

Ņ'est plus dans LMROO

When the library community consolidated its standards into the IFLA Library Reference Model (IFLA LRM), it prioritized a higher-level, more compact hierarchy. The deprecation of F15 Complex Work comes down to three main architectural reasons:1. Radical Simplification of the HierarchyFRBRoo was frequently criticized for being too long and overly granular, containing 48 classes and 72 properties. LRMoo slashed this down to just 18 classes. To achieve this, the working group deprecated specialized subclasses of F1 Work (such as F14 Individual Work, F15 Complex Work, F16 Container Work, and F17 Aggregation Work).2. Redundancy and Inherited AttributesIn FRBRoo, a "Complex Work" was defined as a work that brings together other member works (like a series of novels, a multi-volume encyclopedia, or a work and its various adaptations).However, the semantic features, relationships, and properties of F15 Complex Work were essentially identical to its parent class, F1 Work. Because a general F1 Work is already fully capable of being realized in multiple expressions or having relationships with other works, maintaining a specific "Complex" subclass was structurally redundant.3. The Shift to General RelationshipsThe removal of the class does not mean LRMoo lost the ability to express complex relationships. Instead of sorting works into strict "individual" or "complex" pigeonholes at the class level, LRMoo handles complexity dynamically through properties.How to model it now: You simply use the base class F1 Work.If a work contains, adapts, or references another work, you express that "complexity" using general CIDOC CRM / LRMoo structural properties (such as R67 has part, R75 incorporates, or R20 text derivative of).


Tentativs : 

<figure>

```mermaid
graph LR
    classDef work fill:#fddc34,stroke:#333;
    classDef expression fill:#82c3ec,stroke:#333;
    classDef expression_E22 fill:#8b6815,stroke:#333;    
    classDef manifestation_E22 fill:#8b6815,stroke:#333; 
    classDef manifestation fill:#fddc34,stroke:#333;     
    classDef item_E22 fill:#8b6815,stroke:#333;
    classDef item fill:#fddc34,stroke:#333;
    classDef document fill:#e0f7fa,stroke:#333;
    classDef subgraphStyle fill:#f9f9f9,stroke:#333,stroke-width:3px,color:#333,font-weight:bold;

    subgraph W ["lmr:F1_Work"]
        direction LR
        feuxPales["Feux Pâles\n(crm:E28_Conceptual_Object)"]:::work
    end

    subgraph E ["F2_Expression"]
        expr1["Feux Pâles (CAPC, 1990-1991)\n(crm:E5_Event)"]:::expression
        expr2["L’Ombre du jaseur\n(crm:E5_Event)"]:::expression
        expr3["Cabinet d’amateur\n(crm:E22_Human-made_Objects)"]:::expression_E22
        expr4["Conservation Study\n(crm:E5_Event)"]:::expression
    end

    subgraph M ["F3_Manifestation"]
        manif1("Feux Pâles’s display (la:Set)"):::manifestation
        manif2("Feux Pâles’s catalog (crm:E31_Document)"):::manifestation
        manif3("Ombre du jaseur’s display (la:Set)"):::manifestation
        manif5("Study report (crm:E31_Document)"):::manifestation
        manif6("Edition 1/2 (la:Set)"):::manifestation
    end

    subgraph I ["F5_Item"]
        item1["® (barcode)\n(crm:E22_Human-Made_Object)"]:::item_E22
        item5["Signed Catalog\n(crm:E31_Document)"]:::item
        item6["Conservation report\n( crm:E73_Information_Object)"]:::item
        item7["Photography\n(crm:E22_Human-Made_Object)"]:::item_E22
    end

    style W fill:#f0f4f8,stroke:#333,stroke-width:4px,color:#000,font-weight:bold
    style E fill:#f0f4f8,stroke:#333,stroke-width:4px,color:#000,font-weight:bold
    style M fill:#f0f4f8,stroke:#333,stroke-width:4px,color:#000,font-weight:bold
    style I fill:#f0f4f8,stroke:#333,stroke-width:4px,color:#000,font-weight:bold

    feuxPales -->|lmroo:has_expression| expr1
    feuxPales -->|lmroo:has_expression| expr2
    feuxPales -->|lmroo:has_expression| expr3
    feuxPales -->|lmroo:has_expression| expr4

    expr1 -->|lmroo:has_manifestation| manif1
    expr1 -->|lmroo:has_manifestation| manif2
    expr2 -->|lmroo:has_manifestation| manif3
    expr4 -->|lmroo:has_manifestation| manif5
    expr3 -->|lmroo:has_manifestation| manif6

    manif1 -->|lmroo:has_item| item1
    manif2 -->|lmroo:has_item| item5
    manif3 -->|lmroo:has_item| item1
    manif5 -->|lmroo:has_item| item6
    manif6 -->|lmroo:has_item| item7    

    linkStyle default stroke-width:3px;
```
<figcaption>{'@prefix crm: <http://www.cidoc-crm.org/cidoc-crm/>'}</figcaption>
<figcaption>{'@prefix la: <https://linked.art/ns/terms/>'}</figcaption>
<figcaption>{'@prefix la: <http://iflastandards.info/ns/lrm/lrmoo/>'}</figcaption>
</figure>

```mermaid
graph LR
    classDef work fill:#fddc34,stroke:#333;
    classDef expression fill:#82c3ec,stroke:#333;
    classDef expression_E22 fill:#8b6815,stroke:#333;    
    classDef manifestation_E22 fill:#8b6815,stroke:#333; 
    classDef manifestation fill:#fddc34,stroke:#333;     
    classDef item_E22 fill:#8b6815,stroke:#333;
    classDef item fill:#fddc34,stroke:#333;
    classDef document fill:#e0f7fa,stroke:#333;
    classDef subgraphStyle fill:#f9f9f9,stroke:#333,stroke-width:3px,color:#333,font-weight:bold;

    subgraph W ["lmr:F1_Work"]
        direction LR
        feuxPales["Feux Pâles\n(crm:E28_Conceptual_Object)"]:::work
    end

    subgraph E ["F2_Expression"]
        expr1["Feux Pâles (CAPC, 1990-1991)\n(crm:E7_Activity)"]:::expression
        expr2["L’Ombre du jaseur\n(crm:E7_Activity)"]:::expression
        expr3["Cabinet d’amateur\n(crm:E22_Human-made_Objects)"]:::expression_E22
        expr4["Conservation Study\n(crm:E7_Activity)"]:::expression
    end

    subgraph M ["F3_Manifestation"]
        manif1("Feux Pâles’s display (la:Set)"):::manifestation
        manif2("Feux Pâles’s catalog (crm:E31_Document)"):::manifestation
        manif3("Ombre du jaseur’s display (la:Set)"):::manifestation
        manif5("Study report (crm:E31_Document)"):::manifestation
        manif6("Edition 1/2 (la:Set)"):::manifestation
    end

    subgraph I ["F5_Item"]
        item1["® (barcode)\n(crm:E22_Human-Made_Object)"]:::item_E22
        item5["Signed Catalog\n(crm:E31_Document)"]:::item
        item6["Conservation report\n( crm:E73_Information_Object)"]:::item
        item7["Photography\n(crm:E22_Human-Made_Object)"]:::item_E22
    end

    style W fill:#f0f4f8,stroke:#333,stroke-width:4px,color:#000,font-weight:bold
    style E fill:#f0f4f8,stroke:#333,stroke-width:4px,color:#000,font-weight:bold
    style M fill:#f0f4f8,stroke:#333,stroke-width:4px,color:#000,font-weight:bold
    style I fill:#f0f4f8,stroke:#333,stroke-width:4px,color:#000,font-weight:bold

    feuxPales -->|lmroo:has_expression| expr1
    feuxPales -->|lmroo:has_expression| expr2
    feuxPales -->|lmroo:has_expression| expr3
    feuxPales -->|lmroo:has_expression| expr4

    expr1 -->|lmroo:has_manifestation| manif1
    expr1 -->|lmroo:has_manifestation| manif2
    expr2 -->|lmroo:has_manifestation| manif3
    expr4 -->|lmroo:has_manifestation| manif5
    expr3 -->|lmroo:has_manifestation| manif6

    manif1 -->|lmroo:has_item| item1
    manif2 -->|lmroo:has_item| item5
    manif3 -->|lmroo:has_item| item1
    manif5 -->|lmroo:has_item| item6
    manif6 -->|lmroo:has_item| item7    

    linkStyle default stroke-width:3px;
```



```mermaid
graph LR
    classDef work fill:#fddc34,stroke:#333;
    classDef expression fill:#82c3ec,stroke:#333;
    classDef manifestation fill:#b2dfdb,stroke:#333;     
    classDef item fill:#ffcc80,stroke:#333;
    
        direction LR
        feuxPales["Feux Pâles\n(F1_Work)"]:::work

        expr1["Scénographie Feux Pâles (1990)\n(F2_Expression)"]:::expression
        expr2["Concept L’Ombre du jaseur\n(F2_Expression)"]:::expression
        expr3["Plan/Structure Cabinet d’amateur\n(F2_Expression)"]:::expression
        expr4["Texte du Conservation Study\n(F2_Expression)"]:::expression

        manif1("Spécifications du Display Feux Pâles\n(F3_Manifestation)"):::manifestation
        manif2("Maquette/ISBN du Catalogue\n(F3_Manifestation)"):::manifestation
        manif3("Spécifications du Display de l'Ombre\n(F3_Manifestation)"):::manifestation
        manif5("Modèle du Rapport d'étude\n(F3_Manifestation)"):::manifestation
        manif6("Spécifications de l'Édition 1/2\n(F3_Manifestation)"):::manifestation

        item1["L'Installation physique dans la salle\n(F5_Item)"]:::item
        item5["L'Exemplaire physique signé\n(F5_Item)"]:::item
        item6["Le document papier du rapport\n(F5_Item)"]:::item
        item7["Le tirage photographique physique\n(F5_Item)"]:::item

    feuxPales -->|lrmoo:R2_is_realized_by| expr1
    feuxPales -->|lrmoo:R2_is_realized_by| expr2
    feuxPales -->|lrmoo:R2_is_realized_by| expr3
    feuxPales -->|lrmoo:R2_is_realized_by| expr4

    expr1 -->|lrmoo:R4_is_embodied_in| manif1
    expr1 -->|lrmoo:R4_is_embodied_in| manif2
    expr2 -->|lrmoo:R4_is_embodied_in| manif3
    expr4 -->|lrmoo:R4_is_embodied_in| manif5
    expr3 -->|lrmoo:R4_is_embodied_in| manif6

    manif1 -->|lrmoo:R7_has_exemplar| item1
    manif2 -->|lrmoo:R7_has_exemplar| item5
    manif3 -->|lrmoo:R7_has_exemplar| item1
    manif5 -->|lrmoo:R7_has_exemplar| item6
    manif6 -->|lrmoo:R7_has_exemplar| item7    

    linkStyle default stroke-width:3px;

```

```mermaid
graph LR
    classDef work fill:#fddc34,stroke:#333;
    classDef expression fill:#82c3ec,stroke:#333;
    classDef manifestation fill:#b2dfdb,stroke:#333;     
    classDef item fill:#ffcc80,stroke:#333;
    classDef event fill:#ea9999,stroke:#333;
    
    subgraph W ["F1_Work (Concept Global)"]
        feuxPales["Feux Pâles\n(F1_Work)"]:::work
    end

    subgraph E ["F2_Expression (Concepts Scénographiques)"]
        expr1["Scénographie Feux Pâles (1990)\n(F2_Expression)"]:::expression
        expr2["Concept L’Ombre du jaseur\n(F2_Expression)"]:::expression
        expr3["Plan/Structure Cabinet d’amateur\n(F2_Expression)"]:::expression
        expr4["Texte du Conservation Study\n(F2_Expression)"]:::expression
    end

    subgraph M ["F3_Manifestation (Modèles / Spécifications)"]
        manif1("Spécifications du Display Feux Pâles\n(F3_Manifestation)"):::manifestation
        manif2("Maquette/ISBN du Catalogue\n(F3_Manifestation)"):::manifestation
        manif3("Spécifications du Display de l'Ombre\n(F3_Manifestation)"):::manifestation
        manif5("Modèle du Rapport d'étude\n(F3_Manifestation)"):::manifestation
        manif6("Spécifications de l'Édition 1/2\n(F3_Manifestation)"):::manifestation
    end

    subgraph I ["F5_Item (Objets Physiques / Matériels)"]
        item1["L'Installation physique dans la salle\n(F5_Item / crm:E22)"]:::item
        item5["L'Exemplaire physique signé\n(F5_Item / crm:E22)"]:::item
        item6["Le document papier du rapport\n(F5_Item / crm:E22)"]:::item
        item7["Le tirage photographique physique\n(F5_Item / crm:E22)"]:::item
    end

    subgraph EV ["crm:E7_Activity / E5_Event (Événements Réels)"]
        expo1["Exposition Feux Pâles\n(CAPC, 1990-1991 / crm:E7)"]:::event
        expo2["Exposition L'Ombre du jaseur\n(crm:E7)"]:::event
        action4["Rédaction de l'étude\n(crm:E65_Creation)"]:::event
    end

    %% Liens LRMoo de base
    feuxPales -->|lrmoo:R2_is_realized_by| expr1
    feuxPales -->|lrmoo:R2_is_realized_by| expr2
    feuxPales -->|lrmoo:R2_is_realized_by| expr3
    feuxPales -->|lrmoo:R2_is_realized_by| expr4

    expr1 -->|lrmoo:R4_is_embodied_in| manif1
    expr1 -->|lrmoo:R4_is_embodied_in| manif2
    expr2 -->|lrmoo:R4_is_embodied_in| manif3
    expr4 -->|lrmoo:R4_is_embodied_in| manif5
    expr3 -->|lrmoo:R4_is_embodied_in| manif6

    manif1 -->|lrmoo:R7_has_exemplar| item1
    manif2 -->|lrmoo:R7_has_exemplar| item5
    manif3 -->|lrmoo:R7_has_exemplar| item1
    manif5 -->|lrmoo:R7_has_exemplar| item6
    manif6 -->|lrmoo:R7_has_exemplar| item7    

    %% Liens avec les Événements physiques (CIDOC CRM)
    expo1 -->|crm:P16_used_specific_object| expr1
    expo1 -->|crm:P12_occurred_in_the_presence_of| item1
    
    expo2 -->|crm:P16_used_specific_object| expr2
    expo2 -->|crm:P12_occurred_in_the_presence_of| item1
    
    action4 -->|crm:P94_has_created| expr4

    linkStyle default stroke-width:3px;

```

```mermaid
graph LR
    classDef work fill:#fddc34,stroke:#333;
    classDef expression fill:#82c3ec,stroke:#333;
    classDef manifestation fill:#b2dfdb,stroke:#333;     
    classDef item fill:#ffcc80,stroke:#333;
    classDef event fill:#ea9999,stroke:#333;
    classDef external fill:#d1c4e9,stroke:#333;
    
    subgraph I ["F5_Item (Objets Physiques / Matériels)"]
        item1["L'Installation physique dans la salle\n(F5_Item / crm:E22)"]:::item
        
        %% Nouvel élément physique exposé au sein du display
        item_art["Objet physique de l'œuvre exposée\n(F5_Item / crm:E22)"]:::external
    end

    subgraph E_Art ["F2_Expression (Concept de l'œuvre exposée)"]
        expr_art["Contenu visuel/intellectuel de l'œuvre\n(F2_Expression)"]:::external
    end

    %% Option 1 : Lien d'inclusion physique (Objet dans Objet)
    item1 -->|crm:P46_is_composed_of| item_art

    %% Option 2 : Lien conceptuel (L'installation porte le contenu de l'œuvre)
    item1 -->|crm:P128_carries| expr_art

    linkStyle default stroke-width:3px;
```

la réparatition entre ce qui serait une expression, manifestation, item est discutable. Pour moi le catalogue serait soit une expression soit une manifestation. Dans les définitions de FRBR les items étaient plutôt destinés aux exemplaires bibliographiques qui pouvaient porter des marques de propriétaires, des annotations, etc. Je n’ai pas en tête la définition donnée par LRM. Mais ce dispositif était initialement pour les œuvres multiples et tu pourrais en avoir beosin pour les catalogues justement.

## Choix actuel
```turtle
@prefix crm: <http://www.cidoc-crm.org/cidoc-crm/> .
@prefix la: <https://linked.art/ns/terms/> .
@prefix lrmoo: <http://iflastandards.info/ns/lrm/lrmoo/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

# --- F1: Work (Conceptual Object) ---
:Feux_Pales_Work rdf:type crm:E28_Conceptual_Object ;
    rdfs:label "Feux Pâles" .

# --- F2: Expressions ---
:Feux_Pales_Expression_CAPC rdf:type crm:E5_Event ;
    rdfs:label "Feux Pâles (CAPC, 1990-1991)" ;
    lrmoo:has_expression :Feux_Pales_Work .

:Ombre_du_jaseur_Expression rdf:type crm:E5_Event ;
    rdfs:label "L'Ombre du jaseur" ;
    lrmoo:has_expression :Feux_Pales_Work .

:Cabinet_d_amateur_Expression rdf:type crm:E22_Human_Made_Object ;
    rdfs:label "Cabinet d'amateur" ;
    lrmoo:has_expression :Feux_Pales_Work .

:Conservation_Study_Expression rdf:type crm:E5_Event ;
    rdfs:label "Conservation Study" ;
    lrmoo:has_expression :Feux_Pales_Work .

# --- F3: Manifestations ---
:Feux_Pales_Display_Manifest rdf:type crm:E76_Collection ; # Supposé E76 pour "la:Set" si pas défini, ou E22
    rdfs:label "Feux Pâles's display" ;
    lrmoo:has_manifestation :Feux_Pales_Expression_CAPC .

:Feux_Pales_Catalog_Manifest rdf:type crm:E31_Document ;
    rdfs:label "Feux Pâles's catalog" ;
    lrmoo:has_manifestation :Feux_Pales_Expression_CAPC .

:Ombre_du_jaseur_Display_Manifest rdf:type crm:E76_Collection ;
    rdfs:label "Ombre du jaseur's display" ;
    lrmoo:has_manifestation :Ombre_du_jaseur_Expression .

:Study_Report_Manifest rdf:type crm:E31_Document ;
    rdfs:label "Study report" ;
    lrmoo:has_manifestation :Conservation_Study_Expression .

:Edition_1_2_Manifest rdf:type crm:E22_Human_Made_Object ;
    rdfs:label "Edition 1/2" ;
    lrmoo:has_manifestation :Cabinet_d_amateur_Expression .

# --- F5: Items ---
:Item_Barcode rdf:type crm:E22_Human_Made_Object ;
    rdfs:label "® (barcode)" ;
    lrmoo:has_item :Feux_Pales_Display_Manifest ;
    lrmoo:has_item :Ombre_du_jaseur_Display_Manifest .

:Item_Catalog rdf:type crm:E31_Document ;
    rdfs:label "Catalogue" ;
    lrmoo:has_item :Feux_Pales_Catalog_Manifest .

:Item_Report rdf:type crm:E73_Information_Object ;
    rdfs:label "Conservation report" ;
    lrmoo:has_item :Study_Report_Manifest .

:Item_Display rdf:type crm:E22_Human_Made_Object ;
    rdfs:label "Display" ;
    lrmoo:has_item :Edition_1_2_Manifest .

[^1]: Dans [Display](#REFlien), les expositions sont traitées comme des événements, des activités qui ont le type AAT Activité d’exposition. Toujours le patron utilisé par LinkedArt. `E7 type` avec AAT le terme « activité d’exposition »