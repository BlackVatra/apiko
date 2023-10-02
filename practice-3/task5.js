let convert = function(bytes) {
    let mb = bytes / (1024*1024);
    return mb.toFixed(2) + " Mb";
}

console.log(convert.call(null, 10000)); // should produce "0.01 Mb"
