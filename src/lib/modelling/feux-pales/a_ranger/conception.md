
C'est maintenant beaucoup plus clair grâce à la définition officielle que vous avez fournie. La confusion venait du fait que `ZE4 Classificatory Status` **est** une sous-classe de `ZE1 Institutional Fact`.

**Cela change tout :**
Il n'y a **pas besoin de lien explicite** (propriété) entre le "Fait Institutionnel" et le "Statut de Classification" dans votre graphe, car **le Statut de Classification EST DÉJÀ un Fait Institutionnel**.

En logique de premier ordre (comme indiqué dans votre texte : `ZE4(x) ⇒ ZE1(x)`), si quelque chose est un `ZE4`, il est automatiquement et intrinsèquement un `ZE1`.

**Correction de la modélisation :**
Dans votre diagramme et votre Turtle précédent, vous aviez créé deux nœuds séparés (`non_reproduction_situation` et `classif_burrus`) comme s'ils étaient deux entités distinctes à relier. En réalité, **ils ne font qu'un**. Le nœud `classif_burrus` **est** le fait institutionnel.

Le nœud `non_reproduction_situation` dans votre diagramme Mermaid initial était probablement une représentation visuelle du *concept* global, mais en RDF/Turtle, vous ne devez avoir **qu'un seul nœud** de type `aaao:ZE4_Classificatory_Status`. Ce seul nœud hérite de toutes les propriétés de `ZE1` (comme `ZP1_has_intentional_subject`).

Voici comment corriger votre Turtle. Il faut **fusionner** les deux nœuds. Le nœud de classification porte directement les propriétés du fait institutionnel :

```turtle
@prefix crm: <http://www.cidoc-crm.org/cidoc-crm/> .
@prefix aaao: <http://example.org/aaao/> .
@prefix ex: <http://example.org/data/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

# 1. L'œuvre (Sujet)
ex:FeuxPales a crm:E28_Conceptual_Object ;
    rdfs:label "Feux Pâles" .

# 2. L'acteur (Claire Burrus)
ex:ClaireBurrus a crm:E21_Person ;
    rdfs:label "Claire Burrus" .

# 3. Le Type (Non-reproducible work)
ex:TypeNonReproductible a crm:E55_Type ;
    rdfs:label "Non-reproducible work" .

# 4. Le Statut de Classification (QUI EST AUSSI un Fait Institutionnel)
# C'est l'unique nœud nécessaire. Il combine ZE4 et ZE1.
ex:ClassifBurrus_FaitInstitutionnel a aaao:ZE4_Classificatory_Status ; 
    # Pas besoin de déclarer aussi aaao:ZE1_Institutional_Fact, c'est implicite par la hiérarchie (rdfs:subClassOf)
    # Mais on peut le faire explicitement si on veut insister sur l'aspect "Fait" :
    # a aaao:ZE1_Institutional_Fact ; 
    
    rdfs:label "Classification de Feux Pâles comme œuvre non reproductible par Claire Burrus (2017)" ;

    # --- Propriétés de ZE4 (Classificatory Status) ---
    aaao:ZP11_has_classificatory_subject ex:FeuxPales ;
    aaao:ZP12_ascribes_classification ex:TypeNonReproductible ;
    aaao:ZP4_holds_for ex:ClaireBurrus ;

    # --- Propriétés de ZE1 (Institutional Fact) héritées ---
    # Le sujet intentionnel du fait institutionnel est le même que le sujet de la classification
    aaao:ZP1_has_intentional_subject ex:FeuxPales ;
    
    # La dimension temporelle (2017)
    crm:P4_has_time-span [
        a crm:E52_Time-Span ;
        rdfs:label "2017" ;
        crm:P82a_begin_of_the_begin "2017-01-01T00:00:00Z"^^xsd:dateTime ;
        crm:P82b_end_of_the_end "2017-12-31T23:59:59Z"^^xsd:dateTime
    ] .
```

**Pourquoi cela résout votre problème de paradigmes :**
Votre texte décrit plusieurs paradigmes coexistants (événement passé, œuvre non reproductible, œuvre adaptable, bien culturel).
Grâce à cette structure `ZE4` (sous-classe de `ZE1`), vous pouvez créer **plusieurs nœuds distincts** pour la même œuvre (`ex:FeuxPales`), chacun représentant un paradigme différent, sans conflit :

