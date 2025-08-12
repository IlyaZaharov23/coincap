import { useCallback } from "react";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { bluePrimary } from "shared/constants/colors";
import { useAppSelector } from "store/hooks";
import { getPriceHistory } from "store/slices/assets/assets.selectors";
import { ChartUtil } from "utils/chartUtil";

import { TooltipEvent } from "../../types";
import { ChartTooltip } from "../Tooltip";
import { styles } from "./styles";
import { ChartProps } from "./types";

export const Chart = ({ currentItem, setCurrentItem, setPriceDifference }: ChartProps) => {
    const assetHistory = useAppSelector(getPriceHistory);

    const handleMouseMove = (e: unknown) => {
        const event = e as TooltipEvent;
        const activeElem = assetHistory.find((_, index) => index === Number(event?.activeIndex));

        if (activeElem) {
            setCurrentItem(activeElem);
            setPriceDifference(ChartUtil.solvePricesDifference(assetHistory[0].priceUsd, activeElem.priceUsd));
        }
    };

    const handleMouseLeave = () => {
        if (assetHistory.length > 0) {
            const lastItem = assetHistory[assetHistory.length - 1];
            setCurrentItem(lastItem);
            setPriceDifference(ChartUtil.solvePricesDifference(assetHistory[0].priceUsd, lastItem.priceUsd));
        }
    };

    const getTicks = useCallback(() => {
        return ChartUtil.getChartFields(assetHistory)
            .filter((_, index) => index % 2 === 0)
            .map((item) => item.name);
    }, [assetHistory]);

    return (
        <ResponsiveContainer width="100%" height={400}>
            <AreaChart
                data={ChartUtil.getChartFields(assetHistory)}
                margin={styles.chart}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <XAxis
                    dataKey="name"
                    axisLine={false}
                    style={styles.horizontal}
                    ticks={getTicks()}
                    tickMargin={16}
                    tickLine={false}
                />
                <YAxis domain={ChartUtil.getChartIntervalY(assetHistory)} axisLine={false} tick={false} width={0} />
                <Tooltip content={<ChartTooltip date={ChartUtil.getTooltipDate(currentItem?.date) as string} />} />
                <defs>
                    <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={bluePrimary} stopOpacity={0.2} />
                        <stop offset="100%" stopColor={bluePrimary} stopOpacity={0} />
                    </linearGradient>
                </defs>
                <Area
                    type="monotone"
                    dataKey="price"
                    stroke={bluePrimary}
                    activeDot={{ r: 6 }}
                    dot={{ r: 0 }}
                    fill="url(#fillGradient)"
                    strokeWidth={2}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};
