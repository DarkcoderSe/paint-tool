import React from 'react'
import {Button} from 'react-bootstrap'

function Tools() {
    return (
        <div className="text-center">
            <Button variant="success btn-sm" data-target="tooltip" title="Save Paint">Save</Button> {' '}
            <Button variant="light btn-sm">
                <ion-icon name="brush-outline"></ion-icon>
            </Button> {' '}
            <Button variant="light btn-sm">
                <ion-icon name="color-wand-outline"></ion-icon>
            </Button> {' '}
            <Button variant="light btn-sm">
                <ion-icon name="color-palette-outline"></ion-icon>
            </Button> {' '}
            <Button variant="light btn-sm">
                <ion-icon name="pencil-outline"></ion-icon>
            </Button> {' '}
            <Button variant="light btn-sm">
                <ion-icon name="logo-facebook"></ion-icon>
            </Button> {' '}

            <Button variant="danger btn-sm" data-target="tooltip" title="Clear the Paint board">Clear</Button>
        </div>
    )
}

export default Tools
