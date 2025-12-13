import type { Metadata } from "next";
import { _domineConsts } from "../const/domine_consts";

type MetaOptions = {
    title: string;
    description: string;
    endpoint?: string; // e.g. "/flutter-color-hex"
    siteName: string;

};

export function createMetadata({
    title,
    description,
    endpoint = "",
    siteName,

}: MetaOptions): Metadata {
    const baseUrl = _domineConsts.domine.client;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "website",
            locale: "en_IN",
            url: `${baseUrl}${endpoint}`,
            siteName,
        },
    };
}
