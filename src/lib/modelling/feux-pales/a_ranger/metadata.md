



![image-20260731150602761](/home/lenamk/.config/Typora/typora-user-images/image-20260731150602761.png)





**Why subclass `E13_Attribute_Assignment` at all, rather than invent something new?**
 The whole point of E13 in CIDOC-CRM is that it turns *any* assertion — "this cup is antique," "this work is by Thomas" — into an event: something carried out by a named actor, at a dated moment, for a stated reason, which can itself be cited or contested. If a failed search just became a blank cell, it would fall outside that machinery entirely — no actor, no date, no queryability alongside everything else in the graph. Making it a subclass of E13 means "we looked and found nothing" gets the *exact same* provenance apparatus as "we looked and found X." A query across the dataset for "everything researcher A asserted in 2023" would pick up both, which is the point: a negative finding is itself a finding.

**Why "Negative" rather than "Empty," "Null," or "Missing"?**
 This is the load-bearing word choice. "Empty" or "Null" describe the *state of the field* — they're passive, they could just as easily mean "nobody ever looked." "Negative" describes the *outcome of an act* — it's the CRM SIG's own term (Velios, Meghini, Doerr & Stead's 2023 proposal for "negative typed properties") for exactly this distinction: a documented, deliberate confirmation that a value was sought and not found, as opposed to a field nobody got around to filling in. The word has to carry that "someone did the work" implication, or the whole rationale for the class collapses back into "why not just leave it blank."

**Why it pairs cleanly with `Withheld_Attribute_Assignment`**
 The two classes are doing a specific job together: splitting "absence" into two causally different things that "missing" flattens into one. *Negative* = the world doesn't yield the answer (an unidentified object in a photograph, however hard you look). *Withheld* = the world has the answer, and a named actor is choosing not to give it (Thomas's fictionalism). Same parent class, same E13 apparatus, but the `rdfs:comment` is where the causal difference actually lives — "found none" versus "deliberately withheld... under a stated condition of access." A researcher querying the graph can now ask "show me everything nobody could find" separately from "show me everything somebody knows and isn't saying," which is a real, actionable distinction for a conservator, not just a philosophical one.

One honest caveat: I'm reconstructing the *logic* the class name encodes from how it functions in your model and its stated precedent — I don't have visibility into which alternative names you actually weighed and rejected while drafting it. If you did consider and drop something like `Absence_Attribute_Assignment` or `Unresolved_Attribute_Assignment`, that rejection might be worth a half-sentence in the notes, since "why not X" is often the crispest way to defend a term in Q&A.

**The paper itself**
 Athanasios Velios, Martin Doerr, Carlo Meghini & Stephen Stead, "Typed properties and negative typed properties: Dealing with type observations and negative statements in the CIDOC CRM," *Semantic Web*, vol. 14, no. 2, pp. 421–441 (2023). Velios is at Ligatus, University of the Arts London — a bookbinding-conservation research unit — which is why the motivating case studies throughout are bookbinding condition surveys, not art exhibitions. It also went through an earlier CIDOC CRM SIG presentation in October 2022 before the journal version, so you may see it cited either way.

**The problem they're solving**
 During conservation surveys, surveyors routinely do two things standard CIDOC-CRM can't express cleanly:

1. Observe that *many* similar components exist without wanting to instantiate each one individually (too many, not worth separately recording).
2. Observe that a component of a given *type* is confirmed **absent** — not unrecorded, actively checked-for-and-not-there.

Their framing is philosophically careful about this: they distinguish a *negative existential* ("no individual of this type stands in this relation") from the Pegasus-style problem of naming something to deny its existence. That's useful vocabulary if anyone in Q&A pushes on "isn't documenting absence a contradiction."

**Their actual technical solution**
 This is the part worth being precise about. They propose **new properties**, not new classes: "typed properties" (TP) and "negative typed properties" (NTP), which parallel existing CIDOC-CRM properties but change the *range* to `E55_Type` instead of a particular individual. A statement using NTP says, in effect, "there exists no individual of type T standing in relation p to s." These are connected back to the original CRM properties via **reification**, specifically so the new properties stay queryable alongside standard CRM data rather than living in a separate shadow structure.

**One thing worth flagging for your own notes**
 What you've built — `Negative_Attribute_Assignment` as a **subclass of `E13_Attribute_Assignment`** — is not the same mechanism as Velios et al.'s NTP. Theirs is a *property-level* solution (a new property with a type-constrained range); yours is an *event-level* solution (a class recording that a search-event occurred and yielded nothing for one specific attribute). Both are motivated by the same conviction — confirmed absence deserves a first-class place in the model, not a blank cell — but they're solving slightly different shaped problems: their NTP handles "no component of type T exists among possibly many," while your class handles "we searched for the value of this one attribute on this one object and found nothing."

