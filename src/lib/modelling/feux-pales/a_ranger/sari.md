---
title: "Experiment - describe Feux pâles has an exhibition with CIDOC CRM"
date: 2026-04-13
status: published
tags:
  - case:feux-pales
  - type:modelling
  - ontology:cidoc-crm
  - lang:fr
description: ""
---

Il est temps de s'attaquer à la modélisation avec CIDOC-CRM. Je propose la méthodologie suivante : 
- choisir une exposition : Feux Pâles, parce que j'ai déjà beaucoup de données
- tester de décrire Feux Pâles avec les différents guides CIDOC-CRM (SARI, Linked Art)
- incorporer les autres ontologies (Onto-Exhibit, AAAo, Display)
- voir ce qui reste, ce qui n'est pas décrit avec les ontologies. 
- chercher d'autres ontologies pour compléter.
- tester sur elles@centrepompidou

Commençons par SARI : https://docs.swissartresearch.net/pattern/temporal/#exhibition

## Meta-données de l'exposition

Il est expliqué que les expositions sont modelées en tant qu'activités temporelles, "parce qu'elles existent dans le temps". Une exposition itinérante est considérée comme une activité comportant des sous-activités. 

E7 Activity → P9 consist of → E7 Activity

Essayons d'adapter leur exemple à notre exposition : 

@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix crm: <http://http://www.cidoc-crm.org/cidoc-crm/> .
@prefix sari: <http://w3id.org/sari#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix geo: <http://www.opengis.net/ont/geosparql#>.

<https://feuxPales/event/exhibition/1> a crm:E7_Activity ;
crm:p1_is_identified_by <https://feuxPales/appellation/01> ;
crm:p4_has_time-span <https://feuxPales/timespan/01> ;
crm:p9_consists_of <https://feuxPales/event/exhibition/1_1> , <https://feuxPales/event/exhibition/1_2> .

<https://feuxPales/event/exhibition/1_1> a crm:E7_Activity ;
crm:p1_is_identified_by <https://feuxPales/appellation/01> ;
crm:p7_took_place_at <https://feuxPales/place/01> ;
crm:p4_has_time-span <https://feuxPales/timespan/01> .

<https://feuxPales/event/exhibition/1_2> a crm:E7_Activity ;
crm:p1_is_identified_by <https://feuxPales/appellation/02> ;
crm:p7_took_place_at <https://feuxPales/place/2> ;
crm:p4_has_time-span <https://feuxPales/timespan/02> .

<https://feuxPales/timespan/01> a crm:E52_Time-Span ;
crm:P81a_end_of_the_begin "1990-12-07"^^xsd:date ;
crm:p81b_begin_of_the_end "1991-03-03"^^xsd:date .

<https://feuxPales/timespan/02> a crm:E52_Time-Span ;
crm:P81a_end_of_the_begin "2014-12-12"^^xsd:date ;
crm:p81b_begin_of_the_end "2014-05-18"^^xsd:date .

<https://feuxPales/place/01> a crm:E53_Place ;
crm:p1_is_identified_by <https://feuxPales/appellation/100> ;
crm:P168_place_is_defined_by  "POINT (44.841225 -0.5800364)"^^geo:wktLiteral .

<https://feuxPales/appellation/100> a crm:E41_Appellation ;
rdfs:label "Bordeaux". 

<https://feuxPales/place/02> a crm:E53_Place ;
crm:p1_is_identified_by <https://feuxPales/appellation/101> ;
crm:P168_place_is_defined_by  "POINT (6.143047 46.204835)"^^geo:wktLiteral .

<https://feuxPales/appellation/101> a crm:E41_Appellation ;
rdfs:label "Geneve".


La saisie des url est chronophage et je ne comprends pas pourquoi les uri sont si complexes. 


Remarques : 
C'est très sommaire.
J'aimerais utiliser les localisations associées au musée dans Getty ou de Wikidata. 

Je continue à déclarer le contenu déjà en place : 

<https://feuxPales/appellation/01> a crm:E41_Appellation ; 
rdfs: "Feux Pâles". 

<https://feuxPales/appellation/02> a crm:E41_Appellation ; 
rdfs: "L'Ombre du jaseur (d'après Feux Pâles)". 

