# Competitive Baseline

## Reference System: OpenViking

OpenViking is an open source context database for AI agents. Its current public positioning emphasizes a filesystem-style context database for memory, resources, and skills, with hierarchical retrieval, semantic parsing, session management, import/export, and agent integrations.

Observed strengths as of 2026-06-09:

- Mature repository footprint with server, CLI, docs, examples, and tests
- Context types for memory, resources, and skills
- `viking://` URI model and filesystem-like navigation
- L0/L1/L2 layered context representation
- Semantic search, intent-aware search, and reranking
- Session recording, compression, memory extraction, and deduplication
- Multimodal parsing across documents, code, images, audio, video, and office formats
- Security roadmap including multi-tenant support, encryption, privacy configs, and API auth
- Agent integrations including OpenClaw, Claude Code, Codex, MCP clients, and LangChain/LangGraph

## Strategic Positioning

`themselves` should not compete by becoming a broader file/resource context database. OpenViking is already strong there.

`themselves` must compete by being the better ontology engine:

- Typed knowledge records rather than generic files or memories
- Typed semantic relations rather than loose links
- Provenance and evidence as first-class data
- Contradictions represented without data loss
- Scope-aware promotion from personal knowledge to team and organization knowledge
- Store contract tests that make persistence semantics portable
- Agent context output with compact citations and explicit trust signals

## Differentiation Requirements

Every major feature should strengthen at least one of these axes:

1. Ontology precision
   - Records must have explicit kind, scope, status, confidence, actor, provenance, and metadata.
   - Relations must have explicit type, confidence, evidence, actor, and metadata.

2. Trust and provenance
   - Captured knowledge must retain who created it, where it came from, what evidence supports it, and which context bounds it.
   - Promotion must preserve source provenance rather than replacing it with an anonymous team record.

3. Contradiction safety
   - Contradictory claims must be linkable and queryable.
   - Rejection or supersession must not erase historical knowledge.

4. Promotion workflow
   - Personal knowledge should be promotable through reviewable proposals.
   - Team and organization scopes must have traceable lineage back to source records.

5. Adapter rigor
   - Store adapters must pass shared contract tests.
   - Vector search may assist retrieval but must not become the source of truth.

## Stage-Gate Checks

Before marking a milestone complete, answer:

- What does OpenViking already do better at this layer?
- What ontology-specific capability did `themselves` add that OpenViking does not foreground?
- Which tests prove the capability works?
- Which SDD artifact was updated if the direction changed?

## Initial Gap Assessment

Current gaps versus OpenViking:

- No package skeleton yet
- No CLI
- No server
- No adapter implementation
- No retrieval or indexing
- No agent integrations
- No import/export format
- No security model beyond design principles

Current intended advantages:

- Clearer typed ontology model
- Stronger provenance requirement
- Explicit contradiction model
- Promotion from personal knowledge to shared organizational knowledge
- SDD-first implementation discipline
