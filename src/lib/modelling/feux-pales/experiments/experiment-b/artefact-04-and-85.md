---
title: "Artefact n°4 — Klappensonnenuhr · Artefact n°85 — La Collection de M. Venzano"
slug: feux-pales/experiment-b/artefact-04-and-85
caseStudy: feux-pales
experiment: b
artefact: ["04", "85"]
artefact-label: ["Klappensonnenuhr (Tucher, 17th c.)", "La Collection de Monsieur Georges Venzano"]
type: modelling
ontologies: [cidoc-crm, ontoexhibit]
ruptures: [forced-choice, structural-silence, flattening]
epistemic-status: [verified-black, contested-grey-strikethrough]
date: 2026-07-29
lang: en
status: published
description: "Artefact n°4: looted artwork with unresolved restitution claim — CIDOC-CRM cannot give an honest uncertain answer on ownership. Artefact n°85: fictive collector, fictive transaction, metadata as artistic material."
---

# Artefact n°4 — *Klappensonnenuhr* [Portable sundial]

**Maker**: Thomas Tucher, Nuremberg  
**Date**: 17th century  
**Medium**: Ivory, bronze  
**Dimensions**: 2.2 × 12.8 × 9.6 cm  
**Lender in 1990**: Kunsthistorisches Museum Vienna, Inv. 9826  
**Epistemic status**: Lender data verified (black) — current owner unknown (grey/strikethrough)  
**Note**: Looted artwork — restitution claim by Rothschild heirs, unresolved as of 2017

---

## Documentary facts and ontological collision

| Fact | CIDOC-CRM | OntoExhibit |
|---|---|---|
| **Lender in 1990**: Kunsthistorisches Museum Vienna (Inv. 9826) | `E10_Transfer_of_Custody` + `P28_custody_surrendered_by` → KHM ✓ | `onto:LoanAgreement` ✓ |
| **Current owner unknown**: looted from Clarisse Rothschild, restitution unresolved | ⚠ **Forced choice** — `P52_has_current_owner` is single-valued. Competing claims (KHM vs Rothschild heirs) have no representation | ⚠ **Structural silence** — no class for disputed ownership or pending restitution claims |
| **Epistemic status of observation** (Tome II, 2017): data valid in 1990, obsolete and contested in 2017 | ⚠ **Structural silence** — no native mechanism for dating the epistemic status of assertions. `CRMinf I2_Belief` exists but is rarely implemented | ⚠ **Structural silence** — no degrees of certainty, no temporality of documentary observations |

## Rupture types

- **Forced choice**: `P52_has_current_owner` forces a single current owner where ownership is legally contested
- **Structural silence**: no class for a restitution claim in progress; no native mechanism for a dated epistemic assertion

## Key formulation

> The model either gives a false answer or no answer. It cannot give an honest uncertain one.

## Notes

This is the case most directly tied to the epistemological position of conservation practice. The datum "owner: KHM Vienna" was true in 1990. It is false, or at least contested, in 2017. The colour-coded epistemic system of the proto-ontology (Renaudie 2017) handled this with a strikethrough annotation marking the data as historically valid but now obsolete. No heritage ontology can encode this distinction without extension.

---

# Artefact n°85 — *La Collection de Monsieur Georges Venzano*

**Medium**: B&W photograph mounted on board  
**Dimensions**: 247.5 × 360 cm (3 panels)  
**Dealer**: Galerie Claire Burrus  
**Inventory**: Inv. 1991-21, capcMusée d'art contemporain de Bordeaux  
**Displayed author**: [capcMusée d'art contemporain de Bordeaux]  
**Actual author**: Philippe Thomas (fictionalizing the institution as author)  
**Epistemic status**: Verified (black) — fictive authorship deliberately constructed

---

## Documentary facts and ontological collision

| Fact | CIDOC-CRM | OntoExhibit |
|---|---|---|
| **Displayed author**: [capcMusée d'art contemporain] — Philippe Thomas fictionalizing the institution as author of a work critiquing its own institutionalisation | ⚠ **Structural silence** — `E21_Person` or `E40_Legal_Body`: neither can express an institution staged as fictive author | ⚠ **Structural silence** — `onto:hasAuthor` presupposes a real identifiable agent |
| **Georges Venzano**: fictive "collector" whose name appears in the title | ⚠ **Structural silence** — no class for non-narrative fictive persons produced by an artistic device (distinct from literary characters) | ⚠ **Structural silence** — no distinction between real and fictive persons in exhibition metadata |
| **Sale circuit**: Gal. Claire Burrus → capc 1991 (Inv. 1991-21) — but the sale is part of the artistic fiction | `E8_Acquisition` correctly models the 1991 transaction | ⚠ **Flattening** — cannot encode a commercial transaction that is simultaneously an artistic gesture |

## Rupture types

- **Structural silence**: no class for a non-narrative fictive person; no class for an institution staged as fictive author
- **Flattening**: `E8_Acquisition` records the transaction correctly but erases the fictional dimension of the sale as artistic act

## Notes

This is the most striking case for a DH audience: the fiction does not bear on the artwork, it bears on the **metadata themselves**. The title, the author, the collector — everything is fictional. CIDOC-CRM and OntoExhibit cannot express that the metadata are the site of the fiction. An adequate model would need to distinguish between:

1. The real transaction (Claire Burrus → capc, 1991)
2. The fictive transaction (agency → imaginary collector, as artistic device)
3. The metadata as artistic material (the title names a fictive person; the author field names a fictive author)
