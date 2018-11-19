export declare type SheetsResponse = {
    version: string;
    encoding: string;
    feed: SheetsFeed;
};
export declare type SheetsFeed = {
    title: string;
    updated: string;
    entry: SheetsRow[];
};
export declare type SheetsRow = {
    title: {
        type: string;
        "$t": string;
    };
    content: {
        type: string;
        "$t": string;
    };
    gsx$type: {
        $t: TranslationRowType;
    };
    gsx$id: {
        $t: string;
    };
    gsx$enau: {
        $t: string;
    };
    gsx$enus: {
        $t: string;
    };
    gsx$gujin: {
        $t: string;
    };
    gsx$hiin: {
        $t: string;
    };
    gsx$testupper: {
        $t: string;
    };
};
export declare enum TranslationRowType {
    string = "string",
    function = "function"
}
export declare type TranslationRow = {
    id: string;
    type: TranslationRowType;
    en_AU: string;
    en_US: string;
    uj_IN: string;
    hi_IN: string;
    test_UPPER: string;
};
export declare type TranslationColumn = {
    [index: string]: [string, TranslationRowType];
};
