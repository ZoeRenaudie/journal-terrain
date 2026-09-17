---
title: "AAAo "
date: 2026-04-13
status: published
tags:
  - lang:fr
  - ontology:aaao
  - case:feux-pales
description: ""

---

## AAAO 

@prefix rdf:    <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:   <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd:    <http://www.w3.org/2001/XMLSchema#> .
@prefix crm:    <http://www.cidoc-crm.org/cidoc-crm/> .
@prefix aaao:   <https://ontology.swissartresearch.net/aaao/> .
@prefix fp:     <https://feuxpales.example.org/> .

<!-- 
crm: CIDOC-CRM 7.1.2

aaao:  Art and Architectural Argumentation Ontology v2.0
Namespace officiel : https://ontology.swissartresearch.net/aaao/ (anciennement CRMaaa, namespace https://takin.solutions/ontologies/crmaaa/)

fp:    Espace de noms local pour les entités de Feux pâles -->


L'extension AAAO (anciennement CRMaaa Cultural Reality Model for Ascriptive and Appellative Acts) offre introduit la notion de statut institutionnel (ZE1 *Institutional Fact*), qui permet de contextualiser les affirmations en les attachant à un groupe d'acteurs, à un cadre événementiel et à une période déterminée. Dans le cas de *Feux pâles*, ce dispositif permettrait, par exemple, de modéliser le fait que le costume de Beuys présent en salle 3 de l'exposition de 1990 portait une signification particulière pour les organisateurs du capc, distincte de celle que lui attribuera Paul Bernard lors de *L'Ombre du jaseur* en 2014. Ces deux statuts coexistent dans le graphe sans que l'un n'annule l'autre, ce qui constitue une avancée réelle par rapport à une modélisation assertive et atemporelle #REF.

Cependant, AAAO reste fondamentalement un modèle d'affirmations situées portant sur des objets ou des faits discrets. Son architecture ne permet pas de prendre en charge les quatre dimensions constitutives du problème que pose *Feux pâles* comme objet de documentation.

**La modélisation des conceptions globales de l'exposition.** 

L'analyse du réseau d'acteurs gravitant autour de *Feux pâles* révèle que les divergences entre intervenants ne se réduisent pas à des attributions ponctuelles — du type « cette œuvre représente X pour tel acteur » — mais constituent des régimes d'intelligibilité complets portant sur l'identité ontologique de l'exposition, ses conditions de transmission et ses modes d'activation légitimes. Ainsi, lorsque Claire Burrus affirme que *Feux pâles* est une œuvre non reproductible dont la transmission est exclusivement documentaire, ou lorsque le capc considère l'exposition comme un événement révolu relevant uniquement de ses archives, chacun de ces acteurs ne formule pas une propriété isolée sur un objet précis : il exprime une conception globale de ce qu'*est* *Feux pâles* aujourd'hui. La classe ZE1 *Institutional Fact* d'AAAO s'attache nécessairement à une entité CRM (E1 *CRM Entity*) identifiable ; elle ne dispose d'aucun mécanisme pour encapsuler un tel régime d'intelligibilité comme entité à part entière.

L'étude de *Feux pâles* met en évidence que la relation entre les différentes perceptions de l'exposition n'est pas un simple fait de coexistence, mais constitue elle-même une donnée scientifique. La position de Paul Bernard, qui justifie *L'Ombre du jaseur* comme interprétation libre de l'exposition originale, entretient avec la position de Claire Burrus une tension spécifique, documentée et analysable, qui diffère de la relation que ces deux positions entretiennent respectivement avec la conception du capc. AAAO permet la coexistence de statuts attribués par des acteurs différents, mais ne modélise pas les relations entre ces statuts. Ces relations demeurent implicites, invisibles à l'interrogation des données.

Plusieurs acteurs du réseau entretiennent avec *Feux pâles* une relation qui ne se traduit pas par des affirmations positives sur l'exposition, mais par un refus ou une impossibilité déclarée de rendre certaines informations accessibles. Cette opacité, au sens où Glissant théorise le droit à l'opacité comme forme de résistance à la réduction, n'est pas une lacune documentaire à combler, mais un fait épistémique à modéliser en tant que tel. AAAO repose sur le postulat que tout statut institutionnel est exposable et décomposable ; il ne dispose d'aucun mécanisme pour représenter une présence qui se déclare tout en résistant à la transparence.

AAAO recourt systématiquement à la classe E52 *Time-Span* pour situer les statuts dans le temps, héritant ainsi de la limitation structurelle du CIDOC-CRM de base. Or, les modes d'existence temporelle des différentes conceptions de *Feux pâles* sont irréductibles à un intervalle daté. La position de Claire Burrus sur la non-reproductibilité de l'exposition ne vaut pas pour une période close : elle relève d'un régime d'énonciation dont la logique propre est celle de la conviction durable, potentiellement révisable mais pas forcément datée. Cependant son avis peut changer, ce qui peut être déclaré par un événement mais souvent reléi surtout à une source (ex: le refus de faire l'exposition en ... puis l'acceptation en .... selon condition) La source est a la meme date d'une entretien mais les dates sont floues quand à l'acceptation. De même, la notion d'activation telle qu'elle est développée dans la littérature sur les œuvres éphémères, chaque nouvelle présentation public augmentant la biographie de l'exposition sans en constituer un nouvel état de référence, implique une temporalité réactivable que E52 *Time-Span* ne peut formaliser.