1.  **Nœud A (Paradigme Burrus) :** Type `ZE4_Classificatory_Status`. Sujet : `FeuxPales`. Type : `NonReproducible`. Acteur : `Burrus`.
2.  **Nœud B (Paradigme Musée) :** Type `ZE4_Classificatory_Status` (ou un autre statut). Sujet : `FeuxPales`. Type : `ExpositionArchivée`. Acteur : `CAPC_Museum`.
3.  **Nœud C (Paradigme MAMCO) :** Type `ZE4_Classificatory_Status`. Sujet : `FeuxPales`. Type : `OeuvreAdaptable`. Acteur : `Christian_Bernard`.

Chaque nœud est un **Fait Institutionnel** indépendant et valide pour son acteur et sa période. Ils "s'assoient simplement côte à côte" comme vos notes l'expliquaient, sans avoir besoin de se reconcilier ou de créer des liens complexes entre eux. Le "Fait Institutionnel" n'est pas un conteneur séparé, c'est la nature même de la classification.



@prefix crm: <http://www.cidoc-crm.org/cidoc-crm/> .
@prefix aaao: <https://example.org/AAAo/> .
@prefix ex: <https://example.org/feux_pales/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

---

### **1. Déclaration de *Feux pâles* comme `crm:E28_Conceptual_Object`**
ex:feuxPales a crm:E28_Conceptual_Object ;
    rdfs:label "Feux Pâles" .

---

### **2. Déclaration de la situation institutionnelle (`aaao:ZE1_Institutional_Fact`)**
ex:non_reproduction_situation a aaao:ZE1_Institutional_Fact ;
    rdfs:label "Situation de non-reproduction" ;
    aaao:ZP1_has_intentional_subject ex:feuxPales .  # Lien vers *Feux pâles*

---

### **3. Déclaration de la classification par Claire Burrus (`aaao:ZE4_Classificatory_Status`)**
ex:classif_burrus a aaao:ZE4_Classificatory_Status ;
    rdfs:label "Classification : œuvre non reproductible" ;
    aaao:ZP11_has_classificatory_subject ex:feuxPales ;  # Sujet classifié : *Feux pâles*
    aaao:ZP12_ascribes_classification ex:type_non_reproductible ;  # Type attribué
    aaao:ZP4_holds_for ex:burrus .  # Acteur : Claire Burrus

---
### **4. Déclaration du type "Non-reproducible work" (`crm:E55_Type`)**
ex:type_non_reproductible a crm:E55_Type ;
    rdfs:label "Non-reproducible work" .

---
### **5. Déclaration de Claire Burrus (`crm:E21_Person`)**
ex:burrus a crm:E21_Person ;
    rdfs:label "Claire Burrus" .

---
### **6. Ajout des autres classifications (exemple pour Jaret)**
ex:classif_jaret a aaao:ZE4_Classificatory_Status ;
    rdfs:label "Classification : reconstitution exige un accompagnement documentaire rigoureux" ;
    aaao:ZP11_has_classificatory_subject ex:feuxPales ;
    aaao:ZP12_ascribes_classification ex:type_reconstitution_rigoureuse ;
    aaao:ZP4_holds_for ex:jaret .

ex:type_reconstitution_rigoureuse a crm:E55_Type ;
    rdfs:label "Reconstitution exige un accompagnement documentaire rigoureux" .

ex:jaret a crm:E21_Person ;
    rdfs:label "Jaret" .

### **7. Ajout du CAPC**
ex:classif_capc a aaao:ZE4_Classificatory_Status ;
    rdfs:label "Classification : pas de statut particulier dans la programmation de l'ère Froment" ;
    aaao:ZP11_has_classificatory_subject ex:feuxPales ;
    aaao:ZP12_ascribes_classification ex:type_pas_de_statut ;
    aaao:ZP4_holds_for ex:capc .

ex:type_pas_de_statut a crm:E55_Type ;
    rdfs:label "Pas de statut particulier dans la programmation de l'ère Froment" .

ex:capc a crm:E74_Group ;
    rdfs:label "CAPC Musée d'art contemporain de Bordeaux" .




