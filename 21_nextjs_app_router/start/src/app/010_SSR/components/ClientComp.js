"use client"
import { useEffect, useState } from "react"

// URL = http://localhost:4020/010_SSR
export default function ClientComp() {
    const [state, setState] = useState(undefined);
    useEffect(()=>{
        setState("client side")
    },[])
    return (
        <>
            
            <div>{state}</div>
        </>
    )
}