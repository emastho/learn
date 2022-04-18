
const Main = ({ children }) => {
    return (
        <>
            <div className="min-h-screen grid grid-cols-6">
                <div className="p-6 col-span-6 lg:col-span-1">
                    <div className="bg-gray-100 p-6 rounded-sm h-full">
                        <div className="pb-6 space-y-2">
                            <div className="flex justify-between items-center">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/566/566445.png"
                                    alt=""
                                    className="w-6 h-6"
                                />
                                <div>200</div>
                            </div>
                            <div className="flex justify-between items-center">
                                <img
                                    src="https://cdn-icons.flaticon.com/png/512/895/premium/895900.png?token=exp=1649846801~hmac=6d7586bfa221b64396b218d20f869226"
                                    alt=""
                                    className="w-6 h-6"
                                />
                                <div>200</div>
                            </div>
                        </div>

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id debitis laboriosam, nobis reprehenderit error quasi ipsa fugiat maxime architecto officia distinctio aut beatae reiciendis saepe, vero sequi eos accusantium non.
                    </div>
                </div>
                {children}
            </div>
        </>
    )
}

export default Main