export type FilterPlacesProps = {
    setFilters:(filterName: string, filterValue:string)=>void;
    clearFilters: () => void;
}