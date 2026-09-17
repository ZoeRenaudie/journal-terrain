


Linkedart pour les set d'objets. 


There are many use cases for grouping entities together, often of the same class but sometimes of varying types. These use cases are exemplified in the sections below, and range from the set of objects in an auction lot, to dealer inventories and museum collections, exhibitions, a set of related concepts, or the set of people that share a common feature such as gender or nationality.

In order to cover all of the use cases with a consistent pattern, we introduce a new Set class from outside of CIDOC-CRM. This avoids issues with sets of entities with different types, and the semantics of the identity of objects and collections. If an equivalent class were to be added into the core CIDOC-CRM ontology in the future, a new major version of the specification would likely change to use it.
Features

Sets are conceptual groupings, rather than physical ones. The set of objects in a virtual exhibition or simply the set of a person's favorite objects never change their physical state by being part of the Set or not. One might have a set of destroyed objects which would be extremely strange if the Set was a physical aggregation of things which no longer existed. Sets are, thus, created by a Creation, not by a Production, and cannot be destroyed. A set may have zero members at any given point in time without going out of existence.

Like any core entity, instances of Set must have an id and type, are likely to have additional classifications, and can have identifiers and names. They can have statements made about them, and most importantly can have member entities.

Entities that are members of the set are included via the member_of from the member entity with a value of the URI of the Set. Members may, in theory, be of any class, however the Linked Art API limits to only core entity types. This means that the publisher of the information about the member needs to include the member_of property to the Set instance. This is not a problem in the situation where both are managed in the same environment, nor a challenge conceptually in the model (there is the inverse member property), however the API does not allow for sets to refer to their members following the same design principles that groups do not refer to their members, nor objects to their parts. It also means that the members must be one of the main classes in the specification that can stand alone as records, such as a HumanMadeObject or an Activity, and not classes that are only used within records such as Production or Name, as there is no way to find the encapusating record.

Example:

The set of objects in an exhibition.

{
  "@context": "https://linked.art/ns/v1/linked-art.json",
  "id": "https://linked.art/example/set/exhset/1",
  "type": "Set",
  "_label": "Exhibition objects",
  "identified_by": [
    {
      "type": "Name",
      "classified_as": [
        {
          "id": "http://vocab.getty.edu/aat/300404670",
          "type": "Type",
          "_label": "Primary Name"
        }
      ],
      "content": "Objects in Manet and Modern Beauty"
    }
  ],
  "referred_to_by": [
    {
      "type": "LinguisticObject",
      "classified_as": [
        {
          "id": "http://vocab.getty.edu/aat/300435416",
          "type": "Type",
          "_label": "Description",
          "classified_as": [
            {
              "id": "http://vocab.getty.edu/aat/300418049",
              "type": "Type",
              "_label": "Brief Text"
            }
          ]
        }
      ],
      "content": "Objects in the exhibition Manet and Modern Beauty at the Art Institute of Chicago and the Getty Museum"
    }
  ],
  "created_by": {
    "type": "Creation",
    "timespan": {
      "type": "TimeSpan",
      "begin_of_the_begin": "2019-05-01",
      "end_of_the_end": "2019-05-01"
    }
  }
}

type
_label
type
type
_label
classified_as
content
identified_by
type
type
_label
type
_label
classified_as
classified_as
content
referred_to_by
type
type
begin_of_the_begin
end_of_the_end
timespan
created_by
set/exhset/1
Set
''Exhibition objects''
_
Name
aat:300404670
Type
''Primary Name''
''Objects in Manet and Modern Beauty''
_
LinguisticObject
aat:300435416
Type
''Description''
aat:300418049
Type
''Brief Text''
''Objects in the exhibition Manet and Modern Beauty at the Art Institute of Chicago and the Getty Museum''
_
Creation
_
TimeSpan
''2019-05-01''
''2019-05-01''
Other Representations: JSON-LD (raw) | JSON-LD (playground) | Turtle (raw) | Turtle (styled)

An object in that set.

{
  "@context": "https://linked.art/ns/v1/linked-art.json",
  "id": "https://linked.art/example/object/spring/13",
  "type": "HumanMadeObject",
  "_label": "Jeanne (Spring) by Manet",
  "classified_as": [
    {
      "id": "http://vocab.getty.edu/aat/300033618",
      "type": "Type",
      "_label": "Painting",
      "classified_as": [
        {
          "id": "http://vocab.getty.edu/aat/300435443",
          "type": "Type",
          "_label": "Type of Work"
        }
      ]
    }
  ],
  "identified_by": [
    {
      "type": "Name",
      "content": "Jeanne (Spring)"
    }
  ],
  "member_of": [
    {
      "id": "https://linked.art/example/set/exhset",
      "type": "Set"
    }
  ]
}

