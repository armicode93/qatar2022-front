import {DataSource} from "@angular/cdk/collections";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import { Observable, of as observableOf, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import {EquipeService} from "../services/equipe/equipe.service";

export interface EquipeListeItem{
    idEquipe: number;
    pays: string;
}

/**
 * Data source for the EquipeListe view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class EquipeListeDataSource extends DataSource<EquipeListeItem>
{
    data: EquipeListeItem[];
    paginator: MatPaginator;
    sort: MatSort;

    constructor(equipe: EquipeListeItem[]) {
        super();
        this.data=equipe;
        console.log(this.data);
    }

    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect(): Observable<EquipeListeItem[]> {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        const dataMutations = [
            observableOf(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];

        return merge(dataMutations).pipe(map(() => {
            return this.getPagedData(this.getSortedData([...this.data]));
        }));
    }

    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect() {}

    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    private getPagedData(data: EquipeListeItem[]) {
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    }

    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    private getSortedData(data: EquipeListeItem[]) {
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }

        return data.sort((a, b) => {
            const isAsc = this.sort.direction === 'asc';
            switch (this.sort.active) {
                case 'pays': return compare({a: a.pays, b: b.pays, isAsc: isAsc});
                case 'id': return compare({a: +a.idEquipe, b: +b.idEquipe, isAsc: isAsc});
                default: return 0;
            }
        });
    }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */

function compare({a, b, isAsc}: { a: any, b: any, isAsc: any }) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}




