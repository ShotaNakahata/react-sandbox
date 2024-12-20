const Example = () => {
  const nums = [1,2,3];
  const sum = (arr)=>{
    return arr.reduce((acc,num)=>acc+num)
  }


  const numObj = {
    nums: [1, 2, 3],
    sum() {
      const newNums = this.nums;
      let result =0;
      for (let i = 0; i < newNums.length; i++) {
        result+=newNums[i]
      }
      return result
    },
  };
  return (
    <>
      <div>オブジェクト指向型:{numObj.sum()}</div>
      <div>関数型:{sum(nums)}</div>
    </>
  );
};

export default Example;
