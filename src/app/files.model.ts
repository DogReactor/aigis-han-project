export interface File {
    lastupdate: number;
    translated: number;
    corrected: number;
    polished: number;
    _id: string;
    name: string;
    assetsPath: string;
    type: number;
    sectionCount: number;
    contractors: { user: string, count: number }[];
}
