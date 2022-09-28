export default function findListLastItem(list: string[]): any[] {
  const length = list.length;
  const pointer = length - 1 > 0 ? length - 1 : 0;
  if (pointer > 0) {
    return [pointer, list[pointer]];
  }

  return [pointer, pointer];
}
