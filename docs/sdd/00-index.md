# SDD Index

This directory defines the specification-driven development baseline for `themselves`.

## Goal

Build an open source TypeScript library that helps individuals and organizations capture, structure, validate, and reuse tacit knowledge as an AI-native ontology.

## Artifact Map

1. [Product Requirements](01-product-requirements.md)
   - What problem `themselves` solves
   - Target users
   - Core product capabilities
   - Non-goals

2. [Domain Model](02-domain-model.md)
   - Core ontology entities
   - Knowledge lifecycle
   - Relation taxonomy
   - Trust and provenance model

3. [Ontology Store Design](03-ontology-store.md)
   - Storage abstraction
   - Logical database model
   - Adapter contract
   - SQLite and PostgreSQL strategy

4. [API Specification](04-api-specification.md)
   - Public TypeScript API
   - Capture, query, promotion, and versioning workflows
   - Extension points

5. [Implementation Plan](05-implementation-plan.md)
   - Milestones
   - Package layout
   - First implementation sequence
   - Acceptance criteria

6. [Quality Bar](06-quality-bar.md)
   - Engineering standards
   - Testing strategy
   - Documentation expectations
   - Release criteria

7. [Competitive Baseline](07-competitive-baseline.md)
   - OpenViking comparison baseline
   - Differentiation requirements
   - Stage-gate checks for implementation milestones

## Architecture Summary

```text
AI harness / developer tool / app
        |
        v
themselves TypeScript API
        |
        +-- ontology core
        +-- lifecycle engine
        +-- query planner
        +-- promotion workflow
        |
        v
OntologyStore adapter
        |
        +-- SQLite adapter
        +-- PostgreSQL adapter
        +-- future adapters
```

## First Development Rule

No implementation should be added unless it maps to an explicit SDD requirement, domain model element, API contract, or ADR.

## Competitive Rule

Major implementation milestones must include an OpenViking comparison check. `themselves` should not try to outbuild OpenViking as a general context database; it must exceed it in typed ontology modeling, provenance, contradiction handling, and personal-to-team knowledge promotion.
