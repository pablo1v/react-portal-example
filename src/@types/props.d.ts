type PropsWithChildren<T extends AnyObject = {}> = GetRecord<T> & {
  children: React.ReactNode;
};
