# API Specification

## Package Shape

Initial package names:

- `@themselves/core`
- `@themselves/sqlite`
- `@themselves/postgres`
- `@themselves/cli`

The first milestone may live in a monorepo with packages added incrementally.

## Core Client

```ts
const themselves = createThemselves({
  store,
  actor,
});
```

## Capture API

```ts
await themselves.capture({
  kind: "claim",
  scope: "personal",
  title: "OAuth-backed Codex providers should not require OpenAI API keys",
  body: "When using a subscription-backed Codex runtime, missing API key errors can indicate gateway auth routing rather than absence of a platform key.",
  confidence: 0.72,
  context: [
    { kind: "runtime", name: "OpenClaw" },
    { kind: "provider", name: "openai-codex" },
  ],
  evidence: [{ kind: "conversation", uri: "telegram:message:2275" }],
});
```

## Relation API

```ts
await themselves.relate({
  from,
  to,
  type: "supports",
  confidence: 0.8,
  evidence: [evidenceId],
});
```

## Query API

```ts
const context = await themselves.query.agentContext({
  task: "modify OpenClaw gateway auth handling",
  concepts: ["OpenClaw", "openai-codex", "OAuth"],
  scope: ["personal", "team"],
  maxRecords: 20,
});
```

## Promotion API

```ts
const proposal = await themselves.promotion.propose({
  sourceIds: [personalClaimA, personalClaimB],
  targetScope: "team",
  strategy: "merge",
});

await themselves.promotion.accept({
  proposalId: proposal.id,
  reviewer: actorId,
});
```

## Versioning API

```ts
await themselves.update(recordId, {
  body: "Updated claim body",
  reason: "Narrowed applicability after review",
});

const history = await themselves.history(recordId);
```

## Import and Export

```ts
const snapshot = await themselves.export({
  scope: "team",
  includeEvidence: true,
});

await themselves.import(snapshot, {
  conflictPolicy: "preserve_both",
});
```

## Agent Context Output

Agent context should be compact, cited, and structured:

```ts
interface AgentContext {
  summary: string;
  records: KnowledgeRecord[];
  relations: KnowledgeRelation[];
  contradictions: KnowledgeRelation[];
  evidence: EvidenceItem[];
}
```

## API Design Constraint

The public API must preserve provenance by default. Any method that creates, promotes, merges, or supersedes knowledge must require an actor and mutation reason either directly or through client configuration.
