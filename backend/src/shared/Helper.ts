export function errorIfNotDefined(object: any, errorMessage: string) {
    if(!object) throw new Error(errorMessage)
}

export function throwErrorOnCondition(condition: boolean, errorMessage: string) {
    if(condition) throw new Error(errorMessage)
}