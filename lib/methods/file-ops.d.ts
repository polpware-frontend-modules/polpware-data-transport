import { ExcelOutputRowType, ExcelOutputSheetSchema } from '../interfaces/excel-io.interface';
export declare function readExcelAsync(file: File): Promise<import("read-excel-file").Row[]>;
export declare function writeExcelAsync(data: Array<ExcelOutputRowType>, options: {
    schema: ExcelOutputSheetSchema;
    fileName: string;
}): Promise<void>;
