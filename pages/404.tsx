import Link from "next/link"

const ErrorPage = () => {
    return (
        <>
            <div className="h-screen">
                <div className="flex h-full justify-center items-center">
                    <div className="grid grid-cols-2 space-x-4">

                        <div className="border p-12 flex justify-center flex-col items-center">
                            <div className="text-7xl font-bold text-red-500">404</div>
                            <h1 className="text-xl font-bold">Puslapis nerastas</h1>
                        </div>
                        <div className="border flex space-y-6 justify-center flex-col items-start px-12">
                            <p className="text-2xl">Ar norite grįžti?</p>
                            <Link href="/">
                                <a className="inline-block py-2 px-4 bg-indigo-500 text-white">Taip</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorPage