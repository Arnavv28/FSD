import { mkdir, rm } from "fs/promises";

//await mkdir("uploads/images");
//await mkdir("uploads");

//await mkdir("docs/resumes/data", {recursive:true});
//await rm("docs/resumes/data", {recursive:true});

//removes main folder and sub folder also

await rm("docs",{recursive:true});