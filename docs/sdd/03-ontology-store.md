# Ontology Store Design

## Purpose

`OntologyStore` is the persistence boundary for `themselves`. The core library must not depend on a specific database engine.

The first adapter should be SQLite because it is simple, local, and good for personal knowledge. PostgreSQL should be supported later for shared team and organization deployments.

## Storage Principles

- Stable logical model independent of physical database
- Append-friendly mutation history
- Typed records and typed relations
- Efficient graph traversal for bounded context retrieval
- Adapter capabilities are explicit
- Migrations are adapter-owned but core-schema-aware

## Adapter Interface

```ts
interface OntologyStore {
  capabilities(): StoreCapabilities;

  records: KnowledgeRecordRepository;
  relations: KnowledgeRelationRepository;
  evidence: EvidenceRepository;
  contexts: ContextRepository;
  actors: ActorRepository;
  transactions: TransactionRunner;
  migrations: MigrationRunner;
}
```

## Required Capabilities

```ts
interface StoreCapabilities {
  transactions: boolean;
  recursiveQueries: boolean;
  fullTextSearch: boolean;
  vectorSearch: boolean;
  jsonQuery: boolean;
  advisoryLocks: boolean;
}
```

## Logical Tables

### knowledge_records

- `id`
- `kind`
- `scope`
- `title`
- `body`
- `status`
- `confidence`
- `created_at`
- `updated_at`
- `created_by`
- `metadata_json`

### knowledge_relations

- `id`
- `from_id`
- `to_id`
- `type`
- `confidence`
- `created_at`
- `created_by`
- `metadata_json`

### evidence_items

- `id`
- `kind`
- `uri`
- `content_hash`
- `summary`
- `metadata_json`
- `created_at`

### knowledge_evidence

- `knowledge_id`
- `evidence_id`
- `role`

### contexts

- `id`
- `kind`
- `name`
- `locator`
- `metadata_json`

### actors

- `id`
- `kind`
- `display_name`
- `external_ref`
- `metadata_json`

### mutations

- `id`
- `entity_type`
- `entity_id`
- `operation`
- `before_json`
- `after_json`
- `created_at`
- `created_by`
- `reason`

## Query Needs

The store must support:

- Fetch records by id
- Search records by text and metadata
- Traverse typed relations with depth limits
- Find contradictions
- Find duplicate or overlapping claims
- Retrieve agent context for a target concept, file, repository, or task
- Export a scope-bounded ontology snapshot

## SQLite Strategy

SQLite adapter should use:

- Normal relational tables for core records
- JSON columns for flexible metadata
- FTS table for text retrieval
- Recursive CTEs for relation traversal when available

## PostgreSQL Strategy

PostgreSQL adapter should later use:

- JSONB for metadata
- Recursive CTEs for graph traversal
- GIN indexes for metadata and search
- Optional pgvector for embedding-assisted retrieval
- Advisory locks for promotion workflows

## Design Constraint

Vector search is optional augmentation. It must never be the source of truth for ontology structure.
