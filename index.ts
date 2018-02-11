
/**
 * Open Hign Low Close
 */
export default interface OHLC {
    exchange:string
    currencyPair:string
    interval:number
    time:number
    open:number
    high:number
    low:number
    close:number
    vwap:number
    volume:number
    count:number
}