type
_label
type
_label
type
_label
classified_as
classified_as
type
content
identified_by
type
member_of
object/spring/13
HumanMadeObject
''Jeanne (Spring) by Manet''
aat:300033618
Type
''Painting''
aat:300435443
Type
''Type of Work''
_
Name
''Jeanne (Spring)''
set/exhset
Set
Other Representations: JSON-LD (raw) | JSON-LD (playground) | Turtle (raw) | Turtle (styled)

Order of Members

In order to ensure that the members are ordered correctly, a sort value can be added as an Identifier on the member. This value should sort correctly with respect to the other members of the set, with the alphanumerically lowest identifier value being presented first and then in ascending order from there. This identifier may have an AttributeAssignment associated with it that is influenced_by the Set in which the sort value should be applied. This allows the same entity to be a member of multiple ordered sets at the same time.

Example:

The Obermeyer letter described in the archives use case should sort as "000001" within the Stieglitz Family Letters set.

{
  "@context": "https://linked.art/ns/v1/linked-art.json",
  "id": "https://linked.art/example/object/letter/2",
  "type": "HumanMadeObject",
  "_label": "Obermeyer 1920",
  "identified_by": [
    {
      "type": "Name",
      "classified_as": [
        {
          "id": "http://vocab.getty.edu/aat/300404670",
          "type": "Type",
          "_label": "Primary Name"
        }
      ],
      "content": "Obermeyer, Bertha (1920)"
    },
    {
      "type": "Identifier",
      "classified_as": [
        {
          "id": "http://vocab.getty.edu/aat/300456575",
          "type": "Type",
          "_label": "Sort Value"
        }
      ],
      "content": "000001",
      "assigned_by": [
        {
          "type": "AttributeAssignment",
          "influenced_by": [
            {
              "id": "https://linked.art/example/set/archive_sfl",
              "type": "Set",
              "_label": "Stieglitz Family Letters"
            }
          ]
        }
      ]
    }
  ],
  "member_of": [
    {
      "id": "https://linked.art/example/set/archive_sfl",
      "type": "Set",
      "_label": "Stieglitz Family Letters"
    }
  ]
}

type
_label
type
type
_label
classified_as
content
identified_by
type
type
_label
classified_as
content
type
type
_label
influenced_by
assigned_by
identified_by
member_of
object/letter/2
HumanMadeObject
''Obermeyer 1920''
_
Name
aat:300404670
Type
''Primary Name''
''Obermeyer, Bertha (1920)''
_
Identifier
aat:300456575
Type
''Sort Value''
''000001''
_
AttributeAssignment
set/archive_sfl
Set
''Stieglitz Family Letters''
Other Representations: JSON-LD (raw) | JSON-LD (playground) | Turtle (raw) | Turtle (styled)

Prototypical Members

The information about any particular member of a set might not be available, however general information might be known about the entities that are members of the set. For example, objects in a particular set might have been created by the same person, be classified as the same type, or have had the same owner. Works might be written in the same language, be about the same subject, and so on. As any entity can be a member of a set, this gives a lot of freedom to describe the sorts of things that have been grouped together. This is frequently true for Archives, but can also be valuable for making the rationale for the set be more apparent, such as that the objects curated by a Paintings department are (generally) paintings.

The description of prototype member is embedded within the set as the value of the members_exemplified_by property.

This is not the 'highlight' members of the set, such as the famous pieces in a collection of objects. For that, use the Related Objects pattern. Using this approach does not imply that every member of the set has all of the features of the prototypical member, however care should be taken to not include information that is not generally true.

Example:

The objects exhibited were typically (but not exclusively) paintings by Manet.

{
  "@context": "https://linked.art/ns/v1/linked-art.json",
  "id": "https://linked.art/example/set/exhset/2",
  "type": "Set",
  "_label": "Exhibition objects",
  "members_exemplified_by": [
    {
      "type": "HumanMadeObject",
      "classified_as": [
        {
          "id": "http://vocab.getty.edu/aat/300033618",
          "type": "Type",
          "_label": "Painting",
          "classified_as": [
            {
              "id": "http://vocab.getty.edu/aat/300435443",
              "type": "Type",
              "_label": "Type of Work"
            }
          ]
        }
      ],
      "produced_by": {
        "type": "Production",
        "carried_out_by": [
          {
            "id": "http://vocab.getty.edu/ulan/500010363",
            "type": "Person",
            "_label": "Manet"
          }
        ]
      }
    }
  ]
}