J'aimerais déclarer que l'exposition 01 avait un titre provisoire "Memorandum" (à confirmer). Mettre une étiquette de langue aussi sur les label. 

Il y a d'autres exemples que je peux utiliser pour compléter. Par exemple, le commissariat : 

E12 Production → P14 carried out by → E21 Person

<https://feuxPales/event/exhibition/1> 
	crm:P14_carried_out_by <https://feuxPales/person/135>.

<https://feuxPales/person/135> a crm:E21_Person;
	crm:P1_is_identified_by <https://feuxPales/person/135/appellation>.

<https://feuxPales/person/135/appellation> a  crm:E41_Appellation ;
	rdfs:label "Philippe Thomas".

Récupérer ou créer une personne sur un repertoire commun ? Vidéomuseum a une base artiste, une base personnes. Iels travaillent à une base commune pour les différentes personnes. 

Philippe Thomas cache son nom, c'est le principe central de son travail artistique. Comment dire "Philippe Thomas sous couvert de l’agence les ready-made appartiennent à tout le monde ®"

<https://feuxPales/event/exhibition/1> 
	crm:P14_carried_out_by <https://feuxPales/actor/130>.

<https://feuxPales/actor/130> a crm: .

<https://feuxPales/actor/130/appellation> a  crm:E41_Appellation ;
	rdfs:label "les ready-made 		
appartiennent à tout le monde ®".

J'ai mis E39 actor parce que les sub-class ne conviennent pas vraiment. C'est une personne oui, philippe thomas, un groupe (fictionnel), l'agence (qui ne comporte personne). Il faudrait pouvoir préciser cette information. Pourquoi ? Dans videomuseum, le cnap (#REF a vérifier) à reussi à faire que l'artiste philippe thomas soit referencé donc les oeuvres ressortent mais que le nom ne soit pas affiché. 


Est-il possible de declarer comme une oeuvre d'Art aussi ? ??

Faire un double de declaration ? 

Creation of an artefact

We model the physical creation of artefacts, such as paintings or photos, using the class E12 Production, a subclass of Event which described a specific activity which results in the creation of one or more new physical object. This type of creation is modelled in CRM using the E12 Production Entity, using the pattern:

E22 Man-Made Object → P108 was produced by → E12 Production
Technique used¶

A production itself can be contextualised using diverse properties that augment the information about this activity. A quite important one for us was the technique used. The CRM modelling follows:

E12 Production → P33 used specific technique → E29 Design or Procedure

The encoding of the modelling in Turtle is pretty straightforward:

@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix crm: <http://http://www.cidoc-crm.org/cidoc-crm/> .
@prefix sari: <http://w3id.org/sari#> .

<https://example.com/work/6004987> a crm:E22_Man-Made_Object ;
    crm:P108i_was_produced_by <https://example.sikart.ch/production_activity/1> .

    <https://example.com/production_activity/1> a crm:E12_Production ;
    crm:P33_used_specific_technique <https://example.sikart.ch/technique/1> .

    <https://example.com/technique/1>  a crm:E29_Design_or_Procedure ;
    crm:P1_is_identified_by <https://example.sikart.ch/technique/1/appellation> .

    <https://example.com/technique/1/appellation> a  crm:E41_Appellation ;
    rdfs:label "Öl auf Leinwand" .

Codebox 1. Technique. Click here to comment the modelling.

Ce n'est pas un human made object. Mais conceptual object ? 



Comment modéliser que l'activité, l'exposition est une production, une oeuvre d'art ? Considérée comme une oeuvre par l'artiste. Comment modéliser les points de vues sur l'exposition ? Onto-Exhibit ? AAAo. 

## Les expôts

Une exposition est souvent considérée comme une aggregation d'expôts, conceptuel ou non. L'exposition vides du CP n'est pas vide.

We model the physical creation of artefacts, such as paintings or photos, using the class E12 Production, a subclass of Event which described a specific activity which results in the creation of one or more new physical object. This type of creation is modelled in CRM using the E12 Production Entity, using the pattern:

E22 Man-Made Object → P108 was produced by → E12 Production
Technique used¶

A production itself can be contextualised using diverse properties that augment the information about this activity. A quite important one for us was the technique used. The CRM modelling follows:

