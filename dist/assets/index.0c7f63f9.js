import { r as e, a as t } from "./vendor.6ad4fa42.js";
!(function (e = ".", t = "__import__") {
  try {
    self[t] = new Function("u", "return import(u)");
  } catch (n) {
    const o = new URL(e, location),
      r = (e) => {
        URL.revokeObjectURL(e.src), e.remove();
      };
    (self[t] = (e) =>
      new Promise((n, a) => {
        const l = new URL(e, o);
        if (self[t].moduleMap[l]) return n(self[t].moduleMap[l]);
        const s = new Blob(
            [`import * as m from '${l}';`, `${t}.moduleMap['${l}']=m;`],
            { type: "text/javascript" }
          ),
          c = Object.assign(document.createElement("script"), {
            type: "module",
            src: URL.createObjectURL(s),
            onerror() {
              a(new Error(`Failed to import: ${e}`)), r(c);
            },
            onload() {
              n(self[t].moduleMap[l]), r(c);
            },
          });
        document.head.appendChild(c);
      })),
      (self[t].moduleMap = {});
  }
})("/assets/");
const n = Boolean(
  "localhost" === window.location.hostname ||
    "[::1]" === window.location.hostname ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);
function o(e, t) {
  navigator.serviceWorker
    .register(e)
    .then((e) => {
      e.onupdatefound = () => {
        const n = e.installing;
        null != n &&
          (n.onstatechange = () => {
            "installed" === n.state &&
              (navigator.serviceWorker.controller
                ? (console.log(
                    "New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."
                  ),
                  t && t.onUpdate && t.onUpdate(e))
                : (console.log("Content is cached for offline use."),
                  t && t.onSuccess && t.onSuccess(e)));
          });
      };
    })
    .catch((e) => {
      console.error("Error during service worker registration:", e);
    });
}
function r() {
  const [t, n] = e.useState(0);
  return e.createElement(
    "div",
    { className: "App" },
    e.createElement(
      "header",
      { className: "App-header" },
      e.createElement("img", {
        src: "/assets/logo.ecc203fb.svg",
        className: "App-logo",
        alt: "logo",
      }),
      e.createElement("p", null, "Hello Vite + React!"),
      e.createElement(
        "p",
        null,
        e.createElement(
          "button",
          { onClick: () => n((e) => e + 1) },
          "count is: ",
          t
        )
      ),
      e.createElement(
        "p",
        null,
        "Edit ",
        e.createElement("code", null, "App.jsx"),
        " and save to test HMR updates."
      ),
      e.createElement(
        "p",
        null,
        e.createElement(
          "a",
          {
            className: "App-link",
            href: "https://reactjs.org",
            target: "_blank",
            rel: "noopener noreferrer",
          },
          "Learn React"
        ),
        " | ",
        e.createElement(
          "a",
          {
            className: "App-link",
            href: "https://vitejs.dev/guide/features.html",
            target: "_blank",
            rel: "noopener noreferrer",
          },
          "Vite Docs"
        )
      )
    )
  );
}
t.render(
  e.createElement(e.StrictMode, null, e.createElement(r, null)),
  document.getElementById("root")
),
  (function (e) {
    if ("serviceWorker" in navigator) {
      if (
        new URL({}.PUBLIC_URL, window.location.href).origin !==
        window.location.origin
      )
        return;
      window.addEventListener("load", () => {
        const t = `${{}.PUBLIC_URL}/service-worker.js`;
        n
          ? (!(function (e, t) {
              fetch(e, { headers: { "Service-Worker": "script" } })
                .then((n) => {
                  const r = n.headers.get("content-type");
                  404 === n.status ||
                  (null != r && -1 === r.indexOf("javascript"))
                    ? navigator.serviceWorker.ready.then((e) => {
                        e.unregister().then(() => {
                          window.location.reload();
                        });
                      })
                    : o(e, t);
                })
                .catch(() => {
                  console.log(
                    "No internet connection found. App is running in offline mode."
                  );
                });
            })(t, e),
            navigator.serviceWorker.ready.then(() => {
              console.log(
                "This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA"
              );
            }))
          : o(t, e);
      });
    }
  })();
