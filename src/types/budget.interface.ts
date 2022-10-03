import {ITag} from "./tag.enum";
import {ITransaction} from "./transaction.interface";
import {IUser} from "./user.interface";

export interface IBudget {
    id: number;
    name: string
    comment?: string;
    transactions: ITransaction[]; // TODO: lisada
    start: string; // dd-mm-yyyy;
    end: string; // dd-mm-yyyy;
    createdBy: IUser['id'];
    participants: IUser['id'][];
    acceptedTags: ITag[];
}
