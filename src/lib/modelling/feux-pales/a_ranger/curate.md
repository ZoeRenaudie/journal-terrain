---
title: "Curate"
date: 2026-07-
status: draft
tags:
  - case:feux-pales
  - type:modelling
  - ontology:curate
  - lang:fr
description: ""
---


Curate le fictionnalisme 

L'ontologie structure ces relations de la manière suivante : un récit présente une histoire et une intrigue, tandis que l'intrigue interprète l'histoire en organisant ses événements. Cette distinction permet aux musées de modéliser le sens d'une exposition au-delà des simples métadonnées des objets qui la composent.

    Interprétations multiples : Une histoire est définie comme un ensemble d'événements factuels, tandis que l'intrigue est une interprétation subjective qui impose un réseau de relations (comme la causalité ou l'influence) à ces événements. Puisqu'une même série d'événements peut être interprétée de différentes manières, l'ontologie permet de modéliser plusieurs intrigues pour une seule histoire.
    Hypothèses de travail : Cette flexibilité permet au conservateur de tester différentes "hypothèses" narratives sur la manière dont les événements sont liés.
    Perspectives divergentes : Cette structure permet de gérer des interprétations potentiellement conflictuelles, par exemple des points de vue alternatifs sur les relations de cause à effet entre deux événements historiques.

En résumé, l'ontologie sépare la base factuelle (l'histoire) de la structure de sens (l'intrigue), ce qui autorise une grande richesse dans la modélisation des récits muséaux.

L'ontologie Curate gère les interprétations conflictuelles principalement en séparant les faits de leur interprétation subjective et en permettant la coexistence de plusieurs structures narratives pour une même base de données.
Voici les mécanismes spécifiques utilisés :

    Séparation de l'histoire et de l'intrigue : L'ontologie distingue la représentation des événements eux-mêmes (l'histoire) de leur interprétation (l'intrigue). Cette séparation permet de modéliser plusieurs intrigues pour une seule et même histoire, ce qui autorise des perspectives divergentes sur les mêmes faits.
    Utilisation du motif de conception DnS (Descriptions and Situations) : Curate s'appuie sur le motif DnS pour traiter l'interprétation d'un événement comme une "Description" (DUL:Description) distincte de la "Situation" réelle (DUL:Situation). Cette structure permet de modéliser des interprétations potentiellement contradictoires d'un même événement, comme des points de vue alternatifs sur une relation de cause à effet.
    Système de justifications : Lorsqu'une relation d'intrigue est définie (par exemple, un événement influençant un autre), l'ontologie permet d'ajouter une justification pour soutenir cette interprétation spécifique. Par exemple, une relation peut être justifiée par une "similarité visuelle" entre deux œuvres, laissant la porte ouverte à d'autres interprétations basées sur d'autres critères.
    Multiplicité des récits d'objets : Au niveau des objets de collection, un même objet patrimonial peut faire l'objet de plusieurs récits (heritage object narratives). Chaque récit peut se concentrer sur un aspect différent (sa création, la vie de l'artiste, son iconographie ou son historique de propriété), permettant ainsi d'intégrer des visions variées de l'objet au sein d'un récit curatorial global.

En résumé, l'ontologie ne cherche pas à imposer une vérité unique, mais fournit une structure flexible où différentes "hypothèses" narratives peuvent être testées et présentées parallèlement.
