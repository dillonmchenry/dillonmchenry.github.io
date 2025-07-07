import React, { useEffect, useRef } from 'react';
import interests from './img/interests_nav.png';
import portrait from './img/portrait.jpg';
import './css/App.css';
import './css/styles.css';
import guitarHero from './img/guitarhero.png';
import rake from './img/rake.png';
import picwell from './img/picwell.png';
import foolsgold from './img/foolsgold.png';
import therapynotes from './img/therapynotes.png';
import seamcarving from './img/seamcarving.png';
import steam from './img/steam.png';
import wildhaven from './img/WildHaven.png';
import music from './img/magenta.png';
import linkedin from './img/linkedin.png';
import gmail from './img/gmail.png';
import gsap from 'gsap';
import MorphSVGPlugin from 'gsap/MorphSVGPlugin';
gsap.registerPlugin(MorphSVGPlugin);

function App() {
  const whoWiggle = useRef<SVGPathElement>(null);
  const projWiggle = useRef<SVGPathElement>(null);
  const skillWiggle = useRef<SVGPathElement>(null);
  const contactWiggle = useRef<SVGPathElement>(null);

  useEffect(() => {
    var bgDots = document.getElementsByClassName("bg");
    Array.from(bgDots).forEach((dot) => {
      (dot as HTMLElement).style.animationDelay = `${-1*Math.random()*5}s`;
    });

    MorphSVGPlugin.convertToPath('rect');
    Array.from(bgDots).forEach((dot) => {
      const rand = Math.random();
      gsap.to(dot, { duration: rand + .5, morphSVG: "#star", x: -3, y: -3, repeat: -1, delay: 3*rand + .5, yoyo: true});
    });

    const wiggles = [whoWiggle, projWiggle, skillWiggle, contactWiggle];
    const links = ["WhoNav", "ProjectsNav", "UXNav", "ContactNav"];

    ["mouseover", "focus"].forEach((eventName) => {
      wiggles.forEach((wiggle, i) => {
        document.getElementById(links[i])?.addEventListener(eventName, () => {
          gsap.to(wiggle.current, { duration: 0.25, morphSVG: "#NavArrow" });
        })
      })
    });

    ["blur", "mouseleave"].forEach((eventName) => {
      wiggles.forEach((wiggle, i) => {
        if (!wiggle.current) { return; }

        document.getElementById(links[i])?.addEventListener(eventName, () => {
          gsap.to(wiggle.current, { duration: 0.25, morphSVG: wiggle.current! });
        });
      });
    });
  });
  return (
    <div className="App">
      <nav>
          <path id="NavArrow" d="M90.301 316.14V8C90.301 5.23858 92.5396 3 95.301 3H630.94C633.701 3 635.94 5.23858 635.94 8V316.14C635.94 318.901 638.178 321.14 640.94 321.14H711.004C715.992 321.14 717.905 327.642 713.712 330.343L359.897 558.245C358.24 559.313 356.109 559.306 354.458 558.229L5.08485 330.327C0.91974 327.61 2.84368 321.14 7.81662 321.14H85.301C88.0625 321.14 90.301 318.901 90.301 316.14Z" stroke="#4E0C62" stroke-width="5"/>              
          <div className="content-wrap">
                <a id="WhoNav" href="#who">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 763 574" fill="none">
                    <g filter="url(#filter0_d_26_6)">
                    <path id="WhoWiggle" ref={ whoWiggle } fill-rule="evenodd" clip-rule="evenodd" d="M8.99996 62.5C19.9692 39.4644 25.2983 22.6331 27.565 12.3929C28.7598 6.99494 33.4861 2.50662 39.0147 2.51477L698.676 3.48772C703.271 3.4945 707.783 6.96116 708.5 11.5001C710 21.0001 682 58 682 58C670.003 79.3469 663 102.5 667 112.5C671 122.5 688 131.5 692.5 137C697 142.5 742 206.5 740.5 227C739 247.5 720 278 714 289C708.597 298.906 702.467 324.468 701.225 351.144C700.99 356.195 704.813 360.483 709.538 362.283C714.555 364.194 720.648 367.594 724.5 373.5C732 385 739.743 442.264 732.5 454C726.586 463.583 691.325 497.521 678.587 509.651C675.785 512.319 674.793 516.342 675.859 520.061C677.92 527.255 679.078 533.252 679.785 539.43C680.725 547.637 671.274 552.739 664.403 548.154C648.176 537.326 624.619 522.387 615.5 520.5C601 517.5 552 543.5 540 544.5C528.935 545.422 494.065 540.818 488.697 540.095C488.216 540.03 487.758 539.93 487.292 539.795C434.174 524.45 403.284 521.404 346.5 528C306.023 535.403 276 552.5 244.5 552C210.321 548.919 170.2 529.596 148.5 526C131.585 525.004 117.079 528.66 94.5 541C78 549 56.0919 542.582 44.5 538.5C32.908 534.418 17.9769 527.3 19 518C19.9804 509.087 21.5568 502.171 28.1164 493.183C28.6925 492.394 29.4161 491.699 30.2074 491.126C60.549 469.143 71.8284 459.788 68.6585 444.708C68.56 444.24 68.4063 443.762 68.2286 443.317C59.7486 422.106 55.874 424.052 44 429C27.4999 435 14.7607 405.764 20.5 390C22.5228 384.444 25.7047 369.014 26.9626 362.723C27.3196 360.937 27.7957 359.097 28.4614 357.402C29.9807 353.535 33.8987 343.916 44 320C60.6836 280.5 13.9733 289.741 5.99997 283C-1.90681 276.315 6.62652 262.871 28.446 199.608C28.8068 198.562 29 197.435 29 196.329V139.5C28.9999 127.705 23.0931 115.91 17.3533 104.449C9.95397 89.6736 2.83215 75.4525 8.99996 62.5Z" fill="#FFE2C9"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_26_6" x="0.602478" y="0.0146484" width="761.434" height="573.496" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="12" dy="12"/>
                    <feGaussianBlur stdDeviation="3.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_6"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_26_6" result="shape"/>
                    </filter>
                    </defs>
                  </svg>
                <h2>Who?</h2>
              </a>
              <a id="ProjectsNav" href="#projects">
                <svg viewBox="0 0 762 585" fill="none">
                  <g filter="url(#filter0_d_26_7)">
                    <path ref={ projWiggle } fill-rule="evenodd" clip-rule="evenodd" d="M28.8731 95.1021C29.1546 91.4359 28.8731 74 28.8731 59.5C28.8731 49.5 22.6334 26.977 17.7714 11.8997V11.8997C16.224 7.10093 19.9887 3.00603 25.0309 3.01347L693.897 4H698.921C703.857 4 708.04 7.60174 708.32 12.5295C708.822 21.3666 708.583 35.1052 703.5 44C698.441 52.8532 699.38 61.7064 700.628 73.4677C701.354 80.3051 702.184 88.1254 702 97.5C701.745 110.5 696.422 117.912 690.734 125.832C685.266 133.446 679.461 141.53 677.5 155.5C675.087 172.695 687.924 179.698 700.598 186.611C708.93 191.156 717.191 195.662 721 203C730.603 221.5 717.5 249.5 711.397 258C705.294 266.5 699 296 698 319C697.82 323.14 697.446 326.729 697.077 329.983L697.055 330.184L697.035 330.353L697.032 330.38L697.029 330.411L696.994 330.716L696.991 330.747L696.935 331.229L696.925 331.322L696.921 331.357C695.322 345.314 694.401 353.348 711.397 374C732.794 400 749 480 735.5 503C734.518 504.673 733.552 506.364 732.584 508.057C720.25 529.641 707.768 551.482 661.5 538.5C642.318 533.118 629.682 525.889 620.173 520.448C604.946 511.736 597.735 507.611 584.5 523C563 548 534.535 556.278 520 543.5C505.465 530.722 416.469 504.161 404.5 514.5C400.346 518.088 403.29 526.472 406.378 535.263C412.188 551.806 418.505 569.795 379 560C348.541 552.448 342.415 544.769 337.46 538.559C332.574 532.434 328.827 527.738 304 526C275.235 523.986 266.825 526.772 258.872 529.406C253 531.35 247.378 533.212 234 533C211.625 530.983 206.546 532.25 196.448 534.768C191.12 536.096 184.397 537.773 173 539.5C164.503 540.787 156.176 541.754 148.11 542.69C124.855 545.39 103.764 547.838 87 557C70.5 565 49.0919 561.082 37.5 557C25.9081 552.918 16.4769 535.8 17.5 526.5C18.5231 517.2 26.2757 483.655 29 479C29.4577 478.218 30.4919 476.626 31.892 474.472C38.8256 463.803 54.7305 439.329 54 431C53.9252 430.147 53.8559 429.255 53.7843 428.333C53.015 418.427 51.9781 405.074 41 400.5C39.5858 399.911 38.3035 399.391 37.1335 398.918L36.6407 398.72C28.283 395.347 25.8266 394.355 21.5 387C16.5 378.5 15 353 17.5 344C20 335 25 321.5 38.5 294.5C52 267.5 36 238.5 23.5 236C13.7292 234.046 11.2904 227.204 7.10929 215.474C6.18804 212.889 5.18221 210.067 3.99473 207.008C3.35528 205.361 3.13165 203.578 3.38156 201.829L6.87828 177.352C6.95928 176.785 7.08896 176.226 7.26523 175.681C9.73972 168.031 12.0948 160.467 14.4115 152.988L14.5907 152.409L15.4373 149.674C18.2812 140.486 21.0851 131.428 23.9999 122.5C27.6216 111.407 28.0743 105.51 28.8731 95.1021Z" fill="#AEEDB5"/>
                  </g>
                  <defs>
                  <filter id="filter0_d_26_7" x="0.781555" y="0.513428" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="12" dy="12"/>
                  <feGaussianBlur stdDeviation="3.5"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_6"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_26_6" result="shape"/>
                  </filter>
                  </defs>
                </svg>
                <h2>Coding</h2>
              </a>
              <a id="UXNav" href="#Research">
                <svg viewBox="0 0 765 600" fill="none">
                  <g filter="url(#filter0_d_41_12)">
                  <path ref={skillWiggle} d="M13.5 78.5C5.09015 49.0418 3.32868 32.5069 3 3H748C748 3 753 14.5 748 28C743 41.5 717.5 51.5 714 78.5C710.5 105.5 738 136.5 738 162.5C738 188.5 708.5 209.5 709 234.5C709.5 259.5 719 264.5 726 283C733 301.5 732.002 368.409 714 385C695.998 401.591 699.5 433 704.5 445C709.5 457 729.5 473.5 726 484.5C722.5 495.5 718 508 688 516.5C658 525 655.5 493 627.5 498C599.5 503 582.5 521.5 559 523.134C535.5 524.769 465 497.134 446 497.134C427 497.134 404 523.034 390 524C376 524.966 341 510 327.5 510C314 510 259.5 524 240.5 524C221.5 524 158 510 152.5 511.5C147 513 96.5 527.5 89 531C81.5 534.5 39.1931 552.965 38 522C36.8069 491.035 26.4627 484.767 21 479C15.5373 473.233 14.5 452 18 438.5C21.5 425 40 385 43.5 377.5C47 370 49.7624 334.824 47.5 323C45.2376 311.176 39.8468 297.028 30 286.5C25.2297 275.646 24.5 254 26 246.5L35 176C35 162.5 31.1111 116 30 113.5C28.8889 111 19.9254 95.3355 13.5 78.5Z" />
                  </g>
                  <defs>
                  <filter id="filter0_d_41_12" x="0.471985" y="0.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="10" dy="10"/>
                  <feGaussianBlur stdDeviation="1"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_41_12"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_41_12" result="shape"/>
                  </filter>
                  </defs>
                </svg>
                <h2>UI/UX</h2>
              </a>
              <a id="ContactNav" href="#Research">
                <svg viewBox="0 0 765 600" fill="none">
                  <g filter="url(#filter0_d_41_12)">
                  <path ref={contactWiggle} d="M13.5 78.5C5.09015 49.0418 3.32868 32.5069 3 3H748C748 3 753 14.5 748 28C743 41.5 717.5 51.5 714 78.5C710.5 105.5 755.934 133.336 738 162.5C720.066 191.664 683.711 220.456 709 234.5C734.289 248.544 687.848 315.223 717.5 327C747.152 338.777 732.002 368.409 714 385C695.998 401.591 699.5 433 704.5 445C709.5 457 729.5 473.5 726 484.5C722.5 495.5 718 508 688 516.5C658 525 655.5 493 627.5 498C599.5 503 587.5 534.366 564 536C540.5 537.634 525 498 488.5 491C452 484 451 511.5 404 516.5C357 521.5 363 495 327.5 510C292 525 259.5 524 240.5 524C221.5 524 183.5 498 160.5 495C137.5 492 96.5 527.5 89 531C81.5 534.5 39.1931 552.965 38 522C36.8069 491.035 26.4627 484.767 21 479C15.5373 473.233 14.5 452 18 438.5C21.5 425 27.5612 377.822 43.5 377.5C59.4388 377.178 52.754 343.629 47.5 323C42.246 302.371 39.8468 297.028 30 286.5C25.2297 275.646 8 273 20.5 241.5C33 210 21 208.5 20.5 179.5C20 150.5 31.1111 116 30 113.5C28.8889 111 19.9254 95.3355 13.5 78.5Z" fill="#FFC4E2"/>
                  </g>
                  <defs>
                  <filter id="filter0_d_41_12" x="0.471985" y="0.5" width="764.25" height="553.651" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="10" dy="10"/>
                  <feGaussianBlur stdDeviation="1"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_41_12"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_41_12" result="shape"/>
                  </filter>
                  </defs>
                </svg>
                <h2>Contact</h2>
              </a>
          </div>
      </nav>
      <header>
        <div className="content-wrap">
          <svg viewBox="0 0 700 389" id="NameContainer">
            <path className="d" d="M 78 70 L86 125 L109 195 L168 143 Z" stroke="#7C6ED8"
                  fill="none" />
            <path className="i" d="M 250 168 L234 100 M230 64 L202 60 L211 45 L228 47 Z" stroke="#7C6ED8"
                  fill="none" />
            <path className="l1" d="M 298 160 L279 35" stroke="#7C6ED8"
                  fill="none" />
            <path className="l2" d="M 350 155 L343 80 L329 30" stroke="#7C6ED8"
                  fill="none" />
            <path className="o" d="M 404 135 L388 89 L435 86 L440 133 Z" stroke="#7C6ED8"
                  fill="none" />
            <path className="n1" d="M 477 133 L486 61 L513 96 L560 120 L542 51" stroke="#7C6ED8"
                  fill="none" />
            <path className="m" d="M 60 350 L72 252 L109 312 L122 240 L140 315" stroke="#7C6ED8"
                  fill="none" />
            <path className="c" d="M 203 230 L178 256 L214 278" stroke="#7C6ED8"
                  fill="none" />
            <path className="h" d="M 259 223 L273 281 L266 345 M 273 282 L310 268 M 318 223 L310 268 L326 323" stroke="#7C6ED8"
                  fill="none" />
            <path className="e" d="M 407 309 L369 311 L353 280 L366 244 L405 270 L353 280" stroke="#7C6ED8"
                  fill="none" />
            <path className="n2" d="M 444 306 L443 244 L486 278 L467 225" stroke="#7C6ED8"
                  fill="none" />
            <path className="r" d="M 524 288 L521 244 L505 202 L558 221 L521 245 L573 270" stroke="#7C6ED8"
                  fill="none" />
            <path className="y" d="M 629 268 L616 230 L560 181 M 616 230 L625 191 L646 166" stroke="#7C6ED8"
                  fill="none" />
            {/* D */}
            <circle r="2" cx="78" cy="70" className="d circle" />
            <circle r="2" cx="86" cy="125" className="d circle" />
            <circle r="2" cx="109" cy="195" className="d circle" />
            <circle r="2" cx="168" cy="143" className="d circle" />

            {/* I */}
            <circle r="2" cx="250" cy="168" className="i circle" />
            <circle r="2" cx="234" cy="100" className="i circle" />
            <circle r="2" cx="230" cy="64" className="i circle" />
            <circle r="2" cx="202" cy="60" className="i circle" />
            <circle r="2" cx="211" cy="45" className="i circle" />
            <circle r="2" cx="228" cy="47" className="i circle" />

            {/* L */}
            <circle r="2" cx="298" cy="160" className="l1 circle" />
            <circle r="2" cx="279" cy="35" className="l1 circle" />

            {/* L */}
            <circle r="2" cx="350" cy="155" className="l2 circle" />
            <circle r="2" cx="343" cy="80" className="l2 circle" />
            <circle r="2" cx="329" cy="30" className="l2 circle" />

            {/* O */}
            <circle r="2" cx="404" cy="135" className="o circle" />
            <circle r="2" cx="388" cy="89" className="o circle" />
            <circle r="2" cx="435" cy="86" className="o circle" />
            <circle r="2" cx="440" cy="133" className="o circle" />

            {/* N */}
            <circle r="2" cx="477" cy="133" className="n1 circle" />
            <circle r="2" cx="486" cy="61" className="n1 circle" />
            <circle r="2" cx="513" cy="96" className="n1 circle" />
            <circle r="2" cx="560" cy="120" className="n1 circle" />
            <circle r="2" cx="542" cy="51" className="n1 circle" />

            {/* M */}
            <circle r="2" cx="60" cy="350" className="m circle" />
            <circle r="2" cx="72" cy="252" className="m circle" />
            <circle r="2" cx="109" cy="312" className="m circle" />
            <circle r="2" cx="122" cy="240" className="m circle" />
            <circle r="2" cx="140" cy="315" className="m circle" />

            {/* C */}
            <circle r="2" cx="203" cy="230" className="c circle" />
            <circle r="2" cx="178" cy="256" className="c circle" />
            <circle r="2" cx="214" cy="278" className="c circle" />

            {/* H */}
            <circle r="2" cx="259" cy="223" className="h circle" />
            <circle r="2" cx="273" cy="281" className="h circle" />
            <circle r="2" cx="266" cy="345" className="h circle" />
            <circle r="2" cx="310" cy="268" className="h circle" />
            <circle r="2" cx="318" cy="223" className="h circle" />
            <circle r="2" cx="326" cy="323" className="h circle" />

            {/* E */}
            <circle r="2" cx="407" cy="309" className="e circle" />
            <circle r="2" cx="369" cy="311" className="e circle" />
            <circle r="2" cx="353" cy="280" className="e circle" />
            <circle r="2" cx="366" cy="244" className="e circle" />
            <circle r="2" cx="405" cy="270" className="e circle" />

            {/* N */}
            <circle r="2" cx="444" cy="306" className="n2 circle" />
            <circle r="2" cx="443" cy="244" className="n2 circle" />
            <circle r="2" cx="486" cy="278" className="n2 circle" />
            <circle r="2" cx="467" cy="225" className="n2 circle" />

            {/* R */}
            <circle r="2" cx="524" cy="288" className="r circle" />
            <circle r="2" cx="521" cy="244" className="r circle" />
            <circle r="2" cx="505" cy="202" className="r circle" />
            <circle r="2" cx="558" cy="221" className="r circle" />
            <circle r="2" cx="573" cy="270" className="r circle" />

            {/* Y */}
            <circle r="2" cx="629" cy="268" className="y circle" />
            <circle r="2" cx="616" cy="230" className="y circle" />
            <circle r="2" cx="560" cy="181" className="y circle" />
            <circle r="2" cx="625" cy="191" className="y circle" />
            <circle r="2" cx="646" cy="166" className="y circle" />

            {/* Background */}
            <svg className="star-wrapper" transform='translate(134 217)'>
              <path className="circle bg" d="M10,4 A6,6 0 1,0 -2,4 A6,6 0 1,0 10,4" fill="#7C6ED8"/>
            </svg>
            <path id="star" d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="#7C6ED8"/>
            <svg className="star-wrapper" transform="translate(122,50)">
              <path className="circle bg" d="M10,4 A6,6 0 1,0 -2,4 A6,6 0 1,0 10,4" fill="#7C6ED8"/>
            </svg>
            <svg className="star-wrapper" transform="translate(392,172)">
              <path className="circle bg" d="M10,4 A6,6 0 1,0 -2,4 A6,6 0 1,0 10,4" fill="#7C6ED8"/>
            </svg>
            <svg className="star-wrapper" transform="translate(581,367)">
              <path className="circle bg" d="M10,4 A6,6 0 1,0 -2,4 A6,6 0 1,0 10,4" fill="#7C6ED8"/>
            </svg>
            <svg className="star-wrapper" transform="translate(681,38)">
              <path className="circle bg" d="M10,4 A6,6 0 1,0 -2,4 A6,6 0 1,0 10,4" fill="#7C6ED8"/>
            </svg>
            <svg className="star-wrapper" transform="translate(98,361)">
              <path className="circle bg" d="M10,4 A6,6 0 1,0 -2,4 A6,6 0 1,0 10,4" fill="#7C6ED8"/>
            </svg>
            <svg className="star-wrapper" transform="translate(188,12)">
              <path className="circle bg" d="M10,4 A6,6 0 1,0 -2,4 A6,6 0 1,0 10,4" fill="#7C6ED8"/>
            </svg>
            <svg className="star-wrapper" transform="translate(383,17)">
              <path className="circle bg" d="M10,4 A6,6 0 1,0 -2,4 A6,6 0 1,0 10,4" fill="#7C6ED8"/>
            </svg>
            <svg className="star-wrapper" transform="translate(207,330)">
              <path className="circle bg" d="M10,4 A6,6 0 1,0 -2,4 A6,6 0 1,0 10,4" fill="#7C6ED8"/>
            </svg>
            <svg className="star-wrapper" transform="translate(680,186)">
              <path className="circle bg" d="M10,4 A6,6 0 1,0 -2,4 A6,6 0 1,0 10,4" fill="#7C6ED8"/>
            </svg>
            <svg className="star-wrapper" transform="translate(415,361)">
              <path className="circle bg" d="M10,4 A6,6 0 1,0 -2,4 A6,6 0 1,0 10,4" fill="#7C6ED8"/>
            </svg>
            <svg className="star-wrapper" transform="translate(60,204)">
              <path className="circle bg" d="M10,4 A6,6 0 1,0 -2,4 A6,6 0 1,0 10,4" fill="#7C6ED8"/>
            </svg>
            <svg className="star-wrapper" transform="translate(669,109)">
              <path className="circle bg" d="M10,4 A6,6 0 1,0 -2,4 A6,6 0 1,0 10,4" fill="#7C6ED8"/>
            </svg>
            <svg className="star-wrapper" transform="translate(172,373)">
              <path className="circle bg" d="M10,4 A6,6 0 1,0 -2,4 A6,6 0 1,0 10,4" fill="#7C6ED8"/>
            </svg>
            <svg className="star-wrapper" transform="translate(34,153)">
              <path className="circle bg" d="M10,4 A6,6 0 1,0 -2,4 A6,6 0 1,0 10,4" fill="#7C6ED8"/>
            </svg>
            <svg className="star-wrapper" transform="translate(363,358)">
              <path className="circle bg" d="M10,4 A6,6 0 1,0 -2,4 A6,6 0 1,0 10,4" fill="#7C6ED8"/>
            </svg>
            <svg className="star-wrapper" transform="translate(610,20)">
              <path className="circle bg" d="M10,4 A6,6 0 1,0 -2,4 A6,6 0 1,0 10,4" fill="#7C6ED8"/>
            </svg>
            <svg className="star-wrapper" transform="translate(628,312)">
              <path className="circle bg" d="M10,4 A6,6 0 1,0 -2,4 A6,6 0 1,0 10,4" fill="#7C6ED8"/>
            </svg>
            <svg className="star-wrapper" transform="translate(358,211)">
              <path className="circle bg" d="M10,4 A6,6 0 1,0 -2,4 A6,6 0 1,0 10,4" fill="#7C6ED8"/>
            </svg>
            <svg className="star-wrapper" transform="translate(516,353)">
              <path className="circle bg" d="M10,4 A6,6 0 1,0 -2,4 A6,6 0 1,0 10,4" fill="#7C6ED8"/>
            </svg>
            <svg className="star-wrapper" transform="translate(441,191)">
              <path className="circle bg" d="M10,4 A6,6 0 1,0 -2,4 A6,6 0 1,0 10,4" fill="#7C6ED8"/>
            </svg>
            <svg className="star-wrapper" transform="translate(586,159)">
              <path className="circle bg" d="M10,4 A6,6 0 1,0 -2,4 A6,6 0 1,0 10,4" fill="#7C6ED8"/>
            </svg>
            <svg className="star-wrapper" transform="translate(640,93)">
              <path className="circle bg" d="M10,4 A6,6 0 1,0 -2,4 A6,6 0 1,0 10,4" fill="#7C6ED8"/>
            </svg>
            <svg className="star-wrapper" transform="translate(447,33)">
              <path className="circle bg" d="M10,4 A6,6 0 1,0 -2,4 A6,6 0 1,0 10,4" fill="#7C6ED8"/>
            </svg>
            <svg className="star-wrapper" transform="translate(10,342)">
              <path className="circle bg" d="M10,4 A6,6 0 1,0 -2,4 A6,6 0 1,0 10,4" fill="#7C6ED8"/>
            </svg>
            <svg className="star-wrapper" transform="translate(687,271)">
              <path className="circle bg" d="M10,4 A6,6 0 1,0 -2,4 A6,6 0 1,0 10,4" fill="#7C6ED8"/>
            </svg>
          </svg>
        </div>
      </header>
      <section className='divider'>
        <div className="wave-container">
           <svg id="HeaderWave" width="100%" height="100%" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
              <path d="M 0,400 L 0,150 C 24.290661599947654,150.03758419692718 48.58132319989531,150.07516839385434 78,155 C 107.41867680010469,159.92483160614566 141.96536880036643,169.73691062150974 175,157 C 208.03463119963357,144.26308937849026 239.55720159863904,108.97718912010674 274,124 C 308.44279840136096,139.02281087989326 345.80582480507746,204.3543328980633 372,194 C 398.19417519492254,183.6456671019367 413.2194991810511,97.60547928764005 436,86 C 458.7805008189489,74.39452071235995 489.3161784707182,137.22374995137648 524,176 C 558.6838215292818,214.77625004862352 597.5157869360761,229.49952090685397 634,202 C 670.4842130639239,174.50047909314603 704.6206737849777,104.77816642120767 734,93 C 763.3793262150223,81.22183357879233 788.0015179240124,127.3878134083154 817,150 C 845.9984820759876,172.6121865916846 879.3732545189725,171.6705799455307 904,164 C 928.6267454810275,156.3294200544693 944.5054640000977,141.92986680956173 977,137 C 1009.4945359999023,132.07013319043827 1058.6048894806368,136.6099528162224 1092,145 C 1125.3951105193632,153.3900471837776 1143.0749780773551,165.6303219255486 1164,161 C 1184.9250219226449,156.3696780744514 1209.0951982099427,134.86875948158306 1244,145 C 1278.9048017900573,155.13124051841694 1324.5442290828735,196.89464014811912 1359,203 C 1393.4557709171265,209.10535985188088 1416.7278854585634,179.55267992594042 1440,150 L 1440,400 L 0,400 Z" 
                stroke="#4e0c62" fill="#FFE2C9" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0"></path>
           </svg>
        </div>
      </section>
      <section id="who">
          <h1>Who?</h1>
          <div className="content-wrap">
            <svg id="Portrait" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 532 712" fill="none">
              <path d="M5.5 7.5C20.0991 28.7724 29.8537 40.4144 51 60.5M46.5 5C65.1148 28.4487 76.1584 40.6411 97 60.5M91 4.5L144 60M142 7C156.94 27.6282 165.774 38.9248 182.5 58.5M186.5 12C204.722 26.4682 214.042 35.1262 227.5 52.5M231.5 13C244.834 27.2316 251.738 35.1234 259.5 48.5M273.5 8C284.901 22.1983 291.439 30.2108 304.5 45M312 3L344.5 43.5M354 2.5C368.515 20.5111 375.991 30.5875 387.5 48.5M407 9.5C415.727 28.6951 420.98 39.2453 433 56.5M440 13.5C440 13.5 466 48 476 65C486 82 516 112 516 112M478 12.5L517.5 59M456 82C480.618 114.483 492.693 128.182 511.5 145.5M460 138C478.048 157.721 488.755 166.721 509 179M463.5 181C481.689 191.812 492.248 199.431 512 217M465.5 213.5L511 246M463 245C476.728 256.521 486.871 263.577 512.5 278M461 276.5L512.5 312.5M463.5 312C484.021 329.318 494.975 336.435 513 342M466 353.5C487.287 369.306 498.283 376.674 515.5 386M467 387L518.5 419.5M468.5 420.5L519.5 453M470 450.5C488.423 460.046 499.159 466.721 519.5 482.5M471 482C490.178 491.108 500.723 497.097 519 510M473 512L520 538.5M475.5 546C478.138 544.766 507.57 561.381 520.5 571.5M479 578.5L522 602M480 614C497.313 623.941 506.936 629.635 524 640M481 648C497.14 666.526 506.792 676.559 526.5 693M457 654.5L486.5 703.5M428.5 654C435.533 674.612 440.392 685.934 451.5 705.5M396.5 658C406.314 675.481 410.709 685.66 416.5 704.5M365.5 661.5C374.353 676.88 377.553 685.283 381 700M335.5 664C339.442 678.205 342.054 686.182 349.5 700.5M301.5 667C307.3 680.161 309.978 687.678 313 701.5M261.5 664C267.963 680.506 270.904 689.046 273.5 701.5M228 661.5C235.229 682.047 239.213 693.433 240.5 702.5M195 662C200.568 671.971 204.062 679.663 212 703M161.5 664C167.189 673.42 170.252 682.24 175.5 703.5M126 665.5L147.5 705M95.5 667C104.566 682.15 108.606 690.683 113 706M10.5 648.5C29.8801 673.871 40.1272 686.907 56.5 706.5M12 611C43.8591 647.213 60.5577 667.787 86 705.5M14 581.5C35.7155 601.711 44.4657 610.051 51 617M17 548L50 581M16 513L51.5 536.5M16 481L54 500M15.5 446.5C32.6477 455.103 41.394 460.08 54 469.5M15.5 410L55 428.5M15 377C28.3574 380.238 36.833 383.226 54 391M13 343.5C24.5017 345.287 34.4357 349.558 52.5 357.5M10.5 311.5C28.4518 316.406 37.7595 319.268 50 325M9 283C25.1076 285.748 33.6391 289.278 49 295M5.5 256.5C22.9576 259.775 32.3866 262.056 48.5 267M2.5 228C15.6288 229.79 25.9291 232.553 46 238.5M1 190C17.3438 193.164 27.0845 198.578 44.5 208.5M1.5 156C19.2758 160.942 28.2839 165.114 43 174.5M1.5 122.5C19.6667 128.974 28.1161 132.577 43 139M2.5 89C15.9137 94.7036 24.5262 98.7773 42 108M2 57C18.9215 67.1022 27.6493 71.8259 41 77.5" stroke="#4E0C62" stroke-width="5" stroke-linecap="round" />
              <path d="M3.50001 162.017C3.39023 141.401 3.57405 95.0107 5.39507 13.6634C5.45346 11.0549 7.46487 8.90887 10.0705 8.77457C27.5671 7.87275 90.7225 4.8751 119 7.01733C152 9.51733 201.5 16.0172 231 14.5172C260.5 13.0172 309.5 2.51729 340 3.01729C370.5 3.51729 417.591 14.4989 435 15.0173C449.471 15.4482 496.895 12.7366 512.49 11.8091C515.271 11.6437 517.62 13.7522 517.741 16.5351C518.53 34.6515 520.9 96.9811 517.511 125.017C513.522 158.017 510.189 192.414 512 209.017C513.811 225.621 514 321.017 515.5 340.517C517 360.017 521.5 440.517 521.5 440.517C521.5 440.517 522.5 554.017 523 575.017C523.483 595.297 528.593 651.989 528.977 700.394C529 703.206 526.707 705.469 523.896 705.419C509.12 705.161 466.685 704.73 456 708.017C443 712.017 414 704.017 387 702.517C360 701.017 328 702.517 314 702.517C300 702.517 177.294 706.017 177.294 706.017C143.774 707.831 120.129 708.098 80 708.517C80 708.517 33.0134 711.023 23.5 698.523C13.9867 686.023 10.5091 657.863 13 622.517C15.491 587.172 20 560.517 19.5 548.017C19 535.517 17.9867 516.291 17.9867 516.291V412.017C18.6773 367.582 10.7351 265.018 7.00003 255.017C3.26496 245.016 3.61187 183.023 3.50001 162.017Z" stroke="#4E0C62" stroke-width="5"/>
              <mask id="mask0_46_77" maskUnits="userSpaceOnUse" x="41" y="43" width="445" height="629">
              <path d="M47.5 213.017C46.71 198.402 44.9838 112.012 44.2937 76.3756C44.1302 67.9346 50.9535 61.0726 59.3959 61.126C92.7624 61.3372 170.03 61.6859 186 60.5173C206.5 59.0173 259.5 49.0174 285 48.0174C310.5 47.0174 346 45.0173 370 48.0173C387.452 50.1988 425.262 55.8173 444.594 58.7208C451.559 59.7669 456.828 65.5207 457.298 72.5487C458.544 91.1887 460.92 126.137 462 138.017C463.5 154.517 467.5 185.017 467.5 210.517C467.5 236.017 461 268.017 463.5 291.517C466 315.017 468.5 360.017 469 373.517C469.5 387.017 474 504.517 475.5 516.517C477 528.517 487.706 657.481 480.5 657.017C480.5 657.017 456 655.517 439 655.517C422 655.517 383 660.517 383 660.517C383 660.517 328 667.017 304 668.017C280 669.017 270 664.517 239.5 663.017C209 661.517 130.5 666.517 130.5 666.517L72.0642 668.935C64.1564 669.263 57.3661 663.399 56.6524 655.516C54.915 636.327 52.1543 601.404 52.5 576.517C53 540.517 58 471.517 58 445.017C58 418.517 54.5 348.517 53.5 331.017C52.5 313.517 52 285.017 51 265.017C50 245.017 48.5 231.517 47.5 213.017Z" fill="#D9D9D9" stroke="#4E0C62" stroke-width="5"/>
              </mask>
              <g mask="url(#mask0_46_77)">
              <rect x="-76" y="30" width="677" height="715" fill="url(#pattern0_46_77)"/>
              </g>
              <path d="M47.5 213.017C46.71 198.402 44.9838 112.012 44.2937 76.3756C44.1302 67.9346 50.9535 61.0726 59.3959 61.126C92.7624 61.3372 170.03 61.6859 186 60.5173C206.5 59.0173 259.5 49.0174 285 48.0174C310.5 47.0174 346 45.0173 370 48.0173C387.452 50.1988 425.262 55.8173 444.594 58.7208C451.559 59.7669 456.828 65.5207 457.298 72.5487C458.544 91.1887 460.92 126.137 462 138.017C463.5 154.517 467.5 185.017 467.5 210.517C467.5 236.017 461 268.017 463.5 291.517C466 315.017 468.5 360.017 469 373.517C469.5 387.017 474 504.517 475.5 516.517C477 528.517 487.706 657.481 480.5 657.017C480.5 657.017 456 655.517 439 655.517C422 655.517 383 660.517 383 660.517C383 660.517 328 667.017 304 668.017C280 669.017 270 664.517 239.5 663.017C209 661.517 130.5 666.517 130.5 666.517L72.0642 668.935C64.1564 669.263 57.3661 663.399 56.6524 655.516C54.915 636.327 52.1543 601.404 52.5 576.517C53 540.517 58 471.517 58 445.017C58 418.517 54.5 348.517 53.5 331.017C52.5 313.517 52 285.017 51 265.017C50 245.017 48.5 231.517 47.5 213.017Z" stroke="#4E0C62" stroke-width="5"/>
              <defs>
              <pattern id="pattern0_46_77" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use href="#image0_46_77" transform="scale(0.00126786 0.00120048)"/>
              </pattern>
              <image id="image0_46_77" href={portrait} />
              </defs>
            </svg>
            <p><b>Welcome to this humble webpage!</b> My name is Dillon McHenry and I'm a Web Developer with five years of experience building responsive, research-driven applications with an emphasis on WCAG accessibility standards and web animations that make interfaces delightful! I'm currently pursuing a Master's in Human Computer Interaction at Drexel University, so I've included academic research and case studies from my time there below. When I'm not designing or developing, I enjoy playing my violin or my growing collection of synthesizer toys. I also love attending musical theater in Philadelphia when I get the time. Enjoy my portfolio site, and please reach out with any questions!</p>
          </div>
      </section>
      <section className='divider'>
        <div className="wave-container">
          <svg width="100%" height="100%" id="WhoWave" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
              <path d="M 0,400 L 0,0 C 29.39800522740549,65.6635191222995 58.79601045481098,131.327038244599 97,168 C 135.20398954518902,204.672961755401 182.21396340816156,212.35536614390344 215,222 C 247.78603659183844,231.64463385609656 266.34813591254283,243.25149717978735 296,217 C 325.65186408745717,190.74850282021265 366.39349294166726,126.6386451369472 406,93 C 445.60650705833274,59.361354863052796 484.07789232078835,56.19392227242383 522,96 C 559.9221076792116,135.80607772757617 597.2949377751792,218.58566577335745 632,204 C 666.7050622248208,189.41433422664255 698.7423565784954,77.46341463414633 728,75 C 757.2576434215046,72.53658536585367 783.7356359108394,179.56067569005717 815,186 C 846.2643640891606,192.43932430994283 882.3150997781465,98.29388260562494 924,92 C 965.6849002218535,85.70611739437506 1013.003964976574,167.26379388744303 1043,196 C 1072.996035023426,224.73620611255697 1085.6690403155576,200.65094184460287 1115,179 C 1144.3309596844424,157.34905815539713 1190.3198737611958,138.1324387341454 1228,140 C 1265.6801262388042,141.8675612658546 1295.0514646396582,164.8193032188156 1329,145 C 1362.9485353603418,125.1806967811844 1401.474267680171,62.5903483905922 1440,0 L 1440,400 L 0,400 Z" 
                stroke="#4e0c62" fill="#AEEDB5" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1"></path>
          </svg>
        </div>
      </section>
      <section id="projects">
          <h1>Coding Projects</h1>
          <div className="content-wrap">
            <div className="project">
                <div className="proj-title">
                    <a target='_blank' href="https://blog.therapynotes.com/whats-new-new-sidebar-navigation-new-security-setting-new-outcome-measure"><img src={therapynotes} alt="therapynotes" /></a>
                    <h3>TherapyNotes</h3>
                </div>
                <div className='languages'>
                  <span>Angular.js</span>
                  <span>.NET</span>
                  <span>Figma</span>
                </div>
                <p>TherapyNotes is the #1 EHR for therapists. I'm currently developing their cross-platform design system, but in the past I've implemented a navigation redesign and group telehealth sessions between patients and clinicians.</p>
                <a className="footer-link" target='_blank' href="https://blog.therapynotes.com/whats-new-new-sidebar-navigation-new-security-setting-new-outcome-measure">Sidebar Navigation blog post<span className='arrow' /></a>
                <a className="footer-link" target='_blank' href="https://rankings.newsweek.com/americas-best-online-platforms-2025">Ranked 12th Best Online Platform of 2025<span className='arrow' /></a>
            </div>
            <div className="project">
                <div className="proj-title">
                    <a target='_blank' href="https://cci.drexel.edu/SeniorDesign/2021_2022/FOOLS_GOLD_FRENZY/index.html"><img src={foolsgold} alt="Cactus" /></a>
                    <h3>Fool's Gold Frenzy</h3>
                </div>
                <div className='languages'>
                  <span>C#</span>
                  <span>Unity</span>
                </div>
                <p>An online multiplayer kart-battling game I coded with a group of developers for our senior project. I was in charge of all interfaces, HUDs and accessibility features. We collaborated with designers and presented weekly to stakeholders.</p>
                <a className="footer-link" target='_blank' href="https://cci.drexel.edu/SeniorDesign/2021_2022/FOOLS_GOLD_FRENZY/index.html">Project webpage<span className='arrow' /></a>
                <a className="footer-link" target='_blank' href="https://cci.drexel.edu/SeniorDesign/Winners.html">1st Place in Gaming Category<span className='arrow' /></a>
            </div>
            <div className="project">
                <div className="proj-title">
                    <a target='_blank' href="https://drive.google.com/file/d/1GbCb3aq9EBk_NYsZTciQTqvGtRgNtMBj/view"><img id="SeamCarving" src={seamcarving} alt="seam carving elsa" /></a>
                    <h3>Seam Carving</h3>
                </div>
                <div className='languages'>
                  <span>Python</span>
                </div>
                <p>A computer vision research project to implement video resizing with minimal information loss by calculating optimal "seams" to remove from each frame of a video.</p>
                <a className="footer-link" target='_blank' href="https://github.com/dillonmchenry/DiscontinuousSeamCarving">Github Repo<span className='arrow' /></a>
                <a className="footer-link" target='_blank' href="https://drive.google.com/file/d/1GbCb3aq9EBk_NYsZTciQTqvGtRgNtMBj/view?usp=sharing">Research Paper<span className='arrow' /></a>

            </div>
            <div className="project">
                <div className="proj-title">
                    <a target='_blank' href="https://github.com/dillonmchenry/Guitar-Hero"><img src={guitarHero} alt="Guitar Hero" /></a>
                    <h3>"GUI"tar Hero</h3>
                </div>
                <div className='languages'>
                  <span>Java</span>
                  <span>Swing</span>
                </div>
                <p>A moonshot project idea for my user interfaces class involved coding the game Guitar Hero entirely in Java's Swing library. Our end product looked the part and synchronized each song perfectly. I'm very proud of it.</p>
                <a className="footer-link" target='_blank' href="https://github.com/dillonmchenry/guitarHero">Github Repo<span className='arrow' /></a>
            </div>
            <div className="project">
                <div className="proj-title">
                    <a target='_blank' href="http://water.phila.gov/adoption/"><img src={rake} alt="rake" /></a>
                    <h3>Soak It Up Adoption</h3>
                </div>
                <div className='languages'>
                  <span>React.js</span>
                  <span>SASS</span>
                  <span>Illustrator</span>
                </div>
                <p>A stormgarden grant membership site for Philadelphia residents. I designed and built the site from the
                ground up. First built as an HTML site, I later converted it to React via the Wordpress Gutenberg editor.</p>
                <a className="footer-link" target='_blank' href="https://water.phila.gov/adoption/">Adoption Site<span className='arrow' /></a>
            </div>
            <div className="project">
                <div className="proj-title">
                    <a target='_blank' href="https://www.jellyvision.com/resources/blog/whats-new-with-alex/jellyvision-acquires-picwell/"><img src={picwell} alt="Picwell App" /></a>
                    <h3>Picwell App</h3>
                </div>
                <div className='languages'>
                  <span>React.js</span>
                  <span>CMS</span>
                  <span>Figma</span>
                </div>
                <p>A startup company that provided intelligent employer healthcare
                recommendations through a user-friendly web-app. I worked on integrating Contentful CMS for their app as well as designing
                and developing their insurance plan comparison feature.</p>
                <a className="footer-link" target='_blank' href="https://www.prnewswire.com/news-releases/picwell-adds-plan-comparison-feature-to-its-benefits-decision-support-solution-301332884.html">Plan Comparison announcement<span className='arrow' /></a>
            </div>
          </div>
      </section>
      <section className='divider'>
        <div className="wave-container">
          <svg width="100%" height="100%" id="DevWave" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
            <path d="M 0,400 L 0,150 C 34.631950495944,127.06679924361914 69.263900991888,104.13359848723829 99,121 C 128.736099008112,137.8664015127617 153.57634652839204,194.532405294666 187,214 C 220.42365347160796,233.467594705334 262.43071289454394,215.73678033409774 303,185 C 343.56928710545606,154.26321966590226 382.7008018934322,110.52047336894307 412,89 C 441.2991981065678,67.47952663105693 460.7660795317274,68.18132619013001 497,88 C 533.2339204682726,107.81867380986999 586.2348799796582,146.7542218705369 627,143 C 667.7651200203418,139.2457781294631 696.2944005496395,92.80178632772243 728,76 C 759.7055994503605,59.19821367227757 794.5875178217843,72.03863281857338 831,96 C 867.4124821782157,119.96136718142662 905.355528163223,155.043682397984 934,176 C 962.644471836777,196.956317602016 981.990369525324,203.78663758949045 1013,216 C 1044.009630474676,228.21336241050955 1086.6829937354803,245.8097672440541 1122,224 C 1157.3170062645197,202.1902327559459 1185.2776555327553,140.97429343429312 1221,122 C 1256.7223444672447,103.02570656570688 1300.2063841334987,126.29305901877339 1338,138 C 1375.7936158665013,149.7069409812266 1407.8968079332508,149.8534704906133 1440,150 L 1440,400 L 0,400 Z" 
            stroke="#4e0c62" fill="#BAF1FC" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0"></path>
          </svg>
        </div>
      </section>
      <section id="Research">
          <h1>UX Research</h1>
          <div className="content-wrap">
              <div className="project">
                <div className="proj-title">
                    <a target='_blank' href="https://medium.com/@dsm98/mapping-ai-music-tools-across-a-spectrum-of-co-creativity-c2a076af579a"><img src={music} alt="Google Magenta Logo" /></a>
                    <h3>AI Music<br></br> Co-Creativity</h3>
                </div>
                <p>A literature review and research proposal that I wrote for my Human AI Interaction course. I outline the history of computer-aided music, and how we can evaluate the "co-creativity" of various AI music tools.</p>
                <a className="footer-link" target='_blank' href="https://medium.com/@dsm98/mapping-ai-music-tools-across-a-spectrum-of-co-creativity-c2a076af579a">Research Paper<span className='arrow' /></a>
            </div>
            <div className="project">
                <div className="proj-title">
                    <a target='_blank' href="https://drive.google.com/file/d/1qFk7EgD3lk2GlSdpoymzTPXdB1zfQsZU/view?usp=sharing"><img src={steam} alt="Steam Recommendation" /></a>
                    <h3>Steam Recommender A/B Testing</h3>
                </div>
                <p>An A/B testing plan I wrote for the gaming platform Steam regarding how more exploratory, holistic, or interactive game recommendation experiences could increase purchases and "wishlists".</p>
                <a className="footer-link" target='_blank' href="https://drive.google.com/file/d/1qFk7EgD3lk2GlSdpoymzTPXdB1zfQsZU/view?usp=sharing">Full Testing Plan<span className='arrow' /></a>
            </div>
            <div className="project">
                <div className="proj-title">
                    <a target='_blank' href="https://drive.google.com/file/d/15sgi5AKIT8fCBNiyR5cFW4o4FG5rActs/view?usp=sharing"><img src={wildhaven} alt="Zoo logo" /></a>
                    <h3>Wildhaven Zoo</h3>
                </div>
                <p>A report containing low to high fidelity prototypes of a zoo website built in Figma that include animal lookup, event registration and various ticket purchasing flows. We received and implemented user feedback at each step of the process.</p>
                <a className="footer-link" target='_blank' href="https://drive.google.com/file/d/15sgi5AKIT8fCBNiyR5cFW4o4FG5rActs/view?usp=sharing">Prototype Report w/ Demos<span className='arrow' /></a>
            </div>
            
          </div>
      </section>
      <section className='divider'>
        <div className="wave-container">
          <svg id="UxWave" width="100%" height="100%" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
            <path d="M 0,400 L 0,150 C 56.9343903782235,115.54272833037317 113.868780756447,81.08545666074632 155,88 C 196.131219243553,94.91454333925368 221.45926735243546,143.2009016873879 265,140 C 308.54073264756454,136.7990983126121 370.29414983381116,82.11093658970213 414,86 C 457.70585016618884,89.88906341029787 483.36413331231995,152.35535195380356 516,178 C 548.63586668768,203.64464804619644 588.249316916909,192.46765559508358 632,168 C 675.750683083091,143.53234440491642 723.6385990200436,105.77402566586214 775,94 C 826.3614009799564,82.22597433413786 881.1962870029165,96.43624174146788 926,99 C 970.8037129970835,101.56375825853212 1005.5762529682904,92.48100736826635 1050,97 C 1094.4237470317096,101.51899263173365 1148.498701123922,119.63972878546676 1192,121 C 1235.501298876078,122.36027121453324 1268.4289425360223,106.96007748986663 1308,109 C 1347.5710574639777,111.03992251013337 1393.785528731989,130.51996125506668 1440,150 L 1440,400 L 0,400 Z" fill="#ffc4e2" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-3"></path>\
          </svg>
        </div>
      </section>
      <section id="contact">
          <h1>Contact Me!</h1>
          <div className="content-wrap">
              <div className="col">
                <a target='_blank' href="https://www.linkedin.com/in/dillon-mchenry-ab3453162/"><img src={linkedin} alt="linkedin" /></a>
              </div>
              <div className="col">
                <a target='_blank' href="mailto:dillon.mchenry7@gmail.com"><img src={gmail} alt="gmail" /></a>
              </div>
          </div>
      </section>
    </div>
  );
}

export default App;
