export default function Contact () {
    return (
        <>
            <div className="mr-230">
                <h1 className="text-blue-500 font-medium mt-5">Name</h1>
                <input className="w-100 h-12 p-2 border border-lime-500 ml-29 mt-2 rounded" type="text" placeholder="Name"/>
                <h1 className="text-blue-500 font-medium mt-5">Email</h1>
                <input className="w-100 h-12 p-2 border border-lime-500 ml-29 mt-2 rounded" type="text" placeholder="Email"/>
                <h1 className="text-blue-500 font-medium mt-5 ml-3">Subject</h1>
                <input className="w-150 h-12 p-2 border border-lime-500 ml-29 mt-2 rounded" type="text" placeholder="Subject"/>
                <h1 className="text-blue-500 font-medium mt-5 ml-5">Message</h1>
                <input className="w-200 h-35 p-2 border border-lime-500 ml-29 mt-2 rounded" type="text" placeholder="Message"/>
            </div>
            <div className="bg-lime-400 mt-10 h-80 rounded-xl">
                <h1 className="text-white font-bold text-3xl pt-15">Saylani Guide</h1>
                <input className="w-110 h-12 p-3 mt-5 border rounded border-white text-grey-300" type="email" placeholder="Enter E-Mail Address" />
                <br />
                <button className="bg-white w-110 h-12 mt-2 cursor-pointer rounded text-black font-medium">SUBSCRIBE</button>
            </div>
        </>
    )
}