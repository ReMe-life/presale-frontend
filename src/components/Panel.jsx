import React, { useState } from "react";
import styled from "styled-components";
import Tooltip from "./Tooltip";
import "./Tooltip.css";
import CBLogo from "../assets/coinbase.png";
import Stripe from "../assets/stripe.png";

const Wrapper = styled.div`
  margin: auto auto;
  background-color: #321e32;
  border-radius: 10px;
  padding: 20px 10px;
`;

const Title = styled.h1`
  color: #ffffff;
  text-align: center;
  font-weight: 600;
  margin: 0 0 5px 0;
`;

const MessageBanner = styled.h3`
  height: 15px;
  text-align: center;
  color: #ffffff;
  font-weight: 400;
  margin: 25px 0 25px 0;

  @media (max-width: 768px) {
    margin-bottom: 60px;
    font-size: 16px;
  }

  @media (max-width: 500px) {
    margin-bottom: 120px;
  }
`;

const CardWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 35px;
  background-color: #b3b3b3;
  border-radius: 10px;
  margin: 10px;
`;

const Pill = styled.div`
  padding: 10px;
  border-radius: 10px;
  background-color: #e5cdff;
  width: 15vw;
  text-align: center;

  @media (max-width: 768px) {
    width: 50vw;
    margin: 5px 0px;
  }
`;

const Heading = styled.h2`
  color: #002060;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Col = styled.div`
  flex: 1;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
`;

const Divider = styled.div`
  width: 100%;
  border: 1px solid black;
`;

const CalcContainer = styled.div`
  border: 2px solid #002060;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Subtitle = styled.div`
  margin: 5px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAlign};
`;

const Input = styled.input`
  width: 15vw;
  border-radius: 10px;
  border: 0;
  padding: 10px;
  color: #000000;
  display: block;
  margin: 0 auto;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 70%;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const Span = styled.span`
  display: inline;
  font-family: "Helvetica" !important;
  color: red;
  font-size: 14px;
  cursor: pointer;
`;

const CoinbaseLogo = styled.img.attrs({
  src: `${CBLogo}`,
})`
  max-height: 2vh;
  padding: 6px;
`;

const StripeLogo = styled.img.attrs({
  src: `${Stripe}`,
})`
  max-height: 4vh;
`;

const FaqBtn = styled.div`
  display: inline;
  background-color: #31b9c5;
  border-radius: 5px;
  padding: 5px;
  width: fit-content;

  @media (max-width: 768px) {
    padding: 1px;
  }
`;

