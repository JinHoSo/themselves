# Domain Model

## Core Concept

`themselves` models knowledge as versioned ontology records connected by typed relations. A record is not just text. It has kind, scope, evidence, provenance, confidence, lifecycle state, and applicability.

## Knowledge Scopes

```ts
type KnowledgeScope = "personal" | "team" | "organization" | "public";
```

- `personal`: owned by an individual or local agent
- `team`: accepted by a bounded team
- `organization`: accepted as organization-level knowledge
- `public`: exportable or open source knowledge

## Knowledge Lifecycle

```text
observed -> captured -> normalized -> reviewed -> promoted
                         |             |
                         v             v
                      rejected      superseded
```

## Entity Kinds

### Concept

A named domain object, system, term, role, component, workflow, or abstraction.

Examples:

- `OntologyStore`
- `gateway auth profile`
- `promotion workflow`

### Claim

A statement believed to be true in a defined context.

Examples:

- "OpenAI Codex subscription auth should use OAuth rather than API key configuration."
- "Team knowledge should retain personal provenance after promotion."

### Decision

A choice made with rationale and tradeoffs.

Examples:

- "Use a storage adapter interface instead of hard-coding SQLite."

### Pattern

A repeatable solution shape.

Examples:

- "Capture evidence before promoting knowledge across scopes."

### Procedure

A repeatable operational sequence.

Examples:

- "How to recover a broken OAuth-backed model provider."

### Evidence

Concrete support for a claim, decision, or pattern.

Examples:

- File path
- URL
- Command output
- Conversation excerpt
- Test result

### Context

The bounded condition where knowledge applies.

Examples:

- Repository
- Team
- Runtime
- Time window
- Product version
- Environment

### Actor

A human, agent, team, or organization participating in knowledge creation or review.

## Relation Types

Initial relation taxonomy:

```ts
type RelationType =
  | "supports"
  | "contradicts"
  | "depends_on"
  | "causes"
  | "derived_from"
  | "applies_to"
  | "owned_by"
  | "observed_in"
  | "supersedes"
  | "duplicates"
  | "generalizes"
  | "specializes"
  | "promoted_from";
```

## Record Shape

```ts
interface KnowledgeRecord {
  id: KnowledgeId;
  kind: KnowledgeKind;
  scope: KnowledgeScope;
  title: string;
  body?: string;
  status: KnowledgeStatus;
  confidence: number;
  createdAt: string;
  updatedAt: string;
  createdBy: ActorId;
  provenance: Provenance[];
  metadata: Record<string, unknown>;
}
```

## Relation Shape

```ts
interface KnowledgeRelation {
  id: RelationId;
  from: KnowledgeId;
  to: KnowledgeId;
  type: RelationType;
  confidence: number;
  evidence: EvidenceRef[];
  createdAt: string;
  createdBy: ActorId;
  metadata: Record<string, unknown>;
}
```

## Provenance Model

Every meaningful knowledge mutation must answer:

- Who or what created it?
- Where did it come from?
- What evidence supports it?
- What context bounds it?
- Has it been reviewed?
- Has it been promoted or superseded?

## Design Constraint

Contradiction is not data corruption. Contradictory knowledge must be representable without deleting either side.
