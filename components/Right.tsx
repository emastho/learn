import React from 'react'

const Right = ({ children }) => {
    return (
        <>
            <div className="p-6 col-span-6 lg:col-span-2">
                {children}
            </div>
        </>
    )
}

export default Right