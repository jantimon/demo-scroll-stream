import { Arrow } from "./svg/line";
import { keyframes, styled } from "next-yak";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 px-2">
      <div
        className="z-10 max-w-5xl w-full justify-between font-mono text-sm lg:flex flex-col"
        style={{ containerType: "inline-size" }}
      >
        <SvgWrapper>
          <StickySvg
            xmlns="http://www.w3.org/2000/svg"
            width="766.325"
            height="300.505"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="19645.86 53497.44 1532.65 601.01"
          >
            <Arrow order={[0, 1, 5, 2, 6, 7, 8, 4, 3]} />
          </StickySvg>
        </SvgWrapper>
        <Content>
          <Section>
            <h1 className="text-3xl font-bold mb-4">Web Loading Strategies</h1>

            <p>
              This article is about optimizing LCP and TTI.
              <br />
              <br />
              ↓ Scroll down ↓
            </p>
          </Section>
        </Content>
        <Content>
          <Section>
            <h2 className="text-2xl my-4">Client Side Rendering</h2>

            <p>
              Client side rendering is a common way to build web applications.
              It is easy to develop and deploy. Once the client side javascript
              has been executed on the client it loads the data from the server
              and renders the page.
            </p>
          </Section>

          <Section>
            <h2 className="text-2xl my-4">Server Side Rendering</h2>

            <p>
              With frameworks like Next.js, SSR became easier to implement. The
              server loads the data and renders the page afterwards. Once
              rendered on the client, the client side javascript is executed to
              add interactivity.
            </p>
          </Section>

          <Section>
            <h2 className="text-2xl my-4">
              Server Side Rendering with Streaming
            </h2>

            <p>
              With streaming the HTML generation can start before the data is fully loaded. This can reduce the time to first byte and improve the LCP.
            </p>
          </Section>
        </Content>
      </div>
    </main>
  );
}

const StickySvg = styled.svg`
  width: 100%;
  height: auto;
`;

const SvgWrapper = styled.div`
  position: sticky;
  top: 0;
  padding-bottom: 40px;
`;

const Content = styled.div`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    to bottom,
    #f3e7e900 0,
    #f3e7e900 0px,
    #f3e7e98a 25px,
    #f3e7e9ff 50px,
    #f3e7e9 100%
  );
  background-size: 100% 100%;
  background-position: 0 calc(100cqw * (300.505 / 766.325) + 20px);
  background-clip: text;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const Section = styled.section`
  height: calc(100vh - 100cqw * (300.505 / 766.325) + 20px);
`;
