import { Identity } from "./identity";

export class Data <R extends Identity>{
    private rows: Map<number,R>;

    constructor() {
        this.rows = new Map<number,R>();
    } 

    add(row:R ){
        this.rows.set(row.id, row);
    }

    update(id: number, updatedRow: Partial<R>){
        const row = this.rows.get(id);
        if (row) {
            Object.assign(row,updatedRow);
        }
    }

    delete(id:number){
        this.rows.delete(id);
    }

    get(id:number): R | undefined {
        return this.rows.get(id);
    }

}