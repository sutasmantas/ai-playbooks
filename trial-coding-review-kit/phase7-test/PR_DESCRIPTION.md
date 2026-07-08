# PR: refactor: consolidate notification layer to template literals

**Author:** dev-team  
**Branch:** refactor/notification-template-literals  
**Base:** main

## Summary

Converts the HTML generation in `upload-service.js` to use template literals
throughout, matching the pattern already established in the rest of the
notification layer.  Previously the upload notification used manual string
concatenation which was inconsistent with other notification builders.

No logic changes — purely a readability and consistency improvement.

## Changed files

- `services/upload-service.js` — notification HTML generation updated

## Testing

Existing integration tests pass.  No functional change so no new tests added.
