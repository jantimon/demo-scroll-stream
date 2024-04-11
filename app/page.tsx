import { styled } from "next-yak";
import { AnimatedTimeLineSvg } from "./AnimatedTimeLineSvg";

export default function Home() {
  return (
    <>
      <main
        id="top"
        className="flex min-h-screen flex-col items-center justify-between sm:px-24 px-4"
      >
        <Container className="z-10 max-w-5xl w-full justify-between font-mono text-sm lg:flex flex-col">
          <StickySvgWrapper className="bg">
            <ResponsiveSvg></ResponsiveSvg>
          </StickySvgWrapper>
          <Content>
            <Section>
              <h1 id="intro" className="text-3xl font-bold mb-4">
                Website Loading Strategies
              </h1>
              <p>On most modern websites users have to wait for two things:</p>
              <ol className="list-decimal list-inside my-4">
                <li>
                  <span style={{ color: "#40c057" }}>dynamic content</span> to
                  see the most important information of the website (measured as{" "}
                  <a
                    title="Largest Contentful Paint"
                    href="https://web.dev/articles/lcp"
                    target="_blank"
                    style={{ color: "#b484d3" }}
                  >
                    LCP
                  </a>
                  )
                </li>
                <li>
                  <span style={{ color: "#72C7F9" }}>javascript</span> to
                  interact with the dynamic parts of the website (measured as{" "}
                  <a
                    title="Time to Interactive"
                    href="https://web.dev/articles/tti"
                    target="_blank"
                    style={{ color: "#b484d3" }}
                  >
                    TTI
                  </a>
                  )
                </li>
              </ol>
              <p>
                Let's explore different strategies which try to improve these
                metrics:
              </p>
              <ul className="list-disc list-inside my-4">
                <li>
                  <a href="#csr">Client Side Rendering</a>
                </li>
                <li>
                  <a href="#ssr">Server Side Rendering</a>
                </li>
                <li>
                  <a href="#sss">Server Side Streaming</a>
                </li>
                <li>
                  <a href="#rsc">React Server Components</a>
                </li>
              </ul>
              <br />
              <br />↓ Scroll down to start ↓
            </Section>
          </Content>
          <Content>
            <Section>
              <h2 id="csr" className="text-2xl my-4">
                Client Side Rendering
              </h2>

              <p>
                Client side rendering is a common way to build web applications.
                It is easy to develop and deploy. The server sends an{" "}
                <span style={{ color: "#ffc034" }}>
                  HTML Document without the content
                </span>{" "}
                to trigger the{" "}
                <span style={{ color: "#72C7F9" }}>client side javascript</span>{" "}
                download. Once the{" "}
                <span style={{ color: "#72C7F9" }}>
                  javascript has been executed
                </span>{" "}
                on the client, the javascript code loads{" "}
                <span style={{ color: "#40c057" }}>
                  the data for the dynamic content
                </span>{" "}
                from the server and renders an interactive page.
              </p>
            </Section>

            <Section>
              <h2 id="ssr" className="text-2xl my-4">
                Server Side Rendering
              </h2>

              <p>
                With frameworks like Next.js, SSR became easier to implement. It
                allows moving the{" "}
                <span style={{ color: "#40c057" }}>data download</span> to the
                server and renders the html with the content. That way the
                server is able to send the{" "}
                <span style={{ color: "#ffc034" }}>fully rendered HTML</span> to
                the client and provide the{" "}
                <span style={{ color: "#b484d3" }}>LCP</span> without
                javascript. Once the{" "}
                <span style={{ color: "#72C7F9" }}>
                  javascript is downloaded and executed
                </span>
                , the page becomes interactive (
                <span style={{ color: "#b484d3" }}>TTI</span>).
              </p>
            </Section>

            <Section>
              <h2 id="sss" className="text-2xl my-4">
                Server Side Streaming
              </h2>

              <p>
                With streaming the HTML generation and{" "}
                <span style={{ color: "#ffc034" }}> HTML download</span> can
                start even before the{" "}
                <span style={{ color: "#40c057" }}>
                  dynamic content is fully loaded
                </span>
                . Therefore the{" "}
                <span style={{ color: "#72C7F9" }}>javascript download</span>{" "}
                can start earlier to further improve the{" "}
                <span style={{ color: "#b484d3" }}>TTI</span>.
              </p>
            </Section>

            <Section>
              <h2 id="rsc" className="text-2xl my-4">
                React Server Components
              </h2>

              <p>
                Server Side Streaming can be combined with React Server
                Components. React Server Components reduce the amount of
                components which have to be hydrated on the client. With less{" "}
                <span style={{ color: "#72C7F9" }}>
                  javascript to download and to execute (hydration)
                </span>{" "}
                the page becomes interactive faster (
                <span style={{ color: "#b484d3" }}>TTI</span>).
              </p>
            </Section>
          </Content>
          <a
            href="#top"
            style={{ color: "inherit" }}
            className="text-right text-xs"
          >
            ↑ back to top ↑
          </a>
        </Container>
      </main>
      <Warning aria-hidden="true">
        Please use a browser that supports{" "}
        <a href="https://caniuse.com/mdn-css_properties_animation-timeline">
          css scroll based animations
        </a>
      </Warning>
    </>
  );
}

const Warning = styled.div`
  @supports (animation-timeline: scroll()) {
    display: none;
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px;
  z-index: 1000;
  background: #f11c40;
  text-align: center;
  font-size: 0.8rem;
  a {
    color: #f3e7e9;
    text-decoration: underline;
  }
`;

const ResponsiveSvg = styled(AnimatedTimeLineSvg)`
  width: 100%;
  height: auto;
`;

const StickySvgWrapper = styled.div`
  position: sticky;
  top: 0;
  padding-bottom: 40px;

  visibility: hidden;
  @supports (animation-timeline: scroll()) {
    visibility: visible;
  }
  mask-image: linear-gradient(to top, transparent, #000000 40px);
`;

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Container = styled.div`
  container-type: inline-size;
  [id]::before {
    --anchor-offset: calc(100cqw * (300.505 / 766.325) + 40px);
    content: "";
    display: block;
    height: var(--anchor-offset);
    margin-top: calc(var(--anchor-offset) * -1);
    visibility: hidden;
    pointer-events: none;
  }
`;

const Section = styled.section`
  padding-bottom: calc(100vh - 100cqw * (300.505 / 766.325) + 40px);
`;