@prefix crm: <http://www.cidoc-crm.org/cidoc-crm/> .
@prefix la: <https://linked.art/ns/terms/> .
@prefix ex: <https://example.org/feux_pales/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix crm: <http://www.cidoc-crm.org/cidoc-crm/> .
@prefix curate: <https://example.org/curate/> .
@prefix aaa: <https://example.org/AAAo/> .
@prefix ex: <https://example.org/feux_pales/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix dcterms: <http://purl.org/dc/terms/> .

---
# Classification par Claire Burrus : "Œuvre non reproductible"
ex:classification_burrus a aaa:ZE4_Classificatory_Status ;
    rdfs:label "Classification de *Feux pâles* comme œuvre non reproductible" ;
    aaa:P1_classifies ex:feux_pales_expo ; 
    aaa:P2_has_type "œuvre non reproductible" ;  
    crm:P14_carried_out_by ex:claire_burrus ;  
    crm:P4_has_time-span ex:time_span_2016_2017 ;  
    dcterms:description "Transmission exclusivement documentaire." .

# Classification par Jaret : "Reconstitution exige un accompagnement documentaire rigoureux"
ex:classification_jaret a aaa:ZE4_Classificatory_Status ;
    rdfs:label "Classification de *Feux pâles* par Jaret" ;
    aaa:P1_classifies ex:feux_pales_expo ;
    aaa:P2_has_type "reconstitution exige un accompagnement documentaire rigoureux" ;
    crm:P14_carried_out_by ex:emeline_jaret ;
    crm:P4_has_time-span ex:time_span_2016_2017 ;
    dcterms:description "La reprise de 2014 n'était pas *Feux pâles* (contexte trop différent)." .

# Classification par le MAMCO : "Interprétation libre, non une reconstitution"
ex:classification_mamco a aaa:ZE4_Classificatory_Status ;
    rdfs:label "Classification de *Feux pâles* par le MAMCO" ;
    aaa:P1_classifies ex:accrochage_OmbreJaseur ;
    aaa:P2_has_type "interprétation libre, non une reconstitution" ;
    crm:P14_carried_out_by ex:mamco ;
    crm:P4_has_time-span ex:time_span_2016_2017 ;
    dcterms:description "Reprise assumée comme une interprétation libre." .

# Classification par le CAPC : "Pas de statut particulier dans la programmation de l'ère Froment"
ex:classification_capc a aaa:ZE4_Classificatory_Status ;
    rdfs:label "Classification de *Feux pâles* par le CAPC" ;
    aaa:P1_classifies ex:feux_pales_expo ;
    aaa:P2_has_type "pas de statut particulier dans la programmation de l'ère Froment" ;
    crm:P14_carried_out_by ex:capc ;
    crm:P4_has_time-span ex:time_span_2016_2017 ;
    dcterms:description "Conservation et publicité échappent au mandat du musée." .

# Classification par l'utilisateur : "Toutes les positions sont valables"
ex:classification_conservation a aaa:ZE4_Classificatory_Status ;
    rdfs:label "Acceptation de toutes les conceptions de *Feux Pâles*" ;
    aaa:P1_classifies ex:feux_pales_concept ;
    aaa:P2_has_type "toutes les positions sont valables" ;
    crm:P14_carried_out_by ex:zoe_renaudie ;
    crm:P4_has_time-span ex:time_span_2017 ;
    dcterms:description "Les positions peuvent évoluer ou changer." .

Déclaration de la situation institutionnelle (`aaao:ZE1_Institutional_Fact`)**
ex:non_reproduction_situation a aaao:ZE1_Institutional_Fact ;
    rdfs:label "Situation de non-reproduction" ;
    aaao:ZP1_has_intentional_subject ex:feuxPales .  # Lien vers *Feux pâles*

---

### **1. Déclaration des acteurs (E74_Group, E21_Person)**
ex:capc a crm:E74_Group ;
    rdfs:label "CAPC Musée d'art contemporain de Bordeaux" .

ex:claire_burrus a crm:E21_Person ;
    rdfs:label "Claire Burrus" ;
    crm:P2_has_type "Gardienne de la succession" .

ex:jaret a crm:E21_Person ;
    rdfs:label "Jaret" .

ex:mamco a crm:E74_Group ;
    rdfs:label "MAMCO (Musée d'art moderne et contemporain de Genève)" .

ex:user a crm:E21_Person ;
    rdfs:label "z R" .

