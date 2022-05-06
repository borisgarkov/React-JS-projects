function ServiceCard({
    imageUrl,
    name,
    info,
}) {
    return (
        <div className="col-lg-4">
            <div className="card-service wow fadeInUp">
                <div className="header">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="body">
                    <h5 className="text-secondary">{name}</h5>
                    <p>{info}</p>
                    <a href="service.html" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard