import React from 'react'
import { Typography } from '@material-ui/core'

export default function Commands() {
    return (
        <>
            <Typography variant="h4">Příkazy</Typography>
            <ol>
                <li>/pravidla - Pravidla serveru</li>
                <li>/home - Teleport domů</li>
                <li>/sethome - Nastaví domov na vybraném místě</li>
                <li>/spawn - Teleport na spawn</li>
                <li>/afk - Zapne/Vypne A(way)F(rom)K(ey) status</li>
                <li>/tpa - Pošle žádost o teleportaci jinému hráči</li>
                <li>/rtp - Náhodný teleport</li>
                <li>/tpaaccept - Přijme žádost o teleportaci</li>
                <li>/tpadeny - Zamítne žádost o teleportaci</li>
                <li>/back - Vratí tě na minulou pozici</li>
                <li>/playtime - Zjistí kolik máš u nás nahráno</li>
                <li>/votes - Zobrazí počet hlasů</li>
                <li>/web -  Odkaz na web</li>
                <li>/facebook - Odkaz na stránku na facebooku</li>
                <li>/discord - Odkaz na discord server</li>
                <li>/msg - Soukromá zpráva</li>
                <li>/changepass - Změna hesla</li>
            </ol>
        </>
    )
}
