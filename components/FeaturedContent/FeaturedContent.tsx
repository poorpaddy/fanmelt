import React from 'react'
import { SearchAppBar, Chip, Card } from '..'
import { Container } from './Styled'

interface ITag {
  name: string
  label: string
  selected: boolean
}

interface IList {
  name: string
  title: string
  img: string
  tags: string[]
  price: number
}

interface IProps {
  tags: ITag[]
  list: IList[]
  onTagClick: (i: number) => void
}

export const FeaturedContent = ({ tags, list, onTagClick }: IProps) => {
  return (
    <Container>
      <SearchAppBar onChange={() => {}} />

      <div className="content">
        <div className="nav">
          <div className="title">Categories</div>
          {tags &&
            tags.map((tag, i) => (
              <Chip
                label={tag.label}
                onClick={() => onTagClick(i)}
                selected={tag.selected}
              />
            ))}
        </div>

        <div className="list">
          {list &&
            list.map(item => (
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
  );
}

