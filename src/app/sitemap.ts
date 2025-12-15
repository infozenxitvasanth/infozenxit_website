
import { MetadataRoute } from "next";
import { _domineConsts } from "./const/domine_consts";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

let CLIENT_DOMINE =_domineConsts.domine.client
    return [
        {
            url: CLIENT_DOMINE,
            lastModified: new Date(),
        },
        {
            url: `${CLIENT_DOMINE}/about`,
            lastModified: new Date(),
        },
      
    ]
}