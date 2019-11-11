import React from 'react';
import { storiesOf  } from '@storybook/react';
import { CustomImageButton } from '../../../components/ImageButton/CustomImageButton.tsx';

storiesOf('Book|CustomImageButton', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'Default Image Button',
    () => {
    	return (
    		<div>
    			<label> default custom image button</label><br />
    			<CustomImageButton text="Default Image Button"/>
    		</div>
    	)
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  ).add(
    'Custom Image Button',
    () => {
      return (
        <div>
          <label> custom image button</label><br />
          <CustomImageButton text="Custom Image Button" src="download-to-storage-drive.svg"/>
        </div>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  );