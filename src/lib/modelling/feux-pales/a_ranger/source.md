
sourcer l'information

ex:a1 a crm:E13_Attribute_Assignment ;
    crm:P140_assigned_attribute_to ex:feux_pales ;
    crm:P177_assigned_property_of_type "P4_has_time-span" ;
    crm:P141_assigned "7 décembre 1990 - 3 mars 1991" ;
    crm:P14_carried_out_by ex:capc ;
    crm:P4_has_time-span "1990-1991" ;
    dcterms:source "présentée du 7 décembre 1990 au 3 mars 1991" ;
    dcterms:source ex:rapport_conservation ; 
    ex:confidence "haute" .

ex:rapport_conservation a crm:E73_Information_Object ;
    rdf:type crm:E31_Document ;  # Optionnel : préciser qu'il s'agit d'un document
    dcterms:title "Rapport de conservation" ;
    dcterms:description "Document source contenant les informations sur les dates de présentation." .




Le titre de travail de l’exposition était « Ad Perpetuam Memoriam ». Philippe Thomas confirme le titre Feux pâles
dans une lettre du 1 sept. 1900 à Jean-Louis Froment, consultable dans les archives du capc


P140 assigned attribute to (was attributed by)
Domain:
E13 Attribute Assignment
Range:
E1 CRM Entity
Superproperty of:
E14 Condition Assessment. P34 concerned (was assessed by): E18 Physical Thing
E16 Measurement. P39 measured (was measured by): E18 Physical Thing
E17 Type Assignment. P41 classified (was classified by): E1 CRM Entity
Quantification:
many to many (0,n:0,n)
Scope note:
This property associates an instance of E13 Attribute Assignment with the instance of E1 CRM
Entity about which it made an attribution. The instance of E1 CRM Entity plays the role of the
domain of the attribution.
The kind of attribution made should be documented using P177 assigned property type.
Examples:
 The Current Ownership Assessment of Martin Doerr’s silver cup February 1997 (E13)
assigned attribute to Martin Doerr’s silver cup (E22). (fictitious)
Definition of the CIDOC Conceptual Reference Model version 7.1.1
185 The Identifier Assignment on 1st June 1997 of the silver cup donated by Martin Doerr (E15)
assigned attribute to silver cup 232 (E22). (fictitious)
 The examination of MS Sinai Greek 418 (E13) assigned attribute to MS Sinai Greek 418
(E22). (Honey and Pickwoad, 2010)
In First Order Logic:
P140(x,y) ⇒ E13(x)
P140(x,y) ⇒ E1(y)