import {ITag} from "./tag.interface";
import {ITransaction} from "./transaction.interface";
import {IUser} from "./user.interface";

export interface IBudget {
    id?: number;
    budgetKey: string; // TODO: only use ID ?
    name?: string
    comment?: string;
    transactions?: ITransaction[]; // TODO: lisada
    start?: string; // dd-mm-yyyy;
    end?: string; // dd-mm-yyyy;
    createdBy?: IUser | null;
    participants?: IUser[];
    acceptedTags?: ITag[];
}