type
_label
type
type
_label
type
_label
classified_as
classified_as
type
type
_label
carried_out_by
produced_by
members_exemplified_by
set/exhset/2
Set
''Exhibition objects''
_
HumanMadeObject
aat:300033618
Type
''Painting''
aat:300435443
Type
''Type of Work''
_
Production
ulan:500010363
Person
''Manet''
Other Representations: JSON-LD (raw) | JSON-LD (playground) | Turtle (raw) | Turtle (styled)


Exhibitions
Introduction

Exhibitions are a very common activity that involves artwork owned by different organizations being displayed together, often with additional contextual information linking the pieces together. The exhibition is often presented at different venues over time, and might be part of a series such as the World Fairs or annual exhibitions.

The model divides exhibitions across two separate entities: the activity of exhibiting the objects that occured at a place and point in time, and the conceptual notion of the exhibition. This separation is important as activities are not about anything, and for exhibitions that were planned but cancelled (perhaps due to a war, a pandemic, or just loss of financing) the conceptual exhibition allows the description of the idea without asserting that it actually occured.
Exhibition Activity

There is an activity which is the exhibiting of the objects. In particular, the exhibition occurs at a certain time given in timespan, at a certain place or places given in took_place_at, and was organized by some actor or actors, likely organizations, given in carried_out_by. It can be recognized as an exhibition using the classification of aat:300054766, "exhibitions". Exhibitions link to the set of objects exhibited with the used_specific_object property to a Set

Note that exhibitions as activities do not have a theme or subject, instead the activity is influenced_by an abstract work -- the idea of the Exhibition, described in the next section.

Example:

Manet and Modern Beauty at the Getty, October 2019 to January 2020, was carried out by the Getty Museum in Los Angeles, and influenced by the idea behind the exhibition.

{
  "@context": "https://linked.art/ns/v1/linked-art.json",
  "id": "https://linked.art/example/activity/exha/1",
  "type": "Activity",
  "_label": "Manet and Modern Beauty (Getty)",
  "classified_as": [
    {
      "id": "http://vocab.getty.edu/aat/300054766",
      "type": "Type",
      "_label": "Exhibiting"
    }
  ],
  "identified_by": [
    {
      "type": "Name",
      "classified_as": [
        {
          "id": "http://vocab.getty.edu/aat/300404670",
          "type": "Type",
          "_label": "Primary Name"
        }
      ],
      "content": "Manet and Modern Beauty"
    }
  ],
  "referred_to_by": [
    {
      "type": "LinguisticObject",
      "classified_as": [
        {
          "id": "http://vocab.getty.edu/aat/300435416",
          "type": "Type",
          "_label": "Description",
          "classified_as": [
            {
              "id": "http://vocab.getty.edu/aat/300418049",
              "type": "Type",
              "_label": "Brief Text"
            }
          ]
        }
      ],
      "content": "The great painter of modern Paris Edouard Manet famously shocked contemporary audiences with his provocative pictures. The first exhibition ever to explore the last years of his short life, Manet and Modern Beauty highlights a less familiar and more intimate side of this celebrated artist's work."
    }
  ],
  "timespan": {
    "type": "TimeSpan",
    "begin_of_the_begin": "2019-10-08T00:00:00Z",
    "end_of_the_end": "2020-01-12T23:59:59Z"
  },
  "took_place_at": [
    {
      "id": "http://vocab.getty.edu/tgn/7023900",
      "type": "Place",
      "_label": "Los Angeles",
      "classified_as": [
        {
          "id": "http://vocab.getty.edu/aat/300008389",
          "type": "Type",
          "_label": "City"
        }
      ]
    }
  ],
  "carried_out_by": [
    {
      "id": "http://vocab.getty.edu/ulan/500115988",
      "type": "Group",
      "_label": "Getty Museum",
      "classified_as": [
        {
          "id": "http://vocab.getty.edu/aat/300312281",
          "type": "Type",
          "_label": "Museum"
        }
      ]
    }
  ],
  "used_specific_object": [
    {
      "id": "https://linked.art/example/set/exhset",
      "type": "Set",
      "_label": "Exhibition objects"
    }
  ],
  "influenced_by": [
    {
      "id": "https://linked.art/example/concept/exhidea",
      "type": "PropositionalObject",
      "_label": "Idea for Manet and Modern Beauty"
    }
  ]
}

