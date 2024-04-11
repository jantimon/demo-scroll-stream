import { styled, keyframes } from "next-yak";

// The stroke-dashoffset and stroke-dasharray properties are used to animate the drawing of the lines.
// To hide the entire path at the beginning, the stroke-dasharray must be set to the total length of the path.
//
// These length are also used for the duration to animate all paths with the same speed.
const arrowLengths = [
  [1464, 20.99428367614746],
  [411.73699951171875, 20.994335174560547],
  [411.73699951171875, 20.994335174560547],
  [411.73699951171875, 20.994335174560547],
  [411.73699951171875, 20.994335174560547],
  [285.0400085449219, 21.00667953491211],
  [285.0400085449219, 21.00667953491211],
  [285.0400085449219, 21.00667953491211],
  [506.0718994140625, 21.00054931640625],
];

const arrowLenghtSum = arrowLengths.reduce(
  (acc, length) => acc + length[0] + length[1],
  0,
);

const arrowAppearanceOrder = [0, 1, 5, 2, 6, 7, 8, 4, 3];

export const SvgWidth = 766.325;
export const SvgHeight = 300.505;

export const AnimatedTimeLineSvg = (props: { className?: string }) => {
  const delays = arrowAppearanceOrder.map((_, i) => {
    const position = arrowAppearanceOrder.indexOf(i);
    let delay = 0;
    for (let j = 0; j < position; j++) {
      delay += arrowLengths[j][0] + arrowLengths[j][1];
    }
    return delay;
  });
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="766.325"
      height="300.505"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="19645.86 53497.44 1582.65 622.01"
      {...props}
    >
      <FadeOut>
        <g transform="translate(19682.51 54020.34)">
          <defs>
            <mask id="shape_OFuealbtFCgc1RsAscBvP_clip">
              <path fill="#fff" d="M-100 -100H1563.99V100H-100z"></path>
              <path fill="none" d="M1454.9-5.25l9.09 5.25-9.09 5.25"></path>
            </mask>
          </defs>
          <g mask="url(#shape_OFuealbtFCgc1RsAscBvP_clip)">
            <path fill="transparent" d="M-100 -100H1563.99V100H-100z"></path>
            <AnimatedLine
              $delay={delays[0]}
              $totalLength={arrowLengths[0][0]}
              fill="none"
              stroke="#e1e1e1"
              strokeDashoffset="none"
              strokeWidth="3.5"
              d="M0 0h1464"
            ></AnimatedLine>
          </g>
          <AnimatedLine
            $delay={delays[0] + arrowLengths[0][0]}
            $totalLength={arrowLengths[0][1]}
            fill="none"
            stroke="#e1e1e1"
            strokeWidth="3.5"
            d="M1454.9-5.25l9.09 5.25-9.09 5.25"
          ></AnimatedLine>
        </g>
        <g transform="translate(19700.5 53529.44)">
          <defs>
            <mask id="shape_-CNiWmuwtk-7bjPe17GSy_clip">
              <path fill="#fff" d="M-100 -100H100V511.73H-100z"></path>
              <path fill="none" d="M5.25 402.64L0 411.73l-5.25-9.09"></path>
            </mask>
          </defs>
          <g mask="url(#shape_-CNiWmuwtk-7bjPe17GSy_clip)">
            <path fill="transparent" d="M-100 -100H100V511.73H-100z"></path>
            <AnimatedLine
              $delay={delays[1]}
              $totalLength={arrowLengths[1][0]}
              fill="none"
              stroke="#b484d3"
              strokeDashoffset="none"
              strokeWidth="3.5"
              d="M0 0v411.737"
            ></AnimatedLine>
          </g>
          <AnimatedLine
            $delay={delays[1] + arrowLengths[1][0]}
            $totalLength={arrowLengths[1][1]}
            fill="none"
            stroke="#b484d3"
            strokeWidth="3.5"
            d="M5.25 402.64L0 411.73l-5.25-9.09"
          ></AnimatedLine>
          <TextWithFadeIn
            $start={5}
            $end={10}
            fill="#b484d3"
            stroke="#b484d3"
            strokeWidth="0"
            alignmentBaseline="mathematical"
            dominantBaseline="mathematical"
            fontFamily="sans-serif"
            fontSize="24"
          >
            <tspan x="6.525" y="12.5" alignmentBaseline="mathematical">
              Request
            </tspan>
          </TextWithFadeIn>
        </g>
        <Move $start={60} $end={70} $x={-250}>
          <Move $start={48} $end={50} $x={490} $y={1}>
            <g transform="translate(20011.67 53529.44)">
              <defs>
                <mask id="shape_RLAcIO8U_83MTbG84D_ap_clip">
                  <path fill="#fff" d="M-100 -100H100V511.73H-100z"></path>
                  <path fill="none" d="M5.25 402.64L0 411.73l-5.25-9.09"></path>
                </mask>
              </defs>
              <g mask="url(#shape_RLAcIO8U_83MTbG84D_ap_clip)">
                <path fill="transparent" d="M-100 -100H100V511.73H-100z"></path>
                <AnimatedLine
                  $delay={delays[2]}
                  $totalLength={arrowLengths[2][0]}
                  fill="none"
                  stroke="#b484d3"
                  strokeDashoffset="none"
                  strokeWidth="3.5"
                  d="M0 0v411.737"
                ></AnimatedLine>
              </g>
              <AnimatedLine
                $delay={delays[2] + arrowLengths[2][0]}
                $totalLength={arrowLengths[2][1]}
                fill="none"
                stroke="#b484d3"
                strokeWidth="3.5"
                d="M5.25 402.64L0 411.73l-5.25-9.09"
              ></AnimatedLine>

              <TextWithFadeIn
                $start={11}
                $end={16}
                fill="#b484d3"
                stroke="#b484d3"
                strokeWidth="0"
                alignmentBaseline="mathematical"
                dominantBaseline="mathematical"
                fontFamily="sans-serif"
                fontSize="24"
              >
                <tspan x="-64.525" y="12.5" alignmentBaseline="mathematical">
                  Shell
                </tspan>
              </TextWithFadeIn>
            </g>
          </Move>
        </Move>
        <Move $start={60} $end={70} $x={-250}>
          <Move $start={85} $end={90} $x={-110}>
            <g transform="translate(21152.78 53529.79)">
              <defs>
                <mask id="shape_4emqaMNauOmkRol8DKj9y_clip">
                  <path fill="#fff" d="M-100 -100H100V511.73H-100z"></path>
                  <path fill="none" d="M5.25 402.64L0 411.73l-5.25-9.09"></path>
                </mask>
              </defs>
              <g mask="url(#shape_4emqaMNauOmkRol8DKj9y_clip)">
                <path fill="transparent" d="M-100 -100H100V511.73H-100z"></path>
                <AnimatedLine
                  $delay={delays[3]}
                  $totalLength={arrowLengths[3][0]}
                  fill="none"
                  stroke="#b484d3"
                  strokeDashoffset="none"
                  strokeWidth="3.5"
                  d="M0 0v411.737"
                ></AnimatedLine>
              </g>
              <AnimatedLine
                $delay={delays[3] + arrowLengths[3][0]}
                $totalLength={arrowLengths[3][1]}
                fill="none"
                stroke="#b484d3"
                strokeWidth="3.5"
                d="M5.25 402.64L0 411.73l-5.25-9.09"
              ></AnimatedLine>
              <TextWithFadeIn
                $start={22}
                $end={27}
                fill="#b484d3"
                stroke="#b484d3"
                strokeWidth="0"
                alignmentBaseline="mathematical"
                dominantBaseline="mathematical"
                fontFamily="sans-serif"
                fontSize="24"
              >
                <tspan x="6.525" y="12.5" alignmentBaseline="mathematical">
                  TTI
                </tspan>
              </TextWithFadeIn>
            </g>
          </Move>
        </Move>
        <Move $start={60} $end={70} $x={-250}>
          <Move $start={48} $end={50} $x={-608}>
            <g transform="translate(21132.78 53529.79)">
              <defs>
                <mask id="shape_4emqaMNauOmkRol8DKj9y_clip">
                  <path fill="#fff" d="M-100 -100H100V511.73H-100z"></path>
                  <path fill="none" d="M5.25 402.64L0 411.73l-5.25-9.09"></path>
                </mask>
              </defs>
              <g mask="url(#shape_4emqaMNauOmkRol8DKj9y_clip)">
                <path fill="transparent" d="M-100 -100H100V511.73H-100z"></path>
                <AnimatedLine
                  $delay={delays[4]}
                  $totalLength={arrowLengths[4][0]}
                  fill="none"
                  stroke="#b484d3"
                  strokeDashoffset="none"
                  strokeWidth="3.5"
                  d="M0 0v411.737"
                ></AnimatedLine>
              </g>
              <AnimatedLine
                $delay={delays[4] + arrowLengths[4][0]}
                $totalLength={arrowLengths[4][1]}
                fill="none"
                stroke="#b484d3"
                strokeWidth="3.5"
                d="M5.25 402.64L0 411.73l-5.25-9.09"
              ></AnimatedLine>

              <Move $start={48} $end={50} $x={76}>
                <TextWithFadeIn
                  $start={19}
                  $end={24}
                  fill="#b484d3"
                  stroke="#b484d3"
                  strokeWidth="0"
                  alignmentBaseline="mathematical"
                  dominantBaseline="mathematical"
                  fontFamily="sans-serif"
                  fontSize="24"
                >
                  <tspan x="-64.525" y="12.5" alignmentBaseline="mathematical">
                    LCP
                  </tspan>
                </TextWithFadeIn>
              </Move>
            </g>
          </Move>
        </Move>
        <Move $start={60} $end={70} $x={-250}>
          <Move $start={48} $end={50} $x={538} $y={1}>
            <g transform="translate(19677.86 54065.07)">
              <defs>
                <mask id="shape_ps4IGLnLtebdfzz2XypE__clip">
                  <path fill="#fff" d="M-100 -100H385.04V100H-100z"></path>
                  <path fill="none" d="M275.94-5.25l9.1 5.25-9.1 5.24"></path>
                </mask>
              </defs>
              <g mask="url(#shape_ps4IGLnLtebdfzz2XypE__clip)">
                <path fill="transparent" d="M-100 -100H385.04V100H-100z"></path>
                <AnimatedLine
                  $delay={delays[5]}
                  $totalLength={arrowLengths[5][0]}
                  fill="none"
                  stroke="#ffc034"
                  strokeDashoffset="none"
                  strokeWidth="3.5"
                  d="M0 0h285.04"
                ></AnimatedLine>
              </g>
              <AnimatedLine
                $delay={delays[5] + arrowLengths[5][0]}
                $totalLength={arrowLengths[5][1]}
                fill="none"
                stroke="#ffc034"
                strokeWidth="3.5"
                d="M275.94-5.25l9.1 5.25-9.1 5.24"
              ></AnimatedLine>
              <TextWithFadeIn
                $start={10}
                $end={15}
                fill="#ffc034"
                stroke="#ffc034"
                strokeWidth="0"
                alignmentBaseline="mathematical"
                dominantBaseline="mathematical"
                fontFamily="sans-serif"
                fontSize="20"
              >
                <tspan x="2.525" y="-16.5" alignmentBaseline="mathematical">
                  HTML download
                </tspan>
              </TextWithFadeIn>
            </g>
          </Move>
        </Move>
        <Move $start={60} $end={70} $x={-250}>
          <Move $start={48} $end={50} $x={538} $y={1}>
            <g transform="translate(20002.48 54065.07)">
              <defs>
                <mask id="shape_fACsxL4N5JmU-rfygu3aL_clip">
                  <path fill="#fff" d="M-100 -100H385.04V100H-100z"></path>
                  <path fill="none" d="M275.94-5.25l9.1 5.25-9.1 5.24"></path>
                </mask>
              </defs>
              <g mask="url(#shape_fACsxL4N5JmU-rfygu3aL_clip)">
                <path fill="transparent" d="M-100 -100H385.04V100H-100z"></path>
                <ShrinkExecutionTime>
                  <AnimatedLine
                    $delay={delays[6]}
                    $totalLength={arrowLengths[6][0]}
                    fill="none"
                    stroke="#72C7F9"
                    strokeDashoffset="none"
                    strokeWidth="3.5"
                    d="M0 0h285.04"
                  ></AnimatedLine>
                </ShrinkExecutionTime>
              </g>
              <Move $start={85} $end={90} $x={-55}>
                <AnimatedLine
                  $delay={delays[6] + arrowLengths[6][0]}
                  $totalLength={arrowLengths[6][1]}
                  fill="none"
                  stroke="#72C7F9"
                  strokeWidth="3.5"
                  d="M275.94-5.25l9.1 5.25-9.1 5.24"
                ></AnimatedLine>
              </Move>
              <TextWithFadeIn
                $start={15}
                $end={20}
                fill="#72C7F9"
                stroke="#72C7F9"
                strokeWidth="0"
                alignmentBaseline="mathematical"
                dominantBaseline="mathematical"
                fontFamily="sans-serif"
                fontSize="20"
              >
                <tspan x="2.525" y="-16.5" alignmentBaseline="mathematical">
                  JS download
                </tspan>
              </TextWithFadeIn>
            </g>
          </Move>
        </Move>
        <Move $start={85} $end={90} $x={-55}>
          <Move $start={60} $end={70} $x={-250}>
            <Move $start={48} $end={50} $x={538} $y={1}>
              <g transform="translate(20322.4 54065.07)">
                <defs>
                  <mask id="shape_aPSpMF39WoCB35bWtYMSX_clip">
                    <path fill="#fff" d="M-100 -100H385.04V100H-100z"></path>
                    <path fill="none" d="M275.94-5.25l9.1 5.25-9.1 5.24"></path>
                  </mask>
                </defs>
                <g mask="url(#shape_aPSpMF39WoCB35bWtYMSX_clip)">
                  <path
                    fill="transparent"
                    d="M-100 -100H385.04V100H-100z"
                  ></path>
                  <ShrinkExecutionTime>
                    <AnimatedLine
                      $delay={delays[7]}
                      $totalLength={arrowLengths[7][0]}
                      fill="none"
                      stroke="#72C7F9"
                      strokeDashoffset="none"
                      strokeWidth="3.5"
                      d="M0 0h285.04"
                    ></AnimatedLine>
                  </ShrinkExecutionTime>
                </g>

                <Move $start={85} $end={90} $x={-55}>
                  <AnimatedLine
                    $delay={delays[7] + arrowLengths[7][0]}
                    $totalLength={arrowLengths[7][1]}
                    fill="none"
                    stroke="#72C7F9"
                    strokeWidth="3.5"
                    d="M275.94-5.25l9.1 5.25-9.1 5.24"
                  ></AnimatedLine>
                </Move>
                <TextWithFadeIn
                  $start={17}
                  $end={22}
                  fill="#72C7F9"
                  stroke="#72C7F9"
                  strokeWidth="0"
                  alignmentBaseline="mathematical"
                  dominantBaseline="mathematical"
                  fontFamily="sans-serif"
                  fontSize="20"
                >
                  <tspan x="2.525" y="-16.5" alignmentBaseline="mathematical">
                    JS hydration
                  </tspan>
                </TextWithFadeIn>
              </g>
            </Move>
          </Move>
        </Move>
        <Move $start={60} $end={70} $y={25}>
          <AnimatedDataTransferSSR>
            <g transform="translate(20622.88 54065.07)">
              <defs>
                <mask id="shape_hegyohVZDOSbULy3VlKI6_clip">
                  <path
                    fill="#fff"
                    d="M-85.256 -100H620.804V101.37H-85.256z"
                  ></path>
                  <path fill="none" d="M511.7-5.225L520.81 0l-9.08 5.27"></path>
                </mask>
              </defs>
              <g mask="url(#shape_hegyohVZDOSbULy3VlKI6_clip)">
                <path
                  fill="transparent"
                  d="M-100 -100H606.06V101.37H-100z"
                ></path>
                <AnimatedLine
                  $delay={delays[8]}
                  $totalLength={arrowLengths[8][0]}
                  fill="none"
                  stroke="#40c057"
                  strokeDashoffset="none"
                  strokeWidth="3.5"
                  d="M14.744 1.377L520.814 0"
                ></AnimatedLine>
              </g>
              <AnimatedLine
                $delay={delays[8] + arrowLengths[8][0]}
                $totalLength={arrowLengths[8][1]}
                fill="none"
                stroke="#40c057"
                strokeWidth="3.5"
                d="M511.7-5.225L520.81 0l-9.08 5.27"
              ></AnimatedLine>
              <TextWithFadeIn
                $start={19}
                $end={24}
                fill="#40c057"
                stroke="#40c057"
                strokeWidth="0"
                alignmentBaseline="mathematical"
                dominantBaseline="mathematical"
                fontFamily="sans-serif"
                fontSize="20"
              >
                <tspan x="14.525" y="16.5" alignmentBaseline="mathematical">
                  Data Loading
                </tspan>
              </TextWithFadeIn>
            </g>
          </AnimatedDataTransferSSR>
        </Move>
      </FadeOut>
    </svg>
  );
};

