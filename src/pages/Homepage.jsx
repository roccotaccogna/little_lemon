import Heading from "../sections/Heading";
import Menus from "../sections/Menus";
import Testimonials from "../sections/Testimonials";
import About from "../sections/About";

export default function Homepage(){
    return (
        <>
        <Heading/>
        <main>
            <Menus/>
            <Testimonials/>
            <About/>
        </main>
        </>
    )
}