AAAO permettrait de résoudre le problème de la contextualisation des affirmations discrètes, ne saurait constituer le cadre de modélisation adéquat pour l'objet spécifique que constitue *Feux pâles*. La contribution théorique centrale que ce travail cherche à formaliser, la coexistence non hiérarchique de régimes d'intelligibilité globaux portant sur un événement à identité instable, avec des temporalités hétérogènes et une opacité déclarée comme donnée positive, excède structurellement ce qu'AAAO est conçu pour représenter. 


# Qualifier l'état de connaissance dans la documentation des œuvres variables : de la grille de lecture de 2017 au modèle ontologique

## Introduction

La documentation d'œuvres variables et éphémères pose un problème que les systèmes de gestion de collection classiques traitent mal : celui de la coexistence, dans le temps, de plusieurs assertions concurrentes ou successives portant sur un même objet, tenues par des acteurs différents, avec des degrés de fiabilité inégaux et une validité elle-même parfois révolue. Un système relationnel classique impose une valeur unique par champ, ce qui contraint à choisir une version au détriment des autres et efface, du même geste, la trace du choix effectué.

La modélisation présentée ici part d'un constat simple : ce problème n'a pas été découvert au moment de la construction du modèle sémantique. Il avait déjà été identifié empiriquement, quinze ans plus tôt, dans l'étude de conservation-restauration de 2017 portant sur le corpus des œuvres associées à *Feux pâles*, sous la forme d'un code couleur appliqué manuellement à chaque fiche d'inventaire. La démarche suivie ici consiste à revenir à ce document comme source empirique, à identifier ce que sa grille de lecture codait implicitement, puis à traduire cette intuition en un dispositif formel s'appuyant sur le CIDOC-CRM et sur l'une de ses extensions informelles, l'Art and Architectural Argumentation Ontology (AAAo).

## 1. Le point de départ empirique : la grille de lecture de 2017

L'étude de 2017 précise elle-même la fonction de son code couleur, dans des termes qui méritent d'être cités comme point d'ancrage de toute la démarche qui suit :

> « Ce document est daté, l'auteur identifié, et ne se veut ni exhaustif ni immuable. [...] Il présente un état de référence. Les informations sur les œuvres exposées sont mises à jour. Un code couleur a été appliqué pour discerner les incertitudes et les manques. »

Quatre catégories organisent ce code : en gris, les informations manquantes ; en bleu, les données incertaines, n'ayant pu être identifiées ou confirmées par plusieurs sources ; en texte barré, les données valables en 1990 mais n'étant plus d'actualité ; en noir, les ajouts et changements vérifiés, sans pour autant être tenus pour immuables.

Ce système n'avait aucune prétention ontologique. Il répondait à un besoin de lecture pratique, une consultation rapide de l'état de la connaissance à un instant donné, sans figer cet état comme définitif, le document étant explicitement conçu pour être « copié et augmenté par les acteurs de l'exposition-réseau ». Il n'en reste pas moins qu'il distingue déjà, sans les nommer comme telles, des catégories que la modélisation ontologique doit retrouver et rendre computables : l'absence de donnée, le doute sur une donnée présente, la péremption d'une donnée par ailleurs certaine, et la confirmation.

Deux entrées du catalogue illustrent ces catégories de façon suffisamment contrastée pour servir de cas de référence à l'ensemble de la démonstration : le cadran solaire portatif de Thomas Tucher, dont la mention de propriété est barrée, et la coupe en corne de rhinocéros de la collection Kugel, dont l'ensemble des informations descriptives est en bleu.

## 2. Trois axes distincts de l'incertitude documentaire

Avant d'aborder les cas concrets, il convient d'établir la distinction structurelle sur laquelle repose l'ensemble du modèle. Le code couleur de 2017, en confondant sous une même logique de lecture visuelle des phénomènes de nature différente, invite à une clarification que le CIDOC-CRM permet de mener à son terme. Trois questions distinctes se posent face à toute donnée documentaire, et chacune appelle un mécanisme formel propre.

### 2.1. L'étendue référentielle de la valeur : la fuzziness

La première question est celle de l'extension réelle d'un intervalle, typiquement temporel : à quel point sait-on précisément quand un événement a eu lieu. Le CIDOC-CRM formalise cette question par un ensemble flou trapézoïdal, au moyen des propriétés `P81a_begin_of_the_begin`, `P81b_end_of_the_end` pour les bornes externes, et `P82a_begin_of_the_end`, `P82b_end_of_the_begin` pour les bornes internes, appliquées à une instance d'`E52 Time-Span`. Cette fuzziness porte sur l'objet du monde décrit, l'étendue réelle et potentiellement floue d'un événement, indépendamment de la confiance qu'on accorde à la source qui l'atteste.

