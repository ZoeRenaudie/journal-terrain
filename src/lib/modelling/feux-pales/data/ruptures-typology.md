---
title: "Ruptures Typology — Experiment B"
slug: feux-pales/data/ruptures-typology
caseStudy: feux-pales
experiment: b
type: data
ontologies: [cidoc-crm, ontoexhibit]
ruptures: [forced-choice, structural-silence, flattening]
date: 2026-07-29
lang: en
status: published
description: "Typology of the three rupture types identified in Experiment B — forced choice, structural silence, flattening — and their correspondence with documentary requirements."
---

# Ruptures typology — Experiment B

## Three types of rupture

| Type | What happens | Examples from *Feux pâles* |
|---|---|---|
| **Forced choice** | The model can record the fact but imposes an arbitrary decision the data do not justify | `P14_carried_out_by` for ® — who is the author? `P52_has_current_owner` for the sundial — who is the owner? |
| **Structural silence** | No class exists for the phenomenon | Fictive non-narrative person (Venzano); fictive transaction (agency delivery); pending restitution claim (Tucher sundial); dated epistemic status of an assertion (Tome II, 2017) |
| **Flattening** | The model records the fact by erasing the dimension that makes it meaningful | `E8_Acquisition` for the Venzano sale — the artistic friction of a fictive commercial transaction disappears |

## Correspondence with documentary requirements

These three rupture types correspond directly to the first three requirements identified for an adequate exhibition documentary model:

| Rupture type | Requirement |
|---|---|
| Forced choice | Representing distributed and shifting authorship |
| Structural silence | Encoding epistemic status and degrees of uncertainty |
| Flattening | Preserving contradictory or parallel interpretations |

## A note on `CRMinf`

CIDOC-CRM's extension `CRMinf` provides `I2_Belief` for encoding uncertain assertions. It is the closest existing tool to what is needed for the Tucher sundial case. However, it is rarely implemented in practice, and its scope does not cover the full range of epistemic statuses needed: it handles uncertainty but not the distinction between *currently uncertain* and *historically valid but now obsolete* — the strikethrough category of the proto-ontology.