const drawAnimation = keyframes`
    to {
        stroke-dashoffset: 0;
    }
`;

const AnimatedLine = styled.path<{ $delay: number; $totalLength: number }>`
  stroke-dasharray: ${({ $totalLength }) => $totalLength};
  stroke-dashoffset: ${({ $totalLength }) => $totalLength};
  animation: ${drawAnimation} forwards;
  animation-timeline: scroll();
  animation-range: cover
    ${({ $totalLength, $delay }) => (($delay / arrowLenghtSum) * 100) / 4}%
    cover
    ${({ $totalLength, $delay }) =>
      (($totalLength / arrowLenghtSum + $delay / arrowLenghtSum) * 100) / 4}%;
`;

const moveTransform = keyframes`
  to {
    transform: translate(var(--x), var(--y));
  }
`;

const moveYStepTransform = keyframes`
  0% {
    transform: translate(0, 0);
  }
  5% {
    transform: translate(0, var(--y-step));
  }
  95% {
    transform: translate(var(--x), var(--y-step));
  }
  100% {
    transform: translate(var(--x), var(--y));
  }
`;

const AnimatedDataTransferSSR = styled.g`
  --x: -960px;
  --y: -1px;
  --y-step: 25px;
  animation: ${moveYStepTransform} forwards;
  animation-timeline: scroll();
  animation-range: cover 40% cover 50%;
`;

