---
title: "Feux pâles — Proposed LRMoo Mapping"
date: 2026-07-29
status: published
tags:
  - case:feux-pales
  - type:modelling
  - ontology:frbroo/lrmoo
  - lang:en
description: "The proposed mapping: F1_Work → 4×F2_Expression → F3_Manifestations. Surfaces all four ruptures explicitly without resolving any."
---


# Proposed mapping — F1_Work → F2_Expression → F3_Manifestation

## Diagram

```mermaid
flowchart TD
  W["F1 Work\nFeux pales 1990"]
  W --> E1["F2 Expression\nExposition"]
  W --> E2["F2 Expression\nCatalogue"]
  W --> E3["F2 Expression\nStudy"]
  W --> E4["F2 Expression\nTrace"]
  E1 --> M1["F3 Manifestation\ncapc 1990 · MAMCO 2014"]
  E2 --> M2["F3 Manifestation\n1st ed. 1990 · 2nd ed. ?"]
  E3 --> M3["F3 Manifestation\nRenaudie · Jaret · Lebovici"]
  E4 --> M4["F3 Manifestation\nCabinet signe capc"]
  M2 -. "R1 co-constitution ?" .-> E1
  M3 -. "R2 participation ?" .-> W
  M4 -. "R3 indecidable author ?" .-> E4
  M3 -. "R4 retroactive modification ?" .-> E3
  classDef work    fill:#EEEDFE,stroke:#534AB7,color:#26215C
  classDef expr    fill:#EEEDFE,stroke:#7F77DD,color:#3C3489
  classDef manif   fill:#E1F5EE,stroke:#0F6E56,color:#085041
  class W work
  class E1,E2,E3,E4 expr
  class M1,M2,M3,M4 manif
```

## Rationale

The four F2_Expression groupings (Exposition, Catalogue, Study, Trace) reflect a modelling decision: *Feux pâles* exists under heterogeneous modes of existence that should not be flattened into a single expression. This grouping is defensible but not neutral.

## Ruptures

| Rupture | Description |
|---|---|
| **R1** | E2 (Catalogue) and E1 (Exposition) are co-constitutive, not independent sisters. FRBRoo has no property to express this relationship between two expressions of the same Work. |
| **R2** | E3 (Study) participates in the Work it documents. `R67_has_bibliographic_history` does not capture that a conservation study modifies the documentary object. |
| **R3** | The author of M4a (Cabinet d'amateur) is deliberately indecidable. `F28_Expression_Creation` requires an identifiable actor. |
| **R4** | M3a (Renaudie 2017) retroactively modifies the properties of the Expression it documents. No FRBRoo class supports this retroactive relationship. |
