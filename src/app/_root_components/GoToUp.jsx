import UpIcon from "@/assets/icons/up"

const GoToUp = () => {

    const handleClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
    return (
        <button
            className="p-2 rounded-full bg-cyan-300 fixed bottom-4 right-4 hover:animate-bounce"
            onClick={handleClick}>
            <UpIcon />
        </button>
    )
}

export default GoToUp