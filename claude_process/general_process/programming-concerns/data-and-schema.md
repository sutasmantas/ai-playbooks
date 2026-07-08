# Concern: Data and Schema

**Rule**
Persisted data has a declared schema, migrations are reversible-or-explicitly-not, and data crossing trust boundaries is validated against the schema (parse, don't validate). Schema changes go through a documented evolution path, not a "DROP TABLE and rebuild."

**Use when**
Anything that reads or writes persistent data (database, files on disk, queue messages, external API payloads). NOT for pure-compute libraries or stateless CLIs that just produce stdout.

**How to apply (skeleton — fleshed out in Slice 4)**
- Schema defined explicitly (SQL DDL, Pydantic / Zod / Serde, Protobuf, etc.).
- Migrations versioned, applied via tool (Alembic / migrate / sqlx / etc.), reversibility documented per migration.
- Input data parsed at the boundary; downstream code can trust types.
- Schema evolution: additive changes are safe; breaking changes are flagged in CHANGELOG.
- Stake-tag `migration` triggers `procedures/stake-tagging.md` for irreversible migrations.

**Skip if**
Project has no persistent state.

**Project kinds applicable:** service, data-pipeline, library-with-persistence (PRIMARILY). CLI/script that reads structured files (sometimes).
**Language-specific addendum:** YES — schema-validation libraries and migration tools differ sharply.

**Trace:** general — broken migrations and schema-drift bugs are persistent failure modes; the website kit's "expected-before-change" principle covers the shape but data-specific failures need dedicated coverage.
