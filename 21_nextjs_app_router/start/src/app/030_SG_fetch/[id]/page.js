import { ENDPOINT } from "@/constants";
import Article from "../../../components/article";

export async function generateMetadata({params}) {
  const article = await fetch(`${ENDPOINT}/${params.id}`).then((res) =>
    res.json()
  );
  return {
    title:article.title,
    description:article.text
  }
}

export default async function Detail({ params }) {
  const article = await fetch(`${ENDPOINT}/${params.id}`).then((res) =>
    res.json()
  );
  return (
    <>
      <Article data={article} />
    </>
  );
}