Ce mécanisme reste, dans l'état actuel du standard, formellement réservé au temps. Le CRM reconnaît conceptuellement que la fuzziness est une propriété générale des « régions » qu'il modélise, temps, espace, espace-temps, dimension, mais l'appareillage à quatre bornes imbriquées qui donne sa gradation à la fuzziness temporelle n'a pas d'équivalent pleinement spécifié pour l'espace, où seules des constructions plus rudimentaires (`E94 Space Primitive`, `P168`) existent à ce jour.

### 2.2. La fiabilité de l'acte qui transmet l'information : la certitude

La deuxième question est indépendante de la première : quelle confiance accorde-t-on à l'acte qui a produit une assertion, quelle que soit par ailleurs la précision de cette assertion. Une date peut être ponctuelle, sans aucune fuzziness, et pourtant douteuse, si la source qui la rapporte est jugée peu fiable. À l'inverse, un intervalle large et flou peut être tenu pour parfaitement certain si la source qui l'atteste ne laisse aucun doute sur l'imprécision qu'elle rapporte elle-même.

Cette question ne relève pas de la structure de la valeur mais de l'acte qui l'assigne. Elle est portée par un vocabulaire contrôlé à trois catégories, directement issu du code couleur de 2017 :

```turtle
exhib:Verifie a skos:Concept ;
    skos:prefLabel "Vérifié"@fr ;
    skos:inScheme exhib:NiveauCertitude .

exhib:Incertain a skos:Concept ;
    skos:prefLabel "Incertain"@fr ;
    skos:inScheme exhib:NiveauCertitude .

exhib:Manquant a skos:Concept ;
    skos:prefLabel "Manquant"@fr ;
    skos:inScheme exhib:NiveauCertitude .
```

La propriété `ex:certitude` qui porte ce vocabulaire ne s'attache jamais à la valeur elle-même, mais à l'acte qui l'assigne, qu'il s'agisse d'un fait institutionnel au sens d'AAAo ou d'un constat d'état matériel formalisé par un `E13 Attribute Assignment` du CRM de base. Cette réification légère permet de conserver la donnée telle quelle tout en signalant son statut épistémique de façon interrogeable, sans recourir à l'appareillage inférentiel plus lourd de CRMinf.

### 2.3. La période de validité du fait lui-même

La troisième question, la plus tardivement identifiée dans cette réflexion, est celle qui correspond au texte barré du document de 2017 : pendant quelle période un fait a-t-il été collectivement tenu pour vrai, indépendamment du fait qu'il ait été, en son temps, parfaitement certain. Confondre cette question avec celle de la certitude serait une erreur catégorielle. Le barré ne signifie pas « on doute que ce fait ait été vrai », il signifie « ce fait était vrai, et ne l'est plus ». Baisser la confiance accordée à un fait révolu reviendrait à remettre en cause sa véracité passée, ce que rien dans le corpus ne justifie.

Cette question trouve sa réponse non pas dans une propriété à inventer, mais dans un trait déjà présent dans la structure d'AAAo : la classe `ZE1 Institutional Fact`, dont héritent l'ensemble des statuts institutionnels mobilisés ici (`ZE8 Ownership Status`, `ZE2 Appellative Status`, `ZE35 Locative Status`, `ZE25 Dating Status`), est explicitement sous-classe d'`E2 Temporal Entity` du CIDOC-CRM de base. Tout fait institutionnel porte donc nativement une propriété `P4_has_time-span`, qui ne qualifie pas l'objet décrit mais le fait lui-même, la période pendant laquelle ce fait a eu cours comme vérité sociale.

## 3. Le cadre d'accueil : l'Art and Architectural Argumentation Ontology

Les trois axes distingués ci-dessus prennent tout leur sens une fois rapportés à un cadre de représentation capable d'accueillir des faits multiples, datés, attribués à des acteurs, potentiellement concurrents. C'est précisément l'objet de l'Art and Architectural Argumentation Ontology (AAAo), extension informelle du CIDOC-CRM développée par la Swiss Art Research Infrastructure, conçue pour représenter « les différents faits non coïncidants tenus ou soutenus par différents acteurs à différents moments », qu'il s'agisse de faits simples ou de faits institutionnels.

Le cœur de ce modèle repose sur deux notions solidaires. Le fait institutionnel (`ZE1 Institutional Fact`) est une croyance collective sur l'état du monde, tenue par un groupe pour une période donnée, subjectivement fondée mais épistémiquement objective pour la communauté qui la partage. L'acte de parole (`ZE13 Speech Act`), au sens austinien, est l'événement intentionnel par lequel des agents appliquent une règle pour faire advenir un nouvel état social, c'est-à-dire produire un fait institutionnel. Un rapport de conservation, un catalogue d'exposition, une déclaration d'attribution sont, à ce titre, des actes de parole au sens plein du terme.