type
_label
type
_label
classified_as
type
type
_label
classified_as
content
identified_by
type
type
_label
type
_label
classified_as
classified_as
content
referred_to_by
type
begin_of_the_begin
end_of_the_end
timespan
type
_label
type
_label
classified_as
took_place_at
type
_label
type
_label
classified_as
carried_out_by
type
_label
used_specific_object
type
_label
influenced_by
activity/exha/1
Activity
''Manet and Modern Beauty (Getty)''
aat:300054766
Type
''Exhibiting''
_
Name
aat:300404670
Type
''Primary Name''
''Manet and Modern Beauty''
_
LinguisticObject
aat:300435416
Type
''Description''
aat:300418049
Type
''Brief Text''
''The great painter of modern Paris Edouard Manet famously shocked contemporary audiences with his provocative pictures. The first exhibition ever to explore the last years of his short life, Manet and Modern Beauty highlights a less familiar and more intimate side of this celebrated artist's work.''
_
TimeSpan
''2019-10-08T00:00:00Z''
''2020-01-12T23:59:59Z''
tgn:7023900
Place
''Los Angeles''
aat:300008389
Type
''City''
ulan:500115988
Group
''Getty Museum''
aat:300312281
Type
''Museum''
set/exhset
Set
''Exhibition objects''
concept/exhidea
PropositionalObject
''Idea for Manet and Modern Beauty''
Other Representations: JSON-LD (raw) | JSON-LD (playground) | Turtle (raw) | Turtle (styled)

Exhibition Concept

The model distinguishes between the concept of the exhibition and the activity that makes that concept real. The concept is created by the people who originally think up the exhibition, long before any of the pieces are collected together. The exhibition concept likely has some theme that results in a coherent set of objects being presented, which could be as complex as post-industrial life or as simple as the life's work of a particular artist.

The concept is modeled as a PropositionalObject, and classified_as aat:300417531 to ensure that it's clearly tagged as an exhibition and separate from the activity. It can have all of basic patterns, such as names, identifiers, references, as well as rights and subjects.

Note that this "abstract work" pattern can be used for other modeling scenarios as well, including performance art, theatre or other performing arts, the "work" notion from bibliographic modeling as described in the document model. If the entity can be "about" something but is not directly a Linguistic or Visual work, then PropositionalObject is the most likely class.

Example:

The idea (or abstract work) for the Manet and Modern Beauty exhibition is about Manet and Beauty.

{
  "@context": "https://linked.art/ns/v1/linked-art.json",
  "id": "https://linked.art/example/concept/exhidea/1",
  "type": "PropositionalObject",
  "_label": "Idea for Manet and Modern Beauty",
  "classified_as": [
    {
      "id": "http://vocab.getty.edu/aat/300417531",
      "type": "Type",
      "_label": "Exhibition"
    }
  ],
  "identified_by": [
    {
      "type": "Name",
      "classified_as": [
        {
          "id": "http://vocab.getty.edu/aat/300404670",
          "type": "Type",
          "_label": "Primary Name"
        }
      ],
      "content": "Manet and Modern Beauty"
    }
  ],
  "about": [
    {
      "id": "http://vocab.getty.edu/aat/300055821",
      "type": "Type",
      "_label": "Beauty"
    },
    {
      "id": "http://vocab.getty.edu/ulan/500010363",
      "type": "Person",
      "_label": "Manet"
    }
  ],
  "created_by": {
    "type": "Creation",
    "carried_out_by": [
      {
        "id": "https://linked.art/example/person/allan",
        "type": "Person",
        "_label": "Scott Allan"
      },
      {
        "id": "https://linked.art/example/person/beeny",
        "type": "Person",
        "_label": "Emily Beeny"
      },
      {
        "id": "https://linked.art/example/person/groom",
        "type": "Person",
        "_label": "Gloria Groom"
      }
    ]
  }
}

