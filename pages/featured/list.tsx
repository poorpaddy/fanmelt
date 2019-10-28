import React, { useState, useEffect } from 'react'
import { SearchAppBar, Chip, Card } from '../../components'
import { Container } from './styled'

const FeaturedPage = () => {

  const [tags, setTags] = useState([])
  const [list, setList] = useState([])

  /* Fetch data and set Tags in future */
  useEffect(() => {
    /* Dummy condition */
    if (tags.length < 1) {
      const list = [
        {name: 'actors', label: 'Actors', selected: true},
        {name: 'athletes', label: 'Athletes', selected: false},
        {name: 'tv', label: 'TV', selected: false}
      ];

      setTags(list)
    }

    if(list.length < 1) {
      const list = [
        { 
          name: 'Gilbert',
          title: 'Comedian',
          img: 'https://d31wcbk3iidrjq.cloudfront.net/static/user/NuLZJ326L.jpeg',
          tags: ['Actors', 'Legends', 'Comedian'],
          price:150,
        },
        {
          name: 'Abcccbc',
          title: 'Musician',
          img: 'https://d31wcbk3iidrjq.cloudfront.net/static/user/qVl2Vogqd.jpg',
          tags: ['Actors', 'TV', 'Comedian'],
          price: 35,
        },
        {
          name: 'Chris Hensen',
          title: 'Tv Star',
          img: 'https://d31wcbk3iidrjq.cloudfront.net/cmiaTZ4jK-43CEAF55-F303-4CC8-BF1A-4773759549E2.png',
          tags: ['Actors', 'Legends', 'Comedian'],
          price: 50,
        },
        {
          name: 'Ben Higgins',
          title: 'Actor',
          img: 'https://www.cameo.com/wwebige',
          tags: ['Actors', 'Legends', 'Comedian'],
          price: 240,
        },
      ];

      setList(list)
    }
  }, [])

  const tagClicked = (i: number) => {
    const updatedTags = [...tags]
    updatedTags[i].selected = !updatedTags[i].selected
    setTags(updatedTags)
  }

  return (
    <Container>
      <SearchAppBar onChange={() => {}} />

      <div className="content">
        <div className="nav">
          <div className="title">Categories</div>
          {tags && tags.map((tag, i) => (
            <Chip label={tag.label} onClick={() => tagClicked(i)} selected={tag.selected} />
          ))}
        </div>

        <div className="list">
          {list && list.map(item => (
            <Card
              title={item.title}
              img={item.img}
              name={item.name}
              tags={item.tags}
              price={item.price}
            />
          ))}
          
        </div>
      </div>
    </Container>
  )
}

export {FeaturedPage}
export default FeaturedPage