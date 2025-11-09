export function removeFileFromChanges(changes, filePath) {
    const index = changes.findIndex((change) => change.file === filePath);
    if (index !== -1) {
        changes.splice(index, 1);
    }
}
//# sourceMappingURL=removeFileFromChanges.js.map