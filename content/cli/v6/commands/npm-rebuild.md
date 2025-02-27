---
title: npm-rebuild
section: 1
description: Rebuild a package
github_repo: npm/cli
github_branch: v6-docs
github_path: docs/content/commands/npm-rebuild.md
---

### Synopsis

```bash
npm rebuild [[<@scope>/<name>]...]

alias: npm rb
```

### Description

This command runs the `npm build` command on the matched folders.  This is useful when you install a new version of node, and must recompile all your C++ addons with the new binary.

### See Also

* [npm build](/cli/v6/commands/npm-build)
* [npm install](/cli/v6/commands/npm-install)
