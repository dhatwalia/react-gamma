import NameForm from "../components/NameForm";
import Component1 from "../components/NestedComponents";
import Timer from "../components/Timer";
import Todos from "../components/Todos";
import Todos2 from "../components/Todos2";

const Blog = () => {
    return (
        <div>
            <h1>Blog Articles</h1>
            <Timer />
            <Component1 />
            <NameForm />
            <Todos />
            <Todos2 />
        </div>
    );
};

export default Blog;
