import React from "react"
import Office from '@Components/Shared/Office'

function DetailWrap({ metrics, params, details }) {
    if (!metrics?.[0]) {
        return null
    }

    return (
        <>
            {metrics[0].offices.map((office) => (
                <Office
                    key={office.id}
                    office={office}
                    metrics={metrics}
                    params={params}
                    details={details}
                />
            ))}
        </>
    )
}

export default DetailWrap
