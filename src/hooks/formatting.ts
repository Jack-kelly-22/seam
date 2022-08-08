// function format_tvl(tvl) {
//     if (tvl === null) {
//         return '-';
//     }
//     tvl = tvl.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     return "$" + tvl;
// }

export const format_large_number = (num:number) => {
    if (num === null) {
        return '-';
    }
    if( num>=1000000000 ){
        return (num/1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if( num>=1000000 ){
        return (num/1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if( num>=1000 ){
        return (num/1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
        
    if( num<1000 ){
    return (num/1).toFixed(1)
    };
}

export const format_date = (date:number) => {
    if (date === null) {
        return '-';
    }
    const d = new Date(date*1000);
    // + d.toLocaleTimeString().slice(0, -3);
    return  d.toLocaleDateString().slice(0, -5)
    

}

export const parsePayloadFunction = (funct:string) => {
    if (funct === null) {
        return '-';
    }
    const func = funct.split('::');
    return { addr: shortenAddress(func[0]), mod:func[1], scr: func[2], };
}

export const format_tvl = (price: number) =>{
    return "$" + format_large_number(price)
}

export const format_price = (price:number) => {
    if (price === null) {
        return '-';
    }

    return "$" + (price/1).toFixed(2);
}

// export const format_apy(apy){
//     // Return apy as a percentage
//     if (apy === null) {
//         return '-';
//     }
//     return apy.toFixed(2)*100 + "%";


// }

export const shortenAddress = (
    account: string | null,
    truncation: number = 4
  ) => {
    if (!account) {
      return "0x????...????";
    }
    if (account.slice(0, 2) !== "0x") {
        return account;
    }
    return (
      account.slice(0, truncation + 2) +
      ".." +
      account.slice(account.length - truncation - 1, account.length)
    );
  };

export const formatParam = (param: string) => {
    if (!param) {
        return "0x";
    }
    if (param.length >= 20) {
        return shortenAddress(param);
    }
    return param;
}
  export const TimeAgo = (timestamp: string) => {
    // convert unix timestamp in microseconds to milliseconds
    const date = new Date(parseInt(timestamp) / 1000);
    // const date = new Date(timestamp);
    const now = new Date();
    const seconds = Math.round(Math.abs((now.getTime() - date.getTime()) / 1000));
    // console.log("seconds",date);
    const minutes = Math.round(Math.abs(seconds / 60));
    const hours = Math.round(Math.abs(minutes / 60));
    return hours + " hours ago";
  }