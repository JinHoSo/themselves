# ADR 0002: Use Pluggable Store Adapters

## Status

Accepted

## Context

The project needs to support local personal knowledge and later team or organization deployments. SQLite is a good initial fit for local-first development, but PostgreSQL will likely be better for concurrent shared deployments.

Hard-coding a database would make the project harder to evolve.

## Decision

`themselves` will define an `OntologyStore` adapter interface in core. Database-specific packages will implement that interface.

The first real adapter should be SQLite. PostgreSQL should be added after the store contract is stable.

## Consequences

- Core logic must avoid database-specific assumptions.
- Adapter contract tests are mandatory.
- Database capabilities must be represented explicitly.
- Migrations are implemented per adapter while following the shared logical model.
