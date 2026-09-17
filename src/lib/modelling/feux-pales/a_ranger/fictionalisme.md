



ex:publication_article_tournereau a crm:E7_Activity ;
    rdfs:label "Publication de l'article 'Philippe Thomas : sujet à discrétion ?'" ;
    crm:P14_carried_out_by ex:philippe_thomas ;
    crm:P4_has_time-span "1985" ;
    crm:P3_has_note "Article publié sous le pseudonyme du collectionneur Michel Tournereau dans la revue Public." ;
    dcterms:source ex:rapport_conservation_1990 .
    
ex:michel_tournereau a crm:E21_Person ; 
    rdfs:label "Michel Tournereau (Pseudonyme de collectionneur)" ;
    crm:P137_exemplifies ex:role_collectionneur_fictionnel .


ex:agence_rmatlm a crm:E74_Group ;
    rdfs:label "les ready-made appartiennent à tout le monde®"@fr ;
    rdfs:label "Readymades belong to everyone®"@en ;

        crm:P3_has_note "Agence fictive créée par Philippe Thomas." . # la note devrait etre une iinformation narative plutot non ?


# --- STRATÉGIE DE DISSIMULATION (ex:a13, ex:a23, ex:a29) ---
# On décrit l'événement de "dissimulation" comme une activité intentionnelle
ex:strategie_dissimulation_auteur a crm:E7_Activity ;
    rdfs:label "Mise en œuvre de la procédure fictionnaliste de dissimulation d'auteur" ;
    crm:P14_carried_out_by ex:philippe_thomas ;
    crm:P4_has_time-span "1985-1995" ;
    crm:P3_has_note "Le collectionneur signe l'œuvre achetée et en devient l'auteur. L'identité réelle de l'auteur (PT) est dissimulée derrière le nom du collectionneur ou de l'agence." ;
    dcterms:source ex:rapport_conservation .


ex:philippe_thomas a crm:E21_Person ;
    rdfs:label "Philippe Thomas"@fr ;
    crm:P3_has_note "Le nom de cette personne n'apparait pas dans l'exposition Feux Pâles". 