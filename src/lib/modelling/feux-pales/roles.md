---
title: "Modelling the roles"
date: 2026-07-17
status: published
tags:
  - case:feux-pales
  - type:modelling
  - ontology:cidoc-crm
  - ontology:linkedart
  - lang:fr
description: ""
---


Comment documenter les rôles multiples d’un même acteur (ex. Philippe Thomas, à la fois artiste et commissaire) ?

Philippe Thomas joue plusieurs rôles dans *Feux Pâles* :
- Artiste (créateur de l’œuvre *code-barre*),
- Commissaire (organisateur de l’exposition),
- Agent fictionnel (via sa signature *"Les ready-made appartiennent à tout le monde (r)"*).

Comment modéliser ces rôles contextuels sans créer de redondances ?

#### Choix méthodologique
1. Utilisation de `P14_carried_out_by` + `P14.1_in_the_role_of` :
   - Le CIDOC CRM permet d’associer un rôle (`E55_Type`) à un acteur dans le cadre d’une activité spécifique.
   - Exemple :
     ```turtle
     exhib:exhib01 crm:P14_carried_out_by exhib:agent001 ;
         crm:P14.1_in_the_role_of exhib:role1 .  # role1 = "commissaire d'exposition"
     exhib:prod001 crm:P14_carried_out_by exhib:agent001 ;
         crm:P14.1_in_the_role_of exhib:role2 .  # role2 = "artiste"
     ```
   - Avantage : Simple et conforme au standard.

2. Éviter les `PC14_carried_out_by` :
   - Votre graphe initial utilisait des instances de `PC14_carried_out_by` (une extension non standard, inspirée de SARI).
   - Problème : `PC14` n’est pas défini dans le CIDOC CRM de base. Son usage peut compliquer l’interopérabilité.
   - Solution : Remplacer par `P14_carried_out_by` + `P14.1_in_the_role_of` directement sur les activités.

3. Absence dans *L’Ombre du jaseur* :
   - Pour indiquer que Philippe Thomas n’a pas participé à *exhib02*, nous avons ajouté une note :
     ```turtle
     exhib:exhib02 crm:P3_has_note "Philippe Thomas n'a pas participé à cette itération." .
     ```
   - Alternative : Ne pas lier `exhib02` à `agent001` du tout (solution plus élégante).

#### Discussion
Cette approche permet de :
- Documenter les rôles contextuels sans surcharger le graphe,
- Respecter le principe de minimalisme du CIDOC CRM (éviter les classes/propriétés non standard),
- Faciliter les requêtes (ex. "Quels rôles Philippe Thomas a-t-il joués dans *Feux Pâles* ?").