Ce cadre a été retenu de préférence à une modélisation strictement liée au CRM de base parce qu'il permet de matérialiser les faits sociaux comme des entités de première classe, plutôt que comme des propriétés binaires aoristiques du type `P1_is_identified_by`, qui n'admettent qu'une seule valeur actuelle et effacent, de ce fait, toute trace des états antérieurs ou concurrents.

## 4. Premier cas : la trace de propriété interrompue

L'entrée relative au cadran solaire portatif de Thomas Tucher fournit le cas le plus instructif du corpus. La fiche originale attribue l'objet à la collection du Kunsthistorisches Museum de Vienne, sous le numéro d'inventaire 9826. Cette mention est barrée dans le document de 2017, remplacée par une note indiquant que le propriétaire actuel est inconnu, l'objet relevant d'un processus de restitution de biens pillés adressé à Clarisse Rothschild. Deux couleurs se superposent sur un même objet, ce qui n'est pas un hasard de mise en page mais l'expression exacte de deux faits de nature différente : un fait de propriété révolu, vrai pour une période antérieure, et l'absence explicite d'un fait actuel, l'impossibilité présente de nommer un propriétaire.

Ce cas mobilise conjointement les trois axes distingués plus haut. Le fait de propriété viennoise est parfaitement certain, sa validité est en revanche close. Le fait successeur, celui de la restitution en cours, est de validité ouverte, mais son contenu propositionnel, le nom du propriétaire à venir, est manquant.

```turtle
exhib:propriete_vienne a aaao:ZE8_Ownership_Status ;
    aaao:ZP23_has_ownership_subject exhib:cadran_tucher ;
    aaao:ZP24_ascribes_owner exhib:khm_vienne ;
    crm:P4_has_time-span exhib:periode_propriete_vienne ;
    ex:certitude exhib:Verifie ;
    aaao:ZP113_has_successor_status exhib:propriete_inconnue_restitution .

exhib:periode_propriete_vienne a crm:E52_Time-Span ;
    crm:P82b_end_of_the_end "1990"^^xsd:gYear ;
    crm:P3_has_note "Fin de validité du fait de propriété, non de l'existence de l'objet."@fr .

exhib:propriete_inconnue_restitution a aaao:ZE8_Ownership_Status ;
    aaao:ZP23_has_ownership_subject exhib:cadran_tucher ;
    crm:P4_has_time-span exhib:periode_restitution ;
    ex:certitude exhib:Manquant ;
    crm:P3_has_note "Objet spolié, processus de restitution en cours vers Clarisse Rothschild."@fr .

exhib:periode_restitution a crm:E52_Time-Span ;
    crm:P82a_begin_of_the_begin "1990"^^xsd:gYear ;
    crm:P3_has_note "Borne de fin non renseignée, fait toujours en cours."@fr .
```

La propriété `ZP113_has_successor_status`, propre à AAAo, permet de chaîner ces deux statuts sans perdre la trace de l'ancien, ce qui restitue formellement ce que le barré donnait à voir intuitivement : la coexistence, sur un même objet, d'un savoir révolu et d'une absence de savoir actuel, sans confondre les deux dans une case unique de type « provenance actuelle : inconnue », qui aurait effacé la trace de l'ancienne collection.

## 5. Deuxième cas : l'information non corroborée

L'entrée relative à la coupe en corne de rhinocéros et son écrin, rattachée à la collection Kugel de Paris, illustre le second régime. Sa désignation, son origine allemande, sa datation au seizième siècle apparaissent en bleu dans le document de 2017, ces données n'ayant pu être confirmées par plusieurs sources. Il ne s'agit pas ici d'une information manquante, une désignation complète existe, ni d'une information révolue, aucune borne de fin de validité n'est en cause. Il s'agit d'une information disponible mais reposant sur une base documentaire jugée insuffisante par la rédactrice du rapport.

```turtle
exhib:appellation_coupe_corne a aaao:ZE2_Appellative_Status ;
    aaao:ZP5_has_appellative_subject exhib:coupe_corne_rhinoceros ;
    aaao:ZP6_ascribes_appellation "Coupe en corne de rhinocéros et son écrin"@fr ;
    crm:P4_has_time-span exhib:periode_indeterminee ;
    ex:certitude exhib:Incertain ;
    crm:P3_has_note "Attribution non confirmée par plusieurs sources, collection Kugel, Paris."@fr .
```

Ce cas justifie empiriquement le choix de rattacher `ex:certitude` à l'acte d'assignation plutôt qu'à la valeur elle-même. La désignation de l'objet reste inscrite dans le graphe sous sa forme complète, avec la même précision que si elle avait été vérifiée, mais l'acte qui l'assigne porte la marque `Incertain`. Une alternative plus simple, mais appauvrissante, aurait consisté à ne consigner que l'existence d'un doute sans consigner l'information elle-même, ou à l'inverse à consigner l'information sans trace de sa fragilité. Aucune des deux options n'aurait permis de restituer la nuance que le code couleur de 2017 exprimait déjà par la seule teinte du texte, sans supprimer ni le texte ni la nuance.

