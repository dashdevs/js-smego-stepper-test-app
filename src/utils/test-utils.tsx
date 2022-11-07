import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';

export const AllTheProviders = ({ children }: { children: ReactElement | Array<ReactElement> }) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (
  ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  options: RenderOptions<
    typeof import('@testing-library/dom/types/queries'),
    HTMLElement,
    HTMLElement
  >,
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
