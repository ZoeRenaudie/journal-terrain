### Intégration des archives et des documents**

Les expositions sont documentées par des archives (catalogues, plans, photographies) qui jouent un rôle actif dans leur activation.

Comment modéliser :
- Le **lien entre une archive et une exposition** ?
- Le **rôle des archives dans la création d’une nouvelle exposition** ?

#### **Choix méthodologique**
1. **`E78_Collection` pour les archives** :
   - Les archives du CAPC sont modélisées comme une **collection curatée** (`E78_Curated_Holding`), car elles sont **assemblées et maintenues** par une institution.
   - **Exemple** :
     ```turtle
     exhib:trace0002 a crm:E78_Collection ;
         crm:P129i_is_subject_of exhib:exhib01 .  # Les archives traitent de exhib01
     ```

2. **`P16_used_specific_object` pour l’usage des archives** :
   - Si *L’Ombre du jaseur* utilise les archives du CAPC, on lie l’exposition à la collection :
     ```turtle
     exhib:exhib02 crm:P16_used_specific_object exhib:trace0002 .
     ```

3. **`E31_Document` pour les catalogues** :
   - Les catalogues (ex. *Catalogue Feux pâles*) sont modélisés comme des `E31_Document`, liés aux œuvres via `P70i_is_documented_in`.
   - **Exemple** :
     ```turtle
     exhib:trace0001 a crm:E31_Document ;
         rdfs:label "Catalogue Feux pâles" .
     exhib:exhibit0001 crm:P70i_is_documented_in exhib:trace0001 .
     ```

4. **`E73_Information_Object` pour les références externes** :
   - Les URLs (ex. WorldCat) sont modélisées comme des `E73_Information_Object`, liées aux documents via `P67_refers_to`.
   - **Exemple** :
     ```turtle
     exhib:ref001 a crm:E73_Information_Object ;
         rdf:value "https://www.worldcat.org/title/feux-pales/oclc/22208499" .
     exhib:trace0001 crm:P67_refers_to exhib:ref001 .
     ```

#### **Discussion**
Cette modélisation permet de :
- **Distinguier les types de documents** (archives vs. catalogues vs. références externes),
- **Documenter leur rôle** dans la **transmission** et la **réactivation** des expositions,
- **Faciliter les requêtes** sur les **sources d’inspiration** (ex. "Quelles archives ont été utilisées pour *L’Ombre du jaseur* ?").


linked art 
                    @prefix crm: <http://www.cidoc-crm.org/cidoc-crm/> .
@prefix la: <https://linked.art/ns/terms/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

<https://linkedart.example/model/set> a la:Set ;
    crm:P67i_is_referred_to_by <https://example.swissartresearch.net/conceptual_object/13_1> .

<http://vocab.getty.edu/aat/300418049> a crm:E55_Type .

<https://example.swissartresearch.net/conceptual_object/13_1> a crm:E33_Linguistic_Object ;
    rdfs:label "Statement_label_value" ;
    crm:P190_has_symbolic_content "Statement_string_content" ;
    crm:P1_is_identified_by <https://example.swissartresearch.net/name/50_1> ;
    crm:P2_has_type <https://example.swissartresearch.net/type/14_1> ;
    crm:P67i_is_referred_to_by <https://example.swissartresearch.net/statement/55_1> ;
    crm:P72_has_language <https://example.swissartresearch.net/type/16_1> .

<https://example.swissartresearch.net/name/50_1> a crm:E33_E41_Linguistic_Appellation .

<https://example.swissartresearch.net/statement/55_1> a crm:E33_Linguistic_Object .

<https://example.swissartresearch.net/type/14_1> a crm:E55_Type ;
    crm:P2_has_type <http://vocab.getty.edu/aat/300418049> .

<https://example.swissartresearch.net/type/16_1> a crm:E56_Language .


                