## 6. Diachronie et synchronie du désaccord : le cas du titre

Le troisième cas ne provient pas directement du document de 2017, mais du même corpus, et il permet de distinguer deux situations que la logique du code couleur, à elle seule, ne suffit pas à séparer.

Le changement diachronique légitime, tel que le passage du titre *Feux pâles* à *L'Ombre du jaseur* lors de la réactivation genevoise de l'œuvre en 2014, se modélise par deux statuts institutionnels successifs, chacun pleinement valide pour sa période, reliés par une propriété de succession. Aucune contradiction n'existe ici, les deux assertions sont vraies, chacune en son temps :

```turtle
exhib:appellation_1990 a aaao:ZE2_Appellative_Status ;
    aaao:ZP5_has_appellative_subject exhib:oeuvre ;
    aaao:ZP6_ascribes_appellation "Feux pâles"@fr ;
    crm:P4_has_time-span exhib:periode_1990_2014 ;
    ex:certitude exhib:Verifie ;
    aaao:ZP113_has_successor_status exhib:appellation_2014 .

exhib:appellation_2014 a aaao:ZE2_Appellative_Status ;
    aaao:ZP5_has_appellative_subject exhib:oeuvre ;
    aaao:ZP6_ascribes_appellation "L'Ombre du jaseur"@fr ;
    crm:P4_has_time-span exhib:periode_2014_ ;
    ex:certitude exhib:Verifie .
```

Le désaccord synchronique survient, à l'inverse, lorsque deux assertions prétendent valoir pour une même période, portées par des acteurs différents, l'une d'elles étant jugée erronée par la chercheuse. Ce cas mobilise les classes de l'acte symbolique (`ZE53 Symbolic Act`) et ses relations de contestation et d'affirmation (`ZP100_challenged`, `ZP101_affirmed`), qui permettent de faire porter une lecture critique sur un fait institutionnel préexistant sans le supprimer ni le masquer, et de proposer à sa place un fait concurrent, explicitement attribué à son autrice :

```turtle
exhib:appellation_source_ancienne a aaao:ZE2_Appellative_Status ;
    aaao:ZP5_has_appellative_subject exhib:oeuvre ;
    aaao:ZP6_ascribes_appellation "Sans titre"@fr ;
    aaao:ZP4_holds_for exhib:catalogue_capc_1990 ;
    crm:P4_has_time-span exhib:periode_1990 ;
    ex:certitude exhib:Verifie ;
    crm:P3_has_note "Titre tel qu'indiqué dans le catalogue d'exposition."@fr .

exhib:lecture_critique_zr a aaao:ZE18_Critical_Reading ;
    crm:P14_carried_out_by exhib:zoe_renaudie ;
    crm:P4_has_time-span exhib:periode_recherche_2024 ;
    aaao:ZP100_challenged exhib:appellation_source_ancienne ;
    aaao:ZP101_affirmed exhib:appellation_zr .

exhib:appellation_zr a aaao:ZE2_Appellative_Status ;
    aaao:ZP5_has_appellative_subject exhib:oeuvre ;
    aaao:ZP6_ascribes_appellation "Feux pâles"@fr ;
    aaao:ZP4_holds_for exhib:zoe_renaudie ;
    crm:P4_has_time-span exhib:periode_1990 ;
    ex:certitude exhib:Incertain ;
    crm:P3_has_note "Titre reconstitué à partir de la correspondance Thomas-CAPC, absent du catalogue officiel."@fr .
```

Les deux `Appellative_Status` portent sur la même période mais sont tenus par deux acteurs distincts, sans qu'aucun des deux ne soit supprimé ou masqué. Le couple challenged/affirmed qualifie ici une relation entre deux assertions concurrentes, avec identification explicite de qui tient quoi, ce que la seule certitude, appliquée à une assertion isolée, ne pourrait exprimer.

## 7. Ce qui a été écarté, et pourquoi

Trois options plus simples ont été examinées au cours de cette réflexion et rejetées, pour des raisons qu'il convient de rendre explicites plutôt que de les laisser implicites dans le choix final.

### 7.1. CRMinf pour l'ensemble des cas d'incertitude

La première option aurait consisté à utiliser systématiquement CRMinf, en construisant pour chaque assertion incertaine une chaîne de croyance (`I2 Belief`) rattachée à un acte d'inférence (`I5 Inference Making`) documenté comme argumentation (`I1 Argumentation`). Cette option a été écartée pour une raison de proportionnalité, non de principe. CRMinf a été conçu pour tracer des raisonnements scientifiques explicites, où l'inférence elle-même constitue l'objet d'étude, par exemple en archéologie stratigraphique ou en critique d'authenticité. Aucun des cas rencontrés dans le corpus de 2017, qu'il s'agisse du cadran Tucher ou de la coupe en corne de rhinocéros, ne demande de représenter un enchaînement de prémisses et de conclusions. Appliquer systématiquement l'appareillage de CRMinf à plusieurs centaines d'entrées de nature administrative ou bibliographique aurait produit une réification disproportionnée par rapport à l'information à transmettre.

