// Code your solution here
function findMatching(drivers, placeholder){
    const result = drivers.filter(driversName => driversName.toLowerCase() === placeholder.toLowerCase());
    return result; 
    }

function fuzzyMatch(drivers, placeholder){
    const result = drivers.filter(driversName => driversName.startsWith(placeholder))
    return result;
}
function matchName(drivers, string) {
    const result = drivers.filter(driversName => driversName.name === string)
    return result;
}