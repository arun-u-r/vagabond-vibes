

const HeroBlock = () => {
    return (
        <div className="w-full h-[90vh] ">
            <img src="/src/assets/img/wp13100987-vagabond-pc-wallpapers.png" alt="/"
                className="w-full h-full object-cover"
            />
            <div className="max-w-[1140px] m-auto">
                <div className="absolute top-[10%] w-full md:-[50%] max-w-[500px] h-full flex flex-col text-white p-4 ">
                <img src="v-v-logo-white.svg" alt="" className=" ml-10 p-2 w-[9rem] h-[9rem] object-cover " />
                <h1 className="text-2xl md:text-4xl lg:text-2xl ">find Somthing that u lost</h1>
                <h2 className="text-xl md:text-2xl lg:text-4xl">With Vagabond vibes</h2>
                <p style={{color:'#F6D448'}} className="text-sm md:text-base lg:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.Voluptates expedita, dolorum architecto
                    facilis qui recusandae doloribus minus veniam
                    similique aliquid maiores blanditiis voluptas nisi
                    dolore cum, corrupti soluta quibusdam fugit!
                </p>
                </div>
            </div>
        </div>
    )
}

export default HeroBlock