const Panel = () => {
  const [amount, setAmount] = useState(0);

  function calculate(event) {
    setAmount(event.target.value);
  }

  return (
    <Wrapper>
      <Title>ReMeLife Token Pre-Sale</Title>
      <MessageBanner>
        It's cold out there in crypto land... but here in Reme Land, it's hot,
        hot, hot! Don't miss out. Grab some REMEs now before they launch
        publicly.
      </MessageBanner>
      <CardWrapper>
        <Card>
          {/* <div className="Tooltip-Wrapper"> */}
          <Tooltip
            content="This shows the current number of ReMeLife members."
            direction="bottom"
          >
            <Pill>
              Active Members: 6000<Span> &#9432;</Span>
            </Pill>
          </Tooltip>
          {/* </div> */}

          <Tooltip
            content="This shows the current open round."
            direction="bottom"
          >
            <Pill>
              Current Round: 3<Span> &#9432;</Span>
            </Pill>
          </Tooltip>

          <Tooltip
            content="This shows the total amount raised."
            direction="bottom"
          >
            <Pill>
              Total Raised GBP: £5,000,000<Span> &#9432;</Span>
            </Pill>
          </Tooltip>

            <Tooltip
              content="This defines the tokenomics of the RTE"
              direction="bottom"
            >
              <Heading>
                Tokenomics<Span> &#9432;</Span>
              </Heading>
            </Tooltip>
            <Row>
              <Col>Token Name: </Col>
              <Col />
              <Col>REME</Col>
            </Row>
            <Row>
              <Col>Token Symbol: </Col>
              <Col />
              <Col>REME</Col>
            </Row>
            <Row>
              <Col>Initial Supply: </Col>
              <Col />
              <Col>8,000,000</Col>
            </Row>
            <Row>
              <Col>Decimals: </Col>
              <Col />
              <Col>18</Col>
            </Row>
            <Row>
              <Col>Max Cap: </Col>
              <Col />
              <Col>600,000,000</Col>
            </Row>
          </Card>
          <Card>
            <Tooltip
              content="The ReMeLife Token Event has four rounds with open dates. Each is discounted to the REME launch price of £0.10"
              direction="bottom"
            >
              <Heading>
                Rounds<Span> &#9432;</Span>
              </Heading>
            </Tooltip>
            <Row>
              <Col color="#002060" fontWeight="600">
                Round 1
              </Col>
              <Col />
              <Col color="#002060" fontWeight="600">
                Discount: 50%
              </Col>
            </Row>
            <Row>
              <Col>Price:</Col>
              <Col />
              <Col>£0.50</Col>
            </Row>
            <Row>
              <Col>Raised:</Col>
              <Col />
              <Col>£50,000</Col>
            </Row>
            <Row>
              <Col color="red" fontSize="smaller">
                NOW OPEN!
              </Col>
              <Col />
              <Col></Col>
            </Row>
            <Divider />
            <Row>
              <Col color="#002060" fontWeight="600">
                Round 2
              </Col>
              <Col />
              <Col color="#002060" fontWeight="600">
                Discount: 30%
              </Col>
            </Row>
            <Row>
              <Col>Price:</Col>
              <Col />
              <Col>£0.70</Col>
            </Row>
            <Row>
              <Col>Raised:</Col>
              <Col />
              <Col>£150,000</Col>
            </Row>
            <Row>
              <Col color="red" fontSize="smaller">
                Opens: 27/07/22
              </Col>
              <Col />
              <Col></Col>
            </Row>
            <Divider />
            <Row>
              <Col color="#002060" fontWeight="600">
                Round 3
              </Col>
              <Col />
              <Col color="#002060" fontWeight="600">
                Discount: 20%
              </Col>
            </Row>
            <Row>
              <Col>Price:</Col>
              <Col />
              <Col>£0.80</Col>
            </Row>
            <Row>
              <Col>Raised:</Col>
              <Col />
              <Col>£250,000</Col>
            </Row>
            <Row>
              <Col color="red" fontSize="smaller">
                Opens: 14/08/22
              </Col>
              <Col />
              <Col></Col>
            </Row>
          </Card>
          <Card>
            <Tooltip
              content="This provides instructions as to how to make an investment."
              direction="left"
            >
              <Heading>
                Buy Now<Span> &#9432;</Span>
              </Heading>
            </Tooltip>
            <CalcContainer>
              <Subtitle color="#002060" fontWeight="600">
                How much do I get for my investment?
              </Subtitle>
              <Input
                type="number"
                placeholder={"Enter amount in GBP (£)"}
                onChange={calculate}
              />
              <Subtitle style={{ textAlign: "center" }}>
                gives you {amount / 0.5} REMEs
              </Subtitle>
            </CalcContainer>
            <Subtitle color="#002060" fontWeight="600">
              Buy with Crypto
            </Subtitle>
            <Button>
              <CoinbaseLogo />
            </Button>
            <Subtitle color="#002060" fontWeight="600">
              Buy with Fiat
            </Subtitle>
            <Button>
              <StripeLogo />
            </Button>
          </Card>
        </CardWrapper>
        <Subtitle color="white" textAlign="center">
          For more information regarding the content of this page and how to
          purchase, please visit our{" "}
          <FaqBtn>
            <a
              href="https://remelife.io/faqs/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              FAQ
            </a>
          </FaqBtn>{" "}
          here.
        </Subtitle>
      </Wrapper>
    </Container>
  );
};

export default Panel;
