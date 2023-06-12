import { writeFileSync, readFileSync } from "fs";

export const saveToDatabase = (data: any) => {
    writeFileSync("./src/database/fakeData.json", JSON.stringify(data), { encoding: "utf-8"});
}

export const readFromDatabase = () => {
    const data = readFileSync("./src/database/fakeData.json", { encoding: "utf-8"});
    if (!data) return [];
    return JSON.parse(data);
}
