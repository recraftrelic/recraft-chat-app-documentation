/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        
      </div>
    );

    return (
      <SplashContainer>
        
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="left"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
        <div class="container lightBackground paddingBottom paddingTop">
          <div class="wrapper">
            <div class="gridBlock">
              <div class="blockElement imageAlignSide imageAlignRight twoByGridBlock">
                <div class="blockContent">
                  <h2>
                    <div>
                      <span>
                        <p>Recraft Chat App</p>
                      </span>
                    </div>
                  </h2>
                  <div>
                    <span>
                      <p>This chat app is a boilerplate for any react native developer who wants to build a chat app. The goal of this boilerplate is to provide a fully functional chat app which can be reused with very little to no modification.</p>
                      <ul className="chat-list">
                        <li>Routing</li>
                        <li>Themes</li>
                        <li>Translations</li>
                      </ul>
                      <div className="inner">
                        <PromoSection>
                          <Button target="_blank" href="https://github.com/recraftrelic/react-native-chat-app-boilerplate">Github</Button>
                          <Button target="_blank" href="https://play.google.com/store/apps/details?id=com.reactnativechatappboilerplate">Google Play</Button>
                          <Button target="_blank" href={docUrl('Installation.html')}>Docs</Button>
                        </PromoSection>
                      </div>
                    </span>
                  </div>
                </div>
                <div class="blockImage">
                  <video width="90%" height="auto" loop="" autoplay="" src="/chatapp/img/documentation.mp4"></video>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

module.exports = Index;
