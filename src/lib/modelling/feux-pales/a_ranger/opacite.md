

La croyance floue répond à une partie du problème en documentant ce qu'on sait mal. Mais il reste deux cas que CRMinf ne couvre pas, ce qu'on n'a pas réussi à savoir, et ce qu'on n'a pas le droit de dire.
Le premier cas est ordinaire, presque banal pour qui a travaillé en régie d'œuvres : parmi les quatre-vingt-seize pièces prêtées depuis quatre continents, certaines chaînes de provenance s'arrêtent net avant le vingtième siècle. Ce n'est pas que personne n'ait cherché, c'est que la recherche a été menée, et qu'elle est revenue bredouille. Documenter ça comme un simple champ vide, c'est perdre l'information la plus importante : que la case n'est pas vide par négligence, elle est vide par constat. Le SIG CIDOC-CRM travaille lui-même sur cette distinction depuis 2019, et Velios, Meghini, Doerr et Stead en ont proposé, en 2023, une extension formelle (les negative typed properties) pour documenter précisément ce genre d'absence constatée en contexte de conservation. Je m'inscris dans cette continuité avec une sous-classe d'E13 Attribute Assignment, Attribute_Missing, qui porte l'événement de recherche lui-même (daté, attribué) plutôt que son absence de résultat.
Le second cas est plus radical, et c'est celui qui touche au cœur même de Feux pâles. Le dispositif de Thomas repose entièrement sur un secret organisé : chaque collectionneur devient signataire, et le nom réel de l'auteur s'efface derrière ce montage. Ce n'est pas une lacune de la documentation — c'est une opacité voulue par l'œuvre elle-même, et la préserver comme telle fait partie de l'intégrité de l'objet que je dois conserver. Ce cas-là, le SIG ne l'a pas encore traité : ses discussions sur les droits — E30 Right, et les débats en cours pour l'enrichir d'une portée temporelle et conditionnelle — portent sur qui détient un droit, pas sur le choix délibéré de ne pas divulguer une identité. J'ai donc créé une seconde sous-classe, Undisclosed, symétrique de la première dans sa structure — mais qui documente un choix plutôt qu'un échec, avec la raison de la rétention portée par un objet séparé, lui-même susceptible d'être soumis à sa propre condition d'accès.
Deux classes, une même question posée au graphe : cette absence est-elle documentée — et si oui, est-elle subie, ou voulue. La première prolonge un chantier du SIG. La seconde en ouvre un que je propose ici.


Un nom plus proche de la terminologie déjà utilisée par le SIG (Velios, Meghini, Doerr, Stead parlent explicitement de negative statements) et qui garde la forme X_Attribute_Assignment, cohérente avec le parent :

Negative_Attribute_Assignment — le plus fidèle à la littérature CRM existante, et il se lit sans ambiguïté comme une sous-catégorie d'assignation, pas comme un état.

Et par cohérence structurelle, ça invite à revoir aussi Undisclosed en Withheld_Attribute_Assignment (ou Undisclosed_Attribute_Assignment) : les deux classes redeviennent lisibles comme une paire d'événements symétriques — une assignation qui constate une absence, une assignation qui documente un refus — plutôt qu'une paire d'adjectifs d'état.



**Ce que fait Curate, dans votre usage**

Story/Plot sépare ce qui s'est réellement passé (Story : Thomas a produit l'œuvre) de la version présentée au public (Plot : le collectionneur signataire en est l'auteur). Les deux valeurs sont connues et modélisées — rien n'est retenu au niveau du graphe lui-même. C'est un dispositif narratologique : il vous permet de dire « il existe une version officielle et une version réelle », sans trancher laquelle est vraie pour le visiteur.

**Ce que fait `Withheld`**

C'est un dispositif de gouvernance documentaire, pas narratologique. Il documente qu'un acteur nommé, à une date donnée, a choisi de ne pas exposer une valeur — et cette valeur peut même ne pas être stockée du tout dans la portion exposée du graphe, contrairement au Plot de Curate où les deux valeurs coexistent et sont interrogeables.

**Où ça se recoupe, concrètement**

Dans le cas Thomas, le Plot officiel *fonctionne* comme une rétention volontaire — la fiction sert justement à cacher l'auteur réel au public. Donc oui, si vous utilisez les deux mécanismes sur le même fait (l'identité de l'auteur de l'œuvre-code-barres, par exemple), vous risquez de documenter deux fois la même chose sous deux angles différents, sans que la diapositive n'explique pourquoi les deux sont nécessaires.

