function OfficeLocations() {
    const officeLocations = [
        {
            name: 'Main Office',
            address: '123 Main Street, City, Country',
            phone: '+1 (123) 456-7890',
            email: 'main.office@example.com',
        },
        {
            name: 'Branch Office 1',
            address: '456 Branch Avenue, City, Country',
            phone: '+1 (456) 789-1234',
            email: 'branch1@example.com',
        },
        {
            name: 'Branch Office 2',
            address: '789 Office Road, City, Country',
            phone: '+1 (789) 123-4567',
            email: 'branch2@example.com',
        },
        // Add more office locations as needed
    ];

    return (
        <div className="office-locations p-3 rounded bg-light">
            <h5 className="fw-bold mb-3">Our Office Locations</h5>
            {officeLocations.map((location, index) => (
                <div key={index} className="office-location mb-4">
                    <h6 className="fw-bold">{location.name}</h6>
                    <p><strong>Address:</strong> {location.address}</p>
                    <p><strong>Phone:</strong> {location.phone}</p>
                    <p><strong>Email:</strong> <a href={`mailto:${location.email}`}>{location.email}</a></p>
                </div>
            ))}
        </div>
    );
}

export default OfficeLocations;
