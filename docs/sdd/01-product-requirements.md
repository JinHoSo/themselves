# Product Requirements

## Problem

Organizations lose high-value tacit knowledge because it is discovered inside transient work sessions: debugging, code review, architecture decisions, incident response, customer support, research, and AI-assisted development.

Existing knowledge tools tend to store pages, messages, or documents. They do not preserve the typed meaning of what was learned, why it is trusted, where it applies, who observed it, and how it should affect future work.

## Product Definition

`themselves` is an AI-native ontology library for:

- Capturing personal tacit knowledge
- Structuring it into typed knowledge objects
- Linking knowledge through typed semantic relations
- Preserving evidence, context, authorship, and confidence
- Promoting validated knowledge from personal scope to team and organization scope
- Serving relevant knowledge back to AI agents and developer tools

## Target Users

- Developers using Codex, Claude Code, Cursor, or similar harnesses
- Teams building internal AI agents
- Platform teams designing enterprise knowledge infrastructure
- Engineering organizations with high context loss
- Open source maintainers who want project knowledge to become reusable runtime context

## Primary Use Cases

### Capture a Discovery

A developer discovers an undocumented architectural constraint while working with an AI coding agent. The harness records it as a `Claim`, connects it to affected `Concepts`, attaches evidence, and stores it in the developer's personal ontology.

### Promote Personal Knowledge

Several developers independently capture similar knowledge. The system detects overlap, asks for review, and promotes a normalized version into team knowledge.

### Query Agent Context

Before modifying a subsystem, an agent asks `themselves` for relevant decisions, constraints, patterns, and known risks. The system returns compact, provenance-rich context.

### Resolve Contradictions

Two claims conflict. The system preserves both, marks a `contradicts` relation, and allows a review workflow to supersede, narrow, or reject one claim.

## Core Capabilities

- Typed knowledge capture
- Ontology graph persistence
- Provenance and evidence tracking
- Versioned mutation history
- Scope-aware knowledge promotion
- Pluggable database adapters
- Agent-oriented retrieval API
- Import/export format for portability

## Non-Goals

- Full wiki or document editor
- Chat application
- Generic vector database
- Full RDF/OWL compliance in the first version
- Enterprise UI product in the first version
- Replacing existing source control, issue trackers, or documentation systems

## Product Principles

- Meaning over documents
- Provenance over assertion
- Typed relations over tags
- Local-first personal knowledge before organizational promotion
- Adapters over database lock-in
- Agent-usable context as a first-class output

