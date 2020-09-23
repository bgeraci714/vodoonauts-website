import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Heading1, Section, HorizontalLine } from "../components/common";
import ZoomVoodoonautsBanner from "../components/ZoomVoodoonautsBanner";

const ContactText = styled.p`
  text-align: center;
`;

const ContactContainer = styled.div`
  width: max-content;
  margin: 0 auto;
`;

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Section>
        <Heading1>Contact Us</Heading1>
        <Section>
          <ZoomVoodoonautsBanner />
        </Section>
        <ContactContainer>
          <ContactText>
            Email us at{" "}
            <a href="mailto:voodoonauts@gmail.com">voodoonauts@gmail.com</a>
          </ContactText>
          <ContactText style={{ marginBottom: 0 }}>
            Follow us on Twitter at{" "}
            <a href="https://twitter.com/voodoonauts/">@voodoonauts</a>
          </ContactText>
        </ContactContainer>
      </Section>
    </Layout>
  );
};

export default ContactPage;
