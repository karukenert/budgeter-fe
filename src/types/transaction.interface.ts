import {ITag} from "./tag.enum";
import {IUser} from "./user.interface";

export interface ITransaction {
    id: number;
    budgetId: number;

    // date
    //  - format dd-mm-yyyy;
    //  - should be between IBudget['start'] and IBudget[''end ]
    date: string

    amount: number;

    // tag - tag under which this transaction can be categorised to
    //  - should be defined in IBudget['tags']
    tag: ITag['id'];

    // determines if this transaction will be split among all participants
    split: boolean;

    // userId - owner of this transaction
    //  - should be defined in IBudget['users'] array
    userId: IUser['id'];

    // optional comment for this transaction
    comment?: string;
}
