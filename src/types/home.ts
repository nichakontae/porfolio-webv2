export type ProjectSectionType = {
  icon: string;
  projectName: string;
  preview: string;
  desc: string;
  view: ViewProjectType;
  type: string[];
  techUse: LangFrame;
};

export type PreviewPhotoType = {
  image: string;
  alt: string;
};

export type LangFrame = {
  langs: string[];
  framework: string[];
};

export type ViewProjectType = {
  websiteName?: string;
  link?: string;
  code: string;
};
