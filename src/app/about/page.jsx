import Link from "next/link"

const About = () => {
    return (
        <div className="pb-16 pt-4 md:w-1/2 md:mx-auto">
            <p className="text-4xl md:text-5xl mb-4 font-rancho">About</p>
            <p className="whitespace-pre-line text-justify ">
                Hello, my name is Fiqih Alfito, and I recently graduated from Sriwijaya University with a Bachelor's degree in Computer Science. I'm a full-stack developer with a focus on front-end development, and I'm excited to embark on a career in the tech industry.
                <br />
                <br />
                During my studies, I had the opportunity to work on a variety of projects that helped me hone my programming skills and gain hands-on experience with different technologies. I'm particularly interested in front-end development, where I enjoy using my creativity and problem-solving skills to create engaging user interfaces and web applications.
                <br />
                <br />

                One of the technologies that I'm currently mastering is Next.js 13, a popular React framework that I find particularly useful for layouting and building complex web applications. I've also worked with a range of other tools and technologies, including React, Laravel, and more.
                <br />
                <br />

                While I'm relatively new to the tech industry, I'm eager to learn and grow as a developer. I'm a creative thinker with strong analytical and critical thinking skills, and I'm always looking for ways to improve my skills and expand my knowledge.
                <br />
                <br />

                If you're interested in working with me or have a project you'd like to discuss, please don't hesitate to get in touch. You can email me at <Link href={'mailto: fiqihalfito.dev@gmail.com'} className="font-bold underline text-blue-700 underline-offset-2">fiqihalfito.dev@gmail.com</Link>
                , or connect with me on <Link href={'https://www.linkedin.com/in/fiqih-alfito'} target="_blank" className="font-bold text-blue-700">LinkedIn</Link>. I'm excited to explore new opportunities and continue building my career in the tech industry!
            </p>
        </div>
    )
}

export default About