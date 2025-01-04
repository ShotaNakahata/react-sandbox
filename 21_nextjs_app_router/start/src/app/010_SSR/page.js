import { ENDPOINT } from "@/constants";
import ClientComp  from "./components/ClientComp";
import ArticleList from "@/components/articleList";

// URL = http://localhost:4020/010_SSR
export default async function SSR() {
    const articles = await fetch(ENDPOINT).then(res=>{
        return res.json()})
    return (
        <>
            <div>SSR</div>
            <ClientComp/>
            <ArticleList list={articles} basePath={"/010_SSR"}/>
        </>
    )
}