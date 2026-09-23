---
title: "Modelling lacunae"
date: 2026-07-17
status: published
tags:
  - case:feux-pales
  - type:modelling
  - ontology:cidoccrm
  - lang:fr
description: "Distinguier «on ne sait pas» de «on a cherché et il n’y a rien» "
---

---
**English** · [Français](#français)

---

## English

---

## Français

---

### Objectif

Dans le musée *Le musée réfléchi*, une œuvre non identifiée (ex. : `ex:boxed_work_room8`) est visible dans la vitrine de la salle 8. Elle n’a :
- Ni légende,
- Ni numéro d’inventaire,
- Ni mention dans le catalogue ou le dossier de presse.

Deux scénarios sont possibles :
1. Ignorance simple : Personne n’a encore cherché son titre.
2. Lacune documentée : Une recherche approfondie a été menée dans les archives, sans résultat.

L’objectif est de documenter explicitement cette lacune, en s’inspirant :
- Des principes de transparence épistémique (on ne cache pas l’absence de connaissance).
- Du droit à l’opacité d’Édouard Glissant (certaines absences sont des choix légitimes).


### Hypothèses et questions d’enquête

Hypothèses :
1. L’absence subie comme donnée :
   Une lacune documentaire n’est pas un vide, mais le résultat d’un processus (une recherche infructueuse). Le CRM actuel ne permet pas de la distinguer d’un simple oubli.
2. L’absence comme droit :
   Certains acteurs (artistes, communautés autochtones) ont le droit de ne pas divulguer certaines informations (ex. : l’auteur réel de *Feux pâles* est masqué par une fiction).

Questions clés :
- Comment modéliser une recherche infructueuse (ex. : "Aucun titre trouvé pour `ex:boxed_work_room8` après consultation des archives X, Y, Z") ?
- Comment rendre interrogeable cette absence ?
- Comment distinguer lacune (absence subie) et opacité (absence choisie) ?



### Déroulé de la réflexion


#### 1. Exemple concret : L’œuvre non identifiée de la salle 8
Scénario :
L’œuvre `ex:boxed_work_room8` (une gravure dans une boîte) est visible dans la vitrine de la salle 8. Une recherche a été menée dans :
- Le catalogue du musée,
- Les archives de l’artiste,
- Les dossiers de presse.

Résultat : Aucune mention de son titre ou de son auteur.

Problème :
Avec le CRM standard, on ne peut pas savoir si :
- Une recherche a été menée (lacune documentée).
- Personne n’a encore cherché (ignorance simple).


#### 2. Première piste : Laisser le champ vide ou utiliser "Inconnu"
Idée :
Laisser le champ `title` vide ou utiliser la valeur *"Inconnu"*.

Problèmes :
- Ambiguïté : Impossible de savoir si une recherche a été menée.
- Non interrogeable : On ne peut pas demander *"Quelles œuvres ont une absence de titre documentée ?"*.
- Perte d’information : L’effort de recherche n’est pas capturé.

Conclusion :
Cette approche ne permet pas de documenter l’effort de recherche.


#### 3. Deuxième piste : Utiliser `I6_Belief_Value: Unknown` (CRMinf)
Idée :
Utiliser la valeur `Unknown` de `I6_Belief_Value` pour signaler une lacune.

Problèmes :
- Sémantique incorrecte : `Unknown` décrit un état de connaissance ("Je ne sais pas"), pas un acte de recherche ("J’ai cherché et n’ai rien trouvé").
- Confusion : Impossible de distinguer une lacune documentée d’une simple ignorance.

Conclusion :
Cette approche ne modélise pas l’acte de recherche.


#### 4. Troisième piste : Créer `Negative_Attribute_Assignment`
Idée :
Créer une classe `Negative_Attribute_Assignment` (sous-classe de `E13_Attribute_Assignment`) pour modéliser l’acte de recherche infructueuse.

Modélisation pour `ex:boxed_work_room8` :
```turtle
# Œuvre
ex:boxed_work_room8 a crm:E22_Man-Made_Object ;
    rdfs:label "Œuvre non identifiée (salle 8)" .

# Recherche menée (négative)
ex:search_title_room8 a crm:E7_Activity ;
    rdfs:label "Recherche du titre de ex:boxed_work_room8" ;
    crm:P16_used_specific_object ex:boxed_work_room8 ;
    crm:P14_carried_out_by ex:conservateur_X ;
    crm:P4_has_time-span ex:timespan_2026_09 .

# Lacune documentée : absence de titre
ex:missing_title_room8 a Negative_Attribute_Assignment ;
    crm:P140_assigned_attribute_to ex:boxed_work_room8 ;
    crm:P177_assigned_property_type crm:P102_has_title ;
    crm:P17_was_motivated_by ex:search_title_room8 ;
    crm:P14_carried_out_by ex:conservateur_X .
```

Avantages :
- Interrogeable : On peut demander *"Quelles œuvres ont une absence de titre documentée ?"*.
- Daté et attribuable : On sait qui a mené la recherche (`ex:conservateur_X`) et quand (`ex:timespan_2026_09`).
- Distinct de l’ignorance : La lacune est documentée, pas simplement constatée.

Schéma Mermaid :
```mermaid
graph LR
    classDef obj fill:#ffebee,stroke:#333;
    classDef act fill:#e8f5e9,stroke:#333;
    classDef assign fill:#e6f3ff,stroke:#333;
    classDef actor fill:#f3e5f5,stroke:#333;

    oeuvre["ex:boxed_work_room8<br/>(E22_Man-Made_Object)"]:::obj
    recherche["ex:search_title_room8<br/>(E7_Activity)"]:::act
    lacune["ex:missing_title_room8<br/>(Negative_Attribute_Assignment)"]:::assign
    conservateur["ex:conservateur_X"]:::actor

    recherche -->|P16_used_specific_object| oeuvre
    recherche -->|P14_carried_out_by| conservateur
    lacune -->|P140_assigned_attribute_to| oeuvre
    lacune -->|P177_assigned_property_type| "P102_has_title"
    lacune -->|P17_was_motivated_by| recherche
    lacune -->|P14_carried_out_by| conservateur
```


#### 5. Quatrième piste : Modéliser l’opacité avec `Withheld_Attribute_Assignment`
Exemple concret :
Dans *Feux pâles*, l’auteur réel de certaines œuvres est masqué par une fiction (ex. : l’œuvre est signée *"Philippe Thomas"*, mais l’auteur réel est un autre artiste). Cette opacité est un choix délibéré de Philippe Thomas.

Modélisation :
```turtle
# Œuvre avec auteur masqué
ex:feux_pales_work_1 a crm:E22_Man-Made_Object ;
    rdfs:label "Œuvre de Feux pâles (auteur masqué)" .

# Rétention de l'auteur
ex:withheld_author_1 a Withheld_Attribute_Assignment ;
    crm:P140_assigned_attribute_to ex:feux_pales_work_1 ;
    crm:P177_assigned_property_type crm:P94_has_created ;
    crm:P14_carried_out_by ex:philippe_thomas ;
    crm:P67_refers_to ex:reason_opacity .

# Raison de l'opacité (droit à l'opacité)
ex:reason_opacity a crm:E73_Information_Object ;
    rdfs:label "Droit à l'opacité de l'artiste (Glissant, 1990)" ;
    crm:P2_has_type ex:tk_label_opacity .
```

Avantages :
- Distinction claire entre lacune (absence subie) et opacité (absence choisie).
- Respect des principes éthiques : Permet de documenter le droit à l’opacité (Glissant) ou les TK Labels (Local Contexts).

Schéma Mermaid :
```mermaid
graph LR
    classDef obj fill:#ffebee,stroke:#333;
    classDef assign fill:#e6f3ff,stroke:#333;
    classDef actor fill:#f3e5f5,stroke:#333;
    classDef reason fill:#fff3e0,stroke:#333;

    oeuvre["ex:feux_pales_work_1<br/>(E22_Man-Made_Object)"]:::obj
    retention["ex:withheld_author_1<br/>(Withheld_Attribute_Assignment)"]:::assign
    thomas["ex:philippe_thomas<br/>(E21_Person)"]:::actor
    raison["ex:reason_opacity<br/>(E73_Information_Object)"]:::reason

    retention -->|P140_assigned_attribute_to| oeuvre
    retention -->|P177_assigned_property_type| "P94_has_created"
    retention -->|P14_carried_out_by| thomas
    retention -->|P67_refers_to| raison
```


#### 6. Alignement avec les *TK Labels* et les travaux du SIG CIDOC-CRM
- SIG CIDOC-CRM : Propose les *negative typed properties* pour les lacunes.
- Local Contexts : Les TK Labels permettent aux communautés autochtones de contrôler l’accès à leurs connaissances traditionnelles.

Notre modèle s’aligne sur ces travaux en :
- Utilisant `Negative_Attribute_Assignment` pour les lacunes documentées.
- Utilisant `Withheld_Attribute_Assignment` pour les opacités volontaires, alignées sur les TK Labels.



### Choix final

Solution retenue :
1. `Negative_Attribute_Assignment` :
   - Documente l’événement de recherche infructueuse (ex. : *"Aucun titre trouvé pour ex:boxed_work_room8"*).
   - Ne contient pas de valeur assignée (`P141` non utilisé).
   - Lie l’événement à la propriété cible (`P140`) et au type de propriété (`P177`).

2. `Withheld_Attribute_Assignment` :
   - Documente l’événement de rétention volontaire (ex. : *"L’auteur de ex:feux_pales_work_1 est masqué"*).
   - Motive la rétention via un `E73_Information_Object` (ex. : *"Droit à l’opacité"*).
   - Peut être liée à un `E30_Right` ou une politique ODRL (ex. : *TK Labels*).

Exemple de requête SPARQL :
```sparql
# Trouver toutes les œuvres avec une lacune documentée (absence de titre)
SELECT ?oeuvre ?conservateur ?date WHERE {
  ?lacune a Negative_Attribute_Assignment ;
          crm:P140_assigned_attribute_to ?oeuvre ;
          crm:P177_assigned_property_type crm:P102_has_title ;
          crm:P17_was_motivated_by ?recherche ;
          crm:P14_carried_out_by ?conservateur .
  ?recherche a crm:E7_Activity ;
             crm:P4_has_time-span ?timespan .
  ?timespan crm:P82_at_some_time_within ?date .
}
```
