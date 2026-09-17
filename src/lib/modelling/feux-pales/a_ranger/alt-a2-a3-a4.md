---
title: "Alternatives A2, A3, A4 — F15_Complex_Work · F12_Nomen · R48_prototype"
date: 2026-07-29
status: published
tags:
  - case:feux-pales
  - type:modelling
  - ontology:frbroo/lrmoo
  - lang:en
description: "Three further alternatives for Experiment A: F15_Complex_Work (A2), F12_Nomen for the agency (A3), R48_is_prototype_for (A4). Each resolves one rupture and opens another."
---

# Alternative A2 — F15_Complex_Work

## Rationale

`F15_Complex_Work` is designed for works composed of several distinct works forming a whole. Modelling *Feux pâles* as a `F15_Complex_Work` whose members are the exposition, the catalogue, and the 82 exhibited artworks partially resolves Rupture 1 (catalogue co-constitution) without forcing a derivation relationship.

## Diagram

```mermaid
flowchart TD
  CW["F15 Complex Work\nFeux pales"]
  W1["F1 Work\nexposition"]
  W2["F1 Work\ncatalogue"]
  W3["F1 Work\nartworks exhibited, 82 artists"]
  R1["Rupture\nW3 not from Thomas compositional intent\nthey are loans and citations"]
  CW -->|R10_has_member| W1
  CW -->|R10_has_member| W2
  CW -->|R10_has_member| W3
  W3 --> R1
  classDef work    fill:#EEEDFE,stroke:#534AB7,color:#26215C
  classDef amber   fill:#FAEEDA,stroke:#854F0B,color:#412402
  classDef rupture fill:#FCEBEB,stroke:#A32D2D,color:#501313
  class W1,W2,W3 work
  class CW amber
  class R1 rupture
```

## Rupture

`F15_Complex_Work` presupposes a unified compositional intent across all members. The 82 exhibited artworks are not components of *Feux pâles* in the sense that Thomas created them — they are loans, borrowings, citations. The agency's fiction precisely undermines the notion of unified authorial intent that `R10_has_member` implies.

---

# Alternative A3 — F12_Nomen for the agency

## Rationale

The agency © *readymades appartiennent à tout le monde*® is not a physical person, not a legal institution, and not a fictive character in the narrative sense. Using `F12_Nomen` to model the agency's name as a deliberately unstable appellation — whose referent changes depending on who consults it (naive visitor, informed insider, researcher) — is ontologically honest: it models the name rather than the entity.

## Diagram

```mermaid
flowchart TD
  PT["E21 Person\nPhilippe Thomas"]
  AG["F11 Corporate Body\nagency readymades"]
  NOM["F12 Nomen\nname of agency\ndeliberately unstable referent"]
  W["F1 Work\nFeux pales"]
  R1["Rupture\nR22 requires identifiable creator\nfiction blocks stable attribution"]
  PT -->|P14_performed| AG
  AG -->|R22_created_a_realization_of| W
  AG -->|P1_is_identified_by| NOM
  AG -. "?" .-> R1
  classDef work    fill:#EEEDFE,stroke:#534AB7,color:#26215C
  classDef amber   fill:#FAEEDA,stroke:#854F0B,color:#412402
  classDef evt     fill:#E1F5EE,stroke:#0F6E56,color:#085041
  classDef rupture fill:#FCEBEB,stroke:#A32D2D,color:#501313
  class W work
  class AG,NOM amber
  class PT evt
  class R1 rupture
```

## Rupture

`R22_created_a_realization_of` still requires a stable, identifiable creator. The fiction of authorship does not dissolve by modelling the name — the property itself presupposes what the artistic device deliberately withholds.

---

# Alternative A4 — R48_is_prototype_for

## Rationale

*L'Ombre du jaseur* (MAMCO, 2014) is not a new `F3_Manifestation` of the 1990 expression: it is a reinterpretation that takes the 1990 exhibition as prototype. `R48_is_prototype_for` allows distinguishing the capc→MAMCO relation (prototype) from the relation catalogue 1990→2nd printing (reproduction), a distinction the proposed mapping's four-expression structure cannot express.

## Diagram

```mermaid
flowchart TD
  E90["F2 Expression\nexposition capc 1990-91"]
  E14["F2 Expression\nL'Ombre du jaseur MAMCO 2014"]
  M90["F3 Manifestation\ncapc Dec 1990"]
  M14["F3 Manifestation\nMAMCO 2014"]
  R1["Rupture\nR48 not in FRBRoo standard\nextension or LRMoo required"]
  E90 -->|R3_is_realised_in| M90
  E14 -->|R3_is_realised_in| M14
  E90 -->|R48_is_prototype_for| E14
  E90 -. "?" .-> R1
  classDef work    fill:#EEEDFE,stroke:#534AB7,color:#26215C
  classDef rupture fill:#FCEBEB,stroke:#A32D2D,color:#501313
  class E90,E14,M90,M14 work
  class R1 rupture
```

## Rupture

`R48_is_prototype_for` is defined in LRMoo but not in FRBRoo standard. Using it requires either working explicitly within LRMoo (which is the object-oriented successor to FRBRoo) or declaring a local extension. This is not a fatal problem — it is an honest acknowledgement of the model's scope.
