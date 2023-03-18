function ColumnTwo({ isActive }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="800"
            // height="800"
            fill="none"
            className={`w-8 ${isActive ? 'fill-white stroke-black' : 'fill-black stroke-white'}`}
            viewBox="0 0 24 24"
        >
            <path
                // stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v18M7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 011.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8c0-1.68 0-2.52.327-3.162a3 3 0 011.311-1.311C5.28 3 6.12 3 7.8 3z"
            ></path>
        </svg>
    );
}

export default ColumnTwo;