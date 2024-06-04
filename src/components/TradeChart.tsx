// TradingViewWidget.jsx
import { Box } from "@chakra-ui/react";
import { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "CRYPTO:BTCUSD",
          "interval": "3D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "hide_top_toolbar": true,
          "hide_legend": true,
          "allow_symbol_change": true,
          "save_image": false,
          "calendar": false,
          "show_popup_button": true,
          "popup_width": "1000",
          "popup_height": "650",
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current?.appendChild(script);

    return () => {
      container.current?.removeChild(script);
    };
  }, []);

  return (
    <Box h={"300px"} w={"600px"}>
      <div
        className="tradingview-widget-container"
        ref={container}
        style={{ height: "100%", width: "100%" }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: "calc(100% - 32px)", width: "50%" }}
        ></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow"
            target="_blank"
          >
            <span className="blue-text">Track all markets on TradingView</span>
          </a>
        </div>
      </div>
    </Box>
  );
}

export default memo(TradingViewWidget);
