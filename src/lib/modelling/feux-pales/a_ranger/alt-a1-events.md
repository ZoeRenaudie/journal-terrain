---
title: "Alternative A1 — Event-centred Mapping"
date: 2026-07-29
status: published
tags:
  - case:feux-pales
  - type:modelling
  - ontology:frbroo/lrmoo
  - lang:en
description: "Event-centred alternative using F27_Work_Conception, F28_Expression_Creation, F30_Publication_Event. Partially resolves R2 but cannot name co-constitution between events."
---


# Alternative A1 — Event-centred mapping

## Rationale

FRBRoo is fundamentally an event-based model built on CIDOC-CRM. Instead of starting from `F1_Work` as a stable entity, this alternative starts from acts of creation. The centre of gravity shifts: the exhibition is no longer an object that has manifestations, it is the result of a chain of intentional events. This reading is closer to conservation epistemology, where every observation is an attributed, dated act.

## Diagram

```mermaid
flowchart TD
  C27["F27 Work Conception\nfictionnalism ~1983"]
  C28a["F28 Expression Creation\nThomas 1990"]
  C28b["F28 Expression Creation\nMAMCO 2014"]
  C30["F30 Publication Event\ncatalogue 1990"]
  W["F1 Work\nFeux pales"]
  E["F2 Expression\nexposition"]
  Ec["F2 Expression\ncatalogue"]
  R1["Rupture\nno property for co-constitution\nbetween C30 and C28a"]
  C27 -->|R19| W
  C28a -->|R17| E
  C28b -->|R17| E
  C30 -->|R24| Ec
  C28a -. "?" .-> R1
  classDef work    fill:#EEEDFE,stroke:#534AB7,color:#26215C
  classDef evt     fill:#E1F5EE,stroke:#0F6E56,color:#085041
  classDef rupture fill:#FCEBEB,stroke:#A32D2D,color:#501313
  class W,E,Ec work
  class C27,C28a,C28b,C30 evt
  class R1 rupture
```

## What this resolves

- Foregrounds the intentional acts behind the exhibition rather than a static entity
- `F27_Work_Conception` allows modelling the fictionnalism project (~1983) as the conceptual origin of *Feux pâles*
- Two `F28_Expression_Creation` events for 1990 (Thomas) and 2014 (MAMCO) correctly distinguish the original act from the reactivation

## Rupture

`F30_Publication_Event` (catalogue) and `F28_Expression_Creation` (exposition) cannot be linked in FRBRoo to express their co-constitutive relationship. There is no property stating that C30 and C28a together produce a single unified work rather than two parallel expressions.