---

### **2. Déclaration de l'œuvre *Feux pâles* (E22_Human-Made_Object)**
ex:feux_pales a crm:E22_Human-Made_Object ;
    rdfs:label "Feux pâles" .

---

### **3. Déclaration des classifications (ZE4_Classificatory_Status)**
# Classification par Claire Burrus : "Œuvre non reproductible"
ex:classification_burrus a aaa:ZE4_Classificatory_Status ;
    rdfs:label "Classification de *Feux pâles* comme œuvre non reproductible" ;
    aaa:P1_classifies ex:feux_pales ;  # Sujet classifié
    aaa:P2_has_type "œuvre non reproductible" ;  # Type de classification
    crm:P14_carried_out_by ex:claire_burrus ;  # Acteur
    crm:P4_has_time-span ex:time_span_2017 ;  # Moment
    dcterms:description "Transmission exclusivement documentaire." .

# Classification par Jaret : "Reconstitution exige un accompagnement documentaire rigoureux"
ex:classification_jaret a aaa:ZE4_Classificatory_Status ;
    rdfs:label "Classification de *Feux pâles* par Jaret" ;
    aaa:P1_classifies ex:feux_pales ;
    aaa:P2_has_type "reconstitution exige un accompagnement documentaire rigoureux" ;
    crm:P14_carried_out_by ex:jaret ;
    crm:P4_has_time-span ex:time_span_2017 ;
    dcterms:description "La reprise de 2014 n'était pas *Feux pâles* (contexte trop différent)." .

# Classification par le MAMCO : "Interprétation libre, non une reconstitution"
ex:classification_mamco a aaa:ZE4_Classificatory_Status ;
    rdfs:label "Classification de *Feux pâles* par le MAMCO" ;
    aaa:P1_classifies ex:feux_pales ;
    aaa:P2_has_type "interprétation libre, non une reconstitution" ;
    crm:P14_carried_out_by ex:mamco ;
    crm:P4_has_time-span ex:time_span_2017 ;
    dcterms:description "Reprise assumée comme une interprétation libre." .

# Classification par le CAPC : "Pas de statut particulier dans la programmation de l'ère Froment"
ex:classification_capc a aaa:ZE4_Classificatory_Status ;
    rdfs:label "Classification de *Feux pâles* par le CAPC" ;
    aaa:P1_classifies ex:feux_pales ;
    aaa:P2_has_type "pas de statut particulier dans la programmation de l'ère Froment" ;
    crm:P14_carried_out_by ex:capc ;
    crm:P4_has_time-span ex:time_span_2017 ;
    dcterms:description "Conservation et publicité échappent au mandat du musée." .

# Classification par l'utilisateur : "Toutes les positions sont valables"
ex:classification_user a aaa:ZE4_Classificatory_Status ;
    rdfs:label "Classification de *Feux pâles* par z R" ;
    aaa:P1_classifies ex:feux_pales ;
    aaa:P2_has_type "toutes les positions sont valables" ;
    crm:P14_carried_out_by ex:user ;
    crm:P4_has_time-span ex:time_span_2017 ;
    dcterms:description "Les positions peuvent évoluer ou changer." .

---

### **4. Déclaration du time-span (E52_Time-Span) pour 2017**
ex:time_span_2017 a crm:E52_Time-Span ;
    crm:P82_at_some_time_within "2017" ;
    rdfs:label "2017" .

---
### **5. Déclaration des récits (Narratives, Plots, Stories) - Optionnel**
# Narrative officielle (exemple)
ex:narrative_officielle a curate:Narrative ;
    rdfs:label "Narrative officielle sur *Feux pâles*" .

# Plot pour le CAPC
ex:plot_capc a curate:Plot ;
    rdfs:label "Plot: Position du CAPC sur *Feux pâles*" ;
    curate:narratesPlot ex:narrative_officielle .

# Story pour le CAPC
ex:story_capc a curate:Story ;
    rdfs:label "Story: *Feux pâles* selon le CAPC" ;
    curate:plotsStory ex:plot_capc ;
    curate:hasAssociatedHeritageObject ex:feux_pales .

# Lien entre le plot et l'acteur (CAPC)
ex:plot_capc curate:hasActor ex:capc .

