type RouterPath = {
  id: number;
  path: string;
  name: string;
};

export const routesPath: RouterPath[] = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/cart", name: "Cart" },
];
