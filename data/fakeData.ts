import { API } from "../types/data.type";
import { randomUUID } from "crypto";
 const data: Array<API.IDataType>  =  [
    {
        id: randomUUID(),
        name: "João Oliveira",
        job: "Desenvolvedor"
    }
];
export default data;


