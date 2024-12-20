const Example = () => {
  const val1 = 3, val2 = 9;
  const result=0;
  const add=(val1,val2)=>{
    return val1+val2
  }
  return (
    <>
      <h3>純粋関数: {add(val1,val2)}</h3>
      <p>fn(決まった引数) には 決まった戻り値 を返す</p>
    </>
  );
};

export default Example;
