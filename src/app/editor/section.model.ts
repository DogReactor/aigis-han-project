export interface Section {
    commits: {
        author: string,
        children: string[],
        text: string,
        time: number,
        type: number,
        _id: string,
    }[];
    contractInfo: {
        contractor: string,
        time: number,
    };
    corrected: boolean;
    desc: string;
    hash: string;
    lastPolishCommit: string;
    lastPublish: number;
    lastUpdated: number;
    motified: boolean;
    parent: string[];
    polished: boolean;
    publishedCommit: string;
    rawCommit: string;
    translated: boolean;
    _id;
}
export enum SectionStatus { Raw, Translated, Corrected, Polished, Modified }
