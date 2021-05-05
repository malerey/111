import styled from 'styled-components'
import Card from './Card'

const MainSection = styled.section`
  background-color: yellow;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap
`;

const cards = [
  {
    title: "Card 1",
  },
  {
    title: "Card 2",
  },
  {
    title: "Card 3",
  },
  {
    title: "Card 4",
  },
  {
    title: "Card 5",
  },
  {
    title: "Card 6",
  },
  {
    title: "Card 7",
  },
  {
    title: "Card 8",
  },
  {
    title: "Card 9",
  },
  {
    title: "Card 10",
  },
  {
    title: "Card 11",
  },
  {
    title: "Card 12",
  },

]

const Main = () => {
  return (
    <MainSection>
      <h1>Soy Main</h1>
      <CardContainer>
      {
        cards.map(card => <Card title={card.title}/>)
      }
      </CardContainer>
    </MainSection>
  )
}

export default Main