const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const FadeOut = styled.g`
  animation: ${fadeOutAnimation} forwards;
  animation-timeline: scroll();
  animation-range: cover 95% cover 100%;
`;

const shrinkAndMoveTransform = keyframes`
  to {
    transform: scaleX(var(--scaleX));
  }
`;

const ShrinkExecutionTime = styled.g`
  transform-origin: 0 0;
  --scaleX: 0.8;
  animation: ${shrinkAndMoveTransform} forwards;
  animation-timeline: scroll();
  animation-range: cover 85% cover 90%;
`;

const Move = styled.g<{
  $x?: number;
  $y?: number;
  $start: number;
  $end: number;
}>`
  --x: ${({ $x }) => $x || 0}px;
  --y: ${({ $y }) => $y || 0}px;
  animation: ${moveTransform} forwards;
  animation-timeline: scroll();
  animation-range: cover ${({ $start }) => $start}% cover ${({ $end }) => $end}%;
`;

const fadeInAnimation = keyframes`
  to {
    opacity: 1;
  }
`;

const TextWithFadeIn = styled.text<{ $start: number; $end: number }>`
  opacity: 0;
  animation: ${fadeInAnimation} 1s forwards;
  animation-timeline: scroll();
  animation-range: cover ${({ $start }) => $start}% cover ${({ $end }) => $end}%;
`;
