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
      "symbol": "BINANCE:BTCUSDT",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "2",
      "locale": "en",
      "backgroundColor": "rgba(0,0,0,0)",
      "hide_top_toolbar": true,
      "hide_legend": true,
      "range": "1D",
      "allow_symbol_change": false,
      "save_image": false,
      "calendar": false,
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
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0)",
        }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: "calc(100% - 32px)", width: "50%" }}
        ></div>
      </div>
    </Box>
  );
}

export default memo(TradingViewWidget);
