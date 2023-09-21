export function ProductBanner () {
    return (
        <>
        <div className="p-8 md:p-3 lg:px-0 lg:py-0  ">
            <a href="#" className="group block overflow-hidden rounded-lg">
                <figure><img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                /></figure>
            </a>
            <div className="flex flex-col items-start justify-end pt-3">
                <h3 className="text-xl font-medium text-white">Remera 1</h3>
            </div>
        </div>
        <div className="p-8 md:p-3 lg:px-0 lg:py-0 ">
            <a href="#" className="group block overflow-hidden rounded-lg">
                <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />                    
            </a>
            <div className="flex flex-col items-start justify-end pt-3">
                <h3 className="text-xl font-medium text-white">Remera 2</h3>
            </div>
        </div>
        </>
    )
}