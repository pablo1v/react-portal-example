function mergeClassNames(...allClassNames: any[]): string {
  const filteredClassNames: string[] = allClassNames.filter(
    className => typeof className === 'string',
  );

  return filteredClassNames.join(' ');
}

export default mergeClassNames;
