// API Routes
// https://nextjs.org/docs/app/api-reference/file-conventions/route
import { ENDPOINT } from "@/constants";

export async function GET() {
    const data = await fetch(ENDPOINT).then(res => {
        return res.json()
    })
    return Response.json(data);
}
export async function POST(request) {
    console.log(request)
    const fromData = await request.formData()
    const id = fromData.get("id")
    const title = fromData.get("title")
    if (id === "" || title === "") {
        return Response.json({ msg: "登録失敗" }, { status: 500 })
    }
    try {
        const res = await fetch(ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id, title })
        })
        const data = await res.json();
        return Response.json(data)
    } catch (e) {
        return Response.json({ msg: "登録失敗" }, { status: 500 })
    }
}

// export async function GET() {
//   const data = await fetch(ENDPOINT).then(res => res.json())
//   return Response.json(data)
// }
