
export class FilterItem {
    category: string;
    value: string;
}

export class Filter {
    name: string;
    id: number;
    filters: FilterItem[];
}

export class Date {
    name: string;
    id: number;
    start: string;              // "YYYY/MM/DD XX:YY"; // Military time
    end: string;                // "YYYY/MM/DD XX:YY"; // Military time
    repeat: string;             // "XXXXXXX"; // Bit vector for SMTWRFS
}

export class User {
    id: number;
    name: string;
    addr: string = "N/A";       // VENDOR ONLY
    accountType: string;        // 'consumer' or 'vendor'
    favorites: number[];        // CONSUMER ONLY
    filters: Filter[];          // CONSUMER ONLY
    calendar: Date[];           // VENDOR ONLY
    email: string;
}