# ADR 0001: Build an AI-Native Ontology Engine

## Status

Accepted

## Context

The project began as an enterprise-grade knowledge management system for capturing tacit knowledge discovered while people use AI harnesses such as Codex and Claude Code.

Traditional knowledge management systems usually center on documents. That is insufficient for agentic development workflows because agents need compact, structured, provenance-rich context rather than long pages.

## Decision

`themselves` will be designed as an AI-native ontology engine, not as a document management system.

The core model will represent typed knowledge records, typed relations, evidence, contexts, actors, provenance, lifecycle state, and promotion across scopes.

## Consequences

- The database model must support graph-like ontology traversal.
- The API must expose capture, relation, query, versioning, and promotion workflows.
- Full text and vector search can help retrieval, but they are not the source of truth.
- The project can later expose UI surfaces, but the first product is a TypeScript library.

