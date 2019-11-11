import React from 'react';
import { storiesOf  } from '@storybook/react';
import { InfoBarContainer, ApplyButton, SocialButtons } from '../../../pages/index.tsx';

storiesOf('Pages|Home/InfoBar', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'InfoBar',
    () => {
    	return (
    		<div>
    			<label>InfoBar</label><br /><br />
    			<InfoBarContainer>
            <SocialButtons />
            <ApplyButton>Apply as talent</ApplyButton>
          </InfoBarContainer>
    		</div>
    	)
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )