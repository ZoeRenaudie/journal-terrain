---
title: "Modelling the Opacity"
date: 2026-07-17
status: published
tags:
  - case:feux-pales
  - type:modelling
  - ontology:cidoc-crm
  - lang:fr
description: ""
---

# Modelling the Opacity

---

**English** · [Français](#français)

---

## English

---

## Français

## Objectif

Le [fictionnalisme](lienFictionalisme) de Philippe Thomas impose de cacher certaines informations. Cette notion m'a aussi fait pensé aux propos de Glissant : 

> « Le droit à l'opacité... n'est pas l'enfermement dans une particularité impénétrable. C'est l'accord donné à ces pratiques du monde qui se proposent à la Relation universelle. » 
> Édouard Glissant, Poétique de la Relation, 1990

Jusqu'à présent, nous avons traité l'absence de données comme un problème à résoudre. Mais que se passe-t-il si cette absence est intentionnelle ? Certains acteurs ne retiennent pas l'information par accident. Ils refusent de la divulguer par principe, au sens que Glissant donne au droit à l'opacité. L'absence et l'opacité, dans ce cadre, sont des positions épistémiques légitimes, non des déficiences à corriger. C'est une logique déjà institutionnalisée ailleurs dans le patrimoine numérique, notamment par les *Traditional Knowledge (TK) Labels* et *Biocultural (BC) Labels* de Local Contexts, qui permettent à des communautés de faire porter des conditions d'accès et de circulation sur une donnée sans avoir à en exposer les protocoles internes.

L’objectif est de dépasser l’hypothèse du monde ouvert du CRM, qui assimile toute absence à une simple ignorance, pour modéliser l’opacité comme une donnée à part entière, conforme aux principes de souveraineté des données (comme les *TK Labels*) et à la nécessité de distinguer le dispositif narratif de l’œuvre de la gouvernance documentaire de l’institution.

## Hypothèses et questions d'enquête

L'enquête repose sur deux hypothèses centrales concernant la nature de l'information manquante dans les graphes de connaissances patrimoniaux :

1.  **L'absence subie comme donnée :** Une lacune documentaire n'est pas un vide, mais le résultat d'un processus (une recherche) dont le bilan est négatif. Le CRM actuel ne permet pas de distinguer un oubli d'une recherche infructueuse, ce qui fausse l'interprétation des chaînes de provenance ou des états de conservation.[^1]
2.  **L'absence choisie comme droit :** Certains acteurs (artistes, communautés autochtones, institutions) ont le droit ou le devoir de ne pas divulguer certaines informations (identité, fonction, origine). Cette opacité n'est pas une erreur de modélisation, mais une caractéristique intrinsèque de l'objet ou de son contexte culturel.

Les questions clés qui guident cette réflexion sont :
*   Comment modéliser formellement l'événement de recherche infructueuse sans utiliser de valeurs de remplacement artificielles ?
*   Comment rendre cela interrogeable sans trahir l'éthique même qui a motivé cette rétention ?
*   Comment distinguer la rétention volontaire (opacité voulue) de l'ignorance (absence constatée) dans le même schéma ontologique ?
*   Comment articuler le modèle ontologique avec les mécanismes techniques d'accès (comme les *named graphs* et le contrôle d'accès) pour que la condition de rétention soit à la fois lisible et effective ?

## Déroulé de la réflexion

#### L'attribution dans CIDOC-CRM

!img[](../images/AttributeAssignment_V7.3.1.drawio.svg)


#### Distinction entre absence subie et absence choisie
Il est apparu nécessaire de ne pas traiter les deux cas de figure comme de simples variations d'un même problème. Le premier cas, l'absence subie, concerne des chaînes de provenance interrompues ou des pièces d'œuvre dont l'origine ne peut être établie malgré des recherches approfondies. Le CRM, par défaut, ne peut pas exprimer cette certitude du "néant" après enquête. Le second cas, l'absence choisie, touche à l'intégrité de l'œuvre elle-même (comme dans le dispositif de *Feux pâles* de Thomas où l'auteur réel est masqué par une fiction) ou à des droits culturels (opacité revendiquée par des communautés). Ici, l'absence n'est pas un échec, mais une décision politique ou éthique.

