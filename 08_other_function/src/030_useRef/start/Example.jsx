import { useState, useRef } from "react";

const Case1 = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const forcusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h3>ユースケース1</h3>
      <input
        type="text"
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={forcusInput}>インプット要素をフォーカスする</button>
    </div>
  );
};

const Case2 = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef()
  return (
    <div>
      <h3>ユースケース2</h3>
      <video style={{ maxWidth: "50%" }} ref={videoRef}>
        <source src="../../../public/sample.mp4"></source>
      </video>
      <button onClick={()=>{
        if(playing){
          videoRef.current.pause();
        }else{
          videoRef.current.play();
        }
        setPlaying((prev)=>!prev)
      }}>
        {playing ? "stop" : "play"}</button>
    </div>
  );
};

const Example = () => {
  return (
    <>
      <Case1 />
      <Case2 />
    </>
  );
};

export default Example;