type
_label
type
_label
classified_as
type
type
_label
classified_as
content
identified_by
type
_label
about
type
_label
about
type
type
_label
carried_out_by
type
_label
carried_out_by
type
_label
carried_out_by
created_by
concept/exhidea/1
PropositionalObject
''Idea for Manet and Modern Beauty''
aat:300417531
Type
''Exhibition''
_
Name
aat:300404670
Type
''Primary Name''
''Manet and Modern Beauty''
aat:300055821
Type
''Beauty''
ulan:500010363
Person
''Manet''
_
Creation
person/allan
Person
''Scott Allan''
person/beeny
Person
''Emily Beeny''
person/groom
Person
''Gloria Groom''
Other Representations: JSON-LD (raw) | JSON-LD (playground) | Turtle (raw) | Turtle (styled)

Known Artist without Known Objects

A frequently encountered situation is that we know about a historical exhibition and which artist or artists had works that were exhibited, but do not know any of the individual works. As the artist was likely not present at the exhibition, nor was involved in planning or otherwise executing it, they cannot be a participant in the activity, nor in the conceptualization of the activity. Equally, we might know of an exhibition that was planned around an artist, but it may never have actually occured. Finally, we may wish to link an artist to the exhibition regardless of whether we know the objects or not.

The link to the artist is thus on the Exhibition Concept, rather than related to the activity. If the exhibition is about the artist specifically, then the concept can be about the artist. If the artist is just known to have had works used in the exhibition, then its Creation should be influenced_by the artist. It can also, of course, be both.

Example:

The conceptualization of the "Manet and Modern Beauty" exhibition was influenced by the Manet and his work.

{
  "@context": "https://linked.art/ns/v1/linked-art.json",
  "id": "https://linked.art/example/concept/exhidea/2",
  "type": "PropositionalObject",
  "_label": "Idea for Manet and Modern Beauty",
  "classified_as": [
    {
      "id": "http://vocab.getty.edu/aat/300417531",
      "type": "Type",
      "_label": "Exhibition"
    }
  ],
  "identified_by": [
    {
      "type": "Name",
      "classified_as": [
        {
          "id": "http://vocab.getty.edu/aat/300404670",
          "type": "Type",
          "_label": "Primary Name"
        }
      ],
      "content": "Manet and Modern Beauty"
    }
  ],
  "created_by": {
    "type": "Creation",
    "influenced_by": [
      {
        "id": "http://vocab.getty.edu/ulan/500010363",
        "type": "Person",
        "_label": "Manet"
      }
    ]
  }
}

type
_label
type
_label
classified_as
type
type
_label
classified_as
content
identified_by
type
type
_label
influenced_by
created_by
concept/exhidea/2
PropositionalObject
''Idea for Manet and Modern Beauty''
aat:300417531
Type
''Exhibition''
_
Name
aat:300404670
Type
''Primary Name''
''Manet and Modern Beauty''
_
Creation
ulan:500010363
Person
''Manet''
Other Representations: JSON-LD (raw) | JSON-LD (playground) | Turtle (raw) | Turtle (styled)

Multiple Venues

Some exhibitions are shown at different locations over time, moving from one museum or exhibition hall to another. In this case, each of the different locations is treated as an exhibition activity in its own right, and then a broader "travelling exhibition" (aat:300054773) is created that these are part of. Note that the travelling exhibition can have separate properties from its parts, such as a label to distinguish the joint nature and a broader timespan that covers all of the venues. There is no need to duplicate the organizations and locations in the travelling exhibition, these can be determined more easily by looking at the exhibitions that it consists of.

Example:

The Art Institute of Chicago exhibited Manet and Modern Beauty in Chicago with a specific set of objects, and is part of the larger multi-venue exhibition.

