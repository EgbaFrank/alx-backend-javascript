import { RowID, RowElement } from './interface'

declare namespace CRUD {
	function insertRow(row: RowElement): RowID;
	function deleteRow(rowId: RowID): void;
	function updateRow(rowId: RowID, row: RowElement): RowID;
}
export = CRUD;

/*
declare function insertRow(row: RowElement): RowID;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): RowID;
*/
