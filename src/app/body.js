import PopUp from "./popup";

export default function Body() {
    return (
        <div className="relative flex h-full flex-1 flex-col">
            <div className="flex-[7] flex flex-col w-full items-center justify-center bg-cyan-100 gap-10">
                <div className="flex flex-col items-center justify-center gap-10">
                    <h6 className="text-2xl font-bold gap-10">Powerful AI-powered tools for your business</h6>
                    <h6 className="text-lg gap-10">We're here to help you grow your business with the power of AI. We offer a range of tools to help you grow your business with the power of AI.</h6>
                </div> 
                <PopUp/>
                {/* <button className="rounded-lg bg-cyan-500 z-20 px-6 py-3 text-white transition hover:bg-blue-700">
                    Click Me
                </button> */}
            </div>
            <img
                src="/img.png"
                className="absolute left-1/2 top-[70%] z-10 h-50 w-100 -translate-x-1/2 -translate-y-1/2"
            />
            <div className="flex-[3] flex w-full flex-col items-center justify-center bg-cyan-500">
                Body
            </div>

        </div>
    );
}