import {ITag} from "./tag.interface";
import {ITransaction} from "./transaction.interface";
import {IUser} from "./user.interface";

export interface IBudget {
    id: number;
    name: string
    comment?: string;
    transactions: ITransaction[]; // TODO: lisada
    start: string; // dd-mm-yyyy;
    end: string; // dd-mm-yyyy;
    createdBy: IUser;
    participants: IUser[];
    acceptedTags: ITag[];
}
