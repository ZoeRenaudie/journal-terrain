

Pour dire que l'installation physique présente dans la salle contient ou montre des œuvres, vous devez utiliser des propriétés du CIDOC CRM adaptées aux objets matériels.
Dans votre graphe, l'installation en salle est un F5_Item (qui hérite de crm:E22_Human-Made_Object). C'est un objet physique tridimensionnel. Pour lier cet objet physique aux œuvres qu'il incorpore ou expose, vous avez deux approches selon la précision sémantique recherchée :
## Option 1 : L'approche physique (Recommandée pour une installation composite)
Si l'installation physique dans la salle est un assemblage qui intègre physiquement d'autres objets (par exemple, des moniteurs vidéo, des peintures ou des sculptures qui composent le display), on utilise la relation d'inclusion physique :

* Propriété : crm:P46_is_composed_of (contient / est composé de)
* Cible : Les autres F5_Item (les objets physiques des œuvres exposées).

## Option 2 : L'approche conceptuelle (L'objet physique porte l'œuvre)
Si vous voulez dire que l'installation physique est le support ou le véhicule d'expression d'une œuvre intellectuelle (sans passer par le sous-assemblage d'objets), le CIDOC CRM utilise la notion de "portage de texte ou de concept" :

* Propriété : crm:P128_carries (porte)
* Cible : L'instance de F2_Expression de l'œuvre exposée.

(Note : En sémantique pure, un objet physique porte une Expression (F2), et cette Expression est réalisée par un Work (F1).)
------------------------------
## Mise à jour du graphe Mermaid
Voici comment intégrer ces deux cas de figure dans votre structure. J'ai ajouté une boîte "Œuvre exposée (ex: Peinture ou Sculpture)" pour illustrer visuellement la connexion :

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

## En résumé :

