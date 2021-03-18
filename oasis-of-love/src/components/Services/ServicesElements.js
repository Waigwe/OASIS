import styled from 'styled-components'

export const ServicesContainer = styled.div`
  background: #ffffff;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 768px) {
      height:1100px;
  }

  @media screen and (max-width: 480px) {
      height: 1300px;
  }
`

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const ServicesCard = styled.div`
  background: #ffffff;
  height: 310px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.3);
  transition: all 0.2s ease-in-out;
  border: solid #e8afd6;


  &:hover {
      transform: scale(1.02);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
  }
`

export const ServicesIcon = styled.img`
  height: 140px;
  width: 150px;
  margin-bottom: 10px
`

export const ServicesH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #555358;
`

export const ServicesP = styled.p`
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 10px;
`

