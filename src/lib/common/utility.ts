export function readFile(
    file: File,
    method: keyof Pick<FileReader, "readAsBinaryString" | "readAsDataURL" | "readAsText">
) {
    const reader = new FileReader()
    return new Promise<string>((resolve, reject) => {
        reader.onerror = error => reject(error)
        reader.onload = () => resolve(reader.result as string)
        reader[method](file)
    })
}

export function objectFilter(
    object: object,
    filter: (key: string, value: any) => boolean = () => true
) {
    return Object.fromEntries(Object.entries(object).filter(([key, value]) => filter(key, value)))
}