Your slide notes currently say `Negative_Attribute_Assignment` "follows that same logic," which is accurate as a statement about shared *spirit*, but if someone who knows this paper is in the room, "follows that same logic" could be heard as "reuses that mechanism," which it doesn't. Worth tightening to something like "extends the same conviction — that confirmed absence deserves first-class status — into an event-based (E13) pattern, rather than Velios et al.'s property-based one." Want me to make that edit in the file?

is their proposition already implemented in cidoc

Web recherché

Short answer: **no, not yet.**

Here's the actual status, precisely:

- **Not part of CRMbase.** The official standard (ISO 21127:2023, currently v7.x maintained by the CIDOC CRM SIG) does not include TP/NTP properties. They're not in the base ontology and not one of the recognized family extensions (CRMsci, CRMarchaeo, CRMinf, CRMdig, LRMoo, etc.).
- **Still an unofficial, in-progress GitHub extension.** The implementation lives at `linked-conservation-data/crmntp` on GitHub — an RDFS extension file, generated by a script, with an explicit note in the repo that it applies to RDFS implementations specifically (an OWL implementation wouldn't even need it) and that documentation/scope notes are still being written.
- **Actively under discussion at SIG meetings, not resolved.** Minutes from the 57th joint CIDOC CRM SIG / FRBR-LRMoo meeting show an open issue — *"Interfacing the closed world assumption of NTPs with CRMinf"* — plus a standing action item to elaborate the full set of NTP properties needed, based on archaeology and conservation datasets still being collected. That's committee language for "the core idea is accepted in principle, the details aren't settled."
- **Origin project.** It grew out of the Linked Conservation Data project (AHRC-funded, UK), motivated by real condition surveys of manuscripts — Nicholas Pickwoad's bookbinding conservation work specifically. So it's a live, funded, conservation-community effort, just not yet folded into the ratified standard.

**What this means for your talk:** it's actually a stronger point for you, not a weaker one, if you frame it accurately — you're not applying an established CRM feature, you're extending a proposal that's *itself* still being negotiated inside the SIG, into a new domain (exhibitions) that the original authors weren't thinking about (bookbinding, not curatorial fictionalism). That's a more interesting claim than "I used a standard tool," and it pre-empts anyone asking "why isn't this just in CIDOC-CRM already." Want me to work that framing into the Lacunae slide notes?

EXPLORE PROPERTY

@prefix ex: <http://example.org/> .
@prefix crm: <http://www.cidoc-crm.org/cidoc-crm/> .
@prefix crminf: <http://www.cidoc-crm.org/cidoc-crm/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

# --- Objets (Classes: obj) ---
ex:photographie_X rdf:type crm:E38_Image ;
    rdfs:label "Photo X" .

ex:entrée_catalogue_Y rdf:type crm:E31_Document ;
    rdfs:label "entrée_catalogue_Y" .

# --- Propositions et Interprétations (Classes: prop, belief, val, act, actor) ---
ex:PropositionSet_X rdf:type crminf:I4_Proposition_Set ;
    rdfs:label "Photo X represent artwork Y" .

ex:Belief_A rdf:type crminf:I2_Belief ;
    rdfs:label "A's Belief" .

ex:Plausible_Value rdf:type crminf:I6_Belief_Value ;
    rdfs:label "Plausible" .

ex:Act_Judgment rdf:type crminf:I7_Belief_Adoption ;
    rdfs:label "Action of judgment" .

ex:researcher_A rdf:type crm:E21_Person ;
    rdfs:label "researcher_A" .

# --- Relations ---

# Relation entre la croyance et la proposition
ex:Belief_A crminf:J4_that ex:PropositionSet_X .

# Relation entre la proposition et les objets (photo et catalogue)
ex:PropositionSet_X crm:P129_is_about ex:photographie_X .
ex:PropositionSet_X crm:P129_is_about ex:entrée_catalogue_Y .

# Relation entre la croyance et la valeur
ex:Belief_A crminf:J5_holds_to_be ex:Plausible_Value .

# Relations entre l'action et ses éléments
ex:Act_Judgment crm:P14_carried_out_by ex:researcher_A .
ex:Act_Judgment crminf:J13_adopted_interpretation ex:Belief_A .
ex:Act_Judgment crminf:J7_is_based_on_evidence_from ex:photographie_X .

# Relation directe de la croyance sur la photo (si nécessaire selon votre modèle)
ex:Belief_A crminf:J14_adopted_interpretation_of ex:photographie_X .