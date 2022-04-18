import Image from "next/image"
import Link from "next/link"
import { ReactElement, useState } from "react"
import MainLayout from "../../components/layouts/Main"
import Middle from "../../components/Middle"
import Right from "../../components/Right"
import SearchIcon from "../../icons/search-outline.svg"

const Miskas = () => {

    const [searching, setSearching] = useState(false)
    const [opponent, setOpponent] = useState(null)

    const searchForAFight = () => {
        setSearching(true)

        const wait = Math.floor(Math.random() * 5);

        setTimeout(() => {
            setSearching(false)
        }, wait * 1000)
    }

    return (
        <>
            <Middle>
                <div className="bg-gray-50 p-6 mb-8 flex justify-between items-center">
                    <span>Miskas</span>
                    <Link href="/main">Back</Link>
                </div>
                <div className="">
                    <h1>Treniruotės</h1>
                    <h2>Atsitiktinis priešas</h2>

                    <div className="flex items-center justify-center space-x-9">
                        <div className="bg-white z-10 w-1/3 border-4 h-96 flex justify-center items-center">
                            {searching ?
                                ``
                                : <button onClick={searchForAFight} className="w-56 outline-none p-4 border-b-8 border-indigo-700 active:translate-y-1 active:border-b-4 bg-indigo-600 text-white">Ieškoti</button>}
                        </div>
                        <div className="w-6 flex justify-center items-center font-bold opacity-25 text-9xl">VS</div>
                        <div className="bg-white z-10 w-1/3 border-4 h-96 flex justify-center items-center">
                            {searching &&
                                <>
                                    <div className="animate-pulse flex flex-col items-center">
                                        <div className="font-bold">Searching for opponent</div>
                                        <SearchIcon className="w-12" />
                                    </div>
                                </>}
                        </div>
                    </div>
                </div>
            </Middle>
            <Right>
                <div className="w-full bg-gray-100 p-6 rounded-sm">
                    Čia gali rasti tai ir tai, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat dolores assumenda porro, iusto voluptatibus aspernatur veniam? Accusantium consequuntur nobis porro eveniet modi quod, non, dolorum quibusdam error explicabo eos enim.
                </div>
            </Right>
        </>
    )
}

Miskas.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}

export default Miskas