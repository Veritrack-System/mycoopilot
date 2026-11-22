import type { CSSProperties } from "react";
import { useEffect } from "react";
import { useSyncExternalStore } from "react";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/index.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CooPilot | Fractional COO for Founder-Led Businesses" },
      {
        name: "description",
        content:
          "CooPilot helps founder-led businesses fix reporting, ownership, finance operations and delivery, so the company can run without everything going through the founder.",
      },
      { property: "og:title", content: "Your business runs on you. That is the problem we fix." },
      {
        property: "og:description",
        content:
          "Practical operations support for founder-led businesses that have outgrown the way they were set up.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/brand/coopilot-og.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/brand/coopilot-og.png" },
    ],
  }),
  staticData: {
    importedDocument: {
      html: { className: "lenis", lang: "en" },
      body: { "data-site-import-responsive-incomplete": "class-range-budget" },
    },
  },
  component: Index,
});

function Index() {
  const menu = useImportedMenu();
  const importedViewportWidth = useSyncExternalStore(
    subscribeMobile,
    () => window.innerWidth,
    () => 1440,
  );
  const isMobile = importedViewportWidth <= 767;
  useImportedLayout();
  return (
    <>
      <style>{capturedCSS}</style>
      <style>{`
        .framer-LIPxQ :is(a, button, [role="button"]) {
          -webkit-tap-highlight-color: transparent;
          -webkit-user-select: none;
          user-select: none;
        }
        .framer-LIPxQ[data-selection="true"] :is(a, button, [role="button"])::selection,
        .framer-LIPxQ[data-selection="true"] :is(a, button, [role="button"]) *::selection,
        .framer-LIPxQ [data-selection="true"] :is(a, button, [role="button"])::selection,
        .framer-LIPxQ [data-selection="true"] :is(a, button, [role="button"]) *::selection {
          background-color: transparent;
          color: inherit;
        }
        .framer-LIPxQ :is(a, button, [role="button"]):focus:not(:focus-visible) {
          outline: none;
        }
      `}</style>
      <div id="main">
        <div
          className="framer-LIPxQ framer-Zqalg framer-d3BN7 framer-EP1im framer-128kipa items-center flex-col flex-nowrap content-center justify-start [gap:0] [overflow:hidden]"
          style={{ minHeight: "100vh", width: "auto" }}
          data-layout-template="true"
          data-selection="true"
        >
          <div
            className="framer-gdzxqr-container flex-none [left:50%] [order:-1000] [top:0] [transform:translate(-50%)] [z-index:10]"
            data-site-import-desktop-header=""
          >
            <div
              className={
                isMobile ? "ssr-variant hidden-1l0aw67 hidden-sr43nx hidden-128kipa" : "ssr-variant"
              }
            >
              <header
                style={
                  {
                    backdropFilter: "blur(7px)",
                    backgroundColor:
                      "var(--token-eea70a16-506d-4b3b-87b7-e85e653a6e7c, rgb(245, 245, 245))",
                    width: "100%",
                    opacity: "1",
                  } as CSSProperties
                }
                className={
                  isMobile
                    ? "framer-cTjda framer-m9VkI framer-d3BN7 framer-Zqalg framer-bzu5mb framer-v-12w42s8"
                    : "framer-cTjda framer-m9VkI framer-d3BN7 framer-Zqalg framer-bzu5mb framer-v-v89dtt"
                }
                data-site-import-responsive="5"
              >
                <ImportedNavTop menu={menu} />
                <div
                  onClick={(event) => {
                    if ((event.target as HTMLElement).closest("a")) menu.close();
                  }}
                  className="framer-1rfamfy"
                  style={{ opacity: "0" }}
                >
                  <nav className="framer-ugu5i9" style={{ opacity: "1" }}>
                    <div className="framer-6z5t2m" style={{ opacity: "1" }}>
                      <div className="framer-1l0v3f0-container" style={{ opacity: "1" }}>
                        <a
                          style={{ opacity: "1" }}
                          className={
                            isMobile
                              ? "framer-IFf4n framer-14ac7s4 framer-v-1h77cpm framer-1435c2t"
                              : "framer-IFf4n framer-14ac7s4 framer-v-14ac7s4 framer-1435c2t"
                          }
                          href="/#problem"
                          tabIndex={0}
                        >
                          <div
                            className="framer-ggkluq"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                                "--framer-paragraph-spacing": "0px",
                                transform: "none",
                                opacity: "1",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text"
                              style={
                                {
                                  "--framer-font-family":
                                    '"Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "60px",
                                  "--framer-font-weight": "600",
                                  "--framer-letter-spacing": "-0.06em",
                                  "--framer-line-height": "120%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10)))",
                                } as CSSProperties
                              }
                              data-site-import-responsive="1163"
                            >
                              The problem
                            </p>
                          </div>
                          <div
                            className="framer-8k52a7"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                                "--framer-paragraph-spacing": "0px",
                                transform: "none",
                                opacity: "1",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text"
                              style={
                                {
                                  "--framer-font-family":
                                    '"Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "60px",
                                  "--framer-font-weight": "600",
                                  "--framer-letter-spacing": "-0.06em",
                                  "--framer-line-height": "120%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10)))",
                                } as CSSProperties
                              }
                            >
                              The problem
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="framer-f7i6o0" style={{ opacity: "1" }}>
                      <div className="framer-qy8ut1-container" style={{ opacity: "1" }}>
                        <a
                          style={{ opacity: "1" }}
                          className={
                            isMobile
                              ? "framer-IFf4n framer-14ac7s4 framer-v-1h77cpm framer-1435c2t"
                              : "framer-IFf4n framer-14ac7s4 framer-v-14ac7s4 framer-1435c2t"
                          }
                          href="/#what-we-fix"
                          tabIndex={0}
                        >
                          <div
                            className="framer-ggkluq"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                                "--framer-paragraph-spacing": "0px",
                                transform: "none",
                                opacity: "1",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text"
                              style={
                                {
                                  "--framer-font-family":
                                    '"Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "60px",
                                  "--framer-font-weight": "600",
                                  "--framer-letter-spacing": "-0.06em",
                                  "--framer-line-height": "120%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10)))",
                                } as CSSProperties
                              }
                              data-site-import-responsive="1170"
                            >
                              What we fix
                            </p>
                          </div>
                          <div
                            className="framer-8k52a7"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                                "--framer-paragraph-spacing": "0px",
                                transform: "none",
                                opacity: "1",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text"
                              style={
                                {
                                  "--framer-font-family":
                                    '"Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "60px",
                                  "--framer-font-weight": "600",
                                  "--framer-letter-spacing": "-0.06em",
                                  "--framer-line-height": "120%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10)))",
                                } as CSSProperties
                              }
                            >
                              What we fix
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="framer-9p1fl7" style={{ opacity: "1" }}>
                      <div className="framer-1cb9u8q-container" style={{ opacity: "1" }}>
                        <a
                          style={{ opacity: "1" }}
                          className={
                            isMobile
                              ? "framer-IFf4n framer-14ac7s4 framer-v-1h77cpm framer-1435c2t"
                              : "framer-IFf4n framer-14ac7s4 framer-v-14ac7s4 framer-1435c2t"
                          }
                          href="/#ways-to-work"
                          tabIndex={0}
                        >
                          <div
                            className="framer-ggkluq"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                                "--framer-paragraph-spacing": "0px",
                                transform: "none",
                                opacity: "1",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text"
                              style={
                                {
                                  "--framer-font-family":
                                    '"Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "60px",
                                  "--framer-font-weight": "600",
                                  "--framer-letter-spacing": "-0.06em",
                                  "--framer-line-height": "120%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10)))",
                                } as CSSProperties
                              }
                              data-site-import-responsive="1177"
                            >
                              Ways to work
                            </p>
                          </div>
                          <div
                            className="framer-8k52a7"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                                "--framer-paragraph-spacing": "0px",
                                transform: "none",
                                opacity: "1",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text"
                              style={
                                {
                                  "--framer-font-family":
                                    '"Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "60px",
                                  "--framer-font-weight": "600",
                                  "--framer-letter-spacing": "-0.06em",
                                  "--framer-line-height": "120%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10)))",
                                } as CSSProperties
                              }
                            >
                              Ways to work
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="framer-15pwy5" style={{ opacity: "1" }}>
                      <div className="framer-dn12q8-container" style={{ opacity: "1" }}>
                        <a
                          style={{ opacity: "1" }}
                          className={
                            isMobile
                              ? "framer-IFf4n framer-14ac7s4 framer-v-1h77cpm framer-1435c2t"
                              : "framer-IFf4n framer-14ac7s4 framer-v-14ac7s4 framer-1435c2t"
                          }
                          href="/#proof"
                          tabIndex={0}
                        >
                          <div
                            className="framer-ggkluq"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                                "--framer-paragraph-spacing": "0px",
                                transform: "none",
                                opacity: "1",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text"
                              style={
                                {
                                  "--framer-font-family":
                                    '"Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "60px",
                                  "--framer-font-weight": "600",
                                  "--framer-letter-spacing": "-0.06em",
                                  "--framer-line-height": "120%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10)))",
                                } as CSSProperties
                              }
                              data-site-import-responsive="1184"
                            >
                              Proof
                            </p>
                          </div>
                          <div
                            className="framer-8k52a7"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                                "--framer-paragraph-spacing": "0px",
                                transform: "none",
                                opacity: "1",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text"
                              style={
                                {
                                  "--framer-font-family":
                                    '"Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "60px",
                                  "--framer-font-weight": "600",
                                  "--framer-letter-spacing": "-0.06em",
                                  "--framer-line-height": "120%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10)))",
                                } as CSSProperties
                              }
                            >
                              Proof
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="framer-1tm8ror" style={{ opacity: "1" }}>
                      <div className="framer-lhw02v-container" style={{ opacity: "1" }}>
                        <a
                          className="framer-IFf4n framer-14ac7s4 framer-v-14ac7s4 framer-1435c2t"
                          style={{ opacity: "1" }}
                          href="/#founder"
                          tabIndex={0}
                        >
                          <div
                            className="framer-ggkluq"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                                "--framer-paragraph-spacing": "0px",
                                transform: "none",
                                opacity: "1",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text"
                              style={
                                {
                                  "--framer-font-family":
                                    '"Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "60px",
                                  "--framer-font-weight": "600",
                                  "--framer-letter-spacing": "-0.06em",
                                  "--framer-line-height": "120%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10)))",
                                } as CSSProperties
                              }
                            >
                              Founder
                            </p>
                          </div>
                          <div
                            className="framer-8k52a7"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                                "--framer-paragraph-spacing": "0px",
                                transform: "none",
                                opacity: "1",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text"
                              style={
                                {
                                  "--framer-font-family":
                                    '"Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "60px",
                                  "--framer-font-weight": "600",
                                  "--framer-letter-spacing": "-0.06em",
                                  "--framer-line-height": "120%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10)))",
                                } as CSSProperties
                              }
                            >
                              Founder
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </nav>
                  <a className="coopilot-menu-book" href="/#book">
                    Book a discovery call
                  </a>
                </div>
              </header>
            </div>
          </div>
          <div
            className="framer-gdzxqr-container flex-none [left:50%] [order:-1000] [top:0] [transform:translate(-50%)] [z-index:10]"
            style={{ "--site-import-header-display": "block" } as CSSProperties}
            data-site-import-mobile-header=""
          >
            <div className="ssr-variant">
              <ImportedHeaderPhone menu={menu} />
            </div>
          </div>
          <div className="framer-f2k1ef-container select-none flex-none [bottom:calc(calc(100%_-_min(var(--framer-viewport-height,100%),100%))_+_0px)] [left:0] [order:-999] [right:0] [z-index:3]">
            <div style={{ position: "absolute", inset: "0px", overflow: "hidden" }}>
              <div
                style={
                  {
                    opacity: "1",
                    position: "absolute",
                    inset: "0px",
                    zIndex: "1",
                    maskImage:
                      "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 37.5%)",
                    borderRadius: "0px",
                    pointerEvents: "none",
                    backdropFilter: "blur(0.0546875px)",
                  } as CSSProperties
                }
              />
              <div
                style={
                  {
                    opacity: "1",
                    position: "absolute",
                    inset: "0px",
                    zIndex: "2",
                    maskImage:
                      "linear-gradient(rgba(0, 0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgba(0, 0, 0, 0) 50%)",
                    borderRadius: "0px",
                    pointerEvents: "none",
                    backdropFilter: "blur(0.109375px)",
                  } as CSSProperties
                }
              />
              <div
                style={
                  {
                    opacity: "1",
                    position: "absolute",
                    inset: "0px",
                    zIndex: "3",
                    maskImage:
                      "linear-gradient(rgba(0, 0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 62.5%)",
                    borderRadius: "0px",
                    pointerEvents: "none",
                    backdropFilter: "blur(0.21875px)",
                  } as CSSProperties
                }
              />
              <div
                style={
                  {
                    opacity: "1",
                    position: "absolute",
                    inset: "0px",
                    zIndex: "4",
                    maskImage:
                      "linear-gradient(rgba(0, 0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgba(0, 0, 0, 0) 75%)",
                    borderRadius: "0px",
                    pointerEvents: "none",
                    backdropFilter: "blur(0.4375px)",
                  } as CSSProperties
                }
              />
              <div
                style={
                  {
                    opacity: "1",
                    position: "absolute",
                    inset: "0px",
                    zIndex: "5",
                    maskImage:
                      "linear-gradient(rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 87.5%)",
                    borderRadius: "0px",
                    pointerEvents: "none",
                    backdropFilter: "blur(0.875px)",
                  } as CSSProperties
                }
              />
              <div
                style={
                  {
                    opacity: "1",
                    position: "absolute",
                    inset: "0px",
                    zIndex: "6",
                    maskImage:
                      "linear-gradient(rgba(0, 0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
                    borderRadius: "0px",
                    pointerEvents: "none",
                    backdropFilter: "blur(1.75px)",
                  } as CSSProperties
                }
              />
              <div
                style={
                  {
                    opacity: "1",
                    position: "absolute",
                    inset: "0px",
                    zIndex: "7",
                    maskImage:
                      "linear-gradient(rgba(0, 0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)",
                    borderRadius: "0px",
                    pointerEvents: "none",
                    backdropFilter: "blur(3.5px)",
                  } as CSSProperties
                }
              />
              <div
                style={
                  {
                    opacity: "1",
                    position: "absolute",
                    inset: "0px",
                    zIndex: "8",
                    maskImage: "linear-gradient(rgba(0, 0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)",
                    borderRadius: "0px",
                    pointerEvents: "none",
                    backdropFilter: "blur(7px)",
                  } as CSSProperties
                }
              />
            </div>
          </div>
          <div
            className="framer-Uqv4b framer-rYYG2 framer-LH0ke framer-Pv7XK framer-eTMx2 framer-prBCU framer-Ls8er framer-QaenG framer-Ieo2M framer-1moT7 framer-ofTFr framer-Zqalg framer-72rtr7 items-center flex-col flex-nowrap content-center justify-start [gap:0] [overflow:visible]"
            style={{ minHeight: "100vh", width: "auto", display: "contents" }}
          >
            <div className="framer-1dp8mtw-container" />
            <div className="framer-1dsur25-container">
              <div />
            </div>
            <div className="framer-1buuon2 items-center flex-none flex-row flex-nowrap gap-[10px] place-content-center [overflow:hidden]">
              <main className="framer-jpdxmw items-center flex-none flex-col flex-nowrap place-content-center [overflow:hidden] [padding:0]">
                <ImportedSectionHero />
                <div className="ssr-variant">
                  <div
                    className="framer-1sxg5cm-container flex-none"
                    style={{ willChange: "transform", opacity: "0.956895", transform: "none" }}
                    data-site-import-desktop-variant=""
                  >
                    <div
                      style={{ width: "100%", opacity: "1" }}
                      className={
                        isMobile
                          ? "framer-e7MIj framer-1e0p9gw framer-v-17wc7s"
                          : "framer-e7MIj framer-1e0p9gw"
                      }
                      data-site-import-responsive="120"
                    >
                      <div
                        className="framer-1jt6k9j"
                        style={{
                          backgroundColor:
                            "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
                          borderRadius: "18px",
                          opacity: "1",
                        }}
                      >
                        <div
                          className="framer-14lndsk"
                          style={{ transform: "translateX(-50%)", opacity: "1" }}
                        >
                          <div className="framer-j6o1p5" style={{ opacity: "1" }}>
                            <div
                              className="framer-1nu7qjs"
                              style={{
                                backgroundColor:
                                  "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                                borderRadius: "50%",
                                opacity: "1",
                              }}
                            />
                            <div
                              className="framer-1dtqhsg"
                              style={{
                                backgroundColor: "rgb(237, 237, 237)",
                                borderRadius: "50%",
                                opacity: "1",
                              }}
                            />
                            <div
                              className="framer-16xhq3m"
                              style={{
                                backgroundColor: "rgb(237, 237, 237)",
                                borderRadius: "50%",
                                opacity: "1",
                              }}
                            />
                            <div
                              className="framer-1xj09jn"
                              style={{
                                backgroundColor: "rgb(237, 237, 237)",
                                borderRadius: "50%",
                                opacity: "1",
                              }}
                            />
                          </div>
                          <div
                            className="framer-197gllc"
                            style={
                              {
                                "--extracted-r6o4lv": "rgb(9, 9, 9)",
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                opacity: "0.5",
                                transform: "none",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text"
                              style={
                                {
                                  "--framer-font-family":
                                    '"Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "10px",
                                  "--framer-font-weight": "600",
                                  "--framer-letter-spacing": "-0.04em",
                                  "--framer-line-height": "1em",
                                  "--framer-text-color": "var(--extracted-r6o4lv, rgb(9, 9, 9))",
                                } as CSSProperties
                              }
                            >
                              01
                            </p>
                          </div>
                        </div>
                        <div
                          className="framer-bicbsz"
                          style={{ transform: "translate(-50%, -50%)", opacity: "1" }}
                        >
                          <div
                            className="framer-cvlv7s"
                            style={
                              {
                                "--extracted-r6o4lv": "rgb(9, 9, 9)",
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                transform: "none",
                                opacity: "1",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text"
                              style={
                                {
                                  "--framer-font-size": "18px",
                                  "--framer-font-weight": "500",
                                  "--framer-letter-spacing": "-0.04em",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "var(--extracted-r6o4lv, rgb(9, 9, 9))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Every approval comes back to you. Clients, retailers, funders and suppliers expect you in the room.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="framer-65jwlq"
                        style={{
                          backgroundColor:
                            "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
                          borderRadius: "18px",
                          opacity: "1",
                        }}
                      >
                        <div className="framer-zykl2" style={{ opacity: "1" }}>
                          <div className="framer-4q9lvj" style={{ opacity: "1" }}>
                            <div className="framer-z1h3bw" style={{ opacity: "1" }}>
                              <div
                                className="framer-17r09d9"
                                style={{
                                  backgroundColor:
                                    "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                                  borderRadius: "50%",
                                  opacity: "1",
                                }}
                              />
                              <div
                                className="framer-1xu4xrk"
                                style={{
                                  backgroundColor:
                                    "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                                  borderRadius: "50%",
                                  opacity: "1",
                                }}
                              />
                              <div
                                className="framer-nscsly"
                                style={{
                                  backgroundColor: "rgb(237, 237, 237)",
                                  borderRadius: "50%",
                                  opacity: "1",
                                }}
                              />
                              <div
                                className="framer-h86ztg"
                                style={{
                                  backgroundColor: "rgb(237, 237, 237)",
                                  borderRadius: "50%",
                                  opacity: "1",
                                }}
                              />
                            </div>
                            <div
                              className="framer-1np1zmf"
                              style={
                                {
                                  "--extracted-r6o4lv": "rgb(9, 9, 9)",
                                  "--framer-link-text-color": "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                  opacity: "0.5",
                                  transform: "none",
                                } as CSSProperties
                              }
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text"
                                style={
                                  {
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "10px",
                                    "--framer-font-weight": "600",
                                    "--framer-letter-spacing": "-0.04em",
                                    "--framer-line-height": "1em",
                                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(9, 9, 9))",
                                  } as CSSProperties
                                }
                              >
                                02
                              </p>
                            </div>
                          </div>
                          <div className="framer-1lu4wge" style={{ opacity: "1" }}>
                            <div
                              className="framer-hfw0f"
                              style={
                                {
                                  "--extracted-r6o4lv": "rgb(9, 9, 9)",
                                  "--framer-link-text-color": "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                  transform: "none",
                                  opacity: "1",
                                } as CSSProperties
                              }
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text"
                                style={
                                  {
                                    "--framer-font-size": "18px",
                                    "--framer-font-weight": "500",
                                    "--framer-letter-spacing": "-0.04em",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(9, 9, 9))",
                                  } as CSSProperties
                                }
                                dir="auto"
                              >
                                Revenue relies on relationships that only you hold.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="framer-zf446g"
                        style={{
                          backgroundColor:
                            "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
                          borderRadius: "18px",
                          opacity: "1",
                        }}
                      >
                        <div className="framer-e9hlci" style={{ opacity: "1" }}>
                          <div className="framer-1q0xq54" style={{ opacity: "1" }}>
                            <div className="framer-1hr4c3d" style={{ opacity: "1" }}>
                              <div
                                className="framer-jrui4a"
                                style={{
                                  backgroundColor:
                                    "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                                  borderRadius: "50%",
                                  opacity: "1",
                                }}
                              />
                              <div
                                className="framer-vhm7hd"
                                style={{
                                  backgroundColor:
                                    "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                                  borderRadius: "50%",
                                  opacity: "1",
                                }}
                              />
                              <div
                                className="framer-ceiqhq"
                                style={{
                                  backgroundColor:
                                    "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                                  borderRadius: "50%",
                                  opacity: "1",
                                }}
                              />
                              <div
                                className="framer-1yakf8u"
                                style={{
                                  backgroundColor: "rgb(237, 237, 237)",
                                  borderRadius: "50%",
                                  opacity: "1",
                                }}
                              />
                            </div>
                            <div
                              className="framer-1db9cpp"
                              style={
                                {
                                  "--extracted-r6o4lv": "rgb(9, 9, 9)",
                                  "--framer-link-text-color": "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                  opacity: "0.5",
                                  transform: "none",
                                } as CSSProperties
                              }
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text"
                                style={
                                  {
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "10px",
                                    "--framer-font-weight": "600",
                                    "--framer-letter-spacing": "-0.04em",
                                    "--framer-line-height": "1em",
                                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(9, 9, 9))",
                                  } as CSSProperties
                                }
                              >
                                03
                              </p>
                            </div>
                          </div>
                          <div className="framer-dc1nec" style={{ opacity: "1" }}>
                            <div
                              className="framer-1bmhiw"
                              style={
                                {
                                  "--extracted-r6o4lv": "rgb(9, 9, 9)",
                                  "--framer-link-text-color": "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                  transform: "none",
                                  opacity: "1",
                                } as CSSProperties
                              }
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text"
                                style={
                                  {
                                    "--framer-font-size": "18px",
                                    "--framer-font-weight": "500",
                                    "--framer-letter-spacing": "-0.04em",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(9, 9, 9))",
                                  } as CSSProperties
                                }
                                dir="auto"
                              >
                                Delivery changes every time, so it is hard to price, repeat or hand over.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="framer-r36i26"
                        style={{
                          backgroundColor:
                            "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
                          borderRadius: "18px",
                          opacity: "1",
                        }}
                      >
                        <div className="framer-1wy1wrb" style={{ opacity: "1" }}>
                          <div className="framer-jyufdl" style={{ opacity: "1" }}>
                            <div
                              className="framer-g2hcpe"
                              style={{
                                backgroundColor:
                                  "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                                borderRadius: "50%",
                                opacity: "1",
                              }}
                            />
                            <div
                              className="framer-1d2ajqc"
                              style={{
                                backgroundColor:
                                  "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                                borderRadius: "50%",
                                opacity: "1",
                              }}
                            />
                            <div
                              className="framer-cycz2"
                              style={{
                                backgroundColor:
                                  "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                                borderRadius: "50%",
                                opacity: "1",
                              }}
                            />
                            <div
                              className="framer-9oys8j"
                              style={{
                                backgroundColor:
                                  "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                                borderRadius: "50%",
                                opacity: "1",
                              }}
                            />
                          </div>
                          <div
                            className="framer-1ygxvzr"
                            style={
                              {
                                "--extracted-r6o4lv": "rgb(9, 9, 9)",
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                opacity: "0.5",
                                transform: "none",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text"
                              style={
                                {
                                  "--framer-font-family":
                                    '"Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "10px",
                                  "--framer-font-weight": "600",
                                  "--framer-letter-spacing": "-0.04em",
                                  "--framer-line-height": "1em",
                                  "--framer-text-color": "var(--extracted-r6o4lv, rgb(9, 9, 9))",
                                } as CSSProperties
                              }
                            >
                              04
                            </p>
                          </div>
                        </div>
                        <div className="framer-1uxsu2" style={{ opacity: "1" }}>
                          <div
                            className="framer-1rgqb2s"
                            style={
                              {
                                "--extracted-2gxw0f": "rgb(9, 9, 9)",
                                "--extracted-r6o4lv": "rgb(9, 9, 9)",
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                transform: "none",
                                opacity: "1",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text"
                              style={
                                {
                                  "--framer-font-size": "18px",
                                  "--framer-font-weight": "500",
                                  "--framer-letter-spacing": "-0.04em",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "var(--extracted-r6o4lv, rgb(9, 9, 9))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              <br className="framer-text" />
                            </p>
                            <p
                              className="framer-text"
                              style={
                                {
                                  "--framer-font-size": "18px",
                                  "--framer-font-weight": "500",
                                  "--framer-letter-spacing": "-0.04em",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "var(--extracted-2gxw0f, rgb(9, 9, 9))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              The team is capable and stretched, but ownership is unclear and nobody can see the whole picture.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="framer-1sxg5cm-container flex-none"
                    style={
                      {
                        willChange: "transform",
                        opacity: "1",
                        transform: "none",
                        "--site-import-responsive-display": "block",
                      } as CSSProperties
                    }
                    data-site-import-mobile-variant=""
                  >
                    <ImportedDivMobileNew />
                  </div>
                </div>
                <div className="ssr-variant">
                  <div
                    className="framer-syvhqw [overflow:visible] [@media(max-width:767px)]:transform-none! [@media(max-width:767px)]:[opacity:1]! [@media(min-width:810px)_and_(max-width:1199.98px)]:[order:2]"
                    data-site-import-responsive="173"
                    data-site-import-desktop-variant=""
                  >
                    <div
                      className="framer-3kb09f [word-break:break-word] [@media(min-width:1200px)_and_(max-width:1199.98px)]:[order:0] [@media(min-width:810px)_and_(max-width:1199.98px)]:[order:0]"
                      style={{ opacity: "1", transform: "none" }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-35ylpl"
                        style={{ "--framer-text-alignment": "left" } as CSSProperties}
                        dir="auto"
                      >
                        <span style={{ opacity: "1" }}>Built inside founder-led businesses.</span>{" "}
                        <span
                          className="framer-text"
                          style={{ "--framer-text-color": "rgba(10, 10, 10, 0.6)" } as CSSProperties}
                        >
                          Shaped by experience at JPMorgan, IAG Cargo, British Airways, Deloitte and
                          Forensic Risk Alliance.
                        </span>
                      </p>
                    </div>
                  </div>
                  <div
                    className="framer-syvhqw [overflow:visible] [@media(min-width:810px)_and_(max-width:1199.98px)]:[order:2]"
                    style={
                      {
                        opacity: "1",
                        willChange: "transform",
                        transform: "none",
                        "--site-import-responsive-display": "flex",
                      } as CSSProperties
                    }
                    data-site-import-mobile-variant=""
                  >
                    <div
                      className="framer-3kb09f [word-break:break-word] [@media(min-width:1200px)_and_(max-width:1199.98px)]:[order:0] [@media(min-width:810px)_and_(max-width:1199.98px)]:[order:0]"
                      style={{ willChange: "transform", opacity: "1", transform: "none" }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <h2
                        className="framer-text framer-styles-preset-4vuy4n"
                        style={{ "--framer-text-alignment": "left" } as CSSProperties}
                      >
                        Built inside founder-led businesses.
                        <br className="framer-text" />
                        <span
                          className="framer-text"
                          style={{ "--framer-text-color": "rgba(10, 10, 10, 0.6)" } as CSSProperties}
                        >
                          Shaped by experience at JPMorgan, IAG Cargo, British Airways, Deloitte and
                          Forensic Risk Alliance.
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="framer-1g1haok items-center flex-none flex-col flex-nowrap gap-[5px] place-content-center [overflow:hidden]">
                  <div className="framer-1wou3v3 flex-none gap-[4px] justify-center [overflow:hidden]">
                    <div className="ssr-variant">
                      <div
                        className="framer-1opj8t5-container flex-none [place-self:start] [@media(max-width:809.98px)]:[order:0]"
                        style={{ willChange: "transform", opacity: "1", transform: "none" }}
                        data-site-import-desktop-variant=""
                      >
                        <div
                          style={{
                            backgroundColor:
                              "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
                            height: "100%",
                            width: "100%",
                            borderRadius: "14px",
                            opacity: "1",
                          }}
                          className={
                            isMobile
                              ? "framer-FtY6U framer-sjdfbs framer-v-q3exq2"
                              : "framer-FtY6U framer-sjdfbs"
                          }
                          data-site-import-responsive="184"
                        >
                          <div className="framer-1mce2ck" style={{ opacity: "1" }}>
                            <div
                              style={
                                {
                                  position: "absolute",
                                  borderRadius: "inherit",
                                  cornerShape: "inherit",
                                  inset: "0px",
                                } as CSSProperties
                              }
                            >
                              <img
                                style={
                                  {
                                    display: "block",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "inherit",
                                    cornerShape: "inherit",
                                    objectPosition: "center center",
                                    objectFit: "contain",
                                  } as CSSProperties
                                }
                                decoding="auto"
                                width="301"
                                height="90"
                                src="/site-assets/c81fea53b431ba52.avif"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="framer-1opj8t5-container flex-none [place-self:start] [@media(max-width:809.98px)]:[order:0]"
                        style={
                          {
                            willChange: "transform",
                            opacity: "1",
                            transform: "none",
                            "--site-import-responsive-display": "block",
                          } as CSSProperties
                        }
                        data-site-import-mobile-variant=""
                      >
                        <div
                          className="framer-FtY6U framer-sjdfbs framer-v-q3exq2"
                          style={{
                            backgroundColor:
                              "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
                            height: "100%",
                            width: "100%",
                            borderRadius: "14px",
                            opacity: "1",
                          }}
                        >
                          <div className="framer-1mce2ck" style={{ opacity: "1" }}>
                            <div
                              style={
                                {
                                  position: "absolute",
                                  borderRadius: "inherit",
                                  cornerShape: "inherit",
                                  inset: "0px",
                                } as CSSProperties
                              }
                            >
                              <img
                                style={
                                  {
                                    display: "block",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "inherit",
                                    cornerShape: "inherit",
                                    objectPosition: "center center",
                                    objectFit: "contain",
                                  } as CSSProperties
                                }
                                decoding="auto"
                                loading="lazy"
                                width="301"
                                height="90"
                                src="/site-assets/c81fea53b431ba52.avif"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ssr-variant">
                      <div
                        className="framer-zi0cmu-container flex-none [place-self:start] [@media(max-width:809.98px)]:[order:6]"
                        style={{ willChange: "transform", opacity: "1", transform: "none" }}
                        data-site-import-desktop-variant=""
                      >
                        <div
                          style={{
                            backgroundColor:
                              "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
                            height: "100%",
                            width: "100%",
                            borderRadius: "14px",
                            opacity: "1",
                          }}
                          className={
                            isMobile
                              ? "framer-FtY6U framer-sjdfbs framer-v-q3exq2"
                              : "framer-FtY6U framer-sjdfbs"
                          }
                          data-site-import-responsive="189"
                        >
                          <div className="framer-1mce2ck" style={{ opacity: "1" }}>
                            <div
                              style={
                                {
                                  position: "absolute",
                                  borderRadius: "inherit",
                                  cornerShape: "inherit",
                                  inset: "0px",
                                } as CSSProperties
                              }
                            >
                              <img
                                style={
                                  {
                                    display: "block",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "inherit",
                                    cornerShape: "inherit",
                                    objectPosition: "center center",
                                    objectFit: "contain",
                                  } as CSSProperties
                                }
                                decoding="auto"
                                width="207"
                                height="87"
                                src="/site-assets/dcf4bb1fc5ed830f.avif"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="framer-zi0cmu-container flex-none [place-self:start] [@media(max-width:809.98px)]:[order:6]"
                        style={
                          {
                            willChange: "transform",
                            opacity: "1",
                            transform: "none",
                            "--site-import-responsive-display": "block",
                          } as CSSProperties
                        }
                        data-site-import-mobile-variant=""
                      >
                        <div
                          className="framer-FtY6U framer-sjdfbs framer-v-q3exq2"
                          style={{
                            backgroundColor:
                              "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
                            height: "100%",
                            width: "100%",
                            borderRadius: "14px",
                            opacity: "1",
                          }}
                        >
                          <div className="framer-1mce2ck" style={{ opacity: "1" }}>
                            <div
                              style={
                                {
                                  position: "absolute",
                                  borderRadius: "inherit",
                                  cornerShape: "inherit",
                                  inset: "0px",
                                } as CSSProperties
                              }
                            >
                              <img
                                style={
                                  {
                                    display: "block",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "inherit",
                                    cornerShape: "inherit",
                                    objectPosition: "center center",
                                    objectFit: "contain",
                                  } as CSSProperties
                                }
                                decoding="async"
                                loading="lazy"
                                width="207"
                                height="87"
                                src="/site-assets/dcf4bb1fc5ed830f.avif"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="framer-1oboxr items-center flex-none flex-row flex-nowrap gap-[10px] place-content-center [overflow:hidden] [place-self:start]"
                      style={
                        {
                          "--site-reveal": "1",
                          willChange: "transform",
                          opacity: "1",
                          transform: "none",
                        } as CSSProperties
                      }
                    >
                      <div className="framer-1l1mzsb flex-none">
                        <div
                          style={
                            {
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              inset: "0px",
                            } as CSSProperties
                          }
                        >
                          <img
                            style={
                              {
                                display: "block",
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                objectPosition: "center center",
                                objectFit: "contain",
                              } as CSSProperties
                            }
                            decoding="auto"
                            width="232"
                            height="164"
                            src="/site-assets/f866243b3908d102.avif"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="ssr-variant">
                      <div
                        className="framer-2xr870-container flex-none self-center justify-self-center [@media(max-width:809.98px)]:[order:7]"
                        style={{ willChange: "transform", opacity: "1", transform: "none" }}
                        data-site-import-desktop-variant=""
                      >
                        <div
                          style={{
                            backgroundColor:
                              "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
                            height: "100%",
                            width: "100%",
                            borderRadius: "14px",
                            opacity: "1",
                          }}
                          className={
                            isMobile
                              ? "framer-FtY6U framer-sjdfbs framer-v-q3exq2"
                              : "framer-FtY6U framer-sjdfbs"
                          }
                          data-site-import-responsive="198"
                        >
                          <div className="framer-1mce2ck" style={{ opacity: "1" }}>
                            <div
                              style={
                                {
                                  position: "absolute",
                                  borderRadius: "inherit",
                                  cornerShape: "inherit",
                                  inset: "0px",
                                } as CSSProperties
                              }
                            >
                              <img
                                style={
                                  {
                                    display: "block",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "inherit",
                                    cornerShape: "inherit",
                                    objectPosition: "center center",
                                    objectFit: "contain",
                                  } as CSSProperties
                                }
                                decoding="auto"
                                width="227"
                                height="140"
                                src="/site-assets/695eb9821077a6d0.avif"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="framer-2xr870-container flex-none self-center justify-self-center [@media(max-width:809.98px)]:[order:7]"
                        style={
                          {
                            willChange: "transform",
                            opacity: "1",
                            transform: "none",
                            "--site-import-responsive-display": "block",
                          } as CSSProperties
                        }
                        data-site-import-mobile-variant=""
                      >
                        <div
                          className="framer-FtY6U framer-sjdfbs framer-v-q3exq2"
                          style={{
                            backgroundColor:
                              "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
                            height: "100%",
                            width: "100%",
                            borderRadius: "14px",
                            opacity: "1",
                          }}
                        >
                          <div className="framer-1mce2ck" style={{ opacity: "1" }}>
                            <div
                              style={
                                {
                                  position: "absolute",
                                  borderRadius: "inherit",
                                  cornerShape: "inherit",
                                  inset: "0px",
                                } as CSSProperties
                              }
                            >
                              <img
                                style={
                                  {
                                    display: "block",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "inherit",
                                    cornerShape: "inherit",
                                    objectPosition: "center center",
                                    objectFit: "contain",
                                  } as CSSProperties
                                }
                                decoding="async"
                                loading="lazy"
                                width="191"
                                height="64"
                                src="/site-assets/c547f0eb983b8e7f.avif"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="framer-1rwgrlr items-center flex-none flex-row flex-nowrap gap-[10px] place-content-center [overflow:hidden] [place-self:start] [@media(max-width:809.98px)]:[order:2]"
                      style={{ willChange: "transform", opacity: "1", transform: "none" }}
                    >
                      <div className="ssr-variant">
                        <div className="framer-1e3atm2 flex-none">
                          <div
                            style={
                              {
                                position: "absolute",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                inset: "0px",
                              } as CSSProperties
                            }
                          >
                            <img
                              style={
                                {
                                  display: "block",
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "inherit",
                                  cornerShape: "inherit",
                                  objectPosition: "center center",
                                  objectFit: "contain",
                                } as CSSProperties
                              }
                              decoding="auto"
                              width="6305"
                              height="1697"
                              sizes="117px"
                              srcSet="/site-assets/91f8db5145975fb2.avif 512w, /site-assets/30f8b6c8a675fecc.webp 1024w, /site-assets/b1a6b596c45d0059.webp 2048w, /site-assets/768aaa4d6a460d06.webp 4096w, /site-assets/505f3d9622af146e.webp 6305w"
                              src="/site-assets/505f3d9622af146e.webp"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ssr-variant">
                      <div
                        className="framer-6ijc8z-container flex-none [place-self:start] [@media(max-width:809.98px)]:[order:1]"
                        style={{ willChange: "transform", opacity: "1", transform: "none" }}
                        data-site-import-desktop-variant=""
                      >
                        <div
                          style={{
                            backgroundColor:
                              "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
                            height: "100%",
                            width: "100%",
                            borderRadius: "14px",
                            opacity: "1",
                          }}
                          className={
                            isMobile
                              ? "framer-FtY6U framer-sjdfbs framer-v-q3exq2"
                              : "framer-FtY6U framer-sjdfbs"
                          }
                          data-site-import-responsive="207"
                        >
                          <div className="framer-1mce2ck" style={{ opacity: "1" }}>
                            <div
                              style={
                                {
                                  position: "absolute",
                                  borderRadius: "inherit",
                                  cornerShape: "inherit",
                                  inset: "0px",
                                } as CSSProperties
                              }
                            >
                              <img
                                style={
                                  {
                                    display: "block",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "inherit",
                                    cornerShape: "inherit",
                                    objectPosition: "center center",
                                    objectFit: "contain",
                                  } as CSSProperties
                                }
                                decoding="auto"
                                width="359"
                                height="140"
                                src="/site-assets/f679ac8c57e8d3f2.avif"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="framer-6ijc8z-container flex-none [place-self:start] [@media(max-width:809.98px)]:[order:1]"
                        style={
                          {
                            willChange: "transform",
                            opacity: "1",
                            transform: "none",
                            "--site-import-responsive-display": "block",
                          } as CSSProperties
                        }
                        data-site-import-mobile-variant=""
                      >
                        <div
                          className="framer-FtY6U framer-sjdfbs framer-v-q3exq2"
                          style={{
                            backgroundColor:
                              "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
                            height: "100%",
                            width: "100%",
                            borderRadius: "14px",
                            opacity: "1",
                          }}
                        >
                          <div className="framer-1mce2ck" style={{ opacity: "1" }}>
                            <div
                              style={
                                {
                                  position: "absolute",
                                  borderRadius: "inherit",
                                  cornerShape: "inherit",
                                  inset: "0px",
                                } as CSSProperties
                              }
                            >
                              <img
                                style={
                                  {
                                    display: "block",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "inherit",
                                    cornerShape: "inherit",
                                    objectPosition: "center center",
                                    objectFit: "contain",
                                  } as CSSProperties
                                }
                                decoding="auto"
                                loading="lazy"
                                width="451"
                                height="187"
                                src="/site-assets/171ff8a41dccad91.avif"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="framer-uu59zf items-center flex-none flex-row flex-nowrap gap-[10px] place-content-center [overflow:hidden] [place-self:start] [@media(max-width:809.98px)]:[order:4]"
                      style={{ willChange: "transform", opacity: "0.97157", transform: "none" }}
                    >
                      <div className="ssr-variant">
                        <div className="framer-rumpb6 flex-none">
                          <div
                            style={
                              {
                                position: "absolute",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                inset: "0px",
                              } as CSSProperties
                            }
                          >
                            <img
                              style={
                                {
                                  display: "block",
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "inherit",
                                  cornerShape: "inherit",
                                  objectPosition: "center center",
                                  objectFit: "contain",
                                } as CSSProperties
                              }
                              decoding="auto"
                              width="791"
                              height="722"
                              src="/site-assets/d27b8e96c95a505e.avif"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="framer-1mevbmm-container flex-none [place-self:start]"
                      style={
                        {
                          "--site-reveal": "1",
                          willChange: "transform",
                          opacity: "1",
                          transform: "none",
                        } as CSSProperties
                      }
                    >
                      <div
                        className="framer-FtY6U framer-sjdfbs"
                        style={{
                          backgroundColor:
                            "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
                          height: "100%",
                          width: "100%",
                          borderRadius: "14px",
                          opacity: "1",
                        }}
                      >
                        <div className="framer-1mce2ck" style={{ opacity: "1" }}>
                          <div
                            style={
                              {
                                position: "absolute",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                inset: "0px",
                              } as CSSProperties
                            }
                          >
                            <img
                              style={
                                {
                                  display: "block",
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "inherit",
                                  cornerShape: "inherit",
                                  objectPosition: "center center",
                                  objectFit: "contain",
                                } as CSSProperties
                              }
                              decoding="auto"
                              width="1799"
                              height="541"
                              sizes="104px"
                              srcSet="/site-assets/6085aee5035b05fc.avif 512w, /site-assets/294f6b8bbc9ee8d6.webp 1024w, /site-assets/6898db01eefe046d.webp 1799w"
                              src="/site-assets/6898db01eefe046d.webp"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="framer-iuzfm3-container flex-none [place-self:start]"
                      style={
                        {
                          "--site-reveal": "1",
                          willChange: "transform",
                          opacity: "1",
                          transform: "none",
                        } as CSSProperties
                      }
                    >
                      <div
                        className="framer-FtY6U framer-sjdfbs"
                        style={{
                          backgroundColor:
                            "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
                          height: "100%",
                          width: "100%",
                          borderRadius: "14px",
                          opacity: "1",
                        }}
                      >
                        <div className="framer-1mce2ck" style={{ opacity: "1" }}>
                          <div
                            style={
                              {
                                position: "absolute",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                inset: "0px",
                              } as CSSProperties
                            }
                          >
                            <img
                              style={
                                {
                                  display: "block",
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "inherit",
                                  cornerShape: "inherit",
                                  objectPosition: "center center",
                                  objectFit: "contain",
                                } as CSSProperties
                              }
                              decoding="auto"
                              width="736"
                              height="222"
                              sizes="104px"
                              srcSet="/site-assets/0d39fa6762bcaa57.avif 512w, /site-assets/5713b6c917ce5a76.webp 736w"
                              src="/site-assets/5713b6c917ce5a76.webp"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ImportedDivLogo />
                </div>
                <div className="framer-nca5g3 items-center flex-none flex-col flex-nowrap gap-[10px] place-content-center [overflow:hidden] [@media(min-width:810px)_and_(max-width:1199.98px)]:[order:7]">
                  <div className="framer-1wxrrlw items-center flex-none flex-col flex-nowrap place-content-center [overflow:hidden]">
                    <WhoItsFor />
                    <WhatWeFix />
                  </div>
                  <div className="framer-jl86sh items-center flex-none flex-col flex-nowrap content-center justify-start [overflow:hidden]">
                    <WaysToWork />
                  </div>
                </div>
                <div className="framer-ok5s6j items-center flex-none flex-col flex-nowrap place-content-center [overflow:hidden] [@media(min-width:810px)_and_(max-width:1199.98px)]:[order:10]">
                  <Proof />
                  <div className="framer-rc5rib items-center flex-none flex-col flex-nowrap place-content-center [overflow:hidden]">
                    <div className="framer-153la16 items-center flex-none flex-col flex-nowrap place-content-center [overflow:hidden]">
                      <FounderAndTeam />
                      <Faq />
                    </div>
                  </div>
                </div>
              </main>
            </div>
            <StickyBooking />
          </div>
          <div id="overlay" />
          <div className="framer-1kvak31 grow" />
          <FinalClose />
        </div>
        <div id="template-overlay" />
      </div>
      <div
        style={
          {
            position: "absolute",
            overflow: "hidden",
            bottom: "0px",
            left: "0px",
            width: "0px",
            height: "0px",
            zIndex: "0",
            contain: "strict",
          } as CSSProperties
        }
        id="svg-templates"
        aria-hidden="true"
      >
        <svg viewBox="0 0 10 11" id="svg8926197795">
          <path
            d="M 1.498 0.795 L 1.498 1.445 C 1.498 1.523 1.53 1.598 1.585 1.654 C 1.64 1.709 1.715 1.74 1.794 1.74 L 7.883 1.74 L 0.086 9.537 C 0.031 9.592 0 9.667 0 9.745 C 0 9.824 0.031 9.899 0.087 9.954 L 0.546 10.414 C 0.661 10.529 0.848 10.529 0.964 10.414 L 8.76 2.617 L 8.76 8.707 C 8.76 8.785 8.791 8.86 8.846 8.915 C 8.902 8.971 8.977 9.002 9.055 9.002 L 9.705 9.002 C 9.783 9.002 9.858 8.971 9.913 8.915 C 9.969 8.86 10 8.785 10 8.707 L 10 0.795 C 10 0.717 9.969 0.642 9.913 0.587 C 9.858 0.531 9.783 0.5 9.705 0.5 L 1.793 0.5 C 1.715 0.5 1.64 0.531 1.585 0.587 C 1.529 0.642 1.498 0.717 1.498 0.795 Z"
            fill={
              'var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255)) /* {"name":"White"} */'
            }
            opacity="0.3"
          />
        </svg>
      </div>
    </>
  );
}

function ImportedNavTop({ menu }: { menu: ImportedMenu }) {
  return (
    <nav className="framer-120hnkq" style={{ opacity: "1" }}>
      <a
        className="framer-iogiyt framer-1a90gm8"
        style={{ opacity: "1" }}
        data-framer-page-link-current="true"
        href="/"
      >
        <div className="framer-kxb2zt-container" style={{ opacity: "1" }}>
          <div className="framer-g6S8P framer-1ppeyn8" style={{ opacity: "1" }}>
            <div
              className="framer-1lz6zv4"
              style={
                {
                  "--extracted-r6o4lv": "var(--variable-reference-HZSElEzAS-qBz_H6jdv)",
                  "--framer-paragraph-spacing": "0px",
                  "--variable-reference-HZSElEzAS-qBz_H6jdv":
                    "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                  transform: "none",
                  opacity: "1",
                } as CSSProperties
              }
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text"
                style={
                  {
                    "--framer-font-size": "11px",
                    "--framer-font-weight": "600",
                    "--framer-letter-spacing": "-0.04em",
                    "--framer-line-height": "110%",
                    "--framer-text-color":
                      "var(--extracted-r6o4lv, var(--variable-reference-HZSElEzAS-qBz_H6jdv))",
                  } as CSSProperties
                }
                dir="auto"
              >
                <span
                  className="coopilot-logo"
                  style={{
                    display: "block",
                    width: "119px",
                    height: "32px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/brand/coopilot-logo-horizontal.png"
                    alt="CooPilot"
                    style={{
                      display: "block",
                      height: "51px",
                      width: "138px",
                      maxWidth: "none",
                      marginLeft: "-9.5px",
                      marginTop: "-9.5px",
                    }}
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
      </a>
      <div className="coopilot-nav-links">
      <div className="framer-1ubnatg-container" style={{ opacity: "1" }}>
        <a
          className="framer-tlV8P framer-7g0p1o framer-1ljdjoh"
          style={{ opacity: "1" }}
          href="/#problem"
        >
          <div
            className="framer-xu6ifz"
            style={
              {
                "--extracted-r6o4lv": "rgb(9, 9, 9)",
                "--framer-paragraph-spacing": "0px",
                transform: "none",
                opacity: "1",
              } as CSSProperties
            }
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text"
              style={
                {
                  "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                  "--framer-font-weight": "600",
                  "--framer-letter-spacing": "-0.04em",
                  "--framer-line-height": "110%",
                  "--framer-text-color": "var(--extracted-r6o4lv, rgb(9, 9, 9))",
                } as CSSProperties
              }
            >
              The problem
            </p>
          </div>
          <div
            className="framer-1r3wqjw"
            style={
              {
                "--extracted-r6o4lv": "rgb(9, 9, 9)",
                "--framer-paragraph-spacing": "0px",
                opacity: "0.6",
                transform: "none",
              } as CSSProperties
            }
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text"
              style={
                {
                  "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                  "--framer-font-size": "9px",
                  "--framer-font-weight": "600",
                  "--framer-letter-spacing": "-0.04em",
                  "--framer-line-height": "100%",
                  "--framer-text-color": "var(--extracted-r6o4lv, rgb(9, 9, 9))",
                } as CSSProperties
              }
            />
          </div>
        </a>
      </div>
      <div className="framer-1phpovz-container" style={{ opacity: "1" }}>
        <a
          className="framer-tlV8P framer-7g0p1o framer-1ljdjoh"
          style={{ opacity: "1" }}
          href="/#founder"
        >
          <div
            className="framer-xu6ifz"
            style={
              {
                "--extracted-r6o4lv": "rgb(9, 9, 9)",
                "--framer-paragraph-spacing": "0px",
                transform: "none",
                opacity: "1",
              } as CSSProperties
            }
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text"
              style={
                {
                  "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                  "--framer-font-weight": "600",
                  "--framer-letter-spacing": "-0.04em",
                  "--framer-line-height": "110%",
                  "--framer-text-color": "var(--extracted-r6o4lv, rgb(9, 9, 9))",
                } as CSSProperties
              }
            >
              Founder
            </p>
          </div>
          <div
            className="framer-1r3wqjw"
            style={
              {
                "--extracted-r6o4lv": "rgb(9, 9, 9)",
                "--framer-paragraph-spacing": "0px",
                opacity: "0.6",
                transform: "none",
              } as CSSProperties
            }
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text"
              style={
                {
                  "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                  "--framer-font-size": "9px",
                  "--framer-font-weight": "600",
                  "--framer-letter-spacing": "-0.04em",
                  "--framer-line-height": "100%",
                  "--framer-text-color": "var(--extracted-r6o4lv, rgb(9, 9, 9))",
                } as CSSProperties
              }
            />
          </div>
        </a>
      </div>
      <div className="framer-1owejrv-container" style={{ opacity: "1" }}>
        <a
          className="framer-tlV8P framer-7g0p1o framer-1ljdjoh"
          style={{ opacity: "1" }}
          href="/#what-we-fix"
        >
          <div
            className="framer-xu6ifz"
            style={
              {
                "--extracted-r6o4lv": "rgb(9, 9, 9)",
                "--framer-paragraph-spacing": "0px",
                transform: "none",
                opacity: "1",
              } as CSSProperties
            }
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text"
              style={
                {
                  "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                  "--framer-font-weight": "600",
                  "--framer-letter-spacing": "-0.04em",
                  "--framer-line-height": "110%",
                  "--framer-text-color": "var(--extracted-r6o4lv, rgb(9, 9, 9))",
                } as CSSProperties
              }
            >
              What we fix
            </p>
          </div>
          <div
            className="framer-1r3wqjw"
            style={
              {
                "--extracted-r6o4lv": "rgb(9, 9, 9)",
                "--framer-paragraph-spacing": "0px",
                opacity: "0.6",
                transform: "none",
              } as CSSProperties
            }
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text"
              style={
                {
                  "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                  "--framer-font-size": "9px",
                  "--framer-font-weight": "600",
                  "--framer-letter-spacing": "-0.04em",
                  "--framer-line-height": "100%",
                  "--framer-text-color": "var(--extracted-r6o4lv, rgb(9, 9, 9))",
                } as CSSProperties
              }
            />
          </div>
        </a>
      </div>
      <div className="framer-1q78hcd-container" style={{ opacity: "1" }}>
        <a
          className="framer-tlV8P framer-7g0p1o framer-1ljdjoh"
          style={{ opacity: "1" }}
          href="/#proof"
        >
          <div
            className="framer-xu6ifz"
            style={
              {
                "--extracted-r6o4lv": "rgb(9, 9, 9)",
                "--framer-paragraph-spacing": "0px",
                transform: "none",
                opacity: "1",
              } as CSSProperties
            }
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text"
              style={
                {
                  "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                  "--framer-font-weight": "600",
                  "--framer-letter-spacing": "-0.04em",
                  "--framer-line-height": "110%",
                  "--framer-text-color": "var(--extracted-r6o4lv, rgb(9, 9, 9))",
                } as CSSProperties
              }
            >
              Proof
            </p>
          </div>
        </a>
      </div>
      <div className="framer-jspa9w-container" style={{ opacity: "1" }}>
        <a
          className="framer-tlV8P framer-7g0p1o framer-1ljdjoh"
          style={{ opacity: "1" }}
          href="/#ways-to-work"
        >
          <div
            className="framer-xu6ifz"
            style={
              {
                "--extracted-r6o4lv": "rgb(9, 9, 9)",
                "--framer-paragraph-spacing": "0px",
                transform: "none",
                opacity: "1",
              } as CSSProperties
            }
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text"
              style={
                {
                  "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                  "--framer-font-weight": "600",
                  "--framer-letter-spacing": "-0.04em",
                  "--framer-line-height": "110%",
                  "--framer-text-color": "var(--extracted-r6o4lv, rgb(9, 9, 9))",
                } as CSSProperties
              }
            >
              Ways to work
            </p>
          </div>
        </a>
      </div>
      </div>
      <style>{`
        .framer-v-v89dtt .framer-120hnkq {
          justify-content: flex-start;
        }
        .coopilot-nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 1100px) {
          .coopilot-nav-links { gap: 16px; }
        }
        @media (max-width: 860px) {
          [data-site-import-desktop-header] .coopilot-logo {
            width: 100px !important;
            height: 27px !important;
          }
          [data-site-import-desktop-header] .coopilot-logo img {
            width: 116px !important;
            height: 43px !important;
            margin-left: -8px !important;
            margin-top: -8px !important;
          }
          .framer-v-v89dtt.framer-bzu5mb {
            padding-left: 20px;
            padding-right: 20px;
          }
          .coopilot-nav-links { gap: 12px; }
        }
        .coopilot-header-book,
        .coopilot-menu-book {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 36px;
          padding: 0 14px;
          border-radius: 999px;
          background: #315eeb;
          color: #fff;
          font-family: "Inter", "Inter Placeholder", sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: -0.04em;
          line-height: 1;
          text-decoration: none;
          white-space: nowrap;
          flex: none;
        }
        .coopilot-header-book { order: 6; }
        .coopilot-header-book:hover,
        .coopilot-menu-book:hover { background: #274ed0; }
        .coopilot-header-book:focus-visible,
        .coopilot-menu-book:focus-visible {
          outline: 2px solid #14253d;
          outline-offset: 3px;
        }
        .coopilot-menu-book { margin-top: 8px; }
        header.framer-cTjda { box-shadow: inset 0 -1px 0 rgba(20, 37, 61, 0.08); }
        header[data-menu-open] .framer-1rfamfy {
          gap: 32px !important;
          padding-top: 28px !important;
        }
      `}</style>
      <a className="coopilot-header-book" href="/#book">
        Book a discovery call
      </a>
    </nav>
  );
}

function ImportedHeaderPhone({ menu }: { menu: ImportedMenu }) {
  return (
    <header
      data-menu-open={menu.open ? "true" : undefined}
      className="framer-cTjda framer-m9VkI framer-d3BN7 framer-Zqalg framer-bzu5mb framer-v-12w42s8"
      style={
        {
          backdropFilter: "none",
          backgroundColor: "var(--token-eea70a16-506d-4b3b-87b7-e85e653a6e7c, rgb(245, 245, 245))",
          width: "100%",
          opacity: "1",
          willChange: "auto",
        } as CSSProperties
      }
    >
      <nav className="framer-120hnkq" style={{ opacity: "1" }}>
        <a
          className="framer-iogiyt framer-1a90gm8"
          style={{ opacity: "1" }}
          data-framer-page-link-current="true"
          href="/"
        >
          <div className="framer-kxb2zt-container" style={{ opacity: "1" }}>
            <div className="framer-g6S8P framer-1ppeyn8" style={{ opacity: "1" }}>
              <div
                className="framer-1lz6zv4"
                style={
                  {
                    "--extracted-r6o4lv": "var(--variable-reference-HZSElEzAS-qBz_H6jdv)",
                    "--framer-paragraph-spacing": "0px",
                    "--variable-reference-HZSElEzAS-qBz_H6jdv":
                      "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                    transform: "none",
                    opacity: "1",
                  } as CSSProperties
                }
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="framer-text"
                  style={
                    {
                      "--framer-font-size": "11px",
                      "--framer-font-weight": "600",
                      "--framer-letter-spacing": "-0.04em",
                      "--framer-line-height": "110%",
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--variable-reference-HZSElEzAS-qBz_H6jdv))",
                    } as CSSProperties
                  }
                  dir="auto"
                >
                  <span
                    className="coopilot-logo"
                    style={{
                      display: "block",
                      width: "119px",
                      height: "32px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src="/brand/coopilot-logo-horizontal.png"
                      alt="CooPilot"
                      style={{
                        display: "block",
                        height: "51px",
                        width: "138px",
                        maxWidth: "none",
                        marginLeft: "-9.5px",
                        marginTop: "-9.5px",
                      }}
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </a>
        <div
          data-menu-toggle=""
          role="button"
          aria-label={menu.open ? "Close menu" : "Open menu"}
          aria-expanded={menu.open}
          onClick={menu.toggle}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              menu.toggle();
            }
          }}
          className="framer-ednsow"
          style={{ opacity: "1" }}
          tabIndex={0}
        >
          <div className="framer-eda3z9-container" style={{ opacity: "1" }}>
            <div className="framer-WH8C6 framer-1qd80pl" style={{ opacity: "1" }}>
              <div
                className="framer-1jxc6iw"
                style={{
                  backgroundColor:
                    "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                  transform: "none",
                  opacity: "1",
                }}
              />
              <div
                className="framer-qxejnu"
                style={{
                  backgroundColor:
                    "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                  transform: "none",
                  opacity: "1",
                }}
              />
            </div>
          </div>
        </div>
      </nav>
      <div
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a")) menu.close();
        }}
        className="framer-1rfamfy left-[24px] right-[24px] top-[-604px]"
        style={{ opacity: "0" }}
      >
        <nav className="framer-ugu5i9" style={{ opacity: "1" }}>
          <div className="framer-6z5t2m" style={{ opacity: "1" }}>
            <div className="framer-1l0v3f0-container" style={{ opacity: "1" }}>
              <a
                className="framer-IFf4n framer-14ac7s4 framer-1435c2t"
                style={{ opacity: "1" }}
                href="/#problem"
                tabIndex={0}
              >
                <div
                  className="framer-ggkluq"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                      "--framer-paragraph-spacing": "0px",
                      transform: "none",
                      opacity: "1",
                    } as CSSProperties
                  }
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text"
                    style={
                      {
                        "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                        "--framer-font-size": "32px",
                        "--framer-font-weight": "600",
                        "--framer-letter-spacing": "-0.06em",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10)))",
                      } as CSSProperties
                    }
                  >
                    The problem
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="framer-f7i6o0" style={{ opacity: "1" }}>
            <div className="framer-qy8ut1-container" style={{ opacity: "1" }}>
              <a
                className="framer-IFf4n framer-14ac7s4 framer-1435c2t"
                style={{ opacity: "1" }}
                href="/#what-we-fix"
                tabIndex={0}
              >
                <div
                  className="framer-ggkluq"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                      "--framer-paragraph-spacing": "0px",
                      transform: "none",
                      opacity: "1",
                    } as CSSProperties
                  }
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text"
                    style={
                      {
                        "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                        "--framer-font-size": "32px",
                        "--framer-font-weight": "600",
                        "--framer-letter-spacing": "-0.06em",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10)))",
                      } as CSSProperties
                    }
                  >
                    What we fix
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="framer-9p1fl7" style={{ opacity: "1" }}>
            <div className="framer-1cb9u8q-container" style={{ opacity: "1" }}>
              <a
                className="framer-IFf4n framer-14ac7s4 framer-1435c2t"
                style={{ opacity: "1" }}
                href="/#ways-to-work"
                tabIndex={0}
              >
                <div
                  className="framer-ggkluq"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                      "--framer-paragraph-spacing": "0px",
                      transform: "none",
                      opacity: "1",
                    } as CSSProperties
                  }
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text"
                    style={
                      {
                        "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                        "--framer-font-size": "32px",
                        "--framer-font-weight": "600",
                        "--framer-letter-spacing": "-0.06em",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10)))",
                      } as CSSProperties
                    }
                  >
                    Ways to work
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="framer-15pwy5" style={{ opacity: "1" }}>
            <div className="framer-dn12q8-container" style={{ opacity: "1" }}>
              <a
                className="framer-IFf4n framer-14ac7s4 framer-1435c2t"
                style={{ opacity: "1" }}
                href="/#proof"
                tabIndex={0}
              >
                <div
                  className="framer-ggkluq"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                      "--framer-paragraph-spacing": "0px",
                      transform: "none",
                      opacity: "1",
                    } as CSSProperties
                  }
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text"
                    style={
                      {
                        "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                        "--framer-font-size": "32px",
                        "--framer-font-weight": "600",
                        "--framer-letter-spacing": "-0.06em",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10)))",
                      } as CSSProperties
                    }
                  >
                    Proof
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="framer-1tm8ror" style={{ opacity: "1" }}>
            <div className="framer-lhw02v-container" style={{ opacity: "1" }}>
              <a
                className="framer-IFf4n framer-14ac7s4 framer-1435c2t"
                style={{ opacity: "1" }}
                href="/#founder"
                tabIndex={0}
              >
                <div
                  className="framer-ggkluq"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                      "--framer-paragraph-spacing": "0px",
                      transform: "none",
                      opacity: "1",
                    } as CSSProperties
                  }
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text"
                    style={
                      {
                        "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                        "--framer-font-size": "32px",
                        "--framer-font-weight": "600",
                        "--framer-letter-spacing": "-0.06em",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10)))",
                      } as CSSProperties
                    }
                  >
                    Founder
                  </p>
                </div>
                <div
                  className="framer-8k52a7"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                      "--framer-paragraph-spacing": "0px",
                      transform: "none",
                      opacity: "1",
                    } as CSSProperties
                  }
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text"
                    style={
                      {
                        "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                        "--framer-font-size": "32px",
                        "--framer-font-weight": "600",
                        "--framer-letter-spacing": "-0.06em",
                        "--framer-line-height": "120%",
                        "--framer-text-alignment": "center",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10)))",
                      } as CSSProperties
                    }
                  >
                    Founder
                  </p>
                </div>
              </a>
            </div>
          </div>
        </nav>
        <a className="coopilot-menu-book" href="/#book">
          Book a discovery call
        </a>
      </div>
    </header>
  );
}

