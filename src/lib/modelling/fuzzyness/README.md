---
title: "Fuzzyness"
date: 2026-07-02
status: draft
tags:
  - type:data
  - case:fuzzyness
  - lang:fr
description: "Explore Fuzzyness"
---


David Valentine a mentionner l'idée de Fuzzyness lors de notre travail sur Display

Les travaux sur les *fluid ontologies* ou *fuzzy ontologies* en informatique documentaire : des tentatives de modéliser des entités dont les frontières sont floues ou changeantes. Peu utilisées en patrimoine culturel, mais théoriquement pertinentes.

Dans mon cas j'ai rencontré plusieurs cas : 
1. fictionnalisme de Philipe Thomas ou droit a l'Opacité de glissant = Information volontairement dissimulée. On signale qu'on ne souhaites pas qu'elles soient public ou celon certiane regles et condition. Ou on signale leur absence volontaire. 

2. les différentes conception de l'objet conceptuel. Par exemple, en 2017 en interrogeant sur les conceptions de Feux pales les différent acteurs plusieurs conceptions situées se sont dégagées qui pourraient etre traitée avec aaao : 

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

3. Info constat de l'état de connaissance et de certitude des metadonnées décrivant l'objet d'etude : 
- Information fuzzy dans le sens ou on ne sait pas trop. C'Est trouble. On peut donner un pourcentage de certitude. information incertaine, à vérifier plus profondément. On voit une oeuvre sur une photo et on pense qu'elle correspond a cette information mais on est sur a 60%.
- Information où l'information a un instant est manquante. On voit sur une photo qu'il y a une oeuvre mais on a aucune information de son titre, date, rien. 
- Information qui a été vraie a un moment mais ne l'est plus. Soit elle a été contredite. Soit elle a changé. 
Le propriétaire de l'oeuvre a changé, ca peut etre décrit dans cidoc-crm avec changement de propriété mais par exemple le titre de l'oeuvre a changé parce qu'il comportait des termes qui sont aujourd'hui jugés offensant. On veut garder cette information mais elle est aujourd'hui remplacée par un autre titre. Ou on pensait avoir des informations sur une oeuvre et en fait elles ne sont plus vraies. 

Ces informations sont situées. Elles ne sont pas seulement placées dans une chronologie, elle sont portées par une ou un groupe de personne a un moment et peuvent etre contredite. Elles existent jusqu'a ce qu'elles soient remisent en cause ou modifiées. AAAO ? 

4. Information d'etat des materiaux qui changent : Ontologie de conservation-restauration pour les constats d'etat ? 


bonus : pouvoir sourcer ces informations


