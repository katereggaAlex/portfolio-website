export type ExperienceModel = {
  id: number;
  title: string;
  description: string;
  duration: string;
  area: string;
  tech: string[];
};

export function workToList(data: {
  [index: string]: ExperienceModel;
}): [string, ExperienceModel][] {
  const entries = Object.entries(data);
  return entries;
}
