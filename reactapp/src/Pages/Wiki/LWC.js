import React from 'react'
import { Typography } from '@material-ui/core'

export default function LWC() {
    return (
        <>
            <Typography variant="h4">LWC</Typography>
            <Typography>Jednou z možností ochrany vašeho majetku je jeho uzamčení pomocí pluginy LWC. Tento plugin vám umožňuje uzamknout nasledují předměty:</Typography>
            <ol>
                <li>Truhly</li>
                <li>Pece</li>
                <li>Dveře</li>
                <li>Hlavy</li>
                <li>Cedulky</li>
                <li>Shulker boxy</li>
            </ol>
            <Typography variant="h4">Příkazy k pluginu</Typography>
            <ol>
                <li>/lock - Uzamčení objektu</li>
                <li>/unlock - Odemčení objektu</li>
                <li>/cmodify - Umožňuje povolit objektu určítému hráči</li>
            </ol>
        </>
    )
}
