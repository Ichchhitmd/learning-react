import MyComponent from "./myComponent";
import Rendering from "./rendering";
import Logic from "@/logic";
import Props from "./props";
export default function Gallery() {
  return (
    <section>
      <h1> Jackie is noob </h1>
      <ul>
        <li>Jackie is a fucking noob</li>
        <li>He still plays Dota 2 </li>
      </ul>
      <MyComponent />
      <Logic />
      <Props />
      <Rendering />
    </section>
  );
}
