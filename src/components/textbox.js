import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export function Text({texttitle, content, icon}) {
    return (
      <Root>
        <Divider textAlign="left">
          <div style={{ display: 'flex', alignItems: 'center' }}>
              {icon}
              <p style={{ marginLeft: '8px' }}>{texttitle}</p>
          </div>
        </Divider>
        {content} 
      </Root>
    );
  }