---
### **6. Lien entre les classifications et les récits (optionnel)**
# Exemple : Lier la classification de Claire Burrus à une narrative
ex:classification_burrus dcterms:isPartOf ex:narrative_officielle .

 



# --- POST-MORTEM / RESTRICTION DE VENTE (ex:a14) ---
ex:restriction_vente_postmortem a crm:E7_Activity ;
    rdfs:label "Instruction de non-vente des œuvres après décès" ;
    crm:P14_carried_out_by ex:philippe_thomas ;
    crm:P4_has_time-span "1995" ;
    crm:P3_has_note "Philippe Thomas empêche Claire Burrus de vendre les œuvres restantes. La vente faisait partie intégrante de la démarche." ;
    crm:P17_was_motivated_by "La vente des œuvres était constitutive de l'œuvre d'art" ;
    dcterms:source ex:rapport_conservation .



# --- CLASSIFICATION DE L'EXPOSITION (ex:a15, ex:a21, ex:a31) ---
# Plutôt que E17_Type_Assignment (qui est un acte de catalogage), on peut dire que 
# l'artiste a INTENTIONNÉ l'expo comme une œuvre.
ex:intention_artistique_feux_pales a crm:E7_Activity ;
    rdfs:label "Conception de Feux pâles comme œuvre d'art totale (Magnum Opus)" ;
    crm:P14_carried_out_by ex:philippe_thomas ;
    crm:P4_has_time-span "1990" ;
    crm:P3_has_note "Une fiction qui sort du cadre habituel. L'institution (capc) occupe la position du collectionneur. Considéré comme le magnum opus du fictionnalisme." ;
    dcterms:source ex:entretien_wargnier_1995 ;
    crm:P3_has_note "Source secondaire : Carnet THO 109, note de l'artiste." .

# Lien : L'exposition est le résultat de cette intention
ex:feux_pales crm:P17_was_motivated_by ex:intention_artistique_feux_pales .

# --- RÉFÉRENCE INTERTEXTUELLE (ex:a24) ---
# Lien sémantique entre l'expo et le livre
ex:feux_pales crm:P129_is_about ex:roman_pale_fire ;
    crm:P3_has_note "Titre dérivé au pluriel du roman 'Feu pâle' (Pale Fire) de Vladimir Nabokov (1961)." .

ex:roman_pale_fire a crm:E33_Linguistic_Object ;
    rdfs:label "Pale Fire" ;
    crm:P102_has_title "Feu pâle" ;
    crm:P14i_was_created_by ex:ecriture_pale_fire_nabokov .

ex:ecriture_pale_fire_nabokov a crm:E7_Activity ;
    crm:P14_carried_out_by ex:vladimir_nabokov ;
    crm:P4_has_time-span "1961" .

# --- RÉUTILISATION D'ŒUVRE (ex:a20) ---
ex:reprise_lavier_biennale a crm:E7_Activity ;
    rdfs:label "Présentation d'une pièce de PT par Bertrand Lavier à la Biennale de Lyon" ;
    crm:P14_carried_out_by ex:bertrand_lavier ;
    crm:P4_has_time-span "1991" ;
    crm:P16_used_specific_object ex:tableau_code_barres ; # L'œuvre originale utilisée
    crm:P3_has_note "Reprise / œuvre dérivée dans le cadre des travaux de Lavier." ;
    dcterms:source ex:rapport_biennale_1991 .

# --- COMPÉTITION D'AUTEUR (ex:a22, ex:a28) ---
# En CRM pur, on décrit les deux revendications comme des événements distincts ou des notes contradictoires sur l'événement principal.
# Option 1 : Note sur l'événement de production
ex:production_feux_pales a crm:E12_Production ; # Ou E7_Activity
    crm:P108_has_produced ex:feux_pales ;
    crm:P14_carried_out_by ex:capc ; # Version institutionnelle
    crm:P3_has_note "Version officielle : Exposition réalisée et signée par le capc." ;
    crm:P3_has_note "Version réelle (fictionnaliste) : Exposition conçue par Philippe Thomas sous couvert de l'agence, identité dissimulée." .

# Si vous devez absolument garder la structure de "Claim" (Revendication) pour un système d'argumentation, 
# gardez les classes curate:, mais assurez-vous qu'elles pointent vers les événements CRM réels définis ci-dessus.