1. Lacune

XX:XX_Attribute_Missing a owl:Class ;
    rdfs:subClassOf crm:E13_Attribute_Assignment ;
    rdfs:label "Attribute Missing"@en ;
    rdfs:comment "An attribute assignment that records the documented absence of a value for a property after a search activity."@en .
Le CRM, fonctionnant selon une logique de monde ouvert, considère déjà l’absence d’assertion comme une absence de connaissance plutôt que comme une négation, ce qui constitue une bonne approche par défaut. Cependant, le problème réel est différent : je souhaite déclarer explicitement qu’une recherche a été entreprise et s’est révélée infructueuse, afin que cette lacune soit lue comme documentée et non comme un simple oubli. J’ai créé une nouvelle classe nommée, XX:XX_Attribute_Missing, sous-classe de E13, plutôt qu’une valeur de remplacement propre à chaque propriété. Parce qu’il s’agit d’une classe déclarée à part entière, le statut du titre devient directement interrogeable : je peux demander au graphe « quels titres sont des lacunes documentées » et obtenir une réponse. Un seul artefact réel nécessite souvent plusieurs petits mécanismes de ce type simultanément, superposés sur différentes propriétés du même nœud.

2. (Méta)données délibérément non déclarées ou données sous condition

Voici le point le plus critique. Jusqu’ici, nous avons traité l’absence de données comme un problème à résoudre. Mais que se passe-t-il si cette absence est intentionnelle ?
Certains acteurs ne retiennent pas l’information par accident. Ils refusent de la divulguer par principe, au sens que Glissant donne au droit à l’opacité. L’absence et l’opacité, dans ce cadre, sont des positions épistémiques légitimes, non des déficiences à corriger.
Les métadonnées peuvent tout de même être partagées, mais sous conditions énoncées. La question devient alors : comment rendre cela interrogeable sans trahir l’éthique même qui a motivé cette rétention ? Dans l’interface, cela pourrait simplement se traduire par une étiquette « contexte », informant l’utilisateur qu’une condition s’applique, sans exposer la raison sous-jacente elle-même.
Proposition : une classe Undisclosed Attribute
XX:XX_Undisclosed a owl:Class ;
    rdfs:subClassOf crm:E13_Attribute_Assignment ;
    rdfs:label "Undisclosed Attribute"@en, "Attribut non divulgué"@fr ;
    rdfs:comment "An attribute assignment that records the deliberate withholding of a value, motivated by ethical, legal, or cultural principles."@en .
Concrètement, je sous-classe à nouveau E13_Attribute_Assignment, cette fois sous la forme XX:XX_Undisclosed, et j’y attache la raison documentée de la rétention comme un E73_Information_Object, plutôt que de laisser cette raison implicite. La classe se place délibérément à côté d’AttributeMissing : les deux résultent d’une recherche, mais l’une revient vide parce que l’information n’a réellement pas pu être trouvée, et l’autre revient vide parce que quelqu’un, nommé et daté, a choisi de ne pas la divulguer. 

Permetterait d’appeler les TK label définis avec Skos 

#### Alignement SIG CIDOC-CRM
En consultant les travaux du SIG (Velios, Meghini, Doerr, Stead), il a été confirmé que la question de la modélisation de l'absence est un chantier actif depuis 2019. Leur proposition de *negative typed properties* (2023) fournit le socle pour la première classe. Pour respecter cette terminologie et la structure parente `E13_Attribute_Assignment`, il est préférable d'utiliser le nom **`Negative_Attribute_Assignment`** plutôt que `Attribute_Missing`. Ce terme est plus fidèle à la littérature existante et évite l'ambiguïté d'un "état" pour désigner un "événement".

