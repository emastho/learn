import Link from "next/link"

const MenuItem = ({ href, image, title, desc }) => {
    return (
        <>
            <Link href={href}>
                <div className="select-none cursor-pointer flex items-center border p-6">
                    <img
                        src={image}
                        alt=""
                        className="w-16 h-16 mr-10"
                    />
                    <div>
                        <h1>{title}</h1>
                        <p>{desc}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default MenuItem