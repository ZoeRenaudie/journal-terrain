---
title: "Feux pâles — Data / Données RDF"
slug: feux-pales/data
caseStudy: feux-pales
type: data
date: 2026-07-29
lang: en
status: draft
description: "Planned RDF serializations of the modelling experiments in Turtle and JSON-LD formats."
---

# data/

This folder will contain formal serializations of the modelling experiments in RDF formats.

## Planned files

| File | Content | Format |
|---|---|---|
| `feux-pales-lrmoo.ttl` | Proposed LRMoo mapping | Turtle |
| `artefact-01-barcode.ttl` | ® barcode CIDOC-CRM mapping | Turtle |
| `artefact-04-sundial.ttl` | Tucher sundial CIDOC-CRM mapping | Turtle |
| `artefact-85-venzano.ttl` | Venzano CIDOC-CRM mapping | Turtle |
| `feux-pales-lrmoo.jsonld` | Proposed LRMoo mapping | JSON-LD |

## Prefixes (planned)

```turtle
@prefix crm:   <http://www.cidoc-crm.org/cidoc-crm/> .
@prefix lrmoo: <http://iflastandards.info/ns/lrm/lrmoo/> .
@prefix frbroo: <http://iflastandards.info/ns/fr/frbr/frbroo/> .
@prefix onto:  <https://complexhibit-project.github.io/OntoExhibit/> .
@prefix fp:    <https://github.com/zoerenaudie/feux-pales-modelling/data/> .
```
