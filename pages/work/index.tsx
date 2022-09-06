import Image from "next/image";
import Link from "next/link";
import React from "react";
import { WorkThumbnail } from "../../components/work/workThumbnail";

export default function Work() {
  return (
    <div>
      <h1>Work</h1>
      <div className="work-container border mx-auto">
        <div className="work">
          <WorkThumbnail name="test1" num={1} />
          <WorkThumbnail name="test2" num={2} />
          <WorkThumbnail name="test3" num={3} />
          <WorkThumbnail name="test4" num={4} />
          <WorkThumbnail name="test5" num={5} />
          <WorkThumbnail name="test6" num={6} />
          <WorkThumbnail name="test7" num={7} />
          <WorkThumbnail name="test8" num={8} />
          <WorkThumbnail name="test9" num={9} />
          <WorkThumbnail name="test10" num={10} />
        </div>
      </div>
    </div>
  );
}
