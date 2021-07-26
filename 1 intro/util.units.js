function bytesToKilobytes(n){
    return n/(1024**1);
}

function bytesToMegabytes(n){
    return n/(1024**2);
}

function bytesToGigabytes(n){
    return n/(1024**3);
}

const utilsMemory = {
    bytesToKilobytes: bytesToKilobytes,
    bytesToMegabytes: bytesToMegabytes,
    bytesToGigabytes: bytesToGigabytes
};
module.exports = utilsMemory;