import Header from "../components/Header"

const Home = () =>{
    return(
        <div>
            <Header />
            <div className="text-center py-20 bg-green-700 h-screen">
                <h1 className="uppercase text-5xl font-bold">welcome to vehicle registration and plate acquirement</h1>
                <p className="capitalize my-2">register and collect your assign plate number for your vehicle here</p>
                
            </div>
        </div>
    )
}

export default Home