réseaux d’influence** :
   - Utiliser **`P15_was_influenced_by`** pour documenter les **influences artistiques** (ex. *Feux Pâles* influencée par Nabokov).
   - **Exemple** :
     ```turtle
     exhib:concept01 crm:P15_was_influenced_by exhib:nabokov_feux_pales .
     exhib:nabokov_feux_pales a crm:E28_Conceptual_Object ;
         rdfs:label "Feux pâles (Nabokov)" .


ex:depart_groupe_IFP a crm:E7_Activity ;
    rdfs:label "Départ de Philippe Thomas du groupe IFP" ;
    crm:P14_carried_out_by ex:philippe_thomas ;
    crm:P4_has_time-span "1985" ;
    crm:P3_has_note "Quitte le groupe IFP pour créer le Fictionnalisme." ;
    crm:P17_was_motivated_by "Développer ses recherches personnelles" ;
    dcterms:source ex:rapport_conservation_1990 .



ex:ecriture_lettre_edelkoort a crm:E7_Activity ;
    rdfs:label "Échange épistolaire avec Lidewij Edelkoort" ;
    crm:P14_carried_out_by ex:philippe_thomas ;
    crm:P14_carried_out_by ex:lidewij_edelkoort ; # Co-acteure via la contresignature
    crm:P4_has_time-span "1983" ;
    crm:P3_has_note "Lettre à Lidewij Edelkoort contresignée par elle, amorçant la disparition du nom de l'artiste." ;
    dcterms:source ex:rapport_conservation_1990 .


    # --- CRÉATION DE L'AGENCE (ex:a16, ex:a17) ---
ex:creation_agence_rmatlm_ny a crm:E63_Beginning_of_Existence ;
    rdfs:label "Ouverture de l'agence 'Readymades belong to everyone®' à New York" ;
    crm:P98_brought_into_life ex:agence_rmatlm ;
    crm:P4_has_time-span "1987-12" ;
    crm:P14_carried_out_by ex:philippe_thomas ;
    crm:P7_took_place_at ex:lieu_cable_gallery_ny ;
    dcterms:source ex:rapport_conservation_1990 .

ex:creation_filiale_paris a crm:E7_Activity ;
    rdfs:label "Création de la filiale française à la galerie Claire Burrus" ;
    crm:P14_carried_out_by ex:claire_burrus ;
    crm:P14_carried_out_by ex:philippe_thomas ;
    crm:P4_has_time-span "1988-09" ;
    crm:P7_took_place_at ex:lieu_galerie_claire_burrus ;
    dcterms:source ex:rapport_conservation_1990 .

ex:agence_rmatlm a crm:E74_Group ;
    rdfs:label "Readymades belong to everyone®" ;
    crm:P3_has_note "Agence fictive/réelle créée par Philippe Thomas." .

# --- ACTIVITÉS PUBLICITAIRES (ex:a18) ---
ex:campagnes_pub_dolci_dire a crm:E7_Activity ;
    rdfs:label "Campagnes publicitaires avec Dolci Dire & associés" ;
    crm:P14_carried_out_by ex:agence_rmatlm ;
    crm:P14_carried_out_by ex:dolci_dire ;
    crm:P3_has_note "Projets et campagnes publicitaires en collaboration." ;
    dcterms:source ex:rapport_conservation_1990 .

# --- PRODUCTION DES TABLEAUX CODE-BARRES (ex:a19) ---
ex:production_tableaux_code_barres a crm:E12_Production ;
    rdfs:label "Production de la série de tableaux code-barres" ;
    crm:P108_has_produced ex:tableau_code_barres ; # Ou une classe Collection si multiple
    crm:P14_carried_out_by ex:agence_rmatlm ;
    crm:P3_has_note "Série de tableaux représentant un code-barres identifiant le collectionneur commanditaire et le premier propriétaire." ;
    dcterms:source ex:rapport_conservation_1990 .