{
  "@context": "https://linked.art/ns/v1/linked-art.json",
  "id": "https://linked.art/example/activity/exhb/1",
  "type": "Activity",
  "_label": "Manet and Modern Beauty (AIC)",
  "classified_as": [
    {
      "id": "http://vocab.getty.edu/aat/300054766",
      "type": "Type",
      "_label": "Exhibiting"
    }
  ],
  "identified_by": [
    {
      "type": "Name",
      "classified_as": [
        {
          "id": "http://vocab.getty.edu/aat/300404670",
          "type": "Type",
          "_label": "Primary Name"
        }
      ],
      "content": "Manet and Modern Beauty"
    }
  ],
  "timespan": {
    "type": "TimeSpan",
    "begin_of_the_begin": "2019-05-26T00:00:00Z",
    "end_of_the_end": "2019-09-08T23:59:59Z"
  },
  "took_place_at": [
    {
      "id": "http://vocab.getty.edu/tgn/7013596",
      "type": "Place",
      "_label": "Chicago",
      "classified_as": [
        {
          "id": "http://vocab.getty.edu/aat/300008389",
          "type": "Type",
          "_label": "City"
        }
      ]
    }
  ],
  "carried_out_by": [
    {
      "id": "http://vocab.getty.edu/ulan/500304669",
      "type": "Group",
      "_label": "Art Institute",
      "classified_as": [
        {
          "id": "http://vocab.getty.edu/aat/300312281",
          "type": "Type",
          "_label": "Museum"
        }
      ]
    }
  ],
  "used_specific_object": [
    {
      "id": "https://linked.art/example/set/exhset",
      "type": "Set",
      "_label": "Exhibition objects"
    }
  ],
  "influenced_by": [
    {
      "id": "https://linked.art/example/concept/exhidea",
      "type": "PropositionalObject",
      "_label": "Idea for Manet and Modern Beauty"
    }
  ],
  "part_of": [
    {
      "id": "https://linked.art/example/event/exhab",
      "type": "Activity",
      "_label": "Manet and Modern Beauty"
    }
  ]
}

type
_label
type
_label
classified_as
type
type
_label
classified_as
content
identified_by
type
begin_of_the_begin
end_of_the_end
timespan
type
_label
type
_label
classified_as
took_place_at
type
_label
type
_label
classified_as
carried_out_by
type
_label
used_specific_object
type
_label
part_of
type
_label
influenced_by
activity/exhb/1
Activity
''Manet and Modern Beauty (AIC)''
aat:300054766
Type
''Exhibiting''
_
Name
aat:300404670
Type
''Primary Name''
''Manet and Modern Beauty''
_
TimeSpan
''2019-05-26T00:00:00Z''
''2019-09-08T23:59:59Z''
tgn:7013596
Place
''Chicago''
aat:300008389
Type
''City''
ulan:500304669
Group
''Art Institute''
aat:300312281
Type
''Museum''
set/exhset
Set
''Exhibition objects''
event/exhab
Activity
''Manet and Modern Beauty''
concept/exhidea
PropositionalObject
''Idea for Manet and Modern Beauty''
Other Representations: JSON-LD (raw) | JSON-LD (playground) | Turtle (raw) | Turtle (styled)

The larger multi-venue exhibition activity.

{
  "@context": "https://linked.art/ns/v1/linked-art.json",
  "id": "https://linked.art/example/event/exhab/1",
  "type": "Activity",
  "_label": "Manet and Modern Beauty",
  "classified_as": [
    {
      "id": "http://vocab.getty.edu/aat/300054773",
      "type": "Type",
      "_label": "Exhibiting in multiple locations"
    }
  ],
  "identified_by": [
    {
      "type": "Name",
      "classified_as": [
        {
          "id": "http://vocab.getty.edu/aat/300404670",
          "type": "Type",
          "_label": "Primary Name"
        }
      ],
      "content": "Manet and Modern Beauty"
    }
  ],
  "timespan": {
    "type": "TimeSpan",
    "begin_of_the_begin": "2019-05-26T00:00:00Z",
    "end_of_the_end": "2020-01-12T23:59:59Z"
  },
  "influenced_by": [
    {
      "id": "https://linked.art/example/concept/exhidea",
      "type": "PropositionalObject",
      "_label": "Idea for Manet and Modern Beauty"
    }
  ]
}

type
_label
type
_label
classified_as
type
type
_label
classified_as
content
identified_by
type
begin_of_the_begin
end_of_the_end
timespan
type
_label
influenced_by
event/exhab/1
Activity
''Manet and Modern Beauty''
aat:300054773
Type
''Exhibiting in multiple locations''
_
Name
aat:300404670
Type
''Primary Name''
''Manet and Modern Beauty''
_
TimeSpan
''2019-05-26T00:00:00Z''
''2020-01-12T23:59:59Z''
concept/exhidea
PropositionalObject
''Idea for Manet and Modern Beauty''
Other Representations: JSON-LD (raw) | JSON-LD (playground) | Turtle (raw) | Turtle (styled)

Objects

The collection of art objects on display at exhibitions can be listed from the Exhibition with the property used_specific_object. The model for the set of objects that make up the content of the exhibition is the same as the model for permanent collections -- the objects are collected together into a Set, which is used by the Exhibition.

