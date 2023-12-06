import * as CRUD from './subjects';
import { RowID, RowElement } from './interface';

const row: RowElement = {
  firstName: 'MA',
  lastName: 'A',
};

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = { ...row, age: 23 };

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