### 7.2. L'extension de la fuzziness à des valeurs non temporelles

La deuxième option aurait consisté à étendre le mécanisme de fuzziness temporelle, les bornes P81/P82, à d'autres types de valeurs, par exemple en modélisant un intervalle flou de propriétaires possibles pour le cas Tucher. Cette option a été écartée parce qu'elle aurait supposé qu'un ensemble discret d'entités, ici des personnes ou institutions, puisse être traité comme un continuum bornable à la manière d'un intervalle temporel, ce qui n'a pas de fondement dans la nature de l'incertitude en jeu. L'incertitude sur un propriétaire n'est pas une indétermination de degré sur un axe continu, c'est une absence d'information ou une pluralité de candidats discrets, ce que les mécanismes de succession de statuts et de contestation d'AAAo représentent plus fidèlement. Plus généralement, la fuzziness reste, dans l'état actuel du standard, une réponse à une seule des trois questions distinguées plus haut, celle de l'étendue référentielle, et ne saurait se substituer aux deux autres sans confusion catégorielle.

### 7.3. Une échelle ordinale unique

La troisième option aurait consisté à fusionner les quatre couleurs du code de 2017 en une seule échelle ordinale, par exemple de 0 à 3, appliquée uniformément à chaque triplet du graphe. Cette option a été écartée parce qu'elle aurait masqué une différence de nature que le document de 2017 distinguait déjà correctement sans le théoriser explicitement. Une donnée manquante n'est pas un degré moindre de certitude par rapport à une donnée vérifiée, c'est une absence de donnée à statut propre. Une donnée révolue n'est pas moins vraie qu'une donnée actuelle, elle est vraie pour une autre période. Une échelle ordinale continue aurait suggéré une hiérarchie de fiabilité mutuellement commensurable, là où le document original organisait en réalité des catégories qualitativement distinctes, ce que la séparation entre statuts successifs, faits contestés, actes d'assignation qualifiés et périodes de validité permet de restituer sans réduction.

## 8. Synthèse des mécanismes retenus

| Question posée                                               | Mécanisme formel                                             | Portée                                                |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ----------------------------------------------------- |
| Quelle est l'étendue référentielle réelle de l'intervalle ?  | Fuzziness (`P81a/b`, `P82a/b` sur `E52 Time-Span`)           | Temporelle uniquement, dans l'état actuel du standard |
| Quelle confiance accorde-t-on à l'acte qui transmet l'information ? | `ex:certitude` sur l'acte d'assignation (`E13`) ou le fait institutionnel (`ZE1` et sous-classes) | Transversale, applicable à tout type de valeur        |
| Pendant quelle période le fait a-t-il eu cours comme vérité sociale ? | `P4_has_time-span` sur le fait institutionnel, hérité de sa nature d'`E2 Temporal Entity` | Propre aux faits institutionnels d'AAAo               |
| Deux faits concurrents pour une même période, tenus par des acteurs différents | `ZP100_challenged` / `ZP101_affirmed` sur un `ZE53 Symbolic Act` | Désaccord synchronique                                |
| Succession légitime d'un fait par un autre                   | `ZP113_has_successor_status`                                 | Diachronie sans contradiction                         |

## Conclusion

Le retour au document de 2017 confirme que la grille de lecture élaborée pour l'étude de conservation-restauration n'était pas un simple outil de mise en forme, mais une intuition déjà ontologique de la stratification du savoir documentaire. Le gris, le bleu, le barré et le noir codaient, sans les nommer, trois questions distinctes que la formalisation sémantique permet aujourd'hui de séparer explicitement : l'étendue d'une valeur, la fiabilité de l'acte qui la transmet, et la période pendant laquelle un fait a été collectivement tenu pour vrai. La démarche suivie ici n'invente donc pas une catégorisation nouvelle, elle rend interrogeable et computable une distinction que la pratique de conservation-restauration avait déjà établie empiriquement, quinze ans avant sa traduction en modèle sémantique. Ce constat rejoint directement la thèse défendue par ailleurs : la documentation n'est pas un constat neutre mais un acte interprétatif situé, et le modèle qui en rend compte doit conserver la trace de ce que l'on sait, de ce que l'on ne sait plus, et de ce que l'on n'a jamais su avec certitude, plutôt que de les réduire à un état présent unique et stable.


Oui, et ce cas est en réalité le plus riche rencontré jusqu'ici, parce qu'il ne s'agit plus de qualifier une incertitude ou un désaccord ponctuel, mais de représenter un système entier de positions concurrentes, stables, tenues durablement par des groupes identifiés, avec un cadre théorique explicite (Kuhn) qui justifie de les traiter comme des paradigmes plutôt que comme de simples opinions. `ZE4 Classificatory Status` reste la classe pertinente, mais il faut construire autour d'elle un dispositif plus complet, capable de porter le vocabulaire des paradigmes eux-mêmes et la provenance de chaque position.

