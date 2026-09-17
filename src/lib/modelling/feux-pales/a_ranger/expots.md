

c'est E89
classified_as aat:300387357 (creative work)
le typage est important
la classification devrais-je dire

p129 is about


Comment déclarer qu'un tableau vient d'une série ?


### 1. **Pourquoi `E24_Physical_Human-Made_Thing` et non `E22_Human-Made_Object` ?**
- **`E22_Human-Made_Object`** : Pour des objets **physiques avec des frontières claires** (ex. une sculpture, un tableau).
- **`E24_Physical_Human-Made_Thing`** : Pour des **choses physiques créées par l’homme**, y compris des **éléments intégrés à un système plus large** (ex. une installation, un code-barre dans une exposition).
  - **Votre cas** : *code-barre* est une **œuvre physique** mais aussi un **élément d’un ensemble plus large** (*Feux Pâles*), donc `E24` est plus adapté.


### 2. **Différence entre `P108i_was_produced_by` et `P94i_was_created_by`**
| **Propriété** | **Domaine** | **Range** | **Interprétation** | **Exemple** |
|---------------|-------------|-----------|--------------------|-------------|
| `P108i_was_produced_by` | `E24_Physical_Human-Made_Thing` | `E12_Production` | **Production physique** de l’objet. | La fabrication matérielle du code-barre. |
| `P94i_was_created_by` | `E24_Physical_Human-Made_Thing` | `E65_Creation` | **Création conceptuelle** de l’objet. | L’idée du code-barre comme œuvre d’art (liée à "(R)"). |

- **Dans votre cas** :
  - `P108i_was_produced_by exhib:prod001` : La **production physique** du code-barre (ex. impression, installation).
  - `P94i_was_created_by exhib:prod002` : La **création conceptuelle** (liée au concept "(R)").


Dans display on a donné toutes les infornations cartels a l'objet conceptuel. 

ex:code_barre_concept a crm:E28_Conceptual_Object ; 
    rdfs:label "(R)" ;
    crm:P1_is_identified_by ex:appellation_codebarre .

ex:code_barre_concept a crm:E22_Human-Made_Object ; # puis une realisation
    rdfs:label "(R)" .

ex:appellation_codebarre a crm:E41_Appellation ;
    rdf:value "(R)" .


ex:exhibit0001 a crm:E24_Physical_Human-Made_Thing ;
    rdfs:label "code-barre" ;
    crm:P2_has_type ex:obj_type01 ;  # Type : œuvre d'art
    crm:P108i_was_produced_by ex:prod001 ;
    crm:P70i_is_documented_in ex:trace0001 ;
    crm:P129_is_about ex:concept_oe_01 ;  # on peut ?
    crm:P129_is_about ex:feuxPales ;  # L'œuvre est liée au concept "Feux Pâles" aussi parce que c'est le code barre de l'exposition.
    crm:P94i_was_created_by ex:prod002 .