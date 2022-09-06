import React, { FC } from "react";
import { Information } from "./information";
import { Ocupation } from "./ocupation";
import { OtherInformation } from "./otherInformation";

export const FrischknechtCV: FC = () => {
  return (
    <div>
      <Information
        name="Lukas Frischknecht, Senior Art Director"
        imageUrl="/images/placeholder1.jpg"
        street="Zurlindenstrasse 57"
        postcode="8003 Zürich"
        tel="+41 79 683 26 27"
        mail="lukas.frischknecht@thjnk.ch"
      />

      <Ocupation
        title="thjnk Zürich"
        timespan1="seit Feburar 2022"
        timespan2="September 2018 - Januar 2021"
        workTitle1="Senior Art Director"
        workTitle2="Art Director"
        text="Ochsner Sport, Denner, Bio Suisse, Sunrise, Credit Suisse,    Tages-Anzeiger, Edelweiss, Pro Senectute"
      />

      <Ocupation
        title="Jung von Matt/Limmat"
        timespan1="Juli 2014 - August 2018"
        timespan2="Januar 2013 - Juni 2014"
        timespan3="März 2012 - Dezember 2012"
        timespan4="November 2011 - Februar 2012"
        workTitle1="Art Director"
        workTitle2="Junior Art Director"
        workTitle3="Grafikdesigner"
        workTitle4="Grafik Praktikum"
        text="Graubünden, Migros, TCS "
      />

      <OtherInformation
        title="Auszeichnungen"
        text="ADC Schweiz, ADC Europa, Cannes Lions, D&AD, One Show, Eurobest, ADC Deutschland"
      />

      <OtherInformation
        title="Neben der Werbung"
        text='Illustrator "Wuukasch", Bier trinken'
      />
    </div>
  );
};
