import data from "../blog.json"

function HomePage(props) {
    return (

        <div className="card w-60 border rounded-md h-80 mx-2">
            <div className="card-header p-2">
                <h3>{props.judul}</h3>
                <img src="react.png" alt="" className="my-2" />
                <small className="bg-red-600 rounded-xl px-2 text-white">{props.date}</small>
                <small className="bg-cyan-400 rounded-xl px-2 text-white ml-2">Category</small>
            </div>

            <div className="card-body p-2">
                <p>{props.body}</p>
            </div>
        </div>
    )
}

export default HomePage;