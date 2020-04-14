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
    const {baseUrl} = siteConfig;

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

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
        <div class="container darkBackground paddingBottom paddingTop">
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
                      <div>
                        <span><a className="chat-links" href="https://github.com/recraftrelic/react-native-chat-app-boilerplate" target="_blank">Github</a></span>
                      </div>
                      <div>
                        <span><a className="chat-links" href="https://play.google.com/store/apps/details?id=com.reactnativechatappboilerplate" target="_blank">Google Play</a></span>
                      </div>
                      <div>
                        <span><a className="chat-links" href="/chatapp/docs/installation.html" target="_blank">Docs</a></span>
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
