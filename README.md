# themselves

AI-native ontology engine for turning personal tacit knowledge into shared organizational knowledge.

`themselves` is not a wiki, note app, or document database. It is a TypeScript library for capturing knowledge discovered during real work, structuring it as typed ontology records, and promoting validated personal knowledge into team and organization-level knowledge graphs.

## Product Thesis

Modern teams increasingly work through AI harnesses such as Codex, Claude Code, Cursor, and internal agents. During that work, individuals discover tacit knowledge: hidden rules, undocumented constraints, recurring decisions, operational patterns, and domain-specific meanings.

Most knowledge systems lose that knowledge because they store documents instead of meaning. `themselves` treats knowledge as a typed, versioned, contextual ontology.

## Initial Scope

- TypeScript-first library
- AI-native ontology model
- Personal-to-organization knowledge promotion
- Pluggable storage adapter layer
- SQLite reference adapter first, PostgreSQL later
- Query model for agents and developer tools
- SDD-driven development process

## SDD Artifacts

Start here:

- [SDD Index](docs/sdd/00-index.md)
- [Product Requirements](docs/sdd/01-product-requirements.md)
- [Domain Model](docs/sdd/02-domain-model.md)
- [Ontology Store Design](docs/sdd/03-ontology-store.md)
- [API Specification](docs/sdd/04-api-specification.md)
- [Implementation Plan](docs/sdd/05-implementation-plan.md)
- [Quality Bar](docs/sdd/06-quality-bar.md)

## Design Principle

The database is not merely persistence. It is the substrate for an evolving ontology: concepts, claims, decisions, patterns, evidence, contexts, actors, and typed relations.