**Comment les distinguer proprement, sans redite**

Curate répond à : « quelles versions narratives concurrentes cette exposition donne-t-elle à voir, et lesquelles l'artiste a-t-il délibérément construites comme fiction ? » — c'est descriptif de l'œuvre elle-même, de son dispositif interne.

`Withheld` répond à une question différente, qui se pose *après* et *en dehors* de l'œuvre : « aujourd'hui, en tant qu'institution qui documente cette exposition, est-ce que je choisis de rendre l'identité réelle publique dans mon propre système, ou est-ce que je la retiens à mon tour — et si oui, pourquoi, et qui en décide ? » C'est une couche de gouvernance de la donnée, potentiellement indépendante de Thomas : elle s'appliquerait aussi bien à un nom de donateur qu'on protège, ou à un objet sacré dont la fonction exacte reste confidentielle à la demande d'une communauté — aucun de ces cas n'a de structure narrative Plot/Story à offrir.

**Recommandation pour la slide**

Ne les présentez pas comme deux solutions au même problème. Précisez plutôt : Curate documente le dispositif fictionnel de l'œuvre (la rétention est un geste artistique, interne à *Feux pâles*) ; `Withheld` documente, en plus et à un niveau différent, une éventuelle décision curatoriale actuelle de perpétuer ou non cette rétention dans votre propre base — ce qui peut très bien ne jamais s'activer pour Thomas (vous connaissez et exposez déjà l'identité réelle dans votre étude) et servir ailleurs, pour des cas où, contrairement à Thomas, il n'y a ni fiction ni narration à modéliser, juste un refus.


**Le CRM documente, il n'applique pas**

`Withheld_Attribute_Assignment` peut très bien porter la condition de façon déclarative : lier l'assignation retenue à une instance d'`E30 Right`, elle-même typée (E55 Type, aligné SKOS) et éventuellement reliée à une politique ODRL — exactement le pont dont on a parlé plus tôt (`P?_isExpressedBy`, proposé sur la liste du SIG). Ça vous donne une condition *machine-lisible* : « accès autorisé si rôle = conservateur ET date ≥ 2030 », par exemple. Mais le CRM, en tant qu'ontologie, ne fait qu'énoncer des faits sur le monde — il n'a aucun mécanisme pour décider, au moment d'une requête, si la condition est remplie et si la valeur doit ou non apparaître dans la réponse. Ça, c'est le travail d'une couche séparée, en aval du modèle.

**Le pattern standard pour l'appliquer réellement**

La solution la plus répandue dans les triplestores repose sur les **named graphs** (le quatrième élément du quad RDF, en plus du sujet/prédicat/objet). Concrètement :

- La valeur retenue n'est pas stockée dans le graphe public par défaut. Elle vit dans un graphe nommé séparé, dont l'accès est contrôlé au niveau du triplestore lui-même.
- Le nœud `Withheld_Attribute_Assignment`, lui, reste toujours visible dans le graphe public — c'est précisément l'étiquette « contexte » qu'on avait envisagée : le fait qu'une condition existe est public, la valeur elle-même ne l'est pas tant que la condition n'est pas remplie.
- Au moment de la requête, un moteur d'accès (souvent appelé Attribute-Based Access Control dans ce contexte) évalue les credentials du demandeur contre la politique ODRL attachée au E30 Right, et décide s'il matérialise ou non le graphe nommé contenant la valeur dans le résultat retourné.

Des triplestores comme Stardog, GraphDB ou Virtuoso supportent nativement ce genre de contrôle d'accès par graphe nommé ; pour des besoins plus fins, on passe souvent par une couche applicative devant l'endpoint SPARQL, qui réécrit la requête ou filtre la réponse selon la politique.

**Ce que ça change pour votre modèle**

Ça confirme que votre architecture à deux niveaux — le nœud d'assignation toujours visible, la valeur elle-même conditionnée — n'est pas seulement cohérente conceptuellement, elle correspond exactement au pattern technique qu'il faudrait de toute façon mettre en œuvre pour que ce ne soit pas qu'un vœu pieux dans le modèle. La différence à garder en tête pour la slide : ce que vous présentez comme contribution ontologique (`Withheld_Attribute_Assignment` + condition ODRL), et ce qui relève de l'infrastructure de service de données (named graphs + contrôle d'accès), ce sont deux choses distinctes. Le premier est votre apport ; le second est le mécanisme, déjà existant ailleurs, qui rend le premier opérant.

