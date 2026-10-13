# platform

Dummy Nx workspace.

## Shared package changelog

Every publish of `@gidw/shared-utils` is tagged `shared-utils@<version>` (`YYYY.M.<run_number>`). The changelog is the git history of `shared/utils` between tags.

List releases (newest first):

```sh
git tag -l 'shared-utils@*' --sort=-creatordate --format='%(refname:short) %(creatordate:short)'
```

Changes between two releases:

```sh
git log --graph --format='%C(auto)%h %d %s %C(cyan)%cn%C(reset) %C(normal dim)%cs' --decorate-refs='refs/tags/shared-utils@*' shared-utils@2026.10.1..shared-utils@2026.10.3 -- shared/utils
```

Changes since a release:

```sh
git log --graph --format='%C(auto)%h %d %s %C(cyan)%cn%C(reset) %C(normal dim)%cs' --decorate-refs='refs/tags/shared-utils@*' shared-utils@2026.10.3..HEAD -- shared/utils
```

Full history:

```sh
git log --graph --format='%C(auto)%h %d %s %C(cyan)%cn%C(reset) %C(normal dim)%cs' --decorate-refs='refs/tags/shared-utils@*' -- shared/utils
```

Commits that were published show their version, e.g. `(tag: shared-utils@2026.10.6)`.