**Un point à trancher d'abord : le statut de votre propre position**

Le paradigme "bien culturel à conserver/restaurer" que vous formulez n'est pas de la même nature que les trois autres. Les trois premiers sont des positions concurrentes sur ce qu'est l'œuvre. Le vôtre n'est pas une quatrième réponse concurrente à la même question, c'est une position de second ordre sur le statut des trois premières, celle qui affirme qu'elles sont "justes tant qu'elles existent". Le patron `ZP100_challenged`/`ZP101_affirmed` déjà utilisé pour le titre contesté ne convient pas ici, il présuppose qu'une position remplace une autre jugée fausse. Or votre geste est inverse : vous ne contestez aucun des trois paradigmes, vous les tenez tous pour valides simultanément, et vous formulez une proposition de méthode qui les prend collectivement pour objet. Il faut donc deux niveaux de modélisation distincts.

**Niveau 1 : le vocabulaire des paradigmes**

```turtle
exhib:SchemaParadigmes a skos:ConceptScheme ;
    skos:prefLabel "Paradigmes de compréhension de Feux pâles"@fr ;
    crm:P3_has_note "Vocabulaire construit sur la notion de paradigme au sens de Kuhn, 1962."@fr .

exhib:paradigme_evenement_passe a skos:Concept ;
    skos:prefLabel "Réalisation sensible d'un événement situé dans le passé"@fr ;
    skos:inScheme exhib:SchemaParadigmes .

exhib:paradigme_oeuvre_non_replicable a skos:Concept ;
    skos:prefLabel "Œuvre non reproductible, transmission documentaire"@fr ;
    skos:inScheme exhib:SchemaParadigmes .

exhib:paradigme_oeuvre_adaptable a skos:Concept ;
    skos:prefLabel "Œuvre-exposition adaptable et interprétable"@fr ;
    skos:inScheme exhib:SchemaParadigmes .
```

**Niveau 2 : chaque position d'acteur comme fait institutionnel daté et attribué**

```turtle
# Position du capc
exhib:classification_capc a aaao:ZE4_Classificatory_Status ;
    aaao:ZP11_has_classificatory_subject exhib:feuxPales ;
    aaao:ZP12_ascribes_classification exhib:paradigme_evenement_passe ;
    aaao:ZP4_holds_for exhib:capc_bordeaux ;
    crm:P4_has_time-span exhib:periode_enquete ;
    ex:certitude exhib:Verifie ;
    crm:P3_has_note "L'exposition n'a pas de statut différent des autres expositions de la période Froment. Conservation et publicisation hors des missions du musée. Prêt des œuvres et ouverture des archives sans participation directe au projet d'interprétation."@fr .

# Position de Claire Burrus
exhib:classification_burrus a aaao:ZE4_Classificatory_Status ;
    aaao:ZP11_has_classificatory_subject exhib:feuxPales ;
    aaao:ZP12_ascribes_classification exhib:paradigme_oeuvre_non_replicable ;
    aaao:ZP4_holds_for exhib:claire_burrus ;
    crm:P4_has_time-span exhib:periode_premieres_entrevues ;
    ex:certitude exhib:Verifie ;
    crm:P3_has_note "Reconstitution impensable, transmission documentaire uniquement. Opposition claire à toute reconstitution de l'exposition lors des premières entrevues."@fr .

# Position d'Emeline Jaret, nuance interne au même camp
exhib:classification_jaret a aaao:ZE4_Classificatory_Status ;
    aaao:ZP11_has_classificatory_subject exhib:feuxPales ;
    aaao:ZP12_ascribes_classification exhib:paradigme_oeuvre_non_replicable ;
    aaao:ZP4_holds_for exhib:emeline_jaret ;
    crm:P4_has_time-span exhib:periode_recente ;
    ex:certitude exhib:Verifie ;
    crm:P3_has_note "Insiste sur l'accompagnement documentaire nécessaire à toute reconstitution. L'Ombre du jaseur n'était pas Feux pâles et ne permettait pas d'expérimenter l'exposition, le contexte étant trop différent."@fr .

# Position du Mamco
exhib:classification_mamco a aaao:ZE4_Classificatory_Status ;
    aaao:ZP11_has_classificatory_subject exhib:feuxPales ;
    aaao:ZP12_ascribes_classification exhib:paradigme_oeuvre_adaptable ;
    aaao:ZP4_holds_for exhib:mamco_geneve ;
    crm:P4_has_time-span exhib:periode_2014 ;
    ex:certitude exhib:Verifie ;
    crm:P3_has_note "L'Ombre du jaseur est une interprétation, non une reconstitution de Feux pâles. Justification des libertés prises par Paul Bernard."@fr .
```