En conséquence, la classe symétrique pour l'opacité volontaire doit suivre la même logique sémantique. Le terme **`Withheld_Attribute_Assignment`** (ou `Withheld`) s'impose donc comme le pendant de `Negative_Attribute_Assignment`. Cette symétrie structurelle permet de dire clairement : l'une documente un événement de recherche ayant échoué (négation constatée), l'autre documente un événement de décision ayant retenu une information (négation choisie).

#### Architecture technique et gouvernance des données
Le modèle ontologique (`Withheld_Attribute_Assignment` lié à un `E30_Right` et potentiellement à une politique ODRL) ne suffit pas à lui seul pour appliquer la règle. Le CRM est déclaratif : il énonce les faits, il ne les applique pas. Pour que la rétention soit effective, il faut une couche infrastructurelle, typiquement les *named graphs* dans un triplestore.
*   Le nœud `Withheld_Attribute_Assignment` reste visible dans le graphe public pour informer de l'existence de la condition.
*   La valeur réelle (ou la raison de la rétention) est stockée dans un graphe nommé séparé, accessible uniquement si les critères d'accès (rôle, date, etc.) sont remplis.
Il est crucial de distinguer cette contribution ontologique (le modèle des classes) de la mise en œuvre technique (le contrôle d'accès). De plus, la distinction avec le mécanisme "Story/Plot" de *Curate* a été clarifiée : *Curate* gère la fiction interne à l'œuvre, tandis que `Withheld` gère la gouvernance externe de l'institution qui conserve l'œuvre.

#### Validation des choix de modélisation
Les vérifications ont confirmé que l'utilisation de `P141 assigned` doit être évitée pour ces deux classes, car il n'y a pas de valeur à assigner. Seuls `P140 assigned attribute to` et `P177 assigned property type` sont pertinents pour identifier la cible de l'absence. La raison de la rétention doit être attachée via un `E73 Information Object`, qui peut lui-même être conditionné, respectant ainsi le principe de Glissant sur le droit à l'opacité jusqu'au bout de la chaîne de justification. L'alignement avec les *TK Labels* de Local Contexts via `E55 Type` et SKOS est également validé comme une bonne pratique pour typer la nature de la rétention (culturelle, légale, etc.).

#### Signaler l'opacité dans un monde ouvert 

Cidoc-crm suit l'hypothèse du monde ouvert qui accepte que la connaissance soit incomplète. Il me semble important qu'apparaisse dans la documentation l'opacité permettant ainsi de donner les informations vérifiées et situées aux gestionnaires de diffusions d'une base de données. C'est cependant contradictoire avec l'introduction même de l'ontologie comme nous l'a fait remarqué Athina Kritsotaki (14 septembre 2026) dans l'issue 723 :

> « Au niveau des données, nous ne pouvons pas imposer de contraintes de monde clos en raison de l'incomplétude de notre connaissance particulière à un moment donné. Il existe une directive dans les principes intitulée « Comment puis-je représenter les états caractéristiques du manque de connaissance dans ma modélisation » (et pour éviter les règles strictes du monde clos, nous nous rappelons le problème des valeurs et propriétés courantes).
> Je pense qu'il s'agit d'une question d'implémentation que le modèle ne prévoit pas. Ce type de validité de la connaissance relève du gestionnaire de connaissances. Les états peuvent être gérés par l'administrateur de base de données, qui devrait pouvoir vérifier la réalité correspondante à la dernière date de validité de la base. Dans l'introduction, on trouve ceci :
> « ...Cela n'implique pas que la connaissance décrite dans la base de connaissances soit complète. Tant que l'information fait l'objet d'une gestion active, elle demeure continuellement ouverte à la révision et à l'amélioration à mesure que la recherche révèle de nouvelles compréhensions. Une base de connaissances ne représente pas une tranche de réalité, mais les croyances justifiées de ses gestionnaires à propos de cette réalité. Par simplicité, nous parlons d'une base de connaissances comme représentant une certaine réalité. [...] Les quantificateurs pour les propriétés sont fournis à des fins de clarification sémantique uniquement, et ne doivent pas être traités comme des recommandations d'implémentation. Le CIDOC CRM a été conçu pour accommoder des opinions alternatives et de l'information incomplète, et par conséquent toutes les propriétés devraient être implémentées comme optionnelles et répétables pour leur domaine et leur portée (« plusieurs-à-plusieurs (0,n:0,n) ») [...] Notez que si une propriété dépendante n'est pas spécifiée pour une instance du domaine ou de la portée concernée, cela signifie que la propriété existe, mais que la valeur d'un côté de la propriété est inconnue. Dans le cas des propriétés optionnelles, la méthodologie proposée par le CIDOC CRM ne distingue pas entre une valeur inconnue et la propriété n'étant pas applicable du tout. Par exemple, on peut savoir qu'un objet a un propriétaire, mais que ce propriétaire est inconnu. Dans une instance CIDOC CRM, ce cas ne peut être distingué du fait que l'objet n'a aucun propriétaire du tout. Bien entendu, de tels détails peuvent toujours être précisés par une note textuelle [...] » »

Il me semble que le droit à l'opacité de Glissant n'est pas un droit de ne pas exister mais un droit de choisir et maîtriser ce que l'on souhaite dévoiler. comment faire alores ? Est-ce que cidoc rejette alors ces données ? ou est ce qu'il faut seulemeent les typer ? 

## Choix final

Sur la base de cette analyse, les choix suivants sont retenus pour la proposition d'extension du CIDOC-CRM :

1.  Création de deux sous-classes d'E13_Attribute_Assignment :
    *   **`Negative_Attribute_Assignment`** (remplaçant `Attribute_Missing`) : Documente l'événement de recherche infructueuse. Elle indique qu'une propriété a été recherchée, que la recherche a été menée à une date donnée, et qu'aucune valeur n'a été trouvée. Elle ne contient pas de valeur assignée (`P141` non utilisé), mais lie l'événement à la propriété cible (`P140`) et au type de propriété (`P177`).
    *   **`Withheld_Attribute_Assignment`** (remplaçant `Undisclosed`) : Documente l'événement de décision volontaire de ne pas divulguer une information. Elle indique qu'une propriété a été identifiée comme devant être retenue, motive cette décision via un `E73 Information Object` (la raison), et peut être liée à un `E30 Right` ou une politique ODRL définissant les conditions d'accès à la valeur retenue.

2.  Structure symétrique et sémantique :
    Les deux classes forment une paire cohérente : l'une traite de l'absence comme constat (négation de la présence), l'autre de l'absence comme choix (négation de la divulgation). Cette symétrie permet d'interroger le graphe pour distinguer les "lacunes documentées" des "opacités légitimes".

3.  Intégration technique :
    Le modèle ontologique est conçu pour s'articuler avec les mécanismes existants de contrôle d'accès (*Named Graphs*, *Attribute-Based Access Control*). La classe `Withheld_Attribute_Assignment` sert d'interface publique signalant qu'une condition s'applique, tandis que la valeur réelle et la raison de la rétention sont protégées dans des graphes nommés ou des objets `E73` conditionnés, assurant que la "couche de gouvernance" ne trahit pas la "couche de contenu".

4.  Alignement externe :
    L'utilisation de `E55 Type` pour qualifier la nature de la rétention permet d'aligner le modèle sur des vocabulaires externes comme les *TK Labels* de Local Contexts, assurant une interopérabilité avec les pratiques de souveraineté des données autochtones et culturelles.

Ce choix final permet de combler un angle mort du CRM en offrant un cadre formel pour documenter non seulement ce que nous ne savons pas, mais aussi ce que nous savons et choisissons de taire, en respectant à la fois l'intégrité des œuvres et les droits des communautés concernées.


[^1]: MAJ : Nouvelle Issue CIDOC-CRM SIG : Documenting that a property value was sought and not obtained: declared absence in provenance records. ID: 723. Starting Date: 2026-09-14
