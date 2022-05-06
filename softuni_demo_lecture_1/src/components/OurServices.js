import ServiceCard from "./ServiceCard"

function OurServices() {
    return (
        <div className="page-section">
            <div className="container">
                <div className="row">

                    <ServiceCard
                        name="SEO Consultancy"
                        info="We help you define your SEO objective & develop a realistic 
                        strategy with you objective & develop a realistic strategy with you"
                        imageUrl="/img/services/service-1.svg"
                    />

                    <ServiceCard
                        name="Content Marketing"
                        info="We help you define your SEO objective & develop a realistic strategy with you"
                        imageUrl="/img/services/service-2.svg"
                    />

                    <ServiceCard
                        name="Keyword Research"
                        info="We help you define your SEO objective & develop a realistic strategy with you"
                        imageUrl="/img/services/service-3.svg"
                    />
                </div>
            </div>
        </div>
    )
}

export default OurServices