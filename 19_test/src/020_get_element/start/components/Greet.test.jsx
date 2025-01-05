import { render,screen } from "@testing-library/react";
import Greet from "./Greet";
test("h1にこんにちはがあるかどうか",()=>{
    const {container}=render(<Greet/>);
    const h1Element = screen.getByText("こんにちは")
    expect(h1Element).toBeInTheDocument();
    
    const radioEL = screen.getByRole("radio");
    // screen.debug(radioEL);
    expect(radioEL).toBeInTheDocument();

    const heading = screen.getByRole("heading",{name:"こんにちは"});
    screen.debug(heading);
    expect(heading).toBeInTheDocument();

    const h2El= container.querySelector("h2")
    screen.debug(h2El)
})