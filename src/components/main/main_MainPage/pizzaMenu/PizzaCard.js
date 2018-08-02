import React from 'react'
import {Card, Icon, Button} from 'semantic-ui-react'

const extra = (
  <Button icon labelPosition="left">
    <Icon name="inbox" />
    Add to basket
  </Button>
)

const PizzaCard = ({name, composition, type, image}) => {
  return (
    <Card
      image={require(`../../../../static/${image}`)}
      header={name}
      meta={type}
      description={composition}
      extra={extra}
      className="pizza-card-field__content-item"
    />
  )
}

export default PizzaCard