For travelling exhibitions described above, a different collection of objects should be referenced from each of the venues if those sets are substantially different. Objects are typically added or removed, and each venue will likely have its own context specific information such as descriptions or labels. The top level activity representing the overall exhibition does not have its own Set in the travelling exhibition scenario.

Example:

The objects in Manet and Modern Beauty ...

{
  "@context": "https://linked.art/ns/v1/linked-art.json",
  "id": "https://linked.art/example/set/exhset/1",
  "type": "Set",
  "_label": "Exhibition objects",
  "classified_as": [
    {
      "id": "http://vocab.getty.edu/aat/300378926",
      "type": "Type",
      "_label": "Exhibition Collection"
    }
  ],
  "identified_by": [
    {
      "type": "Name",
      "classified_as": [
        {
          "id": "http://vocab.getty.edu/aat/300404670",
          "type": "Type",
          "_label": "Primary Name"
        }
      ],
      "content": "Objects in Manet and Modern Beauty"
    }
  ],
  "referred_to_by": [
    {
      "type": "LinguisticObject",
      "classified_as": [
        {
          "id": "http://vocab.getty.edu/aat/300435416",
          "type": "Type",
          "_label": "Description",
          "classified_as": [
            {
              "id": "http://vocab.getty.edu/aat/300418049",
              "type": "Type",
              "_label": "Brief Text"
            }
          ]
        }
      ],
      "content": "Objects in the exhibition Manet and Modern Beauty at the Art Institute of Chicago and the Getty Museum"
    }
  ],
  "created_by": {
    "type": "Creation",
    "timespan": {
      "type": "TimeSpan",
      "begin_of_the_begin": "2019-05-01T00:00:00Z",
      "end_of_the_end": "2019-05-01T23:59:59Z"
    }
  }
}

type
_label
type
_label
classified_as
type
type
_label
classified_as
content
identified_by
type
type
_label
type
_label
classified_as
classified_as
content
referred_to_by
type
type
begin_of_the_begin
end_of_the_end
timespan
created_by
set/exhset/1
Set
''Exhibition objects''
aat:300378926
Type
''Exhibition Collection''
_
Name
aat:300404670
Type
''Primary Name''
''Objects in Manet and Modern Beauty''
_
LinguisticObject
aat:300435416
Type
''Description''
aat:300418049
Type
''Brief Text''
''Objects in the exhibition Manet and Modern Beauty at the Art Institute of Chicago and the Getty Museum''
_
Creation
_
TimeSpan
''2019-05-01T00:00:00Z''
''2019-05-01T23:59:59Z''
Other Representations: JSON-LD (raw) | JSON-LD (playground) | Turtle (raw) | Turtle (styled)

... include Jeanne, by Manet.

{
  "@context": "https://linked.art/ns/v1/linked-art.json",
  "id": "https://linked.art/example/object/spring/12",
  "type": "HumanMadeObject",
  "_label": "Jeanne (Spring) by Manet",
  "classified_as": [
    {
      "id": "http://vocab.getty.edu/aat/300033618",
      "type": "Type",
      "_label": "Painting",
      "classified_as": [
        {
          "id": "http://vocab.getty.edu/aat/300435443",
          "type": "Type",
          "_label": "Type of Work"
        }
      ]
    }
  ],
  "identified_by": [
    {
      "type": "Name",
      "content": "Jeanne (Spring)"
    }
  ],
  "member_of": [
    {
      "id": "https://linked.art/example/set/exhset",
      "type": "Set"
    }
  ]
}

type
_label
type
_label
type
_label
classified_as
classified_as
type
content
identified_by
type
member_of
object/spring/12
HumanMadeObject
''Jeanne (Spring) by Manet''
aat:300033618
Type
''Painting''
aat:300435443
Type
''Type of Work''
_
Name
''Jeanne (Spring)''
set/exhset
Set
Other Representations: JSON-LD (raw) | JSON-LD (playground) | Turtle (raw) | Turtle (styled)

Integration with Other Parts of the Model
Provenance Events for Exhibitions

As objects used for exhibitions frequently come from many different organizations, it is useful and interesting to track the custody of the object as well as the ownership. This event is modeled in the same way as other Custody changes.

For each exhibition, the custody of the object is transferred from the previous custodian to the next. In the simple case of a single venue for the exhibition, the first transfer is likely to be from the owner to the organization responsible for the exhibition, and then at the end of the exhibition, the custody is transferred back again. In a more complex scenario with multiple venues, each organization hosting the exhibition will likely transfer custody to the next in the sequence.

