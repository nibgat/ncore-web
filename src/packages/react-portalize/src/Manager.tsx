import * as React from 'react';

export interface IManagerHandles {
  mount(key: string, children: React.ReactNode): void;
  update(key?: string, children?: React.ReactNode): void;
  unmount(key?: string): void;
}

export const Manager = React.forwardRef((_, ref): any => {
  const [portals, setPortals] = React.useState<{ key: string; children: React.ReactNode }[]>([]);

  React.useImperativeHandle(
    ref,
    (): IManagerHandles => ({
      mount(key: string, children: React.ReactNode): void {
        setPortals(prev => [...prev, { key, children }]);
      },

      update(key: string, children: React.ReactNode): void {
        setPortals(prev =>
          prev.map(item => {
            if (item.key === key) {
              return { ...item, children };
            }

            return item;
          }),
        );
      },

      unmount(key: string): void {
        setPortals(prev => prev.filter(item => item.key !== key));
      },
    }),
  );

  return portals.map(({ key, children }, index: number) => (
    <div
      key={`react-native-portalize-${key}-${index}`}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "auto"
      }}
    >
      {children}
    </div>
  ));
});