Le modèle rend la condition explicite ; l'infrastructure la rend effective

**Lacune**

```turtle
XX:XX_Attribute_Missing a owl:Class ;
    rdfs:subClassOf crm:E13_Attribute_Assignment ;
    rdfs:label "Attribute Missing"@en ;
    rdfs:comment "An attribute assignment activity that records the documented absence of a value for a property after a search activity, without asserting that value."@en .
```

Le CRM, fonctionnant selon une logique de monde ouvert, considère déjà l'absence d'assertion comme une absence de connaissance plutôt que comme une négation, ce qui constitue une bonne approche par défaut. Cependant, je souhaite déclarer explicitement qu'une recherche a été entreprise et s'est révélée infructueuse, afin que cette lacune soit lue comme documentée et non comme un simple oubli.

Dès la 45e réunion (2019), Le SIG CIDOC-CRM posait la question en ces termes : l'absence d'une propriété doit-elle être modélisée comme un type, ou comme une propriété niée reliant des classes du CRM ? Velios, Meghini, Doerr et Stead en ont fait, en 2023, une proposition formelle d'extension — les *typed properties* et *negative typed properties* — pour permettre d'énoncer aussi bien la présence que l'absence documentée d'un composant, à partir de cas réels de constats d'état en conservation. Le SIG a poursuivi ce travail la même année, en cherchant à modéliser la validité temporelle de l'absence d'observation. `XX:XX_Attribute_Missing` s'inscrit dans cette continuité plutôt que d'inventer isolément une solution ad hoc.

J'ai créé cette nouvelle classe, sous-classe de E13, plutôt qu'une valeur de remplacement propre à chaque propriété — et, comme il ne s'agit pas d'assigner une valeur mais d'attester l'échec d'une recherche, elle n'utilise pas P141 assigned : seuls P140 assigned attribute to et P177 assigned property type sont mobilisés, pour indiquer quelle propriété, sur quel objet, a fait l'objet d'une recherche restée vaine, sans laisser croire qu'un résultat, même nul, a été assigné.

Parce qu'il s'agit d'une classe déclarée à part entière, le statut du titre devient directement interrogeable : je peux demander au graphe « quels titres sont des lacunes documentées » et obtenir une réponse. Un seul artefact réel nécessite souvent plusieurs petits mécanismes de ce type simultanément, superposés sur différentes propriétés du même nœud.

---

**(Méta)données délibérément non déclarées ou données sous condition**

Voici le point le plus critique. Jusqu'ici, nous avons traité l'absence de données comme un problème à résoudre. Mais que se passe-t-il si cette absence est intentionnelle ?

Certains acteurs ne retiennent pas l'information par accident. Ils refusent de la divulguer par principe, au sens que Glissant donne au droit à l'opacité. L'absence et l'opacité, dans ce cadre, sont des positions épistémiques légitimes, non des déficiences à corriger — une logique déjà institutionnalisée ailleurs dans le patrimoine numérique, notamment par les *Traditional Knowledge (TK) Labels* et *Biocultural (BC) Labels* de Local Contexts, qui permettent à des communautés de faire porter des conditions d'accès et de circulation sur une donnée sans avoir à en exposer les protocoles internes.

Les métadonnées peuvent tout de même être partagées, mais sous conditions énoncées. La question devient alors : comment rendre cela interrogeable sans trahir l'éthique même qui a motivé cette rétention ? Dans l'interface, cela pourrait simplement se traduire par une étiquette « contexte », informant l'utilisateur qu'une condition s'applique, sans exposer la raison sous-jacente elle-même — étant entendu que cette raison, une fois documentée, doit elle aussi pouvoir hériter d'une condition d'accès, sous peine de faire fuiter par la bande ce que la classe est censée protéger.

**Proposition : une classe Undisclosed Attribute**

```turtle
XX:XX_Undisclosed a owl:Class ;
    rdfs:subClassOf crm:E13_Attribute_Assignment ;
    rdfs:label "Undisclosed Attribute"@en, "Attribut non divulgué"@fr ;
    rdfs:comment "An attribute assignment activity that documents the deliberate withholding of a value for a given property, motivated by ethical, legal, or cultural principles, without asserting that value."@en .
```

