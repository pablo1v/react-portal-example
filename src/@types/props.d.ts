interface PropsWithChildren<T extends Record<any, any> = {}> extends T {
  children: React.ReactNode;
}
