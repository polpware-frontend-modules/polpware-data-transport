export type ExcelOutputRowType = {
    [key: string]: any;
};
export type ExcelOutputSheetRows = Array<ExcelOutputRowType>;
export interface IExcelOutputColumnSchema<T> {
    column: string;
    type?: T;
    format?: string;
    width?: number;
    value: (a: ExcelOutputRowType) => T;
}
export type ExcelOutputSheetSchema = Array<IExcelOutputColumnSchema<any>>;
export interface IDownloadOutput<T> {
    totalCount: number;
    items: Array<T>;
}
export interface IDownloadInput {
    pageSize: number;
    pageIndex: number;
}
export type DownloadFuncType = (a: IDownloadInput) => Promise<IDownloadOutput<any>>;
