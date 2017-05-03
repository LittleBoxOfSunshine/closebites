
export class Deal {
    id: number;
    name: string;
    start: string;              // "YYYY/MM/DD XX:YY"; // Military time
    end: string;                // "YYYY/MM/DD XX:YY"; // Military time
    repeat: string;             // "XXXXXXX"; // Bit vector for SMTWRFS
    normPrice: number;
    discountedPrice: number;
    description: string; //added
    address: string; //added
}