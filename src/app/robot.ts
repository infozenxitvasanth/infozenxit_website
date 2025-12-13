import { MetadataRoute } from "next";
import { _domineConsts } from "./const/domine_consts";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${_domineConsts.domine.client}/sitemap.xml`,
    }
}