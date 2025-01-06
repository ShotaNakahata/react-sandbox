

type HelloProps = {
    text: string,
    children?: React.ReactNode
}

export const Hello: React.FC<HelloProps> = (props) => {
    return <h1>{props.text}! {props.children}</h1>
}

type FnProp = {
    fn:(text:string)=>void
}

export const Btn:React.FC<FnProp> = (props) => {
    return (<>
    <button onClick={()=>props.fn(`Hello`)}>ボタン</button>
    </>)
}


