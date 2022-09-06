import React, { FC } from "react";
import { Information } from "./information";
import { Ocupation } from "./ocupation";
import { OtherInformation } from "./otherInformation";

export const AmgwerdCV: FC = () => {
  return (
    <div>
      <Information
        name="Lukas Amgwerd, Creative Director Text"
        imageUrl="/images/placeholder2.jpg"
        street="Zurlindenstrasse 57"
        postcode="8003 Zürich"
        tel="+41 79 683 26 27"
        mail="lukas.amgwerd@thjnk.ch"
      />

      <Ocupation
        title="thjnk Zürich"
        timespan1="seit Juni 2022"
        timespan2="März 2021 - Mai 2022"
        timespan3="Februar 2019 - Februar 2021"
        workTitle1="Creative Director"
        workTitle2="Senior Texter"
        workTitle3="Texter"
        text="Ochsner Sport, Denner, Bio Suisse, Sunrise, Credit Suisse,    Tages-Anzeiger, Edelweiss, Pro Senectute"
      />

      <Ocupation
        title="Jung von Matt/Limmat"
        timespan1="Januar 2018 - Januar 2019"
        timespan2="März 2017 - Dezember 2017 "
        workTitle1="Texter"
        workTitle2="Junior Texter"
        text="Graubünden, Migros, Swissmilk, Samsung, EFG"
      />

      <Ocupation
        title="Wirz BBDO"
        timespan1="Juni 2016 - Februar 2017"
        timespan2="Dezember 2015 - Mai 2016"
        workTitle1="Junior Texter"
        workTitle2="Text Praktikum"
        text="Mobiliar, Migros, Mercedes, Kieser Training"
      />

      <Ocupation
        title="Vollzeit Studium"
        timespan1="2021 - 2015"
        text="Bachelor of Science in Business Administration, General Management"
        education={true}
      />

      <OtherInformation
        title="Auszeichnungen"
        text="ADC Schweiz, ADC Europa, Cannes Lions, Young ADC, One Show, ADC Deutschland"
        text2="ADC Young Professional Member seit 2016"
      />

      <OtherInformation
        title="Neben der Werbung"
        text="Auf der Suche nach Inspiration, Tennis spielen, Sport am TV schauen, meinen Hund versuchen zu erziehen"
      />
    </div>
  );
};
