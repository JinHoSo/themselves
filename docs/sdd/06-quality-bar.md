# Quality Bar

## Engineering Standard

`themselves` should be designed as infrastructure, not a prototype. The quality target is a serious open source library with clear boundaries, strong types, predictable behavior, and migration-safe persistence.

## TypeScript Standards

- Strict TypeScript
- No implicit `any`
- Branded ids for core entities
- Runtime validation for external inputs
- Public API types exported deliberately
- Internal types kept internal unless there is a real extension need

## Persistence Standards

- Storage behavior defined by adapter contract tests
- Migrations must be repeatable
- Mutation history must preserve previous states
- Database-specific features must be hidden behind capability checks
- Vector indexes must be optional

## Testing Strategy

### Unit Tests

- Domain validation
- Relation rules
- Lifecycle transitions
- Promotion merge behavior

### Contract Tests

All store adapters must pass the same test suite:

- Create, read, update records
- Create and query relations
- Traverse graph with depth limit
- Preserve evidence
- Preserve mutation history
- Export and import snapshots

### Integration Tests

- SQLite adapter with real database file
- CLI commands against temp project
- Agent context retrieval from realistic fixtures

## Documentation Standards

- Every public package has a README
- Every public API has examples
- ADRs document irreversible or high-impact decisions
- SDD artifacts are updated when product direction changes

## Release Criteria

Before first public release:

- Core package has stable public API
- SQLite adapter is production-usable for local workflows
- Store contract tests are green
- CLI supports init, capture, query, and export
- Documentation explains product model and non-goals
- License is selected

## Open Source Bar

The project should be understandable by a serious external contributor within one hour:

- Clear thesis
- Clear architecture
- Clear package boundaries
- Clear local setup
- Clear first contribution path

