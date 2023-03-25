const UpIcon = () => (
    <svg
        viewBox="0 0 24 24"
        className="w-10"
    >
        <defs>
            <path
                id="a"
                d="M2.293.293a1 1 0 1 1 1.414 1.414l-2 2A1 1 0 0 1 .293 2.293l2-2Z"
            />
            <path
                id="c"
                d="M3.414 4h9.587a1 1 0 0 1 0 2H3.414l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L3.414 4Z"
            />
        </defs>
        <g fill="none" fillRule="evenodd" transform="matrix(0 1 1 0 7 5)">
            <g transform="translate(3 1)">
                <mask id="b" fill="#fff">
                    <use xlinkHref="#a" />
                </mask>
                <use fill="#D8D8D8" fillRule="nonzero" xlinkHref="#a" />
                <g fill="#FFA0A0" mask="url(#b)">
                    <path d="M-8-8h24v24H-8z" />
                </g>
            </g>
            <mask id="d" fill="#fff">
                <use xlinkHref="#c" />
            </mask>
            <use fill="#000" fillRule="nonzero" xlinkHref="#c" />
            <g fill="#7600FF" mask="url(#d)">
                <path d="M-5-7h24v24H-5z" />
            </g>
        </g>
    </svg>
)

export default UpIcon