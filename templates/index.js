Bokeh.set_log_level("info");


var plot = document.getElementById("1140");
var docs_json = fetch("/plots.json")
    .then(response => {
        return response.json();
    });

      (function () {
        var fn = function () {
          Bokeh.safely(function () {
            (function (root) {
              function embed_document(root) {
                // var docs_json = document.getElementById("1140").textContent;
                var render_items = [
                  {
                    docid: "1e10d326-1a73-4bd1-884b-73a740e76186",
                    root_ids: ["1004"],
                    roots: { 1004: "ea2162a2-ddc9-4e2d-9d76-f24804e2dc001" },
                  },
                ];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              }
              if (root.Bokeh !== undefined) {
                embed_document(root);
              } else {
                var attempts = 0;
                var timer = setInterval(
                  function (root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log(
                          "Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing"
                        );
                      }
                    }
                  },
                  10,
                  root
                );
              }
            })(window);
          });
        };
        if (document.readyState != "loading") fn();
        else document.addEventListener("DOMContentLoaded", fn);
      })();












    //   (function () {
    //     var fn = function () {
    //       Bokeh.safely(function () {
    //         (function (root) {
    //           function embed_document(root) {
    //             // var docs_json = document.getElementById("1140").textContent;
    //             var render_items = [
    //               {
    //                 docid: "1e10d326-1a73-4bd1-884b-73a740e76186",
    //                 root_ids: ["1004"],
    //                 roots: { 1004: "ea2162a2-ddc9-4e2d-9d76-f24804e2dc00" },
    //               },
    //             ];
    //             root.Bokeh.embed.embed_items(docs_json, render_items);
    //           }
    //           if (root.Bokeh !== undefined) {
    //             embed_document(root);
    //           } else {
    //             var attempts = 0;
    //             var timer = setInterval(
    //               function (root) {
    //                 if (root.Bokeh !== undefined) {
    //                   clearInterval(timer);
    //                   embed_document(root);
    //                 } else {
    //                   attempts++;
    //                   if (attempts > 100) {
    //                     clearInterval(timer);
    //                     console.log(
    //                       "Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing"
    //                     );
    //                   }
    //                 }
    //               },
    //               10,
    //               root
    //             );
    //           }
    //         })(window);
    //       });
    //     };
    //     if (document.readyState != "loading") fn();
    //     else document.addEventListener("DOMContentLoaded", fn);
    //   })();