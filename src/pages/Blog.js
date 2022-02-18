import NameForm from "../components/NameForm";
import Component1 from "../components/NestedComponents";
import Timer from "../components/Timer";
import Todos from "../components/Todos";

const Blog = () => {
    return (
        <div>
            <h1>Blog Articles</h1>
            <Timer />
            <Component1 />
            <NameForm />
            <Todos />
        </div>
    );
};

export default Blog;
