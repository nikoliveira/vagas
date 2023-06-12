import { writeFileSync, readFileSync } from "fs";

export const saveToDatabase = (data: any) => {
    writeFileSync("./src/utils/fakeData.json", JSON.stringify(data), { encoding: "utf-8"});
}

export const readFromDatabase = () => {
    return readFileSync("./src/utils/fakeData.json", { encoding: "utf-8"});
}
