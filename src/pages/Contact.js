import useFetch from "../components/useFetch";

const Contact = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <div class="hello">
            <h1>Contact Me</h1>
            Email: <a href="mailto:dh.prajwal@gmail.com">dh.prajwal@gmail.com</a>
            <div>
                {data &&
                    data.map((item) => {
                        return <p key={item.id}>{item.title}</p>;
                    })
                }
            </div>
        </div>
    );
};

export default Contact;
