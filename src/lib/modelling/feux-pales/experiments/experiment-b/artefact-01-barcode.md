---
title: "Artefact n°1 — ® (barcode)"
slug: feux-pales/experiment-b/artefact-01-barcode
caseStudy: feux-pales
experiment: b
artefact: "01"
artefact-label: "® (barcode)"
type: modelling
ontologies: [cidoc-crm, ontoexhibit]
ruptures: [forced-choice, structural-silence, flattening]
epistemic-status: verified
inventory: "Inv. 1991-20, capcMusée d'art contemporain de Bordeaux"
date: 2026-07-29
lang: en
status: published
description: "The ® barcode: simultaneously an artwork, the exhibition title, and the contractual product of a legally non-existent agency. Three statuses that cannot coexist in CIDOC-CRM or OntoExhibit."
---

# Artefact n°1 — ® (barcode)

**Medium**: Acrylic on canvas  
**Dimensions**: 97 × 130 cm  
**Inventory**: Inv. 1991-20, capcMusée d'art contemporain de Bordeaux  
**Epistemic status**: Verified (black)

---

## Documentary facts and ontological collision

| Fact | CIDOC-CRM | OntoExhibit |
|---|---|---|
| **Authorship**: signed by capcMusée, conceived by Philippe Thomas via the agency | `E65_Creation` + `P14_carried_out_by` → `E39_Actor` — modellable, but forces a choice: capc (signatory), Thomas (conceptor), or agency (commissioner)? | `onto:hasAuthor` — same problem, single authorship presupposed |
| **Hybrid status**: artwork AND scenographic element of the exhibition preface AND exhibition title | `E22_Man-Made_Object` for the object — no class for co-constitutive role | `onto:ExhibitedItem` captures the display role but not the co-constitutive status |
| **Fictive transaction**: the barcode is the "product" delivered by the agency to the capc under a fictional contract | ⚠ **Structural silence** — no class for a fictive transaction. `E8_Acquisition` presupposes a real transfer of property | ⚠ **Structural silence** — no class for contractual fictions framing artwork production |
| **Legal status of agency**: "owner" in 1990, but entity with no legal existence | `E8_Acquisition` + `P22_transferred_title_to` for 1991 acquisition — the 1990 holder (agency) cannot be `E40_Legal_Body` | ⚠ **Structural silence** — same gap |

## Rupture types

- **Forced choice**: `P14_carried_out_by` forces a single author where three agents are simultaneously valid
- **Structural silence**: no class for a fictive transaction or a legally non-existent entity as owner
- **Flattening**: `E8_Acquisition` correctly models the 1991 transaction but erases the fictional dimension of the delivery as artistic act

## Notes

The barcode `®` is simultaneously:
1. An artwork acquired by the capc (Inv. 1991-20)
2. The title of the exhibition
3. The contractual product delivered by a legally non-existent agency to the capcMusée

None of these three statuses can coexist in CIDOC-CRM or OntoExhibit without forcing an arbitrary choice among them.
