import ServicesCard from "../components/ServicesCard"


let services = [
    {
        title: "UX/UI Design",
        content: "Leverage the latest UI/UX technologies architectures, and trends to design responsive & scalable apps that transform customer experiences across multiple channels."
    },
    {
        title: "Web App Development",
        content: "Our custom web development solutions accelerate workflows, boost revenues, and optimize business operations from concept-to-code and development-to-deployment."
    },
    {
        title: "Mobile App Development",
        content: "Our application softeare developers are industry-specific technology exerts with many years of combined experience delivering interoperable, scalable, and flexible we & mobiole applications for all kinds of industries."
    },
    {
        title: "Blockchain Development",
        content: "We are highly proficient in engineering reliable and secure blockchain technologies from the ground up and customizing existing blockchain solutions through various system modifications, integrations, and implementations."
    },
    {
        title: "Application Maintainance",
        content: "We help teams run app maintenance, connect to business systems, and make data-driven decisions. Organize, track, and schedule your app maintenance activities with our custom solutions."
    },
    {
        title: "Code Refactoring",
        content: "We reconstruct existing code to improve external functionality while eliminating programming redundancies, streamline class designs, and impreve API implementations."
    },
]

export default function Services() {
    return (
        <>
            <div className="mx-auto">
                <h1 className="text-4xl text-violet-800 font-bold ">
                    Services We Provide
                </h1>
            </div>
            <div className=" gap-6 mx-auto py-[50px] grid lg:grid-cols-3 sm:grid-cols-2">

                {services.map((service) => {
                    return <ServicesCard data={service} />
                })}


            </div>
        </>
    )
}