Concrètement, je sous-classe à nouveau E13_Attribute_Assignment, cette fois sous la forme `XX:XX_Undisclosed`, en conservant la même discipline que pour `Attribute_Missing` : pas de P141, seulement P140 et P177, pour les mêmes raisons. J'y attache la raison documentée de la rétention comme un E73_Information_Object distinct, plutôt que de la laisser implicite ou de la fondre dans la classe elle-même. Ce E73 peut à son tour porter sa propre condition d'accès : la raison de l'opacité n'est pas nécessairement plus divulgable que l'attribut qu'elle motive.

La classe se place délibérément à côté d'`Attribute_Missing` : les deux résultent d'une recherche, mais l'une revient vide parce que l'information n'a réellement pas pu être trouvée, et l'autre revient vide parce que quelqu'un, nommé et daté, a choisi de ne pas la divulguer.

Pour typer la nature de la rétention (motif culturel, légal, éthique, saisonnier, genré…), on peut rattacher un E55 Type à l'activité via P2 has type — E55 Type étant nativement alignable avec des concepts SKOS (skos:exactMatch/closeMatch), ce qui permet de faire porter ce typage par un vocabulaire externe existant, par exemple celui des TK Labels de Local Contexts, plutôt que d'inventer une taxonomie propriétaire.





old ---







**Le problème que vous décrivez a un nom dans la communauté CRM**

Par défaut, CIDOC-CRM (comme RDF/OWL en général) fonctionne sous hypothèse du monde ouvert : l'absence d'une assertion dans le graphe signifie simplement « inconnu », sans distinguer « personne n'a cherché » de « quelqu'un a cherché et n'a rien trouvé ». C'est exactement l'ambiguïté que vous pointez, et elle a été explicitement remontée comme un manque du modèle.

**Les travaux concrets**

- Une présentation intitulée « Recording Absence and Negative Properties » a été faite lors de la 48e réunion du SIG (Oslo, octobre 2020).
- Dès la 45e réunion (2019), le SIG discutait déjà de savoir si l'absence d'une propriété devait être modélisée comme un type ou comme une propriété niée reliant des classes CRM.
- Cela a débouché sur un article de référence : Velios, Meghini, Doerr & Stead, « Typed properties and negative typed properties: Dealing with type observations and negative statements in the CIDOC CRM » (Semantic Web Journal). L'article part précisément du cas des relevés de conservation, où les experts observent l'absence de composants lors des campagnes de constat d'état, et où ces observations sont significatives pour les chercheurs mais difficiles à représenter dans les ontologies classiques comme le CIDOC-CRM, qui raisonnent avant tout en termes d'individus existants. Les auteurs proposent deux nouvelles constructions, les « typed properties » et « negative typed properties », pour permettre d'énoncer aussi bien la présence que l'absence d'individus.
- Un jeu de données de test associé (Stephen Stead, co-éditeur historique du CRM) a été soumis à Semantic Web Journal pour tester la capacité de logiciels à intégrer des données combinant assertions positives, négatives et de niveau classe — mais cette soumission spécifique a été refusée par les relecteurs, davantage pour des raisons de qualité/représentativité du jeu de données que sur le principe de la modélisation.
- Le travail continue activement dans le SIG : lors de la 57e réunion (octobre 2023), il a été décidé de poursuivre l'élaboration des propriétés nécessaires pour exprimer la validité temporelle de l'absence d'observation pour une caractéristique donnée, à partir de données réelles d'archéologie et de conservation.

**Ce que cela signifie pour votre question précise**

