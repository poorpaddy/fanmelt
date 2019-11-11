import React from 'react';
import { storiesOf  } from '@storybook/react';
import { Image } from '../../../../pages/featured.tsx';

const result = {
  name: "Gilbert",
  title: "Comedian",
  image: "https://d31wcbk3iidrjq.cloudfront.net/static/user/NuLZJ326L.jpeg",
  tags: ["Actors", "Legends", "Comedian"],
  price: "$150"
}

storiesOf('Pages|Featured/ResultsGrid/Image', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'Default Button',
    () => {
    	return (
    		<div>
    			<label> default image</label><br />
    			<Image price={result.name} image={result.image} title={result.title} name={result.name} tags={result.tags} />
    		</div>
    	)
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )