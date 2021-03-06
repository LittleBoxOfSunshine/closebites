
export class Deal {
    id: number;
    name: String;
    start: String;              // "YYYY/MM/DD XX:YY"; // Military time
    end: String;                // "YYYY/MM/DD XX:YY"; // Military time
    repeat: string;             // "XXXXXXX"; // Bit vector for SMTWRFS
    normPrice: Number;
    discountedPrice: Number;
    description: String; //added
    photoUrl:string;
    type:string;
    dType:string;
}