function ImportedSectionHero() {
  return (
    <section
      className="framer-ykgwn3 items-center flex-none flex-col flex-nowrap place-content-center [overflow:hidden] [padding:60px_0_0] [@media(min-width:810px)_and_(max-width:1199.98px)]:[order:0]"
      id="hero"
    >
      <style>{`
        #hero .framer-13u7xh5,
        #hero .framer-uso5x1 { display: none !important; }
        #hero .framer-11ke0tc { min-height: 100%; align-items: center; }
        #hero .framer-1kxwov3 {
          width: 100%;
          min-height: 100%;
          justify-content: center;
          align-items: center;
          padding: 96px 28px 168px;
          box-sizing: border-box;
          overflow: visible;
        }
        .coopilot-hero-copy {
          position: relative;
          z-index: 2;
          width: min(860px, 100%);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          color: #f5f5f5;
        }
        .coopilot-hero-copy p { margin: 0; }
        .coopilot-hero-eyebrow {
          font-family: "Inter", "Inter Placeholder", sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: -0.03em;
          line-height: 1.4;
          color: rgba(245, 245, 245, 0.72);
        }
        .coopilot-hero-copy h1 {
          margin: 18px 0 0;
          font-family: "Inter", "Inter Placeholder", sans-serif;
          font-size: clamp(32px, 4.2vw, 56px);
          font-weight: 600;
          letter-spacing: -0.055em;
          line-height: 1.08;
          color: #f5f5f5;
        }
        .coopilot-hero-copy h1 span {
          display: block;
          color: rgba(245, 245, 245, 0.72);
        }
        .coopilot-hero-intro {
          margin-top: 22px !important;
          max-width: 62ch;
          font-family: "Inter", "Inter Placeholder", sans-serif;
          font-size: 17px;
          font-weight: 500;
          letter-spacing: -0.03em;
          line-height: 1.5;
          color: rgba(245, 245, 245, 0.78);
        }
        .coopilot-hero-book {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 28px;
          height: 44px;
          padding: 0 18px;
          border-radius: 999px;
          background: #f5f5f5;
          color: #14253d;
          font-family: "Inter", "Inter Placeholder", sans-serif;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: -0.03em;
          line-height: 1;
          text-decoration: none;
        }
        .coopilot-hero-book:hover { background: #ffffff; }
        .coopilot-hero-book:focus-visible {
          outline: 2px solid #f5f5f5;
          outline-offset: 3px;
        }
        .coopilot-hero-note {
          margin-top: 16px !important;
          max-width: 46ch;
          font-family: "Inter", "Inter Placeholder", sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: -0.02em;
          line-height: 1.45;
          color: rgba(245, 245, 245, 0.66);
        }
        .coopilot-hero-note + .coopilot-hero-note { margin-top: 8px !important; }
        @media (max-width: 809.98px) {
          #hero .framer-n6szvs { height: auto !important; }
          #hero .framer-1kxwov3 { height: auto; padding: 84px 16px 48px; }
          .coopilot-hero-copy h1 { font-size: 27px; letter-spacing: -0.06em; }
          .coopilot-hero-intro { font-size: 16px; }
        }
        .coopilot-kicker {
          margin: 0 0 16px;
          font-family: "Inter", "Inter Placeholder", sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: -0.04em;
          line-height: 1.2;
          color: rgba(10, 10, 10, 0.55);
        }
        .coopilot-problem-title {
          font-size: clamp(29px, 3vw, 38px) !important;
        }
        #problem > .framer-1tc7eep {
          display: none !important;
        }
        .framer-Uqv4b .framer-chennp {
          width: 720px;
          max-width: 720px;
        }
        .coopilot-trust {
          align-self: center;
          width: min(720px, calc(100% - 40px));
          margin: 0 0 -69px;
          font-family: "Inter", "Inter Placeholder", sans-serif;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: -0.03em;
          line-height: 1.45;
          text-align: left;
          color: #14253d;
        }
        .coopilot-trust span {
          display: block;
        }
        .coopilot-trust span:last-child {
          color: rgba(20, 37, 61, 0.62);
        }
        .framer-Uqv4b .framer-syvhqw {
          display: none !important;
        }
        @media (min-width: 1200px) {
          .coopilot-trust { margin-top: 64px; }
        }
        @media (min-width: 810px) and (max-width: 1199.98px) {
          .coopilot-trust { margin-top: 80px; margin-bottom: -20px; }
        }
        @media (max-width: 809.98px) {
          .coopilot-trust {
            align-self: stretch;
            width: auto;
            margin: 0 20px 0;
            font-size: 14px;
          }
          #problem .framer-17qbaax {
            padding-left: 20px;
            padding-right: 20px;
          }
          .framer-Uqv4b .framer-chennp {
            width: 100%;
            max-width: 100%;
          }
        }
        @media (min-width: 640px) and (max-width: 809.98px) {
          .coopilot-trust { margin-top: 270px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .coopilot-hero-book { transition: none; }
        }
      `}</style>
      <div className="ssr-variant">
        <div
          className="framer-19j2lei items-center flex-none flex-col flex-nowrap place-content-center [gap:0] [overflow:hidden] [z-index:3]"
          style={{ willChange: "transform", opacity: "1", transform: "none" }}
          data-site-import-responsive="60"
        >
          <div className="framer-n6szvs items-center gap-[10px] place-content-center [overflow:hidden]">
            <div className="framer-11ke0tc items-center flex-[1_0_0] flex-row flex-nowrap gap-[10px] place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
              <div className="framer-1kxwov3 items-center flex-none flex-col flex-nowrap content-center justify-start [overflow:hidden] [z-index:1]">
                <div className="coopilot-hero-copy">
                  <p className="coopilot-hero-eyebrow">
                    Operations for founder-led product and service businesses
                  </p>
                  <h1>
                    Your business runs on you.
                    <span>That is the problem we fix.</span>
                  </h1>
                  <p className="coopilot-hero-intro">
                    CooPilot helps founder-led businesses fix the operational mess that appears
                    when growth outpaces the way the company was set up. Our team of operators
                    steps in, builds the operating structure, reporting and ways of working, then
                    hands it over so the business can run without everything coming back to you.
                  </p>
                  <a className="coopilot-hero-book" href="/#book">
                    Book a discovery call
                  </a>
                  <p className="coopilot-hero-note">
                    30 minutes. You tell us what is breaking. We tell you what we would look at
                    first.
                  </p>
                  <p className="coopilot-hero-note">
                    Best suited to businesses with a team of around ten or more and revenue in the
                    seven figures or heading there.
                  </p>
                </div>
                <div className="framer-13u7xh5 [overflow:visible]">
                  <div className="framer-1spzsp8 items-end flex-none flex-col flex-nowrap content-end justify-center [gap:0] [overflow:visible] [@media(max-width:809.98px)]:[will-change:var(--framer-will-change-effect-override,transform)] [@media(min-width:810px)_and_(max-width:1199.98px)]:[order:0]">
                    <div
                      className="framer-al5dzj items-start flex-none flex-row flex-nowrap content-start justify-end [gap:0] [overflow:visible]"
                      style={{ opacity: "1", transform: "none", willChange: "transform" }}
                    >
                      <svg
                        className="framer-1xvkq0t [z-index:1]"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                        viewBox="0 0 911 178"
                      >
                        <foreignObject
                          className="framer-fit-text"
                          style={
                            {
                              overflow: "visible",
                              transformOrigin: "center center",
                            } as CSSProperties
                          }
                          width="100%"
                          height="100%"
                          transform="scale(0.83)"
                        >
                          <p
                            className="framer-text"
                            style={
                              {
                                "--framer-font-size": "74.66442707147895px",
                                "--framer-font-weight": "600",
                                "--framer-letter-spacing": "-0.06em",
                                "--framer-line-height": "120%",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Your business runs on you.
                          </p>
                          <p
                            className="framer-text"
                            style={
                              {
                                "--framer-font-size": "74.66442707147895px",
                                "--framer-font-weight": "600",
                                "--framer-letter-spacing": "-0.06em",
                                "--framer-line-height": "120%",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--token-e72c2c38-7ac5-45f3-a2f3-f30638950261, rgba(255, 255, 255, 0.7))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            That is the problem we fix.
                          </p>
                        </foreignObject>
                      </svg>
                    </div>
                    <div
                      className="framer-gxz29i items-center flex-none flex-row flex-nowrap [gap:0] [overflow:visible] [z-index:1] [@media(max-width:809.98px)]:min-h-[52px]"
                      style={{ opacity: "1", transform: "none" }}
                    >
                      <div className="framer-112dz82 self-stretch flex-none [overflow:hidden]" />
                    </div>
                  </div>
                  <div
                    className="framer-o59pbo items-start [overflow:hidden] [place-content:flex-start] [@media(max-width:809.98px)]:[z-index:1] [@media(min-width:810px)_and_(max-width:1199.98px)]:[order:1]"
                    style={{ opacity: "1", transform: "none", willChange: "transform" }}
                  >
                    <div className="framer-qjo1yr items-center flex-none flex-row flex-nowrap gap-[10px] content-center justify-start [overflow:hidden] [@media(min-width:810px)_and_(max-width:1199.98px)]:[order:0]" />
                    <div className="framer-1ghbbfu items-center flex-none flex-row flex-nowrap gap-[10px] content-center justify-start [overflow:hidden]" />
                    <div className="framer-2aaxi6 items-center flex-none flex-row flex-nowrap gap-[10px] content-center justify-start [overflow:hidden]" />
                    <div className="framer-7dqgyp items-center flex-none flex-row flex-nowrap gap-[10px] content-center justify-start [overflow:hidden]" />
                  </div>
                </div>
                <div className="framer-uso5x1 items-center justify-center place-content-center [overflow:var(--overflow-clip-fallback,clip)]">
                  <a
                    className="framer-1trsuh8 framer-lux5qc items-center flex-none flex-row flex-nowrap gap-[36px] place-content-center [overflow:visible]"
                    href="/#book"
                  >
                    <div
                      className="framer-yurzbx"
                      style={{ transform: "none" }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text"
                        style={
                          {
                            "--framer-font-size": "12px",
                            "--framer-font-weight": "600",
                            "--framer-letter-spacing": "-0.04em",
                            "--framer-line-height": "100%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color": "rgb(9, 9, 9)",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Book a discovery call
                      </p>
                    </div>
                  </a>
                </div>
                <div
                  className="framer-hsxobt [overflow:visible]"
                  style={{ opacity: "1", transform: "none", willChange: "transform" }}
                />
              </div>
            </div>
            <div
              className="framer-1b8ph4g items-center flex-none flex-row flex-nowrap gap-[10px] place-content-center [overflow:hidden] [z-index:0]"
              style={{ opacity: "1", transform: "none", willChange: "transform" }}
            >
              <div className="framer-1ksavor-container flex-none [z-index:1]">
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "100%",
                    backgroundColor: "#14253D",
                  }}
                />
              </div>
              <div className="framer-1i21uq8 flex-none [overflow:hidden] [z-index:1]" />
            </div>
          </div>
        </div>
      </div>
      <div className="ssr-variant">
        <div
          className="framer-7u37s9 items-center flex-none flex-col flex-nowrap place-content-center [overflow:visible] [scroll-margin-top:10px]"
          style={{
            willChange: "transform",
            opacity: "1",
            transform: "translateY(-290px) scale(0.95)",
          }}
          id="problem"
          data-site-import-responsive="90"
        >
          <p className="coopilot-trust">
            <span>Built inside founder-led businesses.</span>
            <span>
              Shaped by experience at JPMorgan, IAG Cargo, British Airways, Deloitte and Forensic
              Risk Alliance.
            </span>
          </p>
          <div className="framer-1tc7eep items-center flex-none flex-col flex-nowrap gap-[70px] place-content-center [overflow:hidden]">
            <div className="framer-71ja9w items-center flex-none flex-col flex-nowrap max-w-[1520px] place-content-center [overflow:hidden]">
              <div className="framer-r2z2q9 [@media(max-width:809.98px)]:items-start">
                <div className="ssr-variant">
                  <div className="framer-597p28-container flex-none [@media(max-width:809.98px)]:[order:0]">
                    <div
                      className="framer-DjsDO framer-Kqbr7 framer-1rxcnc items-center flex-row flex-nowrap gap-[9px] content-center justify-start [overflow:visible]"
                      style={{ opacity: "1" }}
                    >
                      <div className="framer-84myrx-container flex-none" style={{ opacity: "1" }}>
                        <div
                          className="framer-jxufl framer-ul5qem"
                          style={{
                            backgroundColor:
                              "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                            borderRadius: "50px",
                            opacity: "1",
                          }}
                        >
                          <div
                            className="framer-1f2k6fv"
                            style={{ backgroundColor: "rgb(255, 255, 255)", opacity: "1" }}
                          />
                          <div
                            className="framer-19zm8hd"
                            style={{
                              backgroundColor: "rgb(255, 255, 255)",
                              transform: "rotate(90deg)",
                              opacity: "1",
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="framer-158aegz"
                        style={
                          {
                            "--extracted-r6o4lv": "var(--variable-reference-RaZgbjWXH-c_ITIcTit)",
                            "--framer-paragraph-spacing": "0px",
                            "--variable-reference-RaZgbjWXH-c_ITIcTit":
                              "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                            transform: "none",
                            opacity: "1",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1hin0ji"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--variable-reference-RaZgbjWXH-c_ITIcTit))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          The problem
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-osej4p flex-none flex-col flex-nowrap min-h-[22px] [grid-column:span_3] [overflow:hidden] [@media(max-width:809.98px)]:min-w-[260px] [@media(max-width:809.98px)]:[order:1]" />
              </div>
            </div>
          </div>
          <div className="framer-17qbaax [overflow:visible] [@media(max-width:809.98px)]:[will-change:var(--framer-will-change-effect-override,transform)]">
            <div
              className="framer-chennp [word-break:break-word] [@media(max-width:809.98px)]:[order:0] [@media(min-width:1200px)_and_(max-width:1199.98px)]:[order:0] [@media(min-width:810px)_and_(max-width:1199.98px)]:[order:0]"
              style={{ opacity: "1", transform: "none" }}
              data-framer-component-type="RichTextContainer"
            >
              <p className="coopilot-kicker">The problem</p>
              <p
                className="framer-text framer-styles-preset-35ylpl coopilot-problem-title"
                style={{ "--framer-text-alignment": "left" } as CSSProperties}
                dir="auto"
              >
                <span style={{ display: "inline-block", willChange: "transform" }}>
                  You have proved the business.
                </span>{" "}
                <span
                  className="framer-text"
                  style={{ "--framer-text-color": "rgba(10, 10, 10, 0.6)" } as CSSProperties}
                >
                  <span style={{ display: "inline-block", willChange: "transform" }}>
                    The operation has not caught up.
                  </span>
                </span>
              </p>
              <p
                className="framer-text"
                style={
                  {
                    "--framer-font-size": "18px",
                    "--framer-font-weight": "500",
                    "--framer-letter-spacing": "-0.04em",
                    "--framer-line-height": "1.4em",
                    "--framer-text-alignment": "left",
                    "--framer-text-color": "rgba(10, 10, 10, 0.7)",
                    marginTop: "18px",
                  } as CSSProperties
                }
                dir="auto"
              >
                This is not a people problem. It is what happens when a business outgrows the way it
                was first set up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedDivMobileNew() {
  return (
    <div
      className="framer-e7MIj framer-1e0p9gw framer-v-17wc7s"
      style={{ width: "100%", opacity: "1" }}
    >
      <div
        className="framer-1jt6k9j"
        style={{
          backgroundColor: "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
          borderRadius: "18px",
          opacity: "1",
        }}
      >
        <div className="framer-14lndsk" style={{ transform: "translateX(-50%)", opacity: "1" }}>
          <div className="framer-j6o1p5" style={{ opacity: "1" }}>
            <div
              className="framer-1nu7qjs"
              style={{
                backgroundColor:
                  "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                borderRadius: "50%",
                opacity: "1",
              }}
            />
            <div
              className="framer-1dtqhsg"
              style={{ backgroundColor: "rgb(237, 237, 237)", borderRadius: "50%", opacity: "1" }}
            />
            <div
              className="framer-16xhq3m"
              style={{ backgroundColor: "rgb(237, 237, 237)", borderRadius: "50%", opacity: "1" }}
            />
            <div
              className="framer-1xj09jn"
              style={{ backgroundColor: "rgb(237, 237, 237)", borderRadius: "50%", opacity: "1" }}
            />
          </div>
          <div
            className="framer-197gllc"
            style={
              {
                "--extracted-r6o4lv": "rgb(9, 9, 9)",
                "--framer-link-text-color": "rgb(0, 153, 255)",
                "--framer-link-text-decoration": "underline",
                opacity: "0.5",
                transform: "none",
              } as CSSProperties
            }
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text"
              style={
                {
                  "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                  "--framer-font-size": "10px",
                  "--framer-font-weight": "600",
                  "--framer-letter-spacing": "-0.04em",
                  "--framer-line-height": "1em",
                  "--framer-text-color": "var(--extracted-r6o4lv, rgb(9, 9, 9))",
                } as CSSProperties
              }
            >
              01
            </p>
          </div>
        </div>
        <div className="framer-bicbsz" style={{ transform: "translate(-50%, -50%)", opacity: "1" }}>
          <div
            className="framer-cvlv7s"
            style={
              {
                "--extracted-r6o4lv": "rgb(9, 9, 9)",
                "--framer-link-text-color": "rgb(0, 153, 255)",
                "--framer-link-text-decoration": "underline",
                transform: "none",
                opacity: "1",
              } as CSSProperties
            }
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text"
              style={
                {
                  "--framer-font-size": "18px",
                  "--framer-font-weight": "500",
                  "--framer-letter-spacing": "-0.04em",
                  "--framer-text-alignment": "left",
                  "--framer-text-color": "var(--extracted-r6o4lv, rgb(9, 9, 9))",
                } as CSSProperties
              }
              dir="auto"
            >
              Every approval comes back to you. Clients, retailers, funders and suppliers expect you in the room.
            </p>
          </div>
        </div>
      </div>
      <div
        className="framer-65jwlq"
        style={{
          backgroundColor: "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
          borderRadius: "18px",
          opacity: "1",
        }}
      >
        <div className="framer-zykl2" style={{ opacity: "1" }}>
          <div className="framer-4q9lvj" style={{ opacity: "1" }}>
            <div className="framer-z1h3bw" style={{ opacity: "1" }}>
              <div
                className="framer-17r09d9"
                style={{
                  backgroundColor:
                    "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                  borderRadius: "50%",
                  opacity: "1",
                }}
              />
              <div
                className="framer-1xu4xrk"
                style={{
                  backgroundColor:
                    "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                  borderRadius: "50%",
                  opacity: "1",
                }}
              />
              <div
                className="framer-nscsly"
                style={{ backgroundColor: "rgb(237, 237, 237)", borderRadius: "50%", opacity: "1" }}
              />
              <div
                className="framer-h86ztg"
                style={{ backgroundColor: "rgb(237, 237, 237)", borderRadius: "50%", opacity: "1" }}
              />
            </div>
            <div
              className="framer-1np1zmf"
              style={
                {
                  "--extracted-r6o4lv": "rgb(9, 9, 9)",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                  opacity: "0.5",
                  transform: "none",
                } as CSSProperties
              }
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text"
                style={
                  {
                    "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                    "--framer-font-size": "10px",
                    "--framer-font-weight": "600",
                    "--framer-letter-spacing": "-0.04em",
                    "--framer-line-height": "1em",
                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(9, 9, 9))",
                  } as CSSProperties
                }
              >
                02
              </p>
            </div>
          </div>
          <div className="framer-1lu4wge" style={{ opacity: "1" }}>
            <div
              className="framer-hfw0f"
              style={
                {
                  "--extracted-r6o4lv": "rgb(9, 9, 9)",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                  transform: "none",
                  opacity: "1",
                } as CSSProperties
              }
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text"
                style={
                  {
                    "--framer-font-size": "18px",
                    "--framer-font-weight": "500",
                    "--framer-letter-spacing": "-0.04em",
                    "--framer-text-alignment": "left",
                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(9, 9, 9))",
                  } as CSSProperties
                }
                dir="auto"
              >
                Revenue relies on relationships that only you hold.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="framer-zf446g"
        style={{
          backgroundColor: "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
          borderRadius: "18px",
          opacity: "1",
        }}
      >
        <div className="framer-e9hlci" style={{ opacity: "1" }}>
          <div className="framer-1q0xq54 [right:0] [z-index:1]" style={{ opacity: "1" }}>
            <div className="framer-1hr4c3d" style={{ opacity: "1" }}>
              <div
                className="framer-jrui4a"
                style={{
                  backgroundColor:
                    "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                  borderRadius: "50%",
                  opacity: "1",
                }}
              />
              <div
                className="framer-vhm7hd"
                style={{
                  backgroundColor:
                    "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                  borderRadius: "50%",
                  opacity: "1",
                }}
              />
              <div
                className="framer-ceiqhq"
                style={{
                  backgroundColor:
                    "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                  borderRadius: "50%",
                  opacity: "1",
                }}
              />
              <div
                className="framer-1yakf8u"
                style={{ backgroundColor: "rgb(237, 237, 237)", borderRadius: "50%", opacity: "1" }}
              />
            </div>
            <div
              className="framer-1db9cpp"
              style={
                {
                  "--extracted-r6o4lv": "rgb(9, 9, 9)",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                  opacity: "0.5",
                  transform: "none",
                } as CSSProperties
              }
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text"
                style={
                  {
                    "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                    "--framer-font-size": "10px",
                    "--framer-font-weight": "600",
                    "--framer-letter-spacing": "-0.04em",
                    "--framer-line-height": "1em",
                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(9, 9, 9))",
                  } as CSSProperties
                }
              >
                03
              </p>
            </div>
          </div>
          <div className="framer-dc1nec" style={{ opacity: "1" }}>
            <div
              className="framer-1bmhiw"
              style={
                {
                  "--extracted-r6o4lv": "rgb(9, 9, 9)",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                  transform: "none",
                  opacity: "1",
                } as CSSProperties
              }
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text"
                style={
                  {
                    "--framer-font-size": "18px",
                    "--framer-font-weight": "500",
                    "--framer-letter-spacing": "-0.04em",
                    "--framer-text-alignment": "left",
                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(9, 9, 9))",
                  } as CSSProperties
                }
                dir="auto"
              >
                Delivery changes every time, so it is hard to price, repeat or hand over.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="framer-r36i26"
        style={{
          backgroundColor: "var(--token-90ab9b9d-c64e-4230-9e06-707b75634f37, rgb(255, 255, 255))",
          borderRadius: "18px",
          opacity: "1",
        }}
      >
        <div
          className="framer-1wy1wrb [order:0] [z-index:1]"
          style={{ transform: "translateX(-50%)", opacity: "1" }}
        >
          <div className="framer-jyufdl" style={{ opacity: "1" }}>
            <div
              className="framer-g2hcpe"
              style={{
                backgroundColor:
                  "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                borderRadius: "50%",
                opacity: "1",
              }}
            />
            <div
              className="framer-1d2ajqc"
              style={{
                backgroundColor:
                  "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                borderRadius: "50%",
                opacity: "1",
              }}
            />
            <div
              className="framer-cycz2"
              style={{
                backgroundColor:
                  "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                borderRadius: "50%",
                opacity: "1",
              }}
            />
            <div
              className="framer-9oys8j"
              style={{
                backgroundColor:
                  "var(--token-88d5059b-bc5d-4e0a-ad79-b21e9a2c4948, rgb(10, 10, 10))",
                borderRadius: "50%",
                opacity: "1",
              }}
            />
          </div>
          <div
            className="framer-1ygxvzr"
            style={
              {
                "--extracted-r6o4lv": "rgb(9, 9, 9)",
                "--framer-link-text-color": "rgb(0, 153, 255)",
                "--framer-link-text-decoration": "underline",
                opacity: "0.5",
                transform: "none",
              } as CSSProperties
            }
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text"
              style={
                {
                  "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif',
                  "--framer-font-size": "10px",
                  "--framer-font-weight": "600",
                  "--framer-letter-spacing": "-0.04em",
                  "--framer-line-height": "1em",
                  "--framer-text-color": "var(--extracted-r6o4lv, rgb(9, 9, 9))",
                } as CSSProperties
              }
            >
              04
            </p>
          </div>
        </div>
        <div className="framer-1uxsu2 [order:1]" style={{ opacity: "1" }}>
          <div
            className="framer-1rgqb2s"
            style={
              {
                "--extracted-2gxw0f": "rgb(9, 9, 9)",
                "--extracted-r6o4lv": "rgb(9, 9, 9)",
                "--framer-link-text-color": "rgb(0, 153, 255)",
                "--framer-link-text-decoration": "underline",
                transform: "none",
                opacity: "1",
              } as CSSProperties
            }
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text"
              style={
                {
                  "--framer-font-size": "18px",
                  "--framer-font-weight": "500",
                  "--framer-letter-spacing": "-0.04em",
                  "--framer-text-alignment": "left",
                  "--framer-text-color": "var(--extracted-r6o4lv, rgb(9, 9, 9))",
                } as CSSProperties
              }
              dir="auto"
            >
              <br className="framer-text" />
            </p>
            <p
              className="framer-text"
              style={
                {
                  "--framer-font-size": "17px",
                  "--framer-font-weight": "500",
                  "--framer-letter-spacing": "-0.04em",
                  "--framer-text-alignment": "left",
                  "--framer-text-color": "var(--extracted-2gxw0f, rgb(9, 9, 9))",
                } as CSSProperties
              }
              dir="auto"
            >
              The team is capable and stretched, but ownership is unclear and nobody can see the whole picture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImportedDivLogo() {
  return (
    <div className="framer-1fo409y flex-none gap-[4px] justify-center [overflow:hidden] [@media(min-width:810px)_and_(max-width:1199.98px)]:min-h-[137px]">
      <div
        className="framer-n2m7ps items-center flex-none flex-row flex-nowrap gap-[10px] place-content-center [overflow:hidden] [place-self:start]"
        style={
          {
            "--site-reveal": "1",
            willChange: "transform",
            opacity: "1",
            transform: "none",
          } as CSSProperties
        }
      >
        <div className="framer-u39uvo flex-none">
          <div
            style={
              {
                position: "absolute",
                borderRadius: "inherit",
                cornerShape: "inherit",
                inset: "0px",
              } as CSSProperties
            }
          >
            <img
              style={
                {
                  display: "block",
                  width: "100%",
                  height: "100%",
                  borderRadius: "inherit",
                  cornerShape: "inherit",
                  objectPosition: "center center",
                  objectFit: "contain",
                } as CSSProperties
              }
              decoding="auto"
              width="278"
              height="181"
              src="/site-assets/ac24f3b600367e31.avif"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className="framer-q68e96 items-center flex-none flex-row flex-nowrap gap-[10px] place-content-center [overflow:hidden] [place-self:start]"
        style={
          {
            "--site-reveal": "1",
            willChange: "transform",
            opacity: "1",
            transform: "none",
          } as CSSProperties
        }
      >
        <div className="framer-126ni3i flex-none">
          <div
            style={
              {
                position: "absolute",
                borderRadius: "inherit",
                cornerShape: "inherit",
                inset: "0px",
              } as CSSProperties
            }
          >
            <img
              style={
                {
                  display: "block",
                  width: "100%",
                  height: "100%",
                  borderRadius: "inherit",
                  cornerShape: "inherit",
                  objectPosition: "center center",
                  objectFit: "contain",
                } as CSSProperties
              }
              decoding="auto"
              width="797"
              height="263"
              sizes="138px"
              srcSet="/site-assets/6cc63a09c96066c8.avif 512w, /site-assets/266b8ea967506514.webp 797w"
              src="/site-assets/266b8ea967506514.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className="framer-dhxozr items-center flex-none flex-row flex-nowrap gap-[10px] place-content-center [overflow:hidden] [place-self:start]"
        style={
          {
            "--site-reveal": "1",
            willChange: "transform",
            opacity: "1",
            transform: "none",
          } as CSSProperties
        }
      >
        <div className="framer-36xoyk flex-none">
          <div
            style={
              {
                position: "absolute",
                borderRadius: "inherit",
                cornerShape: "inherit",
                inset: "0px",
              } as CSSProperties
            }
          >
            <img
              style={
                {
                  display: "block",
                  width: "100%",
                  height: "100%",
                  borderRadius: "inherit",
                  cornerShape: "inherit",
                  objectPosition: "center center",
                  objectFit: "contain",
                } as CSSProperties
              }
              decoding="auto"
              width="200"
              height="131"
              src="/site-assets/b747e722a9d8d73b.avif"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function WhoItsFor() {
  return (
    <section className="coopilot-fit" aria-label="Who this is for">
      <style>{`
        .coopilot-fit {
          width: 720px;
          max-width: calc(100% - 40px);
          box-sizing: border-box;
          margin: 8px 0 24px;
        }
        .coopilot-fit-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
        }
        .coopilot-fit h3 {
          margin: 0 0 10px;
          font-family: "Inter", "Inter Placeholder", sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: -0.04em;
          line-height: 1.2;
          color: rgba(10, 10, 10, 0.55);
        }
        .coopilot-fit p {
          margin: 0;
          font-family: "Inter", "Inter Placeholder", sans-serif;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: -0.03em;
          line-height: 1.5;
          color: rgba(10, 10, 10, 0.78);
        }
        .coopilot-fit p.coopilot-fit-note {
          margin: 28px 0 0;
          font-size: 14px;
          line-height: 1.5;
          color: rgba(10, 10, 10, 0.55);
        }
        @media (min-width: 810px) {
          .framer-nca5g3 { margin-top: -36px; }
        }
        @media (max-width: 720px) {
          .coopilot-fit { margin-top: 4px; }
          .coopilot-fit-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }
      `}</style>
      <div className="coopilot-fit-grid">
        <div>
          <h3>A good fit</h3>
          <p>
            CooPilot works with founder-led product and service businesses that have paying
            customers, a team of around ten or more and revenue in the seven figures or heading
            there. The usual trigger is a new sales channel, more complex client delivery, a bigger
            team, a new market or a founder who can no longer carry every decision.
          </p>
        </div>
        <div>
          <h3>Not yet</h3>
          <p>
            If you are pre-revenue, still proving the offer or have no team yet, you do not need an
            operator. The immediate job is sales.
          </p>
        </div>
      </div>
      <p className="coopilot-fit-note">
        We also work with established charities and social enterprises that have a team, active
        funding or earned income, and an operating model that relies too heavily on the founders.
      </p>
    </section>
  );
}

function WhatWeFix() {
  const outcomes = [
    {
      number: "01",
      title: "Clear ownership and faster decisions",
      body: "Who owns what, which approvals the founder keeps, which decisions move to the team and the weekly rhythm that keeps work moving.",
    },
    {
      number: "02",
      title: "Commercial operations that repeat",
      body: "Someone owns the revenue number. Offers are packaged and priced clearly. When a client, retailer, partner or funder says yes, the scope, terms, delivery and follow-through are ready.",
    },
    {
      number: "03",
      title: "Reporting leaders can use",
      body: "A small set of numbers that shows what is happening, what needs attention and who owns the next action. Not a dashboard that looks busy and decides nothing.",
    },
    {
      number: "04",
      title: "Finance operations with a cadence",
      body: "Clear cash visibility, a reliable month-end rhythm and tools that match the stage of the business. Where needed, bookkeeping can be delivered by a partner firm, with one accountable point of contact.",
    },
    {
      number: "05",
      title: "Processes people can follow",
      body: "SOPs a new joiner can use, recurring admin automated where it should be and a handover plan that does not depend on one person being available.",
    },
  ];
  const heading: CSSProperties = {
    margin: 0,
    fontFamily: '"Inter", "Inter Placeholder", sans-serif',
    fontSize: "clamp(29px, 3vw, 38px)",
    fontWeight: 600,
    letterSpacing: "-0.05em",
    lineHeight: 1.1,
    color: "#090909",
  };
  return (
    <section
      id="what-we-fix"
      style={{
        width: "720px",
        maxWidth: "calc(100% - 40px)",
        boxSizing: "border-box",
        padding: "8px 0 12px",
        scrollMarginTop: "96px",
      }}
    >
      <div style={{ width: "100%" }}>
        <p
          style={{
            margin: "0 0 16px",
            fontFamily: '"Inter", "Inter Placeholder", sans-serif',
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 1.2,
            color: "rgba(10, 10, 10, 0.55)",
          }}
        >
          What we fix
        </p>
        <h2 style={heading}>
          We build the system,
          <br />
          <span style={{ color: "rgba(10, 10, 10, 0.6)" }}>not a report about it.</span>
        </h2>
        <p
          style={{
            margin: "18px 0 0",
            maxWidth: "640px",
            fontFamily: '"Inter", "Inter Placeholder", sans-serif',
            fontSize: "18px",
            fontWeight: 500,
            letterSpacing: "-0.04em",
            lineHeight: 1.45,
            color: "rgba(10, 10, 10, 0.7)",
          }}
        >
          We work inside the business as the operating layer and build what the company has
          outgrown. Then we write it down and hand it over, so it can run without us.
        </p>
        <div style={{ marginTop: "36px" }}>
          {outcomes.map((outcome) => (
            <div
              key={outcome.number}
              style={{
                display: "grid",
                gridTemplateColumns: "40px 1fr",
                gap: "12px",
                padding: "22px 0",
                borderTop: "1px solid rgba(10, 10, 10, 0.1)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.3,
                  color: "rgba(10, 10, 10, 0.45)",
                }}
              >
                {outcome.number}
              </p>
              <div>
                <h3
                  style={{
                    margin: 0,
                    fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                    fontSize: "20px",
                    fontWeight: 600,
                    letterSpacing: "-0.04em",
                    lineHeight: 1.25,
                    color: "#090909",
                  }}
                >
                  {outcome.title}
                </h3>
                <p
                  style={{
                    margin: "8px 0 0",
                    fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                    fontSize: "16px",
                    fontWeight: 500,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.45,
                    color: "rgba(10, 10, 10, 0.7)",
                  }}
                >
                  {outcome.body}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ ...heading, marginTop: "48px", maxWidth: "640px" }}>
          The test is simple.
          <br />
          <span style={{ color: "rgba(10, 10, 10, 0.6)" }}>
            If we left tomorrow, would it still run?
          </span>
        </p>
      </div>
    </section>
  );
}

function WaysToWork() {
  const routes = [
    {
      number: "01",
      title: "Operating Review",
      recommended: true,
      body: "Three weeks inside the business, looking at how it actually runs: decisions, delivery, reporting, cash and where time or money is leaking. You receive a prioritised plan showing what to fix, in what order and why. Then you decide whether to run it internally or ask us to build it.",
      bestFor: "founders who want the real picture before committing to a larger piece of work.",
    },
    {
      number: "02",
      title: "Build",
      recommended: false,
      body: "A fixed-scope project with a fixed end date. We build the specific systems the business needs, such as a reporting layer, operating rhythm, SOPs, finance operations or automated recurring admin. The project ends with your team running it without us.",
      bestFor: "a business that knows what is broken and wants it fixed, not permanently managed.",
    },
    {
      number: "03",
      title: "Run",
      recommended: false,
      body: "A monthly fractional operations engagement. A CooPilot operator works inside the business, leads the operating cadence, turns the reporting into decisions and coordinates the specialist partners needed to keep the operation moving. You get experienced operational ownership now, without hiring a full-time COO before the business is ready.",
      bestFor: "a company growing quickly enough that operations needs an owner now, not just a plan.",
    },
  ];
  const heading: CSSProperties = {
    margin: 0,
    fontFamily: '"Inter", "Inter Placeholder", sans-serif',
    fontSize: "clamp(29px, 3vw, 38px)",
    fontWeight: 600,
    letterSpacing: "-0.05em",
    lineHeight: 1.1,
    color: "#090909",
  };
  return (
    <section
      id="ways-to-work"
      className="coopilot-ways"
      style={{
        boxSizing: "border-box",
        padding: "72px 0 8px",
        scrollMarginTop: "96px",
      }}
    >
      <style>{`
        .coopilot-ways {
          width: 720px;
          max-width: calc(100% - 40px);
        }
        .coopilot-ways-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-top: 36px;
        }
        .coopilot-ways a:focus-visible {
          outline: 2px solid #14253D;
          outline-offset: 3px;
        }
        @media (min-width: 1000px) {
          .coopilot-ways {
            width: 1128px;
          }
          .coopilot-ways-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>
      <div style={{ width: "720px", maxWidth: "100%", margin: "0 auto" }}>
        <p
          style={{
            margin: "0 0 16px",
            fontFamily: '"Inter", "Inter Placeholder", sans-serif',
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 1.2,
            color: "rgba(10, 10, 10, 0.55)",
          }}
        >
          Ways to work with CooPilot
        </p>
        <h2 style={{ ...heading, maxWidth: "720px" }}>
          Start with the problem.
          <br />
          <span style={{ color: "rgba(10, 10, 10, 0.6)" }}>
            Then choose what needs to happen next.
          </span>
        </h2>
        <p
          style={{
            margin: "18px 0 0",
            maxWidth: "720px",
            fontFamily: '"Inter", "Inter Placeholder", sans-serif',
            fontSize: "18px",
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 1.4,
            color: "#090909",
          }}
        >
          Most clients start with an Operating Review.
        </p>
      </div>
      <div
        className="coopilot-ways-grid"
        style={{ width: "1128px", maxWidth: "100%", marginLeft: "auto", marginRight: "auto" }}
      >
          {routes.map((route) => (
            <article
              key={route.number}
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#fff",
                borderRadius: "18px",
                padding: "22px 22px 24px",
                boxSizing: "border-box",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.2,
                  color: "rgba(10, 10, 10, 0.45)",
                }}
              >
                {route.number}
                {route.recommended ? (
                  <span style={{ color: "#315EEB" }}> · Recommended</span>
                ) : null}
              </p>
              <h3
                style={{
                  margin: "12px 0 0",
                  fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                  fontSize: "22px",
                  fontWeight: 600,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.2,
                  color: "#090909",
                }}
              >
                {route.title}
              </h3>
              <p
                style={{
                  margin: "12px 0 0",
                  fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                  fontSize: "16px",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.45,
                  color: "rgba(10, 10, 10, 0.75)",
                }}
              >
                {route.body}
              </p>
              <p
                style={{
                  margin: "16px 0 0",
                  marginTop: "auto",
                  paddingTop: "16px",
                  fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                  fontSize: "15px",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.4,
                  color: "rgba(10, 10, 10, 0.7)",
                }}
              >
                <span style={{ fontWeight: 600, color: "#090909" }}>Best for: </span>
                {route.bestFor}
              </p>
              <a
                href="/#book"
                style={{
                  marginTop: "0",
                  paddingTop: "18px",
                  fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.2,
                  color: "#315EEB",
                  textDecoration: "none",
                }}
              >
                Book a discovery call
              </a>
            </article>
          ))}
      </div>
    </section>
  );
}

function StickyBooking() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const heroButton = document.querySelector(".coopilot-hero-book");
    if (!heroButton) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting);
    });
    observer.observe(heroButton);
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <style>{`
        .coopilot-sticky-book {
          position: fixed;
          z-index: 8;
          right: 20px;
          bottom: 24px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          padding: 0 14px;
          border-radius: 999px;
          background: #315EEB;
          color: #fff;
          font-family: "Inter", "Inter Placeholder", sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: -0.04em;
          line-height: 1;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(20, 37, 61, 0.18);
          opacity: 0;
          transform: translateY(12px);
          pointer-events: none;
          transition: opacity 200ms ease, transform 200ms ease, background-color 200ms ease;
        }
        .coopilot-sticky-book.is-visible {
          opacity: 1;
          transform: none;
          pointer-events: auto;
        }
        .coopilot-sticky-book:hover {
          background: #274ed0;
        }
        .coopilot-sticky-book:focus-visible {
          outline: 2px solid #14253D;
          outline-offset: 3px;
        }
        html {
          scroll-padding-bottom: 80px;
        }
        @media (max-width: 767px) {
          .coopilot-sticky-book {
            right: 16px;
            bottom: 16px;
            height: 32px;
            padding: 0 12px;
            font-size: 12px;
            box-shadow: 0 6px 16px rgba(20, 37, 61, 0.16);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .coopilot-sticky-book { transition: none; }
        }
      `}</style>
      <a
        className={visible ? "coopilot-sticky-book is-visible" : "coopilot-sticky-book"}
        href="/#book"
        aria-hidden={visible ? undefined : true}
        tabIndex={visible ? undefined : -1}
      >
        Book a discovery call
      </a>
    </>
  );
}

function FinalClose() {
  const paper = "#f5f5f5";
  const navy = "#14253D";
  return (
    <footer
      id="book"
      style={{
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: navy,
        color: paper,
        scrollMarginTop: "96px",
      }}
    >
      <style>{`
        .coopilot-close-book:focus-visible {
          outline: 2px solid #f5f5f5;
          outline-offset: 3px;
        }
        .coopilot-close-book:hover {
          background-color: #ffffff;
        }
        .coopilot-close-foot {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 18px;
        }
        @media (min-width: 720px) {
          .coopilot-close-foot {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
          }
        }
      `}</style>
      <div
        style={{
          width: "720px",
          maxWidth: "calc(100% - 40px)",
          margin: "0 auto",
          padding: "72px 0 36px",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily: '"Inter", "Inter Placeholder", sans-serif',
            fontSize: "clamp(29px, 3vw, 38px)",
            fontWeight: 600,
            letterSpacing: "-0.05em",
            lineHeight: 1.1,
            color: paper,
          }}
        >
          Start with the real picture.
        </h2>
        <p
          style={{
            margin: "18px 0 0",
            maxWidth: "640px",
            fontFamily: '"Inter", "Inter Placeholder", sans-serif',
            fontSize: "17px",
            fontWeight: 500,
            letterSpacing: "-0.03em",
            lineHeight: 1.5,
            color: "rgba(245, 245, 245, 0.78)",
          }}
        >
          A 30-minute call. Tell us what is breaking, where decisions are getting stuck and what
          growth has changed. We will tell you what we would look at first, and whether an
          Operating Review is the right next step. No deck and no pitch.
        </p>
        <a
          className="coopilot-close-book"
          href="/#book"
          style={{
            display: "inline-flex",
            alignItems: "center",
            marginTop: "28px",
            padding: "12px 18px",
            borderRadius: "999px",
            backgroundColor: paper,
            color: navy,
            fontFamily: '"Inter", "Inter Placeholder", sans-serif',
            fontSize: "15px",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.2,
            textDecoration: "none",
          }}
        >
          Book a discovery call
        </a>
      </div>
      <div
        style={{
          width: "720px",
          maxWidth: "calc(100% - 40px)",
          margin: "0 auto",
          boxSizing: "border-box",
          borderTop: "1px solid rgba(245, 245, 245, 0.16)",
          padding: "28px 0 120px",
        }}
      >
        <div className="coopilot-close-foot">
          <img
            src="/brand/coopilot-mark-light.png"
            alt="CooPilot"
            style={{
              display: "block",
              width: "36px",
              height: "36px",
              mixBlendMode: "screen",
            }}
          />
          <p
            style={{
              margin: 0,
              fontFamily: '"Inter", "Inter Placeholder", sans-serif',
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.4,
              color: "rgba(245, 245, 245, 0.72)",
            }}
          >
            Privacy policy
            <span aria-hidden="true"> · </span>
            Cookie notice
          </p>
          <p
            style={{
              margin: 0,
              fontFamily: '"Inter", "Inter Placeholder", sans-serif',
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.4,
              color: "rgba(245, 245, 245, 0.86)",
            }}
          >
            COOPILOT LTD | © 2026 COOPILOT LTD
          </p>
        </div>
      </div>
    </footer>
  );
}

function FounderAndTeam() {
  const paragraphs = [
    "Chantel has spent her career inside operations where the numbers had to be right: data visualisation at JPMorgan, advanced analytics and reporting at IAG Cargo, data analytics consulting at Forensic Risk Alliance, resource planning at British Airways and compliance at Deloitte.",
    "She then moved into founder-led businesses and did the work itself, most recently as Head of Operations at RUKA Hair. That included the retail launch, operating model, pricing, cash plan and handover.",
    "CooPilot is built around that standard of work. Chantel leads a team of operators who bring practical experience across operations, data, reporting, finance and delivery. The right operator is matched to the problem, with clear ownership from diagnosis through to handover.",
    "Chantel is also a qualified teacher. That matters because a system only holds if the people running it understand it. The work is not finished until the report can be read quickly, the process can be followed and the team can run it without CooPilot.",
  ];
  const path = [
    "JPMorgan",
    "IAG Cargo",
    "Forensic Risk Alliance",
    "British Airways",
    "Deloitte",
    "RUKA",
    "CooPilot",
  ];
  const heading: CSSProperties = {
    margin: 0,
    fontFamily: '"Inter", "Inter Placeholder", sans-serif',
    fontSize: "clamp(29px, 3vw, 38px)",
    fontWeight: 600,
    letterSpacing: "-0.05em",
    lineHeight: 1.1,
    color: "#090909",
  };
  const body: CSSProperties = {
    margin: "16px 0 0",
    fontFamily: '"Inter", "Inter Placeholder", sans-serif',
    fontSize: "17px",
    fontWeight: 500,
    letterSpacing: "-0.03em",
    lineHeight: 1.5,
    color: "rgba(10, 10, 10, 0.72)",
  };
  return (
      <section
      id="founder"
      style={{
        width: "720px",
        maxWidth: "calc(100% - 40px)",
        boxSizing: "border-box",
        padding: "72px 0 8px",
        scrollMarginTop: "96px",
      }}
    >
      <style>{`
        .founder-path-break { display: none; }
        @media (max-width: 560px) {
          .founder-path-break { display: block; }
          .founder-path-sep-break { display: none; }
        }
      `}</style>
      <p
        style={{
          margin: "0 0 16px",
          fontFamily: '"Inter", "Inter Placeholder", sans-serif',
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "-0.04em",
          lineHeight: 1.2,
          color: "rgba(10, 10, 10, 0.55)",
        }}
      >
        Founder and team
      </p>
      <h2 style={heading}>Chantel Bawuah, founder of CooPilot.</h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 24)} style={body}>
          {paragraph}
        </p>
      ))}
      <p
        style={{
          margin: "32px 0 0",
          fontFamily: '"Inter", "Inter Placeholder", sans-serif',
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "-0.04em",
          lineHeight: 1.2,
          color: "rgba(10, 10, 10, 0.55)",
        }}
      >
        Education
      </p>
      <p
        style={{
          margin: "8px 0 0",
          fontFamily: '"Inter", "Inter Placeholder", sans-serif',
          fontSize: "16px",
          fontWeight: 600,
          letterSpacing: "-0.03em",
          lineHeight: 1.45,
          color: "#090909",
        }}
      >
        BSc Chemistry and Forensic Science, Queen Mary University of London. MSc Data Science and
        Analytics.
      </p>
      <div style={{ marginTop: "32px", paddingTop: "24px", borderTop: "1px solid rgba(10, 10, 10, 0.1)" }}>
        <p
          style={{
            margin: 0,
            fontFamily: '"Inter", "Inter Placeholder", sans-serif',
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 1.2,
            color: "rgba(10, 10, 10, 0.55)",
          }}
        >
          Experience
        </p>
        <p
          style={{
            margin: "10px 0 0",
            fontFamily: '"Inter", "Inter Placeholder", sans-serif',
            fontSize: "16px",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.7,
            color: "#090909",
          }}
        >
          {path.map((name, index) => {
            const hasNext = index < path.length - 1;
            const splitHere = index + 1 === 3;
            return (
              <span key={name}>
                <span style={{ whiteSpace: "nowrap" }}>{name}</span>
                {hasNext ? (
                  <span className={splitHere ? "founder-path-sep founder-path-sep-break" : undefined}>
                    {" · "}
                  </span>
                ) : null}
                {splitHere ? <br className="founder-path-break" /> : null}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}

function Faq() {
  const items = [
    {
      question: "What happens on the discovery call?",
      answer:
        "You describe what is breaking, where decisions are getting stuck and what growth has changed. We will tell you what we would look at first and whether an Operating Review is the right next step.",
    },
    {
      question: "Do I need to start with an Operating Review?",
      answer:
        "Most clients do because it prevents the business from fixing the loudest symptom first. If the scope is already clear, we can decide whether a Build engagement is the better starting point.",
    },
    {
      question: "Do you work with early-stage businesses?",
      answer:
        "Not before the business has paying customers and a team. At that point, sales and customer learning matter more than an operating layer.",
    },
    {
      question: "What is the difference between Build and Run?",
      answer:
        "Build is a fixed project with a defined handover. Run is an embedded monthly engagement where a CooPilot operator owns the operating rhythm while the business grows.",
    },
    {
      question: "Will the founder still be involved?",
      answer:
        "Yes. The goal is not to remove the founder from the business. It is to stop routine approvals, reporting and delivery from depending on them.",
    },
    {
      question: "What types of businesses do you work with?",
      answer:
        "Our primary focus is established founder-led product and service businesses. We also work with established charities and social enterprises where the operating model and revenue structure need to change together.",
    },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section
      id="faq"
      style={{
        width: "720px",
        maxWidth: "calc(100% - 40px)",
        boxSizing: "border-box",
        padding: "56px 0 72px",
        scrollMarginTop: "96px",
      }}
    >
      <style>{`
        .coopilot-faq-button:focus-visible {
          outline: 2px solid #14253D;
          outline-offset: 3px;
        }
        .coopilot-faq-plus {
          position: relative;
          width: 14px;
          height: 14px;
          flex: none;
          margin-top: 4px;
        }
        .coopilot-faq-plus::before,
        .coopilot-faq-plus::after {
          content: "";
          position: absolute;
          left: 0;
          top: 6px;
          width: 14px;
          height: 1.5px;
          background: #090909;
        }
        .coopilot-faq-plus::after {
          transform: rotate(90deg);
          transition: transform 200ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .coopilot-faq-plus[data-open="true"]::after {
          transform: rotate(0deg);
        }
        @media (prefers-reduced-motion: reduce) {
          .coopilot-faq-plus::after { transition: none; }
        }
      `}</style>
      <p
        style={{
          margin: "0 0 20px",
          fontFamily: '"Inter", "Inter Placeholder", sans-serif',
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "-0.04em",
          lineHeight: 1.2,
          color: "rgba(10, 10, 10, 0.55)",
        }}
      >
        FAQ
      </p>
      <div>
        {items.map((item, index) => {
          const isOpen = open === index;
          const panelId = `faq-answer-${index}`;
          const buttonId = `faq-question-${index}`;
          return (
            <div
              key={item.question}
              style={{
                marginBottom: index === items.length - 1 ? 0 : 4,
                borderRadius: 14,
                backgroundColor: "#ffffff",
                overflow: "hidden",
              }}
            >
              <h3 style={{ margin: 0, font: "inherit" }}>
                <button
                  type="button"
                  id={buttonId}
                  className="coopilot-faq-button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "16px",
                    boxSizing: "border-box",
                    padding: "22px",
                    border: 0,
                    background: "transparent",
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                    fontSize: "17px",
                    fontWeight: 600,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.35,
                    color: "#090909",
                  }}
                >
                  <span>{item.question}</span>
                  <span
                    className="coopilot-faq-plus"
                    data-open={isOpen ? "true" : "false"}
                    aria-hidden="true"
                  />
                </button>
              </h3>
              <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
                <p
                  style={{
                    margin: 0,
                    padding: "0 22px 22px",
                    fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                    fontSize: "16px",
                    fontWeight: 500,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.5,
                    color: "rgba(10, 10, 10, 0.7)",
                  }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ProofNames({ names, breakAfter }: { names: string[]; breakAfter: number }) {
  return (
    <>
      {names.map((name, index) => {
        const hasNext = index < names.length - 1;
        const splitHere = index + 1 === breakAfter;
        return (
          <span key={name}>
            <span style={{ whiteSpace: "nowrap" }}>{name}</span>
            {hasNext ? (
              <span className={splitHere ? "proof-name-sep proof-name-sep-break" : undefined}>
                {" · "}
              </span>
            ) : null}
            {splitHere ? <br className="proof-name-break" /> : null}
          </span>
        );
      })}
    </>
  );
}

function Proof() {
  const cases = [
    {
      number: "01",
      title: "A UK brand into US retail",
      engagement: "Fractional Chief of Staff, then Head of Operations",
      body: "I led retail and channel operations across Selfridges in the UK and the Sephora US supply chain, from 3PL and EDI partner selection through DC compliance and order flow. I set up the US entity and financing paperwork, built the multi-currency pricing model, negotiated supplier terms and held finance at governance level until a finance director was hired. I then documented the Sephora order flow with an owner and cover for every step, so orders could ship without relying on me being in the inbox.",
    },
    {
      number: "02",
      title: "From grant dependent to two revenue streams",
      engagement: "Six-week strategy and operating model sprint",
      body: "I led a six-week strategy and operating model sprint for a cancer care charity that was more than 80 per cent grant funded and routing every decision through its two founders. The work included nine stakeholder interviews, a target operating model, delegated approvals, a founder transition plan, two priced training offers, a hospital advocacy package and a weekly operating rhythm the team could run. The confirmed pipeline at handover was six figures.",
    },
  ];
  const heading: CSSProperties = {
    margin: 0,
    fontFamily: '"Inter", "Inter Placeholder", sans-serif',
    fontSize: "clamp(29px, 3vw, 38px)",
    fontWeight: 600,
    letterSpacing: "-0.05em",
    lineHeight: 1.1,
    color: "#f5f5f5",
  };
  return (
    <section
      id="proof"
      style={{
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "#14253D",
        padding: "72px 20px",
        scrollMarginTop: "96px",
      }}
    >
      <style>{`
        .proof-name-break { display: none; }
        @media (max-width: 560px) {
          .proof-name-break { display: block; }
          .proof-name-sep-break { display: none; }
        }
      `}</style>
      <div style={{ width: "720px", maxWidth: "100%", margin: "0 auto" }}>
        <p
          style={{
            margin: "0 0 16px",
            fontFamily: '"Inter", "Inter Placeholder", sans-serif',
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 1.2,
            color: "rgba(245, 245, 245, 0.62)",
          }}
        >
          Proof
        </p>
        <h2 style={heading}>Built in real businesses.</h2>
        <div style={{ marginTop: "36px" }}>
          {cases.map((item) => (
            <article
              key={item.number}
              style={{
                padding: "28px 0",
                borderTop: "1px solid rgba(245, 245, 245, 0.16)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.2,
                  color: "rgba(245, 245, 245, 0.5)",
                }}
              >
                {item.number}
              </p>
              <h3
                style={{
                  margin: "12px 0 0",
                  fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                  fontSize: "clamp(22px, 2.4vw, 28px)",
                  fontWeight: 600,
                  letterSpacing: "-0.045em",
                  lineHeight: 1.2,
                  color: "#f5f5f5",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  margin: "10px 0 0",
                  fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.4,
                  color: "rgba(245, 245, 245, 0.78)",
                }}
              >
                {item.engagement}
              </p>
              <p
                style={{
                  margin: "14px 0 0",
                  fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                  fontSize: "16px",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.5,
                  color: "rgba(245, 245, 245, 0.72)",
                }}
              >
                {item.body}
              </p>
            </article>
          ))}
        </div>
        <div
          style={{
            marginTop: "8px",
            paddingTop: "28px",
            borderTop: "1px solid rgba(245, 245, 245, 0.16)",
            display: "grid",
            gap: "22px",
          }}
        >
          <p style={{ margin: 0 }}>
            <span
              style={{
                display: "block",
                marginBottom: "8px",
                fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "-0.04em",
                lineHeight: 1.2,
                color: "rgba(245, 245, 245, 0.5)",
              }}
            >
              Clients
            </span>
            <span
              style={{
                fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                fontSize: "16px",
                fontWeight: 500,
                letterSpacing: "-0.03em",
                lineHeight: 1.45,
                color: "rgba(245, 245, 245, 0.86)",
              }}
            >
              <ProofNames
                names={["RUKA", "From Me To You", "Sorted Chale", "Vertria"]}
                breakAfter={2}
              />
            </span>
          </p>
          <p style={{ margin: 0 }}>
            <span
              style={{
                display: "block",
                marginBottom: "8px",
                fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "-0.04em",
                lineHeight: 1.2,
                color: "rgba(245, 245, 245, 0.5)",
              }}
            >
              Experience
            </span>
            <span
              style={{
                fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                fontSize: "16px",
                fontWeight: 500,
                letterSpacing: "-0.03em",
                lineHeight: 1.45,
                color: "rgba(245, 245, 245, 0.72)",
              }}
            >
              <ProofNames
                names={[
                  "JPMorgan",
                  "IAG Cargo",
                  "British Airways",
                  "Deloitte",
                  "Forensic Risk Alliance",
                ]}
                breakAfter={3}
              />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}


function useImportedLayout() {
  useEffect(() => {
    const loopingVideos = Array.from(
      document.querySelectorAll<HTMLVideoElement>("video[loop]:not([autoplay]):not([controls])"),
    )
      .filter((video) => video.muted && !video.closest("[data-site-import-carousel-store]"))
      .slice(0, 32);
    const videoObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) void video.play().catch(() => {});
        else video.pause();
      }
    });
    loopingVideos.forEach((video) => videoObserver.observe(video));
    return () => {
      videoObserver.disconnect();
      loopingVideos.forEach((video) => video.pause());
    };
  }, []);
}

function subscribeMobile(onChange: () => void) {
  window.addEventListener("resize", onChange);
  return () => window.removeEventListener("resize", onChange);
}

type ImportedMenu = { open: boolean; toggle: () => void; close: () => void };

function useImportedMenu(): ImportedMenu {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      const toggle = Array.from(document.querySelectorAll<HTMLElement>("[data-menu-toggle]")).find(
        (el) => el.offsetParent !== null,
      );
      toggle?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return { open, toggle: () => setOpen((value) => !value), close: () => setOpen(false) };
}
