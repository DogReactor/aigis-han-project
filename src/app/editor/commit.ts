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
    static findLeaves(commits) {
        const leaves = [];
        let status = 0;
        for (let i = 0; i < commits.length; i++) {
            // 没有子节点或者所有子节点的状态都比自己高，说明这是一个叶子节点
            (function () {
                const commit = commits[i];
                if (commit.children.length !== 0) {
                    for (let j = 0; j < commit.children.length; j++) {
                        if (commit.children[j].type <= commit.type) {
                            return;
                        }
                    }
                }
                leaves.push(commit);
                status = Math.max(status, commit.type);
            })();
        }
        return [leaves, status];
    }
}
