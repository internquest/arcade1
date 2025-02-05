import React, { useState } from 'react';
import TabLink from '../TabLink';

const Descright2 = ({ codesc, setCodesc }) => {
  const tabDataArray = [
    {
      id: 1,
      label: 'OPenAI <span class="text-color-white50">(Python)</span>',
      imageSrc:
        'https://cdn.prod.website-files.com/6771bbc3c3d06393fbfdb57e/6776d02d6850f645926c8b51_devicon_python.svg',
      href: '#w-tabs-0-data-w-pane-0',
      ariaControls: 'w-tabs-0-data-w-pane-0',
      isActive: true,
    },
    {
      id: 2,
      label: 'OPenAI <span class="text-color-white50">(Javascreipt)</span>',
      imageSrc:
        'https://cdn.prod.website-files.com/6771bbc3c3d06393fbfdb57e/6776d395415a95dd59f674e2_logos_javascript.svg',
      href: '#w-tabs-0-data-w-pane-1',
      ariaControls: 'w-tabs-0-data-w-pane-1',
      isActive: false,
    },
    {
      id: 2,
      label: 'Api',
      imageSrc:
        'https://cdn.prod.website-files.com/6771bbc3c3d06393fbfdb57e/6776d395415a95dd59f674e2_logos_javascript.svg',
      href: '#w-tabs-0-data-w-pane-1',
      ariaControls: 'w-tabs-0-data-w-pane-1',
      isActive: false,
    },
    // Add more tabs as needed
  ];
  const [tab, setTab] = useState(1);
  const codeString = `
from arcadepy import Arcade
client = Arcade()
user_id = "user@example.com"  # Start the authorization process
auth_response = client.auth.start(
    user_id, "google",
    scopes=["https://www.googleapis.com/auth/gmail.readonly"]
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")
    
auth_response = client.auth.wait_for_completion(auth_response)

return auth_response.context.token
`;
  const authCodeString = `
import Arcade from "@arcadeai/arcadejs";

const USER_ID = "user@example.com";
const client = new Arcade();

// Start the authorization process
let authResponse = await client.auth.start(USER_ID,
"google", {
  scopes: ["https://www.googleapis.com/auth/gmail.readonly"],
});

if (authResponse.status !== "completed") {
  console.log(\`Click this link to authorize: \${authResponse.url}\`);
  authResponse = await client.auth.waitForCompletion(authResponse);
}

const token = authResponse.context.token;
`;
  return (
    <div class="code_block-holder">
      <div
        code-box="1"
        data-current="Python"
        data-easing="ease"
        data-duration-in="300"
        data-duration-out="200"
        className="code_tabs-component_wrapper w-tabs transition-opacity duration-1000"
        style={
          codesc === 2
            ? { opacity: 1, display: 'block' }
            : { opacity: 0, display: 'none' }
        }
      >
        <div className="code_tabs-component w-tab-menu" role="tablist">
          {tabDataArray.map((tabData, index) => {
            return (
              <TabLink
                tab={tab}
                setTab={setTab}
                index={index}
                key={tabData.id}
                tabData={tabData}
              />
            );
          })}
        </div>
        <div class="w-tab-content">
          <div
            data-w-tab="Python"
            className={`tab_code-snippet_component-wrapper w-tab-pane${
              tab === 1 ? ' w--tab-active' : ''
            } `}
            id="w-tabs-0-data-w-pane-0"
            role="tabpanel"
            aria-labelledby="w-tabs-0-data-w-tab-0"
            style={
              tab === 1
                ? { opacity: 1, transition: 'all, opacity 300ms' }
                : { opacity: 0 }
            }
          >
            <div
              fs-codehighlight-element=""
              className="tab_code-snippet_wrapper"
            >
              <div code_embed="code-1" className="code_embed-wrapper">
                <div fs-copyclip-element="copy-this" className="w-richtext">
                  <pre
                    contentEditable="false"
                    className="code_embed-1 w-code-block language-python"
                    style={{
                      display: 'block',
                      overflowX: 'auto',
                      background: '#2b2b2b',
                      color: '#f8f8f2',
                      padding: '0.5em',
                    }}
                    tabIndex={0}
                  >
                    <code
                      className="language-python"
                      style={{ whiteSpace: 'pre' }}
                    >
                      {codeString}
                    </code>
                  </pre>
                </div>
              </div>
              <div className="code_block-buttons_wrapper">
                <button
                  fs-copyclip-element="click"
                  fs-copyclip-message="Copied!"
                  className="copy_button"
                >
                  <div>Copy</div>
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6771bbc3c3d06393fbfdb57e/6776d6d105f1951f7b525f38_square-behind-square-1%2C%20copy%201%2C%20layers%2C%20pages.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
          <div
            data-w-tab="Javascript"
            className={`tab_code-snippet_component-wrapper w-tab-pane ${
              tab === 2 ? ' w--tab-active' : ''
            }`}
            id="w-tabs-0-data-w-pane-1"
            role="tabpanel"
            aria-labelledby="w-tabs-0-data-w-tab-1"
            style={
              tab === 2
                ? { opacity: 1, transition: 'all, opacity 300ms' }
                : { opacity: 0 }
            }
          >
            <div className="tab_code-snippet_wrapper">
              <div className="code_embed-wrapper">
                <div fs-copyclip-element="copy-this-9" className="w-richtext">
                  <pre
                    className="code_embed-1 w-code-block language-javascript"
                    style={{
                      display: 'block',
                      overflowX: 'auto',
                      background: '#2b2b2b',
                      color: '#f8f8f2',
                      padding: '0.5em',
                    }}
                    tabIndex={0}
                  >
                    <code
                      className="language-javascript"
                      style={{ whiteSpace: 'pre' }}
                    >
                      {authCodeString}
                    </code>
                  </pre>
                </div>
              </div>
              <button
                fs-copyclip-element="click-9"
                fs-copyclip-message="Copied!"
                className="copy_button"
              >
                <div>Copy</div>
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6771bbc3c3d06393fbfdb57e/6776d6d105f1951f7b525f38_square-behind-square-1%2C%20copy%201%2C%20layers%2C%20pages.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div
            data-w-tab="Javascript"
            className={`tab_code-snippet_component-wrapper w-tab-pane ${
              tab === 3 ? ' w--tab-active' : ''
            }`}
            id="w-tabs-0-data-w-pane-1"
            role="tabpanel"
            aria-labelledby="w-tabs-0-data-w-tab-1"
            style={
              tab === 3
                ? { opacity: 1, transition: 'all, opacity 300ms' }
                : { opacity: 0 }
            }
          >
            <div className="tab_code-snippet_wrapper">
              <div className="code_embed-wrapper">
                <div fs-copyclip-element="copy-this-9" className="w-richtext">
                  <pre
                    className="code_embed-1 w-code-block language-javascript"
                    style={{
                      display: 'block',
                      overflowX: 'auto',
                      background: '#2b2b2b',
                      color: '#f8f8f2',
                      padding: '0.5em',
                    }}
                    tabIndex={0}
                  >
                    <code
                      className="language-javascript"
                      style={{ whiteSpace: 'pre' }}
                    >
                      {codeString}
                    </code>
                  </pre>
                </div>
              </div>
              <button
                fs-copyclip-element="click-9"
                fs-copyclip-message="Copied!"
                className="copy_button"
              >
                <div>Copy</div>
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6771bbc3c3d06393fbfdb57e/6776d6d105f1951f7b525f38_square-behind-square-1%2C%20copy%201%2C%20layers%2C%20pages.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descright2;
