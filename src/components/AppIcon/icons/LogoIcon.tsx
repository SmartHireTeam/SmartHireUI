import { FunctionComponent } from 'react';
import { AppIconProps } from '../AppIcon';

import Stack from '@mui/material/Stack';
import { pink } from '@mui/material/colors';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { ViewHeadline } from '@material-ui/icons';

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function LogoIcon() {
  return (
    <Stack direction="row" spacing={3}>

      <ViewHeadline  />
 
    </Stack>
  );
}


