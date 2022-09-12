export type frontpageData = {
  title: string;
  subtitle: string;
  introduction: string;
};

export type aboutData = {
  name: string;
  work_title: string;
  imageurl: string;
  street: string;
  postcode: string;
  tel: string;
  mail: string;
  linkedin: string;
};

export type experienceData = {
  _id: string;
  title: string;
  timespan1?: string;
  timespan2?: string;
  timespan3?: string;
  timespan4?: string;
  worktitle1?: string;
  worktitle2?: string;
  worktitle3?: string;
  worktitle4?: string;
  customers?: string;
  text?: string;
  text2?: string;
};

export type projectData = {
  title: string;
  subtitle: string;
  description: string;
  images: [];
  video: [
    {
      asset: {
        _ref: string;
      };
    }
  ];
  slug: {
    current: string;
  };
  thumbnail: any;
};
