import React, { ComponentType } from 'react';
import styled, { withTheme } from 'styled-components';

export default function withStyled(Comp: ComponentType<any>) {
  const StyledComponent = withTheme(props => <Comp {...props} />);
  StyledComponent.defaultProps = {
    theme: {}
  };
  return styled(StyledComponent);
}