Le point que vous soulevez — distinguer une lacune *documentée* (recherche entreprise, restée infructueuse) d'un simple oubli — est exactement ce que ces travaux visent à couvrir, en particulier via l'idée de rattacher l'assertion négative à un événement d'observation/enquête daté et typé (d'où la question de la « validité temporelle » de l'absence : une absence constatée à un moment donné n'exclut pas une présence future ou passée).

**Statut actuel**

Ce n'est pas (encore) intégré comme mécanisme standard dans les classes/propriétés officielles du cœur du CRM publié (les versions officielles restent fondées sur l'hypothèse du monde ouvert classique). C'est un chantier d'extension actif, documenté dans les comptes-rendus de réunions successifs du SIG, mais qui n'a pas encore le statut de norme stabilisée. En pratique, en attendant, certains projets contournent le problème avec des solutions ad hoc : une E13 Attribute Assignment (ou une note P3 has note) documentant explicitement l'acte d'enquête et sa conclusion négative, éventuellement couplée à CRMinf (S4 Argumentation / I5 Inference Making) pour representer la conclusion comme une croyance justifiée par une recherche menée — mais ce ne sont pas des mécanismes pensés nativement pour ce cas, contrairement à l'extension « negative typed properties » qui, elle, cible directement votre besoin.

Non, ce n'est pas erroné — c'est même une distinction utile, et elle a un précédent concret hors CRM qui la valide. Mais il y a quelques points de modélisation à affiner.

**Sur le fond conceptuel : rien d'erroné**

Distinguer une absence *subie* (recherche menée, rien trouvé) d'une absence *choisie* (information existante mais retenue par principe) est une distinction épistémique réelle, pas une nuance artificielle. Et ce n'est pas propre à Glissant : c'est exactement ce que fait, en production, l'initiative **Local Contexts** (Jane Anderson & Kim Christen) avec ses **TK Labels** (Traditional Knowledge Labels) et **BC Labels** (Biocultural). Ces labels servent précisément à faire porter, au niveau de l'item ou de la collection, des conditions d'accès et de circulation définies par les communautés autochtones elles-mêmes — sans que l'institution qui héberge la donnée n'ait à se justifier ni à exposer les protocoles internes de la communauté. Vous retrouverez même chez eux une notice « Attribution Incomplete », voisine conceptuellement de votre `AttributeMissing`, ce qui confirme que la paire que vous construisez (absence involontaire / absence volontaire) correspond à une distinction déjà institutionnalisée ailleurs dans le patrimoine numérique.

Donc sur le principe : votre géométrie à deux classes tient debout, et elle est même alignée avec une pratique reconnue.

**Sur la modélisation CRM elle-même, quelques réserves techniques**

1. **P141 assigned est probablement à éviter.** E13 Attribute Assignment sert normalement à documenter l'acte d'assigner *une valeur* (via P141) à *une propriété* (via P177 assigned property type) *sur un sujet* (via P140 assigned attribute to). Or dans `Undisclosed`, il n'y a justement pas de valeur assignée — c'est le point. Gardez P140 et P177 (ils désignent quelle propriété, sur quel objet, aurait dû être renseignée), mais n'utilisez pas P141, ou alors réservez-le à un cas où vous assignez explicitement un type contrôlé du genre `Type: "undisclosed"` plutôt qu'une vraie valeur. Sinon vous recréez l'ambiguïté que la classe est censée résoudre.

2. **Le choix de sous-classer E13 plutôt que E7 Activity** est défendable — c'est d'ailleurs cohérent avec le débat que le SIG a eu en 2019 (« absence of a property either to be modelled as a type OR as a negated property »), qui n'a jamais été tranché de façon définitive. Vous héritez donc d'un point encore ouvert dans le CRM lui-même, pas d'une erreur de votre part.

3. **La régression de l'opacité est un vrai problème, pas un détail.** Vous documentez la raison via un E73 Information Object nommé et daté — très bien, c'est cohérent avec votre besoin d'auditabilité. Mais si la logique de Glissant doit être respectée jusqu'au bout, cet E73 lui-même peut avoir besoin d'être *conditionné* : la raison de la rétention peut elle-même être une information qu'on ne veut pas exposer publiquement. Ce n'est pas fatal, mais ça mérite d'être explicite dans votre modèle : soit vous assumez que la raison est toujours accessible aux ayants droit (curateurs, auditeurs), soit vous prévoyez que le E73 documentant la raison peut à son tour porter sa propre étiquette de contexte. Sinon l'étiquette « contexte » dans l'interface risque de fuiter, par la bande, ce que la classe est censée protéger.

**Sur le `@verifier` (SKOS / TK Labels) : oui, ça fonctionne, et c'est même la bonne piste**

