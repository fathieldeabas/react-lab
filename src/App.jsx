import { MMA } from "./components/first_comp";
import {BBA} from "./components/sec_comp"
export const App = () => {

  const todo = [{title:"travel",det:"travel to alex today at 6"}
  ,{title:"read",det:"read clean code book"}
  ,{title:"play",det:"play football"},
  {title:"travel2",det:"travel to cairo today at 6"}

];
const src=[{ add:"https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_960_720.jpg"} ]
  return (
    <div>
    
        <h1>App</h1>

        {todo.map((ob)=>(< MMA title={ob.title} detail={ob.det}/>)) 


        }
        <BBA add={src[0].add} />
  </div>
);

};