https://umberto-straccia.github.io/software/fuzzyDL/fuzzyDL.html
Fernando Bobillo and Umberto Straccia. The Fuzzy Ontology Reasoner fuzzyDL. In Knowledge-Based Systems, 95, pages 12--34, Elsevier, 2016.
@article{Bobillo16, Author = {Fernando Bobillo and Umberto Straccia}, Doi = {10.1016/j.knosys.2015.11.017}, Journal = {Knowledge-Based Systems}, Pages = {12 -- 34}, Publisher = {Elsevier}, Title = {The Fuzzy Ontology Reasoner \emph{{fuzzyDL}}}, Volume = {95}, Year = {2016}, Bdsk-Url-1 = {http://dx.doi.org/10.1016/j.knosys.2015.11.017}}
Classical, two-valued, ontologies have been successfully applied to represent the knowledge in many domains. However, it has been pointed out that they are not suitable in domains where vague or imprecise pieces of information play an important role. To overcome this limitation, several extensions to classical ontologies based on fuzzy logic have been proposed. We believe, however, that the success of fuzzy ontologies strongly depends on the availability of effective reasoners able to deal with fuzzy ontologies.
In this paper we describe fuzzyDL, an expressive fuzzy ontology reasoner with some unique features. We discuss its possibilities for fuzzy ontology representation, the supported reasoning services, the different interfaces to interact with it, some implementation details, a comparison with other fuzzy ontology reasoners, and an overview of the main applications that have used it so far.



For digital heritage, fuzzy ontologies are mainly used when heritage knowledge is **uncertain, conflicting, incomplete, or temporally changing**, while mainstream cultural heritage infrastructures still prioritize interoperability, provenance, and linked-data integration over formal fuzziness  (Cui et al. 2023; Qasim et al. 2019, 1187 - 1206; Niccolucci and Felicetti 2024; Liu et al. 2023; Varnienė-Janssen and Šermokas 2020, 66-82).

## Current Role

Fuzzy ontologies are proposed because crisp ontologies struggle with **imprecise domain concepts**, a general limitation noted across semantic web research and explicitly raised for heritage documentation  (Cui et al. 2023; Qasim et al. 2019, 1187 - 1206; Akremi and Zghal 2021). In architectural and archaeological heritage, the core need is to represent **multiple interpretations with certainty levels** rather than one fixed description  (Cui et al. 2023).

This is especially relevant in digital heritage because knowledge accumulates incrementally, gets revised during investigation and conservation, and can contain disputes across experts and source types  (Cui et al. 2023). More broadly, digital heritage research describes heritage outcomes as **constantly mutable**, and digital heritage objects as ontologically multiple and opaque once they circulate beyond their original workflows  ( 2019, 1235 - 1247; Mackinnon 2023).

## Heritage Ontology Landscape

| Approach | Main Strength | Main Limitation | Heritage Evidence |
|---|---|---|---|
| **Fuzzy ontologies** | Model vagueness and graded certainty | Less common in deployed CH infrastructures | Tivoli case for conflicting interpretations  (Cui et al. 2023)|
| **CIDOC-CRM extensions** | Interoperability across institutions | Usually crisp rather than uncertainty-aware | HDTO and related CRM-compatible models  (Niccolucci and Felicetti 2024; Niccolucci et al. 2023)|
| **Linked-data CH models** | Knowledge graphs, integration, services | Often focus on organization over uncertainty | Reviews of CRM, Europeana, Sampo  (Liu et al. 2023; Ranjgar et al. 2024, 42992-43026)|
| **Fluid ontologies** | Adapt to community context and browsing | Not a formal uncertainty framework | Dynamic digital museum organization  (Srinivasan and Huang 2005, 193-204)|
| **Paradata-rich semantic frameworks** | Transparency and lifecycle documentation | Early and domain-specific | Natural heritage semantic integration  (Lee et al. 2025)|

**Figure 1:** Digital heritage ontology options and their trade-offs

## What Fuzzy Ontologies Add

The most explicit heritage workflow starts with a **crisp ontology**, then adds a homogeneous certainty classification and assigns certainty levels to knowledge-base entities and interpretations  (Cui et al. 2023). That approach was applied to the Sanctuary of Hercules the Victor to represent different interpretations of a stratified wall’s origins and transformations  (Cui et al. 2023).

Outside heritage, fuzzy ontology work provides the technical rationale: fuzzy ontologies encode imprecise concepts in machine-readable form, and type-2 fuzzy ontologies were introduced for **extremely vague** or gradually increasing vagueness  (Qasim et al. 2019, 1187 - 1206). Generic fuzzification methods also report better completeness and comprehensiveness than crisp ontologies in a case study, though that evidence is not heritage-specific  (Akremi and Zghal 2021).

For digital heritage practice, this matters most where categorization systems flatten local knowledge or force culturally specific material into standardized schemas  (Tamrazyan and Hovhannisyan 2025). Fuzzy or otherwise uncertainty-aware modeling appears well suited to preserve such nuance, but direct comparative evaluations in heritage remain scarce  (Cui et al. 2023; Qasim et al. 2019, 1187 - 1206).

## Broader Digital Heritage Context

- **Formal ontologies** are used to link multimodal heritage knowledge across domains, especially for intangible heritage  (Hou et al. 2022, 1 - 20).
- Heritage digital twins organize documentation as semantic knowledge graphs and extend beyond 3D models alone  (Niccolucci et al. 2022, 105; Felicetti and Niccolucci 2024, 1).
- Ontologies support fine-grained cultural heritage representation, linking, publishing, and preservation workflows  (Wei and Chen 2023, 1710-1719; Molee et al. 2026, 35).
- The field has invested heavily in semantic models, but **smart applications** built on them are still early  (Ranjgar et al. 2024, 42992-43026).

Fuzzy ontologies therefore sit within a larger shift from simple digitization or 3D representation toward semantically structured, queryable, and provenance-aware heritage systems  (Lee et al. 2025; Niccolucci et al. 2022, 105). In that broader landscape, they fill a specific gap: representing **uncertainty and graded interpretation** that standard cultural heritage ontologies often leave implicit  (Cui et al. 2023; Ranjgar et al. 2024, 42992-43026).

Fuzzy ontologies for digital heritage are promising, but the evidence here suggests they are still a **specialized layer** on top of the more established CIDOC-CRM and digital-twin ecosystem, rather than the default foundation for heritage data infrastructures.

 
## References
 
"Digital heritage research re-theorised: ontologies and epistemologies in a world of big data." *International Journal of Heritage Studies* 25 (2019): 1235 - 1247. https://doi.org/10.1080/13527258.2019.1578989.
 
Akremi, Houda, and Sami Zghal. "DOF: a generic approach of domain ontology fuzzification." *Frontiers of Computer Science* 15 (2021). https://doi.org/10.1007/s11704-020-9354-z.
 
Cui, C., Davide Simeone, Stefano Cursi, Edoardo Currà, and Antonio Fioravanti. "Knowledge modelling and fuzzy ontologies integration for Classical and Industrial Archaeologies." *eCAADe proceedings* (2023). https://doi.org/10.52842/conf.ecaade.2023.2.861.
 
Felicetti, A., and Franco Niccolucci. "Artificial Intelligence and Ontologies for the Management of Heritage Digital Twins Data." *Data* 10 (2024): 1. https://doi.org/10.3390/data10010001.
 
Hou, Yumeng, S. Kenderdine, Davide Picca, Mattia Egloff, and A. Adamou. "Digitizing Intangible Cultural Heritage Embodied: State of the Art." *Journal on Computing and Cultural Heritage (JOCCH)* 15 (2022): 1 - 20. https://doi.org/10.1145/3494837.
 
Lee, Yeeun, Songie Seol, Jisun Oh, and Jongwook Lee. "Semantic Collaborative Environment for Extended Digital Natural Heritage: Integrating Data, Metadata, and Paradata." *Heritage* (2025). https://doi.org/10.3390/heritage8120507.
 
Liu, F., J. Hindmarch, and M. Hess. "A REVIEW OF THE CULTURAL HERITAGE LINKED OPEN DATA ONTOLOGIES AND MODELS." *The International Archives of the Photogrammetry, Remote Sensing and Spatial Information Sciences* (2023). https://doi.org/10.5194/isprs-archives-xlviii-m-2-2023-943-2023.
 
Mackinnon, S. "The Ontological Multiplicity of Digital Heritage Objects: 3D Modelling in the Cherish Project." *Heritage* (2023). https://doi.org/10.3390/heritage6020076.
 
Molee, A., Thana Charuphanthuset, Wittawat Kunnu, and Supaporn Chairungsee. "Ontology-Based Digital Preservation Framework for Phum Riang Silk Heritage." *Informatics* 13 (2026): 35. https://doi.org/10.3390/informatics13030035.
 
Niccolucci, Franco, and A. Felicetti. "Digital Twin Sensors in Cultural Heritage Ontology Applications." *Sensors (Basel, Switzerland)* 24 (2024). https://doi.org/10.3390/s24123978.
 
Niccolucci, F., B. Markhoff, M. Theodoridou, A. Felicetti, and S. Hermon. "The Heritage Digital Twin: a bicycle made for two. The integration of digital methodologies into cultural heritage research." *ArXiv* abs/2302.07138 (2023). https://doi.org/10.48550/arxiv.2302.07138.
 
Niccolucci, F., A. Felicetti, and S. Hermon. "Populating the Digital Space for Cultural Heritage with Heritage Digital Twins." *Data* 7 (2022): 105. https://doi.org/10.3390/data7080105.
 
Qasim, Iqbal, Mahmood Alam, Shumaila Khan, A. W. Khan, K. Malik, Muhammad Saleem, and Syed Ahmad Chan Bukhari. "A comprehensive review of type-2 fuzzy Ontology." *Artificial Intelligence Review* 53 (2019): 1187 - 1206. https://doi.org/10.1007/s10462-019-09693-9.
 
Ranjgar, B., A. Sadeghi-Niaraki, Maryam Shakeri, Fatema Rahimi, and Soo-Mi Choi. "Cultural Heritage Information Retrieval: Past, Present, and Future Trends." *IEEE Access* 12 (2024): 42992-43026. https://doi.org/10.1109/access.2024.3374769.
 
Srinivasan, R., and Jeffrey Huang. "Fluid ontologies for digital museums." *International Journal on Digital Libraries* 5 (2005): 193-204. https://doi.org/10.1007/s00799-004-0105-9.
 
Tamrazyan, Hamest S., and Gayane Hovhannisyan. "Cultural Categorization in Epigraphic Heritage Digitization." *Heritage* (2025). https://doi.org/10.3390/heritage8050148.
 
Varnienė-Janssen, Regina, and Albertas Šermokas. "Ontologies and Technologies for Integrating and Accessing Digital Cultural Heritage: Lithuanian Approach." *Immunotechnology* 88 (2020): 66-82. https://doi.org/10.15388/im.2020.88.32.
 
Wei, Tong, and Yuqi Chen. "A methodology for building domain ontology of cultural heritage." *Digit. Scholarsh. Humanit.* 38 (2023): 1710-1719. https://doi.org/10.1093/llc/fqad045.
 