L'usage standard en CRM pour rattacher un vocabulaire contrôlé externe est de passer par E55 Type (via P2 has type ou P177), et E55 Type est couramment aligné avec des concepts SKOS (skos:exactMatch/closeMatch) dans les bonnes pratiques du patrimoine culturel — c'est un pont documenté et largement utilisé, pas une extension exotique. Rien n'empêche donc de faire porter par votre classe `Undisclosed` un type dont les libellés (prefLabel/altLabel multilingues) sont eux-mêmes calés sur des labels externes, y compris ceux des TK Labels de Local Contexts si vous voulez rester interopérable avec cet écosystème plutôt que d'inventer votre propre vocabulaire de raisons.

Donc : le raisonnement n'est pas faux, il touche même à un chantier réel et non résolu du SIG. Ce qui reste à trancher, c'est un choix de modélisation (P141 ou pas) et une décision de gouvernance (jusqu'où la chaîne de justification peut-elle elle-même rester opaque).

Voici une reformulation qui intègre les trois points :

---

**(Méta)données délibérément non déclarées ou données sous condition**

Voici le point le plus critique. Jusqu'ici, nous avons traité l'absence de données comme un problème à résoudre. Mais que se passe-t-il si cette absence est intentionnelle ?

Certains acteurs ne retiennent pas l'information par accident. Ils refusent de la divulguer par principe, au sens que Glissant donne au droit à l'opacité. L'absence et l'opacité, dans ce cadre, sont des positions épistémiques légitimes, non des déficiences à corriger — une logique déjà institutionnalisée ailleurs dans le patrimoine numérique, notamment par les *Traditional Knowledge (TK) Labels* et *Biocultural (BC) Labels* de Local Contexts, qui permettent à des communautés de faire porter des conditions d'accès et de circulation sur une donnée sans avoir à en exposer les protocoles internes.

Les métadonnées peuvent tout de même être partagées, mais sous conditions énoncées. La question devient alors : comment rendre cela interrogeable sans trahir l'éthique même qui a motivé cette rétention ? Dans l'interface, cela pourrait simplement se traduire par une étiquette « contexte », informant l'utilisateur qu'une condition s'applique, sans exposer la raison sous-jacente elle-même — étant entendu que cette raison, une fois documentée, doit elle aussi pouvoir hériter d'une condition d'accès, sous peine de faire fuiter par la bande ce que la classe est censée protéger.

**Proposition : une classe Undisclosed Attribute**

```turtle
XX:XX_Undisclosed a owl:Class ;
    rdfs:subClassOf crm:E13_Attribute_Assignment ;
    rdfs:label "Undisclosed Attribute"@en, "Attribut non divulgué"@fr ;
    rdfs:comment "An attribute assignment activity that documents the deliberate withholding of a value for a given property, motivated by ethical, legal, or cultural principles, without asserting that value."@en .
```

Concrètement, je sous-classe à nouveau E13_Attribute_Assignment, cette fois sous la forme `XX:XX_Undisclosed`. Contrairement à un E13 ordinaire, cette classe n'utilise pas P141 assigned : il n'y a justement aucune valeur à assigner, c'est le point même de la rétention. Elle conserve en revanche P140 assigned attribute to et P177 assigned property type, pour indiquer sans ambiguïté *quelle* propriété, sur *quel* objet, a fait l'objet d'une décision de non-divulgation — plutôt que de laisser croire qu'une valeur, même vide, a été assignée.

J'y attache la raison documentée de la rétention comme un E73_Information_Object distinct, plutôt que de la laisser implicite ou de la fondre dans la classe elle-même. Ce E73 peut à son tour porter sa propre condition d'accès : la raison de l'opacité n'est pas nécessairement plus divulgable que l'attribut qu'elle motive.

La classe se place délibérément à côté d'`AttributeMissing` : les deux résultent d'une recherche, mais l'une revient vide parce que l'information n'a réellement pas pu être trouvée, et l'autre revient vide parce que quelqu'un, nommé et daté, a choisi de ne pas la divulguer.

Pour typer la nature de la rétention (motif culturel, légal, éthique, saisonnier, genré…), on peut rattacher un E55 Type à l'activité via P2 has type — E55 Type étant nativement alignable avec des concepts SKOS (skos:exactMatch/closeMatch), ce qui permet de faire porter ce typage par un vocabulaire externe existant, par exemple celui des TK Labels de Local Contexts, plutôt que d'inventer une taxonomie propriétaire.






**(Méta)données délibérément non déclarées ou données sous condition**

Voici le point le plus critique. Jusqu'ici, nous avons traité l'absence de données comme un problème à résoudre. Mais que se passe-t-il si cette absence est intentionnelle ?

Certains acteurs ne retiennent pas l'information par accident. Ils refusent de la divulguer par principe, au sens que Glissant donne au droit à l'opacité. L'absence et l'opacité, dans ce cadre, sont des positions épistémiques légitimes, non des déficiences à corriger — une logique déjà institutionnalisée ailleurs dans le patrimoine numérique, notamment par les *Traditional Knowledge (TK) Labels* et *Biocultural (BC) Labels* de Local Contexts, qui permettent à des communautés de faire porter des conditions d'accès et de circulation sur une donnée sans avoir à en exposer les protocoles internes.

Les métadonnées peuvent tout de même être partagées, mais sous conditions énoncées. La question devient alors : comment rendre cela interrogeable sans trahir l'éthique même qui a motivé cette rétention ? Dans l'interface, cela pourrait simplement se traduire par une étiquette « contexte », informant l'utilisateur qu'une condition s'applique, sans exposer la raison sous-jacente elle-même — étant entendu que cette raison, une fois documentée, doit elle aussi pouvoir hériter d'une condition d'accès, sous peine de faire fuiter par la bande ce que la classe est censée protéger.

Cette classe `AttributeMissing`, elle, ne sort pas de nulle part : elle prolonge un chantier que le SIG CIDOC-CRM lui-même n'a jamais refermé. Dès la 45e réunion (2019), la question était posée en ces termes : l'absence d'une propriété doit-elle être modélisée comme un type, ou comme une propriété niée reliant des classes du CRM ? Velios, Meghini, Doerr et Stead en ont fait, en 2023, une proposition formelle d'extension — les *typed properties* et *negative typed properties* — pour permettre d'énoncer aussi bien la présence que l'absence documentée d'un composant, à partir de cas réels de constats d'état en conservation. Le SIG a poursuivi ce travail en 2023, en cherchant à modéliser la validité temporelle de l'absence d'observation. Rien de tout cela, cependant, ne traite le cas où l'absence est un choix plutôt qu'un échec de recherche — c'est précisément l'angle mort que `Undisclosed` vient combler, en miroir de ce que le SIG a déjà instruit pour l'absence involontaire.

**Proposition : une classe Undisclosed Attribute**

```turtle
XX:XX_Undisclosed a owl:Class ;
    rdfs:subClassOf crm:E13_Attribute_Assignment ;
    rdfs:label "Undisclosed Attribute"@en, "Attribut non divulgué"@fr ;
    rdfs:comment "An attribute assignment activity that documents the deliberate withholding of a value for a given property, motivated by ethical, legal, or cultural principles, without asserting that value."@en .
```

Concrètement, je sous-classe à nouveau E13_Attribute_Assignment, cette fois sous la forme `XX:XX_Undisclosed`. Contrairement à un E13 ordinaire, cette classe n'utilise pas P141 assigned : il n'y a justement aucune valeur à assigner, c'est le point même de la rétention. Elle conserve en revanche P140 assigned attribute to et P177 assigned property type, pour indiquer sans ambiguïté *quelle* propriété, sur *quel* objet, a fait l'objet d'une décision de non-divulgation — plutôt que de laisser croire qu'une valeur, même vide, a été assignée.

J'y attache la raison documentée de la rétention comme un E73_Information_Object distinct, plutôt que de la laisser implicite ou de la fondre dans la classe elle-même. Ce E73 peut à son tour porter sa propre condition d'accès : la raison de l'opacité n'est pas nécessairement plus divulgable que l'attribut qu'elle motive.

La classe se place délibérément à côté d'`AttributeMissing` : les deux résultent d'une recherche, mais l'une revient vide parce que l'information n'a réellement pas pu être trouvée, et l'autre revient vide parce que quelqu'un, nommé et daté, a choisi de ne pas la divulguer.

Pour typer la nature de la rétention (motif culturel, légal, éthique, saisonnier, genré…), on peut rattacher un E55 Type à l'activité via P2 has type — E55 Type étant nativement alignable avec des concepts SKOS (skos:exactMatch/closeMatch), ce qui permet de faire porter ce typage par un vocabulaire externe existant, par exemple celui des TK Labels de Local Contexts, plutôt que d'inventer une taxonomie propriétaire.