E12 Production → P33 used specific technique → E29 Design or Procedure

The encoding of the modelling in Turtle is pretty straightforward:


@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix crm: <http://http://www.cidoc-crm.org/cidoc-crm/> .
@prefix sari: <http://w3id.org/sari#> .

<https://example.com/work/6004987> a crm:E22_Man-Made_Object ;
    crm:P108i_was_produced_by <https://example.sikart.ch/production_activity/1> .

    <https://example.com/production_activity/1> a crm:E12_Production ;
    crm:P33_used_specific_technique <https://example.sikart.ch/technique/1> .
    
    <https://example.com/technique/1>  a crm:E29_Design_or_Procedure ;
    crm:P1_is_identified_by <https://example.sikart.ch/technique/1/appellation> .
    
    <https://example.com/technique/1/appellation> a  crm:E41_Appellation ;
    rdfs:label "Öl auf Leinwand" .

Provenance of an object¶

We model the provenance of an object as a series of acquisition events, which transfer an object from person to person. This allows us to follow the object throughout the years. This solution is not perfect, because in an open world it does not imply that the object stays with the same owner between acquisition events (despite the fact that we do know about it). A better modelling would be using a State which, however, are not fully considered within CRM at the moment of writing this document. While the solution is not better, it is still quite functional and can be seen in the codebox below where three diverse acquisition events are modelled
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix crm: <http://http://www.cidoc-crm.org/cidoc-crm/> .
@prefix sari: <http://w3id.org/sari#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<https://example.com/work/663763> a crm:E22_Man-made-object ;
     crm:P24i_changed_ownership_through <https://example.com/acquisition/22734637> ;
     crm:P24i_changed_ownership_through <https://example.com/acquisition/22734638> ;
     crm:P24i_changed_ownership_through <https://example.com/acquisition/22734639> .

<https://example.com/acquisition/22734637> a crm:E8_Acquisition ;
    crm:P22_transferred_title_to <https://example.com/person/223> ;
    crm:P4_has_time-span <https://example.com/acquisition_timespan/0466456> .

<https://example.com/acquisition_timespan/0466456> a crm:E52_Time-Span ;
	crm:P81a_end_of_the_begin "1640-01-01"^^xsd:date ;
	crm:p81b_begin_of_the_end "1862-12-31"^^xsd:date .

<https://example.com/person/223> a crm:E21_Person .

<https://example.com/acquisition/22734638> a crm:E8_Acquisition ;
	crm:P23_transferred_title_from <https://example.com/person/223> ;
    crm:P22_transferred_title_to <https://example.com/person/224> ;
    crm:P4_has_time-span <https://example.com/acquisition_timespan/0466457> .

<https://example.com/person/224> a crm:E21_Person ;
	crm:P1_is_identified_by <http://example.com/224/appellation/> .

<http://example.com/223/appellation/> a crm:E41_Appellation ;
	rdfs:label "Daniel Burckhardt-Werthemann" .

<https://example.com/acquisition_timespan/0466457> a crm:E52_Time-Span;
	crm:P81a_end_of_the_begin "1863-01-01"^^xsd:date ;
	crm:p81b_begin_of_the_end "1949-12-31"^^xsd:date .

<https://example.com/acquisition/22734639> a crm:E8_Acquisition ;
	crm:P23_transferred_title_from <https://example.com/person/224> ;
    crm:P22_transferred_title_to <https://example.com/person/225> ;
    crm:P4_has_time-span <https://example.com/acquisition_timespan/0466458> .

<https://example.com/person/225> a crm:E21_Person .

<https://example.com/acquisition_timespan/0466458> a crm:E52_Time-Span;
	crm:P81a_end_of_the_begin "1950-01-01"^^xsd:date .


Pourquoi c'est compliqué cidoc-crm ? Plus que de se battre avec un excel ?

Comment ingégrer ça pour que ca rentre DANS la prod de l'expo ? 


Miro pour essayer de comprendre quoi depend de quoi dans les différents domaines de cidoc crm (temps, spatial, conceptuel, physique..)
https://miro.com/app/board/uXjVH8vqoRc=/?share_link_id=807320750820