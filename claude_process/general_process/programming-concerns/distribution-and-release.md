# Concern: Distribution and Release

**Rule**
The artifact has a reproducible build, a published version, and a rollback path. Releases are tagged, changelogged, and (for public artifacts) signed or checksummed.

**Use when**
Libraries (published to a registry), CLIs (distributed as binaries / packages), services (deployed to an environment). NOT for one-off scripts that run from a clone.

**How to apply (skeleton — fleshed out in Slice 4)**
- Build is reproducible (lockfile + pinned toolchain).
- Version follows a documented scheme (semver for libraries; date or build number for services).
- Changelog updated per release.
- Public artifacts: checksum / signature / SBOM published alongside.
- Services: documented rollback procedure; blue-green or canary where the stakes warrant.

**Skip if**
Project kind is "script" with no distribution surface.

**Project kinds applicable:** library, CLI, service (PRIMARILY). Data-pipelines depend on whether they're packaged or in-place. Scripts often skip.
**Language-specific addendum:** YES — registry workflows differ (PyPI vs npm vs crates.io vs Go modules), build-system idioms differ.

**Trace:** general — supply-chain attacks and broken-rollback incidents both motivate this.
