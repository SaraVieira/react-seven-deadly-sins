// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  Cite,
  Fit,
  Image,
  Appear
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import theme, { colors } from './theme';

import images from './images';

const list = {
  width: 50,
  height: 50,
  margin: 0
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme} progress="bar">
        <Slide bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Hello
          </Heading>
          <Heading size={1} textColor="primary">
            <span role="img" aria-label="Hello">👋</span>
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Layout style={{ minWidth: 500, justifyContent: 'space-between' }}>
            <Fit>
              <List
                style={{
                  padding: 0,
                  listStyle: 'none',
                  margin: 0,
                  minWidth: 500
                }}>
                <ListItem textColor="primary">Sara Vieira</ListItem>
                <ListItem textColor="primary">Full Stack Developer</ListItem>
                <ListItem textColor="primary">@NikkitaFTW</ListItem>
                <ListItem textColor="primary" style={{ display: 'flex', marginTop: 20 }}>
                  <Image
                    src={images.soccer}
                    style={list}
                  />
                  <Text textColor="primary" style={{ margin: 0 }}>
                    Football{' '}
                  </Text>
                </ListItem>
                <ListItem textColor="primary" style={{ display: 'flex', marginTop: 20 }}>
                  <Image
                    src={images.zombie}
                    style={list}
                  />
                  <Text textColor="primary" style={{ margin: 0 }}>
                    Horror Movies
                  </Text>
                </ListItem>
                <ListItem textColor="primary" style={{ display: 'flex' }}>
                  <Image src={images.train} />
                </ListItem>
              </List>
            </Fit>
            <Fit>
              <Image
                style={{
                  width: 350,
                  maxWidth: 'inherit',
                  top: '50%',
                  position: 'relative',
                  transform: 'translateY(-50%)'
                }}
                src={images.YLDLogo}
              />
            </Fit>
          </Layout>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="secondary"
        >
          <Heading size={1} textColor="primary" caps>
            Portugal
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Image
            src={images.portugal}
            height="80vh"
            style={{
              marginTop: -50
            }}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary" caps>
            The Seven Deadly Sins
          </Heading>
          <Appear>
            <Heading size={2} textColor="primary" caps>
              React Edition
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Image
            src={images.mindblown}
            height="80vh"
            style={{
              marginTop: -50
            }}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary" caps>
            Gluttony
          </Heading>
          <Image
            src={images.homer}
          />
        </Slide>
          <CodeSlide
            style={{position: 'absolute', top: 0}}
            bgColor="secondary"
            transition={[]}
            lang="jsx"
            code={`
<Card
  name={product.name}
  image={product.image}
  price={product.price}
  salePrice={product.salePrice}
  isOnSale={product.sale}
  description={product.description}
  categories={product.categories}
  colors={product.colors}
  designer={product.designer}
  liked={isProductLiked(user.id)}
/>
            `}
            ranges={[
              { loc: [0, 270], title: "100000 Props are not okay" },
              { loc: [5, 270], title: "Still not okay" },
        ]}/>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary" caps>
            You gotta spread them props son
          </Heading>
          <Appear>
            <Heading size={1} textColor="primary" caps>
              Hide the Shame
            </Heading>
          </Appear>
        </Slide>
          <CodeSlide
            style={{position: 'absolute', top: 0}}
            bgColor="secondary"
            transition={[]}
            lang="jsx"
            code={`
<Card
  {...product}
  liked={isProductLiked(user.id)}
/>
            `}
            ranges={[
              { loc: [0, 270], title: "Much Clean" },
              { loc: [5, 270], title: "Very okay" },
        ]}/>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary" caps>
            Anger
          </Heading>
          <Image
            src={images.anger}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary" caps>
            Prettier VS Eslint
          </Heading>
        </Slide>
        <Slide bgImage={images.fight} transition={["fade"]} bgColor="secondary">
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary" caps>
            Greed
          </Heading>
          <Image
            src={images.greed}
          />
        </Slide>
        <CodeSlide
          style={{ position: 'absolute', top: 0 }}
          bgColor="secondary"
          transition={[]}
          lang="js"
          code={`
import _ from 'lodash'
            `}
          ranges={[
            { loc: [0, 270], title: "Berlin has bad internet" },
          ]} />
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary" caps>
            Pick your functions
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary" caps>
            Lust
          </Heading>
          <Image
            src={images.lust}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <BlockQuote>
            <Quote>Dude... Have you heard that talk by Michael Jackson? We should remove all HOC and replace them with render props</Quote>
            <Cite>Some office probably in SF</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary" caps>
            Your HOC are fine
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary" caps>
            Stop
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary" caps>
            Sloth
          </Heading>
          <Image
            src={images.lazy}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary" caps>
            AKA why apollo boost is a thing
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