Deux points méritent d'être soulignés dans ce montage. D'abord, Burrus et Jaret partagent le même type de paradigme mais ne sont pas fusionnées en un seul fait institutionnel, précisément parce que vos entretiens révèlent une inflexion interne, l'accent se déplaçant du refus catégorique vers l'exigence d'accompagnement documentaire. Les traiter comme deux instances distinctes, datées différemment, permet de garder cette évolution visible plutôt que de l'aplatir dans une position unique attribuée au "camp Burrus" globalement. Ensuite, chaque fait est daté par la période où vous l'avez recueilli (vos entrevues), pas par une date de validité intrinsèque au paradigme, ce qui correspond à la nature de l'information : vous rapportez un état de discours à un moment de votre enquête, non une vérité intemporelle.

**Provenance : rattacher chaque position à l'acte qui vous l'a révélée**

Pour rester fidèle à votre méthode d'enquête de terrain, chaque `ZE4_Classificatory_Status` gagnerait à être rattaché non pas directement à vous comme simple assertion, mais à l'entretien ou la source qui vous l'a livrée :

```turtle
exhib:entretien_burrus_2023 a aaao:ZE18_Critical_Reading ;
    crm:P14_carried_out_by exhib:zoe_renaudie ;
    crm:P4_has_time-span exhib:periode_premieres_entrevues ;
    crm:P3_has_note "Entretien avec Claire Burrus."@fr .
```

que vous pouvez ensuite relier à `exhib:classification_burrus` par une propriété de type `P70i_is_documented_in` ou en faisant de l'entretien la source de l'acte de parole producteur du fait, selon le niveau de granularité que vous voulez atteindre. Ce n'est pas strictement nécessaire pour représenter le paradigme lui-même, mais cela consolide la traçabilité méthodologique, ce qui est cohérent avec votre exigence de situer chaque assertion.

**Niveau 3 : votre propre position, comme geste distinct**

Votre paradigme "bien culturel à conserver/restaurer" n'ascrit pas une classification à l'œuvre, il ascrit un statut à l'ensemble des trois classifications précédentes, celui d'être toutes simultanément valides. Le candidat le plus fidèle dans AAAo est `ZE24 Notional Set`, complété par `ZE33 Declarative Formation`, l'acte par lequel vous constituez ce regroupement comme objet d'étude et de méthode.

```turtle
# L'ensemble notionnel des paradigmes actifs sur le réseau Feux pâles
exhib:reseau_paradigmes_feuxPales a aaao:ZE24_Notional_Set ;
    rdfs:label "Réseau des paradigmes actifs autour de Feux pâles"@fr .

exhib:constitution_reseau a aaao:ZE33_Declarative_Formation ;
    crm:P14_carried_out_by exhib:zoe_renaudie ;
    crm:P4_has_time-span exhib:periode_these ;
    crm:P3_has_note "Constitution du réseau de paradigmes comme objet de l'étude, tous tenus pour justes tant qu'ils existent, sans arbitrage hiérarchique entre eux."@fr .

# Chaque classification devient membre du set
exhib:appartenance_capc a aaao:ZE15_Set_Status ;
    aaao:ZP47_has_set_belonging_subject exhib:classification_capc ;
    aaao:ZP48_ascribes_set exhib:reseau_paradigmes_feuxPales .

exhib:appartenance_burrus a aaao:ZE15_Set_Status ;
    aaao:ZP47_has_set_belonging_subject exhib:classification_burrus ;
    aaao:ZP48_ascribes_set exhib:reseau_paradigmes_feuxPales .

exhib:appartenance_mamco a aaao:ZE15_Set_Status ;
    aaao:ZP47_has_set_belonging_subject exhib:classification_mamco ;
    aaao:ZP48_ascribes_set exhib:reseau_paradigmes_feuxPales .
```

Ce troisième niveau traduit exactement votre phrase, "je considère que pour étudier Feux pâles, il faut prendre en compte tous les points de vue rencontrés". Le geste n'est pas de trancher entre les paradigmes ni de les faire concourir pour une seule vérité, il est de les constituer collectivement comme l'objet même de l'étude en conservation-restauration, ce que `ZE33 Declarative Formation` capte comme acte distinct, attribué à vous, daté de votre recherche, plutôt que mêlé aux trois positions qu'il rassemble.

**Ce que cette structure rend possible**

Une requête SPARQL peut désormais demander l'ensemble des paradigmes actifs sur une œuvre donnée, filtrer par acteur, observer les évolutions internes à un même camp au fil du temps, ou visualiser le réseau comme un graphe de positions plutôt que comme une fiche à valeur unique. C'est un apport substantiel par rapport à un système de gestion de collection classique, qui devrait, par construction, choisir un seul descripteur de nature de l'œuvre. Le modèle donne ici une forme opératoire exacte à votre thèse : l'authenticité comme question de perspective plutôt que de matérialité ou d'intention seule, chaque perspective restant un nœud du graphe plutôt qu'un jugement arbitral.


