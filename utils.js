var utils= {
    fbtoarr: (fbobj) => {
        let returnarr= [];
        for(let k in fbobj){
            let obj= {};
            obj= fbobj[k];
            obj.key= k;
            returnarr.push(obj);
        }
    }
};

module.exports= utils;