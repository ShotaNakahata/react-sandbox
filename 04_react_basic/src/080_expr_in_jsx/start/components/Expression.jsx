
const Expression = ()=>{
    const Expression = "Expression";
    const array = ["item1", "item2", "item3"];
    const hello = (arg)=>`${arg}Function`
    const jsx = <h3>hello jsx</h3>
    return(
        <div>
            <h1>Hello {Expression}</h1>
            {array}
            <h3>{hello("hello")}</h3>
            {jsx}
        </div>
    )
}
export default Expression;