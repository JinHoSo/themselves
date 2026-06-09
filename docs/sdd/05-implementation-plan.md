# Implementation Plan

## Milestone 0: SDD Baseline

Status: in progress

Deliverables:

- Product requirements
- Domain model
- Store design
- API specification
- Quality bar
- Initial ADRs

Acceptance criteria:

- A developer can explain what the library is and is not
- Core entities and relations are named
- Storage adapter direction is clear
- First implementation sequence is defined

## Milestone 1: Repository Skeleton

Deliverables:

- TypeScript monorepo setup
- Package manager selection
- Lint, format, test configuration
- `@themselves/core` package
- Initial docs site or generated API docs decision

Acceptance criteria:

- `pnpm test` or equivalent works
- Core package builds
- Public exports are intentional

## Milestone 2: Core Ontology Types

Deliverables:

- Branded ids
- Knowledge record types
- Relation types
- Evidence, context, actor types
- Runtime validation schemas

Acceptance criteria:

- Types compile strictly
- Runtime schemas validate external inputs
- Invalid relation and record states are rejected

## Milestone 3: In-Memory Store

Deliverables:

- `OntologyStore` interface
- In-memory adapter for tests
- Repository contracts
- Transaction abstraction shape

Acceptance criteria:

- Capture and query workflows can run without a real database
- Store contract tests are defined

## Milestone 4: SQLite Adapter

Deliverables:

- `@themselves/sqlite`
- Schema migrations
- CRUD repositories
- Relation traversal
- Basic text search

Acceptance criteria:

- Store contract tests pass on SQLite
- Migration from empty database works
- Agent context query works against persisted data

## Milestone 5: Lifecycle and Promotion

Deliverables:

- Capture workflow
- Normalize workflow
- Promotion proposal workflow
- Accept, reject, supersede operations
- Mutation history

Acceptance criteria:

- Personal knowledge can be promoted to team scope
- Promotion preserves source provenance
- Superseded records remain queryable historically

## Milestone 6: CLI

Deliverables:

- Initialize local ontology store
- Capture knowledge from CLI
- Query context
- Export snapshot

Acceptance criteria:

- Developers can use `themselves` without writing code
- CLI output is usable by AI harnesses

## Milestone 7: PostgreSQL Adapter

Deliverables:

- `@themselves/postgres`
- Migration support
- JSONB indexes
- Recursive traversal
- Optional vector extension integration

Acceptance criteria:

- Store contract tests pass on PostgreSQL
- Team and organization scopes work with concurrent writes

## Initial Package Layout

```text
themselves/
  packages/
    core/
    sqlite/
    postgres/
    cli/
  docs/
    sdd/
    adr/
  examples/
    codex-harness/
    claude-code/
```

## Next Concrete Step

After SDD review, create the repository skeleton and implement Milestone 1.