However, when the object being exhibited at the location is owned by the same organization, there is no transfer of custody. The equivalent activity is likely to be simply moving the object from its regular location to the exhibition space. This is described in the same way as other Movement events.

The provenance activities can be linked to the Exhibition by asserting that they are part_of the Exhibition activity.
Exhibition Specific Titles

The curators for exhibitions sometimes assign new titles or names for objects. This is an instance of the Context Specific Assertions pattern.


                    @prefix crm: <http://www.cidoc-crm.org/cidoc-crm/> .
@prefix crmsci: <http://www.ics.forth.gr/isl/CRMsci/> .
@prefix la: <https://linked.art/ns/terms/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

<https://linkedart.example/model/set> a la:Set ;
    crm:P141i_was_assigned_by <https://example.swissartresearch.net/event/429_1> ;
    crm:P94i_was_created_by <https://example.swissartresearch.net/event/71_1> .

<https://example.swissartresearch.net/actor/430_1> a crm:E39_Actor .

<https://example.swissartresearch.net/actor/86_1> a crm:E39_Actor .

<https://example.swissartresearch.net/conceptual_object/552_1> a crm:E33_Linguistic_Object .

<https://example.swissartresearch.net/conceptual_object/85_1> a crm:E33_Linguistic_Object .

<https://example.swissartresearch.net/conceptual_object/95_1> a crm:E33_Linguistic_Object .

<https://example.swissartresearch.net/event/429_1> a crm:E13_Attribute_Assignment ;
    rdfs:label "Value here" ;
    crm:P14_carried_out_by <https://example.swissartresearch.net/actor/430_1> ;
    crm:P16_used_specific_object <https://example.swissartresearch.net/object/553_1> ;
    crm:P1_is_identified_by <https://example.swissartresearch.net/name/432_1> ;
    crm:P2_has_type <https://example.swissartresearch.net/type/430_1> ;
    crm:P4_has_time-span <https://example.swissartresearch.net/time_span/433_1> ;
    crm:P67i_is_referred_to_by <https://example.swissartresearch.net/conceptual_object/552_1> .

<https://example.swissartresearch.net/event/71_1> a crm:E65_Creation ;
    rdfs:label "Creation_label_value" ;
    crm:P14_carried_out_by <https://example.swissartresearch.net/actor/86_1> ;
    crm:P15_was_influenced_by <https://example.swissartresearch.net/thing/87_1> ;
    crm:P1_is_identified_by <https://example.swissartresearch.net/identifier/94_1>,
        <https://example.swissartresearch.net/name/88_1> ;
    crm:P2_has_type <https://example.swissartresearch.net/type/91_1> ;
    crm:P4_has_time-span <https://example.swissartresearch.net/time_span/90_1> ;
    crm:P67i_is_referred_to_by <https://example.swissartresearch.net/conceptual_object/85_1>,
        <https://example.swissartresearch.net/conceptual_object/95_1> ;
    crm:P7_took_place_at <https://example.swissartresearch.net/place/71_2> ;
    crmsci:O13i_is_triggered_by <https://example.swissartresearch.net/event/96_1> .

<https://example.swissartresearch.net/event/96_1> a crm:E5_Event .

<https://example.swissartresearch.net/identifier/94_1> a crm:E42_Identifier .

<https://example.swissartresearch.net/name/432_1> a crm:E41_Appellation .

<https://example.swissartresearch.net/name/88_1> a crm:E33_E41_Linguistic_Appellation .

<https://example.swissartresearch.net/object/553_1> a crm:E70_Thing .

<https://example.swissartresearch.net/place/71_2> a crm:E53_Place .

<https://example.swissartresearch.net/thing/87_1> a crm:E1_CRM_Entity .

<https://example.swissartresearch.net/time_span/433_1> a crm:E52_Time-Span .

<https://example.swissartresearch.net/time_span/90_1> a crm:E52_Time-Span .

<https://example.swissartresearch.net/type/430_1> a crm:E55_Type .

<https://example.swissartresearch.net/type/91_1> a crm:E55_Type .


                

        les turtle          https://zellij.pythonanywhere.com/docs/list/apppvUqFqANBVJAQX?scraper=Models&selectedMenuItem=%2Fdocs%2Fdisplay%2FapppvUqFqANBVJAQX%2FModels%3Fsearch%3DLAM.2_Set