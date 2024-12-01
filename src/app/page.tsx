import Image from "next/image";
import ParentComponent from "./Component/ParentComponent";
import Grid from "./Grid/page";
import UseState from "./Usestate/page"
export default function Home() {
return (
 <div>
    <ParentComponent></ParentComponent>
    <UseState/>
    <Grid/>
 </div>
  );
}
