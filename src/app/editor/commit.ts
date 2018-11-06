export class Commit {
    static id(commits, id) {
        return commits.find(commit => commit._id === id);
    }
    static findLatestTranslation(commits) {
        for (let i = commits.length - 1; i >= 0; i--) {
            if (commits[i].type === 1) { return commits[i]; }
        }
        return null;
    }
}
