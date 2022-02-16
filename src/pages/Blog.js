import Component1 from "../components/NestedComponents";
import Timer from "../components/Timer";

const Blog = () => {
    return (
        <div>
            <h1>Blog Articles</h1>
            <Timer />
            <Component1 />
        </div>
    );
};

export default Blog;
