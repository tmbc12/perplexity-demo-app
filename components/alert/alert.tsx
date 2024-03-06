import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const alert = () => {
    return (
        <Alert>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
                You can add components and dependencies to your app using the cli.
            </AlertDescription>
        </Alert>

    )
}

export default alert