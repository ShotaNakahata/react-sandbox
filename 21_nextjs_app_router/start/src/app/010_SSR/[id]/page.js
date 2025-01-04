import { ENDPOINT } from "@/constants";
import Article from "@/components/article";

// URL = http://localhost:4020/010_SSR
//http://localhost:4020/010_SSR/1
//ENDPOINT = "http://localhost:4030/articles";
export default async function SSR({params}) {
    console.log(params)
    console.log(params.id)
    const article = await fetch(`${ENDPOINT}/${params.id}`).then(res=>{
        return res.json()})
    return (
        <>
            <Article data={article}/>
        </>
    )
}