* Utilisez crm:P46_is_composed_of si vous décrivez la scénographie matérielle (l'installation contient physiquement la sculpture X ou la peinture Y).
* Utilisez crm:P128_carries si l'installation dans son ensemble matérialise le concept de l'œuvre exposée.

Pour aller plus loin, souhaitez-vous que nous liions ces œuvres exposées à leurs artistes créateurs (crm:E39_Actor) via la propriété de création ?

The class F15 Complex Work disappeared in the transition to LRMoo because the model was heavily streamlined to reduce complexity and remove redundant subclasses. [1] 
When the library community consolidated its standards into the IFLA Library Reference Model (IFLA LRM), it prioritized a higher-level, more compact hierarchy. The deprecation of F15 Complex Work comes down to three main architectural reasons: [1, 2] 
## 1. Radical Simplification of the Hierarchy
FRBRoo was frequently criticized for being too long and overly granular, containing 48 classes and 72 properties. LRMoo slashed this down to just 18 classes. To achieve this, the working group deprecated specialized subclasses of F1 Work (such as F14 Individual Work, F15 Complex Work, F16 Container Work, and F17 Aggregation Work). [1, 3] 
## 2. Redundancy and Inherited Attributes
In FRBRoo, a "Complex Work" was defined as a work that brings together other member works (like a series of novels, a multi-volume encyclopedia, or a work and its various adaptations).
However, the semantic features, relationships, and properties of F15 Complex Work were essentially identical to its parent class, F1 Work. Because a general F1 Work is already fully capable of being realized in multiple expressions or having relationships with other works, maintaining a specific "Complex" subclass was structurally redundant. [1, 4, 5] 
## 3. The Shift to General Relationships
The removal of the class does not mean LRMoo lost the ability to express complex relationships. Instead of sorting works into strict "individual" or "complex" pigeonholes at the class level, LRMoo handles complexity dynamically through properties. [1, 6] 

* How to model it now: You simply use the base class F1 Work.
* If a work contains, adapts, or references another work, you express that "complexity" using general CIDOC CRM / LRMoo structural properties (such as R67 has part, R75 incorporates, or R20 text derivative of). [3, 6] 

By eliminating F15, data creators no longer have to make arbitrary boundaries or argue over exactly when a changing, evolving work transitions from an "Individual Work" into a "Complex Work". [7] 
Are you currently restructuring a database or taxonomy from FRBRoo to LRMoo? If so, I can provide an example of how to map your existing F15 instances into the new format.

[1] [https://repository.ifla.org](https://repository.ifla.org/bitstream/123456789/2217/1/144-riva-en-paper.pdf)
[2] [https://repository.ifla.org](https://repository.ifla.org/items/94aedb49-2d6e-4a6d-9974-f33abb7e3c0e/full)
[3] [https://cidoc-crm.org](https://cidoc-crm.org/sites/default/files/LRMoo_V1.0.pdf)
[4] [https://www.semantic-web-journal.net](https://www.semantic-web-journal.net/system/files/swj3230.pdf)
[5] [https://cidoc-crm.org](https://cidoc-crm.org/sites/default/files/draft%20minutes%20-%2039th-32nd%20meeting%20v2.docx)
[6] [https://ontome.net](https://ontome.net/namespace/217)
[7] [https://www.slideshare.net](https://www.slideshare.net/slideshow/an-example-of-library-and-museum-cooperation-frb-roo/25915877)


Non, vous ne pouvez pas déclarer qu’une Manifestation est aussi un Work. Dans les modèles conceptuels du design de l'information (comme FRBR, IFLA LRM ou LRMoo), ces deux concepts appartiennent à des catégories abstraites totalement différentes et incompatibles.
Voici pourquoi et comment modéliser correctement votre situation :
## 1. La distinction fondamentale (WEMI)
Le modèle repose sur une hiérarchie stricte allant de l'idée abstraite vers l'objet physique :

* Work (Œuvre) : Le contenu intellectuel ou artistique pur (ex: le texte écrit par l'auteur). C'est une entité purement abstraite.
* Manifestation : Le support physique ou numérique qui porte ce contenu (ex: un livre de poche, un fichier PDF, un vinyle). C'est une entité qui relève du produit matériel ou éditorial.

Une chose ne peut pas être à la fois une idée abstraite et un produit d'édition.
## 2. Le cas des "Œuvres-Objets"
Votre question vient souvent d'un cas particulier : les œuvres d'art uniques (comme une peinture ou une sculpture).

* Dans ce contexte, l'œuvre (l'idée) et la manifestation (l'objet physique unique) semblent fusionner.
* Même dans ce cas, le modèle ne dit pas que la Manifestation est le Work. Il dit que le Work a été exprimé et manifesté dans un seul et unique objet physique.

## 3. Comment exprimer ce besoin correctement ?
Si une Manifestation spécifique devient le point de départ d'une nouvelle création intellectuelle (par exemple, si la mise en page d'un livre ou son design physique est étudié en tant qu'œuvre d'art), vous devez utiliser des propriétés de relation et non une équivalence.

* La solution : Créez une instance de Work et une instance de Manifestation.
* Le lien : Connectez-les via la propriété appropriée de LRMoo : F1 Work has manifestation $\rightarrow$ F3 Manifestation.

Cherchez-vous à modéliser un cas particulier comme un livre d'artiste, un manuscrit unique ou une base de données ? Si vous me décrivez votre document, je peux vous donner le schéma exact des relations à utiliser. [1] 

[1] [https://laws-lois.justice.gc.ca](https://laws-lois.justice.gc.ca/fra/lois/c-46/page-216.html)

Votre graphe montre une excellente compréhension de l'architecture WEMI (Work, Expression, Manifestation, Item) appliquée à la muséologie et à l'art contemporain. Cependant, le modèle LRMoo (et son couplage avec le CIDOC CRM) impose des règles d'héritage strictes.
Plusieurs déclarations de classes entre parenthèses provoquent un conflit sémantique majeur : une entité ne peut pas être à la fois une entité de contenu (LRMoo) et un Événement ou un Objet Physique (CIDOC CRM).
Voici une analyse des corrections indispensables à appliquer pour rendre votre modèle valide.
## 1. Le problème des Expressions déclarées comme Événements (crm:E5_Event)
Dans LRMoo, une Expression (F2) est un objet informationnel immatériel. Un Événement (E5) est une action ancrée dans l'espace et le temps.

* Le conflit : expr1, expr2 et expr4 ne peuvent pas être des crm:E5_Event. L'exposition physique (l'événement du vernissage à la fermeture) n'est pas l'Expression.
* La solution LRMoo : L'exposition en tant qu'événement historique est un crm:E7_Activity (ou E5). Cet événement réalise l'Expression. Pour l'Expression elle-même (F2), on parle du projet scénographique, du concept curatorial formalisé.

## 2. Le problème des Expressions/Manifestations déclarées comme Objets Physiques (crm:E22)

* expr3 (Cabinet d'amateur) : Déclaré comme crm:E22_Human-made_Object (Objet physique). Une Expression ne peut pas être physique. Si le "Cabinet d'amateur" est une installation physique, c'est un F5_Item ou un crm:E22. L'Expression (F2) correspond aux plans ou au concept de cette installation.
* manif1 et manif3 (Display / la:Set) : Une Manifestation (F3) dans LRMoo est l'ensemble des caractéristiques physiques définies par l'éditeur/curateur. Le montage physique final dans la salle est un F5_Item.

## 3. Les typologies exactes de LRMoo
Pour l'édition, les catalogues et les rapports :

* manif2 et manif5 : Le catalogue et le rapport d'étude ne sont pas des crm:E31_Document au niveau Manifestation. Ce sont des F3_Manifestation (le produit éditorial).
* item5 et item6 : Ce sont les exemplaires physiques de ces documents. Ils héritent automatiquement de crm:E22_Human-Made_Object via la classe F5_Item.

------------------------------
## Graphe corrigé et valide (LRMoo / CIDOC CRM)
Voici la version corrigée de votre code Mermaid. Les types ont été alignés sur la stricte sémantique LRMoo :

graph LR
    classDef work fill:#fddc34,stroke:#333;
    classDef expression fill:#82c3ec,stroke:#333;
    classDef manifestation fill:#b2dfdb,stroke:#333;     
    classDef item fill:#ffcc80,stroke:#333;
    
    subgraph W ["F1_Work (Concept Global)"]
        direction LR
        feuxPales["Feux Pâles\n(F1_Work)"]:::work
    end

    subgraph E ["F2_Expression (Concepts Scénographiques / Textuels)"]
        expr1["Scénographie Feux Pâles (1990)\n(F2_Expression)"]:::expression
        expr2["Concept L’Ombre du jaseur\n(F2_Expression)"]:::expression
        expr3["Plan/Structure Cabinet d’amateur\n(F2_Expression)"]:::expression
        expr4["Texte du Conservation Study\n(F2_Expression)"]:::expression
    end

    subgraph M ["F3_Manifestation (Modèles d'Édition / Spécifications)"]
        manif1("Spécifications du Display Feux Pâles\n(F3_Manifestation)"):::manifestation
        manif2("Maquette/ISBN du Catalogue\n(F3_Manifestation)"):::manifestation
        manif3("Spécifications du Display de l'Ombre\n(F3_Manifestation)"):::manifestation
        manif5("Modèle du Rapport d'étude\n(F3_Manifestation)"):::manifestation
        manif6("Spécifications de l'Édition 1/2\n(F3_Manifestation)"):::manifestation
    end

    subgraph I ["F5_Item (Objets Physiques et Matériels)"]
        item1["L'Installation physique dans la salle\n(F5_Item / crm:E22)"]:::item
        item5["L'Exemplaire physique signé\n(F5_Item / crm:E22)"]:::item
        item6["Le document papier du rapport\n(F5_Item / crm:E22)"]:::item
        item7["Le tirage photographique physique\n(F5_Item / crm:E22)"]:::item
    end

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

## Ce qui a changé :

   1. Les propriétés : Remplacement des faux prédicats par les vraies propriétés LRMoo (R2_is_realized_by, R4_is_embodied_in, R7_has_exemplar).
   2. La nature des nœuds : Tout ce qui est physique et manipulable a été descendu dans le bloc F5_Item (qui hérite nativement de crm:E22). Tout ce qui est conceptuel/textuel reste dans F2_Expression.

Souhaitez-vous que nous ajoutions les événements d'exposition (crm:E7_Activity) à ce graphe pour lier le concept de l'exposition à son ouverture réelle au public ?

Pour intégrer l'exposition réelle (l'événement physique inscrit dans le temps et l'espace), le CIDOC CRM et le modèle d'extension pour les expositions utilisent généralement la classe crm:E7_Activity (Activité) ou crm:E5_Event (Événement).
Pour lier cet événement au modèle LRMoo, on utilise la propriété crm:P16_used_specific_object (ou des propriétés spécifiques d'extensions muséales comme CRMsci ou FRBRoo/LRMoo selon le cas) pour indiquer que l'événement de l'exposition s'appuie sur, ou met en œuvre, l'Expression scénographique (F2) et ses Items physiques (F5).
Voici le graphe enrichi. J'ai ajouté un bloc d'Événements qui vient interagir directement avec le cycle de vie de vos œuvres et de vos documents.

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

## Ce qui est résolu grâce à cette structure :

   1. La réutilisation de l'Item (item1) : Vos deux expositions physiques (expo1 et expo2) peuvent désormais croiser le même objet matériel (item1, le code-barres / l'installation) à des moments différents du temps grâce à crm:P12_occurred_in_the_presence_of.
   2. La matérialisation de l'exposition : L'exposition au CAPC en 1990 n'est plus confondue avec l'idée de la scénographie. L'exposition utilise la scénographie (P16_used_specific_object) pour exister.
   3. La traçabilité de l'étude scientifique : Le rapport d'étude (expr4) possède désormais son événement de création dédié (action4 via crm:E65_Creation), ce qui permet d'y associer des dates, des conservateurs-restaurateurs ou des laboratoires.

Souhaitez-vous que nous enrichissions le modèle en y intégrant les acteurs (crm:E39_Actor) comme le CAPC, les artistes ou les commissaires d'exposition pour voir comment ils s'attachent à ces nœuds ?

Pour dire que l'installation physique présente dans la salle contient ou montre des œuvres, vous devez utiliser des propriétés du CIDOC CRM adaptées aux objets matériels.
Dans votre graphe, l'installation en salle est un F5_Item (qui hérite de crm:E22_Human-Made_Object). C'est un objet physique tridimensionnel. Pour lier cet objet physique aux œuvres qu'il incorpore ou expose, vous avez deux approches selon la précision sémantique recherchée :
## Option 1 : L'approche physique (Recommandée pour une installation composite)
Si l'installation physique dans la salle est un assemblage qui intègre physiquement d'autres objets (par exemple, des moniteurs vidéo, des peintures ou des sculptures qui composent le display), on utilise la relation d'inclusion physique :

* Propriété : crm:P46_is_composed_of (contient / est composé de)
* Cible : Les autres F5_Item (les objets physiques des œuvres exposées).

## Option 2 : L'approche conceptuelle (L'objet physique porte l'œuvre)
Si vous voulez dire que l'installation physique est le support ou le véhicule d'expression d'une œuvre intellectuelle (sans passer par le sous-assemblage d'objets), le CIDOC CRM utilise la notion de "portage de texte ou de concept" :

* Propriété : crm:P128_carries (porte)
* Cible : L'instance de F2_Expression de l'œuvre exposée.

(Note : En sémantique pure, un objet physique porte une Expression (F2), et cette Expression est réalisée par un Work (F1).)
------------------------------
## Mise à jour du graphe Mermaid
Voici comment intégrer ces deux cas de figure dans votre structure. J'ai ajouté une boîte "Œuvre exposée (ex: Peinture ou Sculpture)" pour illustrer visuellement la connexion :

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

## En résumé :

* Utilisez crm:P46_is_composed_of si vous décrivez la scénographie matérielle (l'installation contient physiquement la sculpture X ou la peinture Y).
* Utilisez crm:P128_carries si l'installation dans son ensemble matérialise le concept de l'œuvre exposée.

Pour aller plus loin, souhaitez-vous que nous liions ces œuvres exposées à leurs artistes créateurs (crm:E39_Actor) via la propriété de création ?

