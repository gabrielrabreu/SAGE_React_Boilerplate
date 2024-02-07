import React from "react";
import classnames from "classnames";

import styles from "./GridItem.module.scss";

interface GridItemProps {
  xs?: { col: number; row: number }; // Object for extra small devices to specify both columns and rows
  sm?: { col: number; row: number }; // Object for small devices to specify both columns and rows
  md?: { col: number; row: number }; // Object for medium devices to specify both columns and rows
  lg?: { col: number; row: number }; // Object for large devices to specify both columns and rows
  xl?: { col: number; row: number }; // Object for extra large devices to specify both columns and rows
  children?: React.ReactNode;
}

const GridItem: React.FC<GridItemProps> = ({
  xs,
  sm,
  md,
  lg,
  xl,
  children,
}) => {
  const xsCols = xs?.col || 1;
  const xsRows = xs?.row || 1;
  const smCols = sm?.col || xsCols;
  const smRows = sm?.row || xsRows;
  const mdCols = md?.col || smCols;
  const mdRows = md?.row || smRows;
  const lgCols = lg?.col || mdCols;
  const lgRows = lg?.row || mdRows;
  const xlCols = xl?.col || lgCols;
  const xlRows = xl?.row || lgRows;

  return (
    <div
      className={classnames(
        styles["grid-item"],
        styles[`cols-xs-${xsCols}`],
        styles[`rows-xs-${xsRows}`],
        styles[`cols-sm-${smCols}`],
        styles[`rows-sm-${smRows}`],
        styles[`cols-md-${mdCols}`],
        styles[`rows-md-${mdRows}`],
        styles[`cols-lg-${lgCols}`],
        styles[`rows-lg-${lgRows}`],
        styles[`cols-xl-${xlCols}`],
        styles[`rows-xl-${xlRows}`]
      )}
    >
      {children}
    </div>
  );
};

export default GridItem;
