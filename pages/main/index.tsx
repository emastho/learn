import Link from "next/link"
import MenuItem from "../../components/MenuItem"
import type { ReactElement } from 'react'
import MainLayout from "../../components/layouts/Main"
import Middle from "../../components/Middle"
import Right from "../../components/Right"


const Main = () => {
    return (
        <>
            <Middle>
                <div className="bg-gray-50 p-6 mb-8">Header</div>
                <MenuItem
                    href="/main/miskas"
                    image="https://cdn-icons-png.flaticon.com/512/2933/2933738.png"
                    title="Miskas"
                    desc="lorem"
                />
            </Middle>
            <Right>
                <div className="w-full bg-gray-100 p-6 rounded-sm h-full">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id debitis laboriosam, nobis reprehenderit error quasi ipsa fugiat maxime architecto officia distinctio aut beatae reiciendis saepe, vero sequi eos accusantium non.
                </div>
            </Right>
        </>
    )
}

Main.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}

export default Main