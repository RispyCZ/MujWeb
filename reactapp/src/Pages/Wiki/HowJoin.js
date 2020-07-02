import React from 'react'
import { Typography } from '@material-ui/core'
import img1 from '../../obr/mljD.png';
import img2 from '../../obr/tNtm.png';
import img3 from '../../obr/dhru.png';
export default function HowJoin() {
  return (
    <>
      <Typography variant="h4">Jak připojit</Typography>
      <Typography variant="body1">Co budeme potřebovat?</Typography>
      <ol>
        <li><Typography variant="body1">Minecraft Java Edition</Typography></li>
        <li><Typography variant="body1" >Stáhnutou nejnovější verzi</Typography></li>
        <li><Typography variant="body1" >1 minutu času</Typography></li>
      </ol>
      <Typography variant="body1">Pojďme na to!</Typography>
      <Typography variant="body1">V menu klikneme na tlačítko „Mupltiplayer“ (pokud máte hru v češtině „Hra pro více hráčů„)</Typography>
      <img src={img1} alt="Tohle obrázek!" style={{display: "block", margin: "auto"}} />
      <Typography variant="body1">Dále klikneme na „Add server“ (pokud máte hru v češtině „Přidat server„)</Typography>
      <img src={img2} alt="Tohle obrázek!" style={{display: "block", margin: "auto"}} />
      <Typography variant="body1">Poté se nám ukáže formulář, který vyplníme jak je znázorněno na obrázku (políčko „Server Name“ si pojmenujte libovolně) a máme hotovo! Stačí se jen připojit.</Typography>
      <img src={img3} alt="Tohle obrázek!" style={{display: "block", margin: "auto"}} />
    </>
  )
}
